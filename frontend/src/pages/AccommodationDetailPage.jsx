import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { MapPin, Building, Star, CheckCircle, Wifi, Compass, Calendar, Send, ChevronLeft, Lock } from 'lucide-react'
import toast from 'react-hot-toast'
import api from '../lib/api'
import { useAuthStore } from '../lib/store'
import { useScrollTop, useDocumentMetadata } from '../hooks'

export default function AccommodationDetailPage() {
  useScrollTop()
  const { slug } = useParams()
  const navigate = useNavigate()
  const { user } = useAuthStore()

  const [accommodation, setAccommodation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState('')

  // Form State
  const [roomType, setRoomType] = useState('')
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Reviews State
  const [reviews, setReviews] = useState([])
  const [reviewEligible, setReviewEligible] = useState(false)
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewComment, setReviewComment] = useState('')
  const [reviewError, setReviewError] = useState('')

  // Document metadata hooks will be updated once accommodation is loaded
  useDocumentMetadata(
    accommodation ? `${accommodation.name} | Student Housing` : 'Student Housing Details',
    accommodation ? accommodation.description : 'Details about student housing options.'
  )

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true)
      try {
        const response = await api.get(`/accommodations/${slug}`)
        setAccommodation(response.data)
        if (response.data.images?.length > 0) {
          setActiveImage(response.data.images[0])
        }
        if (response.data.room_types?.length > 0) {
          setRoomType(response.data.room_types[0].name)
        }
      } catch (err) {
        console.error('Failed to load accommodation detail:', err)
        toast.error('Accommodation not found.')
        navigate('/accommodations')
      } finally {
        setLoading(false)
      }
    }
    fetchDetail()
  }, [slug])

  useEffect(() => {
    if (!accommodation) return

    const fetchReviewsAndEligibility = async () => {
      try {
        const reviewsRes = await api.get(`/accommodations/${accommodation.id}/reviews`)
        setReviews(reviewsRes.data || [])

        if (user) {
          const eligRes = await api.get(`/accommodations/${accommodation.id}/review-eligibility`)
          setReviewEligible(eligRes.data.eligible)
        }
      } catch (err) {
        console.error('Failed to load reviews:', err)
      }
    }
    fetchReviewsAndEligibility()
  }, [accommodation, user])

  const handleReviewSubmit = async (e) => {
    e.preventDefault()
    setReviewError('')
    try {
      const response = await api.post(`/accommodations/${accommodation.id}/reviews`, {
        rating: reviewRating,
        comment: reviewComment
      })
      toast.success('Review submitted successfully!')
      setReviewComment('')
      setReviewRating(5)
      
      const reviewsRes = await api.get(`/accommodations/${accommodation.id}/reviews`)
      setReviews(reviewsRes.data || [])
      setReviewEligible(false)
      
      setAccommodation(prev => ({
        ...prev,
        rating: response.data.rating,
        reviews_count: response.data.reviews_count
      }))
    } catch (err) {
      console.error('Failed to submit review:', err)
      setReviewError(err.response?.data?.detail || 'Failed to submit review.')
    }
  }

  const handleInquirySubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      toast.error('Please log in to submit a housing inquiry.')
      navigate('/login')
      return
    }

    if (!checkInDate || !checkOutDate) {
      toast.error('Please select check-in and check-out dates.')
      return
    }

    setSubmitting(true)
    try {
      const payload = {
        accommodation_id: accommodation._id,
        room_type: roomType,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        message: message || undefined
      }

      await api.post('/accommodations/inquire', payload)
      toast.success('Your housing inquiry has been submitted! Check your dashboard for updates.')
      
      // Reset form fields
      setCheckInDate('')
      setCheckOutDate('')
      setMessage('')
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      toast.error(err.response?.data?.detail || 'Inquiry submission failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const formatCurrency = (amount, countryName) => {
    const symbol = countryName?.toLowerCase() === 'usa' ? 'USD' : countryName?.toLowerCase() === 'uk' ? 'GBP' : 'CAD'
    return `${symbol} $${amount}`
  }

  if (loading) {
    return (
      <div className="page-pad container flex-center" style={{ height: '70vh', flexDirection: 'column', gap: '16px' }}>
        <div className="skeleton" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
        <div className="skeleton" style={{ width: '250px', height: '24px' }} />
        <div className="skeleton" style={{ width: '150px', height: '16px' }} />
      </div>
    )
  }

  if (!accommodation) return null

  return (
    <div className="page-pad container">
      
      {/* ── Back button ────────────────────────────────────────── */}
      <Link to="/accommodations" className="btn btn-ghost btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
        <ChevronLeft size={16} />
        <span>Back to listings</span>
      </Link>

      {/* ── Title block ───────────────────────────────────────── */}
      <header style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <span className="badge badge-blue" style={{ textTransform: 'capitalize' }}>
            {accommodation.type?.replace('_', ' ')}
          </span>
          {accommodation.gender_policy === 'female_only' && (
            <span className="badge" style={{ background: '#fdf2f8', color: '#db2777', border: '1px solid #fbcfe8', fontWeight: 600 }}>
              🎀 Girls Only
            </span>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--gray-600)' }}>
            <Star size={14} fill="var(--gold)" color="var(--gold)" />
            <strong>{accommodation.rating}</strong> ({accommodation.reviews_count} reviews)
          </div>
        </div>
        <h1 className="h1" style={{ color: 'var(--blue-950)', marginBottom: '12px', fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>{accommodation.name}</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: 'var(--gray-600)', fontSize: '0.95rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={16} style={{ color: 'var(--blue-600)' }} />
            {accommodation.address}, {accommodation.city}, {accommodation.province}, {accommodation.country}
          </span>
        </div>
      </header>

      {/* ── Images Grid ───────────────────────────────────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 120px', gap: '16px', marginBottom: '40px', height: '450px' }}>
        {/* Large view */}
        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--gray-950)' }}>
          <img 
            src={activeImage || 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80'} 
            alt={accommodation.name} 
            style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'all var(--transition)' }}
          />
        </div>

        {/* Vertical thumbnails */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          {accommodation.images?.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImage(img)}
              style={{ 
                border: activeImage === img ? '2px solid var(--blue-600)' : '2px solid transparent', 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden', 
                height: '75px', 
                padding: 0,
                background: 'var(--gray-900)',
                opacity: activeImage === img ? 1 : 0.75,
                transition: 'all var(--transition)'
              }}
            >
              <img src={img} alt={`view-${idx}`} style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'var(--gray-900)' }} />
            </button>
          ))}
        </div>
      </section>

      {/* ── Details Grid ──────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }}>
        
        {/* ── Left Side Details ────────────────────────────────── */}
        <div>
          
          {/* Description */}
          <div style={{ marginBottom: '40px' }}>
            <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--blue-900)' }}>About the Property</h2>
            <p className="body-lg" style={{ color: 'var(--gray-700)', lineHeight: '1.75' }}>{accommodation.description}</p>
          </div>

          <div className="divider" />

          {/* Room Options */}
          <div style={{ marginBottom: '40px' }}>
            <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--blue-900)' }}>Room Pricing & Availability</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {accommodation.room_types?.map((rt, idx) => (
                <div key={idx} className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 className="h3" style={{ color: 'var(--blue-950)', marginBottom: '8px', fontSize: '1.15rem' }}>{rt.name}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                      {rt.amenities?.map((amenity, i) => (
                        <span key={i} className="badge badge-gray" style={{ fontSize: '0.7rem' }}>{amenity}</span>
                      ))}
                    </div>
                    <span className="badge badge-green" style={{ fontSize: '0.75rem' }}>
                      {rt.available_rooms} rooms left for 2026/27
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--blue-900)' }}>
                      {formatCurrency(rt.price_per_month, accommodation.country)}
                    </span>
                    <span className="caption" style={{ display: 'block' }}>/month</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Highlights & Amenities */}
          <div style={{ marginBottom: '40px' }}>
            <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--blue-900)' }}>Property Highlights & Amenities</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
              {accommodation.amenities?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--gray-700)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--blue-600)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Rules */}
          {accommodation.rules && (
            <div style={{ marginBottom: '40px' }}>
              <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--blue-900)' }}>House Rules</h2>
              <div className="card" style={{ padding: '24px', background: 'var(--gray-50)', border: 'none' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <span className="label" style={{ fontSize: '0.7rem', color: 'var(--gray-500)' }}>Guest Policy</span>
                    <p style={{ fontWeight: 500, color: 'var(--gray-800)' }}>{accommodation.rules.guest_policy}</p>
                  </div>
                  <div>
                    <span className="label" style={{ fontSize: '0.7rem', color: 'var(--gray-500)' }}>Quiet Hours</span>
                    <p style={{ fontWeight: 500, color: 'var(--gray-800)' }}>{accommodation.rules.quiet_hours}</p>
                  </div>
                  <div>
                    <span className="label" style={{ fontSize: '0.7rem', color: 'var(--gray-500)' }}>Pets Allowed</span>
                    <p style={{ fontWeight: 500, color: 'var(--gray-800)' }}>{accommodation.rules.pets_allowed ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="divider" />

          {/* Location & Commute */}
          <div>
            <h2 className="h2" style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--blue-900)' }}>Distance to Campus</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {accommodation.nearby_universities?.map((univ, idx) => (
                <div key={idx} className="flex-between" style={{ background: 'var(--blue-50)', padding: '16px 20px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Compass size={20} style={{ color: 'var(--blue-600)' }} />
                    <div>
                      <h4 style={{ fontWeight: 600, color: 'var(--blue-950)', fontSize: '0.95rem' }}>{univ.institution_name}</h4>
                      <span className="caption" style={{ textTransform: 'capitalize' }}>
                        Commute: <strong>{univ.commute_time_mins} mins</strong> via {univ.commute_mode}
                      </span>
                    </div>
                  </div>
                  <span className="badge badge-blue">
                    {univ.distance_km} km away
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right Side Booking Form ───────────────────────────── */}
        <aside className="card-glass" style={{ padding: '32px', background: 'rgba(255,255,255,0.9)', border: '1px solid var(--blue-100)', position: 'sticky', top: '100px', boxShadow: 'var(--shadow-xl)' }}>
          <h3 className="h3" style={{ color: 'var(--blue-950)', marginBottom: '4px', fontSize: '1.25rem' }}>Booking Inquiry</h3>
          <p className="caption" style={{ marginBottom: '24px' }}>Submit a request to check availability or schedule a video tour.</p>

          {!user ? (
            <div style={{ textAlign: 'center', padding: '24px 12px', background: 'var(--blue-50)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--blue-200)' }}>
              <Lock size={32} style={{ color: 'var(--blue-500)', marginBottom: '12px' }} />
              <h4 style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--blue-950)' }}>Account Required</h4>
              <p className="caption" style={{ marginBottom: '16px' }}>You need to be logged in to send a request to this student housing option.</p>
              <Link to="/login" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Log In / Register
              </Link>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit}>
              {/* Select Room */}
              <div className="form-group">
                <label className="form-label">Preferred Room Type</label>
                <select 
                  className="input select" 
                  value={roomType} 
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                >
                  {accommodation.room_types?.map((rt, i) => (
                    <option key={i} value={rt.name}>{rt.name}</option>
                  ))}
                </select>
              </div>

              {/* Dates */}
              <div className="form-group">
                <label className="form-label">Check-in Date</label>
                <input 
                  type="date" 
                  className="input" 
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Check-out Date</label>
                <input 
                  type="date" 
                  className="input" 
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Message & Preferences</label>
                <textarea 
                  className="input" 
                  rows={4}
                  placeholder="Tell the host about yourself, preferred floor, dietary requests if meal plans apply, etc."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                disabled={submitting}
              >
                <Send size={16} />
                <span>{submitting ? 'Sending Request...' : 'Submit Inquiry'}</span>
              </button>
            </form>
          )}
        </aside>

      </div>

      {/* Reviews Section */}
      <section style={{ marginTop: '56px', borderTop: '1px solid var(--gray-100)', paddingTop: '40px', marginBottom: '60px' }}>
        <h2 className="h2" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', color: 'var(--blue-950)' }}>
          <Star size={24} fill="var(--gold)" color="var(--gold)" />
          <span>Student Reviews ({reviews.length})</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '48px', alignItems: 'start' }}>
          {/* Reviews list */}
          <div>
            {reviews.length === 0 ? (
              <div style={{ padding: '40px 0', color: 'var(--gray-400)', textAlign: 'center' }}>
                <p>No reviews submitted for this property yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {reviews.map((rev) => (
                  <div key={rev._id} style={{ borderBottom: '1px solid var(--gray-100)', paddingBottom: '20px' }}>
                    <div className="flex-between" style={{ marginBottom: '8px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--blue-950)' }}>{rev.user_name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>
                        {new Date(rev.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '10px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < rev.rating ? "var(--gold)" : "none"} 
                          color={i < rev.rating ? "var(--gold)" : "var(--gray-300)"} 
                        />
                      ))}
                    </div>
                    <p style={{ color: 'var(--gray-600)', fontSize: '0.925rem', lineHeight: 1.6 }}>{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Write a review form */}
          <aside className="card" style={{ padding: '24px', background: 'var(--gray-50)', border: '1px solid var(--gray-100)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--blue-950)', marginBottom: '16px' }}>
              Write a Review
            </h3>

            {user ? (
              reviewEligible ? (
                <form onSubmit={handleReviewSubmit}>
                  {/* Rating Selection */}
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label">Your Rating</label>
                    <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          <Star 
                            size={28} 
                            fill={star <= reviewRating ? "var(--gold)" : "none"} 
                            color={star <= reviewRating ? "var(--gold)" : "var(--gray-300)"} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="form-group" style={{ marginBottom: '16px' }}>
                    <label className="form-label">Review Comment</label>
                    <textarea
                      className="input"
                      rows={4}
                      placeholder="Share your experience living at this student accommodation..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      required
                      style={{ background: 'white' }}
                    />
                  </div>

                  {reviewError && (
                    <p style={{ color: 'red', fontSize: '0.85rem', marginBottom: '12px' }}>{reviewError}</p>
                  )}

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Submit Review
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '12px 0', color: 'var(--gray-500)', fontSize: '0.875rem' }}>
                  <Lock size={20} style={{ margin: '0 auto 8px', opacity: 0.5, display: 'block' }} />
                  <p style={{ lineHeight: 1.5 }}>
                    Only verified students who have a booking inquiry record here can submit a review.
                  </p>
                </div>
              )
            ) : (
              <div style={{ textAlign: 'center', padding: '12px 0', color: 'var(--gray-500)', fontSize: '0.875rem' }}>
                <p>Please log in to submit a review.</p>
              </div>
            )}
          </aside>
        </div>
      </section>

    </div>
  )
}
