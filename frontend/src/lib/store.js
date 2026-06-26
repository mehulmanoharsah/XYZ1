import { create } from 'zustand'
import api from './api'

export const useAuthStore = create((set, get) => ({
  user: null,
  token: localStorage.getItem('token'),
  loading: true,

  init: async () => {
    const token = localStorage.getItem('token')
    if (!token) { set({ loading: false }); return }
    try {
      const { data } = await api.get('/auth/me')
      set({ user: data, loading: false })
    } catch {
      localStorage.removeItem('token')
      set({ user: null, token: null, loading: false })
    }
  },

  login: async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('token', data.access_token)
    set({ token: data.access_token })
    const me = await api.get('/auth/me')
    set({ user: me.data })
    return me.data
  },

  register: async (payload) => {
    const { data } = await api.post('/auth/register', payload)
    localStorage.setItem('token', data.access_token)
    set({ token: data.access_token })
    const me = await api.get('/auth/me')
    set({ user: me.data })
    return me.data
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null })
  },

  updateUser: (updates) => set((s) => ({ user: { ...s.user, ...updates } })),
}))

export const useFavoritesStore = create((set, get) => ({
  favorites: [],
  ids: new Set(),

  load: async () => {
    try {
      const { data } = await api.get('/favorites')
      set({ favorites: data, ids: new Set(data.map((f) => f.institution_id)) })
    } catch {}
  },

  toggle: async (inst) => {
    const { ids } = get()
    if (ids.has(inst.id)) {
      await api.delete(`/favorites/${inst.id}`)
      set((s) => {
        const next = new Set(s.ids)
        next.delete(inst.id)
        return { favorites: s.favorites.filter((f) => f.institution_id !== inst.id), ids: next }
      })
    } else {
      const { data } = await api.post('/favorites', {
        institution_id: inst.id,
        institution_name: inst.name,
        city: inst.city,
        province: inst.province,
        country: inst.country,
      })
      set((s) => ({ favorites: [data, ...s.favorites], ids: new Set([...s.ids, inst.id]) }))
    }
  },

  isFav: (id) => get().ids.has(id),
}))
