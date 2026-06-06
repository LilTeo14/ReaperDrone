export interface ProductDetails {
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  capabilities?: string[];
  deployment?: string[];
  operationalProfile?: {
    endurance: string;
    payload: string;
    range: string;
    propulsion: string;
  };
}

export interface Product {
  id: string;
  name: string;
  model: string;
  category: 'fpv' | 'vtol' | 'fixed-wing' | 'fiber' | 'netgun' | 'release' | 'ew';
  image: string;
  objectPosition?: string;
  gallery?: string[];
  price?: string;
  en: ProductDetails;
  es: ProductDetails;
}

export const products: Product[] = [
  {
    id: "fpv-7",
    name: "MARK IV FPV 7\"",
    model: "7-Inch Tactical FPV",
    category: "fpv",
    image: "/wp-content/uploads/2025/09/7_main-cta.webp", // Will fallback gracefully
    en: {
      description: "First-person perspective tactical platform with high-efficiency propulsion, optimized for short-range precision operations and rapid deployment.",
      features: [
        "High-efficiency DroView 2807 1350KV motors for exceptional responsiveness",
        "Carbon fiber 3K T300 military-grade frame structure",
        "Advanced low-latency DroView 1800TVL FPV camera for real-time control",
        "Electronic Warfare (EW) resistant transmission option available"
      ],
      specs: [
        { label: "Net Weight", value: "540g" },
        { label: "Wheelbase", value: "312mm" },
        { label: "Dimensions", value: "276mm x 242mm x 45mm" },
        { label: "Max Speed", value: "160 KM/H" },
        { label: "Max Range", value: "20 km" },
        { label: "Rated Payload", value: "1.5 kg" },
        { label: "Max Payload", value: "2.3 kg" },
        { label: "Max Take-off Weight", value: "3.3 kg" },
        { label: "No-load Flight Time", value: "29 min (8000mAh)" },
        { label: "Loaded Flight Time", value: "14 min (10000mAh, 3.2kg total)" },
        { label: "Flight Controller", value: "DroView BL F405" },
        { label: "ESC", value: "DroView 60A 4-in-1" },
        { label: "Motor", value: "DroView 2807 1350KV" },
        { label: "Propeller", value: "7040 PC" },
        { label: "Video Transmission", value: "DroView 5.8G 3W (optional)" },
        { label: "Recommended Battery", value: "6S 8000-10000mAh 10-50C XT60" }
      ],
      capabilities: [
        "Precision target neutralisation",
        "Short-range rapid reconnaissance",
        "Urban tactical intervention",
        "EW-contested area penetration"
      ]
    },
    es: {
      description: "Plataforma FPV táctica en primera persona con propulsión de alta eficiencia, optimizada para operaciones de precisión a corta distancia y despliegue rápido.",
      features: [
        "Motores de alta eficiencia DroView 2807 1350KV para una respuesta excepcional",
        "Estructura de chasis de fibra de carbono 3K T300 de grado militar",
        "Cámara FPV de baja latencia DroView 1800TVL para control en tiempo real",
        "Opción de transmisión resistente a Guerra Electrónica (EW) disponible"
      ],
      specs: [
        { label: "Peso Neto", value: "540g" },
        { label: "Distancia entre Ejes", value: "312mm" },
        { label: "Dimensiones", value: "276mm x 242mm x 45mm" },
        { label: "Velocidad Máxima", value: "160 KM/H" },
        { label: "Alcance Máximo", value: "20 km" },
        { label: "Carga Útil Nominal", value: "1.5 kg" },
        { label: "Carga Útil Máxima", value: "2.3 kg" },
        { label: "Peso Máx al Despegue", value: "3.3 kg" },
        { label: "Autonomía sin Carga", value: "29 min (8000mAh)" },
        { label: "Autonomía con Carga", value: "14 min (10000mAh, 3.2kg total)" },
        { label: "Controlador de Vuelo", value: "DroView BL F405" },
        { label: "ESC", value: "DroView 60A 4-in-1" },
        { label: "Motor", value: "DroView 2807 1350KV" },
        { label: "Hélice", value: "7040 PC" },
        { label: "Transmisión de Video", value: "DroView 5.8G 3W (opcional)" },
        { label: "Batería Recomendada", value: "6S 8000-10000mAh 10-50C XT60" }
      ],
      capabilities: [
        "Neutralización de precisión",
        "Reconocimiento rápido de corto alcance",
        "Intervención táctica urbana",
        "Penetración en áreas con presencia de EW"
      ]
    }
  },
  {
    id: "fpv-8",
    name: "MARK IV FPV 8\"",
    model: "8-Inch Heavy FPV",
    category: "fpv",
    image: "/wp-content/uploads/2025/09/8-cta.webp",
    en: {
      description: "Medium tactical FPV platform offering increased torque and lift, allowing for heavier payloads and longer hover times under operational conditions.",
      features: [
        "Heavy-duty DroView 2812 1050KV motors designed for payloads up to 2.5 kg",
        "Rigid 3K T300 carbon fiber frame for stability in windy environments",
        "Optimized 8-inch polycarbonate propellers for balanced thrust",
        "Highly customizable configuration with optional thermal cameras"
      ],
      specs: [
        { label: "Net Weight", value: "608g" },
        { label: "Wheelbase", value: "354mm" },
        { label: "Dimensions", value: "321mm x 235mm x 50mm" },
        { label: "Max Speed", value: "160 KM/H" },
        { label: "Max Range", value: "20 km" },
        { label: "Rated Payload", value: "2.0 kg" },
        { label: "Max Payload", value: "2.5 kg" },
        { label: "Max Take-off Weight", value: "4.2 kg" },
        { label: "No-load Flight Time", value: "29 min (8000mAh)" },
        { label: "Loaded Flight Time", value: "13 min (10000mAh, 3.5kg total)" },
        { label: "Flight Controller", value: "DroView BL F405" },
        { label: "ESC", value: "DroView 60A 4-in-1" },
        { label: "Motor", value: "DroView 2812 1050KV" },
        { label: "Propeller", value: "8040 PC" },
        { label: "Video Transmission", value: "DroView 5.8G 3W (optional)" },
        { label: "Recommended Battery", value: "6S 8000-10000mAh 10-50C XT60" }
      ],
      capabilities: [
        "Medium-range precision payloads",
        "Sustained tactical surveillance",
        "Targeted industrial security",
        "Modular equipment delivery"
      ]
    },
    es: {
      description: "Plataforma FPV táctica mediana que ofrece mayor torque y empuje, permitiendo cargas útiles más pesadas y mayor estabilidad en condiciones de viento.",
      features: [
        "Motores de alta potencia DroView 2812 1050KV diseñados para cargas de hasta 2.5 kg",
        "Chasis rígido de fibra de carbono 3K T300 para estabilidad en entornos exigentes",
        "Hélices optimizadas de policarbonato de 8 pulgadas para un empuje equilibrado",
        "Configuración personalizable con cámaras térmicas opcionales"
      ],
      specs: [
        { label: "Peso Neto", value: "608g" },
        { label: "Distancia entre Ejes", value: "354mm" },
        { label: "Dimensiones", value: "321mm x 235mm x 50mm" },
        { label: "Velocidad Máxima", value: "160 KM/H" },
        { label: "Alcance Máximo", value: "20 km" },
        { label: "Carga Útil Nominal", value: "2.0 kg" },
        { label: "Carga Útil Máxima", value: "2.5 kg" },
        { label: "Peso Máx al Despegue", value: "4.2 kg" },
        { label: "Autonomía sin Carga", value: "29 min (8000mAh)" },
        { label: "Autonomía con Carga", value: "13 min (10000mAh, 3.5kg total)" },
        { label: "Controlador de Vuelo", value: "DroView BL F405" },
        { label: "ESC", value: "DroView 60A 4-in-1" },
        { label: "Motor", value: "DroView 2812 1050KV" },
        { label: "Hélice", value: "8040 PC" },
        { label: "Transmisión de Video", value: "DroView 5.8G 3W (opcional)" },
        { label: "Batería Recomendada", value: "6S 8000-10000mAh 10-50C XT60" }
      ],
      capabilities: [
        "Entregas de carga de precisión a media distancia",
        "Vigilancia táctica sostenida",
        "Seguridad industrial dirigida",
        "Despliegue modular de sensores"
      ]
    }
  },
  {
    id: "fpv-10",
    name: "MARK IV FPV 10\"",
    model: "10-Inch Heavy Payload FPV",
    category: "fpv",
    image: "/wp-content/uploads/2025/09/8.1-main-1024x795.webp",
    en: {
      description: "Heavy-duty 10-inch tactical FPV platform. Also available in X6 (six-axis) and X8 (coaxial eight-motor) heavy structures to enable maximum load carrying and range.",
      features: [
        "Industrial-grade DroView 3115 900KV motors for high carrying capacity",
        "Stiff carbon fiber nylon 10.5-inch propellers designed for heavy loads",
        "Available in high-power configurations: Standard Quad, X6 Six-Axis, and X8 Coaxial",
        "Perfect integration with specialized explosive release or camera mounts"
      ],
      specs: [
        { label: "Net Weight (Quad)", value: "793g" },
        { label: "Net Weight (X6)", value: "1750g" },
        { label: "Net Weight (X8)", value: "1580g" },
        { label: "Wheelbase (Quad)", value: "396mm" },
        { label: "Wheelbase (X6)", value: "484mm" },
        { label: "Wheelbase (X8)", value: "479mm" },
        { label: "Max Speed (Quad / X6)", value: "153 KM/H / 175 KM/H" },
        { label: "Max Range", value: "20 km" },
        { label: "Rated Payload (Quad / X6 / X8)", value: "3.0 kg / 5.0 kg / 4.5 kg" },
        { label: "Max Payload (Quad / X6 / X8)", value: "4.0 kg / 6.0 kg / 5.0 kg" },
        { label: "Max Take-off Weight (X8)", value: "8.0 kg" },
        { label: "No-load Flight Time", value: "28 min (6S 10000mAh)" },
        { label: "Loaded Flight Time (X6)", value: "10 min (6S 6000mAh * 2, 8.0kg total)" },
        { label: "ESC", value: "DroView 60A 4-in-1 (Quad/X8) / 80A Single (X6)" },
        { label: "Propeller", value: "1050 Carbon Fiber Nylon" },
        { label: "Recommended Battery", value: "6S 10000mAh 10-45C XT60" }
      ],
      capabilities: [
        "Heavy armor neutralization and strike operations",
        "Deep tactical penetration carrying specialized cargo",
        "Long range ISR in signal-contested environments",
        "Coaxial power redundancy for critical flights (X8)"
      ]
    },
    es: {
      description: "Plataforma FPV táctica de carga pesada de 10 pulgadas. Disponible también en estructuras reforzadas X6 (seis ejes) y X8 (ocho motores coaxiales) para máxima capacidad de carga y alcance.",
      features: [
        "Motores de grado industrial DroView 3115 900KV para alta capacidad de carga",
        "Hélices rígidas de nailon y fibra de carbono de 10.5 pulgadas para cargas pesadas",
        "Disponible en configuraciones de alta potencia: Quad estándar, X6 de Seis Ejes y X8 Coaxial",
        "Integración perfecta con sistemas de liberación de explosivos o cámaras especializadas"
      ],
      specs: [
        { label: "Peso Neto (Quad)", value: "793g" },
        { label: "Peso Neto (X6)", value: "1750g" },
        { label: "Peso Neto (X8)", value: "1580g" },
        { label: "Distancia entre Ejes (Quad)", value: "396mm" },
        { label: "Distancia entre Ejes (X6)", value: "484mm" },
        { label: "Distancia entre Ejes (X8)", value: "479mm" },
        { label: "Velocidad Máxima (Quad / X6)", value: "153 KM/H / 175 KM/H" },
        { label: "Alcance Máximo", value: "20 km" },
        { label: "Carga Útil Nominal (Quad / X6 / X8)", value: "3.0 kg / 5.0 kg / 4.5 kg" },
        { label: "Carga Útil Máxima (Quad / X6 / X8)", value: "4.0 kg / 6.0 kg / 5.0 kg" },
        { label: "Peso Máx al Despegue (X8)", value: "8.0 kg" },
        { label: "Autonomía sin Carga", value: "28 min (6S 10000mAh)" },
        { label: "Autonomía con Carga (X6)", value: "10 min (6S 6000mAh * 2, 8.0kg total)" },
        { label: "ESC", value: "DroView 60A 4-in-1 (Quad/X8) / 80A Individual (X6)" },
        { label: "Hélice", value: "1050 Nylon Fibra de Carbono" },
        { label: "Batería Recomendada", value: "6S 10000mAh 10-45C XT60" }
      ],
      capabilities: [
        "Operaciones de ataque y neutralización de blindados pesados",
        "Penetración táctica profunda con carga especializada",
        "Vigilancia e ISR de largo alcance en entornos hostiles",
        "Redundancia de potencia coaxial para vuelos críticos (X8)"
      ]
    }
  },
  {
    id: "fpv-15",
    name: "MARK IV FPV 15\"",
    model: "15-Inch Heavy Assault FPV",
    category: "fpv",
    image: "/catalogo/Plataformas FPV/fpv15 2.png",
    objectPosition: "object-bottom",
    en: {
      description: "Our largest tactical FPV platform, designed for heavy assault payloads and long-endurance flights. Employs high-power 8S battery architecture for maximum stability.",
      features: [
        "Ultra-torque DroView 4214 380KV motors for high-altitude lift",
        "Reinforced 15-inch glass fiber nylon props for maximum aerodynamic efficiency",
        "Large 3K T300 carbon fiber heavy frame with 647mm wheelbase",
        "Extended 8S battery configuration with support for dual packs"
      ],
      specs: [
        { label: "Net Weight", value: "2080g" },
        { label: "Wheelbase", value: "647mm" },
        { label: "Dimensions", value: "517mm x 517mm x 80mm" },
        { label: "Max Speed", value: "130 KM/H" },
        { label: "Max Range", value: "20 km" },
        { label: "Rated Payload", value: "7.0 kg" },
        { label: "Max Payload", value: "8.0 kg" },
        { label: "Max Take-off Weight", value: "13.0 kg" },
        { label: "No-load Flight Time", value: "42 min (8S 8000mAh * 2, 4.9kg total)" },
        { label: "Loaded Flight Time", value: "12 min (8S 16000mAh, 11.8kg total)" },
        { label: "Flight Controller", value: "DroView BL F405" },
        { label: "ESC", value: "DroView 80A Single ESC" },
        { label: "Motor", value: "DroView 4214 380KV" },
        { label: "Propeller", value: "1507 Glass Fiber Nylon" },
        { label: "Recommended Battery", value: "8S 8000mAh 10-50C XT60 * 2" }
      ],
      capabilities: [
        "Heavy payload tactical strike over long distances",
        "Long-endurance surveillance missions",
        "Strategic logistics and asset transport in contested zones",
        "Stable operation under severe wind conditions"
      ]
    },
    es: {
      description: "Nuestra plataforma FPV táctica más grande, diseñada para cargas de asalto pesado y vuelos de largo alcance. Utiliza una arquitectura de batería 8S de alta potencia para máxima estabilidad.",
      features: [
        "Motores de ultra-torque DroView 4214 380KV para sustentación a gran altitud",
        "Hélices reforzadas de nailon y fibra de vidrio de 15 pulgadas para máxima eficiencia aerodinámica",
        "Chasis pesado de fibra de carbono 3K T300 con distancia entre ejes de 647 mm",
        "Configuración extendida de batería 8S compatible con packs dobles"
      ],
      specs: [
        { label: "Peso Neto", value: "2080g" },
        { label: "Distancia entre Ejes", value: "647mm" },
        { label: "Dimensiones", value: "517mm x 517mm x 80mm" },
        { label: "Velocidad Máxima", value: "130 KM/H" },
        { label: "Alcance Máximo", value: "20 km" },
        { label: "Carga Útil Nominal", value: "7.0 kg" },
        { label: "Carga Útil Máxima", value: "8.0 kg" },
        { label: "Peso Máx al Despegue", value: "13.0 kg" },
        { label: "Autonomía sin Carga", value: "42 min (8S 8000mAh * 2, 4.9kg total)" },
        { label: "Autonomía con Carga", value: "12 min (8S 16000mAh, 11.8kg total)" },
        { label: "Controlador de Vuelo", value: "DroView BL F405" },
        { label: "ESC", value: "DroView 80A Individual" },
        { label: "Motor", value: "DroView 4214 380KV" },
        { label: "Hélice", value: "1507 Nailon Fibra de Vidrio" },
        { label: "Batería Recomendada", value: "8S 8000mAh 10-50C XT60 * 2" }
      ],
      capabilities: [
        "Ataques tácticos de carga pesada a largas distancias",
        "Misiones de vigilancia e ISR de larga duración",
        "Logística estratégica y transporte de activos en zonas hostiles",
        "Operación estable ante ráfagas severas de viento"
      ]
    }
  },
  {
    id: "vtol-t1",
    name: "AERIAL SENTRY 73",
    model: "VTOL Reconnaissance UAV",
    category: "vtol",
    image: "/catalogo/Sistemas UAV/as 73.jpg",
    en: {
      description: "Compact VTOL (Vertical Take-Off and Landing) drone designed for military reconnaissance, surveillance, and tactical operations. Fully modular structure allows rapid assembly and deployment in confined spaces without runways.",
      features: [
        "Vertical Take-Off and Landing (VTOL) capability bypasses runway requirements",
        "Compact modular structure makes transport and assembly extremely simple",
        "Constructed from high-density EPO/EPP material for collision resilience",
        "High-definition FPV video transmission (4K 60fps) for real-time intelligence"
      ],
      specs: [
        { label: "Total Weight", value: "1.0 kg" },
        { label: "Wingspan", value: "730 mm" },
        { label: "Material", value: "High-density EPP" },
        { label: "Max Speed", value: "120 km/h" },
        { label: "Max Range", value: "12 km" },
        { label: "Payload Capacity", value: "200 g" },
        { label: "Flight Endurance", value: "35 min" },
        { label: "Camera/Video", value: "FPV 4K 60fps" },
        { label: "Assembly Time", value: "< 2 minutes" }
      ],
      capabilities: [
        "Confined space tactical deployment",
        "Rapid target reconnaissance",
        "Real-time visual monitoring (ISR)",
        "Military training and training support"
      ]
    },
    es: {
      description: "Dron tipo VTOL (Despegue y Aterrizaje Vertical) compacto diseñado para reconocimiento militar, vigilancia y operaciones tácticas. Su estructura totalmente modular permite el ensamblaje rápido y despliegue en espacios reducidos sin pistas de aterrizaje.",
      features: [
        "Capacidad de despegue y aterrizaje vertical (VTOL) que elimina la necesidad de pistas",
        "Estructura modular compacta que facilita el transporte y montaje inmediato",
        "Construcción en EPP de alta densidad para máxima resistencia a impactos",
        "Transmisión de video FPV de alta definición (4K 60fps) para inteligencia en tiempo real"
      ],
      specs: [
        { label: "Peso Total", value: "1.0 kg" },
        { label: "Envergadura", value: "730 mm" },
        { label: "Material", value: "EPP de alta densidad" },
        { label: "Velocidad Máxima", value: "120 km/h" },
        { label: "Alcance Máximo", value: "12 km" },
        { label: "Carga Útil", value: "200 g" },
        { label: "Autonomía de Vuelo", value: "35 min" },
        { label: "Cámara / Video", value: "FPV 4K 60fps" },
        { label: "Tiempo de Ensamblaje", value: "< 2 minutos" }
      ],
      capabilities: [
        "Despliegue táctico en espacios confinados",
        "Reconocimiento rápido de objetivos",
        "Monitoreo visual en tiempo real (ISR)",
        "Entrenamiento militar y soporte operativo"
      ]
    }
  },
  {
    id: "uav-h1",
    name: "UAV H1 LONG RANGE",
    model: "Tactical Long-Range Fixed Wing",
    category: "fixed-wing",
    image: "/h1_long_range.jpg",
    gallery: [
      "/h1_long_range.jpg",
      "/catalogo/Sistemas UAV/DSC08542.JPG",
      "/catalogo/Sistemas UAV/DSC08545.jpg",
      "/catalogo/Sistemas UAV/DSC08527.JPG"
    ],
    en: {
      description: "High-performance fixed-wing tactical UAV engineered for persistent surveillance and border patrol. Features long-range stabilized zoom optics and optimized composite aerodynamics.",
      features: [
        "Fixed-wing design for maximum aerodynamic efficiency and range",
        "30x stabilized optical zoom camera for over-the-horizon intelligence",
        "Carbon fiber and fiberglass composite fuselage for lightweight rigidity",
        "Resilient communication link with telemetry range up to 20 km"
      ],
      specs: [
        { label: "Total Weight", value: "8.0 kg" },
        { label: "Material", value: "Glass fiber and 3K carbon fiber" },
        { label: "Max Speed", value: "100 km/h" },
        { label: "Max Range", value: "20 km" },
        { label: "Payload Capacity", value: "2.0 kg" },
        { label: "Flight Endurance", value: "60 min" },
        { label: "Camera/Video", value: "FPV 4K 60fps (30x Zoom)" },
        { label: "Stabilization", value: "Three-axis active gimbal" }
      ],
      capabilities: [
        "Persistent border patrol and control",
        "Long-range visual reconnaissance",
        "Strategic security surveillance of critical infrastructure",
        "Damage assessment and disaster monitoring"
      ]
    },
    es: {
      description: "UAV táctico de ala fija de alto rendimiento diseñado para patrullaje fronterizo y vigilancia persistente. Equipado con cámara de zoom óptico estabilizada de largo alcance y fuselaje aerodinámico de compuestos avanzados.",
      features: [
        "Diseño de ala fija para máxima eficiencia aerodinámica y alcance",
        "Cámara con zoom óptico estabilizado de 30x para inteligencia más allá del horizonte",
        "Fuselaje compuesto de fibra de vidrio y carbono 3K para rigidez ligera",
        "Enlace de comunicación de alta resiliencia con alcance de telemetría de hasta 20 km"
      ],
      specs: [
        { label: "Peso Total", value: "8.0 kg" },
        { label: "Material", value: "Fibra de vidrio y fibra de carbono 3K" },
        { label: "Velocidad Máxima", value: "100 km/h" },
        { label: "Alcance Máximo", value: "20 km" },
        { label: "Carga Útil", value: "2.0 kg" },
        { label: "Autonomía de Vuelo", value: "60 min" },
        { label: "Cámara / Video", value: "FPV 4K 60fps (Zoom 30x)" },
        { label: "Estabilización", value: "Gimbal activo de tres ejes" }
      ],
      capabilities: [
        "Patrullaje y control de fronteras persistente",
        "Reconocimiento visual de largo alcance",
        "Vigilancia de seguridad estratégica en infraestructura crítica",
        "Evaluación de daños y monitoreo de desastres"
      ]
    }
  },
  {
    id: "fiber-5",
    name: "FIBER OPTIC SPOOL 5 KM",
    model: "5km EW-Resilient Link",
    category: "fiber",
    image: "/wp-content/uploads/2025/09/15-o-cta-1024x795.webp",
    en: {
      description: "High-tensile optical fiber spool designed for short-range drone control. Fully eliminates radio frequency emissions, making the connected platform immune to RF jamming, spoofing, and detection.",
      features: [
        "100% immune to Radio Frequency (RF) jamming and EW interference",
        "Zero RF signature to prevent detection of the pilot or platform",
        "Integrated high-speed media converters for HD video feed",
        "Micro-diameter high-tensile single-mode fiber spool"
      ],
      specs: [
        { label: "Cable Length", value: "5 km" },
        { label: "Weight", value: "850 g" },
        { label: "Fiber Type", value: "Single-Mode G.657.A2 (bend-insensitive)" },
        { label: "Tensile Strength", value: ">150 N" },
        { label: "Data Interface", value: "Fiber Optic to Ethernet (integrated media converter)" },
        { label: "Latency", value: "<1 ms" },
        { label: "Bandwidth", value: "Up to 10 Gbps" },
        { label: "Compatibility", value: "MARK IV FPV 7\" / 8\" / 10\", AERIAL SENTRY 73" }
      ],
      capabilities: [
        "Operations in active EW jamming environments",
        "Underground, forest, or urban canyon tactical navigation",
        "Zero-emission covert reconnaissance missions"
      ]
    },
    es: {
      description: "Carrete de fibra óptica de alta resistencia diseñado para control de drones a corta distancia. Elimina por completo las emisiones de radiofrecuencia, haciendo que la plataforma conectada sea inmune a inhibiciones (jamming), suplantaciones (spoofing) y detección de señales.",
      features: [
        "100% inmune a interferencias de radiofrecuencia (RF) y guerra electrónica (EW)",
        "Firma de RF nula para evitar la localización del piloto o del dron",
        "Convertidores de medios integrados de alta velocidad para transmisión de video HD",
        "Carrete de fibra monomodo de micro-diámetro y alta resistencia a la tensión"
      ],
      specs: [
        { label: "Longitud de Cable", value: "5 km" },
        { label: "Peso", value: "850 g" },
        { label: "Tipo de Fibra", value: "Monomodo G.657.A2 (resistente a flexión)" },
        { label: "Resistencia Tensión", value: ">150 N" },
        { label: "Interfaz de Datos", value: "Fibra óptica a Ethernet (conversión integrada)" },
        { label: "Latencia", value: "<1 ms" },
        { label: "Ancho de Banda", value: "Hasta 10 Gbps" },
        { label: "Compatibilidad", value: "MARK IV FPV 7\" / 8\" / 10\", AERIAL SENTRY 73" }
      ],
      capabilities: [
        "Operaciones en entornos con jamming activo de EW",
        "Navegación táctica en bosques, subterráneos o cañones urbanos",
        "Misiones de reconocimiento encubierto sin emisiones electromagnéticas"
      ]
    }
  },
  {
    id: "fiber-10",
    name: "FIBER OPTIC SPOOL 10 KM",
    model: "10km EW-Resilient Link",
    category: "fiber",
    image: "/wp-content/uploads/2025/09/10-o-cta-1024x795.webp",
    en: {
      description: "Medium-range fiber optic spool designed for deep-penetration tactical operations. Provides reliable control signals and telemetry without radio frequency links.",
      features: [
        "Completely protected against tactical jamming and radio interception",
        "Provides ultra-high bandwidth for HD cameras and stabilization systems",
        "Compact design optimized to fit medium FPV drone compartments",
        "Tested under extreme operational conditions"
      ],
      specs: [
        { label: "Cable Length", value: "10 km" },
        { label: "Weight", value: "1400 g (1.4 kg)" },
        { label: "Fiber Type", value: "Single-Mode G.657.A2 (bend-insensitive)" },
        { label: "Tensile Strength", value: ">150 N" },
        { label: "Data Interface", value: "Fiber Optic to Ethernet (integrated media converter)" },
        { label: "Latency", value: "<1 ms" },
        { label: "Bandwidth", value: "Up to 10 Gbps" },
        { label: "Compatibility", value: "MARK IV FPV 8\" / 10\" / 15\"" }
      ],
      capabilities: [
        "Medium-range deep-strike coordination in EW zones",
        "Stable video return from trench networks or obstructed paths",
        "Secured telemetry over high-priority targets"
      ]
    },
    es: {
      description: "Carrete de fibra óptica de medio alcance diseñado para operaciones tácticas de penetración profunda. Proporciona señales de control y telemetría confiables sin usar enlaces de radiofrecuencia.",
      features: [
        "Completamente protegido contra bloqueadores tácticos e interceptación de radio",
        "Proporciona un ancho de banda ultra alto para cámaras HD y sistemas de estabilización",
        "Diseño compacto optimizado para encajar en compartimentos de drones FPV medianos",
        "Probado bajo condiciones operativas extremas"
      ],
      specs: [
        { label: "Longitud de Cable", value: "10 km" },
        { label: "Peso", value: "1400 g (1.4 kg)" },
        { label: "Tipo de Fibra", value: "Monomodo G.657.A2 (resistente a flexión)" },
        { label: "Resistencia Tensión", value: ">150 N" },
        { label: "Interfaz de Datos", value: "Fibra óptica a Ethernet (conversión integrada)" },
        { label: "Latencia", value: "<1 ms" },
        { label: "Ancho de Banda", value: "Hasta 10 Gbps" },
        { label: "Compatibilidad", value: "MARK IV FPV 8\" / 10\" / 15\"" }
      ],
      capabilities: [
        "Coordinación de ataques profundos en zonas con bloqueo de EW",
        "Retorno estable de video desde redes de trincheras o caminos obstruidos",
        "Telemetría segura sobre objetivos de alta prioridad"
      ]
    }
  },
  {
    id: "fiber-15",
    name: "FIBER OPTIC SPOOL 15 KM",
    model: "15km EW-Resilient Link",
    category: "fiber",
    image: "/wp-content/uploads/2025/09/13-o-cta-1024x795.webp",
    en: {
      description: "Long-range tactical optical spool. Features reinforced coating to withstand high deployment speeds and abrasive environments while maintaining a secure, zero-emission data connection.",
      features: [
        "Reinforced tensile core to support deployment speeds up to 120 km/h",
        "15 km operational deployment length for over-the-horizon secure strikes",
        "Completely immune to heavy multi-frequency electronic warfare barriers",
        "Includes rugged military connectors for rapid setup"
      ],
      specs: [
        { label: "Cable Length", value: "15 km" },
        { label: "Weight", value: "2100 g (2.1 kg)" },
        { label: "Fiber Type", value: "Single-Mode G.657.A2 with reinforced outer layer" },
        { label: "Tensile Strength", value: ">180 N" },
        { label: "Data Interface", value: "Fiber Optic to Ethernet (integrated media converter)" },
        { label: "Latency", value: "<1.5 ms" },
        { label: "Bandwidth", value: "Up to 10 Gbps" },
        { label: "Compatibility", value: "MARK IV FPV 10\" / 15\"" }
      ],
      capabilities: [
        "Over-the-horizon precision strikes",
        "Persistent surveillance behind electronic countermeasures",
        "Strategic defense of borders and critical naval points"
      ]
    },
    es: {
      description: "Carrete óptico táctico de largo alcance. Cuenta con un revestimiento reforzado para soportar velocidades de despliegue elevadas y entornos abrasivos, manteniendo una conexión de datos segura y libre de emisiones.",
      features: [
        "Núcleo de tensión reforzado para soportar velocidades de despliegue de hasta 120 km/h",
        "Longitud de despliegue operativo de 15 km para ataques seguros más allá del horizonte",
        "Completamente inmune a barreras pesadas de guerra electrónica multifrecuencia",
        "Incluye conectores robustos de grado militar para configuración rápida"
      ],
      specs: [
        { label: "Longitud de Cable", value: "15 km" },
        { label: "Peso", value: "2100 g (2.1 kg)" },
        { label: "Tipo de Fibra", value: "Monomodo G.657.A2 con capa exterior reforzada" },
        { label: "Resistencia Tensión", value: ">180 N" },
        { label: "Interfaz de Datos", value: "Fibra óptica a Ethernet (conversión integrada)" },
        { label: "Latencia", value: "<1.5 ms" },
        { label: "Ancho de Banda", value: "Hasta 10 Gbps" },
        { label: "Compatibilidad", value: "MARK IV FPV 10\" / 15\"" }
      ],
      capabilities: [
        "Ataques de precisión más allá del horizonte",
        "Vigilancia persistente detrás de contramedidas electrónicas enemigas",
        "Defensa estratégica de fronteras y puntos navales críticos"
      ]
    }
  },
  {
    id: "netgun-r1",
    name: "NETGUN R1 SKYCAPTOR",
    model: "Tactical Net Launcher",
    category: "netgun",
    image: "/catalogo/Herramientas tacticas/skyc.png",
    en: {
      description: "Portable non-lethal drone capture device utilizing high-speed CO2 gas canisters. Deployed to neutralize small-to-medium unauthorized drones by physical entanglement in flight.",
      features: [
        "Portable and completely manual operation, no licenses required",
        "Standard CO2 10-12g cartridge system for fast, reliable propulsion",
        "Fully reusable high-strength capturing nets",
        "Comes in a rugged transport case with complete tactical accessories"
      ],
      specs: [
        { label: "Total Weight", value: "1.0 kg" },
        { label: "Dimensions", value: "34 x 5 cm" },
        { label: "Effective Range", value: "Up to 20 meters" },
        { label: "Optimal Capture Distance", value: "9 meters approx." },
        { label: "Net Coverage Area", value: "4 x 3 m (12 m²)" },
        { label: "Muzzle Velocity", value: "7 m/s" },
        { label: "Release Force", value: "200 Newtons" },
        { label: "Reload Time", value: "30 seconds" },
        { label: "Included Accessories", value: "Rugged carrying suitcase, 10x CO2 cartridges, 3x reusable mesh nozzles, manual grip activation" }
      ],
      capabilities: [
        "Perimeter security protection",
        "Critical infrastructure safeguarding",
        "VIP event surveillance and protection",
        "Non-destructive drone neutralisation"
      ],
      deployment: [
        "Industrial facilities protection",
        "Prisons and security checkpoints",
        "Airport buffer zone defense",
        "Law enforcement containment operations"
      ]
    },
    es: {
      description: "Dispositivo portátil de captura de drones no letal que utiliza cartuchos de CO₂ a alta velocidad. Desplegado para neutralizar drones no autorizados pequeños y medianos mediante enredo físico en vuelo.",
      features: [
        "Operación portátil y completamente manual, no requiere licencias",
        "Sistema de cartucho estándar de CO₂ de 10-12g para propulsión rápida y confiable",
        "Redes de captura de alta resistencia totalmente reutilizables",
        "Se entrega en maleta de transporte robusta con accesorios tácticos completos"
      ],
      specs: [
        { label: "Peso Total", value: "1.0 kg" },
        { label: "Dimensiones", value: "34 x 5 cm" },
        { label: "Alcance Efectivo", value: "Hasta 20 metros" },
        { label: "Distancia de Uso Óptima", value: "9 metros aprox." },
        { label: "Área de Cobertura Red", value: "4 x 3 m (12 m²)" },
        { label: "Velocidad de Disparo", value: "7 m/s" },
        { label: "Fuerza de Liberación", value: "200 Newtons" },
        { label: "Tiempo de Recarga", value: "30 segundos" },
        { label: "Accesorios Incluidos", value: "Maleta de transporte rígida, 10 cartuchos de CO2 desechables, 3 boquillas con malla reutilizable, mango para activación manual" }
      ],
      capabilities: [
        "Protección de perímetros de seguridad",
        "Resguardo de infraestructuras críticas",
        "Monitoreo y protección de eventos masivos",
        "Neutralización de drones no destructiva"
      ],
      deployment: [
        "Protección de instalaciones industriales",
        "Prisiones y puntos de control de seguridad",
        "Defensa de zonas de exclusión en aeropuertos",
        "Operaciones de contención policial"
      ]
    }
  },
  {
    id: "lib-mi1",
    name: "LIB MI1",
    model: "Commercial Drone Release System",
    category: "release",
    image: "/catalogo/Herramientas tacticas/herratac - copia.jpeg",
    en: {
      description: "High-precision explosive release system designed to integrate seamlessly into commercial drone platforms. Allows safe carrying and remote dropping of tactical loads.",
      features: [
        "Long-range LoRa wireless communication link (independent from drone system)",
        "Ultra-lightweight design maximizes drone battery life",
        "High reliability mechanical release hook",
        "Easy integration to DJI and other commercial quadcopters"
      ],
      specs: [
        { label: "Control Range", value: "Up to 5 km (LoRa)" },
        { label: "Weight", value: "120 g" },
        { label: "Max Speed (on drone)", value: "70 km/h" },
        { label: "Payload Support", value: "Up to 350 g (defensive or fragmentation grenade)" },
        { label: "Battery Endurance", value: "35 min (active monitoring)" },
        { label: "Communication", value: "LoRa 915 MHz" }
      ],
      capabilities: [
        "Precision tactical dropping of defense devices",
        "Remote cargo release in dangerous areas",
        "Infiltration and sabotage counter-measures"
      ]
    },
    es: {
      description: "Sistema de liberación de explosivos de alta precisión diseñado para integrarse perfectamente con plataformas de drones comerciales. Permite el transporte seguro y caída remota de cargas tácticas.",
      features: [
        "Enlace de comunicación inalámbrico LoRa de largo alcance (independiente del sistema del dron)",
        "Diseño ultra-ligero que maximiza la autonomía de la batería del dron",
        "Gancho de liberación mecánica de alta confiabilidad",
        "Fácil integración en DJI y otros cuadricópteros comerciales"
      ],
      specs: [
        { label: "Alcance de Control", value: "Hasta 5 km (LoRa)" },
        { label: "Peso", value: "120 g" },
        { label: "Velocidad Máxima (en vuelo)", value: "70 km/h" },
        { label: "Carga Útil Soportada", value: "Hasta 350 g (granada defensiva o de fragmentación)" },
        { label: "Autonomía de Batería", value: "35 min (monitoreo activo)" },
        { label: "Comunicación", value: "LoRa 915 MHz" }
      ],
      capabilities: [
        "Caída táctica de precisión de dispositivos defensivos",
        "Liberación remota de carga en áreas de alto peligro",
        "Contramedidas tácticas de infiltración y sabotaje"
      ]
    }
  },
  {
    id: "ew-mini2",
    name: "1MINI2 (60W) Handheld Drone Jammer",
    model: "Handheld Tactical Jammer",
    category: "ew",
    image: "/catalogo/Herramientas tacticas/jmr.png",
    en: {
      description: "Compact handheld drone jammer providing 360-degree omnidirectional coverage up to 200 meters. Extremely portable and lightweight for rapid active protection.",
      features: [
        "Provides 360° omnidirectional jamming protection",
        "Dual-band interference: 700-1050MHz (30W) and 2400-2500MHz (30W)",
        "Ultra-lightweight portable handheld design (2 kg)",
        "Interferes with DJI, Autel, FPV, and general civilian/military drone models"
      ],
      specs: [
        { label: "Total Power Output", value: "60W" },
        { label: "Effective Range", value: "≤ 200 meters" },
        { label: "Interference Type", value: "DJI, Autel, FPV, civilian/military drones" },
        { label: "Coverage Angle", value: "360° Omnidirectional" },
        { label: "Frequencies", value: "700-1050MHz (30W), 2400-2500MHz (30W)" },
        { label: "Power Supply", value: "24V 3.2A" },
        { label: "Dimensions & Weight", value: "20 x 8.5 x 4.2 cm / 2.0 kg" }
      ],
      capabilities: [
        "Omnidirectional drone suppression",
        "Personal defense in contested areas",
        "Rapid deployment security checkpoints"
      ]
    },
    es: {
      description: "Inhibidor de drones portátil y compacto que proporciona cobertura omnidireccional de 360 grados hasta 200 metros. Extremadamente ligero para protección táctica inmediata.",
      features: [
        "Proporciona protección de interferencia omnidireccional de 360°",
        "Interferencia de doble banda: 700-1050MHz (30W) y 2400-2500MHz (30W)",
        "Diseño portátil de mano ultra ligero (2 kg)",
        "Interfiere con modelos de drones DJI, Autel, FPV y drones civiles/militares"
      ],
      specs: [
        { label: "Potencia de Salida", value: "60W" },
        { label: "Alcance Efectivo", value: "≤ 200 metros" },
        { label: "Tipo de Interferencia", value: "DJI, Autel, FPV, drones civiles/militares" },
        { label: "Ángulo de Cobertura", value: "360° Omnidireccional" },
        { label: "Frecuencias", value: "700-1050MHz (30W), 2400-2500MHz (30W)" },
        { label: "Alimentación", value: "24V 3.2A" },
        { label: "Dimensiones y Peso", value: "20 x 8.5 x 4.2 cm / 2.0 kg" }
      ],
      capabilities: [
        "Supresión de drones omnidireccional",
        "Defensa personal en áreas en disputa",
        "Despliegue rápido en puntos de control de seguridad"
      ]
    }
  },
  {
    id: "ew-dk5",
    name: "DK-5 (250W) Car Drone Jammer System",
    model: "Vehicular Tactical Suppression System",
    category: "ew",
    image: "/extracted/page_2_img_0.png",
    en: {
      description: "High-power vehicle-mounted suppression system with 250W output. Specifically engineered for convoys, providing remote control and video feed block up to 1000m.",
      features: [
        "High-performance vehicular multi-band drone suppression",
        "Total 250W output across 5 critical frequency bands (50W per band)",
        "Suppresses DJI, Autel, FPV, and civilian/military drones",
        "Includes rugged vehicle antennas and DC power integration"
      ],
      specs: [
        { label: "Total Power Output", value: "250W (5x 50W bands)" },
        { label: "Effective Range", value: "≤ 1000 meters" },
        { label: "Interference Type", value: "DJI, Autel, FPV, civilian/military drones" },
        { label: "Frequencies", value: "400-500MHz, 500-650MHz, 650-800MHz, 800-950MHz, 950-1100MHz" },
        { label: "Power Supply", value: "DC12V - DC24V vehicular input" },
        { label: "Host Dimensions & Weight", value: "50 x 35 cm / 10.0 kg" }
      ],
      capabilities: [
        "Mobile convoy electronic shield",
        "High-power drone signal interception",
        "Multi-band tactical suppression"
      ]
    },
    es: {
      description: "Sistema de supresión de alta potencia montado en vehículos con salida de 250W. Específicamente diseñado para convoyes, bloqueando control remoto y video hasta 1000m.",
      features: [
        "Supresión de drones multibanda vehicular de alto rendimiento",
        "Potencia total de 250W repartida en 5 bandas críticas (50W por banda)",
        "Suprime drones DJI, Autel, FPV y drones civiles/militares",
        "Incluye antenas vehiculares robustas e integración de alimentación de CC"
      ],
      specs: [
        { label: "Potencia de Salida", value: "250W (5 bandas de 50W)" },
        { label: "Alcance Efectivo", value: "≤ 1000 metros" },
        { label: "Tipo de Interferencia", value: "DJI, Autel, FPV, drones civiles/militares" },
        { label: "Frecuencias", value: "400-500MHz, 500-650MHz, 650-800MHz, 800-950MHz, 950-1100MHz" },
        { label: "Alimentación", value: "DC12V - DC24V entrada vehicular" },
        { label: "Dimensiones y Peso", value: "50 x 35 cm / 10.0 kg" }
      ],
      capabilities: [
        "Escudo electrónico para convoyes móviles",
        "Intercepción de señales de drones a alta potencia",
        "Supresión táctica multibanda"
      ]
    }
  },
  {
    id: "ew-mini6",
    name: "7MINI-6 (300W) Car Drone Jammer System",
    model: "Advanced Vehicular Jammer System",
    category: "ew",
    image: "/extracted/page_7_img_0.png",
    en: {
      description: "Next-generation vehicular drone jammer with 6 frequency bands and 300W total output. Equipped with magnetic suction cups for rapid installation on vehicle roofs.",
      features: [
        "300W high-power output (6 bands of 50W each)",
        "Magnetic suction mounting for quick security vehicle installation",
        "Covers key bands: GPS L1, 2.4GHz, 5.8GHz, and lower control frequencies",
        "Rugged, shockproof build suitable for operations in rough terrains"
      ],
      specs: [
        { label: "Total Power Output", value: "300W (6x 50W bands)" },
        { label: "Effective Range", value: "≤ 1000 meters" },
        { label: "Antenna Spares", value: "6x Omnidirectional high-gain antennas" },
        { label: "Frequencies", value: "650-800MHz, 800-950MHz, 950-1100MHz, 1550-1620MHz, 2400-2500MHz, 5725-5875MHz" },
        { label: "Power Supply", value: "AC220V / DC12V - DC24V" },
        { label: "Dimensions & Weight", value: "35 x 22 x 12 cm / 30.0 kg" }
      ],
      capabilities: [
        "Tactical vehicle defense bubble",
        "Convoy protective escorts",
        "High-density signal interception"
      ]
    },
    es: {
      description: "Inhibidor de drones vehicular de última generación con 6 bandas de frecuencia y 300W de potencia total. Equipado con ventosas magnéticas para una instalación rápida en techos de vehículos.",
      features: [
        "Potencia de salida alta de 300W (6 bandas de 50W cada una)",
        "Montaje por succión magnética para instalación inmediata en vehículos de seguridad",
        "Cubre bandas clave: GPS L1, 2.4GHz, 5.8GHz y frecuencias inferiores de control",
        "Construcción robusta y a prueba de golpes para operaciones en terrenos difíciles"
      ],
      specs: [
        { label: "Potencia de Salida", value: "300W (6 bandas de 50W)" },
        { label: "Alcance Efectivo", value: "≤ 1000 metros" },
        { label: "Antenas", value: "6 antenas omnidireccionales de alta ganancia" },
        { label: "Frecuencias", value: "650-800MHz, 800-950MHz, 950-1100MHz, 1550-1620MHz, 2400-2500MHz, 5725-5875MHz" },
        { label: "Alimentación", value: "AC220V / DC12V - DC24V" },
        { label: "Dimensiones y Peso", value: "35 x 22 x 12 cm / 30.0 kg" }
      ],
      capabilities: [
        "Burbuja de defensa vehicular táctica",
        "Escoltas de protección de convoyes",
        "Intercepción de señales de alta densidad"
      ]
    }
  },
  {
    id: "ew-gt6",
    name: "GT-6 Silencer Pistol-Type Drone Jammer",
    model: "Pistol-Type Directional Drone Jammer",
    category: "ew",
    image: "/extracted/page_19_img_0.png",
    en: {
      description: "Ergonomic pistol-style directional jammer with integrated sighting scope. Designed for quick targeting and neutralization of unauthorized civilian/military drones.",
      features: [
        "Tactical pistol-style lightweight design (4.5 kg)",
        "6-band directional transmission for high precision jamming",
        "Integrated sighting scope for accurate optical tracking",
        "Directional signal transmission prevents interference behind the operator"
      ],
      specs: [
        { label: "Total Power Output", value: "120W (6x 20W bands)" },
        { label: "Effective Range", value: "≤ 1.0 km (Directional)" },
        { label: "Included Sights", value: "Optical Sighting Telescope" },
        { label: "Frequencies", value: "400-500MHz, 1100-1280MHz, 1550-1620MHz, 2400-2500MHz, 5150-5350MHz, 5725-5850MHz" },
        { label: "Power Supply", value: "AC220V / DC24V - DC30V" },
        { label: "Dimensions & Weight", value: "65 x 37 x 10 cm / 4.5 kg" }
      ],
      capabilities: [
        "Targeted directional suppression",
        "Lightweight infantry operation",
        "Covert perimeter air space defense"
      ]
    },
    es: {
      description: "Inhibidor direccional tipo pistola ergonómico con mira telescópica integrada. Diseñado para apuntado rápido y neutralización de drones civiles y militares no autorizados.",
      features: [
        "Diseño táctico ligero tipo pistola (4.5 kg)",
        "Transmisión direccional de 6 bandas para interferencia de alta precisión",
        "Telescopio de mira integrado para rastreo óptico preciso",
        "La transmisión de señal direccional evita interferencias detrás del operador"
      ],
      specs: [
        { label: "Potencia de Salida", value: "120W (6 bandas de 20W)" },
        { label: "Alcance Efectivo", value: "≤ 1.0 km (Direccional)" },
        { label: "Mira Incluida", value: "Telescopio de mira óptica" },
        { label: "Frecuencias", value: "400-500MHz, 1100-1280MHz, 1550-1620MHz, 2400-2500MHz, 5150-5350MHz, 5725-5850MHz" },
        { label: "Alimentación", value: "AC220V / DC24V - DC30V" },
        { label: "Dimensiones y Peso", value: "65 x 37 x 10 cm / 4.5 kg" }
      ],
      capabilities: [
        "Supresión direccional de precisión",
        "Operación de infantería ligera",
        "Defensa del espacio aéreo perimetral encubierta"
      ]
    }
  },
  {
    id: "aerial-sentry-120",
    name: "AERIAL SENTRY 120",
    model: "Hee Wing T2 Cruza Tactical Fixed Wing FPV PNP",
    category: "vtol",
    image: "/aerial_sentry_120.png",
    en: {
      description: "The Aerial Sentry 120 offers an exceptional tactical flying experience. With its impressive 1200 mm wingspan and EPP twin-motor wing, it features a fully modular design that enables effortless assembly and disassembly for rapid deployment. Internally, it provides generous space for advanced electronics, quick-release connectors, and tail-boom pins for operational personalization.",
      features: [
        "Fully modular design for toolless, rapid assembly and disassembly",
        "Quick-release mobile rudder (easily removable with a single button press)",
        "Quick-release horizontal stabilizer (plano de profundidad) and tail boom connectors",
        "Twin-motor layout with double main wingspan spars for high aerodynamic structural integrity",
        "Specially designed electronics bays in both the fuselage and main wings",
        "Detachable nose with active fan mounts for video transmitter (VTX) cooling",
        "Integrated landing gear supports and capability for float mount upgrades"
      ],
      specs: [
        { label: "Wingspan (Envergadura)", value: "1200 mm" },
        { label: "Length (Longitud)", value: "1090 mm" },
        { label: "Motors", value: "2x DroView/Heewing 2216 Brushless" },
        { label: "ESCs", value: "2x 6S 25A BLS" },
        { label: "Propellers", value: "8-Inch high-efficiency props" },
        { label: "Servos", value: "4x Heewing 041S-MG metal gear digital servos" },
        { label: "Material", value: "High-grade EPP / Polypropylene (polipropileno)" },
        { label: "Recommended Takeoff Weight", value: "1.5 kg to 2.5 kg" },
        { label: "Recommended Battery", value: "LiPo 6S 2000mAh - 20,000mAh" },
        { label: "Control Channels Required", value: "Minimum 4 channels (6+ recommended for flaps)" }
      ],
      capabilities: [
        "Long-range persistent tactical ISR missions",
        "Tool-free rapid deployment behind lines",
        "Stable FPV flights in high-altitude environments",
        "Over-water operations (with optional float mounts)"
      ],
      operationalProfile: {
        endurance: "Up to 80 minutes (with 6S 20,000mAh LiPo/Li-Ion)",
        payload: "Up to 1.0 kg (optics, release systems, sensors)",
        range: "Up to 30 km telemetry line-of-sight",
        propulsion: "Twin-engine layout with differential thrust capabilities"
      }
    },
    es: {
      description: "El Aerial Sentry 120 ofrece una experiencia de vuelo táctico excepcional. Con su impresionante envergadura de 1200 mm y su ala bimotor de EPP, cuenta con un diseño totalmente modular que facilita el montaje y desmontaje sin herramientas para un despliegue rápido. En su interior, ofrece un generoso espacio para electrónica avanzada, conectores rápidos y pasadores integrados en el tubo de cola para personalización operativa.",
      features: [
        "Diseño completamente modular para montaje y desmontaje rápido sin herramientas",
        "Timón móvil de liberación rápida (fácilmente desmontable presionando un solo botón)",
        "Estabilizador horizontal (plano de profundidad) y conectores de tubo de cola de liberación rápida",
        "Configuración bimotor con larguero principal doble para una alta integridad estructural",
        "Bahías de electrónica diseñadas a medida en fuselaje y alas principales",
        "Frontal extraíble con soportes para ventilador para enfriamiento activo del VTX",
        "Soportes integrados para tren de aterrizaje y compatibilidad con flotadores de agua"
      ],
      specs: [
        { label: "Envergadura", value: "1200 mm" },
        { label: "Longitud", value: "1090 mm" },
        { label: "Motores", value: "2x DroView/Heewing 2216 Brushless" },
        { label: "ESCs", value: "2x 6S 25A BLS" },
        { label: "Hélices", value: "Hélices de alta eficiencia de 8 pulgadas" },
        { label: "Servos", value: "4x Servos de engranaje metálico Heewing 041S-MG" },
        { label: "Material", value: "EPP de alta densidad / Polipropileno" },
        { label: "Peso al Despegue Recomendado", value: "1.5 kg a 2.5 kg" },
        { label: "Batería Recomendada", value: "LiPo 6S 2000mAh - 20,000mAh" },
        { label: "Canales de Control Requeridos", value: "Mínimo 4 canales (6+ recomendado para flaps)" }
      ],
      capabilities: [
        "Misiones ISR tácticas persistentes de largo alcance",
        "Despliegue rápido sin herramientas detrás de líneas",
        "Vuelos FPV estables en entornos de gran altitud",
        "Operaciones sobre el agua (con flotadores opcionales)"
      ],
      operationalProfile: {
        endurance: "Hasta 80 minutos (con LiPo/Li-Ion 6S 20,000mAh)",
        payload: "Hasta 1.0 kg (ópticas, sistemas de liberación, sensores)",
        range: "Hasta 30 km de alcance de telemetría de línea de visión",
        propulsion: "Configuración de doble motor con capacidades de empuje diferencial"
      }
    }
  }
];

export const flagshipVTOL = products.find(p => p.id === "aerial-sentry-120")!;
