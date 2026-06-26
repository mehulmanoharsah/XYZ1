import { useScrollTop } from '../hooks'
import { Link } from 'react-router-dom'
import { FileText, CheckCircle, AlertTriangle, Scale, ArrowLeft } from 'lucide-react'

export default function TermsPage() {
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
            <Scale size={32} />
          </div>
          <h1 className="h1" style={{ marginBottom: 12 }}>Terms of Service</h1>
          <p style={{ color: 'var(--gray-500)' }}>Last Updated: June 26, 2026</p>
        </div>

        {/* Content Card */}
        <div className="card" style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 32, background: 'var(--white)' }}>
          {/* Section 1 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <CheckCircle size={18} className="text-blue" /> 1. Acceptance of Terms
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7 }}>
              By registering an account, searching universities, or utilizing services offered by <strong>Wellyura</strong> ("Wellyura", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to any of these terms, please stop accessing or using our website.
            </p>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 2 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <FileText size={18} className="text-blue" /> 2. Accuracy of Directory Information
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 12 }}>
              While Wellyura works to verify and update tuition, scholarships, and program data:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>All information is provided for directional guidance only. Admission criteria, deadlines, and currency conversions can change directly on official university pages.</li>
              <li>Students are strictly required to verify critical enrollment requirements on the primary institution site before submitting official applications.</li>
              <li>Wellyura is not liable for errors, omissions, or updates that have not yet synced to the directory database.</li>
            </ul>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 3 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
              <AlertTriangle size={18} className="text-blue" /> 3. Acceptable Use Policy
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 12 }}>
              You agree to use our portal responsibly and legally. You shall not:
            </p>
            <ul style={{ paddingLeft: 20, color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>Scrape, duplicate, harvest, or wholesale copy directory data using bots, automation, or custom scripts.</li>
              <li>Attempt to bypass security constraints, scan backend API vulnerabilities, or overwhelm server instances.</li>
              <li>Share user account logins or access codes with third parties to compromise dashboard privacy.</li>
            </ul>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 4 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16 }}>4. Limitation of Liability</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7 }}>
              In no event shall Wellyura, its directors, or affiliates be liable for direct, indirect, incidental, or consequential damages resulting from your use or inability to use the platform. Services are provided on an "as-is" and "as-available" basis without warranties of any kind.
            </p>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 5 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16 }}>5. Governing Law and Jurisdiction</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7 }}>
              These Terms of Service shall be governed by and constructed in accordance with the laws of <strong>India</strong>. Any legal action or dispute arising out of or related to these terms shall be settled exclusively in the competent courts located in <strong>Jaipur, Rajasthan, India</strong>.
            </p>
          </div>

          <div className="divider" style={{ margin: 0 }} />

          {/* Section 6 */}
          <div>
            <h2 className="h3" style={{ color: 'var(--gray-900)', marginBottom: 16 }}>6. Inquiries and Support</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '.95rem', lineHeight: 1.7, marginBottom: 16 }}>
              For any questions, legal queries, or clarification on terms, please contact our support team:
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
