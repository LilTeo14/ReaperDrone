'use client';

import React from 'react';
import { BookOpen, Crosshair, Wrench, Navigation, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface TrainingProgramsProps {
  lang: 'en' | 'es';
}

interface Program {
  id: string;
  code: string;
  title: string;
  description: string;
  topics: string[];
}

export default function TrainingPrograms({ lang }: TrainingProgramsProps) {
  const t = {
    en: {
      tag: "INSTRUCTION & CAPABILITIES",
      title: "TRAINING PROGRAMS",
      subtitle: "Professional tactical flight and engineering courses designed for operators and technical teams.",
      topicsTitle: "CORE TOPICS",
      programLabel: "PROGRAM"
    },
    es: {
      tag: "INSTRUCCIÓN Y CAPACIDADES",
      title: "PROGRAMAS DE CAPACITACIÓN",
      subtitle: "Cursos profesionales de vuelo táctico e ingeniería diseñados para operadores y equipos técnicos.",
      topicsTitle: "TEMAS CLAVE",
      programLabel: "PROGRAMA"
    }
  };

  const programs: Record<'en' | 'es', Program[]> = {
    en: [
      {
        id: "prog-1",
        code: "01",
        title: "FPV FLIGHT FUNDAMENTALS",
        description: "Introduction to FPV systems, flight principles, safety procedures, equipment configuration and operational best practices.",
        topics: [
          "Flight fundamentals",
          "Simulator training",
          "Equipment setup",
          "Radio configuration",
          "Video systems",
          "Flight safety"
        ]
      },
      {
        id: "prog-2",
        code: "02",
        title: "ADVANCED FPV OPERATIONS",
        description: "Advanced flight techniques focused on precision maneuvering, long-range operations and mission-oriented deployments.",
        topics: [
          "Advanced flight control",
          "Long-range operations",
          "Mission planning",
          "Navigation techniques",
          "Emergency procedures",
          "Operational risk management"
        ]
      },
      {
        id: "prog-3",
        code: "03",
        title: "DRONE ASSEMBLY & MAINTENANCE",
        description: "Comprehensive instruction on the assembly, configuration and maintenance of FPV and UAV platforms.",
        topics: [
          "Airframe assembly",
          "Power systems",
          "Flight controllers",
          "ESC configuration",
          "Video transmission systems",
          "Troubleshooting & maintenance"
        ]
      },
      {
        id: "prog-4",
        code: "04",
        title: "UAV SYSTEMS OPERATION",
        description: "Training for fixed-wing and VTOL reconnaissance platforms.",
        topics: [
          "Mission planning",
          "Ground control systems",
          "Autonomous flight",
          "Payload management",
          "Telemetry systems",
          "Reconnaissance procedures"
        ]
      }
    ],
    es: [
      {
        id: "prog-1",
        code: "01",
        title: "FUNDAMENTOS DE VUELO FPV",
        description: "Introducción a los sistemas FPV, principios de vuelo, procedimientos de seguridad, configuración de equipos y mejores prácticas operativas.",
        topics: [
          "Fundamentos de vuelo",
          "Entrenamiento en simulador",
          "Configuración de equipos",
          "Configuración de radio",
          "Sistemas de video",
          "Seguridad de vuelo"
        ]
      },
      {
        id: "prog-2",
        code: "02",
        title: "OPERACIONES FPV AVANZADAS",
        description: "Técnicas de vuelo avanzadas enfocadas en maniobras de precisión, operaciones de largo alcance y despliegues orientados a misiones.",
        topics: [
          "Control de vuelo avanzado",
          "Operaciones de largo alcance",
          "Planificación de misiones",
          "Técnicas de navegación",
          "Procedimientos de emergencia",
          "Gestión de riesgos operativos"
        ]
      },
      {
        id: "prog-3",
        code: "03",
        title: "ENSAMBLAJE Y MANTENIMIENTO DE DRONES",
        description: "Instrucción integral sobre el ensamblaje, configuración y mantenimiento de plataformas FPV y UAV.",
        topics: [
          "Ensamblaje de chasis",
          "Sistemas de potencia",
          "Controladoras de vuelo",
          "Configuración de ESC",
          "Sistemas de transmisión de video",
          "Resolución de problemas y mantenimiento"
        ]
      },
      {
        id: "prog-4",
        code: "04",
        title: "OPERACIÓN DE SISTEMAS UAV",
        description: "Capacitación especializada para la operación de plataformas de reconocimiento de ala fija y VTOL.",
        topics: [
          "Planificación de misiones",
          "Sistemas de control en tierra",
          "Vuelo autónomo",
          "Gestión de carga útil",
          "Sistemas de telemetría",
          "Procedimientos de reconocimiento"
        ]
      }
    ]
  };

  const icons = [
    <BookOpen className="w-5 h-5 text-[#ff6b00]" />,
    <Crosshair className="w-5 h-5 text-[#ff6b00]" />,
    <Wrench className="w-5 h-5 text-[#ff6b00]" />,
    <Navigation className="w-5 h-5 text-[#ff6b00]" />
  ];

  return (
    <section className="relative bg-transparent py-24 border-b border-[#4f473d]/40" id="training">
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
            {t[lang].subtitle}
          </p>
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs[lang].map((prog, idx) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-sm border border-[#4f473d]/60 hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col justify-between scanlines relative"
            >
              {/* Corner indicators */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#4f473d]/60" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#4f473d]/60" />

              <div>
                {/* Card Header Info */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-[#ff8f3d] font-bold tracking-wider uppercase">
                    // {t[lang].programLabel} {prog.code}
                  </span>
                  <div className="p-1.5 bg-black/30 border border-[#4f473d]/40 rounded-sm">
                    {icons[idx]}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-sm font-bold font-mono text-white tracking-wider mb-3 min-h-[40px] flex items-center">
                  {prog.title}
                </h3>
                
                <div className="w-full h-[1px] bg-gradient-to-r from-[#ff6b00]/30 to-transparent mb-4" />

                {/* Card Description */}
                <p className="text-xs text-[#8a99ad] leading-relaxed mb-6 font-sans min-h-[72px]">
                  {prog.description}
                </p>
              </div>

              {/* Card Topics list */}
              <div>
                <h4 className="text-[9px] font-mono text-white/40 tracking-wider uppercase mb-3 flex items-center space-x-1">
                  <Terminal className="w-3.5 h-3.5 text-[#ff6b00]/50" />
                  <span>{t[lang].topicsTitle}</span>
                </h4>
                <ul className="space-y-1.5 font-mono text-[10px] text-white/80">
                  {prog.topics.map((topic, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-[#ff6b00] rotate-45 flex-shrink-0" />
                      <span className="truncate">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
