import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Search universities, programs, cities…', large = false, autoNavigate = false }) {
  const navigate  = useNavigate()
  const [val, setVal] = useState(value || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (autoNavigate) {
      navigate(`/search?q=${encodeURIComponent(val)}`)
    } else if (onSubmit) {
      onSubmit(val)
    }
  }

  const handleChange = (v) => {
    setVal(v)
    if (onChange) onChange(v)
  }

  return (
    <form onSubmit={handleSubmit} className={`search-bar-form${large ? ' large' : ''}`}>
      <Search size={large ? 20 : 16} className="search-icon" />
      <input
        type="text"
        value={val}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        autoComplete="off"
      />
      {val && (
        <button type="button" className="search-clear" onClick={() => handleChange('')}>
          <X size={16} />
        </button>
      )}
      <button type="submit" className={`btn btn-primary${large ? '' : ' btn-sm'}`}>
        {large ? 'Search' : <Search size={14} />}
      </button>

      <style>{`
        .search-bar-form {
          display: flex; align-items: center; gap: 8px;
          background: white; border-radius: var(--radius-full);
          border: 1.5px solid var(--gray-200); padding: 6px 6px 6px 16px;
          box-shadow: var(--shadow-sm); transition: border-color var(--transition), box-shadow var(--transition);
        }
        .search-bar-form:focus-within {
          border-color: var(--blue-400);
          box-shadow: 0 0 0 3px rgba(32,112,200,.12), var(--shadow-sm);
        }
        .search-bar-form.large {
          padding: 10px 8px 10px 22px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
        }
        .search-icon { color: var(--gray-400); flex-shrink: 0; }
        .search-input {
          flex: 1; border: none; outline: none; background: transparent;
          font-size: .9375rem; color: var(--gray-900);
        }
        .search-bar-form.large .search-input { font-size: 1.0625rem; }
        .search-input::placeholder { color: var(--gray-400); }
        .search-clear {
          background: none; border: none; color: var(--gray-400); padding: 4px;
          border-radius: 50%; display: flex; cursor: pointer;
          transition: color var(--transition);
        }
        .search-clear:hover { color: var(--gray-700); }
      `}</style>
    </form>
  )
}
