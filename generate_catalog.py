import os
import re

# Directory definitions
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATE_PATH = os.path.join(BASE_DIR, "taf-ua.com", "en", "products", "babka-en", "index.html")

# Product Data Definitions
PRODUCTS = {
    "fpv-7": {
        "title": {
            "en": "UAV KOLIBRI 7″ - FPV Carrier Drone",
            "es": "UAV KOLIBRI 7″ - Dron FPV de Carga"
        },
        "description": {
            "en": "High-efficiency tactical FPV drone with a 7-inch frame, featuring flexible and stable flight performance, capable of carrying payloads up to 2.3 kg over a distance of 20 km.",
            "es": "Dron táctico FPV de alta eficiencia con marco de 7 pulgadas. Cuenta con un rendimiento de vuelo flexible y estable, capaz de transportar cargas de hasta 2.3 kg a una distancia de 20 km."
        },
        "image": "/wp-content/uploads/2025/09/7_main-cta.webp",
        "specs": {
            "en": [
                ("Combat Radius", "20 km"),
                ("Flight Duration", "29 min (no load) / 14 min (1.5 kg load)"),
                ("Recommended Battery", "6S 8000 - 10000 mAh (XT60 Plug)"),
                ("Rated Payload", "1.5 kg"),
                ("Maximum Payload", "2.3 kg"),
                ("Maximum Speed", "160 km/h"),
                ("Motor", "DroView 2807 1350KV"),
                ("Propeller", "7040 (PC)"),
                ("Flight Controller", "DroView BL F405"),
                ("ESC", "DroView 60A 4-in-1"),
                ("Frame Material", "3K T300 carbon fiber"),
                ("Dimensions", "276mm x 242mm x 45mm")
            ],
            "es": [
                ("Radio de Combate", "20 km"),
                ("Tiempo de Vuelo", "29 min (sin carga) / 14 min (carga de 1.5 kg)"),
                ("Batería Recomendada", "6S 8000 - 10000 mAh (Conector XT60)"),
                ("Carga Nominal", "1.5 kg"),
                ("Carga Máxima", "2.3 kg"),
                ("Velocidad Máxima", "160 km/h"),
                ("Motor", "DroView 2807 1350KV"),
                ("Hélice", "7040 (PC)"),
                ("Controlador de Vuelo", "DroView BL F405"),
                ("ESC", "DroView 60A 4 en 1"),
                ("Material del Marco", "Fibra de carbono 3K T300"),
                ("Dimensiones", "276mm x 242mm x 45mm")
            ]
        }
    },
    "fpv-8": {
        "title": {
            "en": "UAV KOLIBRI 8″ - FPV Carrier Drone",
            "es": "UAV KOLIBRI 8″ - Dron FPV de Carga"
        },
        "description": {
            "en": "Tactical FPV carrier drone with an 8-inch frame, optimized for carrying payloads up to 2.5 kg using high-efficiency 2812 motors over 20 km.",
            "es": "Dron táctico FPV con marco de 8 pulgadas, optimizado para transportar cargas de hasta 2.5 kg mediante motores 2812 de alta eficiencia a lo largo de 20 km."
        },
        "image": "/wp-content/uploads/2025/09/8-cta.webp",
        "specs": {
            "en": [
                ("Combat Radius", "20 km"),
                ("Flight Duration", "29 min (no load) / 13 min (2.0 kg load)"),
                ("Recommended Battery", "6S 8000 - 10000 mAh (XT60 Plug)"),
                ("Rated Payload", "2.0 kg"),
                ("Maximum Payload", "2.5 kg"),
                ("Maximum Speed", "160 km/h"),
                ("Motor", "DroView 2812 1050KV"),
                ("Propeller", "8040 (PC)"),
                ("Flight Controller", "DroView BL F405"),
                ("ESC", "DroView 60A 4-in-1"),
                ("Frame Material", "3K T300 carbon fiber"),
                ("Dimensions", "321mm x 235mm x 50mm")
            ],
            "es": [
                ("Radio de Combate", "20 km"),
                ("Tiempo de Vuelo", "29 min (sin carga) / 13 min (carga de 2.0 kg)"),
                ("Batería Recomendada", "6S 8000 - 10000 mAh (Conector XT60)"),
                ("Carga Nominal", "2.0 kg"),
                ("Carga Máxima", "2.5 kg"),
                ("Velocidad Máxima", "160 km/h"),
                ("Motor", "DroView 2812 1050KV"),
                ("Hélice", "8040 (PC)"),
                ("Controlador de Vuelo", "DroView BL F405"),
                ("ESC", "DroView 60A 4 en 1"),
                ("Material del Marco", "Fibra de carbono 3K T300"),
                ("Dimensiones", "321mm x 235mm x 50mm")
            ]
        }
    },
    "fpv-15": {
        "title": {
            "en": "UAV KOLIBRI 15″ - Heavy FPV Carrier Drone",
            "es": "UAV KOLIBRI 15″ - Dron FPV de Carga Pesada"
        },
        "description": {
            "en": "Heavy-duty tactical FPV drone with a 15-inch frame, designed for maximum load capacity up to 8.0 kg and extended flight duration up to 42 minutes.",
            "es": "Dron táctico FPV de alta resistencia con marco de 15 pulgadas, diseñado para una capacidad máxima de carga de hasta 8.0 kg y una autonomía de vuelo extendida de hasta 42 minutos."
        },
        "image": "/wp-content/uploads/2025/09/13-o-cta-1024x795.webp",
        "specs": {
            "en": [
                ("Combat Radius", "20 km"),
                ("Flight Duration", "42 min (no load) / 12 min (7.0 kg load)"),
                ("Recommended Battery", "8S 8000 - 16000 mAh (XT60 Plug * 2)"),
                ("Rated Payload", "7.0 kg"),
                ("Maximum Payload", "8.0 kg"),
                ("Maximum Speed", "130 km/h"),
                ("Motor", "DroView 4214 380KV"),
                ("Propeller", "1507 (glass fiber nylon)"),
                ("Flight Controller", "DroView BL F405"),
                ("ESC", "DroView 80A single ESC"),
                ("Frame Material", "3K T300 carbon fiber"),
                ("Dimensions", "517mm x 517mm x 80mm")
            ],
            "es": [
                ("Radio de Combate", "20 km"),
                ("Tiempo de Vuelo", "42 min (sin carga) / 12 min (carga de 7.0 kg)"),
                ("Batería Recomendada", "8S 8000 - 16000 mAh (Conector XT60 * 2)"),
                ("Carga Nominal", "7.0 kg"),
                ("Carga Máxima", "8.0 kg"),
                ("Velocidad Máxima", "130 km/h"),
                ("Motor", "DroView 4214 380KV"),
                ("Hélice", "1507 (nylon y fibra de vidrio)"),
                ("Controlador de Vuelo", "DroView BL F405"),
                ("ESC", "DroView 80A single ESC"),
                ("Material del Marco", "Fibra de carbono 3K T300"),
                ("Dimensiones", "517mm x 517mm x 80mm")
            ]
        }
    },
    "t1-ranger": {
        "title": {
            "en": "VTOL T1 RANGER - Reconnaissance UAV",
            "es": "VTOL T1 RANGER - UAV de Reconocimiento"
        },
        "description": {
            "en": "Tactical VTOL reconnaissance drone designed for surveillance and monitoring. Its modular, compact design enables rapid assembly and launch from tight spaces without requiring runways.",
            "es": "Dron de reconocimiento táctico VTOL diseñado para vigilancia y monitoreo. Su diseño compacto y modular permite un rápido ensamblaje y lanzamiento en espacios reducidos sin necesidad de pistas."
        },
        "image": "/wp-content/uploads/2025/08/img-3.webp",
        "specs": {
            "en": [
                ("Combat Radius", "up to 12 km"),
                ("Flight Duration", "35 min"),
                ("Recommended Battery", "LiPo / Li-Ion high density"),
                ("Maximum Payload", "200 g"),
                ("Maximum Speed", "120 km/h"),
                ("Wingspan", "730 mm"),
                ("Total Weight", "1.0 kg"),
                ("Material", "High density EPP"),
                ("Video Transmission", "FPV 4K 60fps (Hee Wing T1 Ranger platform)")
            ],
            "es": [
                ("Radio de Combate", "hasta 12 km"),
                ("Tiempo de Vuelo", "35 min"),
                ("Batería Recomendada", "LiPo / Li-Ion de alta densidad"),
                ("Carga Máxima", "200 g"),
                ("Velocidad Máxima", "120 km/h"),
                ("Envergadura", "730 mm"),
                ("Peso Total", "1.0 kg"),
                ("Material", "EPP de alta densidad"),
                ("Transmisión de Video", "FPV 4K 60fps (Plataforma Hee Wing T1 Ranger)")
            ]
        }
    },
    "h1-lr": {
        "title": {
            "en": "H1 LONG RANGE - Fixed-Wing Reconnaissance UAV",
            "es": "H1 LONG RANGE - UAV de Ala Fija"
        },
        "description": {
            "en": "Tactical fixed-wing UAV designed for long-range reconnaissance, border patrol, and strategic monitoring. Equipped with a 30x optical zoom camera for real-time digital video.",
            "es": "UAV táctico de ala fija diseñado para reconocimiento de largo alcance, patrullaje fronterizo y monitoreo estratégico. Equipado con cámara de zoom óptico 30x para video digital en tiempo real."
        },
        "image": "/wp-content/uploads/2025/10/ews.webp",
        "specs": {
            "en": [
                ("Combat Radius", "up to 20 km"),
                ("Flight Duration", "60 min"),
                ("Recommended Battery", "Li-Ion high capacity"),
                ("Maximum Payload", "2.0 kg"),
                ("Maximum Speed", "100 km/h"),
                ("Total Weight", "8.0 kg"),
                ("Material", "3K carbon fiber and fiberglass"),
                ("Video Transmission", "FPV 4K 60fps (30x Zoom)")
            ],
            "es": [
                ("Radio de Combate", "hasta 20 km"),
                ("Tiempo de Vuelo", "60 min"),
                ("Batería Recomendada", "Li-Ion de alta capacidad"),
                ("Carga Máxima", "2.0 kg"),
                ("Velocidad Máxima", "100 km/h"),
                ("Peso Total", "8.0 kg"),
                ("Material", "Fibra de carbono 3K y fibra de vidrio"),
                ("Transmisión de Video", "FPV 4K 60fps (Zoom 30x)")
            ]
        }
    },
    "netgun-r1": {
        "title": {
            "en": "NETGUN R1 SKYCAPTOR - Net Launcher Interceptor",
            "es": "NETGUN R1 SKYCAPTOR - Interceptor Lanzador de Redes"
        },
        "description": {
            "en": "Portable and hand-operated non-lethal net launcher designed for capturing small and medium unauthorized drones using CO₂ propulsion.",
            "es": "Dispositivo portátil y de operación manual no letal diseñado para la captura de drones pequeños y medianos no autorizados mediante propulsión de CO₂."
        },
        "image": "/NETGUN.png",
        "specs": {
            "en": [
                ("Effective Range", "Approx. 9 meters (up to 20 meters maximum)"),
                ("Weight", "1 kg"),
                ("Dimensions", "34 x 5 cm"),
                ("Net Area", "4 x 3 m (12 m²)"),
                ("Reload Time", "30 seconds"),
                ("Firing Speed", "7 m/s"),
                ("Release Force", "200 Newtons"),
                ("Includes", "Transport suitcase, 10 disposable CO₂ cartridges, 3 nozzles with reusable nets, manual activation handle"),
                ("Propulsion Cartridge", "Standard CO₂ 10 - 12 g"),
                ("Net Type", "Reusable"),
                ("Target Capability", "Small and medium drones"),
                ("License & Permits", "None required (no special permissions needed)")
            ],
            "es": [
                ("Alcance de Uso", "Aprox. 9 metros (hasta 20 metros máximo)"),
                ("Peso", "1 kg"),
                ("Dimensiones", "34 x 5 cm"),
                ("Área de la Red", "4 x 3 m (12 m²)"),
                ("Tiempo de Recarga", "30 segundos"),
                ("Velocidad de Disparo", "7 m/s"),
                ("Fuerza de Liberación", "200 Newtons"),
                ("Incluye", "Maleta de transporte, 10 cartuchos de CO₂ desechables, 3 boquillas con mallas reutilizables, mango de activación manual"),
                ("Cartucho de Propulsión", "CO₂ estándar de 10 - 12 g"),
                ("Tipo de Red", "Reutilizable"),
                ("Capacidad de Objetivo", "Drones pequeños y medianos"),
                ("Licencia y Permisos", "No requiere permisos ni licencias especiales")
            ]
        }
    },
    "viper-ne1": {
        "title": {
            "en": "VIPER NE1 - Explosive Release System",
            "es": "VIPER NE1 - Sistema de Liberación de Carga"
        },
        "description": {
            "en": "High-precision payload drop and explosive release system designed to be integrated with commercial utility drones, featuring secure LoRa communication.",
            "es": "Sistema de liberación y caída de carga de alta precisión diseñado para integrarse con drones comerciales, equipado con comunicación LoRa segura."
        },
        "image": "/wp-content/uploads/2025/09/key-2.webp",
        "specs": {
            "en": [
                ("Signal Range", "up to 5 km"),
                ("Maximum Carrier Speed", "70 km/h"),
                ("Maximum Payload", "350 g (defensive or fragmentation grenades)"),
                ("Operation Duration", "35 min"),
                ("Communication Protocol", "Secure LoRa connection"),
                ("Compatibility", "Commercial utility drones (DJI, etc.)")
            ],
            "es": [
                ("Alcance de Señal", "hasta 5 km"),
                ("Velocidad Máx. del Transportador", "70 km/h"),
                ("Carga Máxima", "350 g (granadas defensivas o de fragmentación)"),
                ("Duración de la Operación", "35 min"),
                ("Protocolo de Comunicación", "Conexión segura LoRa"),
                ("Compatibilidad", "Drones comerciales de utilidad (DJI, etc.)")
            ]
        }
    },
    "kmk1": {
        "title": {
            "en": "FPV KMK1 - Kamikaze Attack Drone",
            "es": "FPV KMK1 - Dron Kamikaze de Ataque"
        },
        "description": {
            "en": "Tactical FPV Kamikaze drone designed for surgical neutralization of light armored vehicles, fortresses, and tactical targets in the battlefield.",
            "es": "Dron táctico FPV Kamikaze diseñado para la neutralización quirúrgica de vehículos blindados ligeros, fortificaciones y objetivos tácticos en el campo de batalla."
        },
        "image": "/wp-content/uploads/2025/09/nemesis.webp",
        "specs": {
            "en": [
                ("Combat Radius", "up to 12 km"),
                ("Maximum Speed", "120 km/h"),
                ("Maximum Payload", "1.5 kg"),
                ("Flight Duration", "10 min"),
                ("Video Resolution", "FPV 4K 60fps"),
                ("Frame Material", "3K carbon fiber")
            ],
            "es": [
                ("Radio de Combate", "hasta 12 km"),
                ("Velocidad Máxima", "120 km/h"),
                ("Carga Máxima", "1.5 kg"),
                ("Tiempo de Vuelo", "10 min"),
                ("Resolución de Video", "FPV 4K 60fps"),
                ("Material del Marco", "Fibra de carbono 3K")
            ]
        }
    }
}

