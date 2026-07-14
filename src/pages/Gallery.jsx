import React from 'react'

export default function Gallery() {
  // Blended array combining your physical public assets with the existing portfolio items
  const galleryItems = [
    // --- Your New Public Image Assets ---
    { 
      id: 'p1', 
      title: 'Commercial Business Camera Mount', 
      type: 'CCTV Installations', 
      image: '/businessCam.jpeg',
      desc: 'Precision corner-mount bullet surveillance targeting active commercial entryways.'
    },
    { 
      id: 'p2', 
      title: 'Hikvision High-Definition Terminal', 
      type: 'Security Systems', 
      image: '/hik.jpeg',
      desc: 'Centralized network video recorder and telemetry hub deployment.'
    },
    { 
      id: 'p3', 
      title: 'Residential Multi-Angle Smart Cam', 
      type: 'CCTV Installations', 
      image: '/houseCam.jpeg',
      desc: 'Weatherproof perimeter camera tracking outdoor structural boundaries.'
    },
    { 
      id: 'p4', 
      title: 'Control Room Video Monitor Array', 
      type: 'Business Systems', 
      image: '/monitor.jpeg',
      desc: 'Real-time multi-feed console routing active matrix feeds seamlessly.'
    },
    { 
      id: 'p5', 
      title: '360° Dome Camera Installation', 
      type: 'CCTV Installations', 
      image: '/roundCam.jpeg',
      desc: 'Wide-angle hemispheric dome integration covering complete open space lobbies.'
    },
    { 
      id: 'p6', 
      title: 'Gigabit Network Router Topology', 
      type: 'Electrical & Networking', 
      image: '/router.jpeg',
      desc: 'High-capacity switching backbone handling dynamic security traffic pools.'
    },
    { 
      id: 'p7', 
      title: 'High-Voltage Perimeter Razor Wall', 
      type: 'Perimeter Security', 
      image: '/wall.jpeg',
      desc: 'Reinforced brick-to-fence security boundary featuring custom tension wire mounts.'
    },
    { 
      id: 'p8', 
      title: 'Wall-Mount Surveillance Node', 
      type: 'CCTV Installations', 
      image: '/wallCam.jpeg',
      desc: 'Strategic outdoor housing array optimized for harsh environmental shifts.'
    },
    
    // --- Preserved Existing Catalog Elements with Clean Placeholders ---
    { 
      id: 1, 
      title: 'Commercial Dome Array Setup', 
      type: 'CCTV Installations', 
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
      desc: 'Multi-cam retail store surveillance layouts designed for risk reduction.'
    },
    { 
      id: 2, 
      title: 'Defensive Perimeter Wire Loop', 
      type: 'Perimeter Security', 
      image: 'https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&w=600&q=80',
      desc: 'Certified high-tensile safety wire installations connected to primary panic circuits.'
    },
    { 
      id: 3, 
      title: 'Multi-Zone Access System Lockout', 
      type: 'Access Control', 
      image: 'https://images.unsplash.com/photo-1620283085439-39620a1e21c4?auto=format&fit=crop&w=600&q=80',
      desc: 'Biometric fingerprint authorization points configured for sensitive server rooms.'
    },
    { 
      id: 4, 
      title: 'Storefront POS Processing Terminal', 
      type: 'Retail Deployments', 
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
      desc: 'Local register point monitoring systems and dynamic sales terminals.'
    },
    { 
      id: 5, 
      title: 'Automated Slider Gate Motor Installation', 
      type: 'Perimeter Security', 
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=600&q=80',
      desc: 'Heavy-duty tracking mechanisms complete with backup battery arrays.'
    },
    { 
      id: 6, 
      title: 'Structured Comm System Server Rack', 
      type: 'Networking Assets', 
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      desc: 'Orderly patch panels, clean dynamic routing loops, and power isolation units.'
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Visual Tech Header Section */}
      <section className="relative bg-slate-950 text-white py-16 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-3">
          <span className="inline-flex items-center bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            📸 Site Deployments
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Project Delivery Portfolio
          </h1>
          <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full my-4"></div>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Visual proof of verified, high-performance security installations, server networking setups, and perimeter protections managed directly on-site.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map(item => (
            <div 
              key={item.id} 
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="h-64 bg-slate-900 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual block if there's any file capitalization mismatch
                    e.target.src = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                {/* Gradient Image Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Text Card Panel */}
              <div className="p-6 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-amber-600 bg-amber-50 border border-amber-100 rounded-md px-2.5 py-1 mb-3">
                    {item.type}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-amber-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                {item.desc && (
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}