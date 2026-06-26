import { Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
      <div>
        <div style={{ fontSize: '6rem', marginBottom: 16 }}>🎓</div>
        <h1 className="h1" style={{ marginBottom: 12, color: 'var(--blue-900)' }}>404</h1>
        <h2 className="h2" style={{ marginBottom: 16, fontSize: '1.4rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--gray-500)', marginBottom: 32, maxWidth: 400 }}>
          The page you're looking for doesn't exist. It may have moved or the URL may be incorrect.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg"><GraduationCap size={18} /> Go Home</Link>
          <Link to="/search" className="btn btn-secondary btn-lg">Search Universities</Link>
        </div>
      </div>
    </div>
  )
}
