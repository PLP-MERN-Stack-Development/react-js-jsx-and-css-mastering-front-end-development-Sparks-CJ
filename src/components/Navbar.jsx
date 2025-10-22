import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../hooks/useLocalStorage'

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">React Week3</Link>
          <Link to="/" className="text-sm text-gray-600 dark:text-gray-300">Home</Link>
          <Link to="/api" className="text-sm text-gray-600 dark:text-gray-300">API</Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
            className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </nav>
  )
}
