import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { GraduationCap, Search, Heart, User, LogOut, LayoutDashboard, Shield, Menu, X, ChevronDown, Building2 } from 'lucide-react'
import { useAuthStore } from '../../lib/store'
import toast from 'react-hot-toast'

const COUNTRIES = [
  { name: 'Canada', path: '/country/canada' },
  { name: 'USA', path: '/country/usa' },
  { name: 'UK', path: '/country/uk' },
  { name: 'Australia', path: '/country/australia' },
  { name: 'Germany', path: '/country/germany' },
  { name: 'France', path: '/country/france' },
  { name: 'Netherlands', path: '/country/netherlands' },
  { name: 'New Zealand', path: '/country/new-zealand' },
  { name: 'Ireland', path: '/country/ireland' },
  { name: 'Singapore', path: '/country/singapore' },
  { name: 'Russia', path: '/country/russia' },
  { name: 'South Korea', path: '/country/south-korea' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [userOpen, setUserOpen]   = useState(false)
  const [mobileUniOpen, setMobileUniOpen] = useState(false)
  const [uniDropdownOpen, setUniDropdownOpen] = useState(false)
  const { user, logout }          = useAuthStore()
  const navigate                  = useNavigate()
  const location                  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.nav-dropdown-wrapper')) {
        setUniDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  useEffect(() => { setMenuOpen(false); setUserOpen(false); setMobileUniOpen(false); setUniDropdownOpen(false) }, [location])

  const handleLogout = () => {
    logout()
    toast.success('Signed out successfully')
    navigate('/')
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon"><GraduationCap size={22} /></div>
          <span className="logo-text">Welly<span>ura</span></span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          
          {/* Universities Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button 
              className="nav-link dropdown-trigger" 
              onClick={(e) => { e.preventDefault(); setUniDropdownOpen(!uniDropdownOpen); }}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer', padding: '0 12px' }}
            >
              Universities <ChevronDown size={12} style={{ transform: uniDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {uniDropdownOpen && (
              <div className="nav-dropdown-menu" style={{ display: 'block' }}>
                {COUNTRIES.map((c) => (
                  <NavLink key={c.name} to={c.path} className="dropdown-menu-item" onClick={() => setUniDropdownOpen(false)}>
                    {c.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/accommodations" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <Building2 size={15} /> Accommodations
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            <Search size={15} /> Search
          </NavLink>
          {user && (
            <NavLink to="/favorites" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              <Heart size={15} /> Saved
            </NavLink>
          )}
        </div>

        {/* Desktop auth */}
        <div className="nav-auth">
          {user ? (
            <div className="user-menu-wrap">
              <button className="user-btn" onClick={() => setUserOpen(!userOpen)}>
                <div className="avatar">{user.full_name?.[0]?.toUpperCase()}</div>
                <span className="user-name">{user.full_name?.split(' ')[0]}</span>
                <ChevronDown size={14} />
              </button>
              {userOpen && (
                <div className="dropdown">
                  <Link to="/dashboard" className="dropdown-item"><LayoutDashboard size={15} /> Dashboard</Link>
                  <Link to="/favorites"  className="dropdown-item"><Heart size={15} /> Saved Universities</Link>
                  {user.is_admin && <Link to="/admin" className="dropdown-item admin-item"><Shield size={15} /> Admin Panel</Link>}
                  <div className="dropdown-divider" />
                  <button onClick={handleLogout} className="dropdown-item danger"><LogOut size={15} /> Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/login" className="btn btn-ghost btn-sm">Sign In</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <NavLink to="/" end className="mobile-link">Home</NavLink>
          
          {/* Mobile Universities Expandable */}
          <button className="mobile-link" onClick={() => setMobileUniOpen(!mobileUniOpen)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: 'none', border: 'none', textAlign: 'left' }}>
            <span>Universities</span>
            <ChevronDown size={16} style={{ transform: mobileUniOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginLeft: 'auto' }} />
          </button>
          {mobileUniOpen && (
            <div style={{ paddingLeft: '16px', background: 'var(--gray-50)', display: 'flex', flexDirection: 'column', gap: '2px', borderRadius: 'var(--radius-sm)' }}>
              {COUNTRIES.map((c) => (
                <NavLink key={c.name} to={c.path} className="mobile-link" style={{ fontSize: '0.85rem', padding: '8px 12px' }}>
                  {c.name}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink to="/accommodations" className="mobile-link">Accommodations</NavLink>
          <NavLink to="/search" className="mobile-link">Search</NavLink>
          {user && <NavLink to="/favorites" className="mobile-link">Saved</NavLink>}
          {user && <NavLink to="/dashboard" className="mobile-link">Dashboard</NavLink>}
          {user?.is_admin && <NavLink to="/admin" className="mobile-link">Admin</NavLink>}
          <div className="mobile-divider" />
          {user
            ? <button onClick={handleLogout} className="mobile-link danger-link">Sign Out</button>
            : <>
                <Link to="/login" className="mobile-link">Sign In</Link>
                <Link to="/register" className="btn btn-primary" style={{ margin: '8px 16px' }}>Get Started</Link>
              </>
          }
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          height: var(--nav-h);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: all var(--transition-slow);
        }
        .navbar.scrolled {
          background: rgba(255,255,255,0.97);
          border-bottom-color: var(--gray-100);
          box-shadow: var(--shadow-sm);
        }
        .nav-inner {
          height: 100%; display: flex; align-items: center; gap: 32px;
        }
        .nav-logo {
          display: flex; align-items: center; gap: 10px; flex-shrink: 0;
          text-decoration: none;
        }
        .logo-icon {
          width: 38px; height: 38px; border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--blue-600), var(--blue-800));
          display: flex; align-items: center; justify-content: center;
          color: white; box-shadow: var(--shadow-blue);
        }
        .logo-text {
          font-family: var(--font-display); font-size: 1.25rem; font-weight: 700;
          color: var(--gray-900);
        }
        .logo-text span { color: var(--blue-600); }
        .nav-links {
          display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0;
          padding: 4px 0;
          overflow: visible;
        }
        .nav-link {
          display: flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: var(--radius-md);
          font-size: .9rem; font-weight: 500; color: var(--gray-600);
          transition: all var(--transition); text-decoration: none;
          flex-shrink: 0;
        }
        .nav-link:hover { color: var(--blue-600); background: var(--blue-50); }
        .nav-link.active { color: var(--blue-600); background: var(--blue-50); }
        .nav-auth { display: flex; align-items: center; gap: 8px; margin-left: auto; }
        .user-menu-wrap { position: relative; }
        .user-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 6px 12px 6px 6px; border-radius: var(--radius-full);
          border: 1.5px solid var(--gray-200); background: var(--white);
          transition: all var(--transition); cursor: pointer;
        }
        .user-btn:hover { border-color: var(--blue-300); background: var(--blue-50); }
        .avatar {
          width: 30px; height: 30px; border-radius: 50%;
          background: linear-gradient(135deg, var(--blue-500), var(--blue-700));
          color: white; font-size: .85rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
        }
        .user-name { font-size: .875rem; font-weight: 500; color: var(--gray-700); }
        .dropdown {
          position: absolute; right: 0; top: calc(100% + 8px);
          width: 220px; background: white; border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl); border: 1px solid var(--gray-100);
          padding: 8px; z-index: 200; animation: fadeIn .15s ease;
        }
        .dropdown-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: var(--radius-md);
          font-size: .875rem; font-weight: 500; color: var(--gray-700);
          text-decoration: none; border: none; background: none;
          width: 100%; cursor: pointer; transition: all var(--transition);
        }
        .dropdown-item:hover { background: var(--gray-50); color: var(--gray-900); }
        .dropdown-item.danger { color: #ef4444; }
        .dropdown-item.danger:hover { background: #fef2f2; }
        .admin-item { color: var(--gold); }
        .dropdown-divider { height: 1px; background: var(--gray-100); margin: 6px 0; }
        .hamburger {
          display: none; background: none; border: none;
          color: var(--gray-700); padding: 6px; border-radius: var(--radius-sm);
          margin-left: auto;
        }
        .mobile-drawer {
          display: flex; flex-direction: column; gap: 4px;
          padding: 12px 16px 20px; background: white;
          border-top: 1px solid var(--gray-100); box-shadow: var(--shadow-lg);
        }
        .mobile-link {
          padding: 11px 14px; border-radius: var(--radius-md);
          font-size: .95rem; font-weight: 500; color: var(--gray-700);
          text-decoration: none; border: none; background: none;
          text-align: left; cursor: pointer; transition: all var(--transition);
        }
        .mobile-link:hover { background: var(--blue-50); color: var(--blue-600); }
        .danger-link { color: #ef4444; }
        .mobile-divider { height: 1px; background: var(--gray-100); margin: 8px 0; }
        .nav-dropdown-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
        }
        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1010;
          min-width: 180px;
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          padding: 8px 0;
          margin-top: 2px;
        }
        .dropdown-menu-item {
          display: block;
          padding: 8px 16px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--gray-700);
          text-decoration: none;
          transition: all var(--transition);
        }
        .dropdown-menu-item:hover {
          background: var(--blue-50);
          color: var(--blue-600);
        }
        .dropdown-menu-item.active {
          background: var(--blue-50);
          color: var(--blue-600);
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .nav-links, .nav-auth { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
