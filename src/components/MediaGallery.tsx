'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Camera, Play, Radio, Eye } from 'lucide-react';

interface MediaGalleryProps {
  lang: 'en' | 'es';
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'fpv' | 'uav' | 'vtol' | 'ew' | 'fiber' | 'counter';
  type: 'image' | 'video';
  thumbnailUrl: string;
  meta: string;
}

export default function MediaGallery({ lang }: MediaGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [failedFeeds, setFailedFeeds] = useState<Record<string, boolean>>({});
  const [loadedFeeds, setLoadedFeeds] = useState<Record<string, boolean>>({});

  const t = {
    en: {
      title: "TACTICAL MEDIA REGISTRY",
      subtitle: "Sensor logs, FPV flight records, and high-altitude mission captures.",
      all: "All Feeds",
      fpv: "FPV Operations",
      uav: "UAV Reconnaissance",
      vtol: "VTOL Missions",
      ew: "Electronic Warfare",
      fiber: "Fiber Optic Systems",
      counter: "Counter-Drone Systems",
      hoverView: "Access Log Feed",
      typeVideo: "VIDEO STREAM",
      typeImage: "STILL CAPTURE"
    },
    es: {
      title: "REGISTRO DE MEDIOS TÁCTICOS",
      subtitle: "Registros de sensores, grabaciones de vuelos FPV y capturas de misiones a gran altitud.",
      all: "Todos los Feeds",
      fpv: "Operaciones FPV",
      uav: "Reconocimiento UAV",
      vtol: "Misiones VTOL",
      ew: "Guerra Electrónica",
      fiber: "Sistemas de Fibra Óptica",
      counter: "Sistemas Contra-Drones",
      hoverView: "Acceder al Registro",
      typeVideo: "TRANSMISIÓN DE VIDEO",
      typeImage: "CAPTURA DE IMAGEN"
    }
  };

  const categories = [
    { id: 'all', label: t[lang].all },
    { id: 'fpv', label: t[lang].fpv },
    { id: 'uav', label: t[lang].uav },
    { id: 'vtol', label: t[lang].vtol },
    { id: 'ew', label: t[lang].ew },
    { id: 'fiber', label: t[lang].fiber },
    { id: 'counter', label: t[lang].counter },
  ];

  // Tactical media feeds list.
  const galleryItems: GalleryItem[] = [
    {
      id: "feed-1",
      title: "MARK IV 10\" Target Drill",
      category: "fpv",
      type: "video",
      thumbnailUrl: "/wp-content/uploads/2025/09/cta-2.webp",
      meta: "LAT: 48.372N // HDG: 122"
    },
    {
      id: "feed-2",
      title: "H1 Long Range Border Sweep",
      category: "uav",
      type: "image",
      thumbnailUrl: "/wp-content/uploads/2025/09/advance-1.jpg",
      meta: "ALT: 1200M // STANDOFF"
    },
    {
      id: "feed-3",
      title: "Aerial Sentry 73 Assembly Check",
      category: "vtol",
      type: "image",
      thumbnailUrl: "/wp-content/uploads/2025/09/advance-2-hero.png",
      meta: "DISPATCH TIMER: 42S"
    },
    {
      id: "feed-4",
      title: "Fiber Spool 15km Deploy test",
      category: "fiber",
      type: "video",
      thumbnailUrl: "/wp-content/uploads/2025/09/13-o-cta-1024x795.webp",
      meta: "ZERO SIGNATURE // ACTIVE"
    },
    {
      id: "feed-5",
      title: "Netgun R1 Deployment Drill",
      category: "counter",
      type: "image",
      thumbnailUrl: "/netgun.png",
      meta: "CAPTURE DIST: 9.2M"
    },
    {
      id: "feed-6",
      title: "EW Jammer Signal Isolation",
      category: "ew",
      type: "video",
      thumbnailUrl: "/wp-content/uploads/2025/10/ews-1024x883.webp",
      meta: "BAND: L1/L2/L5 BLOCK"
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="relative bg-[#0d0f12] py-24 border-b border-[#242a35]/40" id="gallery">
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase block mb-3">
            // SENSOR DATALOGGER
          </span>
          <h2 className="text-3xl font-extrabold text-white font-mono uppercase tracking-tight">
            {t[lang].title}
          </h2>
          <div className="w-12 h-1 bg-[#ff6b00] mx-auto mt-4" />
          <p className="text-sm text-[#8a99ad] mt-4">
            {t[lang].subtitle}
          </p>
        </div>

        {/* Media Categories Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#242a35]/40 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-all duration-300 rounded-sm border ${
                activeCategory === cat.id
                  ? 'border-[#ff6b00] bg-[#ff6b00]/10 text-white'
                  : 'border-[#242a35] text-[#8a99ad] hover:text-white hover:border-[#ff6b00]/40 bg-black/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="glass-panel group rounded-sm overflow-hidden border border-[#242a35] hover:border-[#ff6b00]/40 transition-all duration-300 aspect-video relative flex flex-col justify-end cursor-pointer"
              >
                
                {/* Visual backdrop grid inside thumbnails */}
                <div className="absolute inset-0 grid-overlay opacity-[0.15] pointer-events-none z-10" />

                {/* Media indicators overlays */}
                <div className="absolute top-3 right-3 bg-black/70 border border-[#242a35] p-1.5 rounded-sm z-20 text-white">
                  {item.type === 'video' ? <Video className="w-4 h-4 text-[#ff6b00]" /> : <Camera className="w-4 h-4 text-emerald-400" />}
                </div>

                {/* Live Feed simulated scanline */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-70 group-hover:opacity-80 transition-opacity z-10" />

                {/* Image element */}
                {!failedFeeds[item.id] && (
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-102 group-hover:opacity-85 transition-all duration-500 z-10"
                    onLoad={() => {
                      setLoadedFeeds(prev => ({ ...prev, [item.id]: true }));
                    }}
                    onError={() => {
                      setFailedFeeds(prev => ({ ...prev, [item.id]: true }));
                    }}
                  />
                )}
                
                {/* Visual blueprint overlay when source image errors out or is loading */}
                {(!loadedFeeds[item.id] || failedFeeds[item.id]) && (
                  <div className="absolute inset-0 bg-[#0f1216] flex flex-col items-center justify-center p-4 text-center font-mono z-0">
                    <Radio className="w-8 h-8 text-[#8a99ad]/50 mb-2 animate-pulse" />
                    <span className="text-[10px] text-white font-bold">{item.title}</span>
                    <span className="text-[8px] text-[#5e7a5e] mt-1">{item.meta}</span>
                  </div>
                )}

                {/* Hover overlay control */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="flex flex-col items-center space-y-2 font-mono">
                    {item.type === 'video' ? (
                      <div className="w-12 h-12 rounded-full border border-[#ff6b00] flex items-center justify-center bg-[#ff6b00]/10 text-[#ff6b00]">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full border border-emerald-400 flex items-center justify-center bg-emerald-400/10 text-emerald-400">
                        <Eye className="w-5 h-5" />
                      </div>
                    )}
                    <span className="text-[10px] text-white tracking-widest uppercase font-bold">{t[lang].hoverView}</span>
                  </div>
                </div>

                {/* Title & Metadata (Z-indexed above details overlay) */}
                <div className="p-4 relative z-20 font-mono">
                  <div className="text-[9px] text-[#ff8f3d] font-bold tracking-wider mb-1">
                    {item.type === 'video' ? t[lang].typeVideo : t[lang].typeImage}
                  </div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider group-hover:text-[#ff6b00] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-[9px] text-[#5e7a5e] mt-1.5">
                    {item.meta}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
