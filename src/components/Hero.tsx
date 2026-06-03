'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Radio, Anchor, Crosshair } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'es';
}

export default function Hero({ lang }: HeroProps) {
  const t = {
    en: {
      headline: "REAPER DEFENCE",
      subheadline: "Advanced Unmanned Systems & Electronic Warfare Solutions",
      support: "Modern conflicts and security challenges have demonstrated the decisive role of unmanned systems, electronic warfare and real-time intelligence. Reaper Defence develops next-generation technologies designed to enhance operational awareness, force protection and mission effectiveness.",
      btnExplore: "Explore Products",
      btnContact: "Contact Us",
      systemStatus: "SYS.STATUS: ACTIVE // CONNECTED",
      latencies: "LATENCY: 0.8ms // LINK: FIBER-OPTIC"
    },
    es: {
      headline: "REAPER DEFENCE",
      subheadline: "Sistemas No Tripulados Avanzados y Soluciones de Guerra Electrónica",
      support: "Los conflictos modernos y los desafíos de seguridad han demostrado el papel decisivo de los sistemas no tripulados, la guerra electrónica y la inteligencia en tiempo real. Reaper Defence desarrolla tecnologías de próxima generación diseñadas para mejorar la conciencia operativa, la protección de fuerzas y la efectividad de las misiones.",
      btnExplore: "Explorar Productos",
      btnContact: "Contáctanos",
      systemStatus: "SYS.STATUS: ACTIVO // CONECTADO",
      latencies: "LATENCIA: 0.8ms // ENLACE: FIBRA ÓPTICA"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#090b0e] pt-12 pb-24 border-b border-[#242a35]/40">
      
      {/* Background Telemetry Overlays */}
      <div className="absolute inset-0 grid-overlay opacity-[0.25] pointer-events-none" />
      <div className="absolute inset-0 dots-overlay opacity-[0.1] pointer-events-none" />
      
      {/* Absolute Tactical Box Elements */}
      <div className="absolute top-12 left-12 hidden xl:block font-mono text-[10px] text-[#5e7a5e] leading-relaxed">
        <div>[TELEMETRY CORE V24.16]</div>
        <div>POS: 33.4489 S // 70.6693 W</div>
        <div>ALT: 520M // HDG: 180 N</div>
      </div>
      <div className="absolute top-12 right-12 hidden xl:block font-mono text-[10px] text-[#ff6b00]/70 text-right leading-relaxed">
        <div>{t[lang].systemStatus}</div>
        <div>{t[lang].latencies}</div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag Header */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 border border-[#ff6b00]/30 bg-[#ff6b00]/5 px-3 py-1 rounded-sm max-w-max"
          >
            <Shield className="w-4 h-4 text-[#ff6b00] animate-pulse" />
            <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase">
              Military Grade Aerospace Systems
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-mono"
          >
            {t[lang].headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-[#ff8f3d]/90 font-mono tracking-wide"
          >
            {t[lang].subheadline}
          </motion.p>

          {/* Supporting Text */}
          <motion.p 
            variants={itemVariants}
            className="text-base text-[#8a99ad] leading-relaxed max-w-2xl"
          >
            {t[lang].support}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#catalog"
              className="px-8 py-4 bg-[#ff6b00] hover:bg-[#e05e00] text-white font-bold text-sm tracking-widest uppercase font-mono rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#ff6b00]/20 flex items-center justify-center border border-[#ff6b00]"
            >
              {t[lang].btnExplore}
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-[#12151a] hover:bg-[#1a202c] text-[#8a99ad] hover:text-white font-bold text-sm tracking-widest uppercase font-mono rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 border border-[#242a35] hover:border-[#ff6b00]/40 flex items-center justify-center"
            >
              {t[lang].btnContact}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphical Console Column */}
        <motion.div 
          className="lg:col-span-5 hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative glass-panel rounded-sm p-6 max-w-md mx-auto aspect-square flex items-center justify-center overflow-hidden scanlines">
            <div className="absolute inset-0 bg-[#ff6b00]/[0.02] pointer-events-none" />
            
            {/* Corner Indicators */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#5e7a5e]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#5e7a5e]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#5e7a5e]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#ff6b00]" />

            {/* Full-size Brand Logo */}
            <div className="relative w-full h-full transition-transform hover:scale-102 duration-500">
              <Image 
                src="/Logo_Reaper.png"
                alt="Reaper Defence Brand Logo"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_35px_rgba(255,107,0,0.18)] brightness-110"
              />
            </div>

          </div>
        </motion.div>

      </div>



    </section>
  );
}
