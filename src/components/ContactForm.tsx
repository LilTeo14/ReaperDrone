'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Send, Check } from 'lucide-react';

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" fill="currentColor" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

interface ContactFormProps {
  lang: 'en' | 'es';
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const t = {
    en: {
      tag: "GET IN TOUCH",
      title: "SECURE COMMS INTAKE",
      subtitle: "Submit request for specifications, quotation, or technical advisory. Transmission is secured under end-to-end encryption protocols.",
      labelName: "Full Name",
      labelOrg: "Agency / Organization",
      labelEmail: "Secure Email",
      labelMsg: "Tactical Query",
      btnSubmit: "Encrypt & Transmit Request",
      successMsg: "Transmission Successful. Secure feedback channel established.",
      contactInfo: "COMMUNICATION DIRECTORY",
      email: "Email Liaison",
      location: "Location",
      coordinates: "Santiago, Chile",
      socials: "NETWORK BROADCASTS",
      footerTagline: "Advanced Unmanned Systems & Electronic Warfare Solutions",
      rights: "© 2026 Reaper Defence. All Rights Reserved.",
      clearance: "SECURITY CLEARANCE LEVEL 2 // READ-ONLY FEED"
    },
    es: {
      tag: "PÓNGASE EN CONTACTO",
      title: "REGISTRO DE ENLACE SEGURO",
      subtitle: "Solicite cotizaciones, fichas técnicas completas o asesoría táctica. La transmisión está protegida bajo protocolos de cifrado de extremo a extremo.",
      labelName: "Nombre Completo",
      labelOrg: "Agencia / Organización",
      labelEmail: "Correo Seguro",
      labelMsg: "Mensaje",
      btnSubmit: "Cifrar y Transmitir Solicitud",
      successMsg: "Transmisión Exitosa. Canal seguro de comunicación establecido.",
      contactInfo: "DIRECTORIO DE COMUNICACIÓN",
      email: "Correo de Enlace",
      location: "Ubicación",
      coordinates: "Santiago, Chile",
      socials: "REDES DE DIFUSIÓN",
      footerTagline: "Sistemas No Tripulados Avanzados y Soluciones de Guerra Electrónica",
      rights: "© 2026 Reaper Defence. Todos los derechos reservados.",
      clearance: "CLEARANCE DE SEGURIDAD NIVEL 2 // ACCESO LECTURA"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <footer className="relative bg-[#25211c] pt-24 pb-12 border-t border-[#4f473d]/60" id="contact">
      <div className="absolute inset-0 grid-overlay opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Form Left, Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#4f473d]/40">
          
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3">
                // {t[lang].tag}
              </span>
              <h2 className="text-3xl font-extrabold text-white font-mono uppercase tracking-tight">
                ESTABLISH CONTACT
              </h2>
              <p className="text-sm text-[#8a99ad] mt-4 leading-relaxed">
                {t[lang].subtitle}
              </p>
            </div>

            {/* Direct directory cards */}
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-[#5e7a5e] tracking-widest uppercase font-bold">
                // {t[lang].contactInfo}
              </h3>
              
              <div className="border border-[#4f473d] bg-black/25 p-4 rounded-sm space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#8a99ad]">{t[lang].email}:</span>
                  <a href="mailto:matiasbarriosm@gmail.com" className="text-white hover:text-[#ff6b00] font-bold transition-colors">
                    matiasbarriosm@gmail.com
                  </a>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[#8a99ad]">{t[lang].location}:</span>
                  <span className="text-white font-bold text-right">{t[lang].coordinates}</span>
                </div>
              </div>
            </div>

            {/* Social Links Networks */}
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-[#5e7a5e] tracking-widest uppercase font-bold">
                // {t[lang].socials}
              </h3>
              <div className="flex space-x-3">
                {[
                  { icon: Instagram, url: "https://www.instagram.com/reaper_defense?igsh=MTI5Nmw4YzI3ZDJ2NQ%3D%3D", label: "Instagram" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-[#4f473d] bg-[#1d1915] hover:bg-[#ff6b00]/10 hover:border-[#ff6b00]/50 rounded-sm flex items-center justify-center text-[#8a99ad] hover:text-white transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Secure Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-sm scanlines relative">
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#4f473d]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#4f473d]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#4f473d]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#ff6b00]" />

              <h3 className="font-mono text-xs text-[#ff6b00] tracking-widest uppercase mb-6 flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#ff6b00]" />
                <span>{t[lang].title}</span>
              </h3>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full border border-emerald-400 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6 animate-pulse" />
                  </div>
                  <p className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    {t[lang].successMsg}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[#8a99ad] uppercase tracking-wider">{t[lang].labelName}</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-[#1d1915] border border-[#4f473d] focus:border-[#ff6b00] rounded-sm px-4 py-3 text-white focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#8a99ad] uppercase tracking-wider">{t[lang].labelOrg}</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ministry of Defense / Private Security"
                        className="w-full bg-[#1d1915] border border-[#4f473d] focus:border-[#ff6b00] rounded-sm px-4 py-3 text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#8a99ad] uppercase tracking-wider">{t[lang].labelEmail}</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jdoe@agency.gov"
                      className="w-full bg-[#1d1915] border border-[#4f473d] focus:border-[#ff6b00] rounded-sm px-4 py-3 text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#8a99ad] uppercase tracking-wider">{t[lang].labelMsg}</label>
                    <textarea 
                      rows={4}
                      required 
                      placeholder="Input requested platform specs or operational mission scope..."
                      className="w-full bg-[#1d1915] border border-[#4f473d] focus:border-[#ff6b00] rounded-sm px-4 py-3 text-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#ff6b00] hover:bg-[#e05e00] text-white font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#ff6b00]/15"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t[lang].btnSubmit}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Brand Copyright footer details */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0 font-mono text-[10px] text-[#8a99ad]">
          <div className="flex flex-col md:items-start text-center md:text-left space-y-1">
            <span className="font-bold text-white text-xs tracking-widest">REAPER DEFENCE</span>
            <span className="text-[9px] text-[#5e7a5e]">{t[lang].footerTagline}</span>
          </div>
          
          <div>
            <span>{t[lang].rights}</span>
          </div>

          <div className="text-[#5e7a5e] border border-[#2d3a2d]/60 bg-[#1a221a]/20 px-3 py-1 rounded-sm">
            {t[lang].clearance}
          </div>
        </div>

      </div>
    </footer>
  );
}
