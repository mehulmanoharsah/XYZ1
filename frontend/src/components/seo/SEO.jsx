import { Helmet } from "react-helmet-async";

export default function SEO({
    title,
    description,
    keywords = "",
    image = "https://www.wellyura.com/images/wellyuralogo_old.png",
    imageAlt = "Wellyura",
    url = "https://www.wellyura.com",
    type = "website",
    author = "Wellyura",
    schema = null,
}) {

    return (
        <Helmet>
            {/* Primary SEO */}
            <title>{title}</title>

            <meta name="description" content={description} />

            {keywords && (
                <meta
                    name="keywords"
                    content={keywords}
                />
            )}

            <meta
                name="robots"
                content="index,follow,max-image-preview:large"
            />

            <meta
                name="googlebot"
                content="index,follow"
            />

            <link
                rel="canonical"
                href={url}
            />

            {/* Open Graph */}

            <meta property="og:type" content={type} />

            <meta property="og:title" content={title} />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:image"
                content={image}
            />
            <meta
                property="og:image:alt"
                content={imageAlt}
            />

            <meta
            property="og:image:width"
            content="1200"
            />

            <meta
            property="og:image:height"
            content="630"
            />

            <meta
                property="og:url"
                content={url}
            />

            <meta
                property="og:site_name"
                content="Wellyura"
            />
            <meta
                property="og:locale"
                content="en_US"
            />

            {/* Twitter */}

            <meta
                name="twitter:card"
                content="summary_large_image"
            />
            <meta
                name="twitter:site"
                content="@Wellyura"
            />
            

            <meta
                name="twitter:title"
                content={title}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />
            <meta
                name="twitter:image:alt"
                content={imageAlt}
            />

            <meta
                name="twitter:url"
                content={url}
            />

            <meta
                name="author"
                content={author}
            />

            {/* JSON-LD */}

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}