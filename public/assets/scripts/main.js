import { resolveInitialLanguage, setupLanguageToggle } from "./i18n.js?v=12";
import { mainTemplate } from "./templates.js?v=12";

async function injectPartial(id, path) {
  const t = document.getElementById(id); if (!t) return;
  t.outerHTML = await fetch(path + "?v=12").then(r => r.text());
}

function mountMain() {
  const t = document.getElementById("main-placeholder"); if (!t) return;
  t.outerHTML = mainTemplate;
}

function setupScroll() {
  const b = document.getElementById("scroll-top-btn"); if (!b) return;
  window.addEventListener("scroll", () => {
    b.classList.toggle("on", window.scrollY > 600);
  }, { passive: true });
  b.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupProgress() {
  const bar = document.createElement("div");
  bar.className = "nav-progress";
  document.body.prepend(bar);
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = Math.min(pct, 100) + "%";
  }, { passive: true });
}

function setupDemoVideo() {
  const wrap = document.querySelector('.demo-yt-wrap');
  if (!wrap) return;
  const id = wrap.dataset.yt;
  const activate = () => {
    wrap.innerHTML = `<iframe
      src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
      title="ParkingNow demo video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-full h-full absolute inset-0"
      style="border:0;width:100%;height:100%;position:absolute;inset:0"
    ></iframe>`;
  };
  wrap.addEventListener('click', activate);
  wrap.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
  wrap.addEventListener('mouseenter', () => {
    const btn = wrap.querySelector('.demo-play-btn');
    if (btn) { btn.style.transform = 'scale(1.1)'; btn.style.background = 'rgba(0,212,170,.3)'; btn.style.borderColor = 'rgba(0,212,170,.8)'; }
    const thumb = wrap.querySelector('.demo-yt-thumb');
    if (thumb) thumb.style.transform = 'scale(1.03)';
  });
  wrap.addEventListener('mouseleave', () => {
    const btn = wrap.querySelector('.demo-play-btn');
    if (btn) { btn.style.transform = ''; btn.style.background = ''; btn.style.borderColor = ''; }
    const thumb = wrap.querySelector('.demo-yt-thumb');
    if (thumb) thumb.style.transform = '';
  });
}

function setupReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -48px 0px" });

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => {
    obs.observe(el);
  });
}

(async () => {
  await injectPartial("header-placeholder", "public/_header.html");
  mountMain();
  await injectPartial("footer-placeholder", "public/_footer.html");
  setupLanguageToggle(resolveInitialLanguage());
  setupScroll();
  setupProgress();
  setupDemoVideo();
  requestAnimationFrame(() => requestAnimationFrame(setupReveal));
})();