# Subcategories listing definitions
SUBCATEGORIES = {
    "fpv-drones": {
        "title": {
            "en": "FPV Drones Catalog",
            "es": "Catálogo de Drones FPV"
        },
        "description": {
            "en": "Explore our family of high-performance tactical FPV carrier drones (7\", 8\", and 15\" models).",
            "es": "Explore nuestra familia de drones tácticos FPV de alto rendimiento (modelos de 7\", 8\" y 15\")."
        },
        "category_label": {
            "en": "FPV drones",
            "es": "Drones FPV"
        },
        "products": ["fpv-7", "fpv-8", "fpv-15"]
    },
    "recon-uavs": {
        "title": {
            "en": "Reconnaissance UAV Catalog",
            "es": "Catálogo de UAVs de Reconocimiento"
        },
        "description": {
            "en": "Tactical aerial reconnaissance platforms designed for surveillance, mapping, and target acquisition (VTOL T1 Ranger & Fixed-wing H1 Long Range).",
            "es": "Plataformas de reconocimiento aéreo táctico diseñadas para vigilancia, mapeo y adquisición de objetivos (VTOL T1 Ranger y Ala Fija H1 LR)."
        },
        "category_label": {
            "en": "Reconnaissance UAV",
            "es": "UAV de Reconocimiento"
        },
        "products": ["t1-ranger", "h1-lr"]
    }
}

