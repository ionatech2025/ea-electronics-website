import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import RequestQuote from '../pages/RequestQuote'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/get-quote" element={<RequestQuote />} />
      {/* 404 Fallback routing redirection rule */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}