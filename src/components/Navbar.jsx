import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X, Leaf, Sparkles, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/products.js';

export const Navbar = ({ onOpenCart, cartCount = 2, onOpenSearch, wishlistCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#story' },
    { name: 'Shop Essentials', href: '#essentials' },
    { name: 'Ingredients', href: '#why-us' },
    { name: 'Blog', href: '#reviews' },
    { name: 'Let’s Connect', href: '#newsletter' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-rose-100' 
        : 'bg-[#FFE5EC]/90 backdrop-blur-xs py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* LEFT: BRAND LOGO */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            {/* Dedicated place for logo asset replacement */}
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-amber-300/60">
              {/* Leaf Emblem */}
              <div className="relative flex items-center justify-center">
                <Leaf className="w-6 h-6 text-amber-300 stroke-[1.8] transform -rotate-12" />
                <Sparkles className="w-3 h-3 text-rose-200 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#164B2D] leading-none group-hover:text-rose-700 transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-rose-500 uppercase mt-1">
                {BRAND_INFO.subtitle}
              </span>
            </div>
          </a>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'text-rose-700 font-semibold bg-rose-100/60'
                      : 'text-gray-700 hover:text-[#164B2D] hover:bg-white/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: ACTION UTILITIES */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-gray-700 hover:text-rose-600 hover:bg-rose-100/60 transition-all duration-200"
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            {/* User Account */}
            <a
              href="#account"
              className="p-2.5 rounded-full text-gray-700 hover:text-rose-600 hover:bg-rose-100/60 transition-all duration-200 hidden sm:flex"
              title="Account"
              aria-label="Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </a>

            {/* Wishlist Icon */}
            <a
              href="#wishlist"
              className="relative p-2.5 rounded-full text-gray-700 hover:text-rose-600 hover:bg-rose-100/60 transition-all duration-200 hidden sm:flex"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Shopping Bag / Cart */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-200 flex items-center gap-2 px-3.5 shrink-0"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
              <span className="font-semibold text-xs bg-white text-rose-600 px-2 py-0.5 rounded-full shadow-xs">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-full text-gray-700 hover:text-rose-600 hover:bg-rose-100/60 transition-all shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-lg border-b border-rose-100 px-6 py-6 space-y-3 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setMobileMenuOpen(false);
              }}
              className={`block px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                activeTab === link.name
                  ? 'bg-rose-100/80 text-rose-700 font-semibold'
                  : 'text-gray-700 hover:bg-rose-50 hover:text-rose-600'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 border-t border-rose-100 flex items-center justify-around">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 py-2 px-4 rounded-lg bg-rose-50"
            >
              <Search className="w-4 h-4 text-rose-600" /> Search
            </button>
            <a
              href="#account"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 py-2 px-4 rounded-lg bg-rose-50"
            >
              <User className="w-4 h-4 text-rose-600" /> Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
