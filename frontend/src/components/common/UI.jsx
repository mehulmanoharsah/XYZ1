import { ChevronLeft, ChevronRight, Inbox } from 'lucide-react'

// ── Skeleton ──────────────────────────────────────────────────
export function Skeleton({ w = '100%', h = 16, style = {} }) {
  return <div className="skeleton" style={{ width: w, height: h, borderRadius: 8, ...style }} />
}

export function CardSkeleton() {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
        <Skeleton w={52} h={52} style={{ borderRadius: 12, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <Skeleton w="70%" h={18} style={{ marginBottom: 8 }} />
          <Skeleton w="45%" h={13} />
        </div>
      </div>
      <Skeleton w="100%" h={12} style={{ marginBottom: 8 }} />
      <Skeleton w="85%" h={12} style={{ marginBottom: 20 }} />
      <div style={{ display: 'flex', gap: 8 }}>
        <Skeleton w={70} h={26} style={{ borderRadius: 99 }} />
        <Skeleton w={70} h={26} style={{ borderRadius: 99 }} />
      </div>
    </div>
  )
}

// ── Pagination ────────────────────────────────────────────────
export function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const pages = []
  const delta = 2
  const left  = Math.max(1, page - delta)
  const right = Math.min(totalPages, page + delta)

  if (left > 1) { pages.push(1); if (left > 2) pages.push('…') }
  for (let i = left; i <= right; i++) pages.push(i)
  if (right < totalPages) { if (right < totalPages - 1) pages.push('…'); pages.push(totalPages) }

  return (
    <div className="pagination">
      <button className="page-btn" onClick={() => onChange(page - 1)} disabled={page <= 1}>
        <ChevronLeft size={16} />
      </button>
      {pages.map((p, i) =>
        p === '…'
          ? <span key={`e-${i}`} style={{ padding: '0 4px', color: 'var(--gray-400)' }}>…</span>
          : <button key={p} className={`page-btn${page === p ? ' active' : ''}`} onClick={() => onChange(p)}>{p}</button>
      )}
      <button className="page-btn" onClick={() => onChange(page + 1)} disabled={page >= totalPages}>
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

// ── Empty State ───────────────────────────────────────────────
export function EmptyState({ icon: Icon = Inbox, title = 'Nothing here yet', message = '', action }) {
  return (
    <div className="empty-state">
      <Icon size={56} />
      <h3 style={{ marginTop: 16, marginBottom: 8, fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--gray-700)' }}>{title}</h3>
      {message && <p style={{ marginBottom: 24, maxWidth: 360, margin: '0 auto 24px' }}>{message}</p>}
      {action}
    </div>
  )
}

// ── Spinner ───────────────────────────────────────────────────
export function Spinner({ size = 32 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 40 }}>
      <div style={{
        width: size, height: size, border: '3px solid var(--gray-100)',
        borderTopColor: 'var(--blue-500)', borderRadius: '50%',
        animation: 'spin .7s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}

// ── Breadcrumb ────────────────────────────────────────────────
export function Breadcrumb({ items }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '.8125rem', color: 'var(--gray-500)', marginBottom: 24 }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {i > 0 && <span style={{ opacity: .4 }}>/</span>}
          {item.href
            ? <a href={item.href} style={{ color: 'var(--blue-600)', textDecoration: 'none', fontWeight: 500 }}>{item.label}</a>
            : <span style={{ color: i === items.length - 1 ? 'var(--gray-700)' : undefined, fontWeight: i === items.length - 1 ? 500 : undefined }}>{item.label}</span>
          }
        </span>
      ))}
    </nav>
  )
}
