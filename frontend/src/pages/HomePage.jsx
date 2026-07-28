import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Star, ArrowRight, Globe, TrendingUp, Shield } from 'lucide-react'
import SearchBar from '../components/search/SearchBar'
import UniversityCard from '../components/university/UniversityCard'
import { CardSkeleton } from '../components/common/UI'
import SEO from '../components/seo/SEO'
import { useScrollTop } from '../hooks'
import api from '../lib/api'

const COUNTRIES = [
  { name: 'Canada', flag: '🇨🇦', color: '#DC2626', desc: 'Study in the Great White North', path: '/country/canada', stats: '20+ Institutions' },
  { name: 'USA', flag: '🇺🇸', color: '#2563EB', desc: 'World-class education', path: '/country/usa', stats: '49 Institutions', disabled: false },
  { name: 'UK', flag: '🇬🇧', color: '#7C3AED', desc: 'Historic prestige & innovation', path: '/country/uk', stats: '20 Institutions', disabled: false },
  { name: 'Australia', flag: '🇦🇺', color: '#D97706', desc: 'Top-ranked universities', path: '/country/australia', stats: '20 Institutions', disabled: false },
  { name: 'Germany', flag: '🇩🇪', color: '#374151', desc: 'Engineering excellence', path: '/country/germany', stats: '20 Institutions', disabled: false },
  { name: 'France', flag: '🇫🇷', color: '#051440', desc: 'Academic prestige & culture', path: '/country/france', stats: '20 Institutions', disabled: false },
  { name: 'Netherlands', flag: '🇳🇱', color: '#1e3a8a', desc: 'Innovation & research hubs', path: '/country/netherlands', stats: '20 Institutions', disabled: false },
  { name: 'New Zealand', flag: '🇳🇿', color: '#0b2265', desc: 'Stunning landscapes & top education', path: '/country/new-zealand', stats: '19 Institutions', disabled: false },
  { name: 'Ireland', flag: '🇮🇪', color: '#059669', desc: 'EU access & tech hubs', path: '/country/ireland', stats: '19 Institutions', disabled: false },
  { name: 'Singapore', flag: '🇸🇬', color: '#991b1b', desc: 'Innovation & global commerce', path: '/country/singapore', stats: '22 Institutions', disabled: false },
  { name: 'Russia', flag: '🇷🇺', color: '#1e3a8a', desc: 'Siberian research & medical excellence', path: '/country/russia', stats: '19 Institutions', disabled: false },
  { name: 'South Korea', flag: '🇰🇷', color: '#0f172a', desc: 'Technological leadership & research', path: '/country/south-korea', stats: '20 Institutions', disabled: false },
]

const STATS = [
  { icon: GraduationCap, label: 'Universities & Colleges', value: '250+' },
  { icon: Globe, label: 'Countries Covered', value: '12+' },
  { icon: Star, label: 'Scholarships Listed', value: '30+' },
]

