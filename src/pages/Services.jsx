// src/pages/Services.jsx
import React, { useState } from 'react'
import ServiceCard from '../components/UI/ServiceCard'
import { servicesCatalog } from '../data/servicesData'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const categories = [
    'All', 
    'Security Systems', 
    'Perimeter Security', 
    'Electrical & Networking', 
    'Business Systems'
  ]

  const filteredServices = activeCategory === 'All' 
    ? servicesCatalog 
    : servicesCatalog.filter(s => s.group === activeCategory)

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Visual Tech Header */}
      <section className="relative bg-slate-950 text-white py-16 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <span className="inline-flex items-center bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            🛠️ Operational Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Technical Field Operations
          </h1>
          <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full my-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Core engineering and installation disciplines managed directly to ensure robust security parameters.
          </p>
        </div>
      </section>

      {/* Main Catalog Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 shadow-sm ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md transform -translate-y-0.5' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid — This layout wrapper prevents cards from stretching! */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredServices.map(service => (
              <div key={service.id} className="flex h-full">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl max-w-md mx-auto">
            <span className="text-4xl">🔍</span>
            <p className="text-slate-600 font-bold mt-4">No matching services found</p>
            <p className="text-slate-400 text-xs mt-1">Please select a different category option above.</p>
          </div>
        )}
        
      </div>
    </div>
  )
}