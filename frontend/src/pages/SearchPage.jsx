import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import UniversityCard from '../components/university/UniversityCard'
import SearchBar from '../components/search/SearchBar'
import FilterSidebar from '../components/search/FilterSidebar'
import { CardSkeleton, Pagination, EmptyState } from '../components/common/UI'
import { useDebounce, useScrollTop } from '../hooks'
import api from '../lib/api'

export default function SearchPage() {
  useScrollTop()
  const [searchParams, setSearchParams] = useSearchParams()

  const [results,  setResults]  = useState([])
  const [total,    setTotal]    = useState(0)
  const [pages,    setPages]    = useState(1)
  const [loading,  setLoading]  = useState(false)
  const [searched, setSearched] = useState(false)
  const [provinces, setProvinces] = useState([])
  const [cities, setCities]       = useState([])

  const [filters, setFilters] = useState({
    q:          searchParams.get('q') || '',
    country:    searchParams.get('country') || '',
    province:   searchParams.get('province') || '',
    city:       searchParams.get('city') || '',
    type:       searchParams.get('type') || '',
    level:      searchParams.get('level') || '',
    scholarship: searchParams.get('scholarship') === 'true' ? true : undefined,
    page: 1,
  })

  const debouncedQ = useDebounce(filters.q, 400)

  const filtersKey = JSON.stringify({ ...filters, q: debouncedQ })

  useEffect(() => {
    if (!debouncedQ && !filters.country && !filters.province && !filters.city && !filters.type && !filters.level) {
      setSearched(false); return
    }
    setLoading(true)
    setSearched(true)
    api.get('/search', {
      params: {
        q: debouncedQ || undefined,
        country: filters.country || undefined,
        province: filters.province || undefined,
        city: filters.city || undefined,
        type: filters.type || undefined,
        level: filters.level || undefined,
        scholarship: filters.scholarship,
        page: filters.page,
        limit: 12,
      }
    }).then((r) => {
      setResults(r.data.institutions || [])
      setTotal(r.data.total || 0)
      setPages(r.data.total_pages || 1)
      setProvinces(r.data.filters?.provinces || [])
      setCities(r.data.filters?.cities || [])
    }).finally(() => setLoading(false))
  }, [filtersKey])

  const resetFilters = () => setFilters({ q: '', country: '', province: '', city: '', type: '', level: '', scholarship: undefined, page: 1 })

  return (
    <div className="page-pad">
      {/* ── Page header ─── */}
      <div className="search-page-hero">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="h1" style={{ marginBottom: 12 }}>Global University Search</h1>
          <p style={{ color: 'var(--gray-500)', marginBottom: 32, fontSize: '1.05rem' }}>
            Search across universities, colleges, programs and scholarships worldwide.
          </p>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <SearchBar
              large
              value={filters.q}
              onChange={(q) => setFilters((f) => ({ ...f, q, page: 1 }))}
              placeholder="Search by university, program, city, province…"
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 48 }}>
        {/* Quick filter pills */}
        <div className="search-quick-filters">
          <span style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--gray-500)', marginRight: 8 }}>Quick:</span>
          {[
            { label: 'All Canada', payload: { country: 'Canada', province: '', city: '' } },
            { label: 'All USA', payload: { country: 'USA', province: '', city: '' } },
            { label: 'All UK', payload: { country: 'UK', province: '', city: '' } },
            { label: 'All Australia', payload: { country: 'Australia', province: '', city: '' } },
            { label: 'All Germany', payload: { country: 'Germany', province: '', city: '' } },
            { label: 'All France', payload: { country: 'France', province: '', city: '' } },
            { label: 'All Netherlands', payload: { country: 'Netherlands', province: '', city: '' } },
            { label: 'UG Programs', payload: { level: 'UG' } },
            { label: 'PG Programs', payload: { level: 'PG' } },
            { label: 'Scholarships', payload: { scholarship: true } },
          ].map(({ label, payload }) => (
            <button
              key={label}
              className="filter-chip-inline"
              onClick={() => setFilters((f) => ({ ...f, ...payload, page: 1 }))}
            >
              {label}
            </button>
          ))}
        </div>

        {!searched ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--gray-400)' }}>
            <Search size={64} style={{ margin: '0 auto 20px', opacity: .3 }} />
            <p style={{ fontSize: '1.1rem' }}>Start searching to explore institutions</p>
          </div>
        ) : (
          <div className="search-layout">
            {/* Sidebar filters */}
            <div className="sidebar-col">
              <FilterSidebar
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                provinces={provinces}
                cities={cities}
              />
            </div>

            {/* Results */}
            <div className="results-col">
              <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '.875rem', color: 'var(--gray-600)', fontWeight: 500 }}>
                  {loading ? '…' : `${total} result${total !== 1 ? 's' : ''}`}
                </span>
              </div>

              {loading ? (
                <div className="grid-cards">{Array.from({ length: 9 }).map((_, i) => <CardSkeleton key={i} />)}</div>
              ) : results.length === 0 ? (
                <EmptyState
                  icon={Search}
                  title="No results found"
                  message="Try different keywords or remove some filters."
                  action={<button className="btn btn-secondary" onClick={resetFilters}>Clear Filters</button>}
                />
              ) : (
                <>
                  <div className="grid-cards">
                    {results.map((inst) => <UniversityCard key={inst.id} inst={inst} />)}
                  </div>
                  <Pagination page={filters.page} totalPages={pages} onChange={(p) => setFilters((f) => ({ ...f, page: p }))} />
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .search-page-hero {
          background: var(--gray-50); border-bottom: 1px solid var(--gray-100);
          padding: 56px 0 48px;
        }
        .search-quick-filters {
          display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;
        }
        .filter-chip-inline {
          padding: 6px 14px; border-radius: var(--radius-full);
          border: 1.5px solid var(--gray-200); background: white;
          font-size: .8125rem; font-weight: 500; color: var(--gray-600);
          transition: all var(--transition); cursor: pointer;
        }
        .filter-chip-inline:hover { border-color: var(--blue-300); color: var(--blue-600); background: var(--blue-50); }
        .search-layout { display: grid; grid-template-columns: 260px 1fr; gap: 28px; }
        @media (max-width: 900px) { .search-layout { grid-template-columns: 1fr; } .sidebar-col { display: none; } }
      `}</style>
    </div>
  )
}
