import { useState } from 'react'
import { useScrollTop } from '../hooks'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, ArrowLeft, Clock, Globe } from 'lucide-react'
import api from '../lib/api'
import toast from 'react-hot-toast'

export default function ContactPage() {
  useScrollTop()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    if (formData.message.length < 10) {
      toast.error('Message must be at least 10 characters long')
      return
    }

    setSubmitting(true)
    try {
      const response = await api.post('/contact', formData)
      toast.success(response.data.message || 'Your message has been sent!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      const errMsg = error.response?.data?.detail || 'Failed to submit contact query. Please try again.'
      toast.error(errMsg)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page-pad">
      <div className="container" style={{ maxWidth: 1040 }}>
        {/* Navigation back link */}
        <Link to="/" className="btn btn-ghost btn-sm" style={{ marginBottom: 24, paddingLeft: 0 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Page Header */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <h1 className="h1" style={{ marginBottom: 12 }}>Contact Us</h1>
          <p style={{ color: 'var(--gray-500)', maxWidth: 580, margin: '0 auto', fontSize: '1.05rem' }}>
            Have questions about universities, programs, or study destinations? Get in touch with Wellyura's education advisors.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid-2" style={{ gap: 40, alignItems: 'start' }}>
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card" style={{ padding: 28, background: 'var(--white)' }}>
              <h3 className="h3" style={{ marginBottom: 20, color: 'var(--gray-900)' }}>Wellyura HQ</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ padding: 8, background: 'var(--blue-50)', color: 'var(--blue-600)', borderRadius: 'var(--radius-sm)', marginTop: 2 }}>
                    <Mail size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Email Us</div>
                    <a href="mailto:connect@wellyura.com" style={{ fontSize: '.95rem', color: 'var(--blue-600)', fontWeight: 500 }}>connect@wellyura.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ padding: 8, background: 'var(--blue-50)', color: 'var(--blue-600)', borderRadius: 'var(--radius-sm)', marginTop: 2 }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Call Us</div>
                    <div style={{ fontSize: '.95rem', color: 'var(--gray-800)', fontWeight: 500 }}>+91 9142263219</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ padding: 8, background: 'var(--blue-50)', color: 'var(--blue-600)', borderRadius: 'var(--radius-sm)', marginTop: 2 }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '.05em' }}>Location</div>
                    <div style={{ fontSize: '.95rem', color: 'var(--gray-800)', fontWeight: 500 }}>Jaipur, Rajasthan, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 28, background: 'var(--white)' }}>
              <h3 className="h3" style={{ marginBottom: 20, color: 'var(--gray-900)' }}>Advising Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ padding: 8, background: 'var(--blue-50)', color: 'var(--blue-600)', borderRadius: 'var(--radius-sm)', marginTop: 2 }}>
                    <Clock size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.95rem', color: 'var(--gray-800)', fontWeight: 500 }}>Monday – Friday</div>
                    <div style={{ fontSize: '.875rem', color: 'var(--gray-500)' }}>9:00 AM – 6:00 PM (IST)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ padding: 8, background: 'var(--blue-50)', color: 'var(--blue-600)', borderRadius: 'var(--radius-sm)', marginTop: 2 }}>
                    <Globe size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.95rem', color: 'var(--gray-800)', fontWeight: 500 }}>Online Consultations</div>
                    <div style={{ fontSize: '.875rem', color: 'var(--gray-500)' }}>By scheduled appointment via video call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card" style={{ padding: 36, background: 'var(--white)' }}>
            <h3 className="h3" style={{ marginBottom: 24, color: 'var(--gray-900)' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="input"
                  placeholder="What is your query about?"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Your Message</label>
                <textarea
                  className="input"
                  placeholder="Type your message details here..."
                  style={{ minHeight: 140, resize: 'vertical' }}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                disabled={submitting}
              >
                {submitting ? 'Sending...' : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
