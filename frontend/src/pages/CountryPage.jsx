import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { MapPin, Building2 } from 'lucide-react'
import UniversityCard from '../components/university/UniversityCard'
import FilterSidebar from '../components/search/FilterSidebar'
import SearchBar from '../components/search/SearchBar'
import { CardSkeleton, Pagination, EmptyState, Breadcrumb } from '../components/common/UI'
import { useDebounce, useScrollTop, useDocumentMetadata, useStructuredData } from '../hooks'
import api from '../lib/api'

const COUNTRY_BANNERS = {
  canada: {
    label: 'Canada',
    flag: '🇨🇦',
    tagline: 'World-class education in the Great White North',
    desc: "Explore top universities and colleges across Canada's provinces, offering globally recognized degrees and excellent pathways to permanent residency.",
    bg: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #1e3a5f 100%)',
  },
  germany: {
    label: 'Germany',
    flag: '🇩🇪',
    tagline: 'Tuition-Free World-Class Education',
    desc: 'Explore top-ranked German public universities and business schools offering engineering, computer science, and business management with low or no tuition fees.',
    bg: 'linear-gradient(135deg, #000000 0%, #d11919 50%, #ffd600 100%)',
  },
  france: {
    label: 'France',
    flag: '🇫🇷',
    tagline: 'Academic Prestige, Innovation & Culture',
    desc: 'Explore top French business schools and universities, offering world-renowned programs, cutting-edge research facilities, and excellent post-study career opportunities in Europe.',
    bg: 'linear-gradient(135deg, #020b24 0%, #1e293b 50%, #7f1d1d 100%)',
  },
  netherlands: {
    label: 'Netherlands',
    flag: '🇳🇱',
    tagline: 'Innovation, Research & Open-Minded Culture',
    desc: 'Explore top Dutch research and applied sciences universities, offering world-class technical education, high graduate employability, and English-taught programs in a highly innovative European environment.',
    bg: 'linear-gradient(135deg, #0b1d3a 0%, #1e293b 50%, #7c1212 100%)',
  },
  usa: {
    label: 'USA',
    flag: '🇺🇸',
    tagline: 'World-Class Education & Ivy League Standards',
    desc: 'Explore top-ranked American universities, offering cutting-edge research facilities, outstanding internship programs, and global career opportunities.',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #ef4444 100%)',
  },
  australia: {
    label: 'Australia',
    flag: '🇦🇺',
    tagline: 'World-Class Education & Vibrant Campus Life',
    desc: 'Explore top Australian universities offering high placement rates, hands-on professional placements, and post-study work opportunities in beautiful coastal cities.',
    bg: 'linear-gradient(135deg, #056839 0%, #13a851 50%, #ffcd00 100%)',
  },
  uk: {
    label: 'UK',
    flag: '🇬🇧',
    tagline: 'Historic Prestige & World-Leading Research',
    desc: 'Explore top universities and colleges across the United Kingdom, from historic campus settings to cutting-edge metropolitan research hubs with strong industry ties.',
    bg: 'linear-gradient(135deg, #0b2265 0%, #00247d 40%, #cf142b 100%)',
  },
  'new-zealand': {
    label: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'World-Class Education & Stunning Natural Beauty',
    desc: 'Explore top New Zealand universities and institutes of technology offering high-quality education, hands-on learning, and excellent post-study work opportunities.',
    bg: 'linear-gradient(135deg, #0b2265 0%, #1a365d 50%, #d11919 100%)',
  },
  'new zealand': {
    label: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'World-Class Education & Stunning Natural Beauty',
    desc: 'Explore top New Zealand universities and institutes of technology offering high-quality education, hands-on learning, and excellent post-study work opportunities.',
    bg: 'linear-gradient(135deg, #0b2265 0%, #1a365d 50%, #d11919 100%)',
  },
  ireland: {
    label: 'Ireland',
    flag: '🇮🇪',
    tagline: 'Vibrant Innovation, Rich Culture & EU Access',
    desc: 'Explore top Irish universities and technological institutes known for research excellence, close ties to global tech and pharma hubs, and supportive post-study work paths.',
    bg: 'linear-gradient(135deg, #0d5a2d 0%, #b45309 100%)',
  },
  singapore: {
    label: 'Singapore',
    flag: '🇸🇬',
    tagline: 'Global Hub of Technology, Innovation & Academic Rigour',
    desc: 'Explore top-tier Singaporean universities and polytechnics renowned for science, technology, business management, and high-impact research in the heart of Southeast Asia.',
    bg: 'linear-gradient(135deg, #991b1b 0%, #450a0a 100%)',
  },
  russia: {
    label: 'Russia',
    flag: '🇷🇺',
    tagline: 'Leading Classical Education, Scientific Innovation & Affordable Excellence',
    desc: 'Discover prestigious Russian federal and state universities offering globally recognized degrees in medicine, aerospace, nuclear science, and classical engineering fields.',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #991b1b 100%)',
  },
  'south-korea': {
    label: 'South Korea',
    flag: '🇰🇷',
    tagline: 'Global Leader in High-Tech Innovation, K-Culture & Academic Prestige',
    desc: 'Explore top South Korean research institutes and universities renowned for cutting-edge engineering, computing, biotechnology, and business administration programs.',
    bg: 'linear-gradient(135deg, #1e3a8a 0%, #8b1c1c 100%)',
  },
}