def translate_nav_to_spanish(content):
    translations = {
        "Products": "Productos",
        "About us": "Nosotros",
        "Career": "Carreras",
        "Contacts": "Contacto",
        "Contact us": "Contáctanos",
        "Menu": "Menú",
        "Close": "Cerrar",
        "our social networks": "nuestras redes sociales",
        "Home": "Inicio",
        "Electronic warfare systems": "Sistemas de guerra electrónica",
        "Repeater Drone": "Drone repetidor",
        "Reconnaissance UAV": "UAV de Reconocimiento",
        "Interceptors": "Interceptores",
        "view all products": "ver todos los productos",
        "Technologies": "Tecnologías",
        "Drones FPV": "Drones FPV",
        "view": "ver",
        "Go to catalog": "Ir al catálogo"
    }
    for eng, esp in translations.items():
        # Match word boundaries or text inside tags
        content = content.replace(f"> {eng} <", f"> {esp} <")
        content = content.replace(f">{eng}</a>", f">{esp}</a>")
        content = content.replace(f"<span>{eng}</span>", f"<span>{esp}</span>")
        content = content.replace(f"<p>{eng}</p>", f"<p>{esp}</p>")
        content = content.replace(f"value=\"{eng}\"", f"value=\"{esp}\"")
        content = content.replace(f"alt=\"{eng}\"", f"alt=\"{esp}\"")
    return content

