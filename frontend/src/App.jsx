import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore, useFavoritesStore } from './lib/store'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import HomePage       from './pages/HomePage'
import CountryPage    from './pages/CountryPage'
import UniversityPage from './pages/UniversityPage'
import SearchPage     from './pages/SearchPage'
import LoginPage      from './pages/LoginPage'
import RegisterPage   from './pages/RegisterPage'
import DashboardPage  from './pages/DashboardPage'
import FavoritesPage  from './pages/FavoritesPage'
import AdminPage      from './pages/AdminPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage      from './pages/TermsPage'
import ContactPage    from './pages/ContactPage'
import NotFoundPage   from './pages/NotFoundPage'

function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuthStore()
  if (loading) return <div className="flex-center" style={{ height: '100vh', fontSize: '1.5rem', color: 'var(--blue-600)' }}>Loading…</div>
  if (!user) return <Navigate to="/login" replace />
  if (adminOnly && !user.is_admin) return <Navigate to="/dashboard" replace />
  return children
}

export default function App() {
  const { init } = useAuthStore()
  const { load } = useFavoritesStore()
  const { user }  = useAuthStore()

  useEffect(() => { init() }, [])
  useEffect(() => { if (user) load() }, [user])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                             element={<HomePage />} />
        <Route path="/country/:countryName"         element={<CountryPage />} />
        <Route path="/country/:countryName/university/:slug" element={<UniversityPage />} />
        <Route path="/university/:slug"             element={<UniversityPage />} />
        <Route path="/search"                       element={<SearchPage />} />
        <Route path="/login"                        element={<LoginPage />} />
        <Route path="/register"                     element={<RegisterPage />} />
        <Route path="/dashboard"                    element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/favorites"                    element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
        <Route path="/admin"                        element={<ProtectedRoute adminOnly><AdminPage /></ProtectedRoute>} />
        <Route path="/privacy"                      element={<PrivacyPolicyPage />} />
        <Route path="/terms"                        element={<TermsPage />} />
        <Route path="/contact"                      element={<ContactPage />} />
        <Route path="*"                             element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}
