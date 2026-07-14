import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      
      {/* Visual Accents - Beautiful radial background glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-12">
          
          {/* Column 1: Brand Profile (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="text-white font-extrabold text-xl tracking-wider hover:text-amber-400 transition-colors">
              EA ELECTRONICS
            </Link>
            <p className="text-amber-400 italic font-semibold text-sm tracking-wide">
              "Cares about your security needs"
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional supply, clean installation, and lifecycle maintenance of premium CCTV cameras, electric fences, and network architectures.
            </p>
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-2 text-xs">
              <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-slate-300">Eastern Energy Centre solar shop</span>
            </div>
          </div>

          {/* Column 2: Navigation (2 Columns) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-slate-900 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-all hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-400 transition-all hover:translate-x-1 inline-block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 transition-all hover:translate-x-1 inline-block">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-amber-400 hover:text-amber-350 transition-all hover:translate-x-1 inline-block font-bold">
                  Free Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Disciplines (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-slate-900 pb-2">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="hover:text-slate-200 transition-colors cursor-pointer">• CCTV Video Surveillance</li>
              <li className="hover:text-slate-200 transition-colors cursor-pointer">• Electric Fences & Razor Wire</li>
              <li className="hover:text-slate-200 transition-colors cursor-pointer">• Access Control & Intercoms</li>
              <li className="hover:text-slate-200 transition-colors cursor-pointer">• High-Voltage Electrical Loops</li>
            </ul>
          </div>

          {/* Column 4: Reach Us & Social (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-slate-900 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Phones */}
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <a href="tel:0759883883" className="hover:text-white transition-colors">0759 883 883</a>
                  <a href="tel:0789203062" className="hover:text-white transition-colors">0789 203 062</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:elijahwoudz@mail2paul.com" className="hover:text-white transition-colors break-all">
                  elijahwoudz@mail2paul.com
                </a>
              </div>
            </div>

            {/* Premium Pill Social Channels */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/256759883883" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-emerald-600/10 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-600/20 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300"
                >
                  WhatsApp
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-600/20 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300"
                >
                  Facebook
                </a>

                {/* TikTok */}
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-slate-900 text-slate-300 hover:bg-white hover:text-slate-950 border border-slate-800 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all duration-300"
                >
                  TikTok
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>&copy; {currentYear} EA Electronics. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Framework</span>
            <span>&bull;</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Operational Terms</span>
          </div>
        </div>

      </div>
    </footer>
  )
}