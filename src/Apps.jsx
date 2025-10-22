import React, { useEffect, useState } from 'react'
import RoutesFile from './routes'
import { ThemeContext } from './hooks/useLocalStorage'
import Layout from './components/Layout'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <RoutesFile />
      </Layout>
    </ThemeContext.Provider>
  )
}
