import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import { ProductCard } from './ProductCard';

export const FamousProducts = ({ onAddToCart, onQuickView, wishlists, onToggleWishlist }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterTabs = [
    { id: 'all', name: 'All Essentials' },
    { id: 'face-care', name: 'Face Care' },
    { id: 'hair-care', name: 'Hair Care' },
    { id: 'body-care', name: 'Body Care' },
    { id: 'natural-oils', name: 'Natural Oils' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS.slice(0, 4) // Show initial 4 essentials as requested
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="essentials" className="py-16 md:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/70 text-rose-700 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Pure Herbal Formulations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Our Natural Essentials
          </h2>

          <p className="text-gray-600 text-base sm:text-lg font-normal">
            Handcrafted with organic wild-harvested herbs, floral hydrosols, and cold-pressed botanical oils.
          </p>

          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                    : 'bg-rose-50/70 text-gray-700 hover:bg-rose-100 hover:text-rose-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
              isWishlisted={wishlists.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* BOTTOM EXPLORE ALL BUTTON */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-sm border border-rose-200/80 shadow-xs transition-all duration-200 group"
          >
            <span>View All Botanical Essentials</span>
            <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
