import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCap, Eye, EyeOff, UserPlus } from 'lucide-react'
import { useAuthStore, useFavoritesStore } from '../lib/store'
import toast from 'react-hot-toast'
import { useScrollTop } from '../hooks'

export default function RegisterPage() {
  useScrollTop()
  const navigate     = useNavigate()
  const { register } = useAuthStore()
  const { load }     = useFavoritesStore()

  const [form, setForm] = useState({
    full_name: '', email: '', password: '', phone: '', preferred_country: 'Canada',
  })
  const [show,    setShow]    = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.full_name || !form.email || !form.password) {
      toast.error('Please fill in required fields'); return
    }
    if (form.password.length < 6) { toast.error('Password must be at least 6 characters'); return }
    setLoading(true)
    try {
      await register(form)
      await load()
      toast.success('Account created! Welcome to Wellyura 🎓')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-branding">
          <div className="auth-logo"><GraduationCap size={28} /></div>
          <h1 className="h2" style={{ color: 'white', marginTop: 20 }}>Join Wellyura</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: 12, lineHeight: 1.7 }}>
            Create a free account and start your international education journey today.
          </p>
          <div className="auth-features">
            {['Save universities & programs', 'Track application deadlines', 'Compare fees & scholarships', 'Personalized suggestions'].map((f) => (
              <div key={f} className="auth-feature">✓ {f}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div style={{ marginBottom: 28 }}>
            <h2 className="h2" style={{ marginBottom: 6 }}>Create your account</h2>
            <p style={{ color: 'var(--gray-500)' }}>It's free — no credit card needed</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input type="text" className="input" placeholder="Arjun Sharma" value={form.full_name} onChange={set('full_name')} />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input type="email" className="input" placeholder="arjun@example.com" value={form.email} onChange={set('email')} autoComplete="email" />
            </div>
            <div className="form-group">
              <label className="form-label">Password *</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={show ? 'text' : 'password'} className="input"
                  placeholder="At least 6 characters"
                  value={form.password} onChange={set('password')}
                  style={{ paddingRight: 44 }}
                />
                <button type="button" onClick={() => setShow(!show)}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--gray-400)', cursor: 'pointer' }}>
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="grid-2" style={{ gap: 14 }}>
              <div className="form-group">
                <label className="form-label">Phone (optional)</label>
                <input type="tel" className="input" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred Country</label>
                <select className="input select" value={form.preferred_country} onChange={set('preferred_country')}>
                  {['Canada', 'USA', 'UK', 'Australia', 'Germany', 'Ireland'].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }} disabled={loading}>
              <UserPlus size={17} /> {loading ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 24, fontSize: '.9rem', color: 'var(--gray-500)' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--blue-600)', fontWeight: 600 }}>Sign in</Link>
          </p>
        </div>
      </div>

      <style>{`
        .auth-page { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
        .auth-left { background: linear-gradient(160deg, var(--blue-950), var(--blue-700)); display: flex; align-items: center; justify-content: center; padding: 60px 48px; }
        .auth-branding { max-width: 400px; }
        .auth-logo { width: 60px; height: 60px; border-radius: var(--radius-lg); background: rgba(255,255,255,.15); display: flex; align-items: center; justify-content: center; color: white; border: 1px solid rgba(255,255,255,.3); }
        .auth-features { display: flex; flex-direction: column; gap: 10px; margin-top: 36px; }
        .auth-feature { color: rgba(255,255,255,.8); font-size: .9rem; }
        .auth-right { display: flex; align-items: center; justify-content: center; padding: 60px 48px; background: var(--gray-50); }
        .auth-card { width: 100%; max-width: 440px; }
        @media (max-width: 768px) { .auth-page { grid-template-columns: 1fr; } .auth-left { display: none; } }
      `}</style>
    </div>
  )
}
