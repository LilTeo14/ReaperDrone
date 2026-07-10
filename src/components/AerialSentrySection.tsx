'use client';

import React, { useState } from 'react';
import Image from './Image';
import { motion, AnimatePresence } from 'framer-motion';
import { flagshipVTOL } from '../data/products';
import { Shield, Hammer, Compass, Cpu, Battery, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface AerialSentrySectionProps {
  lang: 'en' | 'es';
}

export default function AerialSentrySection({ lang }: AerialSentrySectionProps) {
  const product = flagshipVTOL;
  const content = product[lang];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    product.image,
    "/catalogo/Sistemas UAV/as120 33.jpeg",
    "/catalogo/Sistemas UAV/as1202.jpeg"
  ];

  const t = {
    en: {
      tag: "FEATURED PRODUCT",
      centerpieceTitle: "AERIAL SENTRY 120 BLUEPRINT",
      specHeader: "AIRCRAFT SPECIFICATIONS",
      modularityHeader: "QUICK-RELEASE MODULAR ARCHITECTURE",
      profileHeader: "OPERATIONAL CAPABILITIES",
      endurance: "Max Flight Endurance",
      payload: "Payload Capacity",
      range: "Telemetry Comm Range",
      propulsion: "Propulsion Grid",
      modularText: "Engineered for high-tempo tactical environments, the Aerial Sentry 120 incorporates an advanced snap-locking joint mechanism allowing field operators to deploy or unpack the unit in under 90 seconds without specialized tools."
    },
    es: {
      tag: "PRODUCTO DESTACADO",
      centerpieceTitle: "PLANO DEL AERIAL SENTRY 120",
      specHeader: "ESPECIFICACIONES DEL AVIÓN",
      modularityHeader: "ARQUITECTURA MODULAR DE LIBERACIÓN RÁPIDA",
      profileHeader: "PERFIL OPERATIVO Y CAPACIDADES",
      endurance: "Autonomía de Vuelo Máx",
      payload: "Capacidad de Carga Útil",
      range: "Rango de Telemetría",
      propulsion: "Red de Propulsión",
      modularText: "Diseñado para entornos tácticos de alta exigencia, el Aerial Sentry 120 incorpora un mecanismo de acoplamiento rápido que permite a los operadores desplegar o desmontar la unidad en menos de 90 segundos sin herramientas."
    }
  };

  return (
    <section className="relative bg-transparent py-24" id="vtol-flagship">
      <div className="absolute inset-0 grid-overlay opacity-[0.1] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3 animate-pulse">
            // {t[lang].tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight uppercase">
            {product.name}
          </h2>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#8a99ad]">
            {content.description}
          </p>
        </div>

        {/* Blueprint Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Top Row - Large Diagnostic Image Panel (Full Width, Doubled Image Size) */}
          <div className="lg:col-span-12 flex flex-col justify-center items-center relative glass-panel rounded-sm p-8 scanlines min-h-[500px]">
            {/* Corner Blueprint indicators */}
            <div className="absolute top-3 left-3 font-mono text-[11px] text-[#5e7a5e] leading-none">
              BLUEPRINT FILE // VTOL-SENTRY-120
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[11px] text-[#ff6b00] leading-none">
              TWIN PROPULSION VECTOR // ACTIVE
            </div>

            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#4f473d]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#4f473d]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#4f473d]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#ff6b00]" />

            {/* Drone Render - DOUBLED SIZE WITH GALLERY */}
            <div className="relative w-full max-w-[840px] aspect-video my-4 group/gallery flex items-center justify-center">
              
              {/* Prev Button */}
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-2 z-20 p-2 rounded-sm border border-[#4f473d] bg-black/60 hover:bg-[#ff6b00]/20 hover:border-[#ff6b00] text-[#8a99ad] hover:text-white transition-all duration-300 opacity-60 group-hover/gallery:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src={images[activeImageIndex]}
                      alt={`${product.name} - Slide ${activeImageIndex + 1}`}
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_0_40px_rgba(255,107,0,0.15)] brightness-105"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-2 z-20 p-2 rounded-sm border border-[#4f473d] bg-black/60 hover:bg-[#ff6b00]/20 hover:border-[#ff6b00] text-[#8a99ad] hover:text-white transition-all duration-300 opacity-60 group-hover/gallery:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Indicators */}
            <div className="flex gap-4 mb-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className="relative w-20 h-12 rounded-sm overflow-hidden border transition-all duration-300 bg-black/40 border-[#4f473d] hover:border-[#ff6b00]/50 opacity-60 hover:opacity-100"
                >
                  <Image 
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Core Diagnostics Overlays */}
            <div className="w-full max-w-[840px] mt-8 grid grid-cols-2 gap-4 border-t border-[#4f473d] pt-6 font-mono text-[12px]">
              <div className="flex items-center space-x-2 text-[#8a99ad]">
                <Cpu className="w-4 h-4 text-[#ff6b00]/60" />
                <span>Wingspan: 1200 mm</span>
              </div>
              <div className="flex items-center space-x-2 text-[#8a99ad]">
                <Battery className="w-4 h-4 text-[#ff6b00]/60" />
                <span>Battery: LiPo 6S 20Ah</span>
              </div>
            </div>
          </div>

          {/* Bottom Row - Left Column: Tech Specs */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-mono text-sm text-[#ff6b00] tracking-widest uppercase">
              // {t[lang].specHeader}
            </h3>
            <div className="border border-[#4f473d] bg-black/10 rounded-sm overflow-hidden text-[13px] font-mono">
              {content.specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center p-3 border-b border-[#4f473d]/40 last:border-b-0 hover:bg-[#1d1915]/30"
                >
                  <span className="text-[#8a99ad]">{spec.label}</span>
                  <span className="text-white font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right Column: Modularity & Counters */}
          <div className="lg:col-span-6 space-y-6">
            {/* Operational profile counters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm text-center flex items-center justify-center min-h-[72px]">
                <span className="block text-sm font-bold font-mono text-[#ff8f3d] uppercase tracking-wide">
                  {product[lang].operationalProfile!.endurance}
                </span>
              </div>
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm text-center flex items-center justify-center min-h-[72px]">
                <span className="block text-sm font-bold font-mono text-[#ff8f3d] uppercase tracking-wide">
                  {product[lang].operationalProfile!.payload}
                </span>
              </div>
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm text-center flex items-center justify-center min-h-[72px]">
                <span className="block text-sm font-bold font-mono text-[#ff8f3d] uppercase tracking-wide">
                  {product[lang].operationalProfile!.range}
                </span>
              </div>
            </div>

            {/* Quick-Release Modularity Panel */}
            <div className="border border-[#4f473d] bg-[#1d1915]/40 p-6 rounded-sm space-y-4">
              <div className="flex items-center space-x-2 text-[#ff8f3d]">
                <Hammer className="w-5 h-5" />
                <h3 className="font-mono text-sm font-bold tracking-wider uppercase">
                  {t[lang].modularityHeader}
                </h3>
              </div>
              <p className="text-[13px] text-[#8a99ad] leading-relaxed">
                {t[lang].modularText}
              </p>
              
              {/* Checklist details */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 font-mono text-[12px] text-white pt-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full" />
                  <span>Quick-release mobile rudders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full" />
                  <span>Toolless horizontal stabilizers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full" />
                  <span>Locking tail boom plug pins</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#ff6b00] rounded-full" />
                  <span>Quick-install main wings</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
