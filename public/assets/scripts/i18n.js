const STORAGE_KEY = "parkingnow.language";

const translations = {
  en: {
    "nav.benefits": "Benefits",
    "nav.how": "How it works",
    "nav.drivers": "For drivers",
    "nav.owners": "For owners",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.owner": "Join as Owner",
    "cta.find": "Find Parking",
    "hero.chip.verified": "IoT Verified",
    "hero.chip.realtime": "Real-time availability",
    "hero.chip.audience": "For drivers and owners",
    "hero.title": "Find and reserve parking with IoT-verified availability",
    "hero.subtitle": "ParkingNow connects drivers with independent parking operators using real-time occupancy data from physical IoT sensors. Stop guessing. Start parking.",
    "problem.title": "Parking should not be a guessing game",
    "problem.subtitle": "The traditional parking experience is broken for both sides of the market.",
    "problem.card1.title": "Drivers wasting time",
    "problem.card1.body": "Circling blocks hoping for a spot, increasing emissions and frustration.",
    "problem.card2.title": "Owners managing manually",
    "problem.card2.body": "Relying on pen-and-paper or disconnected systems to track occupancy.",
    "problem.card3.title": "Manual updates causing confusion",
    "problem.card3.body": "Static data that is outdated the moment it's posted, leading to double-bookings.",
    "solution.title": "ParkingNow connects app, web dashboard and IoT",
    "solution.subtitle": "A seamless ecosystem that ensures reliable parking data for everyone.",
    "iot.title": "Availability verified by physical sensors",
    "iot.subtitle": "Unlike other platforms that rely on manual updates or predictions, ParkingNow uses physical IoT sensors installed in each parking spot to guarantee real-time availability.",
    "faq.q1": "1. How does ParkingNow know if a space is available?",
    "faq.q2": "2. What does IoT Verified mean?",
    "faq.q3": "3. Can I reserve before arriving?",
    "faq.q4": "4. How do parking owners join ParkingNow?",
    "faq.q5": "5. What happens if an IoT node is offline?",
    "faq.q6": "6. What are reference-only parking spaces?",
    "faq.q7": "7. How does sensor installation work?",
    "faq.title": "Frequently Asked Questions",
    "contact.title": "Get in touch",
    "contact.subtitle": "Have questions about joining as an owner or using the app? We're here to help.",
    "form.name": "Name",
    "form.email": "Email",
    "form.type": "User Type",
    "form.district": "District",
    "form.message": "Message",
    "form.option.driver": "Driver",
    "form.option.owner": "Parking Owner",
    "form.option.other": "Other",
    "form.submit": "Send Message",
    "contact.location": "Location",
    "status.available": "Available",
    "status.occupied": "Occupied",
    "footer.desc": "Smart parking with IoT-verified availability. We connect drivers and owners through real-time technology for a seamless urban mobility experience.",
    "footer.verified": "IoT Verified",
    "footer.offline": "Offline Transparency",
    "footer.product": "Product",
    "footer.platform": "Platform",
    "footer.contact": "Contact",
    "footer.mobile": "Mobile app",
    "footer.dashboard": "Owner dashboard",
    "footer.iot": "IoT nodes",
    "footer.availability": "Parking availability",
    "footer.academic": "Academic project",
    "footer.rights": "© 2026 Code Mondoguito. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.accessibility": "Accessibility"
  },
  es: {
    "nav.benefits": "Beneficios",
    "nav.how": "Cómo funciona",
    "nav.drivers": "Para conductores",
    "nav.owners": "Para dueños",
    "nav.faq": "FAQ",
    "nav.contact": "Contacto",
    "cta.owner": "Únete como dueño",
    "cta.find": "Buscar estacionamiento",
    "hero.chip.verified": "Verificado por IoT",
    "hero.chip.realtime": "Disponibilidad en tiempo real",
    "hero.chip.audience": "Para conductores y dueños",
    "hero.title": "Encuentra y reserva estacionamiento con disponibilidad verificada por IoT",
    "hero.subtitle": "ParkingNow conecta conductores con operadores independientes usando datos de ocupación en tiempo real provenientes de sensores IoT físicos. Deja de adivinar. Empieza a estacionar.",
    "problem.title": "Estacionar no debería ser un juego de adivinanza",
    "problem.subtitle": "La experiencia tradicional de estacionamiento está rota para ambos lados del mercado.",
    "problem.card1.title": "Conductores perdiendo tiempo",
    "problem.card1.body": "Dan vueltas buscando un espacio, aumentando emisiones y frustración.",
    "problem.card2.title": "Dueños gestionando manualmente",
    "problem.card2.body": "Dependen de papel o sistemas desconectados para controlar ocupación.",
    "problem.card3.title": "Actualizaciones manuales causan confusión",
    "problem.card3.body": "Datos desactualizados generan reservas duplicadas y mala experiencia.",
    "solution.title": "ParkingNow conecta app, dashboard web e IoT",
    "solution.subtitle": "Un ecosistema fluido que asegura datos de estacionamiento confiables para todos.",
    "iot.title": "Disponibilidad verificada por sensores físicos",
    "iot.subtitle": "A diferencia de otras plataformas que dependen de actualizaciones manuales o predicciones, ParkingNow usa sensores IoT físicos en cada espacio para garantizar disponibilidad en tiempo real.",
    "faq.q1": "1. ¿Cómo sabe ParkingNow si un espacio está disponible?",
    "faq.q2": "2. ¿Qué significa IoT Verified?",
    "faq.q3": "3. ¿Puedo reservar antes de llegar?",
    "faq.q4": "4. ¿Cómo se unen los dueños de estacionamiento a ParkingNow?",
    "faq.q5": "5. ¿Qué pasa si un nodo IoT está fuera de línea?",
    "faq.q6": "6. ¿Qué son los espacios de referencia?",
    "faq.q7": "7. ¿Cómo funciona la instalación de sensores?",
    "faq.title": "Preguntas Frecuentes",
    "contact.title": "Ponte en contacto",
    "contact.subtitle": "¿Tienes preguntas para unirte como dueño o usar la app? Estamos para ayudarte.",
    "form.name": "Nombre",
    "form.email": "Correo",
    "form.type": "Tipo de usuario",
    "form.district": "Distrito",
    "form.message": "Mensaje",
    "form.option.driver": "Conductor",
    "form.option.owner": "Dueño de estacionamiento",
    "form.option.other": "Otro",
    "form.submit": "Enviar mensaje",
    "contact.location": "Ubicación",
    "status.available": "Disponible",
    "status.occupied": "Ocupado",
    "footer.desc": "Estacionamiento inteligente con disponibilidad verificada por IoT. Conectamos conductores y dueños con tecnología en tiempo real.",
    "footer.verified": "Verificado por IoT",
    "footer.offline": "Transparencia offline",
    "footer.product": "Producto",
    "footer.platform": "Plataforma",
    "footer.contact": "Contacto",
    "footer.mobile": "App móvil",
    "footer.dashboard": "Panel de dueño",
    "footer.iot": "Nodos IoT",
    "footer.availability": "Disponibilidad de estacionamiento",
    "footer.academic": "Proyecto académico",
    "footer.rights": "© 2026 Code Mondoguito. Todos los derechos reservados.",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos del servicio",
    "footer.accessibility": "Accesibilidad"
  }
};

