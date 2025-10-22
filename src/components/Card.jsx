import React from 'react'

export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
      {title && <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>}
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  )
}
