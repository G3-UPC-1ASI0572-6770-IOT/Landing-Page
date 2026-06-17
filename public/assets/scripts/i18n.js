const SK = "parkingnow.language";

const T = {
  en: {
    "nav.benefits":"Problem","nav.how":"How it works","nav.drivers":"Drivers","nav.owners":"Owners","nav.faq":"FAQ","nav.contact":"Contact",
    "cta.owner":"For owners","cta.find":"Find parking",

    "hero.title":'Parking, <span class="text-grd">verified</span><br class="hidden sm:block"/> by physical sensors.',
    "hero.subtitle":"ParkingNow connects drivers with parking operators using real-time occupancy data from IoT sensors. Stop guessing. Start parking.",
    "hero.cta.find":"Find parking","hero.cta.owner":"Join as owner",
    "hero.stat.spaces":"Live spaces","hero.stat.heartbeat":"Heartbeat","hero.stat.accuracy":"Sensor accuracy",

    "prob.eyebrow":"The problem",
    "prob.title":"Parking should not be a guessing game.",
    "prob.subtitle":"The traditional parking experience is broken for both sides of the market. Drivers circle endlessly. Owners track occupancy on paper. The data gap wastes time for everyone.",
    "prob.c1.title":"Drivers waste time","prob.c1.desc":"Circling blocks hoping for a spot, increasing emissions, fuel costs, and frustration.",
    "prob.c2.title":"Owners manage manually","prob.c2.desc":"Relying on pen-and-paper or disconnected systems to track occupancy.",
    "prob.c3.title":"Stale data misleads","prob.c3.desc":"Information outdated the moment it's posted, leading to double-bookings and wasted trips.",

    "arch.eyebrow":"The architecture",
    "arch.title":"Three layers, one source of truth.",
    "arch.subtitle":"Sensors at the edge, API at the core, app and dashboard on top.",
    "arch.r1.title":"Mobile app","arch.r1.stack":"Flutter · Driver",
    "arch.r1.desc":"For drivers to find nearby parking on a live map, check real-time availability, and reserve a spot before arriving. Built with flutter_map + OpenStreetMap.",
    "arch.r2.title":"Web dashboard","arch.r2.stack":"Angular 18 · Owner",
    "arch.r2.desc":"For owners to register their lot, manage spaces, view live occupancy, monitor revenue. Real-time updates via Supabase Realtime.",
    "arch.r3.title":"IoT sensors","arch.r3.stack":"ESP32-CAM · Edge",
    "arch.r3.desc":"For real-time occupancy verification. Ultrasonic sensors detect vehicles, debounce readings, and stream events through a Flask edge gateway.",

    "iot.eyebrow":"The differentiator",
    "iot.title":"Availability verified by physical sensors.",
    "iot.subtitle":"Unlike platforms that rely on manual updates, ParkingNow uses IoT sensors in each spot to guarantee real-time data.",
    "iot.f1.title":"~100% accurate occupancy","iot.f1.desc":"HC-SR04+ ultrasonic readings with 3-reading debounce per slot.",
    "iot.f2.title":"Instant propagation","iot.f2.desc":"Changes reach the driver in under a second through Supabase Realtime.",
    "iot.f3.title":"Honest, not optimistic","iot.f3.desc":"The system shows the real state, including when a node is offline.",

    "drv.eyebrow":"For drivers",
    "drv.title":"Park with confidence.",
    "drv.subtitle":"Open the app, see guaranteed spots, and reserve instantly. No more circling the block.",
    "drv.f1.title":"Guaranteed availability","drv.f1.desc":"Spots marked available are verified by IoT sensors in real time.",
    "drv.f2.title":"Seamless payment","drv.f2.desc":"Pay securely through the app. No cash, no paper tickets.",
    "drv.f3.title":"Offline transparency","drv.f3.desc":"If a sensor node is offline, the app tells you. Stale data is never shown as live.",

    "own.eyebrow":"For parking owners",
    "own.title":"Maximize your parking revenue.",
    "own.subtitle":"Manage your spots effortlessly with our web dashboard and automated IoT tracking.",
    "own.f1.title":"Real-time analytics","own.f1.desc":"Track occupancy rate, daily revenue, and peak hours. Donut and bar charts update live.",
    "own.f2.title":"Automated management","own.f2.desc":"IoT sensors update availability automatically. Reservations auto-consume on arrival.",

    "eco.eyebrow":"The ecosystem",
    "eco.title":"Connecting supply with demand.",
    "eco.subtitle":"Three actors, one real-time network. IoT sensor data bridges parking operators with drivers in under a second.",
    "eco.own.role":"Supply","eco.own.title":"Parking owner",
    "eco.own.desc":"Registers their lot, installs IoT sensors per space, and receives verified reservations from nearby drivers via the web dashboard.",
    "eco.own.f1":"Register spaces on the map","eco.own.f2":"Install HC-SR04+ per slot","eco.own.f3":"Monitor revenue live",
    "eco.plat.role":"Platform","eco.plat.title":"ParkingNow Platform",
    "eco.plat.desc":"Processes sensor events, manages reservations and payments, and broadcasts real-time slot availability to all connected drivers.",
    "eco.drv.role":"Demand","eco.drv.title":"Driver",
    "eco.drv.desc":"Opens the mobile app, sees IoT-verified availability on a live map, reserves a confirmed spot, and pays before arriving.",
    "eco.drv.f1":"Find IoT-verified spots","eco.drv.f2":"Reserve 15 min ahead","eco.drv.f3":"Pay & park in-app",

    "how.eyebrow":"How it works",
    "how.title":"Simple setup, seamless experience.",
    "how.drv.label":"Drivers",
    "how.drv.s1.title":"Search","how.drv.s1.desc":"Find nearby parking on the live map. Verified lots show real availability.",
    "how.drv.s2.title":"Verify","how.drv.s2.desc":"Check IoT status before you arrive. Know exactly which spots are free.",
    "how.drv.s3.title":"Park & pay","how.drv.s3.desc":"Drive straight to the spot and pay in-app. The sensor confirms arrival.",
    "how.own.label":"Owners",
    "how.own.s1.title":"Register","how.own.s1.desc":"Sign up on the web dashboard and list your parking location with GPS.",
    "how.own.s2.title":"Install sensors","how.own.s2.desc":"Plug in the IoT sensor for each spot. Link the node, go live in minutes.",
    "how.own.s3.title":"Earn","how.own.s3.desc":"Manage revenue and occupancy from a single dashboard. Data, not spreadsheets.",

    "trust.eyebrow":"Trust",
    "trust.title":"Designed with transparency.",
    "trust.subtitle":"An academic project developed by UPC students with an IoT-focused approach. The interface prioritizes clear states and transparent messages when a node is offline.",
    "trust.quote":"Infrastructure data should be transparent. Our offline-first sensor design ensures reliability even when networks fail.",
    "trust.chip.open":"Open Source",

    "about.eyebrow":"About",
    "about.title":"Code Mondoguito.",
    "about.subtitle":"A team of engineers and designers dedicated to solving urban mobility challenges through smart IoT solutions.",
    "about.stat.course":"Course","about.stat.univ":"University","about.stat.year":"Year",

    "demo.eyebrow":"Product demo",
    "demo.title":"ParkingNow in one flow.",
    "demo.subtitle":"Sensor detection, reservation, payment, QR ticket, and admin monitoring in a single walkthrough.",
    "demo.badge":"Demo · MVP",
    "demo.ph":"Replace with the final recorded walkthrough before delivery.",

    "contact.eyebrow":"Contact",
    "contact.title":"Get in touch.",
    "contact.subtitle":"Have questions about joining as an owner or using the app? We read every message.",
    "contact.email.lbl":"Email","contact.loc.lbl":"Location",
    "contact.f.name.lbl":"Name","contact.f.name.ph":"Your name",
    "contact.f.email.lbl":"Email","contact.f.email.ph":"you@example.com",
    "contact.f.type.lbl":"User type","contact.f.dist.lbl":"District","contact.f.dist.ph":"Miraflores, San Isidro",
    "contact.f.msg.lbl":"Message","contact.f.msg.ph":"Tell us about what you're looking for.",
    "contact.f.resp":"Response within 24h","contact.f.send":"Send message",

    "faq.eyebrow":"FAQ","faq.title":"Frequently asked questions.",
    "faq.q1":"How does ParkingNow know if a space is available?",
    "faq.a1":"Our sensors provide near 100% accuracy, updating in real time as soon as a vehicle enters or leaves a spot.",
    "faq.q2":"What does IoT verified mean?",
    "faq.a2":"The parking spot has a physical sensor installed that communicates its status directly to our platform, rather than relying on manual updates or predictions.",
    "faq.q3":"Can I reserve before arriving?",
    "faq.a3":"Yes. You can reserve a guaranteed spot through the mobile app before you reach your destination. Reservations are held for 15 minutes.",
    "faq.q4":"How do parking owners join?",
    "faq.a4":"Parking owners can sign up through our website, request sensor installation, and manage spaces via the web dashboard.",
    "faq.q5":"What happens if an IoT node is offline?",
    "faq.a5":"We monitor sensor health and display transparent messages if a node is offline. The edge gateway buffers events locally and syncs when connection returns.",
    "faq.q6":"What are reference-only parking spaces?",
    "faq.a6":"Spaces listed without IoT sensors. We provide them for reference, but real-time availability cannot be guaranteed and they are marked clearly.",
    "faq.q7":"How does sensor installation work?",
    "faq.a7":"Contact us for a custom quote. We handle the physical installation, network setup, and dashboard configuration end to end.",

    "fin.eyebrow":"Ready to launch",
    "fin.title":"Ready to park smarter?",
    "fin.subtitle":"Find available spaces before arriving, or bring your parking business online with IoT-verified availability. Built and tested in Lima.",
    "fin.cta.find":"Find parking","fin.cta.owner":"Join as owner",

    "footer.desc":"Smart parking with IoT-verified availability. We connect drivers and owners through real-time technology.",
    "footer.verified":"IoT verified","footer.offline":"Offline transparent",
    "footer.product":"Product","footer.platform":"Platform","footer.contact":"Contact",
    "footer.mobile":"Mobile app","footer.dashboard":"Dashboard","footer.iot":"IoT nodes","footer.availability":"Availability",
    "footer.academic":"UPC · Academic project",
    "footer.rights":"© 2026 Code Mondoguito. All rights reserved.",
    "footer.privacy":"Privacy","footer.terms":"Terms","footer.accessibility":"Accessibility",
    "trust.chip.academic":"UPC Academic Origin"
  },
  es: {
    "nav.benefits":"Problema","nav.how":"Cómo funciona","nav.drivers":"Conductores","nav.owners":"Dueños","nav.faq":"FAQ","nav.contact":"Contacto",
    "cta.owner":"Para dueños","cta.find":"Buscar parking",

    "hero.title":'Estacionamiento, <span class="text-grd">verificado</span><br class="hidden sm:block"/> por sensores físicos.',
    "hero.subtitle":"ParkingNow conecta conductores con operadores de estacionamiento usando datos de ocupación en tiempo real de sensores IoT. Deja de adivinar. Empieza a estacionar.",
    "hero.cta.find":"Buscar parking","hero.cta.owner":"Unirse como dueño",
    "hero.stat.spaces":"Espacios activos","hero.stat.heartbeat":"Actualización","hero.stat.accuracy":"Precisión sensor",

    "prob.eyebrow":"El problema",
    "prob.title":"Estacionar no debería ser un juego de adivinanzas.",
    "prob.subtitle":"La experiencia tradicional de estacionamiento está rota para ambos lados del mercado. Los conductores dan vueltas sin fin. Los dueños registran la ocupación en papel. La brecha de datos hace perder tiempo a todos.",
    "prob.c1.title":"Los conductores pierden tiempo","prob.c1.desc":"Dando vueltas esperando encontrar un lugar, aumentando emisiones, costos de combustible y frustración.",
    "prob.c2.title":"Los dueños gestionan manualmente","prob.c2.desc":"Dependiendo de papel y lápiz o sistemas desconectados para registrar la ocupación.",
    "prob.c3.title":"Datos desactualizados engañan","prob.c3.desc":"Información desactualizada apenas publicada, generando dobles reservas y viajes en vano.",

    "arch.eyebrow":"La arquitectura",
    "arch.title":"Tres capas, una sola fuente de verdad.",
    "arch.subtitle":"Sensores en el borde, API en el núcleo, app y dashboard arriba.",
    "arch.r1.title":"App móvil","arch.r1.stack":"Flutter · Conductor",
    "arch.r1.desc":"Para que conductores encuentren estacionamiento cercano en un mapa en vivo, verifiquen disponibilidad en tiempo real y reserven antes de llegar. Hecho con flutter_map + OpenStreetMap.",
    "arch.r2.title":"Dashboard web","arch.r2.stack":"Angular 18 · Dueño",
    "arch.r2.desc":"Para que dueños registren su estacionamiento, gestionen espacios, vean ocupación en vivo y monitoreen ingresos. Actualizaciones en tiempo real vía Supabase Realtime.",
    "arch.r3.title":"Sensores IoT","arch.r3.stack":"ESP32-CAM · Borde",
    "arch.r3.desc":"Para verificación de ocupación en tiempo real. Sensores ultrasónicos detectan vehículos, aplican rebote de lecturas y transmiten eventos a través de una puerta de enlace Flask.",

    "iot.eyebrow":"El diferenciador",
    "iot.title":"Disponibilidad verificada por sensores físicos.",
    "iot.subtitle":"A diferencia de plataformas que dependen de actualizaciones manuales, ParkingNow usa sensores IoT en cada espacio para garantizar datos en tiempo real.",
    "iot.f1.title":"~100% de precisión","iot.f1.desc":"Lecturas ultrasónicas HC-SR04+ con rebote de 3 lecturas por ranura.",
    "iot.f2.title":"Propagación instantánea","iot.f2.desc":"Los cambios llegan al conductor en menos de un segundo a través de Supabase Realtime.",
    "iot.f3.title":"Honesto, no optimista","iot.f3.desc":"El sistema muestra el estado real, incluyendo cuando un nodo está offline.",

    "drv.eyebrow":"Para conductores",
    "drv.title":"Estaciona con confianza.",
    "drv.subtitle":"Abre la app, ve los espacios garantizados y reserva al instante. Sin más vueltas a la manzana.",
    "drv.f1.title":"Disponibilidad garantizada","drv.f1.desc":"Los espacios marcados como disponibles son verificados por sensores IoT en tiempo real.",
    "drv.f2.title":"Pago sin complicaciones","drv.f2.desc":"Paga de forma segura a través de la app. Sin efectivo ni tickets en papel.",
    "drv.f3.title":"Transparencia offline","drv.f3.desc":"Si un nodo sensor está offline, la app te avisa. Los datos obsoletos nunca se muestran como activos.",

    "own.eyebrow":"Para dueños de estacionamiento",
    "own.title":"Maximiza los ingresos de tu estacionamiento.",
    "own.subtitle":"Gestiona tus espacios sin esfuerzo con nuestro dashboard web y seguimiento IoT automatizado.",
    "own.f1.title":"Analíticas en tiempo real","own.f1.desc":"Rastrea la tasa de ocupación, ingresos diarios y horas pico. Gráficos actualizados en vivo.",
    "own.f2.title":"Gestión automatizada","own.f2.desc":"Los sensores IoT actualizan la disponibilidad automáticamente. Las reservas se consumen al llegar.",

    "eco.eyebrow":"El ecosistema",
    "eco.title":"Conectando oferta con demanda.",
    "eco.subtitle":"Tres actores, una red en tiempo real. Los datos de sensores IoT conectan operadores con conductores en menos de un segundo.",
    "eco.own.role":"Oferta","eco.own.title":"Dueño de estacionamiento",
    "eco.own.desc":"Registra su estacionamiento, instala sensores IoT por espacio y recibe reservas verificadas de conductores cercanos a través del dashboard web.",
    "eco.own.f1":"Registrar espacios en el mapa","eco.own.f2":"Instalar HC-SR04+ por ranura","eco.own.f3":"Monitorear ingresos en vivo",
    "eco.plat.role":"Plataforma","eco.plat.title":"Plataforma ParkingNow",
    "eco.plat.desc":"Procesa eventos de sensores, gestiona reservas y pagos, y transmite disponibilidad de espacios en tiempo real a todos los conductores conectados.",
    "eco.drv.role":"Demanda","eco.drv.title":"Conductor",
    "eco.drv.desc":"Abre la app móvil, ve disponibilidad verificada por IoT en un mapa en vivo, reserva un espacio confirmado y paga antes de llegar.",
    "eco.drv.f1":"Encontrar espacios IoT verificados","eco.drv.f2":"Reservar 15 min antes","eco.drv.f3":"Pagar y estacionar en la app",

    "how.eyebrow":"Cómo funciona",
    "how.title":"Configuración simple, experiencia perfecta.",
    "how.drv.label":"Conductores",
    "how.drv.s1.title":"Buscar","how.drv.s1.desc":"Encuentra estacionamiento cercano en el mapa en vivo. Los locales verificados muestran disponibilidad real.",
    "how.drv.s2.title":"Verificar","how.drv.s2.desc":"Verifica el estado IoT antes de llegar. Sabe exactamente qué espacios están libres.",
    "how.drv.s3.title":"Estacionar y pagar","how.drv.s3.desc":"Ve directo al espacio y paga en la app. El sensor confirma la llegada.",
    "how.own.label":"Dueños",
    "how.own.s1.title":"Registrar","how.own.s1.desc":"Regístrate en el dashboard web y lista tu estacionamiento con GPS.",
    "how.own.s2.title":"Instalar sensores","how.own.s2.desc":"Conecta el sensor IoT por espacio. Vincula el nodo, actívate en minutos.",
    "how.own.s3.title":"Ganar","how.own.s3.desc":"Gestiona ingresos y ocupación desde un solo dashboard. Datos, no planillas.",

    "trust.eyebrow":"Confianza",
    "trust.title":"Diseñado con transparencia.",
    "trust.subtitle":"Un proyecto académico desarrollado por estudiantes de UPC con enfoque en IoT. La interfaz prioriza estados claros y mensajes transparentes cuando un nodo está offline.",
    "trust.quote":"Los datos de infraestructura deben ser transparentes. Nuestro diseño de sensores offline-first garantiza confiabilidad incluso cuando las redes fallan.",
    "trust.chip.open":"Código abierto",

    "about.eyebrow":"Acerca de",
    "about.title":"Code Mondoguito.",
    "about.subtitle":"Un equipo de ingenieros y diseñadores dedicados a resolver desafíos de movilidad urbana a través de soluciones IoT inteligentes.",
    "about.stat.course":"Curso","about.stat.univ":"Universidad","about.stat.year":"Año",

    "demo.eyebrow":"Demo del producto",
    "demo.title":"ParkingNow en un flujo.",
    "demo.subtitle":"Detección de sensores, reserva, pago, ticket QR y monitoreo admin en un recorrido completo.",
    "demo.badge":"Demo · MVP",
    "demo.ph":"Reemplazar con el recorrido grabado final antes de la entrega.",

    "contact.eyebrow":"Contacto",
    "contact.title":"Ponte en contacto.",
    "contact.subtitle":"¿Tienes preguntas sobre unirte como dueño o usar la app? Leemos cada mensaje.",
    "contact.email.lbl":"Correo","contact.loc.lbl":"Ubicación",
    "contact.f.name.lbl":"Nombre","contact.f.name.ph":"Tu nombre",
    "contact.f.email.lbl":"Correo","contact.f.email.ph":"tu@ejemplo.com",
    "contact.f.type.lbl":"Tipo de usuario","contact.f.dist.lbl":"Distrito","contact.f.dist.ph":"Miraflores, San Isidro",
    "contact.f.msg.lbl":"Mensaje","contact.f.msg.ph":"Cuéntanos qué estás buscando.",
    "contact.f.resp":"Respuesta en 24 horas","contact.f.send":"Enviar mensaje",

    "faq.eyebrow":"FAQ","faq.title":"Preguntas frecuentes.",
    "faq.q1":"¿Cómo sabe ParkingNow si un espacio está disponible?",
    "faq.a1":"Nuestros sensores brindan casi 100% de precisión, actualizándose en tiempo real tan pronto como un vehículo entra o sale de un espacio.",
    "faq.q2":"¿Qué significa verificado por IoT?",
    "faq.a2":"El espacio de estacionamiento tiene un sensor físico instalado que comunica su estado directamente a nuestra plataforma, sin depender de actualizaciones manuales ni predicciones.",
    "faq.q3":"¿Puedo reservar antes de llegar?",
    "faq.a3":"Sí. Puedes reservar un espacio garantizado a través de la app móvil antes de llegar a tu destino. Las reservas se mantienen por 15 minutos.",
    "faq.q4":"¿Cómo se unen los dueños de estacionamiento?",
    "faq.a4":"Los dueños pueden registrarse en nuestro sitio web, solicitar instalación de sensores y gestionar espacios desde el dashboard web.",
    "faq.q5":"¿Qué pasa si un nodo IoT está offline?",
    "faq.a5":"Monitoreamos la salud de los sensores y mostramos mensajes transparentes si un nodo está offline. La puerta de enlace almacena eventos localmente y sincroniza cuando vuelve la conexión.",
    "faq.q6":"¿Qué son los espacios de referencia?",
    "faq.a6":"Espacios listados sin sensores IoT. Los ofrecemos como referencia, pero la disponibilidad en tiempo real no puede garantizarse y están marcados claramente.",
    "faq.q7":"¿Cómo funciona la instalación de sensores?",
    "faq.a7":"Contáctanos para una cotización personalizada. Nos encargamos de la instalación física, configuración de red y del dashboard de principio a fin.",

    "fin.eyebrow":"Listo para comenzar",
    "fin.title":"¿Listo para estacionar mejor?",
    "fin.subtitle":"Encuentra espacios disponibles antes de llegar, o lleva tu negocio de estacionamiento al siguiente nivel con disponibilidad verificada por IoT. Construido y probado en Lima.",
    "fin.cta.find":"Buscar parking","fin.cta.owner":"Unirse como dueño",

    "footer.desc":"Estacionamiento inteligente con disponibilidad verificada por IoT. Conectamos conductores y dueños con tecnología en tiempo real.",
    "footer.verified":"Verificado IoT","footer.offline":"Transparencia offline",
    "footer.product":"Producto","footer.platform":"Plataforma","footer.contact":"Contacto",
    "footer.mobile":"App móvil","footer.dashboard":"Dashboard","footer.iot":"Nodos IoT","footer.availability":"Disponibilidad",
    "footer.academic":"UPC · Proyecto académico",
    "footer.rights":"© 2026 Code Mondoguito. Todos los derechos reservados.",
    "footer.privacy":"Privacidad","footer.terms":"Términos","footer.accessibility":"Accesibilidad",
    "trust.chip.academic":"Origen académico UPC"
  }
};

