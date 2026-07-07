#!/usr/bin/env python3
"""
Sitemap Generator Script.
Queries the MongoDB database for Wellyura and generates a static sitemap.xml.
Saves it directly to the frontend/public folder so it's packaged in production builds.
"""
import os
import re
from dotenv import load_dotenv
from pymongo import MongoClient

def main():
    # Paths setup
    script_dir = os.path.dirname(os.path.abspath(__file__))
    backend_dir = os.path.abspath(os.path.join(script_dir, '..'))
    
    # Load environment variables
    env_path = os.path.join(backend_dir, '.env')
    load_dotenv(env_path)
    
    mongodb_url = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
    db_name = os.getenv("DB_NAME", "canadian_institutions")
    
    print(f"Connecting to database to generate sitemap...")
    print(f"  URL: {mongodb_url}")
    print(f"  DB:  {db_name}")
    
    try:
        client = MongoClient(mongodb_url, serverSelectionTimeoutMS=5000)
        # Ping test
        client.admin.command('ping')
        db = client[db_name]
    except Exception as e:
        print(f"❌ Error connecting to database: {e}")
        print("Please ensure MongoDB is running and configurations in backend/.env are correct.")
        return

    base_url = "https://wellyura.com"
    urls = []

    # 1. Static Pages
    static_paths = [
        "",
        "/search",
        "/faq",
        "/contact",
        "/privacy",
        "/terms"
    ]
    for path in static_paths:
        urls.append(
            f"  <url>\n"
            f"    <loc>{base_url}{path}</loc>\n"
            f"    <changefreq>daily</changefreq>\n"
            f"    <priority>1.0</priority>\n"
            f"  </url>"
        )

    # 2. Dynamic Country Pages
    countries = db.institutions.distinct("country")
    print(f"Found countries: {list(filter(None, countries))}")
    for country in countries:
        if country:
            country_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', country.lower().replace(" ", "-")))
            urls.append(
                f"  <url>\n"
                f"    <loc>{base_url}/country/{country_slug}</loc>\n"
                f"    <changefreq>weekly</changefreq>\n"
                f"    <priority>0.8</priority>\n"
                f"  </url>"
            )

    # 3. Dynamic Institution Detail Pages
    cursor = db.institutions.find({}, {"slug": 1, "country": 1})
    count = 0
    for inst in cursor:
        slug = inst.get("slug")
        country = inst.get("country")
        if slug and country:
            country_slug = re.sub(r'-+', '-', re.sub(r'[^a-z0-9-]', '', country.lower().replace(" ", "-")))
            urls.append(
                f"  <url>\n"
                f"    <loc>{base_url}/country/{country_slug}/university/{slug}</loc>\n"
                f"    <changefreq>weekly</changefreq>\n"
                f"    <priority>0.9</priority>\n"
                f"  </url>"
            )
            count += 1
            
    print(f"Added {count} institutions to sitemap.")

    # 4. Generate XML content
    xml_content = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls) +
        "\n</urlset>\n"
    )

    # Create destination dir if not exists
    output_dir = os.path.abspath(os.path.join(backend_dir, '..', 'frontend', 'public'))
    os.makedirs(output_dir, exist_ok=True)
    output_file = os.path.join(output_dir, 'sitemap.xml')

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(xml_content)

    print(f"✅ Success! Static sitemap written to {output_file}")

if __name__ == "__main__":
    main()
