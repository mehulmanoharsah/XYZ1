import { X, SlidersHorizontal } from 'lucide-react'

export default function FilterSidebar({ filters, onChange, onReset, provinces = [], cities = [] }) {
  const update = (key, value) => onChange({ ...filters, [key]: value, page: 1 })

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SlidersHorizontal size={16} color="var(--blue-600)" />
          <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>Filters</span>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={onReset} style={{ padding: '4px 10px', fontSize: '.78rem' }}>
          <X size={13} /> Clear all
        </button>
      </div>

      <div className="filter-group">
        <label className="form-label">Country</label>
        <select
          className="input select"
          value={filters.country || ''}
          onChange={(e) => {
            onChange({ ...filters, country: e.target.value, province: '', city: '', page: 1 });
          }}
        >
          <option value="">All Countries</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Ireland">Ireland</option>
          <option value="Singapore">Singapore</option>
          <option value="Russia">Russia</option>
          <option value="South Korea">South Korea</option>
        </select>
      </div>

      <div className="filter-group">
        <label className="form-label">Institution Type</label>
        <div className="filter-options">
          {['', 'university', 'college'].map((t) => (
            <button
              key={t}
              className={`filter-chip${filters.type === t ? ' active' : ''}`}
              onClick={() => update('type', t)}
            >
              {t === '' ? 'All' : t === 'university' ? 'Universities' : 'Colleges'}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label className="form-label">Level</label>
        <div className="filter-options">
          {['', 'UG', 'PG'].map((l) => (
            <button
              key={l}
              className={`filter-chip${filters.level === l ? ' active' : ''}`}
              onClick={() => update('level', l)}
            >
              {l === '' ? 'All' : l === 'UG' ? 'Undergraduate' : 'Postgraduate'}
            </button>
          ))}
        </div>
      </div>

      {provinces.length > 0 && (
        <div className="filter-group">
          <label className="form-label">Province</label>
          <select
            className="input select"
            value={filters.province || ''}
            onChange={(e) => update('province', e.target.value)}
          >
            <option value="">All Provinces</option>
            {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      )}

      {cities.length > 0 && (
        <div className="filter-group">
          <label className="form-label">City</label>
          <select
            className="input select"
            value={filters.city || ''}
            onChange={(e) => update('city', e.target.value)}
          >
            <option value="">All Cities</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      <div className="filter-group">
        <label className="form-label">
          <input
            type="checkbox"
            checked={filters.scholarship === true || filters.scholarship === 'true'}
            onChange={(e) => update('scholarship', e.target.checked || undefined)}
            style={{ marginRight: 8 }}
          />
          Scholarships Available
        </label>
      </div>

      <style>{`
        .filter-sidebar {
          background: white; border-radius: var(--radius-lg);
          border: 1px solid var(--gray-100); box-shadow: var(--shadow-sm);
          padding: 20px; display: flex; flex-direction: column; gap: 20px;
          position: sticky; top: calc(var(--nav-h) + 16px);
        }
        .filter-header {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 16px; border-bottom: 1px solid var(--gray-100);
        }
        .filter-group { display: flex; flex-direction: column; gap: 10px; }
        .filter-options { display: flex; flex-wrap: wrap; gap: 6px; }
        .filter-chip {
          padding: 6px 14px; border-radius: var(--radius-full);
          border: 1.5px solid var(--gray-200); background: white;
          font-size: .8125rem; font-weight: 500; color: var(--gray-600);
          transition: all var(--transition); cursor: pointer;
        }
        .filter-chip:hover { border-color: var(--blue-300); color: var(--blue-600); background: var(--blue-50); }
        .filter-chip.active { border-color: var(--blue-500); background: var(--blue-600); color: white; }
      `}</style>
    </aside>
  )
}
