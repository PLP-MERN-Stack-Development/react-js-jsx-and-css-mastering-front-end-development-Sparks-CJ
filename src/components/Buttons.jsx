import React from 'react'
import clsx from 'clsx'

export default function Button({ variant = 'primary', children, ...props }) {
  const base = 'px-4 py-2 rounded-md font-medium transition'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }
  return (
    <button className={clsx(base, variants[variant])} {...props}>
      {children}
    </button>
  )
}