function text(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function all(selectors, value) {
  selectors.forEach((selector) => text(selector, value));
}

export function resolveInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved && translations[saved] ? saved : "en";
}

export function nextLanguage(current) {
  return current === "en" ? "es" : "en";
}

export function applyTranslations(lang) {
  const t = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  all(["#nav-benefits", "#mnav-benefits", "#footer-nav-benefits"], t["nav.benefits"]);
  all(["#nav-how", "#mnav-how", "#footer-nav-how"], t["nav.how"]);
  all(["#nav-drivers", "#mnav-drivers", "#footer-nav-drivers"], t["nav.drivers"]);
  all(["#nav-owners", "#mnav-owners", "#footer-nav-owners"], t["nav.owners"]);
  all(["#nav-faq", "#mnav-faq"], t["nav.faq"]);
  all(["#nav-contact", "#mnav-contact"], t["nav.contact"]);
  all(["#cta-owner-header"], t["cta.owner"]);
  all(["#cta-find-header"], t["cta.find"]);

  text("main section:nth-of-type(1) .flex.flex-wrap.gap-xs span:nth-of-type(1)", t["hero.chip.verified"]);
  text("main section:nth-of-type(1) .flex.flex-wrap.gap-xs span:nth-of-type(2)", t["hero.chip.realtime"]);
  text("main section:nth-of-type(1) .flex.flex-wrap.gap-xs span:nth-of-type(3)", t["hero.chip.audience"]);
  text("main section:nth-of-type(1) h1", t["hero.title"]);
  text("main section:nth-of-type(1) .font-body-lg", t["hero.subtitle"]);
  text("main section:nth-of-type(1) .pt-sm button:nth-of-type(1)", t["cta.find"]);
  text("main section:nth-of-type(1) .pt-sm button:nth-of-type(2)", t["cta.owner"]);

  text("#benefits h2", t["problem.title"]);
  text("#benefits .text-center p", t["problem.subtitle"]);
  text("#benefits .grid > div:nth-of-type(1) h3", t["problem.card1.title"]);
  text("#benefits .grid > div:nth-of-type(1) p", t["problem.card1.body"]);
  text("#benefits .grid > div:nth-of-type(2) h3", t["problem.card2.title"]);
  text("#benefits .grid > div:nth-of-type(2) p", t["problem.card2.body"]);
  text("#benefits .grid > div:nth-of-type(3) h3", t["problem.card3.title"]);
  text("#benefits .grid > div:nth-of-type(3) p", t["problem.card3.body"]);
  text("main section:nth-of-type(3) h2", t["solution.title"]);
  text("main section:nth-of-type(3) .text-center p", t["solution.subtitle"]);
  text("main section:nth-of-type(4) h2", t["iot.title"]);
  text("main section:nth-of-type(4) p", t["iot.subtitle"]);

  text("#faq h2", t["faq.title"]);
  text("#faq details:nth-of-type(1) summary", t["faq.q1"]);
  text("#faq details:nth-of-type(2) summary", t["faq.q2"]);
  text("#faq details:nth-of-type(3) summary", t["faq.q3"]);
  text("#faq details:nth-of-type(4) summary", t["faq.q4"]);
  text("#faq details:nth-of-type(5) summary", t["faq.q5"]);
  text("#faq details:nth-of-type(6) summary", t["faq.q6"]);
  text("#faq details:nth-of-type(7) summary", t["faq.q7"]);
  text("#contact h2", t["contact.title"]);
  text("#contact .flex-1 > p", t["contact.subtitle"]);
  text("#contact .flex-1 .bg-surface .flex:nth-of-type(2) .font-label-md", t["contact.location"]);

  text("label[for='name']", t["form.name"]);
  text("label[for='email']", t["form.email"]);
  text("label[for='type']", t["form.type"]);
  text("label[for='district']", t["form.district"]);
  text("label[for='message']", t["form.message"]);
  text("#type option:nth-of-type(1)", t["form.option.driver"]);
  text("#type option:nth-of-type(2)", t["form.option.owner"]);
  text("#type option:nth-of-type(3)", t["form.option.other"]);
  text("#contact button", t["form.submit"]);
  text("main section:nth-of-type(1) .absolute.top-1\\/4.left-1\\/3 .font-label-sm", t["status.available"]);
  text("main section:nth-of-type(1) .absolute.top-1\\/2.right-1\\/4 .font-label-sm", t["status.occupied"]);

  text("#footer-desc", t["footer.desc"]);
  text("#footer-chip-verified", t["footer.verified"]);
  text("#footer-chip-offline", t["footer.offline"]);
  text("#footer-title-product", t["footer.product"]);
  text("#footer-title-platform", t["footer.platform"]);
  text("#footer-title-contact", t["footer.contact"]);
  text("#footer-platform-mobile", t["footer.mobile"]);
  text("#footer-platform-dashboard", t["footer.dashboard"]);
  text("#footer-platform-iot", t["footer.iot"]);
  text("#footer-platform-availability", t["footer.availability"]);
  text("#footer-academic", t["footer.academic"]);
  text("#footer-rights", t["footer.rights"]);
  text("#footer-privacy", t["footer.privacy"]);
  text("#footer-terms", t["footer.terms"]);
  text("#footer-accessibility", t["footer.accessibility"]);

  const langLabel = document.getElementById("lang-label");
  if (langLabel) langLabel.textContent = lang.toUpperCase();
  localStorage.setItem(STORAGE_KEY, lang);
}

export function setupLanguageToggle(initialLanguage) {
  let currentLanguage = initialLanguage;
  const button = document.getElementById("lang-toggle");
  if (button) {
    button.addEventListener("click", () => {
      currentLanguage = nextLanguage(currentLanguage);
      applyTranslations(currentLanguage);
    });
  }
  applyTranslations(currentLanguage);
}
