'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Infographics from '../components/Infographics';
import Catalog from '../components/Catalog';
import AerialSentrySection from '../components/AerialSentrySection';
import NetgunSection from '../components/NetgunSection';
import Capabilities from '../components/Capabilities';
import Advantages from '../components/Advantages';
import MediaGallery from '../components/MediaGallery';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('es');

  return (
    <main className="relative min-h-screen bg-[#090b0e] text-[#f3f4f6]">
      
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
      
      {/* Premium Flagship Centerpiece Sentry 120 (VTOL Cruza) */}
      <AerialSentrySection lang={lang} />
      
      {/* Featured Netgun R1 skycaptor */}
      <NetgunSection lang={lang} />
      
      {/* Capabilities cards */}
      <Capabilities lang={lang} />
      
      {/* Advantages registry */}
      <Advantages lang={lang} />
      
      {/* Tactical Media registry */}
      <MediaGallery lang={lang} />
      
      {/* Contact submission system & copyright Footer */}
      <ContactForm lang={lang} />

    </main>
  );
}
