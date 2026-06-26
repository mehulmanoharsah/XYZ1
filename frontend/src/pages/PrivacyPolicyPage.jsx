import { useScrollTop } from '../hooks'
import { Link } from 'react-router-dom'
import { Shield, Eye, Lock, FileText, ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
  useScrollTop()

  return (
    <div className="page-pad">
      <div className="container" style={{ maxWidth: 840 }}>
        {/* Navigation back link */}
        <Link to="/" className="btn btn-ghost btn-sm" style={{ marginBottom: 24, paddingLeft: 0 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Page Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'inline-flex', padding: 12, background: 'var(--blue-50)', color: 'var(--blue-600)', borderRadius: 'var(--radius-md)', marginBottom: 16 }}>
            <Shield size={32} />
          </div>
          <h1 className="h1" style={{ marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ color: 'var(--gray-500)' }}>Last Updated: June 26, 2026</p>
        </div>

        {/* Content Card */}
        <div className="card" style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 32, background: 'var(--white)' }}>
          {/* Section 1 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Eye size={18} className="text-blue" /> 1. Information We Collect
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 12 }}>
              At <strong>Wellyura</strong>, we gather information to provide a highly personalized and efficient university discovery platform. This includes:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Account Details:</strong> Your name, email address, password, telephone number, and your preferred study destination when you register an account.</li>
              <li><strong>Usage Information:</strong> Data about how you search, save universities, and click on programs. We keep track of search histories and saved favorites.</li>
              <li><strong>Device & Logging:</strong> IP addresses, browser specifications, operating system, and system access logs for analytics and security tracking.</li>
            </ul>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 2 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <FileText size={18} className="text-blue" /> 2. How We Use Your Information
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 12 }}>
              Wellyura processes your personal data to offer verification checks, list matching recommendations, and technical support:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>To build and maintain your profile dashboard and secure credentials.</li>
              <li>To store and manage your saved universities list.</li>
              <li>To answer queries, support requests, and process submissions through our contact systems.</li>
              <li>To run anonymous, aggregated analytics to improve search performance and site functionality.</li>
            </ul>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 3 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Lock size={18} className="text-blue" /> 3. Data Protection and Encryption
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7 }}>
              We deploy strict structural safeguards: password databases are secured via industry-grade <strong>bcrypt</strong> hashing, and data transmissions use <strong>HTTPS SSL encryption</strong>. However, please remember that no communication channel over the internet is 100% impenetrable. Wellyura cannot guarantee absolute cryptographic safety.
            </p>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 4 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16 }}>4. Cookies and Analytical Tracking</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7 }}>
              We use lightweight functional cookies to manage secure sessions, prevent fraud, and store temporary user options. You can choose to block cookies using your browser options, though this may prevent login actions or block dashboard functionality.
            </p>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 5 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16 }}>5. Contact Our Privacy Officer</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 16 }}>
              If you have any questions about this privacy statement, would like to request data extraction, or request permanent deletion of your user account, please contact us:
            </p>
            <div style={{ background: 'var(--gray-50)', padding: 20, borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-100)', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: '.9rem', color: 'var(--gray-700)' }}>📧 <strong>Email:</strong> <a href="mailto:connect@wellyura.com" style={{ color: 'var(--blue-600)', fontWeight: 500 }}>connect@wellyura.com</a></div>
              <div style={{ fontSize: '.9rem', color: 'var(--gray-700)' }}>📞 <strong>Phone:</strong> +91 9142263219</div>
              <div style={{ fontSize: '.9rem', color: 'var(--gray-700)' }}>📍 <strong>Address:</strong> Jaipur, Rajasthan, India</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
