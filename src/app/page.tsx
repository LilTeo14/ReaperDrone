'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Infographics from '../components/Infographics';
import Catalog from '../components/Catalog';
import AerialSentrySection from '../components/AerialSentrySection';
import Capabilities from '../components/Capabilities';
import Advantages from '../components/Advantages';
import TrainingPrograms from '../components/TrainingPrograms';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('es');

  return (
    <main className="relative min-h-screen bg-[#322d27] text-[#f3f4f6]">
      
      {/* Background Grids */}
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 dots-overlay opacity-[0.02] pointer-events-none" />
      
      {/* Navigation Headers */}
      <Navbar lang={lang} setLang={setLang} />
      
      {/* Cinematic Hero Segment */}
      <Hero lang={lang} />
      
      {/* Tactical Infographics Analytics Grid */}
      <Infographics lang={lang} />
      
      {/* Integrated Product Showcase & Comparison Catalog */}
      <Catalog lang={lang} />
      
      {/* Continuous Video Background Wrapper for Sentry -> Training */}
      <div className="relative overflow-hidden bg-[#161411]">
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.14] pointer-events-none"
        >
          <source src="/VTOL1-1.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          {/* Premium Flagship Centerpiece Sentry 120 (VTOL Cruza) */}
          <AerialSentrySection lang={lang} />
          
          {/* Capabilities cards */}
          <Capabilities lang={lang} />
          
          {/* Advantages registry */}
          <Advantages lang={lang} />
          
          {/* Training Programs instruction cards */}
          <TrainingPrograms lang={lang} />
        </div>
        
      </div>
      
      {/* Contact submission system & copyright Footer */}
      <ContactForm lang={lang} />

    </main>
  );
}