function tx(sel, val) { const n = document.querySelector(sel); if (n && val !== undefined) n.textContent = val; }
function txa(sels, val) { sels.forEach(s => tx(s, val)); }

export function resolveInitialLanguage() {
  const s = localStorage.getItem(SK);
  return s && T[s] ? s : "en";
}

export function nextLanguage(c) { return c === "en" ? "es" : "en"; }

export function applyTranslations(lang) {
  const t = T[lang] || T.en;
  document.documentElement.lang = lang;

  // data-i18n → textContent
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t[el.getAttribute("data-i18n")];
    if (v !== undefined) el.textContent = v;
  });

  // data-i18n-html → innerHTML (for elements with nested tags like gradient spans)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = t[el.getAttribute("data-i18n-html")];
    if (v !== undefined) el.innerHTML = v;
  });

  // data-i18n-ph → placeholder attribute (inputs / textareas)
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const v = t[el.getAttribute("data-i18n-ph")];
    if (v !== undefined) el.placeholder = v;
  });

  // Legacy ID-based selectors kept for backward compat (nav, header CTAs, footer)
  txa(["#nav-benefits","#mnav-benefits","#footer-nav-benefits"], t["nav.benefits"]);
  txa(["#nav-how","#mnav-how","#footer-nav-how"], t["nav.how"]);
  txa(["#nav-drivers","#mnav-drivers","#footer-nav-drivers"], t["nav.drivers"]);
  txa(["#nav-owners","#mnav-owners","#footer-nav-owners"], t["nav.owners"]);
  txa(["#nav-faq","#mnav-faq"], t["nav.faq"]);
  txa(["#nav-contact","#mnav-contact"], t["nav.contact"]);
  txa(["#cta-owner-header"], t["cta.owner"]);
  txa(["#cta-find-header"], t["cta.find"]);

  tx("#footer-desc", t["footer.desc"]);
  tx("#footer-chip-verified", t["footer.verified"]);
  tx("#footer-chip-offline", t["footer.offline"]);
  tx("#footer-title-product", t["footer.product"]);
  tx("#footer-title-platform", t["footer.platform"]);
  tx("#footer-title-contact", t["footer.contact"]);
  tx("#footer-platform-mobile", t["footer.mobile"]);
  tx("#footer-platform-dashboard", t["footer.dashboard"]);
  tx("#footer-platform-iot", t["footer.iot"]);
  tx("#footer-platform-availability", t["footer.availability"]);
  tx("#footer-academic", t["footer.academic"]);
  tx("#footer-rights", t["footer.rights"]);
  tx("#footer-privacy", t["footer.privacy"]);
  tx("#footer-terms", t["footer.terms"]);
  tx("#footer-accessibility", t["footer.accessibility"]);
  tx("#trust-chip-academic", t["trust.chip.academic"]);

  const lb = document.getElementById("lang-label");
  if (lb) lb.textContent = lang.toUpperCase();
  localStorage.setItem(SK, lang);
}

export function setupLanguageToggle(initial) {
  let cur = initial;
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.addEventListener("click", () => { cur = nextLanguage(cur); applyTranslations(cur); });
  applyTranslations(cur);
}
