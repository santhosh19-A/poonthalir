import React, { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { ProductImagePlaceholder } from './ProductImagePlaceholder';

export const ProductCard = ({ product, onAddToCart, onQuickView, isWishlisted = false, onToggleWishlist }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAdded(true);
    if (onAddToCart) onAddToCart(product);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (onToggleWishlist) onToggleWishlist(product.id);
  };

  return (
    <div className="group relative bg-[#FFFDF9] rounded-3xl border border-rose-100/80 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* BADGE (Bestseller, Top Rated, etc.) */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
            {product.badge}
          </span>
        </div>
      )}

      {/* TOP RIGHT WISHLIST BUTTON */}
      <button
        onClick={handleWishlist}
        className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 ${
          isWishlisted
            ? 'bg-rose-500 text-white shadow-md scale-110'
            : 'bg-white/80 text-gray-400 hover:text-rose-500 hover:bg-white shadow-xs'
        }`}
        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
      </button>

      {/* QUICK VIEW TRIGGER OVERLAY BUTTON */}
      <button
        onClick={() => onQuickView(product)}
        className="absolute top-14 right-3 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-gray-600 hover:text-rose-600 hover:bg-white shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        title="Quick View"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* PRODUCT IMAGE / PLACEHOLDER AREA */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative w-full h-56 bg-gradient-to-b from-[#FFF5F6] via-rose-50/30 to-[#FFE5EC]/40 p-4 cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <ProductImagePlaceholder 
          type={product.placeholderType}
          name={product.name}
          variant={product.variant}
          size={product.size}
          bottleColor={product.bottleColor}
          capColor={product.capColor}
        />
      </div>

      {/* PRODUCT DETAILS BELOW */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Subtitle / Variant */}
          <div className="text-[11px] font-semibold tracking-wider text-rose-500 uppercase">
            {product.variant || product.category}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#164B2D] transition-colors cursor-pointer line-clamp-1 mt-0.5"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-gray-600 line-clamp-2 mt-1 font-normal leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Rating & Pricing Row */}
        <div className="pt-2 border-t border-rose-50 flex items-center justify-between">
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-gray-900">{product.rating}</span>
            <span className="text-[10px] text-gray-400 font-medium">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-[#164B2D]">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-xs ${
            added
              ? 'bg-emerald-700 text-white shadow-emerald-200'
              : 'bg-gradient-to-r from-[#F56F9A] to-[#C94F72] text-white hover:shadow-md hover:from-rose-600 hover:to-pink-600 active:scale-98'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4 animate-bounce" />
              <span>Added to Bag!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
