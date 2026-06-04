'use client';

import React from 'react';
import { Shield, Users, Radio, Globe, Lock, LifeBuoy, AlertTriangle, Eye, Compass, Link } from 'lucide-react';

interface CapabilitiesProps {
  lang: 'en' | 'es';
}

export default function Capabilities({ lang }: CapabilitiesProps) {
  const t = {
    en: {
      tag: "TACTICAL ROLES",
      title: "OPERATIONAL CAPABILITIES",
      subtitle: "Reaper Defence systems are deployed across various critical sectors, delivering unmatched reliability under high-stress scenarios.",
      list: [
        {
          icon: Shield,
          title: "Defense",
          desc: "Force protection, tactical reconnaissance, and precision strike operations in direct combat environments."
        },
        {
          icon: Users,
          title: "Public Safety",
          desc: "Aerial support for security forces, crowd monitoring, and perimeter containment during civic operations."
        },
        {
          icon: Compass,
          title: "Border Surveillance",
          desc: "Long-range fixed-wing patrols over rugged terrain to deter illegal ingress and secure national boundaries."
        },
        {
          icon: Lock,
          title: "Critical Infrastructure Protection",
          desc: "Persistent security screening of chemical sites, power grids, and strategic installations."
        },
        {
          icon: Globe,
          title: "Industrial Security",
          desc: "Monitoring assets, inventory safeguarding, and automated patrols of large production areas."
        },
        {
          icon: LifeBuoy,
          title: "Search and Rescue",
          desc: "Emergency aerial scouting using high-resolution thermal optics to locate missing persons."
        },
        {
          icon: AlertTriangle,
          title: "Disaster Assessment",
          desc: "Post-disaster mapping, structural hazard checking, and emergency communication deployment."
        },
        {
          icon: Eye,
          title: "Intelligence Gathering",
          desc: "Sustained ISR (Intelligence, Surveillance, Reconnaissance) gathering via high-altitude optical sensors."
        },
        {
          icon: Radio,
          title: "Electronic Warfare Operations",
          desc: "Interception, signal jamming countermeasures, and operations in frequency-denied sectors."
        },
        {
          icon: Link,
          title: "Fiber-Optic Guided Missions",
          desc: "Unmanned operations completely isolated from RF detection or interception via direct spool tether links."
        }
      ]
    },
    es: {
      tag: "ROLES TÁCTICOS",
      title: "CAPACIDADES OPERATIVAS",
      subtitle: "Los sistemas de Reaper Defence se despliegan en múltiples sectores críticos, ofreciendo una confiabilidad inigualable en escenarios de alta exigencia.",
      list: [
        {
          icon: Shield,
          title: "Defensa",
          desc: "Protección de fuerzas, reconocimiento táctico y operaciones de ataque de precisión en combate."
        },
        {
          icon: Users,
          title: "Seguridad Pública",
          desc: "Soporte aéreo para fuerzas del orden, monitoreo de multitudes y contención de perímetros tácticos."
        },
        {
          icon: Compass,
          title: "Vigilancia de Fronteras",
          desc: "Patrullaje de largo alcance con ala fija sobre áreas geográficas complejas para resguardo territorial."
        },
        {
          icon: Lock,
          title: "Protección de Infraestructuras Críticas",
          desc: "Monitoreo constante y seguridad perimetral en redes eléctricas, refinadas y centros estratégicos."
        },
        {
          icon: Globe,
          title: "Seguridad Industrial",
          desc: "Salvaguardia de activos, control de inventario y patrullas automatizadas en grandes refinerías."
        },
        {
          icon: LifeBuoy,
          title: "Búsqueda y Rescate",
          desc: "Exploración aérea de emergencia utilizando sensores térmicos avanzados para la localización de personas."
        },
        {
          icon: AlertTriangle,
          title: "Evaluación de Desastres",
          desc: "Cartografía aérea post-emergencia, inspección de riesgos estructurales y enlace de comunicaciones."
        },
        {
          icon: Eye,
          title: "Recopilación de Inteligencia",
          desc: "Adquisición persistente de datos de ISR a través de sensores electro-ópticos de alta resolución."
        },
        {
          icon: Radio,
          title: "Operaciones de Guerra Electrónica",
          desc: "Contramedidas ante bloqueo de señales e interferencias en espectros electromagnéticos."
        },
        {
          icon: Link,
          title: "Misiones Guiadas por Fibra Óptica",
          desc: "Operaciones no tripuladas completamente aisladas de detección de radio o suplantación de enlaces."
        }
      ]
    }
  };

  return (
    <section className="relative bg-[#322d27] py-24 border-b border-[#4f473d]/40" id="capabilities">
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3">
            // {t[lang].tag}
          </span>
          <h2 className="text-3xl font-extrabold text-white font-mono uppercase tracking-tight">
            OPERATIONAL THEATERS & ROLES
          </h2>
          <div className="w-12 h-1 bg-[#ff6b00] mx-auto mt-4" />
          <p className="text-sm text-[#8a99ad] mt-4">
            {t[lang].subtitle}
          </p>
        </div>

        {/* Grid of 10 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t[lang].list.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-sm flex flex-col justify-between hover:border-[#ff6b00]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#1d1915] border border-[#4f473d] flex items-center justify-center mb-5 group-hover:border-[#ff6b00]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#8a99ad] group-hover:text-[#ff6b00] transition-colors" />
                  </div>
                  <h3 className="font-mono text-sm text-white font-bold tracking-wider uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#8a99ad] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="border-t border-[#4f473d]/40 pt-4 mt-6 font-mono text-[9px] text-[#5e7a5e]">
                  CAP.ROLE // {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