export default function HomePage() {
  useScrollTop()
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/institutions', { params: { limit: 6 } })
      .then((r) => setFeatured(r.data.data || []))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <SEO
  title="Study Abroad Universities | Compare 250+ Universities Worldwide | Wellyura"
  description="Compare 250+ universities across Canada, USA, UK, Australia, Germany, France, Singapore, Ireland and more. Find tuition fees, scholarships, acceptance rates, rankings, courses, admission requirements and application deadlines."
  keywords="study abroad, universities, international universities, university rankings, scholarships, tuition fees, admission requirements, acceptance rates, degree programs, study in Canada, study in USA, study in UK, study in Australia, study abroad scholarships"
  url="https://www.wellyura.com"
  image="https://www.wellyura.com/og_preview.png"
  schema={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.wellyura.com/#website",
        "url": "https://www.wellyura.com",
        "name": "Wellyura",
        "description": "International University Directory",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.wellyura.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.wellyura.com/#webpage",
        "url": "https://www.wellyura.com",
        "name": "Study Abroad Universities | Compare 250+ Universities Worldwide",
        "isPartOf": {
          "@id": "https://www.wellyura.com/#website"
        },
        "description": "Compare universities, tuition fees, scholarships, rankings, admission requirements, acceptance rates and application deadlines worldwide."
      },
      {
        "@type": "Organization",
        "@id": "https://www.wellyura.com/#organization",
        "name": "Wellyura",
        "url": "https://www.wellyura.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.wellyura.com/images/wellyuralogo_old.png"
        },
        "sameAs": [
          // "https://www.linkedin.com/company/wellyura",
          "https://www.instagram.com/_wellyura"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.wellyura.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I choose the right university?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compare tuition fees, university rankings, scholarships, admission requirements, acceptance rates and available degree programs to find the best university for your goals."
            }
          },
          {
            "@type": "Question",
            "name": "Which countries offer scholarships for international students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Countries including Canada, USA, UK, Australia, Germany, Ireland, France, Singapore and New Zealand offer scholarships for eligible international students."
            }
          },
          {
            "@type": "Question",
            "name": "Can I compare universities on Wellyura?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wellyura allows you to compare universities based on tuition fees, rankings, scholarships, admission requirements, degree programs and more."
            }
          },
          {
            "@type": "Question",
            "name": "Is Wellyura free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wellyura is completely free for students to search, compare and explore universities worldwide."
            }
          }
        ]
      }
    ]
  }}
