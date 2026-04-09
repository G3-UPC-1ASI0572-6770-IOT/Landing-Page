document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langSwitch = document.getElementById('lang-switch');
  const langCurrent = document.getElementById('lang-current');

  const i18n = {
    es: {
      page_title: 'PARKINGNOW | El fin de buscar estacionamiento',
      meta_desc: 'Reserva en segundos con tecnología IoT en tiempo real. Solución para conductores y propietarios.',
      meta_twitter_desc: 'El fin de buscar estacionamiento. Reserva en segundos.',
      nav_inicio: 'Inicio',
      nav_solucion: 'Solución',
      nav_app: 'App',
      nav_dashboard: 'Dashboard',
      nav_iot: 'IoT',
      btn_empezar: 'Empezar',
      hero_badge: 'TECNOLOGÍA EN TIEMPO REAL',
      hero_title: 'El fin de buscar <span class="text-primary text-glow">estacionamiento.</span><br/>Reserva en segundos.',
      hero_desc: 'Conectamos conductores con espacios reales mediante sensores IoT. Sin vueltas. Sin estrés. La precisión que tu ciudad necesitaba.',
      hero_btn_a: 'Descargar App',
      hero_btn_b: 'Soy Propietario',
      p_badge: 'LA CRISIS URBANA',
      p_title: 'Lima pierde <span class="text-primary">30 minutos</span> al día buscando dónde estacionar.',
      p_desc: 'Ese es tiempo que podrías pasar con tu familia, trabajando o simplemente descansando.',
      p_card1_t: 'Congestión Evitable',
      p_card1_d: 'El 30% del tráfico es generado por conductores buscando parking.',
      p_card2_t: '0 Info',
      p_card2_d: 'Sin datos reales sobre espacios libres antes de llegar.',
      p_card3_t: '3x Multas',
      p_card3_d: 'Aumento de sanciones por estacionar en zonas prohibidas por desesperación.',
      p_card4_t: 'Impacto Ambiental',
      p_card4_d: 'Reducimos las emisiones de CO2 al optimizar el trayecto final del conductor.',
      d_tag: 'PARA CONDUCTORES',
      d_title: 'Tu asistente de ruta inteligente.',
      d_f1_t: 'Guiado de precisión',
      d_f1_d: 'Navega directamente al espacio libre reservado.',
      d_f2_t: 'Pagos automáticos',
      d_f2_d: 'Olvídate de las filas y el efectivo. Todo desde la app.',
      o_tag: 'PARA PROPIETARIOS',
      o_title: 'Monetiza tu espacio sin esfuerzo.',
      o_f1_t: 'Panel de Control IoT',
      o_f1_d: 'Gestión centralizada de múltiples ubicaciones en tiempo real.',
      o_f2_t: 'Maximiza ingresos',
      o_f2_d: 'Algoritmos de precio dinámico basados en demanda.',
      iot_title: 'Magia impulsada por <span class="text-secondary text-glow">IoT.</span>',
      iot_f1_t: 'Sensores Ultrasónicos',
      iot_f1_d: 'Hardware propietario diseñado para detectar la presencia de vehículos con una precisión del 99.9% en cualquier condición climática.',
      iot_f2_t: 'Red de Baja Latencia',
      iot_f2_d: 'Protocolos de comunicación optimizados que transmiten el cambio de estado en menos de 500ms a nuestra nube central.',
      t_title: 'Lo que dicen nuestros usuarios',
      t1: '"Increíble cómo cambió mi rutina. Antes llegaba estresado a la oficina, ahora voy directo a mi lugar reservado."',
      t2: '"Como dueña de un local, ahora rento mis cocheras cuando no las uso. Un ingreso extra que no esperaba."',
      t3: '"La tecnología es impecable. El sensor nunca falla y el pago es instantáneo. 10/10."',
      t_role1: 'DRIVER PREMIUM',
      t_role2: 'OWNER',
      t_role3: 'CORPORATE USER',
      cta_t: '¿Listo para evolucionar?',
      cta_d: 'Únete a los miles de conductores que ya estacionan sin estrés.',
      cta_b: 'Únete a ParkingNow',
      f_desc: 'Transformando la infraestructura urbana a través de datos y sensores IoT.',
      f_c1: 'Empresa',
      f_c2: 'Recursos',
      f_c3: 'Legal',
      f_l1: 'Sobre Nosotros',
      f_l2: 'Carreras',
      f_l3: 'Prensa',
      f_l4: 'API',
      f_l5: 'Documentación',
      f_l6: 'Soporte',
      f_l7: 'Privacidad',
      f_l8: 'Términos',
      f_l9: 'Contacto',
      f_copy: '© 2026 PARKINGNOW. Estaciona con precisión.'
    },
    en: {
      page_title: 'PARKINGNOW | Stop searching for parking',
      meta_desc: 'Reserve in seconds with real-time IoT technology. Solution for drivers and owners.',
      meta_twitter_desc: 'No more searching for parking. Reserve in seconds.',
      nav_inicio: 'Home',
      nav_solucion: 'Solution',
      nav_app: 'App',
      nav_dashboard: 'Dashboard',
      nav_iot: 'IoT',
      btn_empezar: 'Start',
      hero_badge: 'REAL-TIME TECHNOLOGY',
      hero_title: 'No more searching for <span class="text-primary text-glow">parking.</span><br/>Reserve in seconds.',
      hero_desc: 'We connect drivers with real parking spaces through IoT sensors. No loops. No stress. The precision your city needed.',
      hero_btn_a: 'Download App',
      hero_btn_b: 'I am an Owner',
      p_badge: 'THE URBAN CRISIS',
      p_title: 'Lima loses <span class="text-primary">30 minutes</span> a day searching for parking.',
      p_desc: 'That is time you could spend with your family, working, or simply resting.',
      p_card1_t: 'Avoidable Congestion',
      p_card1_d: '30% of traffic is generated by drivers searching for parking.',
      p_card2_t: 'No Info',
      p_card2_d: 'No real data on free spaces before arriving.',
      p_card3_t: '3x Fines',
      p_card3_d: 'Increase in penalties for parking in restricted zones due to desperation.',
      p_card4_t: 'Environmental Impact',
      p_card4_d: 'We reduce CO2 emissions by optimizing the driver\'s final route.',
      d_tag: 'FOR DRIVERS',
      d_title: 'Your smart route assistant.',
      d_f1_t: 'Precision guidance',
      d_f1_d: 'Navigate directly to your reserved available spot.',
      d_f2_t: 'Automatic payments',
      d_f2_d: 'Forget lines and cash. Everything from the app.',
      o_tag: 'FOR OWNERS',
      o_title: 'Monetize your space effortlessly.',
      o_f1_t: 'IoT Control Panel',
      o_f1_d: 'Centralized management of multiple locations in real time.',
      o_f2_t: 'Maximize revenue',
      o_f2_d: 'Dynamic pricing algorithms based on demand.',
      iot_title: 'Magic powered by <span class="text-secondary text-glow">IoT.</span>',
      iot_f1_t: 'Ultrasonic Sensors',
      iot_f1_d: 'Proprietary hardware designed to detect vehicle presence with 99.9% accuracy in any weather condition.',
      iot_f2_t: 'Low-Latency Network',
      iot_f2_d: 'Optimized communication protocols that send status changes in under 500ms to our central cloud.',
      t_title: 'What our users say',
      t1: '"Amazing how it changed my routine. I used to arrive stressed at the office, now I go straight to my reserved spot."',
      t2: '"As a business owner, I now rent my parking spots when not in use. Extra income I did not expect."',
      t3: '"The technology is flawless. The sensor never fails and payment is instant. 10/10."',
      t_role1: 'PREMIUM DRIVER',
      t_role2: 'OWNER',
      t_role3: 'CORPORATE USER',
      cta_t: 'Ready to evolve?',
      cta_d: 'Join thousands of drivers already parking stress-free.',
      cta_b: 'Join ParkingNow',
      f_desc: 'Transforming urban infrastructure through data and IoT sensors.',
      f_c1: 'Company',
      f_c2: 'Resources',
      f_c3: 'Legal',
      f_l1: 'About Us',
      f_l2: 'Careers',
      f_l3: 'Press',
      f_l4: 'API',
      f_l5: 'Documentation',
      f_l6: 'Support',
      f_l7: 'Privacy',
      f_l8: 'Terms',
      f_l9: 'Contact',
      f_copy: '© 2026 PARKINGNOW. Park with precision.'
    }
  };

  const setText = (el, value, asHtml = false) => {
    if (!el || value == null) return;
    if (asHtml) el.innerHTML = value;
    else el.textContent = value;
  };

  const setLanguage = (lang) => {
    const d = i18n[lang] || i18n.es;

    document.title = d.page_title;
    const descMeta = document.querySelector('meta[name="description"]');
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    const twTitleMeta = document.querySelector('meta[name="twitter:title"]');
    const twDescMeta = document.querySelector('meta[name="twitter:description"]');
    setText(descMeta, d.meta_desc);
    if (descMeta) descMeta.setAttribute('content', d.meta_desc);
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', d.page_title);
    if (ogDescMeta) ogDescMeta.setAttribute('content', d.meta_desc);
    if (twTitleMeta) twTitleMeta.setAttribute('content', d.page_title);
    if (twDescMeta) twDescMeta.setAttribute('content', d.meta_twitter_desc);

    const nav = document.querySelectorAll('header nav a');
    setText(nav[0], d.nav_inicio);
    setText(nav[1], d.nav_solucion);
    setText(nav[2], d.nav_app);
    setText(nav[3], d.nav_dashboard);
    setText(nav[4], d.nav_iot);
    setText(document.querySelector('button[data-i18n="btn_empezar"]'), d.btn_empezar);

    const hero = document.getElementById('inicio');
    if (hero) {
      const left = hero.querySelector('.text-left');
      setText(left?.querySelector('span'), d.hero_badge);
      setText(left?.querySelector('h1'), d.hero_title, true);
      setText(left?.querySelector('p'), d.hero_desc);
      const heroBtns = left?.querySelectorAll('.flex.flex-wrap button') || [];
      setText(heroBtns[0], d.hero_btn_a);
      setText(heroBtns[1], d.hero_btn_b);
    }

    const solucion = document.getElementById('solucion');
    if (solucion) {
      setText(solucion.querySelector('.max-w-2xl > span'), d.p_badge);
      setText(solucion.querySelector('.max-w-2xl h2'), d.p_title, true);
      setText(solucion.querySelector('.max-w-sm'), d.p_desc);

      const cards = solucion.querySelectorAll('.grid > div');
      const cardMain = cards[0];
      const cardInfo = cards[1];
      const cardStats = cards[2];
      const cardImpact = cards[3];

      setText(cardMain?.querySelector('.absolute.bottom-8.left-8 h3'), d.p_card1_t);
      setText(cardMain?.querySelector('.absolute.bottom-8.left-8 p'), d.p_card1_d);
      setText(cardInfo?.querySelector('h3'), d.p_card2_t);
      setText(cardInfo?.querySelector('p'), d.p_card2_d);
      setText(document.getElementById('multas-title') || cardStats?.querySelector('h3'), d.p_card3_t);
      setText(document.getElementById('multas-desc') || cardStats?.querySelector('p'), d.p_card3_d);
      setText(cardImpact?.querySelector('h3'), d.p_card4_t);
      setText(cardImpact?.querySelector('p'), d.p_card4_d);
    }

    const app = document.getElementById('app');
    if (app) {
      const rows = app.querySelectorAll('.max-w-7xl > .grid');
      const driversText = rows[0]?.querySelector('.order-1.lg\\:order-2');
      const ownersText = rows[1]?.querySelector(':scope > div:first-child');

      setText(driversText?.querySelector('span'), d.d_tag);
      setText(driversText?.querySelector('h2'), d.d_title);
      const driverItems = driversText?.querySelectorAll('li') || [];
      setText(driverItems[0]?.querySelector('h4'), d.d_f1_t);
      setText(driverItems[0]?.querySelector('p'), d.d_f1_d);
      setText(driverItems[1]?.querySelector('h4'), d.d_f2_t);
      setText(driverItems[1]?.querySelector('p'), d.d_f2_d);

      setText(ownersText?.querySelector('span'), d.o_tag);
      setText(ownersText?.querySelector('h2'), d.o_title);
      const ownerItems = ownersText?.querySelectorAll('li') || [];
      setText(ownerItems[0]?.querySelector('h4'), d.o_f1_t);
      setText(ownerItems[0]?.querySelector('p'), d.o_f1_d);
      setText(ownerItems[1]?.querySelector('h4'), d.o_f2_t);
      setText(ownerItems[1]?.querySelector('p'), d.o_f2_d);
    }

    const iot = document.getElementById('iot');
    if (iot) {
      setText(iot.querySelector('h2'), d.iot_title, true);
      const iotGroups = iot.querySelectorAll('.space-y-8 .group');
      setText(iotGroups[0]?.querySelector('h3'), d.iot_f1_t);
      setText(iotGroups[0]?.querySelector('p'), d.iot_f1_d);
      setText(iotGroups[1]?.querySelector('h3'), d.iot_f2_t);
      setText(iotGroups[1]?.querySelector('p'), d.iot_f2_d);
    }

    const test = document.getElementById('testimonios');
    if (test) {
      setText(test.querySelector('h2'), d.t_title);
      const testCards = test.querySelectorAll('.grid > div');
      setText(testCards[0]?.querySelector('p'), d.t1);
      setText(testCards[1]?.querySelector('p'), d.t2);
      setText(testCards[2]?.querySelector('p'), d.t3);
      setText(testCards[0]?.querySelector('span'), d.t_role1);
      setText(testCards[1]?.querySelector('span'), d.t_role2);
      setText(testCards[2]?.querySelector('span'), d.t_role3);
    }

    const cta = document.getElementById('cta');
    if (cta) {
      setText(cta.querySelector('h2'), d.cta_t);
      setText(cta.querySelector('.relative.z-10 p'), d.cta_d);
      setText(cta.querySelector('button'), d.cta_b);
    }

    const footer = document.querySelector('footer');
    if (footer) {
      const cols = footer.querySelectorAll('.grid > div');
      setText(cols[0]?.querySelector('p'), d.f_desc);
      setText(cols[1]?.querySelector('h4'), d.f_c1);
      setText(cols[2]?.querySelector('h4'), d.f_c2);
      setText(cols[3]?.querySelector('h4'), d.f_c3);

      const c1 = cols[1]?.querySelectorAll('li a') || [];
      const c2 = cols[2]?.querySelectorAll('li a') || [];
      const c3 = cols[3]?.querySelectorAll('li a') || [];
      setText(c1[0], d.f_l1);
      setText(c1[1], d.f_l2);
      setText(c1[2], d.f_l3);
      setText(c2[0], d.f_l4);
      setText(c2[1], d.f_l5);
      setText(c2[2], d.f_l6);
      setText(c3[0], d.f_l7);
      setText(c3[1], d.f_l8);
      setText(c3[2], d.f_l9);

      setText(footer.querySelector('.max-w-7xl.mx-auto.px-8.mt-20.pt-8.border-t p'), d.f_copy);
    }

    html.lang = lang;
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();
    localStorage.setItem('pn_lang', lang);
  };

  setLanguage(localStorage.getItem('pn_lang') || 'es');

  if (langSwitch) {
    langSwitch.addEventListener('click', () => {
      const next = html.lang === 'es' ? 'en' : 'es';
      setLanguage(next);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const header = document.querySelector('header');
      const offset = header ? header.offsetHeight + 10 : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
});
