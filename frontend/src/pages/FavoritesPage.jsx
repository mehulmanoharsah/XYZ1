import { Link } from 'react-router-dom'
import { Heart, Trash2, MapPin, ExternalLink } from 'lucide-react'
import { useFavoritesStore } from '../lib/store'
import { useScrollTop } from '../hooks'
import { EmptyState } from '../components/common/UI'
import toast from 'react-hot-toast'
import api from '../lib/api'

export default function FavoritesPage() {
  useScrollTop()
  const { favorites, toggle, load } = useFavoritesStore()

  const handleRemove = async (inst) => {
    try {
      await toggle({ id: inst.institution_id, name: inst.institution_name, city: inst.city, province: inst.province, country: inst.country })
      toast.success('Removed from saved')
    } catch {
      toast.error('Failed to remove')
    }
  }

  return (
    <div className="page-pad">
      <div className="container">
        <div className="flex-between" style={{ marginBottom: 32 }}>
          <div>
            <h1 className="h2" style={{ marginBottom: 6 }}>Saved Universities</h1>
            <p style={{ color: 'var(--gray-500)' }}>{favorites.length} institution{favorites.length !== 1 ? 's' : ''} saved</p>
          </div>
          <Link to="/search" className="btn btn-primary">Browse More</Link>
        </div>

        {favorites.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="No saved universities"
            message="Start exploring and save universities you're interested in."
            action={<Link to="/search" className="btn btn-primary">Browse Universities</Link>}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {favorites.map((f) => {
              const slug = f.institution_name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
              const country = f.country?.toLowerCase()
              return (
                <div key={f.id} className="fav-row card">
                  <div className="fav-avatar">{f.institution_name?.[0]}</div>
                  <div className="fav-info">
                    <h3 className="fav-name">{f.institution_name}</h3>
                    <div className="fav-meta">
                      <MapPin size={13} />
                      {f.city}{f.province ? `, ${f.province}` : ''} · {f.country}
                    </div>
                  </div>
                  <div className="fav-actions">
                    <Link to={`/country/${country}/university/${slug}`} className="btn btn-secondary btn-sm">
                      <ExternalLink size={14} /> View
                    </Link>
                    <button className="btn btn-ghost btn-sm" style={{ color: '#ef4444' }} onClick={() => handleRemove(f)}>
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        .fav-row {
          display: flex; align-items: center; gap: 18px; padding: 20px 24px;
        }
        .fav-avatar {
          width: 50px; height: 50px; border-radius: var(--radius-md); flex-shrink: 0;
          background: linear-gradient(135deg, var(--blue-800), var(--blue-600));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.1rem; font-weight: 700; font-family: var(--font-display);
        }
        .fav-info { flex: 1; min-width: 0; }
        .fav-name { font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--gray-900); }
        .fav-meta { display: flex; align-items: center; gap: 5px; font-size: .8rem; color: var(--gray-500); margin-top: 4px; }
        .fav-actions { display: flex; gap: 8px; flex-shrink: 0; }
        @media (max-width: 600px) { .fav-row { flex-wrap: wrap; } .fav-actions { width: 100%; } }
      `}</style>
    </div>
  )
}