/>

      <div>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="hero"
          aria-labelledby="homepage-title"
        >
          <div className="hero-bg" />
          <div className="container hero-content">
            <h1
              id="homepage-title"
              className="h1 hero-title animate-fadeUp"
              style={{ animationDelay: '.08s' }}
            >
              Find Your Dream Study Abroad University
            <br />
            <span className="hero-title-accent">
            Compare Universities in Canada, USA, UK, Australia & More
            </span>
            </h1>
            <p
              className="body-lg hero-sub animate-fadeUp"
              style={{ animationDelay: '.16s' }}
            >
              Compare tuition fees, scholarships, university rankings, acceptance rates, admission requirements, application deadlines, and degree programs from over 250 universities across Canada, USA, UK, Australia, Germany, France, Singapore, Ireland, New Zealand, and more.
            </p>
            <div className="hero-search animate-fadeUp" style={{ animationDelay: '.24s' }}>
              <SearchBar
                large
                autoNavigate
                placeholder="Search universities, scholarships, countries or programs..."
              />
            </div>
            <div className="hero-tags animate-fadeUp" style={{ animationDelay: '.32s' }}>
              {['Computer Science', 'MBA', 'Engineering', 'Nursing', 'Business Analytics'].map((t) => (
                <Link key={t} to={`/search?q=${encodeURIComponent(t)}`} className="hero-tag">{t}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats bar ────────────────────────────────────────── */}
        <section className="stats-bar">
          <div className="container">
            <div className="stats-grid">
              {STATS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="stat-item">
                  <div className="stat-icon"><Icon size={20} /></div>
                  <div>
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Country Cards ─────────────────────────────────────── */}
        <section className="section container">
          <div className="section-title">
            <h2 className="h2">Explore by Country</h2>
          </div>
          <div className="countries-grid">
            {COUNTRIES.map((c) => (
              <Link
                key={c.name}
                to={c.disabled ? '#' : c.path}
                className={`country-card${c.disabled ? ' disabled' : ''}`}
                onClick={(e) => c.disabled && e.preventDefault()}
              >
                <div className="country-flag">{c.flag}</div>
                <div className="country-info">
                  <h3 className="country-name">{c.name}</h3>
                  <p className="country-desc">{c.desc}</p>
                  <span className="country-stats">{c.stats}</span>
                </div>
                {!c.disabled && <ArrowRight size={18} className="country-arrow" />}
              </Link>
            ))}
          </div>
        </section>

        {/* ── Featured Universities ─────────────────────────────── */}
        <section className="section section-alt">
          <div className="container">
            <div className="flex-between" style={{ marginBottom: 32 }}>
              <h2 className="h2">Featured Institutions</h2>
              <Link to="/search" className="btn btn-secondary btn-sm">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid-cards">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
                : featured.map((inst) => <UniversityCard key={inst.id} inst={inst} />)
              }
            </div>
          </div>
        </section>

        {/* ── Why Wellyura ───────────────────────────────────────── */}
        <section className="section container">
          <div className="section-title"><h2 className="h2">Why Choose Wellyura?</h2></div>
          <div className="grid-3">
            {[
              { icon: Shield, title: 'Verified Data', desc: 'All institution data is sourced from official university websites and updated for 2025–26 admissions.' },
              { icon: Star, title: 'Scholarship Listings', desc: 'Discover available scholarships at every institution, including amounts, criteria, and renewal terms.' },
              { icon: TrendingUp, title: 'Program Insights', desc: 'Explore hundreds of UG and PG programs with fees, requirements, and career outcomes.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="why-card card">
                <div className="why-icon"><Icon size={22} /></div>
                <h3 className="h3" style={{ marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '.9rem', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="section-title">
            <h2 className="h2">
              Why Study Abroad with Wellyura?
            </h2>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p
              style={{
                lineHeight: 1.9,
                color: "var(--gray-600)",
                marginBottom: 20,
              }}
            >
              Wellyura is a comprehensive international university directory
              designed to help students compare universities across Canada,
              USA, UK, Australia, Germany, France, Ireland, Singapore,
              New Zealand and many other countries.
            </p>

            <p
              style={{
              lineHeight: 1.9,
              color: "var(--gray-600)",
              marginBottom: 20,
            }}
          >
             Compare tuition fees, scholarships, admission requirements,
            university rankings, acceptance rates, degree programs,
            campus information and application deadlines to confidently
            choose the university that best matches your academic goals.
          </p>

          <p
            style={{
            lineHeight: 1.9,
            color: "var(--gray-600)",
          }}
        >
          Whether you're looking for undergraduate,
          postgraduate or research opportunities,
          Wellyura simplifies the entire university
          discovery process by bringing trusted
          information together in one place.
        </p>
      </div>
    </section>

    <section className="section container">
      <div className="section-title">
        <h2 className="h2">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid-2">
        <div className="card" style={{ padding: 24 }}>
          <h3>How do I choose the right university?</h3>
          <p>
            Compare tuition fees, rankings, scholarships,
            admission requirements and available programs
            to find the best fit.
          </p>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h3>Which countries offer scholarships?</h3>
          <p>
            Canada, USA, UK, Australia, Germany,
            Ireland and several other countries
            offer scholarships for international students.
          </p>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h3>Can I compare multiple universities?</h3>
          <p>
            Yes. Wellyura lets you compare universities
            across countries using fees,
            rankings and admissions information.
          </p>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h3>Is Wellyura free?</h3>
          <p>
            Yes. You can search and compare universities
            completely free.
          </p>
        </div>
      </div>
    </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="cta-section">
          <div className="container cta-inner">
            <h2 className="h2" style={{ color: 'white', marginBottom: 12 }}>Start Your International Journey</h2>
            <p style={{ color: 'rgba(255,255,255,.75)', marginBottom: 32, fontSize: '1.05rem' }}>
              Create a free account to save universities, track your applications, and get personalized recommendations.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register" className="btn btn-lg" style={{ background: 'white', color: 'var(--blue-700)' }}>
                Get Started Free
              </Link>
              <Link to="/search" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: 'white', border: '1.5px solid rgba(255,255,255,.4)' }}>
                Browse All Universities <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <style>{`
        /* Hero */
        .hero {
          position: relative; min-height: 580px;
          display: flex; align-items: center; padding: 120px 0 80px;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--blue-950) 0%, var(--blue-800) 50%, var(--blue-700) 100%);
        }
        .hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(32,112,200,.4) 0%, transparent 60%);
        }
        .hero-content {
          position: relative; z-index: 1; text-align: center; max-width: 780px; margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2);
          color: rgba(255,255,255,.9); padding: 6px 16px; border-radius: var(--radius-full);
          font-size: .8125rem; font-weight: 500; margin-bottom: 24px; backdrop-filter: blur(8px);
        }
        .hero-title { color: white; margin-bottom: 20px; }
        .hero-title-accent { color: var(--blue-300); }
        .hero-sub { color: rgba(255,255,255,.75); margin-bottom: 36px; max-width: 580px; margin-left: auto; margin-right: auto; }
        .hero-search { max-width: 640px; margin: 0 auto 24px; }
        .hero-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .hero-tag {
          padding: 5px 14px; border-radius: var(--radius-full);
          background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2);
          color: rgba(255,255,255,.8); font-size: .8125rem; text-decoration: none;
          transition: all var(--transition); backdrop-filter: blur(4px);
        }
        .hero-tag:hover { background: rgba(255,255,255,.2); color: white; }
        /* Stats */
        .stats-bar { background: white; border-bottom: 1px solid var(--gray-100); padding: 28px 0; }
        .stats-grid { display: flex; justify-content: center; gap: 64px; flex-wrap: wrap; }
        .stat-item { display: flex; align-items: center; gap: 14px; }
        .stat-icon {
          width: 44px; height: 44px; border-radius: var(--radius-md);
          background: var(--blue-50); color: var(--blue-600);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .stat-value { font-size: 1.4rem; font-weight: 700; font-family: var(--font-display); color: var(--gray-900); line-height: 1.1; }
        .stat-label { font-size: .78rem; color: var(--gray-500); }
        /* Countries */
        .section { padding: 72px 0; }
        .section-alt { background: var(--gray-50); padding: 72px 0; }
        .countries-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .country-card {
          display: flex; align-items: center; gap: 16px; padding: 20px 22px;
          background: white; border-radius: var(--radius-lg); border: 1.5px solid var(--gray-100);
          box-shadow: var(--shadow-sm); text-decoration: none; transition: all var(--transition-slow);
          position: relative; overflow: hidden;
        }
        .country-card:not(.disabled):hover { border-color: var(--blue-200); box-shadow: var(--shadow-lg); transform: translateY(-2px); }
        .country-card.disabled { opacity: .55; cursor: default; }
        .country-flag { font-size: 2.4rem; flex-shrink: 0; }
        .country-info { flex: 1; min-width: 0; }
        .country-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 600; color: var(--gray-900); margin-bottom: 3px; }
        .country-desc { font-size: .8rem; color: var(--gray-500); margin-bottom: 6px; }
        .country-stats { font-size: .75rem; font-weight: 600; color: var(--blue-600); background: var(--blue-50); padding: 2px 8px; border-radius: var(--radius-full); }
        .country-arrow { color: var(--blue-400); flex-shrink: 0; transition: transform var(--transition); }
        .country-card:hover .country-arrow { transform: translateX(4px); }
        /* Why */
        .why-card { padding: 28px; display: flex; flex-direction: column; gap: 12px; }
        .why-icon {
          width: 48px; height: 48px; border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--blue-600), var(--blue-500));
          display: flex; align-items: center; justify-content: center;
          color: white; box-shadow: var(--shadow-blue);
        }
        /* CTA */
        .cta-section { background: linear-gradient(135deg, var(--blue-900), var(--blue-700)); padding: 80px 0; }
        .cta-inner { text-align: center; }
        @media (max-width: 1024px) { .countries-grid { grid-template-columns: repeat(2,1fr); } .stats-grid { gap: 32px; } }
        @media (max-width: 640px) { .countries-grid { grid-template-columns: 1fr; } .stats-grid { flex-direction: column; align-items: center; gap: 24px; } }
     `}</style>

      </div>
    </>
  )
}
