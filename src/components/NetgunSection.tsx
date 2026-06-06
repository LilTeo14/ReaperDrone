'use client';

import React, { useState } from 'react';
import Image from './Image';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ShieldAlert, Crosshair, Target, Package } from 'lucide-react';

interface NetgunSectionProps {
  lang: 'en' | 'es';
}

export default function NetgunSection({ lang }: NetgunSectionProps) {
  const netgunProduct = products.find(p => p.id === 'netgun-r1');
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  if (!netgunProduct) return null;

  const content = netgunProduct[lang];

  const t = {
    en: {
      tag: "FEATURED COUNTER-UAS PRODUCT",
      title: "NETGUN R1 SKYCAPTOR",
      specsHeader: "TACTICAL SPECIFICATION PROFILE",
      useCasesTitle: "TACTICAL USE CASES",
      scenarioHeader: "OPERATIONAL DEPLOYMENT SCENARIOS",
      scenarios: [
        "Critical Infrastructure Protection: Fast intervention against low-altitude spy drones hovering around storage arrays.",
        "VIP Event Safeguarding: Quick containment of non-authorized quadcopters above crowded areas with zero fallout risk.",
        "Border & Perimeter Enforcement: Rapid manual interception of small payload drops near fence boundaries.",
        "Industrial Airspace Containment: Protection against industrial espionage flights over staging yards."
      ],
      netSize: "Net Size Area",
      range: "Effective Range",
      co2: "Propulsion system"
    },
    es: {
      tag: "PRODUCTO DESTACADO CONTRA-UAS",
      title: "NETGUN R1 SKYCAPTOR",
      specsHeader: "PERFIL DE ESPECIFICACIONES TÁCTICAS",
      useCasesTitle: "CASOS DE USO TÁCTICO",
      scenarioHeader: "ESCENARIOS DE DESPLIEGUE OPERATIVO",
      scenarios: [
        "Protección de Infraestructuras Críticas: Intervención rápida contra drones espías que sobrevuelan a baja altura.",
        "Resguardo de Eventos Masivos: Contención inmediata de cuadricópteros no autorizados sin riesgos de caída de fragmentos.",
        "Resguardo y Vigilancia de Fronteras: Intercepción manual inmediata ante sobrevuelos no autorizados o entrega de paquetes.",
        "Entornos Industriales Cerrados: Evita vuelos de espionaje industrial sobre patios de acopio y áreas de desarrollo."
      ],
      netSize: "Área de Cobertura Red",
      range: "Alcance Efectivo",
      co2: "Propulsión táctica"
    }
  };

  return (
    <section className="relative bg-[#322d27] py-24 border-b border-[#4f473d]/40" id="netgun-r1">
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3 animate-pulse">
            // {t[lang].tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight uppercase">
            {t[lang].title}
          </h2>
          <div className="w-20 h-1 bg-[#ff6b00] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#8a99ad]">
            {content.description}
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Specifications and Scenarios */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm">
                <span className="block text-lg font-bold font-mono text-[#ff8f3d]">12 m² (4 x 3 m)</span>
                <span className="text-[10px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].netSize}</span>
              </div>
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm">
                <span className="block text-lg font-bold font-mono text-[#ff8f3d]">Up to 20m</span>
                <span className="text-[10px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].range}</span>
              </div>
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm">
                <span className="block text-lg font-bold font-mono text-[#ff8f3d]">10-12g CO₂ Canister</span>
                <span className="text-[10px] font-mono text-[#8a99ad] uppercase tracking-wider">{t[lang].co2}</span>
              </div>
            </div>

            {/* Specifications Card */}
            <div>
              <h3 className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase mb-4 flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-[#ff6b00]" />
                <span>{t[lang].specsHeader}</span>
              </h3>
              <div className="border border-[#4f473d] bg-black/10 rounded-sm overflow-hidden text-xs font-mono">
                {content.specs.slice(4, 9).map((spec, idx) => (
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

            {/* Deployment Scenarios */}
            <div>
              <h3 className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase mb-4 flex items-center space-x-1.5">
                <Crosshair className="w-4 h-4 text-[#ff6b00]" />
                <span>{t[lang].scenarioHeader}</span>
              </h3>
              <ul className="space-y-3 font-sans text-xs text-[#8a99ad]">
                {t[lang].scenarios.map((scene, idx) => (
                  <li key={idx} className="flex items-start">
                    <Target className="w-4 h-4 text-[#ff8f3d] mr-2.5 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{scene}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column - Product Imagery */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center relative glass-panel rounded-sm p-8 scanlines min-h-[380px]">
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#4f473d]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#4f473d]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#4f473d]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#ff6b00]" />

            {/* Netgun Image */}
            <div className="relative w-full max-w-[340px] aspect-square transition-transform hover:scale-102 duration-500 flex items-center justify-center">
              {!failed && (
                <Image 
                  src={netgunProduct.image}
                  alt={netgunProduct.name}
                  width={300}
                  height={300}
                  className="object-contain filter drop-shadow-[0_0_20px_rgba(255,107,0,0.08)] brightness-105 z-10 animate-fade-in"
                  onLoad={() => setLoaded(true)}
                  onError={() => setFailed(true)}
                />
              )}
              {/* Fallback box if image error or loading */}
              {(!loaded || failed) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center font-mono bg-[#25211c] z-0">
                  <Package className="w-12 h-12 text-[#ff6b00]/70 mb-2" />
                  <span className="text-xs text-white uppercase font-bold tracking-wider">{netgunProduct.name}</span>
                  <span className="text-[9px] text-[#8a99ad] mt-1">Manual Launcher Shell</span>
                </div>
              )}
            </div>

            <div className="w-full mt-6 text-center border-t border-[#4f473d] pt-4 font-mono text-[9px] text-[#5e7a5e]">
              CAPTURE DISCHARGE SYSTEM // STANDBY
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