def replace_lang_switcher(html_content, lang, target_page_relative_path):
    current_lang = "EN" if lang == "en" else "ES"
    target_lang = "ES" if lang == "en" else "EN"
    target_lang_lower = "es" if lang == "en" else "en"
    target_url = f"/{target_lang_lower}/{target_page_relative_path}"
    
    desktop_switcher = f"""<div class="header__languages tablet-hide">
<div class="lang-switcher">
<button class="lang-current">
<span class="lang-code">{current_lang}</span>
<span class="lang-arrow">
<svg><use xlink:href="#arrow-bottom-small"></use></svg>
</span>
</button>
<ul class="lang-dropdown">
<li>
<a href="{target_url}">{target_lang}</a>
</li>
</ul>
</div>
</div>"""
    
    tablet_switcher = f"""<div class="header__languages tablet-show">
<div class="lang-switcher">
<a class="lang-current" href="{target_url}">
<span class="lang-code">{current_lang}</span>
</a>
</div>
</div>"""

    old_desktop = """<div class="header__languages tablet-hide">
<div class="lang-switcher">
<button class="lang-current">
<span class="lang-code">EN</span>
<span class="lang-arrow">
<svg><use xlink:href="#arrow-bottom-small"></use></svg>
</span>
</button>
<ul class="lang-dropdown">
<li>
<a href="/products/babka">
UK </a>
</li>
</ul>
</div>
</div>"""

    old_tablet = """<div class="header__languages tablet-show">
<div class="lang-switcher">
<a class="lang-current" href="/products/babka">
<span class="lang-code">EN</span>
</a>
</div>
</div>"""

    html_content = html_content.replace(old_desktop, desktop_switcher)
    html_content = html_content.replace(old_tablet, tablet_switcher)
    return html_content

