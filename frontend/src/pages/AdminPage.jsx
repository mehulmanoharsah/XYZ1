import { useState, useEffect } from 'react'
import { Shield, Users, Building2, Heart, Activity, Trash2, ToggleLeft, ToggleRight, BarChart3 } from 'lucide-react'
import { useScrollTop } from '../hooks'
import { Spinner } from '../components/common/UI'
import toast from 'react-hot-toast'
import api from '../lib/api'

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="admin-stat card">
      <div className="admin-stat-icon" style={{ background: `${color}18`, color }}><Icon size={22} /></div>
      <div>
        <div className="admin-stat-value">{value ?? '…'}</div>
        <div className="admin-stat-label">{label}</div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  useScrollTop()
  const [stats,    setStats]    = useState(null)
  const [users,    setUsers]    = useState([])
  const [insts,    setInsts]    = useState([])
  const [tab,      setTab]      = useState('stats')
  const [loading,  setLoading]  = useState(true)

  const loadStats = () => api.get('/admin/stats').then((r) => setStats(r.data)).catch(() => {})
  const loadUsers = () => api.get('/admin/users').then((r) => setUsers(r.data)).catch(() => {})
  const loadInsts = () => api.get('/admin/institutions').then((r) => setInsts(r.data)).catch(() => {})

  useEffect(() => {
    Promise.all([loadStats(), loadUsers(), loadInsts()]).finally(() => setLoading(false))
  }, [])

  const toggleAdmin = async (userId, name) => {
    try {
      const { data } = await api.put(`/admin/users/${userId}/toggle-admin`)
      toast.success(`${name} is now ${data.is_admin ? 'an admin' : 'a regular user'}`)
      loadUsers()
    } catch { toast.error('Failed') }
  }

  const deleteUser = async (userId, name) => {
    if (!confirm(`Delete user "${name}"?`)) return
    try {
      await api.delete(`/admin/users/${userId}`)
      toast.success('User deleted')
      loadUsers()
      loadStats()
    } catch { toast.error('Failed') }
  }

  const deleteInst = async (id, name) => {
    if (!confirm(`Delete "${name}"? This also removes its programs.`)) return
    try {
      await api.delete(`/admin/institutions/${id}`)
      toast.success('Institution deleted')
      loadInsts()
      loadStats()
    } catch { toast.error('Failed') }
  }

  if (loading) return <div className="page-pad container"><Spinner size={48} /></div>

  const TABS = [
    { id: 'stats', label: 'Analytics', icon: BarChart3 },
    { id: 'institutions', label: `Institutions (${insts.length})`, icon: Building2 },
    { id: 'users', label: `Users (${users.length})`, icon: Users },
  ]

  return (
    <div className="page-pad">
      <div className="container">
        {/* Header */}
        <div className="admin-header">
          <div className="admin-badge"><Shield size={18} /> Admin Panel</div>
          <h1 className="h2" style={{ marginTop: 12 }}>Wellyura Administration</h1>
          <p style={{ color: 'var(--gray-500)', marginTop: 4 }}>Manage institutions, users, and monitor platform activity.</p>
        </div>

        {/* Tabs */}
        <div className="tabs" style={{ marginBottom: 32 }}>
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} className={`tab-btn${tab === id ? ' active' : ''}`} onClick={() => setTab(id)}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        {/* Analytics */}
        {tab === 'stats' && (
          <div className="animate-fadeIn">
            <div className="admin-stats-grid">
              <StatCard icon={Building2} label="Total Institutions" value={stats?.institutions} color="var(--blue-600)" />
              <StatCard icon={Users}     label="Registered Users"   value={stats?.users}        color="#7c3aed" />
              <StatCard icon={Heart}     label="Saved Universities" value={stats?.favorites}    color="#ef4444" />
              <StatCard icon={Activity}  label="Total Searches"     value={stats?.searches}     color="#d97706" />
              <StatCard icon={BarChart3} label="Programs Listed"    value={stats?.programs}     color="#059669" />
              <StatCard icon={Users}     label="New Users (7d)"     value={stats?.recent_signups} color="#0891b2" />
            </div>
          </div>
        )}

        {/* Institutions */}
        {tab === 'institutions' && (
          <div className="animate-fadeIn">
            <div className="admin-table-wrap card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Country</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {insts.map((inst) => (
                    <tr key={inst.id}>
                      <td><span className="table-name">{inst.name}</span></td>
                      <td>{inst.city}</td>
                      <td>{inst.province}</td>
                      <td>{inst.country}</td>
                      <td><span className={`badge ${inst.type === 'university' ? 'badge-blue' : 'badge-gold'}`}>{inst.type}</span></td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteInst(inst.id, inst.name)}>
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Users */}
        {tab === 'users' && (
          <div className="animate-fadeIn">
            <div className="admin-table-wrap card">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Joined</th>
                    <th>Admin</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td><span className="table-name">{u.full_name}</span></td>
                      <td style={{ fontSize: '.8rem', color: 'var(--gray-500)' }}>{u.email}</td>
                      <td>{u.preferred_country}</td>
                      <td style={{ fontSize: '.8rem', color: 'var(--gray-400)' }}>{new Date(u.created_at).toLocaleDateString()}</td>
                      <td>
                        <button className="toggle-btn" onClick={() => toggleAdmin(u.id, u.full_name)}>
                          {u.is_admin
                            ? <ToggleRight size={22} style={{ color: 'var(--blue-600)' }} />
                            : <ToggleLeft  size={22} style={{ color: 'var(--gray-300)' }} />}
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u.id, u.full_name)}>
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .admin-header { margin-bottom: 32px; }
        .admin-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--gold-light); color: #92600d;
          padding: 6px 14px; border-radius: var(--radius-full);
          font-size: .8125rem; font-weight: 600;
        }
        .admin-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .admin-stat { display: flex; align-items: center; gap: 16px; padding: 22px; }
        .admin-stat-icon { width: 48px; height: 48px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .admin-stat-value { font-size: 1.7rem; font-weight: 700; font-family: var(--font-display); color: var(--gray-900); line-height: 1; }
        .admin-stat-label { font-size: .78rem; color: var(--gray-500); margin-top: 3px; }
        .admin-table-wrap { overflow-x: auto; padding: 0; }
        .admin-table { width: 100%; border-collapse: collapse; font-size: .875rem; }
        .admin-table th { padding: 12px 16px; text-align: left; font-size: .75rem; font-weight: 600; color: var(--gray-500); text-transform: uppercase; letter-spacing: .05em; border-bottom: 1px solid var(--gray-100); background: var(--gray-50); }
        .admin-table td { padding: 13px 16px; border-bottom: 1px solid var(--gray-100); color: var(--gray-700); vertical-align: middle; }
        .admin-table tr:last-child td { border-bottom: none; }
        .admin-table tr:hover td { background: var(--gray-50); }
        .table-name { font-weight: 600; color: var(--gray-900); }
        .toggle-btn { background: none; border: none; cursor: pointer; padding: 4px; display: flex; align-items: center; }
        @media (max-width: 900px) { .admin-stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .admin-stats-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}
