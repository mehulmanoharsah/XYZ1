import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCap, Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuthStore } from '../lib/store'
import { useFavoritesStore } from '../lib/store'
import toast from 'react-hot-toast'
import { useScrollTop } from '../hooks'

export default function LoginPage() {
  useScrollTop()
  const navigate   = useNavigate()
  const { login }  = useAuthStore()
  const { load }   = useFavoritesStore()

  const [form, setForm]     = useState({ email: '', password: '' })
  const [show, setShow]     = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) { toast.error('Please fill in all fields'); return }
    setLoading(true)
    try {
      await login(form.email, form.password)
      await load()
      toast.success('Welcome back!')
      navigate('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-branding">
          <div className="auth-logo">
            <GraduationCap size={28} />
          </div>
          <h1 className="h2" style={{ color: 'white', marginTop: 20 }}>Wellyura</h1>
          <p style={{ color: 'rgba(255,255,255,.7)', marginTop: 12, lineHeight: 1.7 }}>
            Your trusted guide to international university education. Explore, compare, and save.
          </p>
          <div className="auth-features">
            {['20+ Canadian institutions', 'Programs & scholarships', 'Personalized recommendations', 'Free to use'].map((f) => (
              <div key={f} className="auth-feature">✓ {f}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div style={{ marginBottom: 32 }}>
            <h2 className="h2" style={{ marginBottom: 6 }}>Welcome back</h2>
            <p style={{ color: 'var(--gray-500)' }}>Sign in to your Wellyura account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input type="email" className="input" placeholder="you@example.com" value={form.email} onChange={set('email')} autoComplete="email" />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={show ? 'text' : 'password'}
                  className="input" placeholder="••••••••"
                  value={form.password} onChange={set('password')}
                  autoComplete="current-password"
                  style={{ paddingRight: 44 }}
                />
                <button type="button" onClick={() => setShow(!show)}
                  style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--gray-400)', cursor: 'pointer' }}>
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} disabled={loading}>
              <LogIn size={17} /> {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: 24, fontSize: '.9rem', color: 'var(--gray-500)' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: 'var(--blue-600)', fontWeight: 600 }}>Create one free</Link>
          </p>
        </div>
      </div>

      <style>{`
        .auth-page { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
        .auth-left {
          background: linear-gradient(160deg, var(--blue-950), var(--blue-700));
          display: flex; align-items: center; justify-content: center; padding: 60px 48px;
        }
        .auth-branding { max-width: 400px; }
        .auth-logo {
          width: 60px; height: 60px; border-radius: var(--radius-lg);
          background: rgba(255,255,255,.15); display: flex; align-items: center; justify-content: center;
          color: white; border: 1px solid rgba(255,255,255,.3);
        }
        .auth-features { display: flex; flex-direction: column; gap: 10px; margin-top: 36px; }
        .auth-feature { color: rgba(255,255,255,.8); font-size: .9rem; }
        .auth-right { display: flex; align-items: center; justify-content: center; padding: 60px 48px; background: var(--gray-50); }
        .auth-card { width: 100%; max-width: 420px; }
        @media (max-width: 768px) { .auth-page { grid-template-columns: 1fr; } .auth-left { display: none; } }
      `}</style>
    </div>
  )
}
