import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Globe, MapPin, Heart, GraduationCap, DollarSign, Calendar,
  Users, Award, Briefcase, Phone, Mail, BookOpen, Star, CheckCircle, Building2
} from 'lucide-react'
import { useAuthStore, useFavoritesStore } from '../lib/store'
import { Breadcrumb, Skeleton, Spinner } from '../components/common/UI'
import { useScrollTop } from '../hooks'
import toast from 'react-hot-toast'
import api from '../lib/api'

function InfoRow({ icon: Icon, label, value }) {
  if (!value && value !== 0) return null
  return (
    <div className="info-row">
      <Icon size={15} className="info-icon" />
      <span className="info-label">{label}</span>
      <span className="info-value">{value}</span>
    </div>
  )
}

function ProgramCard({ prog }) {
  return (
    <div className="prog-card">
      <div className="prog-header">
        <span className={`badge ${prog.level === 'UG' ? 'badge-blue' : 'badge-gold'}`}>{prog.level}</span>
        <span className="badge badge-gray">{prog.duration_years ? `${prog.duration_years}yr` : prog.duration_months ? `${prog.duration_months}mo` : ''}</span>
      </div>
      <h4 className="prog-name">{prog.name}</h4>
      {prog.faculty && <p className="prog-faculty">{prog.faculty}</p>}
      {prog.annual_fee_cad && <div className="prog-fee"><DollarSign size={13} /> USD {Math.round(prog.annual_fee_cad * 0.73).toLocaleString()}/yr</div>}
      {prog.entry_roles?.length > 0 && (
        <div className="prog-roles">
          {prog.entry_roles.slice(0, 3).map((r, i) => <span key={i} className="prog-role">{r}</span>)}
        </div>
      )}
    </div>
  )
}

const TABS = [
  { id: 'overview',    label: 'Overview',      icon: BookOpen },
  { id: 'programs',   label: 'Programs',       icon: GraduationCap },
  { id: 'scholarships', label: 'Scholarships', icon: Award },
  { id: 'contacts',   label: 'Contacts',       icon: Phone },
  { id: 'campus',     label: 'Campus Life',    icon: Users },
]

