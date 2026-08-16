import React from 'react';
import { Leaf, HeartHandshake, ShieldCheck, Recycle, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { ProductImagePlaceholder } from './ProductImagePlaceholder';

export const Hero = ({ onShopNowClick, onExploreClick }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#FFE5EC] via-[#FFF0F4] to-[#FFF5F6] overflow-hidden">
      
      {/* Decorative Background Glow Spheres */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: HEADLINE & ACTION */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-rose-200 text-rose-700 text-xs font-semibold shadow-xs animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Handcrafted 100% Organic Beauty</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-[#164B2D] block">Pure Nature.</span>
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent block mt-1">
                Pure Beauty.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-700 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
              Discover handcrafted natural products made from nature’s finest botanical ingredients. Pure, authentic & deeply nourishing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#essentials"
                onClick={onShopNowClick}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F56F9A] to-[#C94F72] text-white font-semibold text-base shadow-lg hover:shadow-rose-300/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ShoppingBag className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#why-us"
                onClick={onExploreClick}
                className="px-8 py-3.5 rounded-full bg-white/70 hover:bg-white text-[#C94F72] border-2 border-rose-300 font-semibold text-base shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-rose-500" />
              </a>
            </div>

            {/* Natural Benefits Line Icons Bar */}
            <div className="pt-8 border-t border-rose-200/70 grid grid-cols-5 gap-2 text-center max-w-lg">
              <div className="flex flex-col items-center gap-1.5 group">
                <div className="w-9 h-9 rounded-full bg-rose-100/80 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">100% Natural</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 group">
                <div className="w-9 h-9 rounded-full bg-rose-100/80 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">Cruelty Free</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 group">
                <div className="w-9 h-9 rounded-full bg-rose-100/80 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">Paraben Free</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 group">
                <div className="w-9 h-9 rounded-full bg-rose-100/80 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Recycle className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">Eco Friendly</span>
              </div>

              <div className="flex flex-col items-center gap-1.5 group">
                <div className="w-9 h-9 rounded-full bg-rose-100/80 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">Handcrafted</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM PRODUCT SHOWCASE (Matching reference image composition) */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Main Stage Glass Dish & Floral Surround Container */}
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Decorative Scroll Motif on Right */}
              <div className="absolute right-0 top-2 bottom-2 w-20 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-100 border-l-2 border-amber-300/60 rounded-r-3xl opacity-80 shadow-md hidden sm:block transform rotate-1">
                <div className="h-full flex flex-col justify-between p-2 items-center">
                  <span className="text-[10px] font-serif font-bold text-amber-900 writing-vertical rotate-180">POONTHALIR HERBAL ESSENCE</span>
                  <div className="w-4 h-4 rounded-full bg-amber-400/40"></div>
                </div>
              </div>

              {/* Surrounding Rose Blossoms Visual Accents */}
              <div className="absolute top-2 left-6 text-3xl animate-bounce duration-1000">🌹</div>
              <div className="absolute top-12 right-12 text-2xl">🌸</div>
              <div className="absolute bottom-16 left-4 text-3xl">🌿</div>
              <div className="absolute bottom-6 right-20 text-3xl">🌹</div>

              {/* Glowing Water Dish Base */}
              <div className="absolute bottom-8 w-4/5 h-24 bg-gradient-to-r from-blue-100/40 via-pink-100/60 to-rose-200/40 backdrop-blur-md rounded-[100px] border-2 border-white/80 shadow-2xl flex items-center justify-center">
                {/* Ripple Effect */}
                <div className="w-full h-full rounded-[100px] bg-white/30 animate-pulse"></div>
              </div>

              {/* Product Assembly Display (Matching image 4 products) */}
              <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 items-end max-w-md">
                
                {/* Product 1: Herbal Face Wash (Pump Bottle) */}
                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-24 sm:w-28 h-44 sm:h-52 shadow-xl rounded-2xl bg-white/40 p-1 border border-white">
                    <ProductImagePlaceholder 
                      type="face-wash" 
                      name="FACE WASH" 
                      variant="Aloe Vera & Rose"
                      size="200 ml"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-900 mt-2 bg-white/90 px-2 py-0.5 rounded-full shadow-xs">Face Wash</span>
                </div>

                {/* Product 2 & 3 Stack (Dropper & Cream Jar) */}
                <div className="flex flex-col items-center space-y-3 transform -translate-y-4 hover:scale-105 transition-transform duration-300">
                  {/* Dropper */}
                  <div className="w-20 sm:w-24 h-36 sm:h-40 shadow-xl rounded-2xl bg-white/40 p-1 border border-white">
                    <ProductImagePlaceholder 
                      type="serum" 
                      name="FACE SERUM" 
                      variant="Vit C & Rosehip"
                      size="30 ml"
                    />
                  </div>
                  {/* Cream Jar */}
                  <div className="w-24 sm:w-28 h-24 sm:h-28 shadow-xl rounded-2xl bg-white/40 p-1 border border-white">
                    <ProductImagePlaceholder 
                      type="cream-jar" 
                      name="FACE CREAM" 
                      variant="Rose & Sandalwood"
                      size="50 g"
                    />
                  </div>
                </div>

                {/* Product 4: Scrub Tube */}
                <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-22 sm:w-26 h-40 sm:h-48 shadow-xl rounded-2xl bg-white/40 p-1 border border-white">
                    <ProductImagePlaceholder 
                      type="scrub-tube" 
                      name="FACE SCRUB" 
                      variant="Walnut & Rose"
                      size="100 g"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-900 mt-2 bg-white/90 px-2 py-0.5 rounded-full shadow-xs">Face Scrub</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Lush Grass & Rose Footer Divider Bar (Matching reference image bottom grass decor) */}
      <div className="w-full mt-12 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white py-3 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-around text-xs sm:text-sm font-medium tracking-wide">
          <span className="flex items-center gap-1.5"><Leaf className="w-4 h-4 text-emerald-300" /> 100% Natural Ingredients</span>
          <span className="hidden sm:flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-300" /> Fast & Safe Delivery</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-300" /> Secure Payment</span>
          <span className="hidden md:flex items-center gap-1.5"><Recycle className="w-4 h-4 text-emerald-300" /> Easy 7-Day Returns</span>
        </div>
      </div>

    </section>
  );
};
