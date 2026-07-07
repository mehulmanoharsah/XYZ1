import { useState, useEffect, useCallback, useRef } from 'react'
import api from '../lib/api'

// ── Generic fetch hook ────────────────────────────────────────
export function useFetch(url, params = {}, deps = []) {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  const paramsStr = JSON.stringify(params)

  useEffect(() => {
    if (!url) return
    let cancelled = false
    setLoading(true)
    setError(null)
    api.get(url, { params: JSON.parse(paramsStr) })
      .then((r) => { if (!cancelled) setData(r.data) })
      .catch((e) => { if (!cancelled) setError(e.response?.data?.detail || 'Something went wrong') })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [url, paramsStr, ...deps])

  return { data, loading, error, refetch: () => {} }
}

// ── Debounced search ──────────────────────────────────────────
export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(t)
  }, [value, delay])
  return debounced
}

// ── Institutions list ─────────────────────────────────────────
export function useInstitutions(filters = {}) {
  const [data, setData]       = useState({ data: [], total: 0, total_pages: 1, page: 1 })
  const [loading, setLoading] = useState(true)

  const filtersStr = JSON.stringify(filters)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    api.get('/institutions', { params: filters })
      .then((r) => { if (!cancelled) setData(r.data) })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [filtersStr])

  return { ...data, loading }
}

// ── Single institution ────────────────────────────────────────
export function useInstitution(id) {
  const [inst, setInst]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    api.get(`/institutions/${id}`)
      .then((r) => setInst(r.data))
      .catch((e) => setError(e.response?.data?.detail || 'Not found'))
      .finally(() => setLoading(false))
  }, [id])

  return { inst, loading, error }
}

// ── Programs ──────────────────────────────────────────────────
export function usePrograms(institutionId, level) {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    if (!institutionId) return
    setLoading(true)
    api.get(`/programs/${institutionId}`, { params: level ? { level } : {} })
      .then((r) => setPrograms(r.data))
      .finally(() => setLoading(false))
  }, [institutionId, level])

  return { programs, loading }
}

// ── Scroll to top on route change ────────────────────────────
export function useScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
}

// ── Dynamic SEO Document Metadata ────────────────────────────
export function useDocumentMetadata(title, description) {
  useEffect(() => {
    if (title) {
      document.title = title
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])
}

