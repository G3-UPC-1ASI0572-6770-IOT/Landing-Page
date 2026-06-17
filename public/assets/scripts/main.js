import { resolveInitialLanguage, setupLanguageToggle } from "./i18n.js?v=9";
import { mainTemplate } from "./templates.js?v=9";

async function injectPartial(id, path) {
  const t = document.getElementById(id); if (!t) return;
  t.outerHTML = await fetch(path + "?v=9").then(r => r.text());
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
  requestAnimationFrame(() => requestAnimationFrame(setupReveal));
})();
