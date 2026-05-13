import { resolveInitialLanguage, setupLanguageToggle } from "./i18n.js";
import { mainTemplate } from "./templates.js";

async function injectPartial(placeholderId, partialPath) {
  const target = document.getElementById(placeholderId);
  if (!target) return;
  const response = await fetch(partialPath);
  target.outerHTML = await response.text();
}

function mountMain() {
  const target = document.getElementById("main-placeholder");
  if (!target) return;
  target.outerHTML = mainTemplate;
}

function setupRevealAnimations() {
  const sections = Array.from(document.querySelectorAll("main section"));
  sections.forEach((section) => section.classList.add("reveal-init"));

  const staggerGroups = [
    ...document.querySelectorAll(".grid.grid-cols-1.md\\:grid-cols-3"),
    ...document.querySelectorAll(".flex.flex-col.md\\:flex-row.items-center.justify-center.gap-gutter"),
    ...document.querySelectorAll("#faq .flex.flex-col.gap-sm")
  ];

  staggerGroups.forEach((group) => {
    Array.from(group.children).forEach((item, idx) => {
      item.classList.add("stagger-item");
      item.style.transitionDelay = `${Math.min(idx * 70, 280)}ms`;
    });
  });

  const hero = document.querySelector("main section");
  if (hero) hero.classList.add("hero-glow");

  document.querySelectorAll("main img").forEach((img) => {
    const wrapper = img.parentElement;
    if (!wrapper) return;
    if (img.closest("section") && (img.src.includes("hero.png") || img.src.includes("4.png"))) {
      wrapper.classList.add("img-sheen", "parallax-soft");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("reveal-init");
        entry.target.classList.add("reveal-show");
        entry.target.querySelectorAll(".stagger-item").forEach((node) => node.classList.add("stagger-show"));
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
  );

  sections.forEach((section) => observer.observe(section));

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    document.querySelectorAll(".parallax-soft").forEach((el, idx) => {
      const speed = 0.012 + (idx % 3) * 0.004;
      el.style.transform = `translateY(${Math.max(-8, Math.min(8, y * speed * 0.08))}px)`;
    });
  }, { passive: true });
}

function setupScrollTopButton() {
  const button = document.getElementById("scroll-top-btn");
  if (!button) return;

  const toggleVisibility = () => {
    const shouldShow = window.scrollY > 520;
    button.classList.toggle("opacity-0", !shouldShow);
    button.classList.toggle("pointer-events-none", !shouldShow);
    button.classList.toggle("translate-y-3", !shouldShow);
    button.classList.toggle("opacity-100", shouldShow);
    button.classList.toggle("pointer-events-auto", shouldShow);
    button.classList.toggle("translate-y-0", shouldShow);
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

async function bootstrap() {
  await injectPartial("header-placeholder", "public/_header.html");
  mountMain();
  await injectPartial("footer-placeholder", "public/_footer.html");

  setupLanguageToggle(resolveInitialLanguage());
  setupRevealAnimations();
  setupScrollTopButton();
}

bootstrap();
