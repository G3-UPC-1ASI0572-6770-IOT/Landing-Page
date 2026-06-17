const W = "https://parkingnow-frontend.vercel.app";
const D = "#drivers";

export const mainTemplate = `<main class="pt-16">

<!-- ====== 1. HERO ====== -->
<section class="hero-dark relative overflow-hidden pt-16" aria-label="Hero">
  <!-- Gradient mesh orbs — NO GRID -->
  <div class="hero-mesh" aria-hidden="true">
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>
    <div class="hero-orb hero-orb-3"></div>
    <div class="hero-noise"></div>
  </div>

  <div class="max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 lg:pt-36 lg:pb-44 relative z-10">
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

      <!-- Left col -->
      <div class="lg:col-span-6 lg:pt-4">
        <div class="flex flex-wrap items-center gap-2.5 mb-8 reveal">
          <span class="st-pill-dark"><span class="st-dot pulse-dot st-live" style="background:var(--teal)"></span> Live · NODE_01</span>
          <span class="st-pill-dark">v1.0 MVP</span>
        </div>

        <h1 data-i18n-html="hero.title"
            class="font-display text-[44px] sm:text-[58px] md:text-[70px] leading-[1.05] font-bold tracking-[-.03em] mb-6 text-white reveal d1">
          Parking, <span class="text-grd">verified</span><br class="hidden sm:block"/> by physical sensors.
        </h1>

        <p data-i18n="hero.subtitle"
           class="text-[18px] md:text-[20px] leading-[1.65] max-w-lg mb-10 font-light reveal d2"
           style="color:var(--snow-muted)">
          ParkingNow connects drivers with parking operators using real-time occupancy data from IoT sensors. Stop guessing. Start parking.
        </p>

        <div class="flex flex-wrap items-center gap-3 mb-14 reveal d3">
          <a id="hero-cta-find" href="${D}" class="btn-hero btn-hero-pri">
            <span data-i18n="hero.cta.find">Find parking</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a id="hero-cta-owner" href="${W}" class="btn-hero btn-hero-sec" data-i18n="hero.cta.owner" rel="noopener">Join as owner</a>
        </div>

        <dl class="mgrid-dark max-w-md reveal d4">
          <div><dt data-i18n="hero.stat.spaces">Live spaces</dt><dd>2</dd></div>
          <div><dt data-i18n="hero.stat.heartbeat">Heartbeat</dt><dd>30<small>s</small></dd></div>
          <div><dt data-i18n="hero.stat.accuracy">Sensor accuracy</dt><dd>~100<small>%</small></dd></div>
        </dl>
      </div>

      <!-- Right col -->
      <div class="lg:col-span-6 lg:pt-2 reveal-right d2">
        <div class="relative">
          <div class="absolute -inset-6 rounded-3xl pointer-events-none"
               style="background:radial-gradient(circle at 50% 40%,var(--teal-glow),transparent 65%);filter:blur(40px)">
          </div>
          <div class="relative card-dark p-3">
            <img src="public/assets/images/hero.png"
                 alt="ParkingNow app showing live parking availability map"
                 class="w-full h-auto block rounded-xl"
                 loading="eager"/>
          </div>
          <!-- Floating sensor panel -->
          <div class="absolute -bottom-4 -left-4 s-panel-dark max-w-[280px] float-anim"
               style="box-shadow:0 20px 60px rgba(0,0,0,.55)">
            <div class="s-head-dark">
              <div class="os-dots"><span></span><span></span><span></span></div>
              <span class="st-live flex items-center gap-1.5"
                    style="font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.06em">
                <span class="st-dot pulse-dot" style="background:var(--teal)"></span>live
              </span>
            </div>
            <div class="s-row-dark">
              <div class="flex items-center gap-2"><span class="s-id-dark">E1</span></div>
              <span class="s-st st-live"><span class="st-dot" style="background:var(--teal)"></span>Free</span>
            </div>
            <div class="s-row-dark">
              <div class="flex items-center gap-2"><span class="s-id-dark">E2</span></div>
              <span class="s-st st-occ"><span class="st-dot" style="background:#ff4757"></span>Occupied</span>
            </div>
          </div>
        </div>

        <!-- Terminal block -->
        <div class="term-dark mt-8 reveal d5">
<span class="cm"># Live IoT event stream</span><br/>
<span class="kw">$</span> curl -X POST <span class="st">/api/v1/iot/events</span> \\<br/>
&nbsp;&nbsp;-H <span class="st">"X-IoT-Key: $IOT_KEY"</span> \\<br/>
&nbsp;&nbsp;-d <span class="st">'{"space":"E1","status":"FREE"}'</span><br/>
<span class="ok">→ 201 { processed: true }</span>
        </div>
      </div>

    </div>
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
       style="background:linear-gradient(to bottom,transparent,#fff)">
  </div>
</section>

<!-- ====== 2. PROBLEM ====== -->
<section id="benefits" class="sec relative overflow-hidden">
  <div class="absolute inset-0" style="background:linear-gradient(180deg,#fff 0%,var(--lt-bg) 50%,#fff 100%)"></div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-12 gap-8 mb-16 md:mb-20">
      <div class="lg:col-span-5 reveal-left">
        <span class="eyebrow"><span data-i18n="prob.eyebrow">The problem</span></span>
        <h2 data-i18n="prob.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4">
          Parking should not be a guessing game.
        </h2>
        <span class="section-accent"></span>
      </div>
      <div class="lg:col-span-6 lg:col-start-7 self-end reveal-right d1">
        <p data-i18n="prob.subtitle"
           class="text-[17px] leading-[1.7] text-ink-muted font-light">
          The traditional parking experience is broken for both sides of the market. Drivers circle endlessly. Owners track occupancy on paper. The data gap wastes time for everyone.
        </p>
      </div>
    </div>

    <div class="fgrid">
      <div class="reveal d1" style="border-top:3px solid #ff4757">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
             style="background:linear-gradient(135deg,#fff0f2,#ffe0e5)">
          <svg class="w-7 h-7" style="color:#ff4757" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <span class="n">01</span>
        <h3 data-i18n="prob.c1.title" class="font-display font-bold text-[21px] text-ink-navy mt-3 mb-3">Drivers waste time</h3>
        <p data-i18n="prob.c1.desc" class="text-[15px] text-ink-muted leading-[1.75]">Circling blocks hoping for a spot, increasing emissions, fuel costs, and frustration.</p>
      </div>
      <div class="reveal d2" style="border-top:3px solid var(--amber)">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
             style="background:linear-gradient(135deg,#fffbeb,#fef3c7)">
          <svg class="w-7 h-7" style="color:var(--amber)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
          </svg>
        </div>
        <span class="n">02</span>
        <h3 data-i18n="prob.c2.title" class="font-display font-bold text-[21px] text-ink-navy mt-3 mb-3">Owners manage manually</h3>
        <p data-i18n="prob.c2.desc" class="text-[15px] text-ink-muted leading-[1.75]">Relying on pen-and-paper or disconnected systems to track occupancy.</p>
      </div>
      <div class="reveal d3" style="border-top:3px solid var(--teal)">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
             style="background:linear-gradient(135deg,#edfaf6,#ccf5ea)">
          <svg class="w-7 h-7" style="color:var(--teal)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
          </svg>
        </div>
        <span class="n">03</span>
        <h3 data-i18n="prob.c3.title" class="font-display font-bold text-[21px] text-ink-navy mt-3 mb-3">Stale data misleads</h3>
        <p data-i18n="prob.c3.desc" class="text-[15px] text-ink-muted leading-[1.75]">Information outdated the moment it's posted, leading to double-bookings and wasted trips.</p>
      </div>
    </div>
  </div>
</section>

<!-- ====== 3. ARCHITECTURE ====== -->
<section class="sec soft">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-8 mb-12">
      <div class="lg:col-span-7 reveal-left">
        <span class="eyebrow"><span class="sep">02</span> <span data-i18n="arch.eyebrow">The architecture</span></span>
        <h2 data-i18n="arch.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4">
          Three layers, one source of truth.
        </h2>
        <span class="section-accent"></span>
      </div>
      <div class="lg:col-span-5 self-end reveal-right d1">
        <p data-i18n="arch.subtitle" class="text-[17px] leading-[1.7] text-ink-muted font-light">
          Sensors at the edge, API at the core, app and dashboard on top.
        </p>
      </div>
    </div>

    <div class="space-y-px bg-ink-line border border-ink-line rounded-2xl overflow-hidden reveal">
      <div class="arch-row p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
        <div class="arch-num md:col-span-1 font-display text-[48px] font-bold leading-none text-ink-line" style="letter-spacing:-.03em">
          01
        </div>
        <div class="md:col-span-4">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-5 h-5" style="color:var(--teal)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
            </svg>
            <h3 data-i18n="arch.r1.title" class="font-display font-bold text-[22px] text-ink-navy">Mobile app</h3>
          </div>
          <p data-i18n="arch.r1.stack" class="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Flutter · Driver</p>
        </div>
        <div data-i18n="arch.r1.desc" class="md:col-span-7 text-[15px] text-ink-soft leading-[1.7]">
          For drivers to find nearby parking on a live map, check real-time availability, and reserve a spot before arriving. Built with flutter_map + OpenStreetMap.
        </div>
      </div>
      <div class="arch-row p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
        <div class="arch-num md:col-span-1 font-display text-[48px] font-bold leading-none text-ink-line" style="letter-spacing:-.03em">
          02
        </div>
        <div class="md:col-span-4">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-5 h-5 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.41A2.25 2.25 0 012.25 5.494V5.25"/>
            </svg>
            <h3 data-i18n="arch.r2.title" class="font-display font-bold text-[22px] text-ink-navy">Web dashboard</h3>
          </div>
          <p data-i18n="arch.r2.stack" class="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Angular 20 · Owner</p>
        </div>
        <div data-i18n="arch.r2.desc" class="md:col-span-7 text-[15px] text-ink-soft leading-[1.7]">
          For owners to register their lot, manage spaces, view live occupancy, monitor revenue. Real-time updates via Supabase Realtime.
        </div>
      </div>
      <div class="arch-row p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
        <div class="arch-num md:col-span-1 font-display text-[48px] font-bold leading-none text-ink-line" style="letter-spacing:-.03em">
          03
        </div>
        <div class="md:col-span-4">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-5 h-5" style="color:var(--amber)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"/>
            </svg>
            <h3 data-i18n="arch.r3.title" class="font-display font-bold text-[22px] text-ink-navy">IoT sensors</h3>
          </div>
          <p data-i18n="arch.r3.stack" class="font-mono text-[11px] uppercase tracking-wider text-ink-muted">ESP32-CAM · Edge</p>
        </div>
        <div data-i18n="arch.r3.desc" class="md:col-span-7 text-[15px] text-ink-soft leading-[1.7]">
          For real-time occupancy verification. Ultrasonic sensors detect vehicles, debounce readings, and stream events through a Flask edge gateway.
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-px border border-ink-line bg-ink-line rounded-2xl overflow-hidden mt-3 reveal d1">
      <div class="bg-white p-6 hover:bg-ink-subtle transition-colors cursor-default">
        <div class="font-mono text-[10px] uppercase tracking-[.12em] text-ink-dim">Sensor</div>
        <div class="font-display font-bold text-[18px] text-ink-navy mt-1.5">HC-SR04+</div>
      </div>
      <div class="bg-white p-6 hover:bg-ink-subtle transition-colors cursor-default">
        <div class="font-mono text-[10px] uppercase tracking-[.12em] text-ink-dim">Debounce</div>
        <div class="font-display font-bold text-[18px] text-ink-navy mt-1.5">3 readings</div>
      </div>
      <div class="bg-white p-6 hover:bg-ink-subtle transition-colors cursor-default">
        <div class="font-mono text-[10px] uppercase tracking-[.12em] text-ink-dim">Threshold</div>
        <div class="font-display font-bold text-[18px] text-ink-navy mt-1.5">&lt; 20 cm</div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 4. IOT DIFFERENTIATOR ====== -->
<section class="sec relative overflow-hidden" style="background:var(--midnight)">
  <div class="hero-orb" style="width:600px;height:600px;background:radial-gradient(circle,rgba(0,212,170,.12) 0%,transparent 65%);top:-100px;right:-100px;position:absolute;border-radius:50%;filter:blur(80px)"></div>
  <div class="hero-orb" style="width:400px;height:400px;background:radial-gradient(circle,rgba(251,191,36,.08) 0%,transparent 65%);bottom:-80px;left:-80px;position:absolute;border-radius:50%;filter:blur(60px)"></div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div class="lg:col-span-6 reveal-left">
        <span class="eyebrow-dark"><span data-i18n="iot.eyebrow">The differentiator</span></span>
        <h2 data-i18n="iot.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-white leading-[1.06] mt-4 mb-6">
          Availability verified by<br/>physical sensors.
        </h2>
        <p data-i18n="iot.subtitle"
           class="text-[17px] leading-[1.7] mb-10 max-w-lg font-light"
           style="color:var(--snow-muted)">
          Unlike platforms that rely on manual updates, ParkingNow uses IoT sensors in each spot to guarantee real-time data.
        </p>
        <ul class="blist" style="--lt-border:rgba(255,255,255,.07)">
          <li style="border-bottom:1px solid rgba(255,255,255,.07)">
            <span class="n" style="color:var(--teal)">01</span>
            <div>
              <strong data-i18n="iot.f1.title" class="font-semibold text-white block">~100% accurate occupancy</strong>
              <span data-i18n="iot.f1.desc" class="text-[14px] leading-[1.6]" style="color:var(--snow-muted)">HC-SR04+ ultrasonic readings with 3-reading debounce per slot.</span>
            </div>
          </li>
          <li style="border-bottom:1px solid rgba(255,255,255,.07)">
            <span class="n" style="color:var(--teal)">02</span>
            <div>
              <strong data-i18n="iot.f2.title" class="font-semibold text-white block">Instant propagation</strong>
              <span data-i18n="iot.f2.desc" class="text-[14px] leading-[1.6]" style="color:var(--snow-muted)">Changes reach the driver in under a second through Supabase Realtime.</span>
            </div>
          </li>
          <li style="border-bottom:none">
            <span class="n" style="color:var(--teal)">03</span>
            <div>
              <strong data-i18n="iot.f3.title" class="font-semibold text-white block">Honest, not optimistic</strong>
              <span data-i18n="iot.f3.desc" class="text-[14px] leading-[1.6]" style="color:var(--snow-muted)">The system shows the real state, including when a node is offline.</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-6 reveal-right d1">
        <div class="card-glass overflow-hidden" style="padding:0">
          <img src="public/assets/images/4.png"
               alt="Sensor detection diagram showing HC-SR04+ ultrasonic distance measurement"
               class="w-full h-auto block"
               loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 5. FOR DRIVERS ====== -->
<section id="drivers" class="sec">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div class="lg:col-span-5 order-2 lg:order-1 reveal-left d1">
        <div class="relative">
          <div class="absolute -inset-6 rounded-3xl blur-3xl opacity-25"
               style="background:linear-gradient(135deg,rgba(0,212,170,.3),rgba(251,191,36,.15))">
          </div>
          <div class="relative card p-3 max-w-[420px] mx-auto"
               style="box-shadow:0 20px 60px rgba(0,212,170,.08)">
            <img src="public/assets/images/movile.png"
                 alt="ParkingNow mobile app screenshot showing live parking map"
                 class="w-full h-auto block rounded-xl"
                 loading="lazy"/>
          </div>
        </div>
      </div>
      <div class="lg:col-span-7 order-1 lg:order-2 reveal-right">
        <span class="eyebrow"><span data-i18n="drv.eyebrow">For drivers</span></span>
        <h2 data-i18n="drv.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4 mb-5">
          Park with confidence.
        </h2>
        <span class="section-accent"></span>
        <p data-i18n="drv.subtitle"
           class="text-[17px] leading-[1.7] text-ink-muted mb-10 max-w-xl font-light mt-6">
          Open the app, see guaranteed spots, and reserve instantly. No more circling the block.
        </p>
        <ul class="blist">
          <li>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background:linear-gradient(135deg,#edfaf6,#ccf5ea)">
              <svg class="w-5 h-5" style="color:var(--teal)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
              </svg>
            </div>
            <div>
              <strong data-i18n="drv.f1.title" class="font-semibold text-ink-navy block">Guaranteed availability</strong>
              <span data-i18n="drv.f1.desc" class="text-[14px] text-ink-muted leading-[1.65]">Spots marked available are verified by IoT sensors in real time.</span>
            </div>
          </li>
          <li>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background:linear-gradient(135deg,#fffbeb,#fef3c7)">
              <svg class="w-5 h-5" style="color:var(--amber)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
              </svg>
            </div>
            <div>
              <strong data-i18n="drv.f2.title" class="font-semibold text-ink-navy block">Seamless payment</strong>
              <span data-i18n="drv.f2.desc" class="text-[14px] text-ink-muted leading-[1.65]">Pay securely through the app. No cash, no paper tickets.</span>
            </div>
          </li>
          <li>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background:linear-gradient(135deg,#f0f5ff,#dbeafe)">
              <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.533-1.828L21 21M16.5 3L21 7.5M3 21l4.5-4.5M12 3v1m0 16v1m-8-5h1m16 0h1"/>
              </svg>
            </div>
            <div>
              <strong data-i18n="drv.f3.title" class="font-semibold text-ink-navy block">Offline transparency</strong>
              <span data-i18n="drv.f3.desc" class="text-[14px] text-ink-muted leading-[1.65]">If a sensor node is offline, the app tells you. Stale data is never shown as live.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ====== 6. FOR OWNERS ====== -->
<section id="owners" class="sec soft">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      <div class="lg:col-span-7 reveal-left">
        <span class="eyebrow"><span data-i18n="own.eyebrow">For parking owners</span></span>
        <h2 data-i18n="own.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4 mb-5">
          Maximize your parking revenue.
        </h2>
        <span class="section-accent"></span>
        <p data-i18n="own.subtitle"
           class="text-[17px] leading-[1.7] text-ink-muted mb-10 max-w-xl font-light mt-6">
          Manage your spots effortlessly with our web dashboard and automated IoT tracking.
        </p>
        <ul class="blist">
          <li>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background:linear-gradient(135deg,#edfaf6,#ccf5ea)">
              <svg class="w-5 h-5" style="color:var(--teal)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
              </svg>
            </div>
            <div>
              <strong data-i18n="own.f1.title" class="font-semibold text-ink-navy block">Real-time analytics</strong>
              <span data-i18n="own.f1.desc" class="text-[14px] text-ink-muted leading-[1.65]">Track occupancy rate, daily revenue, and peak hours. Donut and bar charts update live.</span>
            </div>
          </li>
          <li>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background:linear-gradient(135deg,#fffbeb,#fef3c7)">
              <svg class="w-5 h-5" style="color:var(--amber)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
              </svg>
            </div>
            <div>
              <strong data-i18n="own.f2.title" class="font-semibold text-ink-navy block">Automated management</strong>
              <span data-i18n="own.f2.desc" class="text-[14px] text-ink-muted leading-[1.65]">IoT sensors update availability automatically. Reservations auto-consume on arrival.</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="lg:col-span-5 reveal-right d1">
        <div class="dash" style="box-shadow:0 16px 48px rgba(0,212,170,.07)">
          <div class="dash-head">
            <div>
              <span class="font-mono text-[10px] uppercase tracking-[.12em] text-ink-dim">Dashboard</span>
              <br/>
              <span class="font-display font-bold text-[15px] text-ink-navy">Central · Live</span>
            </div>
            <span class="st-pill"><span class="st-dot pulse-dot st-live" style="background:var(--teal)"></span>Online</span>
          </div>
          <div class="dash-body space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div class="m-card">
                <div class="m-label">Revenue · today</div>
                <div class="m-val">S/. 124<span class="text-lg font-normal text-ink-dim">.50</span></div>
                <div class="spark">
                  <span style="height:30%"></span><span style="height:55%"></span>
                  <span style="height:42%"></span><span style="height:78%"></span>
                  <span style="height:60%"></span><span style="height:90%"></span>
                  <span style="height:100%"></span>
                </div>
              </div>
              <div class="m-card">
                <div class="m-label">Occupancy</div>
                <div class="m-val">8<span class="text-lg font-normal text-ink-dim">/10</span></div>
                <div class="spark">
                  <span style="height:60%"></span><span style="height:70%"></span>
                  <span style="height:65%"></span><span style="height:85%"></span>
                  <span style="height:70%"></span><span style="height:80%"></span>
                  <span style="height:75%"></span>
                </div>
              </div>
            </div>
            <div>
              <div class="m-label mb-3">Live status</div>
              <div class="crow"><div class="lb"><span class="st-dot" style="background:#ff4757"></span>Spot 1</div><span class="mt">Occupied · 14m</span></div>
              <div class="crow"><div class="lb"><span class="st-dot" style="background:var(--teal)"></span>Spot 2</div><span class="mt">Free</span></div>
              <div class="crow"><div class="lb"><span class="st-dot" style="background:var(--amber)"></span>Spot 3</div><span class="mt">Reserved · 12m</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 7. ECOSYSTEM ====== -->
<section class="sec" style="background:#f2f7ff;border-top:1px solid #dde8f8;border-bottom:1px solid #dde8f8">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-8 mb-16">
      <div class="lg:col-span-7 reveal-left">
        <span class="eyebrow"><span data-i18n="eco.eyebrow">The ecosystem</span></span>
        <h2 data-i18n="eco.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4">
          Connecting supply with demand.
        </h2>
        <span class="section-accent"></span>
      </div>
      <div class="lg:col-span-5 self-end reveal-right d1">
        <p data-i18n="eco.subtitle" class="text-[17px] leading-[1.7] text-ink-muted font-light">
          Three actors, one real-time network. IoT sensor data bridges parking operators with drivers in under a second.
        </p>
      </div>
    </div>

    <div class="eco-wrap reveal d1">
      <!-- Owner card -->
      <div class="eco-card eco-card-owner">
        <span data-i18n="eco.own.role" class="eco-role eco-role-owner">Supply</span>
        <div class="eco-icon-wrap eco-icon-teal">
          <svg class="w-6 h-6" style="color:#00a888" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"/>
          </svg>
        </div>
        <h3 data-i18n="eco.own.title" class="font-display font-bold text-[22px] text-ink-navy mb-2">Parking owner</h3>
        <p data-i18n="eco.own.desc" class="text-[14px] text-ink-muted leading-[1.7] mb-auto">Registers their lot, installs IoT sensors per space, and receives verified reservations from nearby drivers via the web dashboard.</p>
        <ul class="eco-features eco-feature-teal">
          <li data-i18n="eco.own.f1">Register spaces on the map</li>
          <li data-i18n="eco.own.f2">Install HC-SR04+ per slot</li>
          <li data-i18n="eco.own.f3">Monitor revenue live</li>
        </ul>
      </div>

      <!-- Connector left → center -->
      <div class="eco-connector">
        <span class="eco-conn-label">IoT events<br/>30 s cycle</span>
        <div class="eco-conn-line">
          <div class="eco-dot eco-dot-teal"></div>
          <div class="eco-dot eco-dot-indigo eco-dot-2"></div>
        </div>
        <span class="eco-conn-arrow">↓</span>
      </div>

      <!-- Platform hub -->
      <div class="eco-card eco-card-platform">
        <span data-i18n="eco.plat.role" class="eco-role eco-role-platform">Platform</span>
        <div class="eco-icon-wrap eco-icon-platform">
          <svg class="w-6 h-6" style="color:rgba(255,255,255,.85)" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"/>
          </svg>
        </div>
        <h3 data-i18n="eco.plat.title" class="font-display font-bold text-[22px] text-white mb-2">ParkingNow Platform</h3>
        <p data-i18n="eco.plat.desc" class="text-[14px] leading-[1.7] mb-auto" style="color:var(--snow-muted)">
          Processes sensor events, manages reservations and payments, and broadcasts real-time slot availability to all connected drivers.
        </p>
        <div class="eco-metrics">
          <div><dt>Events/sec</dt><dd>~40</dd></div>
          <div><dt>Propagation</dt><dd>&lt; 1s</dd></div>
          <div><dt>Uptime</dt><dd>99.9%</dd></div>
          <div><dt>Accuracy</dt><dd>~100%</dd></div>
        </div>
        <div class="eco-stack">
          <span>Supabase RT</span>
          <span>Spring Boot</span>
          <span>Flask Edge</span>
          <span>ESP32-CAM</span>
        </div>
      </div>

      <!-- Connector center → right -->
      <div class="eco-connector">
        <span class="eco-conn-arrow">↓</span>
        <div class="eco-conn-line">
          <div class="eco-dot eco-dot-teal"></div>
          <div class="eco-dot eco-dot-amber eco-dot-2"></div>
        </div>
        <span class="eco-conn-label">live map<br/>reservations</span>
      </div>

      <!-- Driver card -->
      <div class="eco-card eco-card-driver">
        <span data-i18n="eco.drv.role" class="eco-role eco-role-driver">Demand</span>
        <div class="eco-icon-wrap eco-icon-amber">
          <svg class="w-6 h-6" style="color:#d97706" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
          </svg>
        </div>
        <h3 data-i18n="eco.drv.title" class="font-display font-bold text-[22px] text-ink-navy mb-2">Driver</h3>
        <p data-i18n="eco.drv.desc" class="text-[14px] text-ink-muted leading-[1.7] mb-auto">
          Opens the mobile app, sees IoT-verified availability on a live map, reserves a confirmed spot, and pays before arriving.
        </p>
        <ul class="eco-features eco-feature-amber">
          <li data-i18n="eco.drv.f1">Find IoT-verified spots</li>
          <li data-i18n="eco.drv.f2">Reserve 15 min ahead</li>
          <li data-i18n="eco.drv.f3">Pay &amp; park in-app</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ====== 8. HOW IT WORKS ====== -->
<section id="how-it-works" class="sec relative overflow-hidden">
  <div class="absolute inset-0"
       style="background:linear-gradient(180deg,#fff 0%,rgba(237,250,246,.3) 50%,#fff 100%)">
  </div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="mb-12 reveal">
      <span class="eyebrow"><span class="sep">07</span> <span data-i18n="how.eyebrow">How it works</span></span>
      <h2 data-i18n="how.title"
          class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4">
        Simple setup, seamless experience.
      </h2>
      <span class="section-accent"></span>
    </div>
    <div class="grid md:grid-cols-2 gap-px bg-ink-line border border-ink-line rounded-2xl overflow-hidden reveal d1">
      <div class="p-8 md:p-10" style="background:linear-gradient(160deg,#edfaf6,#fff 60%)">
        <span data-i18n="how.drv.label"
              class="font-mono text-[10px] uppercase tracking-[.14em] text-ink-dim mb-6 block">
          Drivers
        </span>
        <div class="space-y-7">
          <div class="flex gap-4 items-start">
            <div class="step-num step-num-teal">01</div>
            <div>
              <strong data-i18n="how.drv.s1.title" class="font-semibold text-ink-navy block text-[16px]">Search</strong>
              <span data-i18n="how.drv.s1.desc" class="text-[13.5px] text-ink-muted leading-[1.6]">Find nearby parking on the live map. Verified lots show real availability.</span>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="step-num step-num-teal">02</div>
            <div>
              <strong data-i18n="how.drv.s2.title" class="font-semibold text-ink-navy block text-[16px]">Verify</strong>
              <span data-i18n="how.drv.s2.desc" class="text-[13.5px] text-ink-muted leading-[1.6]">Check IoT status before you arrive. Know exactly which spots are free.</span>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="step-num step-num-teal">03</div>
            <div>
              <strong data-i18n="how.drv.s3.title" class="font-semibold text-ink-navy block text-[16px]">Park &amp; pay</strong>
              <span data-i18n="how.drv.s3.desc" class="text-[13.5px] text-ink-muted leading-[1.6]">Drive straight to the spot and pay in-app. The sensor confirms arrival.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8 md:p-10" style="background:linear-gradient(160deg,#fffbeb,#fff 60%)">
        <span data-i18n="how.own.label"
              class="font-mono text-[10px] uppercase tracking-[.14em] text-ink-dim mb-6 block">
          Owners
        </span>
        <div class="space-y-7">
          <div class="flex gap-4 items-start">
            <div class="step-num step-num-amber">01</div>
            <div>
              <strong data-i18n="how.own.s1.title" class="font-semibold text-ink-navy block text-[16px]">Register</strong>
              <span data-i18n="how.own.s1.desc" class="text-[13.5px] text-ink-muted leading-[1.6]">Sign up on the web dashboard and list your parking location with GPS.</span>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="step-num step-num-amber">02</div>
            <div>
              <strong data-i18n="how.own.s2.title" class="font-semibold text-ink-navy block text-[16px]">Install sensors</strong>
              <span data-i18n="how.own.s2.desc" class="text-[13.5px] text-ink-muted leading-[1.6]">Plug in the IoT sensor for each spot. Link the node, go live in minutes.</span>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="step-num step-num-amber">03</div>
            <div>
              <strong data-i18n="how.own.s3.title" class="font-semibold text-ink-navy block text-[16px]">Earn</strong>
              <span data-i18n="how.own.s3.desc" class="text-[13.5px] text-ink-muted leading-[1.6]">Manage revenue and occupancy from a single dashboard. Data, not spreadsheets.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 9. TRUST ====== -->
<section class="sec soft">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-6 reveal-left">
        <span class="eyebrow"><span data-i18n="trust.eyebrow">Trust</span></span>
        <h2 data-i18n="trust.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4 mb-5">
          Designed with transparency.
        </h2>
        <span class="section-accent"></span>
        <p data-i18n="trust.subtitle"
           class="text-[17px] leading-[1.7] text-ink-muted mb-8 max-w-xl font-light mt-6">
          An academic project developed by UPC students with an IoT-focused approach. The interface prioritizes clear states and transparent messages when a node is offline.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="st-pill"><span class="st-dot" style="background:var(--midnight)"></span><span id="trust-chip-academic">UPC Academic Origin</span></span>
          <span class="st-pill"><span class="st-dot" style="background:#8aaccc"></span><span data-i18n="trust.chip.open">Open Source</span></span>
        </div>
      </div>
      <div class="lg:col-span-5 lg:col-start-8 reveal-right d1">
        <div class="quote">
          <p data-i18n="trust.quote">Infrastructure data should be transparent. Our offline-first sensor design ensures reliability even when networks fail.</p>
        </div>
        <div class="mt-8 pt-6 border-t flex items-center justify-between" style="border-color:var(--lt-border)">
          <span class="font-display font-bold text-[15px] text-ink-navy">Code Mondoguito</span>
          <span class="font-mono text-[10.5px] uppercase tracking-wider text-ink-dim">2026</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 10. ABOUT ====== -->
<section class="sec relative overflow-hidden">
  <div class="absolute inset-0 opacity-40"
       style="background:linear-gradient(135deg,rgba(0,212,170,.06) 0%,transparent 50%,rgba(251,191,36,.04) 100%)">
  </div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div class="lg:col-span-6 reveal-left">
        <div class="card overflow-hidden" style="box-shadow:0 20px 60px rgba(0,0,0,.07)">
          <img src="public/assets/images/codemongoduito.png"
               alt="Code Mondoguito team — UPC students building ParkingNow"
               class="w-full h-auto block"
               loading="lazy"/>
        </div>
      </div>
      <div class="lg:col-span-6 reveal-right d1">
        <span class="eyebrow"><span data-i18n="about.eyebrow">About</span></span>
        <h2 data-i18n="about.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4 mb-5">
          Code Mondoguito.
        </h2>
        <span class="section-accent"></span>
        <p data-i18n="about.subtitle"
           class="text-[17px] leading-[1.7] text-ink-muted mb-8 max-w-lg font-light mt-6">
          A team of engineers and designers dedicated to solving urban mobility challenges through smart IoT solutions.
        </p>
        <div class="mgrid max-w-sm">
          <div><dt data-i18n="about.stat.course">Course</dt><dd style="font-size:22px">1ASI0572</dd></div>
          <div><dt data-i18n="about.stat.univ">University</dt><dd style="font-size:22px">UPC</dd></div>
          <div><dt data-i18n="about.stat.year">Year</dt><dd style="font-size:22px">2026</dd></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 11. DEMO ====== -->
<section class="sec soft">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid lg:grid-cols-12 gap-8 mb-12 reveal">
      <div class="lg:col-span-7">
        <span class="eyebrow"><span data-i18n="demo.eyebrow">Product demo</span></span>
        <h2 data-i18n="demo.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4">
          ParkingNow in one flow.
        </h2>
        <span class="section-accent"></span>
      </div>
      <div class="lg:col-span-5 self-end">
        <p data-i18n="demo.subtitle" class="text-[16px] text-ink-muted leading-[1.7] font-light">
          Sensor detection, reservation, payment, QR ticket, and admin monitoring in a single walkthrough.
        </p>
      </div>
    </div>

    <div class="aspect-video rounded-2xl overflow-hidden reveal d1 demo-yt-wrap"
         style="box-shadow:0 24px 80px rgba(0,0,0,.18);position:relative;background:#000;cursor:pointer"
         data-yt="tHhihtn1FUU"
         role="button"
         tabindex="0"
         aria-label="Play ParkingNow demo video">
      <!-- Thumbnail layer -->
      <img src="https://i.ytimg.com/vi/tHhihtn1FUU/maxresdefault.jpg"
           onerror="this.src='https://i.ytimg.com/vi/tHhihtn1FUU/hqdefault.jpg'"
           alt="ParkingNow demo — sensor detection to payment flow"
           class="w-full h-full object-cover absolute inset-0 demo-yt-thumb"
           style="transition:transform .4s cubic-bezier(.16,1,.3,1),opacity .3s"/>
      <!-- Dark overlay -->
      <div class="absolute inset-0" style="background:rgba(4,12,27,.45);transition:background .3s" aria-hidden="true"></div>
      <!-- Noise -->
      <div class="absolute inset-0 hero-noise" aria-hidden="true"></div>
      <!-- Play button -->
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-5 relative z-10">
        <div class="demo-play-btn" style="width:80px;height:80px;border-radius:50%;background:rgba(0,212,170,.18);border:2px solid rgba(0,212,170,.5);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);transition:transform .25s,background .25s,border-color .25s">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="margin-left:4px;color:var(--teal)" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        <div>
          <div data-i18n="demo.badge" class="font-mono text-[11px] uppercase tracking-[.15em] mb-2 text-center" style="color:rgba(255,255,255,.5)">Demo · MVP v1.0</div>
          <p data-i18n="demo.ph" class="font-display font-bold text-[18px] max-w-sm mx-auto text-center" style="color:rgba(255,255,255,.9)">Sensor detection → reservation → payment → QR ticket → admin monitoring.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ====== 12. CONTACT ====== -->
<section id="contact" class="sec relative overflow-hidden" aria-labelledby="contact-title">
  <div class="absolute inset-0" style="background:linear-gradient(180deg,#fff 0%,var(--lt-bg) 50%,#fff 100%)"></div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-20">
      <div class="lg:col-span-5 reveal-left">
        <span class="eyebrow"><span data-i18n="contact.eyebrow">Contact</span></span>
        <h2 id="contact-title" data-i18n="contact.title"
            class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4 mb-5">
          Get in touch.
        </h2>
        <span class="section-accent"></span>
        <p data-i18n="contact.subtitle"
           class="text-[17px] leading-[1.7] text-ink-muted mb-12 max-w-md font-light mt-6">
          Have questions about joining as an owner or using the app? We read every message.
        </p>
        <div class="space-y-6">
          <div class="pb-6 border-b" style="border-color:var(--lt-border)">
            <span data-i18n="contact.email.lbl"
                  class="font-mono text-[10.5px] uppercase tracking-[.14em] text-ink-dim block mb-2">Email</span>
            <a href="mailto:contact@codemondoguito.com"
               class="block text-[18px] text-ink-navy font-semibold hover:text-teal transition-colors">
              contact@codemondoguito.com
            </a>
          </div>
          <div>
            <span data-i18n="contact.loc.lbl"
                  class="font-mono text-[10.5px] uppercase tracking-[.14em] text-ink-dim block mb-2">Location</span>
            <span class="block text-[18px] text-ink-navy font-semibold">UPC Campus, Lima</span>
          </div>
        </div>
      </div>
      <div class="lg:col-span-7 reveal-right d1">
        <form class="card p-8 md:p-10 space-y-6"
              style="box-shadow:0 20px 60px rgba(0,0,0,.06)"
              onsubmit="event.preventDefault()">
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label data-i18n="contact.f.name.lbl"
                     class="block font-mono text-[11px] uppercase tracking-[.1em] text-ink-muted mb-2"
                     for="name">Name</label>
              <input id="name" type="text" data-i18n-ph="contact.f.name.ph" placeholder="Your name" autocomplete="name" required/>
            </div>
            <div>
              <label data-i18n="contact.f.email.lbl"
                     class="block font-mono text-[11px] uppercase tracking-[.1em] text-ink-muted mb-2"
                     for="email">Email</label>
              <input id="email" type="email" data-i18n-ph="contact.f.email.ph" placeholder="you@example.com" autocomplete="email" required/>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label data-i18n="contact.f.type.lbl"
                     class="block font-mono text-[11px] uppercase tracking-[.1em] text-ink-muted mb-2"
                     for="type">User type</label>
              <select id="type">
                <option>Driver</option>
                <option>Parking owner</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label data-i18n="contact.f.dist.lbl"
                     class="block font-mono text-[11px] uppercase tracking-[.1em] text-ink-muted mb-2"
                     for="district">District</label>
              <input id="district" type="text" data-i18n-ph="contact.f.dist.ph" placeholder="Miraflores, San Isidro"/>
            </div>
          </div>
          <div>
            <label data-i18n="contact.f.msg.lbl"
                   class="block font-mono text-[11px] uppercase tracking-[.1em] text-ink-muted mb-2"
                   for="message">Message</label>
            <textarea id="message" rows="4" data-i18n-ph="contact.f.msg.ph" placeholder="Tell us about what you're looking for." required></textarea>
          </div>
          <div class="flex items-center justify-between pt-1">
            <span data-i18n="contact.f.resp"
                  class="font-mono text-[10.5px] uppercase tracking-wider text-ink-dim">
              Response within 24h
            </span>
            <button id="contact-submit"
                    class="btn btn-pri cursor-pointer"
                    type="submit">
              <span data-i18n="contact.f.send">Send message</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ====== 13. FAQ ====== -->
<section id="faq" class="sec soft">
  <div class="max-w-3xl mx-auto px-6">
    <div class="mb-12 reveal">
      <span class="eyebrow"><span data-i18n="faq.eyebrow">FAQ</span></span>
      <h2 data-i18n="faq.title" id="faq-title"
          class="font-display text-[32px] md:text-[46px] font-bold text-ink-navy leading-[1.06] mt-4">
        Frequently asked questions.
      </h2>
      <span class="section-accent"></span>
    </div>
    <div class="reveal d1">
      <details class="faq-q"><summary><span data-i18n="faq.q1">How does ParkingNow know if a space is available?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a1" class="a">Our sensors provide near 100% accuracy, updating in real time as soon as a vehicle enters or leaves a spot.</div></details>
      <details class="faq-q"><summary><span data-i18n="faq.q2">What does IoT verified mean?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a2" class="a">The parking spot has a physical sensor installed that communicates its status directly to our platform, rather than relying on manual updates or predictions.</div></details>
      <details class="faq-q"><summary><span data-i18n="faq.q3">Can I reserve before arriving?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a3" class="a">Yes. You can reserve a guaranteed spot through the mobile app before you reach your destination. Reservations are held for 15 minutes.</div></details>
      <details class="faq-q"><summary><span data-i18n="faq.q4">How do parking owners join?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a4" class="a">Parking owners can sign up through our website, request sensor installation, and manage spaces via the web dashboard.</div></details>
      <details class="faq-q"><summary><span data-i18n="faq.q5">What happens if an IoT node is offline?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a5" class="a">We monitor sensor health and display transparent messages if a node is offline. The edge gateway buffers events locally and syncs when connection returns.</div></details>
      <details class="faq-q"><summary><span data-i18n="faq.q6">What are reference-only parking spaces?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a6" class="a">Spaces listed without IoT sensors. We provide them for reference, but real-time availability cannot be guaranteed and they are marked clearly.</div></details>
      <details class="faq-q"><summary><span data-i18n="faq.q7">How does sensor installation work?</span><span class="faq-chev">+</span></summary><div data-i18n="faq.a7" class="a">Contact us for a custom quote. We handle the physical installation, network setup, and dashboard configuration end to end.</div></details>
    </div>
  </div>
</section>

<!-- ====== 14. FINAL CTA ====== -->
<section class="sec relative overflow-hidden" style="background:var(--midnight)">
  <div class="absolute inset-0" style="background:radial-gradient(ellipse 80% 60% at 20% 50%,rgba(0,212,170,.15),transparent 60%),radial-gradient(ellipse 60% 80% at 80% 50%,rgba(251,191,36,.08),transparent 60%)"></div>
  <div class="hero-noise absolute inset-0"></div>
  <div class="max-w-6xl mx-auto px-6 relative z-10">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div class="lg:col-span-7 reveal-left">
        <span class="eyebrow-dark"><span data-i18n="fin.eyebrow">Ready to launch</span></span>
        <h2 data-i18n="fin.title"
            class="font-display text-[40px] md:text-[58px] font-bold leading-[1.0] mt-4 mb-6 tracking-[-.04em] text-white">
          Ready to park smarter?
        </h2>
        <p data-i18n="fin.subtitle"
           class="text-[18px] leading-[1.65] max-w-lg mb-10 font-light"
           style="color:var(--snow-muted)">
          Find available spaces before arriving, or bring your parking business online with IoT-verified availability. Built and tested in Lima.
        </p>
        <div class="flex flex-wrap items-center gap-3">
          <a href="${D}" class="btn-hero btn-hero-pri">
            <span data-i18n="fin.cta.find">Find parking</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="${W}" class="btn-hero btn-hero-sec" data-i18n="fin.cta.owner" rel="noopener">Join as owner</a>
        </div>
      </div>
      <div class="lg:col-span-5 reveal-right d2">
        <div class="card-glass overflow-hidden">
          <div class="p-3">
            <img src="public/assets/images/iotdesing.png"
                 alt="IoT sensor node ESP32-CAM — the hardware behind ParkingNow"
                 class="w-full h-auto block rounded-lg"
                 loading="lazy"/>
          </div>
          <div class="px-5 py-4 flex items-center justify-between"
               style="border-top:1px solid rgba(255,255,255,.07);color:var(--snow-dim);font-size:12px">
            <span>The IoT node · ESP32-CAM</span>
            <span class="font-mono">v1.0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<button id="scroll-top-btn" class="sc-top" aria-label="Back to top" type="button">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
</main>`;