def generate_detail_page(product_id, lang, base_template):
    data = PRODUCTS[product_id]
    
    # Breadcrumbs construction
    home_name = "Home" if lang == "en" else "Inicio"
    prod_name = "Products" if lang == "en" else "Productos"
    
    title = data["title"][lang]
    desc = data["description"][lang]
    img = data["image"]
    specs = data["specs"][lang]
    
    order_btn_text = "order now" if lang == "en" else "ordenar ahora"
    char_header = "PERFORMANCE CHARACTERISTICS" if lang == "en" else "ESPECIFICACIONES TÉCNICAS"
    
    # Build specifications HTML list
    specs_html = ""
    for spec_name, spec_val in specs:
        specs_html += f"""
        <div class="specifications__item">
            <div class="specifications__item-name">
                <span>{spec_name.upper()}</span>
            </div>
            <div class="specifications__item-value">
                <span>{spec_val}</span>
            </div>
        </div>
        """
        
    main_content = f"""
    <main class="main">
        <section class="promo-products bg-black lines">
            <div class="promo-products__cross cross mobile-hide">
                <svg><use xlink:href="#ico-cross"></use></svg>
            </div>
            <div class="container">
                <div class="promo-products__container">
                    <div class="promo-products__wrapper">
                        <div class="scroll-block">
                            <ul class="breadcrumbs breadcrumbs--white">
                                <li><a href="/{lang}/index.html">{home_name}</a> <svg><use xlink:href="#arrow-breadcrumbs"></use></svg></li>
                                <li><a href="/{lang}/products/index.html">{prod_name}</a> <svg><use xlink:href="#arrow-breadcrumbs"></use></svg></li>
                                <li>{title}</li>
                            </ul>
                        </div>
                        <div class="promo-products__title title-2">
                            <h1>{title}</h1>
                        </div>
                        <div class="promo-products__inner lines mobile-show">
                            <div class="promo-products__img">
                                <img alt="{title}" class="attachment-large size-large" src="{img}" style="max-height: 480px; object-fit: contain; width: 100%;" />
                            </div>
                        </div>
                        <div class="promo-products__descr">
                            <p>{desc}</p>
                        </div>
                        <div class="promo-products__button">
                            <a class="btn btn--red" href="/{lang}/contacts/index.html">
                                <p>{order_btn_text}</p>
                                <span>
                                    <svg><use xlink:href="#arrow-top-right-20"></use></svg>
                                    <svg><use xlink:href="#arrow-top-right-20"></use></svg>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="promo-products__img mobile-hide">
                        <img alt="{title}" class="attachment-large size-large" src="{img}" style="max-height: 480px; object-fit: contain; width: 100%;" />
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section specifications bg-black" style="padding-top: 4rem; padding-bottom: 4rem;">
            <div class="container">
                <div class="specifications__title title-3 title--uppercase title--center" style="margin-bottom: 3rem;">
                    <h2>{char_header}</h2>
                </div>
                <div class="specifications__list" style="display: grid; grid-template-columns: 1fr; gap: 1rem; max-width: 800px; margin: 0 auto;">
                    {specs_html}
                </div>
                <div class="specifications__button" style="text-align: center; margin-top: 3rem;">
                    <a class="btn btn--secondary" href="/{lang}/contacts/index.html">
                        <p>{order_btn_text.capitalize()}</p>
                        <span>
                            <svg><use xlink:href="#arrow-top-right-20"></use></svg>
                            <svg><use xlink:href="#arrow-top-right-20"></use></svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    </main>
    """
    
    # Split layout and replace
    parts = base_template.split('<main class="main">')
    before_main = parts[0] + '<main class="main">'
    after_main = '</main>' + parts[1].split('</main>')[1]
    
    # Replace metadata
    before_main = re.sub(r"<title>.*?</title>", f"<title>{title} - Reaper Defence</title>", before_main)
    before_main = re.sub(r'<meta content=".*?" name="description"/>', f'<meta content="{desc}" name="description"/>', before_main)
    
    # Make header/footer navigation links absolute
    before_main = before_main.replace('%253F', '%3F')
    before_main = before_main.replace('href="../../../en"', f'href="/{lang}/index.html"')
    before_main = before_main.replace('href="../../../es"', f'href="/{lang}/index.html"')
    before_main = before_main.replace('href="../../', f'href="/{lang}/')
    before_main = before_main.replace('href="../', f'href="/{lang}/products/')
    before_main = before_main.replace('href="/products"', f'href="/{lang}/products/index.html"')
    before_main = before_main.replace('href="/en/products"', f'href="/{lang}/products/index.html"')
    before_main = before_main.replace('href="/es/products"', f'href="/{lang}/products/index.html"')
    
    after_main = after_main.replace('href="../../../en"', f'href="/{lang}/index.html"')
    after_main = after_main.replace('href="../../../es"', f'href="/{lang}/index.html"')
    after_main = after_main.replace('href="../../', f'href="/{lang}/')
    after_main = after_main.replace('href="../', f'href="/{lang}/products/')
    after_main = after_main.replace('href="/products"', f'href="/{lang}/products/index.html"')
    after_main = after_main.replace('href="/en/products"', f'href="/{lang}/products/index.html"')
    after_main = after_main.replace('href="/es/products"', f'href="/{lang}/products/index.html"')
    
    final_page = before_main + main_content + after_main
    
    # Replace language switcher dynamically
    final_page = replace_lang_switcher(final_page, lang, f"products/{product_id}.html")
    
    if lang == "es":
        final_page = translate_nav_to_spanish(final_page)
        
    return final_page

