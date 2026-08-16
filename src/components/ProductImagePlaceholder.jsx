import React from 'react';

/**
 * ProductImagePlaceholder component
 * Creates realistic, elegant skincare product placeholders (bottles, jars, droppers, tubes)
 * matching Poonthalir's luxury pink & botanical gold aesthetic.
 * When real image assets are provided, this component smoothly fallbacks to standard <img> tags!
 */
export const ProductImagePlaceholder = ({ type = 'face-wash', name, variant, size, bottleColor = '#F56F9A', capColor = '#E2B150', className = '' }) => {
  
  // Render bottle based on type
  if (type === 'face-wash') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-pink-100/50 rounded-2xl p-4 overflow-hidden group ${className}`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-radial from-rose-200/40 via-transparent to-transparent opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
        
        {/* Bottle graphic */}
        <div className="relative flex flex-col items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
          {/* Pump Dispenser */}
          <div className="w-4 h-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 rounded-t-md shadow-sm border-b border-amber-500/30"></div>
          <div className="w-8 h-3 bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 rounded-sm mb-0.5"></div>
          <div className="w-6 h-3 bg-gray-200 rounded-t-sm shadow-inner"></div>

          {/* Main Pump Bottle */}
          <div className="w-20 h-36 bg-gradient-to-b from-rose-300 via-pink-400 to-rose-400 rounded-2xl shadow-xl border border-white/50 relative flex flex-col items-center justify-between p-2.5 overflow-hidden">
            {/* Glass reflection highlight */}
            <div className="absolute top-0 left-2 w-3 h-full bg-gradient-to-r from-white/40 to-transparent skew-x-6"></div>
            
            {/* Logo Badge */}
            <div className="w-full bg-white/90 backdrop-blur-xs rounded-xl p-1.5 text-center shadow-xs border border-pink-100/60 mt-2 z-10">
              <div className="flex items-center justify-center gap-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                <span className="font-serif text-[10px] font-bold text-emerald-900 tracking-tight">Poonthalir</span>
              </div>
              <div className="text-[7px] tracking-wider uppercase font-semibold text-rose-600 mt-0.5">{name || "HERBAL FACE WASH"}</div>
              <div className="text-[6px] text-gray-500 font-medium leading-tight">{variant || "Aloe Vera & Rose"}</div>
            </div>

            {/* Floral Motif */}
            <div className="my-auto z-10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-rose-200/50 flex items-center justify-center">
                <span className="text-xs">🌹</span>
              </div>
            </div>

            <div className="text-[7px] text-white/90 font-semibold z-10">{size || "200 ml"}</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'serum') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-pink-100/50 rounded-2xl p-4 overflow-hidden group ${className}`}>
        <div className="absolute inset-0 bg-radial from-amber-200/30 via-transparent to-transparent opacity-60 group-hover:scale-110 transition-transform duration-500"></div>

        {/* Dropper Bottle */}
        <div className="relative flex flex-col items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
          {/* Dropper Pipette Top */}
          <div className="w-5 h-4 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 rounded-t-full"></div>
          <div className="w-7 h-4 bg-gradient-to-r from-amber-300 via-amber-100 to-amber-400 rounded-sm mb-0.5 border-b border-amber-600/30"></div>

          {/* Glass Serum Bottle */}
          <div className="w-16 h-28 bg-gradient-to-b from-rose-400 via-pink-500 to-rose-600 rounded-xl shadow-lg border border-white/60 relative flex flex-col items-center justify-between p-2 overflow-hidden">
            {/* Liquid shine */}
            <div className="absolute top-0 left-1.5 w-2 h-full bg-gradient-to-r from-white/50 to-transparent skew-x-3"></div>
            
            {/* Label */}
            <div className="w-full bg-white/95 backdrop-blur-xs rounded-lg p-1 text-center shadow-xs border border-rose-100 mt-2 z-10">
              <div className="font-serif text-[9px] font-bold text-emerald-900 leading-none">Poonthalir</div>
              <div className="text-[6px] tracking-wider uppercase font-bold text-rose-600 mt-0.5">GLOWING SERUM</div>
              <div className="text-[5px] text-gray-500">Vitamin C</div>
            </div>

            <div className="text-[6px] text-white/90 font-medium z-10 mb-1">30 ml</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cream-jar') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-pink-100/50 rounded-2xl p-4 overflow-hidden group ${className}`}>
        <div className="absolute inset-0 bg-radial from-rose-200/40 via-transparent to-transparent opacity-60 group-hover:scale-110 transition-transform duration-500"></div>

        {/* Cream Jar */}
        <div className="relative flex flex-col items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
          {/* Gold Metallic Lid */}
          <div className="w-22 h-6 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 rounded-t-lg shadow-md border-b border-amber-600/40 flex items-center justify-center">
            <div className="w-20 h-1 bg-white/50 rounded-full"></div>
          </div>

          {/* Jar Body */}
          <div className="w-24 h-18 bg-gradient-to-b from-rose-100 via-pink-200 to-rose-300 rounded-b-xl shadow-lg border border-white/80 relative flex flex-col items-center justify-center p-1.5">
            <div className="w-full bg-white/90 backdrop-blur-xs rounded-md p-1 text-center shadow-xs">
              <div className="font-serif text-[9px] font-bold text-emerald-900">Poonthalir</div>
              <div className="text-[6px] uppercase font-bold text-rose-600">Nourishing Face Cream</div>
              <div className="text-[5px] text-gray-500">Rose & Sandalwood</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default Scrub Tube
  return (
    <div className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-pink-100/50 rounded-2xl p-4 overflow-hidden group ${className}`}>
      <div className="relative flex flex-col items-center justify-center transform group-hover:-translate-y-1 transition-transform duration-300">
        {/* Soft Squeeze Tube */}
        <div className="w-18 h-32 bg-gradient-to-b from-pink-200 via-rose-300 to-pink-400 rounded-t-xl rounded-b-md shadow-md border border-white/60 relative flex flex-col items-center justify-between p-2">
          {/* Crimped top seam */}
          <div className="w-full h-1.5 bg-rose-400/80 border-b border-white/40 mb-1"></div>

          <div className="w-full bg-white/90 rounded-md p-1 text-center shadow-xs">
            <div className="font-serif text-[9px] font-bold text-emerald-900">Poonthalir</div>
            <div className="text-[6px] uppercase font-bold text-rose-600">{name || "HERBAL SCRUB"}</div>
            <div className="text-[5px] text-gray-500">{variant || "Walnut & Rose"}</div>
          </div>

          <div className="text-[6px] text-white font-medium">{size || "100 g"}</div>
        </div>
        {/* Flip Cap */}
        <div className="w-10 h-4 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-b-md shadow-sm"></div>
      </div>
    </div>
  );
};
