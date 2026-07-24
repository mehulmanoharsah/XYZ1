import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Mail, Phone, MapPin, Globe, ChevronDown, ChevronUp } from 'lucide-react'

export default function Footer() {
  const [showAllCountries, setShowAllCountries] = useState(false)

  const countries = [
    { name: 'Canada Universities', path: '/country/canada' },
    { name: 'USA Universities', path: '/country/usa' },
    { name: 'UK Universities', path: '/country/uk' },
    { name: 'Australia Universities', path: '/country/australia' },
    { name: 'Germany Universities', path: '/country/germany' },
    { name: 'France Universities', path: '/country/france' },
    { name: 'Netherlands Universities', path: '/country/netherlands' },
    { name: 'New Zealand Universities', path: '/country/new-zealand' },
    { name: 'Ireland Universities', path: '/country/ireland' },
    { name: 'Singapore Universities', path: '/country/singapore' },
    { name: 'Russia Universities', path: '/country/russia' },
    { name: 'South Korea Universities', path: '/country/south-korea' },
  ]

  const initialCountries = countries.slice(0, 5)
  const otherCountries = countries.slice(5)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-sm"><GraduationCap size={18} /></div>
              <span className="footer-logo-text">Welly<span>ura</span></span>
            </div>
            <p className="footer-tagline">Your trusted guide to international education. Explore top universities and colleges around the world.</p>
            <div className="footer-contact-items">
              <div className="footer-contact-item"><Mail size={14} /> connect@wellyura.com</div>
              <div className="footer-contact-item"><Phone size={14} /> +91 9142263219</div>
              <div className="footer-contact-item"><MapPin size={14} /> Jaipur, Rajasthan, India</div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            {initialCountries.map((c, i) => (
              <Link key={i} to={c.path} className="footer-link">{c.name}</Link>
            ))}

            {showAllCountries && (
              <div className="footer-expanded-links">
                {otherCountries.map((c, i) => (
                  <Link key={i} to={c.path} className="footer-link">{c.name}</Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowAllCountries(!showAllCountries)}
              className="footer-link-toggle"
              aria-expanded={showAllCountries}
            >
              {showAllCountries ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>Others <ChevronDown size={14} /></>
              )}
            </button>

            <Link to="/search?level=UG" className="footer-link" style={{ marginTop: '4px' }}>Undergraduate Programs</Link>
            <Link to="/search?level=PG" className="footer-link">Postgraduate Programs</Link>
            <Link to="/search?scholarship=true" className="footer-link">Scholarships</Link>
            <Link to="/search" className="footer-link">Global Search</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Popular Global Cities</h4>
            <Link to="/search?city=London" className="footer-link">London</Link>
            <Link to="/search?city=New York City" className="footer-link">New York</Link>
            <Link to="/search?city=Paris" className="footer-link">Paris</Link>
            <Link to="/search?city=Sydney" className="footer-link">Sydney</Link>
            <Link to="/search?city=Seoul" className="footer-link">Seoul</Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Account</h4>
            <Link to="/register" className="footer-link">Create Account</Link>
            <Link to="/login" className="footer-link">Sign In</Link>
            <Link to="/dashboard" className="footer-link">Dashboard</Link>
            <Link to="/favorites" className="footer-link">Saved Universities</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Wellyura. All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-link-sm">Privacy Policy</Link>
            <Link to="/terms" className="footer-link-sm">Terms of Service</Link>
            <Link to="/faq" className="footer-link-sm">FAQ</Link>
            <Link to="/contact" className="footer-link-sm">Contact</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--blue-950);
          color: rgba(255,255,255,0.75);
          padding: 64px 0 32px;
          margin-top: 80px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-brand {}
        .footer-logo {
          display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
        }
        .logo-icon-sm {
          width: 34px; height: 34px; border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--blue-500), var(--blue-400));
          display: flex; align-items: center; justify-content: center; color: white;
        }
        .footer-logo-text {
          font-family: var(--font-display); font-size: 1.2rem; font-weight: 700;
          color: white;
        }
        .footer-logo-text span { color: var(--blue-300); }
        .footer-tagline { font-size: .875rem; line-height: 1.65; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
        .footer-contact-items { display: flex; flex-direction: column; gap: 8px; }
        .footer-contact-item { display: flex; align-items: center; gap: 8px; font-size: .8125rem; color: rgba(255,255,255,0.55); }
        .footer-col { display: flex; flex-direction: column; gap: 12px; }
        .footer-heading {
          font-size: .75rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: rgba(255,255,255,0.9);
          margin-bottom: 4px;
        }
        .footer-link {
          font-size: .875rem; color: rgba(255,255,255,0.55);
          text-decoration: none; transition: color var(--transition);
        }
        .footer-link:hover { color: white; }
        .footer-link-toggle {
          background: none;
          border: none;
          padding: 0;
          color: var(--blue-400);
          font-size: .875rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: color var(--transition);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: -2px;
          margin-bottom: -2px;
        }
        .footer-link-toggle:hover {
          color: var(--blue-300);
        }
        .footer-expanded-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: slideDown 0.25s ease-out forwards;
          overflow: hidden;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-6px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 350px;
          }
        }
        .footer-bottom {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 28px; font-size: .8125rem; color: rgba(255,255,255,0.4);
        }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-link-sm { font-size: .8125rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color var(--transition); }
        .footer-link-sm:hover { color: rgba(255,255,255,0.8); }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