def generate_subcategory_page(subcat_id, lang, base_template):
    data = SUBCATEGORIES[subcat_id]
    title = data["title"][lang]
    desc = data["description"][lang]
    label = data["category_label"][lang]
    
    home_name = "Home" if lang == "en" else "Inicio"
    prod_name = "Products" if lang == "en" else "Productos"
    more_details_text = "More details" if lang == "en" else "Ver detalles"
    
    # Build grid cards
    cards_html = ""
    for prod_id in data["products"]:
        pdata = PRODUCTS[prod_id]
        p_title = pdata["title"][lang]
        p_desc = pdata["description"][lang]
        p_img = pdata["image"]
        p_specs = pdata["specs"][lang]
        
        # Take first 3 specs as quick summary characteristics
        char_items = ""
        for s_name, s_val in p_specs[:3]:
            char_items += f"<li><p>{s_val}</p> <span>{s_name}</span></li>"
            
        cards_html += f"""
        <article class="products__card" style="margin-bottom: 2rem;">
            <a class="products__card-link" href="/{lang}/products/{prod_id}.html"></a>
            <div class="products__card-img" style="background-color: #1f1f1f; display: flex; align-items: center; justify-content: center;">
                <img alt="{p_title}" src="{p_img}" style="width: 100%; height: 100%; object-fit: contain;" />
            </div>
            <div class="products__card-wrapper">
                <div class="products__card-categories">
                    <span class="label label--black">{label}</span>
                </div>
                <div class="products__card-title">
                    <header>{p_title}</header>
                </div>
                <ul class="products__card-characteristics">
                    {char_items}
                </ul>
                <div class="products__card-button">
                    <a class="btn btn--secondary" href="/{lang}/products/{prod_id}.html">
                        <p>{more_details_text}</p>
                        <span>
                            <svg><use xlink:href="#arrow-top-right-16"></use></svg>
                            <svg><use xlink:href="#arrow-top-right-16"></use></svg>
                        </span>
                    </a>
                </div>
            </div>
        </article>
        """
        
    main_content = f"""
    <main class="main">
        <section class="products js-filtration section-indent" style="padding-top: 4rem; padding-bottom: 4rem;">
            <div class="container">
                <div class="scroll-block">
                    <ul class="breadcrumbs">
                        <li><a href="/{lang}/index.html">{home_name}</a> <svg><use xlink:href="#arrow-breadcrumbs"></use></svg></li>
                        <li><a href="/{lang}/products/index.html">{prod_name}</a> <svg><use xlink:href="#arrow-breadcrumbs"></use></svg></li>
                        <li>{title}</li>
                    </ul>
                </div>
                <div class="products__title title-2 title--uppercase" style="margin-bottom: 1.5rem;">
                    <h1>{title}</h1>
                </div>
                <div class="products__descr" style="max-width: 700px; margin-bottom: 3rem; font-size: 1.125rem; opacity: 0.8;">
                    <p>{desc}</p>
                </div>
                <div class="products__cards" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem;">
                    {cards_html}
                </div>
            </div>
        </section>
    </main>
    """
    
    # Split layout and replace
    parts = base_template.split('<main class="main">')
    before_main = parts[0] + '<main class="main">'
    after_main = '</main>' + parts[1].split('</main>')[1]
    
    # Replace metadata
    before_main = re.sub(r"<title>.*?</title>", f"<title>{title} - Reaper Defence</title>", before_main)
    
    # Make header/footer navigation links absolute
    before_main = before_main.replace('%253F', '%3F')
    before_main = before_main.replace('href="../../../en"', f'href="/{lang}/index.html"')
    before_main = before_main.replace('href="../../../es"', f'href="/{lang}/index.html"')
    before_main = before_main.replace('href="../../', f'href="/{lang}/')
    before_main = before_main.replace('href="../', f'href="/{lang}/products/')
    before_main = before_main.replace('href="/products"', f'href="/{lang}/products/index.html"')
    before_main = before_main.replace('href="/en/products"', f'href="/{lang}/products/index.html"')
    before_main = before_main.replace('href="/es/products"', f'href="/{lang}/products/index.html"')
    
    after_main = after_main.replace('href="../../../en"', f'href="/{lang}/index.html"')
    after_main = after_main.replace('href="../../../es"', f'href="/{lang}/index.html"')
    after_main = after_main.replace('href="../../', f'href="/{lang}/')
    after_main = after_main.replace('href="../', f'href="/{lang}/products/')
    after_main = after_main.replace('href="/products"', f'href="/{lang}/products/index.html"')
    after_main = after_main.replace('href="/en/products"', f'href="/{lang}/products/index.html"')
    after_main = after_main.replace('href="/es/products"', f'href="/{lang}/products/index.html"')
    
    final_page = before_main + main_content + after_main
    
    # Replace language switcher dynamically
    final_page = replace_lang_switcher(final_page, lang, f"products/{subcat_id}.html")
    
    if lang == "es":
        final_page = translate_nav_to_spanish(final_page)
        
    return final_page

