import React from 'react'

const styles = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white'
}

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded transition ${styles[variant]} ${props.className || ''}`}
    >
      {children}
    </button>
  )
}

export default Button
