import { createContext } from 'react'
export const ThemeContext = createContext({ theme: 'light', setTheme: () => {} })

// Custom hook example for values stored in localStorage (reusable)
export function useLocalStorage(key, initial) {
  const read = () => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  }
  const set = value => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  return [read, set]
}
