// src/components/UI/ServiceCard.jsx
import React from 'react'

const ServiceCard = ({ title, group, image, fallbackImage, desc }) => {
  // A guaranteed, reliable fallback image URL
  const defaultFallback = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80'

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between max-w-sm mx-auto w-full">
      
      {/* Fixed-Height Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img 
          src={image || fallbackImage || defaultFallback} 
          alt={title || "Security Service"}
          onError={(e) => {
            // Instantly swap to fallback on error and prevent infinite loops
            e.target.onerror = null;
            e.target.src = fallbackImage || defaultFallback;
          }}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Floating Category Badge */}
        {group && (
          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-slate-800 text-[10px] uppercase tracking-wider px-3 py-1 rounded-md font-bold z-10">
            {group}
          </div>
        )}
        
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Content Area with Explicit Text Constraints */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
            {title || "System Service Node"}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {desc || "Professional operational framework configured for structural site deployments."}
          </p>
        </div>
        
        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100">
          <button className="text-xs font-bold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1 group">
            Learn More
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default ServiceCard