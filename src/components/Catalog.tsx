'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { products, Product } from '../data/products';
import { Eye, ShieldAlert, Cpu, ArrowUpDown, X, Check, FileText } from 'lucide-react';

interface CatalogProps {
  lang: 'en' | 'es';
}

export default function Catalog({ lang }: CatalogProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'fpv' | 'uav' | 'fiber' | 'ew' | 'other'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFPVCompare, setShowFPVCompare] = useState(false);
  const [expandedSpecs, setExpandedSpecs] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const t = {
    en: {
      title: "TACTICAL CATALOG",
      subtitle: "Browse our lineup of advanced unmanned platforms and electronic warfare resilience systems.",
      tabAll: "All Equipment",
      tabFPV: "FPV Platforms",
      tabUAV: "UAV Systems",
      tabFiber: "EW Fiber Optic",
      tabEW: "Electronic Warfare",
      tabOther: "Tactical Tools",
      btnDetails: "Expand Tech Card",
      btnCompareFPV: "Compare FPV Models",
      btnCompareClose: "Close Comparison",
      fiberSectionTitle: "Contested EW Fiber Optic Spools",
      fiberSectionDesc: "Mission-critical components for fiber-optic FPV and unmanned systems operating in heavy electronic warfare environments where radio control is jammed or intercepted.",
      compareTableTitle: "Fiber Optic Spool Comparison Table",
      specsHeader: "TECHNICAL SPECIFICATIONS",
      featuresHeader: "SYSTEM CAPABILITIES",
      deploymentHeader: "TACTICAL APPLICATIONS",
      close: "Close",
      noImage: "Tactical Asset Render Placeholder",
      price: "Price",
      compatibility: "System Compatibility",
      weight: "Module Weight",
      length: "Coil Length",
      tensile: "Tensile Strength",
      btnExplore: "Explore Category",
      categoryTag: "CATEGORY"
    },
    es: {
      title: "CATÁLOGO TÁCTICO",
      subtitle: "Explore nuestra línea de plataformas no tripuladas avanzadas y sistemas de resiliencia ante guerra electrónica.",
      tabAll: "Todo el Equipo",
      tabFPV: "Plataformas FPV",
      tabUAV: "Sistemas UAV",
      tabFiber: "Fibra Óptica EW",
      tabEW: "Guerra Electrónica",
      tabOther: "Herramientas Tácticas",
      btnDetails: "Ficha Técnica",
      btnCompareFPV: "Comparar Modelos FPV",
      btnCompareClose: "Cerrar Comparación",
      fiberSectionTitle: "Carretes de Fibra Óptica para Entornos con EW",
      fiberSectionDesc: "Componentes críticos para sistemas FPV de fibra óptica y vehículos no tripulados que operan en entornos de guerra electrónica donde el control de radio está bloqueado o interceptado.",
      compareTableTitle: "Tabla Comparativa de Carretes de Fibra Óptica",
      specsHeader: "ESPECIFICACIONES TÉCNICAS",
      featuresHeader: "CAPACIDADES DEL SISTEMA",
      deploymentHeader: "APLICACIONES TÁCTICAS",
      close: "Cerrar",
      noImage: "Placeholder de Render de Activo Táctico",
      price: "Precio",
      compatibility: "Compatibilidad del Sistema",
      weight: "Peso del Módulo",
      length: "Longitud de Bobina",
      tensile: "Resistencia a la Tensión",
      btnExplore: "Explorar Categoría",
      categoryTag: "CATEGORÍA"
    }
  };

  const categories = [
    {
      id: 'cat-fpv',
      targetTab: 'fpv' as const,
      name: {
        en: "FPV Platforms",
        es: "Plataformas FPV"
      },
      model: "Tactical FPV Drones",
      image: "/catalogo/Plataformas FPV/FPV 15 e - copia.jpeg",
      objectPosition: "object-bottom",
      description: {
        en: "Tactical first-person view drone platforms, including 7\", 8\", 10\", and 15\" models optimized for high-speed assault, heavy payload delivery, and reconnaissance.",
        es: "Plataformas tácticas de drones en primera persona (FPV), incluyendo modelos de 7\", 8\", 10\" y 15\" optimizados para asalto de alta velocidad, transporte pesado y reconocimiento."
      }
    },
    {
      id: 'cat-uav',
      targetTab: 'uav' as const,
      name: {
        en: "UAV Systems",
        es: "Sistemas UAV"
      },
      model: "VTOL & Fixed Wing",
      image: "/catalogo/Sistemas UAV/as1202.jpeg",
      description: {
        en: "Long-range tactical fixed-wing and VTOL reconnaissance platforms designed for persistent border patrol, target mapping, and over-the-horizon intelligence.",
        es: "Plataformas tácticas de ala fija y VTOL de largo alcance diseñadas para patrullaje persistente, mapeo de objetivos e inteligencia más allá del horizonte."
      }
    },
    {
      id: 'cat-fiber',
      targetTab: 'fiber' as const,
      name: {
        en: "EW Fiber Optic",
        es: "Fibra Óptica EW"
      },
      model: "Secure Control Links",
      image: "/catalogo/Fibra optica/Fibra optica.jpeg",
      description: {
        en: "Secure bend-insensitive fiber optic control spools that provide high-tensile, zero-emission connection immune to radio frequency jamming.",
        es: "Carretes de fibra óptica de control seguros y resistentes a la flexión que proporcionan una conexión de alta resistencia y cero emisiones, inmune a inhibiciones de radiofrecuencia."
      }
    },
    {
      id: 'cat-ew',
      targetTab: 'ew' as const,
      name: {
        en: "Electronic Warfare",
        es: "Guerra Electrónica"
      },
      model: "Active Jammers",
      image: "/catalogo/Guerra electronica/categoria ge.png",
      description: {
        en: "Active RF jammers, handheld anti-drone silencers, and vehicular drone suppression systems.",
        es: "Inhibidores de RF activos, silenciadores portátiles anti-drones y sistemas de supresión de drones vehiculares."
      }
    },
    {
      id: 'cat-other',
      targetTab: 'other' as const,
      name: {
        en: "Tactical Tools",
        es: "Herramientas Tácticas"
      },
      model: "Capture & Release Tools",
      image: "/catalogo/Herramientas tacticas/skycap2.jpeg",
      description: {
        en: "Drone capture interceptors, release systems, and auxiliary payloads designed to expand drone security and offensive/defensive operations.",
        es: "Interceptores de captura de drones, sistemas de liberación y cargas útiles auxiliares diseñados para expandir la seguridad y operaciones ofensivas y defensivas."
      }
    }
  ];

  const filteredProducts = products.filter(p => {
    if (activeTab === 'all') return true;
    if (activeTab === 'fpv') return p.category === 'fpv';
    if (activeTab === 'uav') return p.category === 'vtol' || p.category === 'fixed-wing';
    if (activeTab === 'fiber') return p.category === 'fiber';
    if (activeTab === 'ew') return p.category === 'ew';
    if (activeTab === 'other') return p.category === 'netgun' || p.category === 'release';
    return true;
  });

  const fpvProducts = products.filter(p => p.category === 'fpv');
  const fiberProducts = products.filter(p => p.category === 'fiber');

  return (
    <section className="relative bg-[#322d27] py-24 border-b border-[#4f473d]/40" id="catalog">
      <div className="absolute inset-0 grid-overlay opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-xs text-[#ff6b00] font-mono font-bold tracking-widest uppercase mb-3">
              // {t[lang].title}
            </h2>
            <p className="text-3xl font-extrabold text-white font-mono uppercase tracking-tight">
              HARDWARE & INTERCEPT SYSTEM REGISTRY
            </p>
            <p className="text-sm text-[#8a99ad] mt-2 max-w-2xl">
              {t[lang].subtitle}
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex gap-4">
            <button
              onClick={() => setShowFPVCompare(true)}
              className="px-4 py-2.5 border border-[#ff6b00]/40 hover:border-[#ff6b00] bg-[#ff6b00]/5 hover:bg-[#ff6b00]/15 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center space-x-2"
            >
              <ArrowUpDown className="w-4 h-4 text-[#ff6b00]" />
              <span>{t[lang].btnCompareFPV}</span>
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 border-b border-[#4f473d]/50 pb-6 mb-10">
          {(['all', 'fpv', 'uav', 'fiber', 'ew', 'other'] as const).map((tab) => {
            const labels = {
              all: t[lang].tabAll,
              fpv: t[lang].tabFPV,
              uav: t[lang].tabUAV,
              fiber: t[lang].tabFiber,
              ew: t[lang].tabEW,
              other: t[lang].tabOther,
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300 rounded-sm border ${
                  activeTab === tab
                    ? 'border-[#ff6b00] bg-[#ff6b00]/10 text-white shadow-md shadow-[#ff6b00]/10'
                    : 'border-[#4f473d] text-[#8a99ad] hover:text-white hover:border-[#ff6b00]/40 bg-black/20'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'all' ? (
            categories.map((category) => (
              <motion.div
                layoutId={`card-${category.id}`}
                key={category.id}
                className="glass-panel rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#ff6b00]/40 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveTab(category.targetTab)}
              >
                
                {/* Product Thumbnail Section */}
                <div className="relative aspect-video bg-black/40 border-b border-[#4f473d]/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 left-3 bg-[#1d1915]/90 border border-[#4f473d] px-2.5 py-1 rounded-sm z-10 font-mono text-[9px] text-[#ff6b00] font-bold">
                    {t[lang].categoryTag}
                  </div>
                  
                  {/* Visual grid inside image slot */}
                  <div className="absolute inset-0 grid-overlay opacity-[0.2] pointer-events-none" />
                  
                  {category.image && !failedImages[category.id] && (
                    <Image
                      src={category.image}
                      alt={category.name[lang]}
                      width={400}
                      height={225}
                      className={`absolute inset-0 object-cover w-full h-full opacity-80 group-hover:scale-102 group-hover:opacity-100 transition-all duration-500 z-10 ${(category as any).objectPosition || ''}`}
                      onLoad={() => {
                        setLoadedImages(prev => ({ ...prev, [category.id]: true }));
                      }}
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [category.id]: true }));
                      }}
                    />
                  )}
                  
                  {/* Fallback Display if image error or loading */}
                  {(!category.image || !loadedImages[category.id] || failedImages[category.id]) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#1d1915] text-center font-mono select-none group-hover:bg-[#221f1a] transition-all z-0">
                      <div className="w-12 h-12 border border-[#4f473d] rounded-sm flex items-center justify-center mb-2 group-hover:border-[#ff6b00]/30 transition-colors">
                        <Cpu className="w-6 h-6 text-[#8a99ad] group-hover:text-[#ff6b00] transition-colors" />
                      </div>
                      <span className="text-[10px] text-[#8a99ad] font-bold uppercase tracking-wider">{category.model}</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Product Info Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white font-mono tracking-wider group-hover:text-[#ff6b00] transition-colors">
                        {category.name[lang]}
                      </h3>
                    </div>
                    <p className="text-xs text-[#8a99ad] leading-relaxed mb-6">
                      {category.description[lang]}
                    </p>
                  </div>

                  {/* Micro Action Bar */}
                  <div className="border-t border-[#4f473d]/60 pt-4 flex gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(category.targetTab);
                      }}
                      className="flex-grow py-2.5 bg-[#1d1915] hover:bg-[#ff6b00]/10 border border-[#4f473d] hover:border-[#ff6b00] text-[#8a99ad] hover:text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4 text-[#ff6b00]" />
                      <span>{t[lang].btnExplore}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))
          ) : (
            filteredProducts.map((product) => (
              <motion.div
                layoutId={`card-${product.id}`}
                key={product.id}
                className="glass-panel rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#ff6b00]/40 transition-all duration-300 group"
              >
                
                {/* Product Thumbnail Section */}
                <div className="relative aspect-video bg-black/40 border-b border-[#4f473d]/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-3 left-3 bg-[#1d1915]/90 border border-[#4f473d] px-2.5 py-1 rounded-sm z-10 font-mono text-[9px] text-[#5e7a5e] font-bold">
                    {product.category.toUpperCase()}
                  </div>
                  
                  {/* Visual grid inside image slot */}
                  <div className="absolute inset-0 grid-overlay opacity-[0.2] pointer-events-none" />
                  
                  {product.image && !failedImages[product.id] && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={225}
                      className={`absolute inset-0 object-cover w-full h-full opacity-80 group-hover:scale-102 group-hover:opacity-100 transition-all duration-500 z-10 ${product.objectPosition || ''}`}
                      onLoad={() => {
                        setLoadedImages(prev => ({ ...prev, [product.id]: true }));
                      }}
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [product.id]: true }));
                      }}
                    />
                  )}
                  
                  {/* Fallback Display if image error or loading */}
                  {(!product.image || !loadedImages[product.id] || failedImages[product.id]) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-[#1d1915] text-center font-mono select-none group-hover:bg-[#221f1a] transition-all z-0">
                      <div className="w-12 h-12 border border-[#4f473d] rounded-sm flex items-center justify-center mb-2 group-hover:border-[#ff6b00]/30 transition-colors">
                        <Cpu className="w-6 h-6 text-[#8a99ad] group-hover:text-[#ff6b00] transition-colors" />
                      </div>
                      <span className="text-[10px] text-[#8a99ad] font-bold uppercase tracking-wider">{product.model}</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Product Info Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white font-mono tracking-wider group-hover:text-[#ff6b00] transition-colors">
                        {product.name}
                      </h3>
                      {product.price && (
                        <span className="font-mono text-xs font-bold text-[#ff8f3d] bg-[#ff8f3d]/5 px-2 py-0.5 border border-[#ff8f3d]/25 rounded-sm">
                          {product.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#8a99ad] leading-relaxed mb-6">
                      {product[lang].description}
                    </p>
                  </div>

                  {/* Micro Action Bar */}
                  <div className="border-t border-[#4f473d]/60 pt-4 flex gap-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-grow py-2.5 bg-[#1d1915] hover:bg-[#ff6b00]/10 border border-[#4f473d] hover:border-[#ff6b00] text-[#8a99ad] hover:text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4 text-[#ff6b00]" />
                      <span>{t[lang].btnDetails}</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))
          )}
        </div>

        {/* Dedicated Fiber Optic Subsection Comparison */}
        {activeTab === 'fiber' && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 border border-[#4f473d] bg-[#1c1815]/80 rounded-sm p-8"
          >
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-3">
                <ShieldAlert className="w-5 h-5 text-[#ff6b00]" />
                <h3 className="text-xl font-bold font-mono text-white tracking-wide uppercase">
                  {t[lang].fiberSectionTitle}
                </h3>
              </div>
              <p className="text-sm text-[#8a99ad] max-w-4xl leading-relaxed">
                {t[lang].fiberSectionDesc}
              </p>
            </div>

            {/* Comparison Grid Table */}
            <div className="overflow-x-auto border border-[#4f473d] rounded-sm bg-black/20">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="bg-[#1d1915] border-b border-[#4f473d] text-[#8a99ad] uppercase tracking-wider">
                    <th className="p-4">{t[lang].tabFiber}</th>
                    <th className="p-4">{t[lang].length}</th>
                    <th className="p-4">{t[lang].weight}</th>
                    <th className="p-4">{t[lang].compatibility}</th>
                    <th className="p-4">{t[lang].tensile}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4f473d]/60 text-white">
                  {fiberProducts.map((p) => {
                    const lengthVal = p[lang].specs.find(s => s.label.includes('Length') || s.label.includes('Longitud'))?.value || 'N/A';
                    const weightVal = p[lang].specs.find(s => s.label.includes('Weight') || s.label.includes('Peso'))?.value || 'N/A';
                    const compatVal = p[lang].specs.find(s => s.label.includes('Compatibility') || s.label.includes('Compatibilidad'))?.value || 'N/A';
                    const tensileVal = p[lang].specs.find(s => s.label.includes('Tensile') || s.label.includes('Tensión'))?.value || 'N/A';
                    return (
                      <tr key={p.id} className="hover:bg-[#1d1915]/30 transition-colors">
                        <td className="p-4 font-bold text-[#ff8f3d]">{p.name}</td>
                        <td className="p-4">{lengthVal}</td>
                        <td className="p-4">{weightVal}</td>
                        <td className="p-4 text-[#8a99ad]">{compatVal}</td>
                        <td className="p-4">{tensileVal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div 
              layoutId={`card-${selectedProduct.id}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#1c1815] border border-[#4f473d] rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl z-10 scanlines"
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-[#4f473d] flex justify-between items-center bg-[#1d1915]">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-[#5e7a5e] border border-[#2d3a2d] px-2 py-0.5 rounded-sm">
                    {selectedProduct.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold font-mono text-white tracking-wider uppercase">
                    {selectedProduct.name}
                  </h3>
                </div>
                
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 rounded-sm border border-[#4f473d] text-[#8a99ad] hover:text-white hover:border-[#ff6b00]/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-8 overflow-y-auto space-y-8 flex-grow">
                <p className="text-sm text-[#8a99ad] leading-relaxed border-l-2 border-[#ff6b00] pl-4">
                  {selectedProduct[lang].description}
                </p>

                {/* Features & Specs Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Technical card Specs */}
                  <div>
                    <h4 className="text-xs font-mono text-[#ff6b00] font-bold tracking-widest uppercase mb-4 flex items-center space-x-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t[lang].specsHeader}</span>
                    </h4>
                    <div className="border border-[#4f473d] rounded-sm overflow-hidden bg-black/15 font-mono text-xs">
                      {selectedProduct[lang].specs.map((spec, idx) => (
                        <div 
                          key={idx} 
                          className="flex justify-between items-center p-3 border-b border-[#4f473d]/40 last:border-b-0 hover:bg-[#1d1915]/20"
                        >
                          <span className="text-[#8a99ad]">{spec.label}</span>
                          <span className="text-white font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities & Deployments list */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-[#ff6b00] font-bold tracking-widest uppercase mb-4 flex items-center space-x-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>{t[lang].featuresHeader}</span>
                      </h4>
                      <ul className="space-y-3">
                        {selectedProduct[lang].features.map((feat, idx) => (
                          <li key={idx} className="flex items-start text-xs text-[#8a99ad]">
                            <Check className="w-4 h-4 text-[#ff8f3d] mr-2.5 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedProduct[lang].capabilities && (
                      <div>
                        <h4 className="text-xs font-mono text-[#ff6b00] font-bold tracking-widest uppercase mb-4 flex items-center space-x-1.5">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          <span>{t[lang].deploymentHeader}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct[lang].capabilities.map((cap, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] font-mono text-[#8a99ad] border border-[#4f473d] bg-[#1d1915]/60 px-3 py-1.5 rounded-sm"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="p-4 border-t border-[#4f473d] flex justify-end bg-[#161411]">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-2.5 bg-[#1d1915] hover:bg-[#4f473d] border border-[#4f473d] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                >
                  {t[lang].close}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FPV Drones Comparison Modal Overlay */}
      <AnimatePresence>
        {showFPVCompare && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFPVCompare(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Comparison Dialog */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-[#1c1815] border border-[#4f473d] rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl z-10 scanlines"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-[#4f473d] flex justify-between items-center bg-[#1d1915]">
                <h3 className="text-lg font-bold font-mono text-white tracking-widest uppercase">
                  // REAPER FPV TACTICAL MATRIX COMPARISON
                </h3>
                <button
                  onClick={() => setShowFPVCompare(false)}
                  className="p-1 rounded-sm border border-[#4f473d] text-[#8a99ad] hover:text-white hover:border-[#ff6b00]/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable table content */}
              <div className="p-8 overflow-y-auto overflow-x-auto flex-grow">
                <table className="w-full text-left font-mono text-xs border border-[#4f473d]/60 bg-black/10 rounded-sm">
                  <thead>
                    <tr className="bg-[#1d1915] border-b border-[#4f473d] text-[#8a99ad] uppercase tracking-wider text-[10px]">
                      <th className="p-4">SPEC / MODEL</th>
                      {fpvProducts.map(p => (
                        <th key={p.id} className="p-4 text-center border-l border-[#4f473d]/60 font-bold text-white">
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#4f473d]/40 text-white">
                    {/* Rows */}
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Wheelbase</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40">
                          {p[lang].specs.find(s => s.label.includes('Wheelbase') || s.label.includes('Ejes'))?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Max Speed</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40">
                          {p[lang].specs.find(s => s.label.includes('Max Speed') || s.label.includes('Máxima'))?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Rated Payload</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40">
                          {p[lang].specs.find(s => s.label.includes('Rated Payload') || s.label.includes('Nominal'))?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Max Payload</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40">
                          {p[lang].specs.find(s => s.label.includes('Max Payload') || s.label.includes('Máxima'))?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Endurance (No-load)</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40">
                          {p[lang].specs.find(s => s.label.includes('No-load') || s.label.includes('sin Carga'))?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Endurance (Loaded)</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40">
                          {p[lang].specs.find(s => s.label.includes('Loaded Flight') || s.label.includes('con Carga'))?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Motor Model</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40 text-[#8a99ad]">
                          {p[lang].specs.find(s => s.label === 'Motor')?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                    <tr className="hover:bg-[#1d1915]/20">
                      <td className="p-4 font-bold text-[#8a99ad]">Propeller Type</td>
                      {fpvProducts.map(p => (
                        <td key={p.id} className="p-4 text-center border-l border-[#4f473d]/40 text-[#8a99ad]">
                          {p[lang].specs.find(s => s.label === 'Propeller' || s.label === 'Hélice')?.value || 'N/A'}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Close Footer */}
              <div className="p-4 border-t border-[#4f473d] flex justify-end bg-[#161411]">
                <button
                  onClick={() => setShowFPVCompare(false)}
                  className="px-6 py-2.5 bg-[#1d1915] hover:bg-[#4f473d] border border-[#4f473d] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
                >
                  {t[lang].close}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
