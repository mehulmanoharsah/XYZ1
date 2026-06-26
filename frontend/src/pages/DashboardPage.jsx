import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, Heart, Clock, Search, Key, Edit3, Save, X } from 'lucide-react'
import { useAuthStore, useFavoritesStore } from '../lib/store'
import { useScrollTop } from '../hooks'
import toast from 'react-hot-toast'
import api from '../lib/api'

function StatCard({ icon: Icon, label, value, color = 'var(--blue-600)' }) {
  return (
    <div className="dash-stat">
      <div className="dash-stat-icon" style={{ background: `${color}15`, color }}><Icon size={20} /></div>
      <div>
        <div className="dash-stat-value">{value}</div>
        <div className="dash-stat-label">{label}</div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  useScrollTop()
  const { user, updateUser } = useAuthStore()
  const { favorites, load }  = useFavoritesStore()

  const [searchHistory, setSearchHistory] = useState([])
  const [recentlyViewed, setRecentViewed] = useState([])
  const [editing,   setEditing]  = useState(false)
  const [pwForm,    setPwForm]   = useState({ current_password: '', new_password: '', confirm: '' })
  const [editForm,  setEditForm] = useState({ full_name: user?.full_name || '', phone: user?.phone || '', preferred_country: user?.preferred_country || '' })
  const [saving,    setSaving]   = useState(false)
  const [tab,       setTab]      = useState('overview')

  useEffect(() => {
    load()
    api.get('/dashboard/search-history').then((r) => setSearchHistory(r.data)).catch(() => {})
    api.get('/dashboard/recently-viewed').then((r) => setRecentViewed(r.data)).catch(() => {})
  }, [])

  const saveProfile = async () => {
    setSaving(true)
    try {
      const { data } = await api.put('/auth/me', editForm)
      updateUser(data)
      toast.success('Profile updated')
      setEditing(false)
    } catch { toast.error('Failed to update') }
    finally { setSaving(false) }
  }

  const changePassword = async (e) => {
    e.preventDefault()
    if (pwForm.new_password !== pwForm.confirm) { toast.error('Passwords do not match'); return }
    setSaving(true)
    try {
      await api.put('/auth/change-password', { current_password: pwForm.current_password, new_password: pwForm.new_password })
      toast.success('Password changed successfully')
      setPwForm({ current_password: '', new_password: '', confirm: '' })
    } catch (e) { toast.error(e.response?.data?.detail || 'Failed') }
    finally { setSaving(false) }
  }

  const TABS = [
    { id: 'overview',  label: 'Overview',   icon: User },
    { id: 'saved',     label: `Saved (${favorites.length})`, icon: Heart },
    { id: 'history',   label: 'History',    icon: Search },
    { id: 'settings',  label: 'Settings',   icon: Key },
  ]

  return (
    <div className="page-pad">
      <div className="container">
        {/* Header */}
        <div className="dash-header">
          <div className="dash-avatar">{user?.full_name?.[0]?.toUpperCase()}</div>
          <div>
            <h1 className="h2">{user?.full_name}</h1>
            <p style={{ color: 'var(--gray-500)', fontSize: '.9rem', marginTop: 4 }}>{user?.email}</p>
            <p style={{ color: 'var(--gray-500)', fontSize: '.8rem', marginTop: 2 }}>
              🌍 Interested in: {user?.preferred_country}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="dash-stats">
          <StatCard icon={Heart}  label="Saved Universities" value={favorites.length} color="var(--blue-600)" />
          <StatCard icon={Search} label="Recent Searches"    value={searchHistory.length} color="#7c3aed" />
          <StatCard icon={Clock}  label="Recently Viewed"    value={recentlyViewed.length} color="#d97706" />
        </div>

        {/* Tabs */}
        <div className="tabs" style={{ marginTop: 32 }}>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} className={`tab-btn${tab === id ? ' active' : ''}`} onClick={() => setTab(id)}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <div className="animate-fadeIn">
            {recentlyViewed.length > 0 && (
              <div style={{ marginBottom: 40 }}>
                <h3 className="h3" style={{ marginBottom: 16 }}>Recently Viewed</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {recentlyViewed.slice(0, 5).map((v, i) => (
                    <Link key={i} to={`/country/${v.country?.toLowerCase()}/university/${v.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="recent-item card">
                      <div className="recent-avatar">{v.name?.[0]}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{v.name}</div>
                        <div style={{ fontSize: '.8rem', color: 'var(--gray-500)' }}>{v.city}, {v.province}</div>
                      </div>
                      <span style={{ marginLeft: 'auto', fontSize: '.75rem', color: 'var(--gray-400)' }}>{new Date(v.viewed_at).toLocaleDateString()}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {favorites.length > 0 && (
              <div>
                <div className="flex-between" style={{ marginBottom: 16 }}>
                  <h3 className="h3">Saved Universities</h3>
                  <button className="btn btn-ghost btn-sm" onClick={() => setTab('saved')}>View all →</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {favorites.slice(0, 4).map((f, i) => (
                    <Link key={i} to={`/country/${f.country?.toLowerCase()}/university/${f.institution_name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="recent-item card">
                      <div className="recent-avatar" style={{ background: 'linear-gradient(135deg, var(--blue-800), var(--blue-600))' }}>
                        {f.institution_name?.[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{f.institution_name}</div>
                        <div style={{ fontSize: '.8rem', color: 'var(--gray-500)' }}>{f.city}, {f.province}</div>
                      </div>
                      <Heart size={14} style={{ marginLeft: 'auto', color: '#ef4444' }} fill="currentColor" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {favorites.length === 0 && recentlyViewed.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                <p style={{ marginBottom: 16 }}>No activity yet. Start exploring universities!</p>
                <Link to="/" className="btn btn-primary">Browse Universities</Link>
              </div>
            )}
          </div>
        )}

        {/* Saved */}
        {tab === 'saved' && (
          <div className="animate-fadeIn">
            {favorites.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                <Heart size={48} style={{ margin: '0 auto 16px', opacity: .3 }} />
                <p>No saved universities yet.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>Browse Universities</Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {favorites.map((f, i) => (
                  <Link key={i} to={`/country/${f.country?.toLowerCase()}/university/${f.institution_name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                    className="saved-item card">
                    <div className="recent-avatar" style={{ background: 'linear-gradient(135deg, var(--blue-800), var(--blue-600))' }}>
                      {f.institution_name?.[0]}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{f.institution_name}</div>
                      <div style={{ fontSize: '.8rem', color: 'var(--gray-500)' }}>{f.city}{f.province ? `, ${f.province}` : ''} · {f.country}</div>
                    </div>
                    <span style={{ fontSize: '.75rem', color: 'var(--gray-400)' }}>{new Date(f.created_at).toLocaleDateString()}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* History */}
        {tab === 'history' && (
          <div className="animate-fadeIn">
            {searchHistory.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--gray-400)' }}>
                <Search size={48} style={{ margin: '0 auto 16px', opacity: .3 }} />
                <p>No search history yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {searchHistory.map((h, i) => (
                  <Link key={i} to={`/search?q=${encodeURIComponent(h.query)}`} className="history-item">
                    <Search size={14} style={{ color: 'var(--gray-400)' }} />
                    <span style={{ flex: 1 }}>{h.query}</span>
                    <span style={{ fontSize: '.75rem', color: 'var(--gray-400)' }}>{new Date(h.created_at).toLocaleDateString()}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Settings */}
        {tab === 'settings' && (
          <div className="animate-fadeIn" style={{ maxWidth: 520 }}>
            {/* Edit Profile */}
            <div className="card" style={{ padding: 28, marginBottom: 24 }}>
              <div className="flex-between" style={{ marginBottom: 20 }}>
                <h3 className="h3">Profile Information</h3>
                {!editing
                  ? <button className="btn btn-secondary btn-sm" onClick={() => setEditing(true)}><Edit3 size={14} /> Edit</button>
                  : <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn btn-ghost btn-sm" onClick={() => setEditing(false)}><X size={14} /></button>
                      <button className="btn btn-primary btn-sm" onClick={saveProfile} disabled={saving}><Save size={14} /> Save</button>
                    </div>
                }
              </div>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="input" disabled={!editing} value={editing ? editForm.full_name : user?.full_name || ''} onChange={(e) => setEditForm((f) => ({ ...f, full_name: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="input" disabled value={user?.email || ''} style={{ background: 'var(--gray-50)', color: 'var(--gray-500)' }} />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input className="input" disabled={!editing} value={editing ? editForm.phone : user?.phone || ''} onChange={(e) => setEditForm((f) => ({ ...f, phone: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Country</label>
                <select className="input select" disabled={!editing} value={editing ? editForm.preferred_country : user?.preferred_country || ''} onChange={(e) => setEditForm((f) => ({ ...f, preferred_country: e.target.value }))}>
                  {['Canada', 'USA', 'UK', 'Australia', 'Germany', 'Ireland'].map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Change Password */}
            <div className="card" style={{ padding: 28 }}>
              <h3 className="h3" style={{ marginBottom: 20 }}>Change Password</h3>
              <form onSubmit={changePassword}>
                <div className="form-group">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="input" value={pwForm.current_password} onChange={(e) => setPwForm((f) => ({ ...f, current_password: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">New Password</label>
                  <input type="password" className="input" value={pwForm.new_password} onChange={(e) => setPwForm((f) => ({ ...f, new_password: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="input" value={pwForm.confirm} onChange={(e) => setPwForm((f) => ({ ...f, confirm: e.target.value }))} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Saving…' : 'Update Password'}</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .dash-header {
          display: flex; align-items: center; gap: 20px; margin-bottom: 28px;
          padding-bottom: 28px; border-bottom: 1px solid var(--gray-100);
        }
        .dash-avatar {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, var(--blue-600), var(--blue-800));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.8rem; font-weight: 700; font-family: var(--font-display);
          flex-shrink: 0;
        }
        .dash-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .dash-stat {
          background: white; border-radius: var(--radius-lg); border: 1px solid var(--gray-100);
          padding: 20px; display: flex; align-items: center; gap: 14px;
          box-shadow: var(--shadow-sm);
        }
        .dash-stat-icon {
          width: 44px; height: 44px; border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .dash-stat-value { font-size: 1.5rem; font-weight: 700; font-family: var(--font-display); color: var(--gray-900); line-height: 1; }
        .dash-stat-label { font-size: .78rem; color: var(--gray-500); margin-top: 2px; }
        .recent-item {
          display: flex; align-items: center; gap: 14px; padding: 14px 18px;
          text-decoration: none; transition: all var(--transition);
        }
        .recent-item:hover { border-color: var(--blue-200); }
        .recent-avatar {
          width: 38px; height: 38px; border-radius: var(--radius-sm); flex-shrink: 0;
          background: linear-gradient(135deg, var(--gray-700), var(--gray-500));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: .85rem; font-weight: 700;
        }
        .saved-item {
          display: flex; align-items: center; gap: 14px; padding: 16px 20px;
          text-decoration: none; transition: all var(--transition);
        }
        .saved-item:hover { border-color: var(--blue-200); }
        .history-item {
          display: flex; align-items: center; gap: 12px; padding: 12px 16px;
          border-radius: var(--radius-md); background: var(--gray-50);
          text-decoration: none; color: var(--gray-700); font-size: .875rem;
          transition: background var(--transition);
        }
        .history-item:hover { background: var(--blue-50); color: var(--blue-700); }
        @media (max-width: 640px) { .dash-stats { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
