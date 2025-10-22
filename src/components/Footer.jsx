import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
        <span>© {new Date().getFullYear()} Celestine Jepkemboi</span>
        <span>Built with React + Tailwind</span>
      </div>
    </footer>
  )
}
