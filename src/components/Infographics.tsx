'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Cpu, Compass } from 'lucide-react';

interface InfographicsProps {
  lang: 'en' | 'es';
}

export default function Infographics({ lang }: InfographicsProps) {
  const t = {
    en: {
      sectionTitle: "OPERATIONAL CAPABILITIES",
      sectionSubtitle: "Tactical performance metrics based on real-world field specifications.",
      cards: [
        {
          icon: Shield,
          title: "Force Multiplication",
          metric: "80% Effectiveness",
          desc: "FPV systems represent the single highest tactical value output on modern battlefields, acting as a critical force multiplier."
        },
        {
          icon: Compass,
          title: "Persistent ISR",
          metric: "80 Min Endurance",
          desc: "Twin-motor aerospace platforms deliver persistent tactical intelligence, surveillance, and reconnaissance."
        },
        {
          icon: Zap,
          title: "Rapid Deployment",
          metric: "< 90s Assemble",
          desc: "Toolless quick-release joints, tails, and wings enable rapid tactical deployment directly from field packaging."
        },
        {
          icon: Cpu,
          title: "Resilient Communications",
          metric: "100% EW Immune",
          desc: "Fiber-optic data reels bypass the RF spectrum, remaining fully operational inside contested jamming sectors."
        },
        {
          icon: Target,
          title: "Situational Awareness",
          metric: "30x Opt Zoom",
          desc: "High-resolution thermal and optical payloads provide real-time stabilized telemetry from safe standoff distances."
        }
      ]
    },
    es: {
      sectionTitle: "CAPACIDADES OPERATIVAS",
      sectionSubtitle: "Métricas de rendimiento táctico basadas en especificaciones de campo reales.",
      cards: [
        {
          icon: Shield,
          title: "Multiplicación de Fuerza",
          metric: "80% de Efectividad",
          desc: "Los sistemas FPV representan el mayor valor táctico de salida en los campos de batalla modernos, actuando como un multiplicador crítico."
        },
        {
          icon: Compass,
          title: "ISR Persistente",
          metric: "80 Min de Autonomía",
          desc: "Las plataformas aeroespaciales bimotor ofrecen inteligencia, vigilancia y reconocimiento táctico persistentes."
        },
        {
          icon: Zap,
          title: "Rápido Despliegue",
          metric: "< 90s Montaje",
          desc: "Las juntas, colas y alas de liberación rápida sin herramientas permiten un despliegue táctico inmediato."
        },
        {
          icon: Cpu,
          title: "Comunicaciones Resilientes",
          metric: "100% Inmune a EW",
          desc: "Los carretes de fibra óptica evitan el espectro de RF, manteniéndose completamente operativos en sectores bajo interferencia."
        },
        {
          icon: Target,
          title: "Conciencia Situacional",
          metric: "Zoom Óptico 30x",
          desc: "Las cargas útiles ópticas y térmicas de alta resolución proporcionan telemetría estabilizada en tiempo real."
        }
      ]
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="relative bg-[#25211c] py-24 border-b border-[#4f473d]/40" id="infographics">
      <div className="absolute inset-0 grid-overlay opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase mb-3">
            // {t[lang].sectionTitle}
          </h2>
          <p className="text-3xl font-extrabold text-white font-mono uppercase tracking-tight">
            INTELLIGENCE & PERFORMANCE GRID
          </p>
          <div className="w-12 h-1 bg-[#ff6b00] mx-auto my-4" />
          <p className="text-sm text-[#8a99ad]">
            {t[lang].sectionSubtitle}
          </p>
        </div>

        {/* Infographic Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t[lang].cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-panel p-6 rounded-sm flex flex-col justify-between hover:border-[#ff6b00]/40 transition-all duration-300 relative group"
              >
                {/* Accent line on card */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#4f473d] group-hover:bg-[#ff6b00] transition-colors duration-300" />
                
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#1d1915] border border-[#4f473d] flex items-center justify-center mb-6 group-hover:border-[#ff6b00]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#8a99ad] group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  <h3 className="font-mono text-sm text-white font-bold tracking-wider uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#8a99ad] leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="border-t border-[#4f473d] pt-4 mt-auto">
                  <span className="font-mono text-lg font-bold text-[#ff8f3d] tracking-tight">
                    {card.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Visual Line Divider */}
        <div className="mt-16 border-b border-[#4f473d]/40 flex justify-between font-mono text-[9px] text-[#5e7a5e] pb-1">
          <span>SECURED // ENCRYPTED DATASTREAM</span>
          <span>REAPER DEFENCE SYSTEM GRID V2.0</span>
        </div>

      </div>
    </section>
  );
}
