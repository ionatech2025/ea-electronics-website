import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  // Fixed link styles using reliable text utility balancing
  const linkStyle = ({ isActive }) => 
    isActive 
      ? "text-amber-500 font-bold px-3 py-2 text-sm border-b-2 border-amber-500" 
      : "text-slate-300 hover:text-white hover:bg-slate-800 rounded transition-all px-3 py-2 text-sm font-medium"

  return (
    <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo - Made crisp and highly visible */}
          <Link to="/" className="text-white font-extrabold text-lg tracking-wider flex items-center hover:text-amber-500 transition-colors">
            EA ELECTRONICS
          </Link>
          
          {/* Desktop Navigation Links Container */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkStyle}>
                {item.name}
              </NavLink>
            ))}
            <Link 
              to="/get-quote" 
              className="ml-4 bg-amber-500 text-slate-950 font-bold text-sm px-4 py-2 rounded shadow hover:bg-amber-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-400 hover:text-white focus:outline-none p-2 rounded hover:bg-slate-800 transitions-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dynamic Dropdown Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-4 pt-2 pb-4 space-y-1 border-t border-slate-800 shadow-inner">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              className={({ isActive }) => 
                `block py-2 px-3 rounded text-base font-medium ${
                  isActive ? 'bg-slate-800 text-amber-500' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-800 mt-2">
            <Link 
              to="/get-quote" 
              onClick={() => setIsOpen(false)} 
              className="block text-center bg-amber-50 text-slate-950 font-bold py-2.5 rounded shadow-sm hover:bg-amber-400 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}