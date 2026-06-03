'use client';

import React from 'react';
import { Target, Zap, Grid, RefreshCw, Radio, Eye, Layers, Lock } from 'lucide-react';

interface AdvantagesProps {
  lang: 'en' | 'es';
}

export default function Advantages({ lang }: AdvantagesProps) {
  const t = {
    en: {
      tag: "WHY REAPER DEFENCE",
      title: "TECHNOLOGICAL ADVANTAGES",
      subtitle: "Reaper Defence leverages state-of-the-art aerospace manufacturing and communication links to ensure mission success in hostile territory.",
      list: [
        {
          icon: Zap,
          title: "Rapid Deployment",
          desc: "Field-ready configurations featuring quick-release joints that assemble in under 90 seconds without specialized toolsets."
        },
        {
          icon: Grid,
          title: "Modular Architecture",
          desc: "Interchangeable payloads, battery modules, and wings to easily tailor the platform to changing mission dynamics."
        },
        {
          icon: RefreshCw,
          title: "Mission Adaptability",
          desc: "Platforms capable of transitioning seamlessly from kinetic strikes to persistent ISR or training operations."
        },
        {
          icon: Radio,
          title: "Electronic Warfare Integration",
          desc: "Fully shielded components designed to withstand intense radio-frequency blocking, GPS spoofing, and signal sniffing."
        },
        {
          icon: Eye,
          title: "ISR Capabilities",
          desc: "Stabilized 4K 60fps video feeds and thermal cameras to provide critical intelligence during day or night missions."
        },
        {
          icon: Layers,
          title: "Scalable Systems",
          desc: "Integrated ground control software supporting multi-drone coordination and collaborative swarm missions."
        },
        {
          icon: Lock,
          title: "Fiber-Optic Communication Resilience",
          desc: "Micro-tether optical cable reels completely bypass the wireless spectrum, rendering the platform immune to EW."
        }
      ]
    },
    es: {
      tag: "POR QUÉ REAPER DEFENCE",
      title: "VENTAJAS TECNOLÓGICAS",
      subtitle: "Reaper Defence aprovecha la fabricación aeroespacial de vanguardia y enlaces de comunicación física para asegurar el éxito en misiones hostiles.",
      list: [
        {
          icon: Zap,
          title: "Rápido Despliegue",
          desc: "Configuraciones listas para el combate con juntas de liberación rápida que se ensamblan en menos de 90 segundos."
        },
        {
          icon: Grid,
          title: "Arquitectura Modular",
          desc: "Cargas útiles, bahías de batería y componentes de ala intercambiables para adaptar la plataforma según los requisitos tácticos."
        },
        {
          icon: RefreshCw,
          title: "Adaptabilidad de Misión",
          desc: "Plataformas capaces de transicionar sin problemas entre misiones cinéticas, ISR persistente o entrenamiento."
        },
        {
          icon: Radio,
          title: "Integración de Guerra Electrónica",
          desc: "Componentes blindados diseñados para soportar interferencias masivas de RF, spoofing de GPS y localización electromagnética."
        },
        {
          icon: Eye,
          title: "Capacidades de ISR",
          desc: "Enlaces de video 4K 60fps estabilizados y cámaras ópticas/térmicas para proveer inteligencia táctica crítica."
        },
        {
          icon: Layers,
          title: "Sistemas Escalables",
          desc: "Software de control terrestre integrado que soporta el despliegue coordinado de múltiples unidades en red."
        },
        {
          icon: Lock,
          title: "Resiliencia por Fibra Óptica",
          desc: "Carretes de micro-tether óptico que anulan las emisiones de radiofrecuencia, haciendo que los sistemas sean inmunes a EW."
        }
      ]
    }
  };

  return (
    <section className="relative bg-[#0d0f12] py-24 border-b border-[#242a35]/40" id="advantages">
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3">
            // {t[lang].tag}
          </span>
          <h2 className="text-3xl font-extrabold text-white font-mono uppercase tracking-tight">
            TACTICAL SUPERIORITY CORE
          </h2>
          <div className="w-12 h-1 bg-[#ff6b00] mx-auto mt-4" />
          <p className="text-sm text-[#8a99ad] mt-4">
            {t[lang].subtitle}
          </p>
        </div>

        {/* Advantages List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t[lang].list.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-panel p-6 rounded-sm flex space-x-5 hover:border-[#ff6b00]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-[#12151a] border border-[#242a35] flex items-center justify-center flex-shrink-0 group-hover:border-[#ff6b00]/30 transition-colors">
                  <Icon className="w-6 h-6 text-[#8a99ad] group-hover:text-[#ff6b00] transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-mono text-sm text-white font-bold tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8a99ad] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
