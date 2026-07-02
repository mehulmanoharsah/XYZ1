import { useState, useMemo } from 'react'
import { useScrollTop } from '../hooks'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, HelpCircle, ArrowLeft, Mail, MessageSquare, GraduationCap, DollarSign, User, ShieldCheck } from 'lucide-react'

// FAQ data structured by category
const FAQ_DATA = [
  {
    category: 'General',
    icon: HelpCircle,
    questions: [
      {
        q: 'What is Wellyura?',
        a: 'Wellyura is a comprehensive global directory designed to help students discover, compare, and connect with universities and colleges worldwide. We consolidate information on tuition, courses, location, and campus facilities so you can make informed decisions about your international education.'
      },
      {
        q: 'Is Wellyura free for students to use?',
        a: 'Yes, Wellyura is 100% free for students. You can browse universities, filter programs by budget or level, search for scholarships, and save your favorites to your personal dashboard without any fees.'
      },
      {
        q: 'Which countries are featured on Wellyura?',
        a: 'We list institutions from major international study destinations, including Canada, the USA, the UK, Australia, Germany, France, the Netherlands, New Zealand, Ireland, Singapore, Russia, and South Korea.'
      }
    ]
  },
  {
    category: 'Admissions',
    icon: GraduationCap,
    questions: [
      {
        q: 'Does Wellyura process university applications directly?',
        a: 'No, Wellyura is an informational directory and search portal. We do not process admissions directly. However, we provide direct links to the official application pages and departmental contact information for each university so you can apply directly.'
      },
      {
        q: 'What level of programs can I search for on Wellyura?',
        a: 'We catalog both Undergraduate (UG) programs (such as Bachelor\'s degrees, diplomas, and associate degrees) and Postgraduate (PG) programs (including Master\'s degrees, MBAs, and PhDs).'
      },
      {
        q: 'How do I know if I am eligible for a university program?',
        a: 'Each university detail page lists basic admission criteria, language requirements (like IELTS/TOEFL), and program prerequisites. Since these requirements vary, you should verify details on the official university portal using the link provided.'
      }
    ]
  },
  {
    category: 'Tuition & Scholarships',
    icon: DollarSign,
    questions: [
      {
        q: 'How accurate is the tuition fee information listed?',
        a: 'Tuition fee estimates are updated periodically using officially published figures from the institutions. However, fees can change based on intake terms, course load, and residency status. We recommend checking the official university site for current session rates.'
      },
      {
        q: 'Does Wellyura offer or sponsor scholarships?',
        a: 'Wellyura does not sponsor scholarships directly. However, we index university-specific scholarships, external funding options, and financial assistance programs on individual university profile pages to help you fund your studies.'
      },
      {
        q: 'Are the tuition fees listed for domestic or international students?',
        a: 'Most tuition fees displayed on Wellyura target international student intakes. Where available, we indicate fee ranges and conditions. Make sure to review the specific breakdowns provided on the university\'s details page.'
      }
    ]
  },
  {
    category: 'Account & Favorites',
    icon: User,
    questions: [
      {
        q: 'Why should I register a Wellyura account?',
        a: 'By creating a free account, you unlock your personal Dashboard. This lets you save your favorite universities/programs, access recent search logs, track deadlines, and receive personalized institutional recommendations based on your preferences.'
      },
      {
        q: 'How do I save a university to my favorites list?',
        a: 'Once logged in, simply click the heart icon on any university card or profile page. You can access all saved institutions from the "Saved" tab in the navbar or via your main dashboard.'
      },
      {
        q: 'How do I request account deletion or data extraction?',
        a: 'We respect your privacy. If you want to permanently delete your account or download your profile data, please send a request through our Contact Us page or email our privacy desk at connect@wellyura.com.'
      }
    ]
  }
]

