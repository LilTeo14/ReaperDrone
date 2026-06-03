'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { flagshipVTOL } from '../data/products';
import { Shield, Hammer, Compass, Cpu, Battery, Eye } from 'lucide-react';

interface AerialSentrySectionProps {
  lang: 'en' | 'es';
}

export default function AerialSentrySection({ lang }: AerialSentrySectionProps) {
  const product = flagshipVTOL;
  const content = product[lang];

  const t = {
    en: {
      tag: "FLAGSHIP VTOL VEHICLE",
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
      tag: "VEHÍCULO VTOL INSIGNIA",
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
    <section className="relative bg-[#0d0f12] py-24 border-b border-[#242a35]/40" id="vtol-flagship">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Large Diagnostic Image Panel */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center relative glass-panel rounded-sm p-8 scanlines min-h-[400px]">
            {/* Corner Blueprint indicators */}
            <div className="absolute top-3 left-3 font-mono text-[9px] text-[#5e7a5e] leading-none">
              BLUEPRINT FILE // VTOL-SENTRY-120
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[9px] text-[#ff6b00] leading-none">
              TWIN PROPULSION VECTOR // ACTIVE
            </div>

            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#242a35]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#242a35]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#242a35]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#ff6b00]" />

            {/* Drone Render */}
            <div className="relative w-full max-w-[420px] aspect-video transition-transform hover:scale-102 duration-500">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_30px_rgba(255,107,0,0.1)] brightness-105"
              />
            </div>

            {/* Core Diagnostics Overlays */}
            <div className="w-full mt-8 grid grid-cols-2 gap-4 border-t border-[#242a35] pt-6 font-mono text-[10px]">
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

          {/* Right Column - Tech Specs, Capabilities & Modularity */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Operational profile counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-[#242a35] bg-black/25 p-4 rounded-sm text-center">
                <span className="block text-xl font-bold font-mono text-[#ff8f3d]">{product[lang].operationalProfile.endurance}</span>
                <span className="text-[9px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].endurance}</span>
              </div>
              <div className="border border-[#242a35] bg-black/25 p-4 rounded-sm text-center">
                <span className="block text-xl font-bold font-mono text-[#ff8f3d]">{product[lang].operationalProfile.payload}</span>
                <span className="text-[9px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].payload}</span>
              </div>
              <div className="border border-[#242a35] bg-black/25 p-4 rounded-sm text-center">
                <span className="block text-xl font-bold font-mono text-[#ff8f3d]">{product[lang].operationalProfile.range}</span>
                <span className="text-[9px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].range}</span>
              </div>
              <div className="border border-[#242a35] bg-black/25 p-4 rounded-sm text-center">
                <span className="block text-xl font-bold font-mono text-[#ff8f3d]">2x 2216 / 8"</span>
                <span className="text-[9px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].propulsion}</span>
              </div>
            </div>

            {/* Quick-Release Modularity Panel */}
            <div className="border border-[#242a35] bg-[#12151a]/40 p-6 rounded-sm space-y-4">
              <div className="flex items-center space-x-2 text-[#ff8f3d]">
                <Hammer className="w-5 h-5" />
                <h3 className="font-mono text-sm font-bold tracking-wider uppercase">
                  {t[lang].modularityHeader}
                </h3>
              </div>
              <p className="text-xs text-[#8a99ad] leading-relaxed">
                {t[lang].modularText}
              </p>
              
              {/* Checklist details */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 font-mono text-[10px] text-white pt-2">
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

            {/* Specifications Listing */}
            <div>
              <h3 className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase mb-4">
                // {t[lang].specHeader}
              </h3>
              <div className="border border-[#242a35] bg-black/10 rounded-sm overflow-hidden text-xs font-mono">
                {content.specs.slice(0, 6).map((spec, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center p-3 border-b border-[#242a35]/40 last:border-b-0 hover:bg-[#12151a]/30"
                  >
                    <span className="text-[#8a99ad]">{spec.label}</span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
