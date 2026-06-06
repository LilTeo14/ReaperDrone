'use client';

import React, { useState } from 'react';
import Image from './Image';
import { Menu, X, Globe, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const t = {
    en: {
      products: "Catalog",
      flagship: "Featured Product",
      capabilities: "Capabilities",
      media: "Gallery",
      contact: "Contact Us",
      tagline: "TACTICAL FEED",
      status: "SECURE COMMS"
    },
    es: {
      products: "Catálogo",
      flagship: "Producto Destacado",
      capabilities: "Capacidades",
      media: "Galería",
      contact: "Contacto",
      tagline: "SEÑAL TÁCTICA",
      status: "COMUNICACIÓN SEGURA"
    }
  };

  const navLinks = [
    { href: "#catalog", label: t[lang].products },
    { href: "#vtol-flagship", label: t[lang].flagship },
    { href: "#capabilities", label: t[lang].capabilities },
    { href: "#contact", label: t[lang].contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-[#4f473d]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 overflow-hidden bg-black/50 border border-[#4f473d] rounded-md flex items-center justify-center p-1">
            <Image 
              src="/logo.png" 
              alt="Reaper Defence" 
              width={36} 
              height={36} 
              className="object-contain filter brightness-105 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-wider font-mono group-hover:text-[#ff6b00] transition-colors duration-300">
              REAPER DEFENCE
            </span>
            <span className="text-[10px] text-[#5e7a5e] tracking-widest font-mono font-bold leading-none">
              {t[lang].tagline} // {t[lang].status}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-[#8a99ad] hover:text-white hover:border-[#ff6b00]/60 border-b-2 border-transparent py-2 transition-all duration-300 font-mono tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center space-x-1.5 text-xs text-[#8a99ad] hover:text-[#ff6b00] border border-[#4f473d] hover:border-[#ff6b00]/40 px-3 py-1.5 rounded-sm font-mono transition-all duration-300 bg-black/35"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-bold">{lang.toUpperCase()}</span>
          </button>

          {/* Tactical Status Indicator */}
          <div className="flex items-center space-x-2 border border-[#2d3a2d] bg-[#1a221a]/30 px-3 py-1.5 rounded-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] text-emerald-400 font-mono font-bold tracking-wider">ONLINE</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center space-x-1 text-xs text-[#8a99ad] border border-[#4f473d] px-2 py-1 rounded-sm font-mono bg-black/35"
          >
            <Globe className="w-3 h-3" />
            <span className="font-bold">{lang.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8a99ad] hover:text-white p-1 rounded-sm border border-[#4f473d] hover:border-[#ff6b00]/40 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-[#4f473d]/60 bg-[#322d27] px-4 pt-4 pb-6 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-[#8a99ad] hover:text-white hover:bg-[#1d1915] rounded-sm font-mono text-sm tracking-wide transition-colors border-l-2 border-transparent hover:border-[#ff6b00]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-[#4f473d]/40 px-3">
              <span className="text-[11px] text-[#5e7a5e] font-mono font-bold">SYSTEM STATUS: SECURED</span>
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-mono font-bold">GRID UP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
