import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCap, MapPin, Star, ArrowRight, Globe, TrendingUp, Shield, Users } from 'lucide-react'
import SearchBar from '../components/search/SearchBar'
import UniversityCard from '../components/university/UniversityCard'
import { CardSkeleton } from '../components/common/UI'
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
  { name: 'Ireland', flag: '🇮🇪', color: '#059669', desc: 'EU access & tech hubs', path: '/search?country=Ireland', stats: 'Coming Soon', disabled: true },
]

const STATS = [
  { icon: GraduationCap, label: 'Universities & Colleges', value: '20+' },
  { icon: Globe,         label: 'Countries Covered',       value: '6+' },
  { icon: Star,          label: 'Scholarships Listed',      value: '50+' },
  { icon: Users,         label: 'Students Helped',          value: '1k+' },
]

export default function HomePage() {
  useScrollTop()
  const navigate = useNavigate()
  const [featured, setFeatured] = useState([])
  const [loading,  setLoading]  = useState(true)

  useEffect(() => {
    api.get('/institutions', { params: { limit: 6 } })
      .then((r) => setFeatured(r.data.data || []))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <h1 className="h1 hero-title animate-fadeUp" style={{ animationDelay: '.08s' }}>
            Find Your Perfect<br />
            <span className="hero-title-accent">University Abroad</span>
          </h1>
          <p className="body-lg hero-sub animate-fadeUp" style={{ animationDelay: '.16s' }}>
            Explore top universities and colleges across Canada and beyond. Compare programs, scholarships, and fees — all in one place.
          </p>
          <div className="hero-search animate-fadeUp" style={{ animationDelay: '.24s' }}>
            <SearchBar large autoNavigate placeholder="Search universities, programs, cities, provinces…" />
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
            <Link to="/country/canada" className="btn btn-secondary btn-sm">
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
            { icon: Star,   title: 'Scholarship Listings', desc: 'Discover available scholarships at every institution, including amounts, criteria, and renewal terms.' },
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
            <Link to="/country/canada" className="btn btn-lg" style={{ background: 'rgba(255,255,255,.15)', color: 'white', border: '1.5px solid rgba(255,255,255,.4)' }}>
              Browse Canada <ArrowRight size={16} />
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
        .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
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
        @media (max-width: 1024px) { .countries-grid { grid-template-columns: repeat(2,1fr); } .stats-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px) { .countries-grid { grid-template-columns: 1fr; } .stats-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
