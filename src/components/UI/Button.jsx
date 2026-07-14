import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ children, to, type = 'button', variant = 'primary', className = '', ...props }) {
  const baseStyle = "inline-block font-bold px-6 py-3 rounded text-center transition-all shadow-sm"
  const variants = {
    primary: "bg-brand-accent text-brand-navy hover:bg-yellow-500",
    secondary: "bg-brand-blue text-white hover:bg-blue-800",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
  }

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`

  if (to) {
    return <Link to={to} className={combinedClasses} {...props}>{children}</Link>
  }

  return <button type={type} className={combinedClasses} {...props}>{children}</button>
}