export default function FAQPage() {
  useScrollTop()

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedIndex, setExpandedIndex] = useState(null) // Format: "categoryIndex-questionIndex"

  const toggleAccordion = (indexKey) => {
    setExpandedIndex(prev => (prev === indexKey ? null : indexKey))
  }

  // Filter FAQs based on active category and search query
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.map((cat, catIdx) => {
      // Filter category tab
      if (activeCategory !== 'All' && cat.category !== activeCategory) {
        return { ...cat, questions: [] }
      }

      // Filter query matching
      const query = searchQuery.toLowerCase().trim()
      if (!query) return cat

      const matchedQuestions = cat.questions.filter(
        item => item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
      )

      return { ...cat, questions: matchedQuestions }
    }).filter(cat => cat.questions.length > 0)
  }, [searchQuery, activeCategory])

  const categoriesList = ['All', ...FAQ_DATA.map(c => c.category)]

  return (
    <div className="page-pad">
      <div className="container" style={{ maxWidth: 900 }}>
        {/* Navigation back link */}
        <Link to="/" className="btn btn-ghost btn-sm" style={{ marginBottom: 24, paddingLeft: 0 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Hero Header */}
        <div className="faq-hero">
          <div className="faq-badge">
            <HelpCircle size={15} /> Help Center
          </div>
          <h1 className="h1 faq-title">Do you have any questions?</h1>
          <p className="faq-subtitle">
            Find answers to common questions about Wellyura, exploring top global universities, comparing course tuitions, and managing your account.
          </p>

          {/* Search Box */}
          <div className="faq-search-wrap">
            <Search className="faq-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search for questions, scholarships, countries..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setExpandedIndex(null) // Reset expanded when searching
              }}
              className="faq-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="faq-search-clear">
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="faq-categories">
          {categoriesList.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setExpandedIndex(null) // Reset expanded when switching category
              }}
              className={`faq-cat-pill ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((cat, catIdx) => (
              <div key={cat.category} className="faq-section">
                <h2 className="faq-section-title">
                  <cat.icon size={20} className="faq-section-icon" /> {cat.category}
                </h2>
                <div className="faq-accordion-group">
                  {cat.questions.map((faq, qIdx) => {
                    const indexKey = `${catIdx}-${qIdx}`
                    const isExpanded = expandedIndex === indexKey
                    return (
                      <div
                        key={faq.q}
                        className={`faq-item card ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => toggleAccordion(indexKey)}
                      >
                        <div className="faq-question-row">
                          <span className="faq-question-text">{faq.q}</span>
                          <span className={`faq-arrow-icon ${isExpanded ? 'rotated' : ''}`}>
                            <ChevronDown size={18} />
                          </span>
                        </div>
                        <div className={`faq-answer-collapse ${isExpanded ? 'open' : ''}`}>
                          <div className="faq-answer-content">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="faq-empty card">
              <HelpCircle size={48} style={{ color: 'var(--gray-300)', marginBottom: 16 }} />
              <h3>No match found</h3>
              <p>We couldn't find any questions matching "{searchQuery}". Try searching for other terms like "scholarship" or "admission".</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="btn btn-secondary btn-sm" style={{ marginTop: 16 }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Contact Footer */}
        <div className="faq-cta card-glass">
          <div className="faq-cta-content">
            <h3 className="h3">Still have questions?</h3>
            <p>If you cannot find the answer to your query, our education advising team is here to guide you.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <MessageSquare size={16} /> Contact Support
          </Link>
        </div>
      </div>

      <style>{`
        .faq-hero {
          text-align: center;
          padding: 48px 0;
          background: radial-gradient(circle at top, var(--blue-50) 0%, transparent 70%);
          border-radius: var(--radius-xl);
          margin-bottom: 40px;
        }
        .faq-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--blue-50);
          color: var(--blue-600);
          border: 1px solid var(--blue-100);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }
        .faq-title {
          margin-bottom: 12px;
          color: var(--gray-950);
        }
        .faq-subtitle {
          color: var(--gray-500);
          max-width: 600px;
          margin: 0 auto 32px;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .faq-search-wrap {
          position: relative;
          max-width: 580px;
          margin: 0 auto;
          box-shadow: var(--shadow-md);
          border-radius: var(--radius-md);
        }
        .faq-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray-400);
        }
        .faq-search-input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          font-size: 1rem;
          border: 1.5px solid var(--gray-200);
          border-radius: var(--radius-md);
          outline: none;
          background: var(--white);
          transition: all var(--transition);
        }
        .faq-search-input:focus {
          border-color: var(--blue-500);
          box-shadow: 0 0 0 4px rgba(32, 112, 200, 0.15);
        }
        .faq-search-clear {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--gray-400);
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
        }
        .faq-search-clear:hover {
          color: var(--blue-600);
        }
        .faq-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 48px;
        }
        .faq-cat-pill {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          border: 1.5px solid var(--gray-200);
          background: var(--white);
          color: var(--gray-600);
          transition: all var(--transition);
          cursor: pointer;
        }
        .faq-cat-pill:hover {
          border-color: var(--blue-300);
          color: var(--blue-600);
          background: var(--blue-50);
        }
        .faq-cat-pill.active {
          border-color: var(--blue-600);
          background: var(--blue-600);
          color: var(--white);
          box-shadow: var(--shadow-blue);
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
          margin-bottom: 56px;
        }
        .faq-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-section-title {
          font-size: 1.15rem;
          color: var(--gray-800);
          font-family: var(--font-body);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--gray-100);
        }
        .faq-section-icon {
          color: var(--blue-500);
        }
        .faq-accordion-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          background: var(--white);
          transition: all var(--transition-slow);
        }
        .faq-item:hover {
          border-color: var(--blue-300);
          box-shadow: var(--shadow-md);
        }
        .faq-item.expanded {
          border-color: var(--blue-400);
          box-shadow: var(--shadow-md);
        }
        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
        }
        .faq-question-text {
          font-weight: 600;
          color: var(--gray-900);
          font-size: 1rem;
        }
        .faq-arrow-icon {
          color: var(--gray-400);
          transition: transform var(--transition);
          display: flex;
          align-items: center;
        }
        .faq-arrow-icon.rotated {
          transform: rotate(180deg);
          color: var(--blue-600);
        }
        .faq-answer-collapse {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height var(--transition-slow) ease-out, opacity var(--transition-slow) ease-out;
        }
        .faq-answer-collapse.open {
          max-height: 500px;
          opacity: 1;
        }
        .faq-answer-content {
          padding: 0 24px 20px 24px;
          border-top: 1.5px solid var(--gray-50);
          background: var(--gray-50);
          color: var(--gray-600);
          font-size: 0.9375rem;
          line-height: 1.65;
        }
        .faq-empty {
          text-align: center;
          padding: 48px;
          color: var(--gray-600);
        }
        .faq-empty h3 {
          margin-bottom: 8px;
          color: var(--gray-900);
        }
        .faq-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 40px;
          border-radius: var(--radius-lg);
          margin-top: 32px;
          gap: 24px;
        }
        .faq-cta-content {
          max-width: 500px;
        }
        .faq-cta-content h3 {
          margin-bottom: 8px;
          color: var(--gray-900);
        }
        .faq-cta-content p {
          color: var(--gray-600);
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .faq-cta {
            flex-direction: column;
            text-align: center;
            padding: 28px;
          }
          .faq-cta-content {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
