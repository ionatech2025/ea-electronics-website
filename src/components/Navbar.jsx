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

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-amber-400 font-semibold px-3 py-2 text-sm relative transition-all duration-300 after:absolute after:left-3 after:right-3 after:-bottom-[1px] after:h-[2px] after:bg-gradient-to-r after:from-amber-400 after:to-amber-500 after:rounded-full'
      : 'text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 px-3 py-2 text-sm font-medium'

  return (
    <nav className="bg-slate-950/85 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo & Text */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 shrink-0 relative"
          >
            {/* Ambient gold glow behind the logo container */}
            <div className="absolute -inset-1.5 rounded-full bg-amber-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
            
            {/* Logo Wrapper - Enlarged and framed inside a bright white circle for maximum visibility */}
            <span className="relative flex items-center justify-center h-12 w-12 rounded-full bg-white border border-slate-200 shadow-md shadow-amber-500/10 transition-transform duration-300 group-hover:scale-105 p-1">
              <img
                src="/logo.svg"
                alt="EA Electronics logo"
                className="h-full w-full object-contain"
              />
            </span>

            {/* Business Typography */}
            <span className="flex flex-col leading-tight select-none">
              <span className="text-white font-black text-lg tracking-wider group-hover:text-amber-400 transition-colors duration-200">
                EA ELECTRONICS
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-amber-400/80 font-semibold mt-0.5">
                Cares about your security needs
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkStyle}>
                {item.name}
              </NavLink>
            ))}
            
            {/* Enhanced 'Request a Quote' CTA */}
            <Link
              to="/get-quote"
              className="ml-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-slate-950 rounded-lg group bg-gradient-to-br from-amber-400 to-amber-600 hover:text-slate-950 focus:ring-4 focus:outline-none focus:ring-amber-800/50 mt-2 transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-amber-400 rounded-md group-hover:bg-amber-300">
                Request a Quote
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 p-2 rounded-md hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Nav Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-950 px-4 pt-2 pb-6 space-y-1 border-t border-white/10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 px-4 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-amber-400/10 text-amber-400 border-l-4 border-amber-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-white/10 mt-3">
            <Link
              to="/get-quote"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold py-3 rounded-md shadow-md hover:from-amber-300 hover:to-amber-400 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}