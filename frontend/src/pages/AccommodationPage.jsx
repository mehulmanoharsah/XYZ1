import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, MapPin, Building2, ShieldCheck, Star, Compass, DollarSign, SlidersHorizontal, Eye } from 'lucide-react'
import api from '../lib/api'
import { useScrollTop, useDocumentMetadata } from '../hooks'

export default function AccommodationPage() {
  useScrollTop()
  useDocumentMetadata(
    'Student Accommodations & Hostels | Wellyura',
    'Explore international student accommodations, hostels, and residences near your university. Filter by budget, location, and key amenities.'
  )

  const [accommodations, setAccommodations] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [femaleOnly, setFemaleOnly] = useState(false)

  // UI state
  const [showFiltersMobile, setShowFiltersMobile] = useState(false)

  const fetchAccommodations = async (p = page) => {
    setLoading(true)
    try {
      const params = {
        page: p,
        limit: 9,
        q: searchQuery || undefined,
        country: country || undefined,
        city: city || undefined,
        type: type || undefined,
        price_max: priceMax ? parseInt(priceMax) : undefined,
        gender_policy: femaleOnly ? 'female_only' : undefined
      }
      const response = await api.get('/accommodations', { params })
      setAccommodations(response.data.data || [])
      setTotal(response.data.total || 0)
      setTotalPages(response.data.total_pages || 1)
    } catch (err) {
      console.error('Failed to fetch accommodations:', err)
    } finally {
      setLoading(false)
    }
  }

  // Trigger search on filter changes or manual search submission
  useEffect(() => {
    setPage(1)
    fetchAccommodations(1)
  }, [country, city, type, priceMax, femaleOnly])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    fetchAccommodations(1)
  }

  const handleResetFilters = () => {
    setSearchQuery('')
    setCountry('')
    setCity('')
    setType('')
    setPriceMax('')
    setFemaleOnly(false)
    setPage(1)
  }

  const formatCurrency = (amount, countryName) => {
    const symbol = countryName?.toLowerCase() === 'usa' ? 'USD' : countryName?.toLowerCase() === 'uk' ? 'GBP' : 'CAD'
    return `${symbol} $${amount}`
  }

  return (
    <div className="page-pad">
      {/* ── Top Header ────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, var(--blue-950) 0%, var(--blue-900) 100%)', padding: '60px 0', color: 'var(--white)', marginBottom: '40px', borderRadius: '0 0 var(--radius-xl) var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '60%', height: '200%', background: 'radial-gradient(circle, rgba(32,112,200,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <span className="label" style={{ color: 'var(--blue-300)', marginBottom: '8px', display: 'block' }}>Student Housing Center</span>
          <h1 className="h1" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', fontFamily: 'var(--font-display)' }}>Find Your Ideal Student Living</h1>
          <p className="body-lg" style={{ color: 'var(--gray-300)', maxWidth: '600px', marginBottom: '24px', marginInline: 'auto' }}>
            Browse secure, verified student hostels, studio apartments, and shared residences close to your university campus.
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="card-glass" style={{ display: 'flex', gap: '12px', padding: '8px', maxWidth: '750px', width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, paddingLeft: '8px' }}>
              <Search size={18} style={{ color: 'var(--blue-300)' }} />
              <input 
                type="text" 
                placeholder="Search hostels by name, university, city, keywords..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'var(--white)', width: '100%', outline: 'none', fontSize: '0.95rem' }} 
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '8px 24px' }}>Search</button>
          </form>
        </div>
      </section>

      {/* ── Main Layout ───────────────────────────────────────── */}
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', alignItems: 'start' }}>
          
          {/* ── Filters Sidebar (Desktop) ───────────────────────── */}
          <aside className="card animate-fadeUp" style={{ padding: '24px', position: 'sticky', top: '100px', background: 'var(--white)', border: '1px solid var(--gray-100)' }}>
            <div className="flex-between" style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                <SlidersHorizontal size={18} style={{ color: 'var(--blue-600)' }} />
                <span>Filters</span>
              </div>
              <button 
                onClick={handleResetFilters}
                style={{ background: 'none', border: 'none', color: 'var(--blue-600)', fontSize: '0.8rem', fontWeight: 500 }}
              >
                Clear All
              </button>
            </div>

            {/* Country Selector */}
            <div className="form-group">
              <label className="form-label">Country</label>
              <select className="input select" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">All Countries</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>

            {/* City Selector */}
            <div className="form-group">
              <label className="form-label">City</label>
              <select className="input select" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">All Cities</option>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Montreal">Montreal</option>
                <option value="Waterloo">Waterloo</option>
                <option value="Sault Ste. Marie">Sault Ste. Marie</option>
              </select>
            </div>

            {/* Type Selector */}
            <div className="form-group">
              <label className="form-label">Housing Type</label>
              <select className="input select" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">All Types</option>
                <option value="hostel">Hostel</option>
                <option value="residence_hall">Residence Hall</option>
                <option value="apartment">Apartment</option>
                <option value="homestay">Homestay / Co-living</option>
              </select>
            </div>

            {/* Price Max Slider / Input */}
            <div className="form-group">
              <label className="form-label">Max Budget (Monthly)</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>$</span>
                <input 
                  type="number" 
                  className="input" 
                  placeholder="e.g. 1000" 
                  value={priceMax} 
                  onChange={(e) => setPriceMax(e.target.value)} 
                />
              </div>
              <div style={{ marginTop: '8px', fontSize: '0.75rem', color: 'var(--gray-400)' }}>
                Shows results up to maximum price.
              </div>
            </div>

            {/* Girls Only Filter */}
            <div className="form-group" style={{ marginTop: '24px', borderTop: '1px solid var(--gray-100)', paddingTop: '16px' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: 0 }}>
                <input 
                  type="checkbox" 
                  checked={femaleOnly} 
                  onChange={(e) => setFemaleOnly(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#db2777' }}
                />
                <span style={{ fontSize: '0.925rem', color: 'var(--gray-800)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  🎀 Girls Only
                </span>
              </label>
            </div>
          </aside>

          {/* ── Main Content Area ───────────────────────────────── */}
          <div>
            {/* Header info */}
            <div className="flex-between" style={{ marginBottom: '24px' }}>
              <div style={{ color: 'var(--gray-600)', fontSize: '0.95rem' }}>
                Found <strong>{total}</strong> student housing option{total !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Listings Grid */}
            {loading ? (
              <div className="grid-cards">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="card skeleton" style={{ height: '350px', border: 'none' }} />
                ))}
              </div>
            ) : accommodations.length === 0 ? (
              <div className="card text-center" style={{ padding: '60px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Building2 size={48} style={{ color: 'var(--gray-300)', marginBottom: '16px' }} />
                <h3 className="h3" style={{ marginBottom: '8px' }}>No Accommodations Found</h3>
                <p className="text-muted" style={{ maxWidth: '400px', marginBottom: '24px' }}>
                  We couldn't find any housing options matching your current filters. Try relaxing your filters or search keywords.
                </p>
                <button className="btn btn-secondary" onClick={handleResetFilters}>Reset Filters</button>
              </div>
            ) : (
              <>
                <div className="grid-cards animate-fadeUp">
                  {accommodations.map((acc) => (
                    <div key={acc._id} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
                      
                      {/* Image header */}
                      <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: 'var(--gray-100)' }}>
                        <img 
                          src={acc.images?.[0] || 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80'} 
                          alt={acc.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                          <span className={`badge ${
                            acc.type === 'residence_hall' ? 'badge-blue' :
                            acc.type === 'hostel' ? 'badge-green' :
                            acc.type === 'apartment' ? 'badge-gold' : 'badge-gray'
                          }`}>
                            {acc.type === 'residence_hall' ? 'Residence Hall' :
                             acc.type === 'hostel' ? 'Hostel' :
                             acc.type === 'apartment' ? 'Apartment' : 'Co-living'}
                          </span>
                          {acc.gender_policy === 'female_only' && (
                            <span className="badge" style={{ background: '#fdf2f8', color: '#db2777', border: '1px solid #fbcfe8', fontWeight: 600 }}>
                              🎀 Girls Only
                            </span>
                          )}
                        </div>
                        <div style={{ position: 'absolute', bottom: '12px', left: '12px', zIndex: 2, background: 'rgba(10,22,40,0.75)', color: 'var(--white)', padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', backdropFilter: 'blur(4px)' }}>
                          <Star size={14} fill="var(--gold)" color="var(--gold)" />
                          <span>{acc.rating || '4.5'} ({acc.reviews_count || 10})</span>
                        </div>
                      </div>

                      {/* Info body */}
                      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--gray-500)', marginBottom: '8px' }}>
                          <MapPin size={14} />
                          <span>{acc.city}, {acc.province}</span>
                        </div>

                        <h3 className="h3" style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--blue-950)', lineClamp: 2, display: '-webkit-box', WebKitLineClamp: 2, WebKitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          <Link to={`/accommodations/${acc.slug}`} style={{ color: 'inherit' }}>
                            {acc.name}
                          </Link>
                        </h3>

                        {/* Nearest University Badge */}
                        {acc.nearby_universities?.[0] && (
                          <div style={{ background: 'var(--blue-50)', padding: '8px 12px', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--blue-700)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Compass size={14} />
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
                              <strong>{acc.nearby_universities[0].distance_km} km</strong> to {acc.nearby_universities[0].institution_name}
                            </span>
                            <span style={{ fontSize: '0.75rem', background: 'var(--white)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--blue-100)', textTransform: 'capitalize' }}>
                              {acc.nearby_universities[0].commute_mode}
                            </span>
                          </div>
                        )}

                        <div className="divider" style={{ margin: '12px 0' }} />

                        {/* Footer row with pricing & action */}
                        <div className="flex-between" style={{ marginTop: 'auto' }}>
                          <div>
                            <span className="caption" style={{ display: 'block', fontSize: '0.75rem' }}>From</span>
                            <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--blue-900)' }}>
                              {formatCurrency(acc.price_per_month_cad, acc.country)}
                            </span>
                            <span className="caption">/mo</span>
                          </div>

                          <Link to={`/accommodations/${acc.slug}`} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Eye size={14} />
                            <span>View details</span>
                          </Link>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex-center" style={{ gap: '8px', marginTop: '40px' }}>
                    <button 
                      className="btn btn-secondary btn-sm" 
                      disabled={page === 1}
                      onClick={() => { setPage(page - 1); fetchAccommodations(page - 1); }}
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button 
                        key={idx} 
                        className={`btn btn-sm ${page === idx + 1 ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ minWidth: '36px', padding: '6px' }}
                        onClick={() => { setPage(idx + 1); fetchAccommodations(idx + 1); }}
                      >
                        {idx + 1}
                      </button>
                    ))}
                    <button 
                      className="btn btn-secondary btn-sm" 
                      disabled={page === totalPages}
                      onClick={() => { setPage(page + 1); fetchAccommodations(page + 1); }}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  )
}
