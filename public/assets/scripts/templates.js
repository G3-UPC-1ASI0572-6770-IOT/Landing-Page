export const mainTemplate = `<main class="pt-[90px]">
<!-- 2. Hero -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl lg:py-[120px] flex flex-col lg:flex-row items-center gap-xl">
<div class="flex-1 flex flex-col gap-md">
<h1 class="font-display-lg text-display-lg text-[#00268A]">Find and reserve parking with IoT-verified availability</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    ParkingNow connects drivers with independent parking operators using real-time occupancy data from physical IoT sensors. Stop guessing. Start parking.
                </p>
<div class="flex flex-wrap items-center gap-sm pt-sm">
<button class="font-label-md text-label-md bg-[#00268A] text-white px-lg py-sm rounded-lg hover:opacity-90 transition-opacity flex items-center gap-xs">
                        Find Parking <span class="material-symbols-outlined text-[20px]">directions_car</span>
</button>
<button class="font-label-md text-label-md border-2 border-[#00ACE8] text-[#00ACE8] px-lg py-sm rounded-lg hover:bg-[#00ACE8] hover:text-white transition-colors">
                        Join as Owner
                    </button>
</div>
</div>
<div class="flex-1 w-full relative flex justify-center">
<img src="public/assets/images/hero.png" alt="Smart parking map visualization" class="w-full max-w-[560px] h-auto object-contain"/>
</div>
</section>
<!-- 3. Problem Section -->
<section id="benefits" class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low rounded-[32px] my-lg border border-surface-container-highest">
<div class="text-center mb-xl">
<h2 class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">Parking should not be a guessing game</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">The traditional parking experience is broken for both sides of the market.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-sm">
<span class="material-symbols-outlined text-[32px] text-[#FF0000]">hourglass_empty</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Drivers wasting time</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Circling blocks hoping for a spot, increasing emissions and frustration.</p>
</div>
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-sm">
<span class="material-symbols-outlined text-[32px] text-[#00ACE8]">edit_document</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Owners managing manually</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Relying on pen-and-paper or disconnected systems to track occupancy.</p>
</div>
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center">
<div class="w-16 h-16 rounded-full bg-outline-variant/30 flex items-center justify-center mb-sm">
<span class="material-symbols-outlined text-[32px] text-on-surface-variant">sync_problem</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Manual updates causing confusion</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Static data that is outdated the moment it's posted, leading to double-bookings.</p>
</div>
</div>
</section>
<!-- 4. Solution -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl my-lg">
<div class="text-center mb-xl">
<h2 class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">ParkingNow connects app, web dashboard and IoT</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">A seamless ecosystem that ensures reliable parking data for everyone.</p>
</div>
<div class="flex flex-col md:flex-row items-center justify-center gap-gutter">
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center flex-1 w-full max-w-sm">
<span class="material-symbols-outlined text-[48px] text-primary mb-sm">smartphone</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Mobile App</h3>
<p class="font-body-md text-body-md text-on-surface-variant">For drivers to find and reserve spots</p>
</div>
<span class="material-symbols-outlined text-[32px] text-outline hidden md:block">arrow_forward</span>
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center flex-1 w-full max-w-sm">
<span class="material-symbols-outlined text-[48px] text-[#00ACE8] mb-sm">cloud</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Web Dashboard</h3>
<p class="font-body-md text-body-md text-on-surface-variant">For owners to manage spaces</p>
</div>
<span class="material-symbols-outlined text-[32px] text-outline hidden md:block">arrow_forward</span>
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center flex-1 w-full max-w-sm">
<span class="material-symbols-outlined text-[48px] text-secondary mb-sm">sensors</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">IoT Sensors</h3>
<p class="font-body-md text-body-md text-on-surface-variant">For real-time occupancy verification</p>
</div>
</div>
</section>
<!-- 5. IoT Differentiator -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low rounded-[32px] my-lg border border-surface-container-highest flex flex-col md:flex-row items-center gap-xl">
<div class="flex-1 flex flex-col gap-md">
<h2 class="font-headline-lg text-headline-lg text-[#00268A]">Availability verified by physical sensors</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    Unlike other platforms that rely on manual updates or predictions, ParkingNow uses physical IoT sensors installed in each parking spot to guarantee real-time availability.
                </p>
<ul class="flex flex-col gap-sm">
<li class="flex items-center gap-sm">
<span class="material-symbols-outlined text-[#00ACE8]">check_circle</span>
<span class="font-body-md text-body-md text-on-surface">100% accurate occupancy data</span>
</li>
<li class="flex items-center gap-sm">
<span class="material-symbols-outlined text-[#00ACE8]">check_circle</span>
<span class="font-body-md text-body-md text-on-surface">Instant updates when a spot is taken or freed</span>
</li>
<li class="flex items-center gap-sm">
<span class="material-symbols-outlined text-[#00ACE8]">check_circle</span>
<span class="font-body-md text-body-md text-on-surface">No more double-bookings or wasted trips</span>
</li>
</ul>
</div>
<div class="flex-1 w-full relative h-[400px] bg-surface rounded-[24px] ambient-shadow-lvl2 p-0 border border-surface-container-highest overflow-hidden">
<div class="w-full h-full rounded-[24px] overflow-hidden bg-surface-container-low">
<img src="public/assets/images/4.png" alt="Parking spot monitoring illustration" class="w-full h-full object-cover object-center"/>
</div>
</div>
</section>
<!-- 6. For Drivers -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl my-lg" id="drivers">
<div class="flex flex-col md:flex-row items-center gap-xl">
<div class="flex-1 w-full order-2 md:order-1 flex justify-center">
<div class="w-full max-w-md bg-surface rounded-[32px] ambient-shadow-lvl2 border border-surface-container-highest p-sm">
<img src="public/assets/images/movile.png" alt="ParkingNow mobile app preview" class="w-full h-auto object-contain rounded-[24px]"/>
</div>
</div>
<div class="flex-1 flex flex-col gap-md order-1 md:order-2">
<span class="font-label-md text-label-md text-[#00ACE8] uppercase tracking-wider">For Drivers</span>
<h2 class="font-headline-lg text-headline-lg text-[#00268A]">Park with confidence</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    Open the app, see guaranteed spots, and reserve instantly. No more circling the block.
                </p>
<div class="flex flex-col gap-sm mt-sm">
<div class="bg-surface rounded-xl p-sm ambient-shadow-lvl1 border border-surface-container-highest flex gap-sm items-start">
<span class="material-symbols-outlined text-[#00ACE8]">verified</span>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface mb-xs">Guaranteed Availability</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Spots marked available are verified by IoT sensors in real-time.</p>
</div>
</div>
<div class="bg-surface rounded-xl p-sm ambient-shadow-lvl1 border border-surface-container-highest flex gap-sm items-start">
<span class="material-symbols-outlined text-[#00ACE8]">payments</span>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface mb-xs">Seamless Payment</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Pay securely through the app. No cash or tickets needed.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 7. For Parking Owners -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low rounded-[32px] my-lg border border-surface-container-highest" id="owners">
<div class="flex flex-col md:flex-row items-center gap-xl">
<div class="flex-1 flex flex-col gap-md">
<span class="font-label-md text-label-md text-[#00ACE8] uppercase tracking-wider">For Parking Owners</span>
<h2 class="font-headline-lg text-headline-lg text-[#00268A]">Maximize your parking revenue</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                    Manage your spots effortlessly with our web dashboard and automated IoT tracking.
                </p>
<div class="flex flex-col gap-sm mt-sm">
<div class="bg-surface rounded-xl p-sm ambient-shadow-lvl1 border border-surface-container-highest flex gap-sm items-start">
<span class="material-symbols-outlined text-[#00ACE8]">query_stats</span>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface mb-xs">Real-time Analytics</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Track occupancy rates, revenue, and peak hours in one place.</p>
</div>
</div>
<div class="bg-surface rounded-xl p-sm ambient-shadow-lvl1 border border-surface-container-highest flex gap-sm items-start">
<span class="material-symbols-outlined text-[#00ACE8]">automation</span>
<div>
<h4 class="font-headline-md text-headline-md text-on-surface mb-xs">Automated Management</h4>
<p class="font-body-md text-body-md text-on-surface-variant">IoT sensors update availability automatically. No manual input required.</p>
</div>
</div>
</div>
</div>
<div class="flex-1 w-full flex justify-center">
<div class="w-full max-w-lg bg-surface rounded-xl ambient-shadow-lvl2 border border-surface-container-highest overflow-hidden">
<div class="bg-surface-container-high px-sm py-xs border-b border-surface-container-highest flex gap-xs items-center">
<div class="w-3 h-3 rounded-full bg-[#FF0000]"></div>
<div class="w-3 h-3 rounded-full bg-secondary-container"></div>
<div class="w-3 h-3 rounded-full bg-[#00FF11]"></div>
</div>
<div class="p-md bg-surface">
<h4 class="font-headline-md text-headline-md mb-sm">Dashboard</h4>
<div class="grid grid-cols-2 gap-sm mb-md">
<div class="bg-surface-container-low p-sm rounded-lg border border-surface-container-highest">
<p class="font-label-sm text-label-sm text-on-surface-variant">Today's Revenue</p>
<p class="font-headline-md text-headline-md text-[#00268A]">$124.50</p>
</div>
<div class="bg-surface-container-low p-sm rounded-lg border border-surface-container-highest">
<p class="font-label-sm text-label-sm text-on-surface-variant">Current Occupancy</p>
<p class="font-headline-md text-headline-md text-[#00268A]">8/10</p>
</div>
</div>
<div class="bg-surface-container-low p-sm rounded-lg flex flex-col gap-xs border border-surface-container-highest">
<p class="font-label-md text-label-md">Live Status</p>
<div class="flex justify-between items-center bg-surface p-xs rounded border border-surface-container-highest ambient-shadow-lvl1">
<span class="font-label-sm text-label-sm">Spot 1</span>
<span class="font-label-sm text-label-sm text-[#FF0000]">Occupied</span>
</div>
<div class="flex justify-between items-center bg-surface p-xs rounded border border-surface-container-highest ambient-shadow-lvl1">
<span class="font-label-sm text-label-sm">Spot 2</span>
<span class="font-label-sm text-label-sm text-[#00FF11]">Available</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 8. Business Model -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl my-lg">
<div class="text-center mb-xl">
<h2 class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">How the ecosystem works</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Connecting parking supply with demand efficiently.</p>
</div>
<div class="flex flex-col md:flex-row items-center justify-center gap-lg">
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center w-full max-w-xs">
<span class="material-symbols-outlined text-[48px] text-tertiary mb-sm">storefront</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Parking Owner</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Parking owners join the platform to manage spaces and receive reservations.</p>
</div>
<div class="flex flex-col items-center text-[#00ACE8]">
<span class="material-symbols-outlined text-[32px]">sync_alt</span>
<span class="font-label-sm text-label-sm">Platform</span>
</div>
<div class="bg-primary text-white rounded-xl p-[20px] ambient-shadow-lvl2 flex flex-col items-center text-center w-full max-w-xs scale-105 border border-primary-container">
<span class="material-symbols-outlined text-[48px] mb-sm">hub</span>
<h3 class="font-headline-md text-headline-md mb-xs">ParkingNow Platform</h3>
<p class="font-body-sm text-body-sm opacity-90">Processes data from IoT Sensors and handles transactions</p>
</div>
<div class="flex flex-col items-center text-[#00ACE8]">
<span class="material-symbols-outlined text-[32px]">sync_alt</span>
<span class="font-label-sm text-label-sm">App</span>
</div>
<div class="bg-surface rounded-xl p-[20px] ambient-shadow-lvl1 border border-surface-container-highest flex flex-col items-center text-center w-full max-w-xs">
<span class="material-symbols-outlined text-[48px] text-secondary mb-sm">directions_car</span>
<h3 class="font-headline-md text-headline-md text-on-surface mb-xs">Driver</h3>
<p class="font-body-sm text-body-sm text-on-surface-variant">Drivers use the app to find and reserve parking with clearer availability information.</p>
</div>
</div>
</section>
<!-- 9. How It Works -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low rounded-[32px] my-lg border border-surface-container-highest" id="how-it-works">
<div class="text-center mb-xl">
<h2 class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">Simple setup, seamless experience</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-xl">
<div class="bg-surface rounded-xl p-md ambient-shadow-lvl1 border border-surface-container-highest">
<h3 class="font-headline-md text-headline-md text-[#00268A] mb-md border-b border-outline-variant pb-xs">For Drivers</h3>
<div class="flex flex-col gap-md">
<div class="flex gap-sm">
<div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Search</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Find nearby parking on the map.</p>
</div>
</div>
<div class="flex gap-sm">
<div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Verify</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Check real-time IoT availability status.</p>
</div>
</div>
<div class="flex gap-sm">
<div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Park &amp; Pay</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Drive straight to the spot and pay in-app.</p>
</div>
</div>
</div>
</div>
<div class="bg-surface rounded-xl p-md ambient-shadow-lvl1 border border-surface-container-highest">
<h3 class="font-headline-md text-headline-md text-[#00ACE8] mb-md border-b border-outline-variant pb-xs">For Owners</h3>
<div class="flex flex-col gap-md">
<div class="flex gap-sm">
<div class="w-8 h-8 rounded-full bg-[#00ACE8] text-white flex items-center justify-center font-bold shrink-0">1</div>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Register</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Sign up and list your parking locations.</p>
</div>
</div>
<div class="flex gap-sm">
<div class="w-8 h-8 rounded-full bg-[#00ACE8] text-white flex items-center justify-center font-bold shrink-0">2</div>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Install Sensors</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">We provide easy-to-install IoT sensors for each spot.</p>
</div>
</div>
<div class="flex gap-sm">
<div class="w-8 h-8 rounded-full bg-[#00ACE8] text-white flex items-center justify-center font-bold shrink-0">3</div>
<div>
<h4 class="font-label-md text-label-md text-on-surface">Earn</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant">Manage revenue and occupancy from the dashboard.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 10. Trust -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl my-lg bg-surface border border-surface-container-highest rounded-[32px] ambient-shadow-lvl1">
<div class="flex flex-col md:flex-row items-center gap-xl">
<div class="flex-1 text-center md:text-left">
<h2 class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">Designed with transparency</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-md">
                    ParkingNow is an academic project developed by UPC students with an IoT-focused approach. The interface prioritizes clear availability states and transparent messages when a sensor node is offline or not updating.
                </p>
<div class="inline-flex items-center gap-xs bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant">
<span class="material-symbols-outlined text-outline">school</span>
<span class="font-label-md text-label-md text-on-surface-variant">UPC Academic Origin</span>
</div>
</div>
<div class="flex-1 flex justify-center">
<div class="bg-surface-container-low p-md rounded-xl ambient-shadow-lvl1 border border-surface-container-highest max-w-sm">
<p class="font-body-md text-body-md text-on-surface-variant italic text-center">
                        "We believe infrastructure data should be transparent. Our offline-first sensor design ensures reliability even when networks fail."
                    </p>
</div>
</div>
</div>
</section>
<!-- 11. About -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl my-lg flex flex-col md:flex-row items-center gap-xl">
<div class="flex-1">
<div class="w-full max-w-[620px] mx-auto md:mx-0 rounded-[28px] overflow-hidden border border-surface-container-highest ambient-shadow-lvl2 bg-surface">
<div class="aspect-[4/3]">
<img src="public/assets/images/codemongoduito.png" alt="Code Mondoguito team" class="w-full h-full object-cover object-center"/>
</div>
</div>
</div>
<div class="flex-1">
<span class="font-label-md text-label-md text-[#00ACE8] uppercase tracking-wider">About Us</span>
<h2 class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">Code Mondoguito</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-md">
                    We are a team of passionate engineers and designers dedicated to solving urban mobility challenges through smart IoT solutions.
                </p>
</div>
</section>
<!-- 12. Contact Form -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low rounded-[32px] my-lg border border-surface-container-highest" id="contact" aria-labelledby="contact-title">
<div class="flex flex-col md:flex-row gap-xl">
<div class="flex-1">
<h2 id="contact-title" class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">Get in touch</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-lg">Have questions about joining as an owner or using the app? We're here to help.</p>
<div class="bg-surface rounded-xl p-md ambient-shadow-lvl1 border border-surface-container-highest mb-md">
<div class="flex items-center gap-sm mb-sm">
<span class="material-symbols-outlined text-[#00ACE8]">mail</span>
<div>
<p class="font-label-md text-label-md text-on-surface">Email</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">hello@parkingnow.com</p>
</div>
</div>
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-[#00ACE8]">location_on</span>
<div>
<p class="font-label-md text-label-md text-on-surface">Location</p>
<p class="font-body-sm text-body-sm text-on-surface-variant">UPC Campus, Lima</p>
</div>
</div>
</div>
</div>
<div class="flex-[1.5] bg-surface rounded-[24px] p-lg ambient-shadow-lvl2 border border-surface-container-highest">
<form class="flex flex-col gap-md">
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs" for="name">Name</label>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-sm py-2 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="name" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs" for="email">Email</label>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-sm py-2 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="email" type="email"/>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs" for="type">User Type</label>
<select class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-sm py-2 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="type">
<option>Driver</option>
<option>Parking Owner</option>
<option>Other</option>
</select>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs" for="district">District</label>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-sm py-2 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="district" type="text"/>
</div>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs" for="message">Message</label>
<textarea class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-sm py-2 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none" id="message" rows="4"></textarea>
</div>
<button class="font-label-md text-label-md bg-[#00268A] text-white px-lg py-sm rounded-lg hover:opacity-90 transition-opacity self-start">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>
<!-- 13. FAQ -->
<section class="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-xl my-lg" id="faq">
<div class="text-center mb-xl">
<h2 id="faq-title" class="font-headline-lg text-headline-lg text-[#00268A] mb-sm">Frequently Asked Questions</h2>
</div>
<div class="flex flex-col gap-sm">
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    1. How does ParkingNow know if a space is available?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    Our sensors provide near 100% accuracy, updating in real-time as soon as a vehicle enters or leaves a spot.
                </div>
</details>
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    2. What does IoT Verified mean?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    It means the parking spot has a physical sensor installed that communicates its status directly to our platform, rather than relying on manual updates or predictions.
                </div>
</details>
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    3. Can I reserve before arriving?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    Yes, you can reserve a guaranteed spot through the mobile app before you reach your destination.
                </div>
</details>
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    4. How do parking owners join ParkingNow?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    Parking owners can sign up through our website, request sensor installation, and begin managing their spaces via the web dashboard. Payments are processed securely and deposited directly into your linked bank account.
                </div>
</details>
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    5. What happens if an IoT node is offline?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    We monitor sensor health remotely and will clearly display transparent messages if a node is offline or not updating, ensuring drivers aren't misled.
                </div>
</details>
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    6. What are reference-only parking spaces?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    These are spaces listed on our platform that do not yet have IoT sensors installed. We provide them for reference, but their real-time availability cannot be guaranteed.
                </div>
</details>
<details class="bg-surface rounded-xl ambient-shadow-lvl1 border border-surface-container-highest group">
<summary class="font-headline-md text-headline-md text-on-surface p-md cursor-pointer list-none flex justify-between items-center">
                    7. How does sensor installation work?
                    <span class="material-symbols-outlined text-[#00ACE8] group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div class="px-md pb-md font-body-md text-body-md text-on-surface-variant">
                    Contact us for a custom quote based on the number of spots and location specifics. We handle the physical installation and setup.
                </div>
</details>
</div>
</section>
<!-- 14. Final CTA -->
<section class="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl lg:py-[120px] bg-surface-container-low rounded-[32px] my-lg relative overflow-hidden border border-surface-container-highest ambient-shadow-lvl1">
<div class="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00ACE8] rounded-full blur-[100px] opacity-10"></div>
<div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#00ACE8] rounded-full blur-[100px] opacity-10"></div>
<div class="relative z-10 flex flex-col lg:flex-row items-center gap-xl">
<div class="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
<h2 class="font-display-lg text-[40px] md:text-display-lg leading-tight mb-sm text-[#00268A]">Ready to park smarter?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-xl">
                Find available spaces before arriving, or bring your parking business online with IoT-verified availability.
            </p>
<div class="flex flex-col sm:flex-row items-center gap-md mb-lg w-full sm:w-auto">
<button class="w-full sm:w-auto font-label-md text-label-md bg-[#00268A] text-white px-xl py-sm rounded-lg hover:opacity-90 transition-opacity shadow-md">
                    Find Parking
                </button>
<button class="w-full sm:w-auto font-label-md text-label-md border-2 border-[#00268A] text-[#00268A] bg-white px-xl py-sm rounded-lg hover:bg-surface-container-highest transition-colors">
                    Join as Parking Owner
                </button>
</div>
<div class="flex flex-wrap justify-center lg:justify-start gap-sm">
<span class="inline-flex items-center gap-xs bg-surface px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant border border-surface-container-highest ambient-shadow-lvl1">
<span class="material-symbols-outlined text-[16px] text-[#00ACE8]">bolt</span> Real-time updates
                </span>
<span class="inline-flex items-center gap-xs bg-surface px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant border border-surface-container-highest ambient-shadow-lvl1">
<span class="material-symbols-outlined text-[16px] text-[#00ACE8]">near_me</span> Fast reservations
                </span>
<span class="inline-flex items-center gap-xs bg-surface px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant border border-surface-container-highest ambient-shadow-lvl1">
<span class="material-symbols-outlined text-[16px] text-[#00ACE8]">dashboard</span> Owner dashboard
                </span>
</div>
</div>
<!-- Visual Map Card Detail -->
<div class="flex-1 w-full flex justify-center relative">
<div class="absolute inset-0 bg-[#00ACE8]/5 rounded-full blur-3xl scale-150"></div>
<img src="public/assets/images/iotdesing.png" alt="IoT design preview" class="w-full max-w-[560px] h-auto object-contain relative z-10"/>
</div></div></section>
<button id="scroll-top-btn" class="fixed bottom-6 right-6 z-[80] w-12 h-12 rounded-full bg-[#00268A] text-white ambient-shadow-lvl2 opacity-0 pointer-events-none translate-y-3 transition-all duration-300 hover:bg-[#001e70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ACE8]" aria-label="Back to top" type="button">
<span class="material-symbols-outlined text-[22px]">arrow_upward</span>
</button>
</main>`;
