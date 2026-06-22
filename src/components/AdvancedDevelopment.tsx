'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Shield, Link, Settings, Wrench, Monitor, Brain, 
  ChevronRight, Terminal, Activity, Crosshair, ArrowRight
} from 'lucide-react';

interface AdvancedDevelopmentProps {
  lang: 'en' | 'es';
}

export default function AdvancedDevelopment({ lang }: AdvancedDevelopmentProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const t = {
    en: {
      tag: "R&D DIVISION",
      title: "ADVANCED SYSTEMS DEVELOPMENT",
      subtitle: "Research, engineering and rapid prototyping for next-generation unmanned systems.",
      description: "Reaper Defence combines engineering expertise, rapid prototyping and field-driven development to create adaptable unmanned systems and mission-oriented technologies capable of addressing evolving operational requirements.",
      customTitle: "CUSTOM SOLUTIONS",
      customDesc: "Reaper Defence develops tailored engineering solutions designed to address specific operational requirements through modular architectures, rapid prototyping and continuous field evaluation.",
      highlightsLabel: "KEY CAPABILITIES",
      workflowLabel: "DEVELOPMENT WORKFLOW",
      galleryLabel: "R&D LAB MEDIA FEED",
      gallerySubtitle: "Diagnostics from active design phases, prototype manufacturing and testing blocks.",
      viewCAD: "ACTIVATE INTERACTIVE DIAGNOSTIC",
      stepLabel: "PHASE",
      cadModel: "CAD Models",
      printing3D: "3D Printing",
      electronics: "Electronics Integration",
      uavDev: "UAV Development",
      fieldTesting: "Field Testing",
      protoMfg: "Prototype Mfg"
    },
    es: {
      tag: "DIVISIÓN I+D",
      title: "DESARROLLO DE SISTEMAS AVANZADOS",
      subtitle: "Investigación, ingeniería y prototipado rápido para sistemas no tripulados de próxima generación.",
      description: "Reaper Defence combina experiencia en ingeniería, prototipado rápido y desarrollo impulsado por operaciones en terreno para crear sistemas no tripulados adaptables y tecnologías orientadas a misiones capaces de responder a requisitos operativos en constante evolución.",
      customTitle: "SOLUCIONES PERSONALIZADAS",
      customDesc: "Reaper Defence desarrolla soluciones de ingeniería a la medida diseñadas para abordar requisitos operativos específicos a través de arquitecturas modulares, prototipado rápido y evaluación continua en el campo.",
      highlightsLabel: "CAPACIDADES CLAVE",
      workflowLabel: "FLUJO DE TRABAJO DE DESARROLLO",
      galleryLabel: "GALERÍA DE LABORATORIO I+D",
      gallerySubtitle: "Diagnósticos de fases de diseño activo, fabricación de prototipos y bloques de pruebas.",
      viewCAD: "ACTIVAR DIAGNÓSTICO INTERACTIVO",
      stepLabel: "FASE",
      cadModel: "Modelos CAD",
      printing3D: "Impresión 3D",
      electronics: "Integración Electrónica",
      uavDev: "Desarrollo UAV",
      fieldTesting: "Pruebas de Campo",
      protoMfg: "Fabricación Prototipos"
    }
  };

  const capabilities = [
    {
      id: "cap-1",
      icon: Cpu,
      title: { en: "Unmanned Systems Engineering", es: "Ingeniería de Sistemas No Tripulados" },
      desc: { 
        en: "Aerodynamic design, structural analysis and composite manufacturing for fixed-wing and VTOL platforms.", 
        es: "Diseño aerodinámico, análisis estructural y fabricación de compuestos para plataformas de ala fija y VTOL." 
      },
      highlights: {
        en: ["CFD Aerodynamic Analysis", "FEA Structural Simulation", "Carbon Fiber Laminate Mfg"],
        es: ["Análisis Aerodinámico CFD", "Simulación Estructural FEA", "Laminado de Fibra de Carbono"]
      }
    },
    {
      id: "cap-2",
      icon: Shield,
      title: { en: "Electronic Warfare Solutions", es: "Soluciones de Guerra Electrónica" },
      desc: { 
        en: "Shielded communication links, frequency-hopping transceivers and passive radar countermeasures.", 
        es: "Enlaces de comunicación blindados, transceptores de salto de frecuencia y contramedidas de radar pasivo." 
      },
      highlights: {
        en: ["RF Noise Isolation", "Jammer-Resistant Telemetry", "Passive RF Signal Detection"],
        es: ["Aislamiento de Ruido RF", "Telemetría Resistente a Jamming", "Detección Pasiva de Señal RF"]
      }
    },
    {
      id: "cap-3",
      icon: Link,
      title: { en: "Fiber Optic Systems", es: "Sistemas de Fibra Óptica" },
      desc: { 
        en: "Micro-tether guided controls designed for zero-RF emission missions in heavily contested airspace.", 
        es: "Controles guiados por micro-tether para misiones de emisión cero de RF en espacio aéreo disputado." 
      },
      highlights: {
        en: ["RF-Silent Guidance", "High-Bandwidth Link", "Contoured Cable Spooling"],
        es: ["Guiado Silencioso RF", "Enlace de Gran Ancho de Banda", "Desbobinado de Cable Contorneado"]
      }
    },
    {
      id: "cap-4",
      icon: Settings,
      title: { en: "Payload Development", es: "Desarrollo de Carga Útil" },
      desc: { 
        en: "Custom optical-thermal gimbals, mechanical release pods and specialized sensory payloads.", 
        es: "Cardanes óptico-térmicos a medida, pods de liberación mecánica y cargas sensoriales especializadas." 
      },
      highlights: {
        en: ["Stabilized EO/IR Gimbals", "Aerodynamic Sensors Pods", "Release Mechanism Integration"],
        es: ["Cardanes Estabilizados EO/IR", "Pods de Sensores Aerodinámicos", "Integración de Liberación Mecánica"]
      }
    },
    {
      id: "cap-5",
      icon: Wrench,
      title: { en: "Rapid Prototyping", es: "Prototipado Rápido" },
      desc: { 
        en: "3D printing of structural parts, precision CNC machining and field-driven hardware revisions.", 
        es: "Impresión 3D de piezas estructurales, mecanizado CNC de precisión y revisiones rápidas basadas en campo." 
      },
      highlights: {
        en: ["Structural FDM Printing", "Precision Carbon Fiber Milling", "Iterative Design Optimization"],
        es: ["Impresión Estructural FDM", "Fresado de Precisión Carbono", "Optimización de Diseño Iterativo"]
      }
    },
    {
      id: "cap-6",
      icon: Monitor,
      title: { en: "Ground Control Systems", es: "Sistemas de Control Terrestre" },
      desc: { 
        en: "Swarm control terminals, ruggedized field hardware interfaces and encryption-compliant command software.", 
        es: "Terminales de control de enjambres, interfaces de hardware rugerizadas y software de comando cifrado." 
      },
      highlights: {
        en: ["Swarm Mission Coordination", "AES-256 Telemetry Encryption", "Rugged Field Terminal Panels"],
        es: ["Coordinación de Enjambres", "Cifrado de Telemetría AES-256", "Terminales Rugerizadas de Campo"]
      }
    },
    {
      id: "cap-7",
      icon: Brain,
      title: { en: "AI & Autonomy", es: "IA y Autonomía" },
      desc: { 
        en: "Edge computer vision, target tracking software and automated navigation in GPS-denied environments.", 
        es: "Visión artificial en el borde, software de tracking y navegación autónoma en entornos sin señal GPS." 
      },
      highlights: {
        en: ["Optical Flow Navigation", "Autonomous Target Recognition", "Real-Time Path Rerouting"],
        es: ["Navegación por Flujo Óptico", "Reconocimiento de Objetivos", "Re-enrutamiento de Ruta en Tiempo Real"]
      }
    }
  ];

  const workflow = [
    {
      step: "01",
      title: { en: "Mission Requirement", es: "Requisito de Misión" },
      desc: { 
        en: "Analysis of tactical challenges, environmental constraints and payload definition with field operators.", 
        es: "Análisis de desafíos tácticos, restricciones del entorno y definición de cargas útiles con operadores." 
      }
    },
    {
      step: "02",
      title: { en: "Concept Design", es: "Diseño de Concepto" },
      desc: { 
        en: "Initial 3D CAD modeling, component layouts, and mass distribution calculations.", 
        es: "Modelado inicial CAD 3D, distribución de componentes y cálculo de distribución de masas." 
      }
    },
    {
      step: "03",
      title: { en: "Engineering & Simulation", es: "Ingeniería y Simulación" },
      desc: { 
        en: "Computational Fluid Dynamics (CFD) airflow simulation and Finite Element Analysis (FEA) structural testing.", 
        es: "Simulación de flujo de aire (CFD) y pruebas de resistencia estructural de elementos finitos (FEA)." 
      }
    },
    {
      step: "04",
      title: { en: "Rapid Prototyping", es: "Prototipado Rápido" },
      desc: { 
        en: "High-strength 3D printing, CNC carbon fiber cutting, and initial frame assembly.", 
        es: "Impresión 3D de alta resistencia, corte de fibra de carbono CNC y ensamblaje inicial del fuselaje." 
      }
    },
    {
      step: "05",
      title: { en: "Integration", es: "Integración" },
      desc: { 
        en: "Avionics programming, sensor calibration, optical gimbal mounting, and telemetry sync.", 
        es: "Programación de aviónica, calibración de sensores, montaje del gimbal óptico y sincronía de telemetría." 
      }
    },
    {
      step: "06",
      title: { en: "Field Testing", es: "Pruebas de Campo" },
      desc: { 
        en: "Flight envelope validation, range test and stress testing in active simulated operational environments.", 
        es: "Validación de envolvente de vuelo, pruebas de rango de enlace y estrés en entornos reales simulados." 
      }
    },
    {
      step: "07",
      title: { en: "Operational Deployment", es: "Despliegue Operativo" },
      desc: { 
        en: "Handover of proven technology systems, documentation delivery and operator briefing.", 
        es: "Entrega de los sistemas tecnológicos aprobados, documentación de soporte y capacitación de operadores." 
      }
    }
  ];

  const galleryItems = [
    {
      id: "gal-1",
      label: t[lang].cadModel,
      code: "CAD-73-V2",
      path: "M10 20 L50 20 L30 80 Z M30 80 L70 20 L50 20 M10 20 L70 20"
    },
    {
      id: "gal-2",
      label: t[lang].printing3D,
      code: "FDM-04",
      path: "M10 80 L30 80 L30 60 L50 60 L50 40 L70 40 L70 20"
    },
    {
      id: "gal-3",
      label: t[lang].electronics,
      code: "PCB-RF-E2",
      path: "M10 50 H70 M25 20 V80 M55 20 V80 M25 50 L40 35 L55 50"
    },
    {
      id: "gal-4",
      label: t[lang].uavDev,
      code: "UAV-WING-120",
      path: "M5 45 C 20 20, 60 20, 75 45 C 60 70, 20 70, 5 45 M40 10 V80"
    },
    {
      id: "gal-5",
      label: t[lang].fieldTesting,
      code: "FLIGHT-ENV-01",
      path: "M10 70 Q 30 10, 50 40 T 70 20"
    },
    {
      id: "gal-6",
      label: t[lang].protoMfg,
      code: "CNC-MILL-88",
      path: "M15 15 H65 V65 H15 Z M15 15 L35 35 M65 65 L45 45"
    }
  ];

  return (
    <section className="relative py-24 bg-transparent text-white" id="advanced-development">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28">
        
        {/* Core R&D Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3 animate-pulse">
              // {t[lang].tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight uppercase leading-tight">
              {t[lang].title}
            </h2>
            <div className="w-20 h-1 bg-[#ff6b00] my-4" />
            <p className="text-lg text-[#ff8f3d]/90 font-mono tracking-wide leading-relaxed">
              {t[lang].subtitle}
            </p>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm text-[#8a99ad] leading-relaxed pt-8 lg:pt-14 font-sans">
              {t[lang].description}
            </p>
          </div>
        </div>

        {/* 7 Capabilities Grid */}
        <div className="space-y-8">
          <h3 className="font-mono text-xs text-[#5e7a5e] tracking-widest uppercase font-bold flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>// {t[lang].highlightsLabel}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div 
                  key={cap.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-panel p-4 rounded-sm border border-[#4f473d]/40 hover:border-[#ff6b00]/60 transition-all duration-300 flex flex-col justify-between scanlines relative group"
                >
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#4f473d]/60" />
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#4f473d]/60" />
                  
                  <div>
                    <div className="w-8 h-8 rounded-sm bg-black/40 border border-[#4f473d]/60 flex items-center justify-center mb-4 group-hover:border-[#ff6b00]/40 transition-colors">
                      <Icon className="w-4 h-4 text-[#8a99ad] group-hover:text-[#ff6b00] transition-colors" />
                    </div>
                    <h4 className="font-mono text-xs text-white font-bold tracking-wider uppercase mb-3 leading-tight min-h-[32px]">
                      {cap.title[lang]}
                    </h4>
                    <p className="text-[10px] text-[#8a99ad] leading-relaxed font-sans mb-4 min-h-[60px]">
                      {cap.desc[lang]}
                    </p>
                  </div>

                  <div className="border-t border-[#4f473d]/30 pt-3 mt-4">
                    <ul className="space-y-1 font-mono text-[8px] text-white/70">
                      {cap.highlights[lang].map((h, i) => (
                        <li key={i} className="flex items-start space-x-1">
                          <span className="w-1 h-1 bg-[#ff6b00] rotate-45 flex-shrink-0 mt-1" />
                          <span className="break-words">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Custom Solutions Subsection */}
        <div className="border border-[#4f473d]/50 bg-[#161411]/60 p-8 rounded-sm relative overflow-hidden scanlines">
          <div className="absolute top-3 right-3 font-mono text-[9px] text-[#5e7a5e]">
            SYSTEMS // DEPLOYMENT LEVEL 3
          </div>
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#4f473d]" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#4f473d]" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#4f473d]" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#ff6b00]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block">
                [ {t[lang].customTitle} ]
              </span>
              <h3 className="text-2xl font-black font-mono text-white tracking-tight uppercase leading-none">
                TAILORED STRATEGIC ADAPTATION
              </h3>
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs text-[#8a99ad] leading-relaxed font-sans">
                {t[lang].customDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Workflow Timeline */}
        <div className="space-y-8">
          <h3 className="font-mono text-xs text-[#5e7a5e] tracking-widest uppercase font-bold flex items-center space-x-2">
            <Activity className="w-4 h-4 text-[#ff6b00]/60 animate-pulse" />
            <span>// {t[lang].workflowLabel}</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 relative">
            {/* Visual connector line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-[#ff6b00]/10 via-[#ff6b00]/30 to-[#ff6b00]/10 hidden lg:block z-0" />

            {workflow.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`glass-panel p-4 rounded-sm border transition-all duration-300 relative z-10 cursor-pointer ${
                  activeStep === idx 
                    ? 'border-[#ff6b00] bg-black/60 shadow-lg shadow-[#ff6b00]/5 scale-102' 
                    : 'border-[#4f473d]/40 hover:border-[#ff6b00]/30 bg-black/20'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm border ${
                    activeStep === idx 
                      ? 'border-[#ff6b00] text-[#ff6b00] bg-[#ff6b00]/5' 
                      : 'border-[#4f473d]/60 text-[#8a99ad]'
                  }`}>
                    {t[lang].stepLabel} {item.step}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5e7a5e]/60" />
                </div>

                <h4 className="font-mono text-xs text-white font-bold tracking-wider uppercase mb-2">
                  {item.title[lang]}
                </h4>
                
                <p className="text-[10px] text-[#8a99ad] leading-relaxed font-sans">
                  {item.desc[lang]}
                </p>

                {idx < workflow.length - 1 && (
                  <div className="absolute top-1/2 -right-3.5 transform -translate-y-1/2 hidden lg:flex items-center text-[#ff6b00]/30 z-20">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Future Media R&D Gallery */}
        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs text-[#5e7a5e] tracking-widest uppercase font-bold flex items-center space-x-2">
              <Crosshair className="w-4 h-4" />
              <span>// {t[lang].galleryLabel}</span>
            </h3>
            <p className="text-xs text-[#8a99ad] mt-2 font-sans">
              {t[lang].gallerySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="glass-panel p-4 rounded-sm border border-[#4f473d]/40 relative overflow-hidden scanlines aspect-[4/5] flex flex-col justify-between group hover:border-[#ff6b00]/50 transition-all duration-300"
              >
                {/* Tech blueprint lines */}
                <div className="absolute inset-0 grid-overlay opacity-[0.12] pointer-events-none z-0" />
                
                {/* CAD Grid Illustration Area */}
                <div className="relative w-full h-[60%] border border-[#4f473d]/30 bg-black/40 rounded-sm flex items-center justify-center z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[#ff6b00]/[0.01] pointer-events-none" />
                  
                  {/* SVG CAD blueprint schematic representation */}
                  <svg className="w-20 h-20 text-[#ff6b00]/20 group-hover:text-[#ff6b00]/40 transition-colors duration-500" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="40" cy="40" r="30" strokeDasharray="3,3" />
                    <path d={item.path} />
                  </svg>
                  
                  <div className="absolute bottom-1 right-1 font-mono text-[7px] text-[#ff6b00]/40">
                    DIAG_REF // {item.code}
                  </div>
                </div>

                <div className="z-10 mt-3 flex flex-col justify-between flex-grow">
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] text-[#5e7a5e] block font-bold tracking-widest uppercase">
                      LAB FEED // 0{idx + 1}
                    </span>
                    <h4 className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                      {item.label}
                    </h4>
                  </div>
                  
                  <button className="w-full mt-4 py-2 border border-[#4f473d]/60 bg-black/40 text-[#8a99ad] hover:text-[#ff6b00] hover:border-[#ff6b00]/50 font-mono text-[8px] font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center space-x-1">
                    <span>{t[lang].viewCAD}</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