export default function UniversityPage() {
  useScrollTop()
  const { slug, countryName } = useParams()
  const [inst,     setInst]     = useState(null)
  const [programs, setPrograms] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [progLoad, setProgLoad] = useState(false)
  const [error,    setError]    = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [progLevel, setProgLevel] = useState('')

  const { user }          = useAuthStore()
  const { toggle, isFav } = useFavoritesStore()

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    api.get(`/institutions/${slug}`)
      .then((r) => setInst(r.data))
      .catch((e) => setError(e.response?.data?.detail || 'Institution not found'))
      .finally(() => setLoading(false))
  }, [slug])

  useEffect(() => {
    if (!inst || activeTab !== 'programs') return
    setProgLoad(true)
    api.get(`/programs/${inst.id}`, { params: progLevel ? { level: progLevel } : {} })
      .then((r) => setPrograms(r.data))
      .finally(() => setProgLoad(false))
  }, [inst, activeTab, progLevel])

  const handleFav = async () => {
    if (!user) { toast.error('Sign in to save universities'); return }
    try { await toggle(inst); toast.success(isFav(inst.id) ? 'Removed' : 'Saved!') }
    catch (e) { toast.error('Error') }
  }

  if (loading) return <div className="page-pad container"><Spinner size={48} /></div>
  if (error)   return <div className="page-pad container" style={{ textAlign: 'center', paddingTop: 120 }}><h2>{error}</h2><Link to="/" className="btn btn-primary" style={{ marginTop: 24 }}>Go Home</Link></div>
  if (!inst)   return null

  const fav = isFav(inst.id)
  const country = countryName || inst.country?.toLowerCase()

  return (
    <div className="page-pad">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="uni-detail-hero">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: inst.country, href: `/country/${country}` },
            { label: inst.name },
          ]} />
          <div className="uni-detail-top">
            <div className="uni-detail-avatar">{inst.name?.split(' ').slice(0, 2).map(w => w[0]).join('')}</div>
            <div className="uni-detail-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span className={`badge ${inst.type === 'university' ? 'badge-blue' : 'badge-gold'}`}>
                  <GraduationCap size={11} />{inst.type}
                </span>
                {inst.country && <span className="badge badge-gray"><Globe size={11} />{inst.country}</span>}
              </div>
              <h1 className="h1 uni-detail-title">{inst.name}</h1>
              <div className="uni-detail-meta">
                {inst.city && <span><MapPin size={14} />{inst.city}{inst.province ? `, ${inst.province}` : ''}</span>}
                {inst.campuses?.length > 0 && <span><Building2 size={14} />{inst.campuses.length} Campus{inst.campuses.length > 1 ? 'es' : ''}</span>}
              </div>
            </div>
            <div className="uni-detail-actions">
              {inst.website && (
                <a href={inst.website} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <Globe size={15} /> Visit Website
                </a>
              )}
              <button onClick={handleFav} className={`btn${fav ? ' btn-danger' : ' btn-secondary'}`}>
                <Heart size={15} fill={fav ? 'currentColor' : 'none'} />
                {fav ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────── */}
      <div className="container" style={{ marginTop: 32 }}>
        <div className="tabs">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} className={`tab-btn${activeTab === id ? ' active' : ''}`} onClick={() => setActiveTab(id)}>
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {/* ── Overview ─── */}
        {activeTab === 'overview' && (
          <div className="tab-content animate-fadeIn">
            <div className="overview-grid">
              <div>
                <h3 className="h3" style={{ marginBottom: 16 }}>Quick Facts</h3>
                <div className="info-table">
                  <InfoRow icon={Building2}  label="Type"            value={inst.type} />
                  <InfoRow icon={DollarSign} label="Application Fee" value={inst.application_fee_cad ? `USD ${Math.round(inst.application_fee_cad * 0.73)}` : null} />
                  <InfoRow icon={MapPin}     label="Campuses"        value={inst.campuses?.join(' · ')} />
                  <InfoRow icon={Calendar}   label="Intakes"         value={inst.intakes?.join(', ')} />
                  <InfoRow icon={Globe}      label="Website"         value={inst.website} />
                </div>

                {/* Deadlines */}
                {inst.deadlines && Object.keys(inst.deadlines).length > 0 && (
                  <div style={{ marginTop: 28 }}>
                    <h3 className="h3" style={{ marginBottom: 14 }}>Key Deadlines</h3>
                    <div className="info-table">
                      {Object.entries(inst.deadlines).map(([k, v]) => (
                        <InfoRow key={k} icon={Calendar} label={k.replace(/_/g, ' ')} value={String(v)} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                {/* Eligibility */}
                {inst.eligibility && (
                  <div style={{ marginBottom: 28 }}>
                    <h3 className="h3" style={{ marginBottom: 14 }}>Eligibility</h3>
                    {inst.eligibility.undergraduate && (
                      <div className="elig-section">
                        <div className="elig-title"><GraduationCap size={14} /> Undergraduate</div>
                        {inst.eligibility.undergraduate.min_class12_percent && (
                          <p className="elig-row"><CheckCircle size={13} /> Min. Class XII: <strong>{inst.eligibility.undergraduate.min_class12_percent}%</strong></p>
                        )}
                        {inst.eligibility.undergraduate.english && Object.entries(inst.eligibility.undergraduate.english).map(([exam, req]) => (
                          <p key={exam} className="elig-row"><CheckCircle size={13} /> {exam}: <strong>{req}</strong></p>
                        ))}
                      </div>
                    )}
                    {inst.eligibility.postgraduate && (
                      <div className="elig-section" style={{ marginTop: 12 }}>
                        <div className="elig-title"><Award size={14} /> Postgraduate</div>
                        {inst.eligibility.postgraduate.min_percent && (
                          <p className="elig-row"><CheckCircle size={13} /> Min. %: <strong>{inst.eligibility.postgraduate.min_percent}%</strong></p>
                        )}
                        {inst.eligibility.postgraduate.min_gpa && (
                          <p className="elig-row"><CheckCircle size={13} /> Min. GPA: <strong>{inst.eligibility.postgraduate.min_gpa}</strong></p>
                        )}
                        {inst.eligibility.postgraduate.english && Object.entries(inst.eligibility.postgraduate.english).map(([exam, req]) => (
                          <p key={exam} className="elig-row"><CheckCircle size={13} /> {exam}: <strong>{req}</strong></p>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Top Programs */}
                {inst.top_ug_programs?.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <h3 className="h3" style={{ marginBottom: 12 }}>Top UG Programs</h3>
                    {inst.top_ug_programs.map((p, i) => (
                      <div key={i} className="prog-list-item"><CheckCircle size={13} /> {p}</div>
                    ))}
                  </div>
                )}
                {inst.top_pg_programs?.length > 0 && (
                  <div>
                    <h3 className="h3" style={{ marginBottom: 12 }}>Top PG Programs</h3>
                    {inst.top_pg_programs.map((p, i) => (
                      <div key={i} className="prog-list-item"><CheckCircle size={13} /> {p}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── Programs ─── */}
        {activeTab === 'programs' && (
          <div className="animate-fadeIn">
            <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
              {['', 'UG', 'PG'].map((l) => (
                <button key={l} className={`filter-chip${progLevel === l ? ' active' : ''}`} onClick={() => setProgLevel(l)}
                  style={{ padding: '7px 18px', borderRadius: '99px', border: '1.5px solid var(--gray-200)', background: 'white', cursor: 'pointer', fontWeight: 500, fontSize: '.85rem', color: 'var(--gray-600)', transition: 'all .2s' }}>
                  {l === '' ? 'All' : l === 'UG' ? 'Undergraduate' : 'Postgraduate'}
                </button>
              ))}
            </div>
            {progLoad ? <Spinner /> : (
              <div className="grid-cards">
                {programs.length === 0
                  ? <p style={{ color: 'var(--gray-500)' }}>No programs found. Try changing the filter.</p>
                  : programs.map((p, i) => <ProgramCard key={i} prog={p} />)
                }
              </div>
            )}
          </div>
        )}

        {/* ── Scholarships ─── */}
        {activeTab === 'scholarships' && (
          <div className="animate-fadeIn">
            {!inst.scholarships?.length
              ? <p style={{ color: 'var(--gray-500)' }}>No scholarship information available.</p>
              : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {inst.scholarships.map((s, i) => (
                    <div key={i} className="scholarship-card">
                      <div className="scholarship-header">
                        <Star size={18} className="text-gold" fill="currentColor" />
                        <h3 className="h3">{s.name}</h3>
                        {s.amount_cad && <span className="scholarship-amt">USD {Math.round(s.amount_cad * 0.73).toLocaleString()}</span>}
                      </div>
                      {s.criteria && <p style={{ fontSize: '.9rem', color: 'var(--gray-600)', marginTop: 6 }}>{s.criteria}</p>}
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                        {s.renewable && <span className="badge badge-green">Renewable</span>}
                        {s.years && <span className="badge badge-gray">Up to {s.years} years</span>}
                        {s.per_year && <span className="badge badge-blue">Per Year</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        )}

        {/* ── Contacts ─── */}
        {activeTab === 'contacts' && (
          <div className="animate-fadeIn">
            {!inst.contacts || Object.keys(inst.contacts).length === 0
              ? <p style={{ color: 'var(--gray-500)' }}>No contact information available.</p>
              : (
                <div className="grid-2">
                  {Object.entries(inst.contacts).map(([key, val]) => (
                    typeof val === 'object' && val !== null && (
                      <div key={key} className="contact-card card" style={{ padding: 24 }}>
                        <h4 className="h3" style={{ marginBottom: 14, textTransform: 'capitalize' }}>
                          {key.replace(/_/g, ' ')}
                        </h4>
                        {val.email && <div className="contact-row"><Mail size={14} /> <a href={`mailto:${val.email}`}>{val.email}</a></div>}
                        {val.phone && <div className="contact-row"><Phone size={14} /> {val.phone}</div>}
                        {val.address && <div className="contact-row"><MapPin size={14} /> {val.address}</div>}
                        {val.advisor && <div className="contact-row"><Users size={14} /> {val.advisor}</div>}
                      </div>
                    )
                  ))}
                </div>
              )}
          </div>
        )}

        {/* ── Campus Life ─── */}
        {activeTab === 'campus' && (
          <div className="animate-fadeIn">
            <div className="grid-2">
              {inst.campus_life && (
                <div className="card" style={{ padding: 24 }}>
                  <h3 className="h3" style={{ marginBottom: 16 }}>Campus Life</h3>
                  {Object.entries(inst.campus_life).map(([k, v]) => (
                    <InfoRow key={k} icon={Users} label={k.replace(/_/g, ' ')} value={String(v)} />
                  ))}
                </div>
              )}
              {inst.internships && (
                <div className="card" style={{ padding: 24 }}>
                  <h3 className="h3" style={{ marginBottom: 16 }}>Internships & Co-op</h3>
                  {Object.entries(inst.internships).map(([k, v]) => (
                    <InfoRow key={k} icon={Briefcase} label={k.replace(/_/g, ' ')} value={String(v)} />
                  ))}
                </div>
              )}
              {inst.security && (
                <div className="card" style={{ padding: 24 }}>
                  <h3 className="h3" style={{ marginBottom: 16 }}>Security</h3>
                  {Object.entries(inst.security).map(([k, v]) => (
                    <InfoRow key={k} icon={CheckCircle} label={k.replace(/_/g, ' ')} value={String(v)} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .uni-detail-hero {
          background: linear-gradient(135deg, var(--blue-950), var(--blue-800));
          padding: calc(var(--nav-h) + 32px) 0 48px;
          margin-top: calc(-1 * (var(--nav-h) + 32px));
        }
        .uni-detail-top { display: flex; align-items: flex-start; gap: 24px; flex-wrap: wrap; }
        .uni-detail-avatar {
          width: 80px; height: 80px; border-radius: var(--radius-lg); flex-shrink: 0;
          background: rgba(255,255,255,.15); backdrop-filter: blur(8px);
          border: 2px solid rgba(255,255,255,.3);
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.3rem; font-weight: 700; font-family: var(--font-display);
        }
        .uni-detail-head { flex: 1; min-width: 0; }
        .uni-detail-title { color: white; margin: 10px 0 8px; font-size: clamp(1.4rem, 3vw, 2rem); }
        .uni-detail-meta { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; color: rgba(255,255,255,.7); font-size: .875rem; }
        .uni-detail-meta span { display: flex; align-items: center; gap: 5px; }
        .uni-detail-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .tab-content {}
        .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .info-table { display: flex; flex-direction: column; gap: 0; }
        .info-row {
          display: flex; align-items: baseline; gap: 10px; padding: 10px 0;
          border-bottom: 1px solid var(--gray-100); font-size: .875rem;
        }
        .info-icon { color: var(--blue-500); flex-shrink: 0; margin-top: 2px; }
        .info-label { color: var(--gray-500); flex-shrink: 0; min-width: 120px; font-weight: 500; }
        .info-value { color: var(--gray-800); }
        .elig-section {
          background: var(--gray-50); border-radius: var(--radius-md);
          border: 1px solid var(--gray-100); padding: 16px;
        }
        .elig-title { display: flex; align-items: center; gap: 6px; font-weight: 600; color: var(--gray-800); margin-bottom: 10px; font-size: .9rem; }
        .elig-row { display: flex; align-items: center; gap: 7px; font-size: .8375rem; color: var(--gray-600); margin-bottom: 6px; }
        .elig-row strong { color: var(--gray-800); }
        .prog-list-item { display: flex; align-items: center; gap: 8px; padding: 8px 0; border-bottom: 1px solid var(--gray-100); font-size: .875rem; color: var(--gray-700); }
        /* Programs */
        .prog-card {
          background: white; border-radius: var(--radius-lg); border: 1px solid var(--gray-100);
          box-shadow: var(--shadow-sm); padding: 20px; display: flex; flex-direction: column; gap: 10px;
          transition: all var(--transition-slow);
        }
        .prog-card:hover { box-shadow: var(--shadow-md); border-color: var(--blue-100); }
        .prog-header { display: flex; gap: 8px; }
        .prog-name { font-family: var(--font-display); font-size: .975rem; font-weight: 600; color: var(--gray-900); line-height: 1.35; }
        .prog-faculty { font-size: .8rem; color: var(--gray-500); }
        .prog-fee { display: flex; align-items: center; gap: 4px; font-size: .8125rem; color: var(--blue-600); font-weight: 600; }
        .prog-roles { display: flex; flex-wrap: wrap; gap: 5px; }
        .prog-role { font-size: .73rem; padding: 3px 9px; background: var(--blue-50); color: var(--blue-700); border-radius: var(--radius-full); border: 1px solid var(--blue-100); }
        /* Scholarships */
        .scholarship-card {
          background: white; border-radius: var(--radius-lg); border: 1px solid var(--gold-light);
          padding: 24px; box-shadow: var(--shadow-sm);
        }
        .scholarship-header { display: flex; align-items: center; gap: 12px; }
        .scholarship-amt {
          margin-left: auto; background: var(--gold-light); color: #92600d;
          padding: 4px 14px; border-radius: var(--radius-full); font-size: .85rem; font-weight: 700;
        }
        /* Contacts */
        .contact-card {}
        .contact-row { display: flex; align-items: center; gap: 10px; font-size: .875rem; color: var(--gray-600); margin-bottom: 10px; }
        .contact-row a { color: var(--blue-600); }
        /* filter-chip inline */
        .filter-chip.active { border-color: var(--blue-500) !important; background: var(--blue-600) !important; color: white !important; }
        .filter-chip:hover { border-color: var(--blue-300) !important; color: var(--blue-600) !important; background: var(--blue-50) !important; }
        @media (max-width: 900px) { .overview-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
