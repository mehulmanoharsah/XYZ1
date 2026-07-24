import { Link } from 'react-router-dom'
import { MapPin, Globe, Star, GraduationCap, Heart, DollarSign } from 'lucide-react'
import { useFavoritesStore } from '../../lib/store'
import { useAuthStore } from '../../lib/store'
import toast from 'react-hot-toast'

function getInitials(name) {
  return name?.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase() || 'U'
}

function getTypeColor(type) {
  return type === 'university' ? 'badge-blue' : 'badge-gold'
}

function getUniversityLink(inst) {
  if (inst.country) {
    const country = inst.country.toLowerCase().replace(/\s+/g, '-')
    const slug    = inst.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    return `/country/${country}/university/${slug}`
  }
  const slug = inst.name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  return `/university/${slug}`
}

export default function UniversityCard({ inst }) {
  const { toggle, isFav } = useFavoritesStore()
  const { user }          = useAuthStore()
  const fav               = isFav(inst.id)
  const link              = getUniversityLink(inst)

  const handleFav = async (e) => {
    e.preventDefault(); e.stopPropagation()
    if (!user) { toast.error('Sign in to save universities'); return }
    try {
      await toggle(inst)
      toast.success(fav ? 'Removed from saved' : 'Saved!')
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Error')
    }
  }

  const scholarshipCount = Array.isArray(inst.scholarships) ? inst.scholarships.length : 0

  return (
    <Link to={link} className="uni-card" style={{ textDecoration: 'none' }}>
      <div className="uni-card-header">
        {/* Logo placeholder */}
        <div className="uni-avatar">
          {getInitials(inst.name)}
        </div>
        <div className="uni-card-info">
          <h3 className="uni-card-name">{inst.name}</h3>
          <div className="uni-card-location">
            <MapPin size={13} />
            {inst.city}{inst.province ? `, ${inst.province}` : ''}
          </div>
        </div>
        <button
          className={`fav-btn${fav ? ' active' : ''}`}
          onClick={handleFav}
          title={fav ? 'Remove from saved' : 'Save university'}
        >
          <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="uni-card-badges">
        <span className={`badge ${getTypeColor(inst.type)}`}>
          <GraduationCap size={11} />
          {inst.type === 'university' ? 'University' : 'College'}
        </span>
        {scholarshipCount > 0 && (
          <span className="badge badge-green">
            <Star size={11} />
            {scholarshipCount} Scholarship{scholarshipCount > 1 ? 's' : ''}
          </span>
        )}
        {inst.country && (
          <span className="badge badge-gray">
            <Globe size={11} />
            {inst.country}
          </span>
        )}
      </div>

      {(inst.top_ug_programs?.length > 0 || inst.top_pg_programs?.length > 0) && (
        <div className="uni-card-programs">
          {[...(inst.top_ug_programs || []), ...(inst.top_pg_programs || [])].slice(0, 2).map((p, i) => (
            <div key={i} className="program-pill">
              <GraduationCap size={11} /> {p}
            </div>
          ))}
        </div>
      )}

      <div className="uni-card-footer">
        {inst.application_fee_cad && (
          <span className="uni-card-fee">
            <DollarSign size={13} />
            USD {Math.round(inst.application_fee_cad * 0.73)} app. fee
          </span>
        )}
        <span className="uni-card-cta">View Details →</span>
      </div>

      <style>{`
        .uni-card {
          display: flex; flex-direction: column; gap: 14px;
          padding: 22px; background: white;
          border-radius: var(--radius-lg); border: 1px solid var(--gray-100);
          box-shadow: var(--shadow-sm); transition: all var(--transition-slow);
          cursor: pointer; position: relative; overflow: hidden;
        }
        .uni-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--blue-500), var(--blue-300));
          opacity: 0; transition: opacity var(--transition-slow);
        }
        .uni-card:hover { box-shadow: var(--shadow-lg); border-color: var(--blue-100); transform: translateY(-3px); }
        .uni-card:hover::before { opacity: 1; }
        .uni-card-header { display: flex; align-items: flex-start; gap: 14px; }
        .uni-avatar {
          width: 52px; height: 52px; border-radius: var(--radius-md); flex-shrink: 0;
          background: linear-gradient(135deg, var(--blue-800), var(--blue-600));
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: .9rem; font-weight: 700;
          font-family: var(--font-display); box-shadow: var(--shadow-sm);
        }
        .uni-card-info { flex: 1; min-width: 0; }
        .uni-card-name {
          font-family: var(--font-display); font-size: 1rem; font-weight: 600;
          color: var(--gray-900); line-height: 1.3; margin-bottom: 5px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .uni-card-location {
          display: flex; align-items: center; gap: 4px;
          font-size: .8rem; color: var(--gray-500);
        }
        .fav-btn {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1.5px solid var(--gray-200); background: white;
          display: flex; align-items: center; justify-content: center;
          color: var(--gray-400); transition: all var(--transition); flex-shrink: 0;
        }
        .fav-btn:hover { border-color: #f87171; color: #ef4444; background: #fef2f2; }
        .fav-btn.active { border-color: #ef4444; color: #ef4444; background: #fef2f2; }
        .uni-card-badges { display: flex; flex-wrap: wrap; gap: 6px; }
        .uni-card-programs { display: flex; flex-direction: column; gap: 5px; }
        .program-pill {
          display: flex; align-items: center; gap: 6px;
          font-size: .775rem; color: var(--gray-600);
          background: var(--gray-50); border-radius: var(--radius-sm);
          padding: 4px 9px; border: 1px solid var(--gray-100);
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .uni-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: auto; padding-top: 4px;
        }
        .uni-card-fee { display: flex; align-items: center; gap: 3px; font-size: .775rem; color: var(--gray-500); }
        .uni-card-cta { font-size: .8125rem; font-weight: 600; color: var(--blue-600); }
      `}</style>
    </Link>
  )
}