def main():
    # Read the template file
    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        base_template = f.read()
        
    # Ensure product directories exist
    os.makedirs(os.path.join(BASE_DIR, "taf-ua.com", "en", "products"), exist_ok=True)
    os.makedirs(os.path.join(BASE_DIR, "taf-ua.com", "es", "products"), exist_ok=True)
    
    for lang in ["en", "es"]:
        print(f"Generating pages for language: {lang}")
        
        # 1. Generate Subcategory grid pages
        for subcat_id in SUBCATEGORIES.keys():
            subcat_page = generate_subcategory_page(subcat_id, lang, base_template)
            out_path = os.path.join(BASE_DIR, "taf-ua.com", lang, "products", f"{subcat_id}.html")
            with open(out_path, "w", encoding="utf-8") as f_out:
                f_out.write(subcat_page)
            print(f"Created subcategory page: {out_path}")
            
        # 2. Generate Product detail pages
        for prod_id in PRODUCTS.keys():
            detail_page = generate_detail_page(prod_id, lang, base_template)
            out_path = os.path.join(BASE_DIR, "taf-ua.com", lang, "products", f"{prod_id}.html")
            with open(out_path, "w", encoding="utf-8") as f_out:
                f_out.write(detail_page)
            print(f"Created product detail page: {out_path}")
            
    print("All catalog pages successfully generated!")

if __name__ == "__main__":
    main()