export default function CountryPage() {
  useScrollTop()
  const { countryName } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const [institutions, setInstitutions] = useState([])
  const [total,        setTotal]        = useState(0)
  const [totalPages,   setTotalPages]   = useState(1)
  const [provinces,    setProvinces]    = useState([])
  const [cities,       setCities]       = useState([])
  const [loading,      setLoading]      = useState(true)

  const [filters, setFilters] = useState({
    q:          searchParams.get('q') || '',
    province:   searchParams.get('province') || '',
    city:       searchParams.get('city') || '',
    type:       searchParams.get('type') || '',
    scholarship: undefined,
    page: 1,
  })

  const debouncedQ = useDebounce(filters.q, 400)

  const banner = COUNTRY_BANNERS[countryName?.toLowerCase()] || {
    label: countryName ? countryName.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '',
    flag: '🌍',
    tagline: 'Explore universities',
    desc: `Discover top education pathways, tuition fees, scholarships, and academic programs in ${countryName}.`,
    bg: 'linear-gradient(135deg, var(--blue-900), var(--blue-700))',
  }

  const pageTitle = banner.label ? `Study in ${banner.label} — Top Universities & Colleges | Wellyura` : 'Study Abroad | Wellyura'
  const pageDesc = banner.desc || `Compare tuition fees, scholarships, eligibility requirements, and student life at top universities in ${banner.label} on Wellyura.`
  
  useDocumentMetadata(pageTitle, pageDesc)

  const countrySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Top Universities and Colleges in ${banner.label}`,
    "description": banner.desc,
    "url": window.location.href,
    "itemListElement": institutions.slice(0, 10).map((inst, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${window.location.origin}/country/${countryName}/university/${inst.slug}`,
      "name": inst.name
    }))
  }
  useStructuredData(countrySchema)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    api.get(`/institutions/country/${countryName}`, {
      params: {
        q: debouncedQ || undefined,
        province: filters.province || undefined,
        city: filters.city || undefined,
        type: filters.type || undefined,
        scholarship: filters.scholarship,
        page: filters.page,
        limit: 12,
      },
    }).then((r) => {
      if (cancelled) return
      setInstitutions(r.data.data || [])
      setTotal(r.data.total || 0)
      setTotalPages(r.data.total_pages || 1)
      setProvinces(r.data.filters?.provinces || [])
      setCities(r.data.filters?.cities || [])
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }).finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [countryName, debouncedQ, filters.province, filters.city, filters.type, filters.scholarship, filters.page])

  const resetFilters = () => setFilters({ q: '', province: '', city: '', type: '', scholarship: undefined, page: 1 })

  return (
    <div className="page-pad">
      {/* ── Banner ─────────────────────────────────────────────── */}
      <div className="country-hero" style={{ background: banner.bg }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: banner.label }]} />
          <div className="country-hero-content">
            <span className="country-hero-flag">{banner.flag}</span>
            <div>
              <h1 className="h1" style={{ color: 'white', marginBottom: 8, textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>Study in {banner.label}</h1>
              <p style={{ color: 'rgba(255,255,255,.9)', fontSize: '1.05rem', marginBottom: 24, textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>{banner.tagline}</p>
              <p style={{ color: 'rgba(255,255,255,.75)', maxWidth: 640, fontSize: '.9rem', lineHeight: 1.7, textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>{banner.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="container" style={{ marginTop: 40 }}>
        {/* Search bar */}
        <div style={{ marginBottom: 32 }}>
          <SearchBar
            value={filters.q}
            onChange={(q) => setFilters((f) => ({ ...f, q, page: 1 }))}
            placeholder={`Search ${banner.label} universities, programs…`}
          />
        </div>

        <div className="country-layout">
          {/* Sidebar */}
          <div className="sidebar-col">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={resetFilters}
              provinces={provinces}
              cities={cities}
            />
          </div>

          {/* Grid */}
          <div className="results-col">
            <div className="results-header">
              <span className="results-count">
                <Building2 size={16} />
                {loading ? '…' : `${total} institution${total !== 1 ? 's' : ''} found`}
              </span>
            </div>

            {loading ? (
              <div className="grid-cards">
                {Array.from({ length: 9 }).map((_, i) => <CardSkeleton key={i} />)}
              </div>
            ) : institutions.length === 0 ? (
              <EmptyState
                icon={Building2}
                title="No institutions found"
                message="Try adjusting your filters or search terms."
                action={<button className="btn btn-secondary" onClick={resetFilters}>Clear filters</button>}
              />
            ) : (
              <>
                <div className="grid-cards">
                  {institutions.map((inst) => <UniversityCard key={inst.id} inst={inst} />)}
                </div>
                <Pagination page={filters.page} totalPages={totalPages} onChange={(p) => setFilters((f) => ({ ...f, page: p }))} />
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .country-hero {
          padding: calc(var(--nav-h) + 40px) 0 52px;
          margin-top: calc(-1 * (var(--nav-h) + 32px));
          margin-bottom: 0;
        }
        .country-hero nav, .country-hero nav a, .country-hero nav span {
          color: rgba(255, 255, 255, 0.85) !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }
        .country-hero-content { display: flex; align-items: flex-start; gap: 24px; }
        .country-hero-flag { font-size: 4rem; flex-shrink: 0; }
        .country-layout { display: grid; grid-template-columns: 260px 1fr; gap: 28px; }
        .sidebar-col {}
        .results-col {}
        .results-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .results-count { display: flex; align-items: center; gap: 8px; font-size: .875rem; color: var(--gray-600); font-weight: 500; }
        @media (max-width: 900px) { .country-layout { grid-template-columns: 1fr; } .sidebar-col { display: none; } }
      `}</style>
    </div>
  )
}
