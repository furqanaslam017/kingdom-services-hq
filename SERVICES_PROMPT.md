# WINDSURF PROMPT — KINGDOM COME SERVICES
## Services Section — Complete Upgrade
## Stack: Next.js 15 + TypeScript + Tailwind CSS v4 + GSAP + Framer Motion

---

## CONTEXT

Replace the entire `app/services/page.tsx` and supporting components with a premium, futuristic dark-theme services section. The existing `app/services/layout.tsx` must stay unchanged (it already has correct metadata). Do NOT modify any other pages.

Keep the global CSS variables and design system intact. This section uses ONLY the blue/navy/white palette defined below — NO purple, NO gold anywhere in these components.

---

## COLOR THEME (Override previous gold theme — this section uses blue/white)

```css
:root {
  --blue-950: #020917;
  --blue-900: #050E1F;
  --blue-800: #0A1628;
  --blue-700: #0D1F3C;
  --blue-600: #102848;
  --blue-500: #0E3A6E;
  --blue-accent: #1E6FFF;
  --blue-bright: #3B8EFF;
  --blue-glow: rgba(30, 111, 255, 0.15);
  --cyan-accent: #00D4FF;
  --white-100: #F0F4FF;
  --white-60: rgba(240, 244, 255, 0.6);
  --white-20: rgba(240, 244, 255, 0.2);
  --white-10: rgba(240, 244, 255, 0.08);
  --border-subtle: rgba(30, 111, 255, 0.2);
  --border-bright: rgba(30, 111, 255, 0.5);
}
```

**Fonts:** Bebas Neue for headings (already loaded globally as `font-display`). DM Sans for body (already loaded globally). Use Tailwind classes `font-display` for headings and `font-sans` for body.

---

## SECTION ORDER (Top to Bottom — TIGHT, zero wasted space between sections)

```
1. INTRO HERO BANNER — "Residential Junk Removal Services"
2. TRUST MARQUEE — Dual-direction scrolling stats strip
3. WHAT WE REMOVE — 14-category interactive tab system
4. BEFORE & AFTER — Parallax image comparison cards
5. HOW IT WORKS — 5-step process timeline
6. WHY CHOOSE US — 5 feature cards
7. BOOKING CTA — Final call to action
```

---

## SUB-SECTION 1 — INTRO HERO BANNER

**Layout:** Full-width, `py-20 px-6 md:px-12 lg:px-16`  
**Background:** `bg-[--blue-950]` with faint radial glow: `background: radial-gradient(ellipse 60% 40% at 10% 20%, rgba(30,111,255,0.08) 0%, transparent 70%)`

**Left side (60% width on lg):**

- **Eyebrow tag:** `"JACKSON, MS · 30–50 MILE RADIUS"` — small pill, `border border-[--border-bright] text-[--blue-bright] text-xs tracking-[0.3em] px-4 py-1 rounded-full uppercase`
- **Main heading:** `"Full-Service\nJunk Removal\n& Moving."` — `font-display`, `text-6xl md:text-7xl lg:text-8xl leading-none text-white`
  - GSAP SplitText or manual character/line split: each line slides up from `translateY(40px) opacity:0` with stagger `0.15s` on page load
- **Body paragraph:** `"We're not your average crew. Kingdom Come Services delivers professional, no-nonsense junk removal and moving services across Jackson, Mississippi and surrounding areas. 4 years. 3 men. Zero shortcuts. We remove everything from household clutter, yard debris, and construction debris. Same-day service available."` — `font-sans`, `text-lg text-[--white-60] max-w-xl leading-relaxed`
- **Stats row** (3 inline stats, flex row, gap-6):
  - `"4+"` / `"Years Active"` — number in `text-[--blue-bright] font-bold text-3xl`, label in `text-xs text-[--white-60] uppercase tracking-wider`
  - `"3"` / `"Man Crew"`
  - `"50mi"` / `"Max Radius"`
  - Divider: `w-px h-8 bg-[--white-20]` between each
- **CTA row:** flex gap-4
  - `"Get Free Quote"` — `bg-[--blue-accent] hover:bg-[--blue-bright] text-white px-6 py-3 rounded-xl font-semibold text-sm` → links to `/booking`
  - `"Call Now"` — `border border-[--border-bright] text-[--blue-bright] hover:bg-[--blue-glow] px-6 py-3 rounded-xl font-semibold text-sm` → `href="tel:+16015551234"`

**Right side (40% width on lg, hidden below lg):**

- Large futuristic status card: `rounded-2xl bg-[--white-10] border border-[--border-subtle] p-6`
- Inside: 3 stacked horizontal glowing progress bars (simulate "service status"):
  - `"Truck En Route"` — bar 85% filled, `bg-[--blue-accent]`, track `bg-[--white-10]`
  - `"Loading Complete"` — bar 100% filled, `bg-[--cyan-accent]`
  - `"Area Cleared"` — bar 60% filled, `bg-[--blue-bright]`
  - Labels: `text-xs text-[--white-60]` above each bar
- Below bars: two metric pills in flex row gap-2:
  - `"Same-Day Service"` — `bg-[--blue-700] border border-[--border-subtle] text-[--white-100] text-xs px-3 py-1 rounded-full`
  - `"Free Estimate"` — same style
- Framer Motion: this card has a subtle floating animation `y: [0, -8, 0]` on infinite loop, duration 4s ease-in-out

**GSAP ScrollTrigger:** Entire section fades in from `opacity:0` → `opacity:1` on viewport entry.

---

## SUB-SECTION 2 — TRUST MARQUEE

**Full-width strip, NO side padding. Sections flow directly together.**  
**Background:** `bg-[--blue-800] border-y border-[--border-subtle]`  
**Height:** `py-4`

**CSS infinite marquee (TWO rows — opposite directions):**

Row 1 (scrolls LEFT, `animation: marquee-left 25s linear infinite`):
```
✓ Same-Day Service Available  ·  ✓ Free Estimates  ·  ✓ 3-Man Professional Crew  ·  ✓ Jackson MS Based  ·  ✓ No Hidden Fees  ·  ✓ Fully Insured  ·  ✓ Residential & Commercial  ·  ✓ 4+ Years Experience  ·
```

Row 2 (scrolls RIGHT, `animation: marquee-right 20s linear infinite`):
```
→ Junk Removal  ·  → Moving Services  ·  → Furniture Hauling  ·  → Construction Debris  ·  → Scrap Metal  ·  → Appliance Removal  ·  → Packing & Loading  ·  → Yard Cleanup  ·
```

- Row 1 text: `text-white text-sm font-medium`
- Row 2 text: `text-[--blue-bright] text-sm`
- Separator dots: `text-[--border-bright]` `mx-3`
- Each row content must be duplicated at least 2× so the loop is seamless

**Required CSS (inject via a `<style jsx>` block or inline styles — do NOT create a new global CSS file):**
```css
@keyframes marquee-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes marquee-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
```

Use `whitespace-nowrap` on each span. The track must be `display: flex; width: max-content;`.

---

## SUB-SECTION 3 — WHAT WE REMOVE (Interactive Tabs)

**Background:** `bg-[--blue-950] py-20 px-6 md:px-12 lg:px-16`

**Section header:**
- Eyebrow: `"WHAT WE HAUL AWAY"` — `text-[--blue-bright] text-xs tracking-[0.4em] uppercase`
- Title: `"We'll Get Rid of\nAlmost Anything."` — `font-display`, `text-5xl md:text-6xl lg:text-7xl text-white leading-tight`
- Sub: `"We haul just about anything from your home or property — no hazardous materials. Not sure? Just call us."` — `text-[--white-60] text-lg max-w-2xl mt-4`

**Tab Navigation:**

14 tab buttons in a `flex flex-wrap gap-2` row. On mobile: `overflow-x-auto flex-nowrap` with scrollbar hidden.

Tab labels:
```
Appliances | BBQ Grills | Carpets & Rugs | Furniture | Mattresses | Pianos | Pool Tables | Construction | Electronics | Exercise Equipment | Playsets & Trampolines | Refrigerators | Tires & Wheels | Televisions
```

**Tab button style:**
- Default: `bg-[--white-10] border border-[--border-subtle] text-[--white-60] text-sm px-5 py-2 rounded-full cursor-pointer whitespace-nowrap`
- Active: `bg-[--blue-accent] border-[--blue-accent] text-white`
- Hover: `border-[--border-bright] text-white`
- Transition: `transition-all duration-200`

**Tab Content Area** — Framer Motion `AnimatePresence` with `mode="wait"`. Each tab change: fade+slide (current exits to right, new enters from left).

Each tab panel shows:
- Left (40% on desktop, full width on mobile): Category icon (48px, `text-[--blue-accent]`), category title (`font-display text-3xl text-white`), intro paragraph (`text-[--white-60] leading-relaxed`)
- Right (60% on desktop): 3-column grid of item pills (each pill: `bg-[--white-10] border border-[--border-subtle] text-[--white-60] text-xs px-3 py-1.5 rounded-full cursor-default text-center`)

### TAB CONTENT DATA (adapted from rapidjunkremoval.com for Kingdom Come Services):

**Tab 1: Appliances**
- Icon: `Zap` (Lucide)
- Title: `"Appliance Removal"`
- Text: `"From small kitchen gadgets to full-size washers and dryers — we lift, load, and send everything off for eco-friendly disposal. We make sure your appliances are properly recycled, donated, or responsibly disposed of."`
- Items (3-col grid):
  ```
  Air Conditioner | Freezers | Microwaves | Dishwashers | Stoves | Ovens
  Cooktops | Trash Compactors | Wine Coolers | Washer | Dryer | Dehumidifier
  Refrigerator | Water Heater | Furnace | Toaster Oven | Blender | Coffee Maker
  Fan | Space Heater | Vacuums | Sewing Machine | Lamp | Wood Burning Stove
  Outdoor Grill | Outdoor Fireplace/Pit
  ```

**Tab 2: BBQ Grills**
- Icon: `Flame`
- Title: `"BBQ Grill Removal"`
- Text: `"Outdoor grills, smokers, table-top grills — we donate what we can and responsibly dispose of the rest."`
- Items:
  ```
  Gas Grills | Propane Grills | Charcoal Grills | Rotisserie Grills | Smokers | Commercial Grills
  Flat Top Grills | Hibachi Grills | Outdoor Built-In Grills | Pizza Ovens | Table Top Grills | Camping Grills
  ```

**Tab 3: Carpets & Rugs**
- Icon: `Layers`
- Title: `"Carpet & Rug Removal"`
- Text: `"Residential or commercial carpeting, indoor/outdoor rugs and padding — we remove them all, no mess left behind."`
- Items:
  ```
  Carpeting | Carpet Padding | Carpet Tiles | Carpet Runners | Throw Rugs | Area Rugs
  Ruggables | Carpet Remnants | Commercial Carpeting | Industrial Carpeting | Outdoor Carpeting | Indoor/Outdoor Carpeting
  ```

**Tab 4: Furniture**
- Icon: `Armchair`
- Title: `"Furniture Removal"`
- Text: `"Heavy, bulky, awkward — we expertly navigate corners and stairs to remove any furniture from any room. We donate, recycle, or responsibly dispose. We even do curbside pickups and offer same-day service."`
- Items (show first 24 by default, with a `"Show More"` button that reveals the rest using Framer Motion `AnimatePresence`):
  ```
  Couch | Loveseat | Sofa | Chairs | Recliner | Rocker | End Table | Coffee Table
  Dining Room Table | Kitchen Table | Bench | Desk | Hutch | Bookcase | Filing Cabinet
  Dresser | Nightstand | Mattress | Box Spring | Futon | Armoire | TV Stand
  Entertainment Center | Sectional Sofa | Daybed | Patio Furniture | Sleeper Sofa | Ottoman
  Sofa Table | Card Table | Stool | Cabinet | Cupboard | Wardrobe | Chest
  Headboards/Footboard | Cot | China Cabinet | Roll-a-way Bed
  ```
  Plus commercial items (revealed on Show More):
  ```
  Commercial Filing Cabinets | Cabinetry | Credenza | Office Desk | Conference Table
  Wall Partitions | Artwork | Office Furniture | Breakroom Furniture | Fixtures
  Reception Furniture | Shelving | Cubicles | Desk Chairs
  ```

**Tab 5: Mattresses**
- Icon: `BedDouble`
- Title: `"Mattress Removal & Recycling"`
- Text: `"We specialize in removing all unwanted mattresses, bed frames, and bedroom furniture — recycled the right way."`
- Items:
  ```
  Mattresses | Foam Mattresses | Latex Mattresses | Air Mattresses | Water Beds | Bunkbed Mattresses
  Hospital Bed Mattresses | Futon Mattresses | Box Springs | Canopy Bed Mattresses
  ```

**Tab 6: Pianos**
- Icon: `Music`
- Title: `"Piano & Organ Removal"`
- Text: `"From baby grands to digital keyboards — we take them all and whenever possible find a second home for them through donation."`
- Items:
  ```
  Upright Pianos | Baby Grand Pianos | Console Pianos | Spinet Pianos | Electric Organs | Keyboards
  ```

**Tab 7: Pool Tables**
- Icon: `Table2`
- Title: `"Pool Table Removal"`
- Text: `"Heavy slate, bulky frames, and awkward disassembly — we handle it all. Your old pool table will be properly recycled or donated whenever possible."`
- Items:
  ```
  Upright Pool Tables | Bar Box Pool Tables | Tournament Pool Tables | Pool Table Slate
  Pool Table Felt | Pool Table Rails | Pool Table Pockets | Pool Table Legs | Pool Table Lights
  Pool Table Covers | Cue Racks | Pool Cues
  ```

**Tab 8: Construction Debris**
- Icon: `HardHat`
- Title: `"Construction Debris Removal"`
- Text: `"We clear your job site fast. Drywall, tile, wood, concrete — everything that's left after the build."`
- Items:
  ```
  Drywall / Sheetrock | Windows | Doors | Stone / Gravel | Concrete | Fencing
  Plywood / Wood | Wood Flooring | Tile | Laminate | Bathtubs | Vanities
  Brick | Plaster | Carpeting | Appliances
  ```

**Tab 9: Electronics**
- Icon: `Monitor`
- Title: `"Electronics Removal"`
- Text: `"Earth-friendly e-waste recycling and disposal. From phones and laptops to printers and gaming systems — we haul it all."`
- Items:
  ```
  Flat Screen TVs | Tube TVs | Computers | Laptops | Tablets | Monitors
  Printers | Scanners | Projectors | Cameras | Stereos | Speakers
  Gaming Systems | Xbox | Nintendo | Routers | Modems | Copy Machines
  Fax Machines | Hard Drives | Phones | Smart TVs | Plasma TVs | LED/OLED TVs
  ```

**Tab 10: Exercise Equipment**
- Icon: `Dumbbell`
- Title: `"Exercise Equipment Removal"`
- Text: `"From small cardio steppers to full home gym setups — we make sure your gear is properly recycled or donated."`
- Items:
  ```
  Rowing Machines | Treadmills | Stair Steppers | Weight Benches | Weights | Ellipticals
  Exercise Bikes | Punching Bags | Pilates Machines | Home Gym Gear | Exercise Balls | Mats
  Ski Ergs | Weight Bars | Cardio Equipment
  ```

**Tab 11: Playsets & Trampolines**
- Icon: `Trees`
- Title: `"Playset & Trampoline Removal"`
- Text: `"Reclaim your yard. We safely dismantle and remove old swing sets, trampolines, playhouses and jungle gyms — no matter how weathered or rusted."`
- Items:
  ```
  Playsets | Swing Sets | Trampolines | Playhouses | Tree Houses | Wooden Playsets
  Metal Swing Sets | Jungle Gyms | Slides | Merry Go Rounds | Commercial Playgrounds | Climbing Walls
  ```

**Tab 12: Refrigerators**
- Icon: `Refrigerator` (or use `Thermometer` if unavailable)
- Title: `"Refrigerator & Freezer Removal"`
- Text: `"From dorm fridges to commercial walk-ins — we lift, load, and send them off for earth-friendly disposal. Properly recycled, donated, or responsibly disposed."`
- Items:
  ```
  Refrigerators | Iceboxes | Freezers | Commercial Refrigeration Units | Commercial Freezers
  Side by Side Refrigerators | Wine Coolers | Beer Fridges | Ice Machines | Deep Freezers | Dorm Fridges
  ```

**Tab 13: Tires, Rims & Wheels**
- Icon: `CircleDot` (or `Disc`)
- Title: `"Tire, Rim & Wheel Removal"`
- Text: `"From bicycles to semi-trucks — we haul, load, and recycle all tires and wheels. Don't risk damage to your vehicle or spend money on a dumpster rental."`
- Items:
  ```
  Bicycle Tires | Auto Tires | Truck Tires | Motorcycle Tires | ATV Tires | 4-Wheeler Tires
  Van Tires | Wheels | Rims | Lawnmower Tires
  ```

**Tab 14: Televisions**
- Icon: `Tv`
- Title: `"Television Removal & Recycling"`
- Text: `"Television disposal can be complicated — the components within can be hazardous. We maneuver around tight corners and make sure to dispose of your TV properly. Same-day and next-day service available."`
- Items:
  ```
  Flat Screen TVs | Tube TVs | 3D TVs | Smart TVs | Plasma TVs | Projection TVs
  Console TVs | HD & UHD TVs | LED & OLED TVs | Computers | Laptops | Tablets
  Monitors | Printers | Scanners | Projectors
  ```

---

## SUB-SECTION 4 — BEFORE & AFTER (Parallax Cards)

**Background:** `bg-[--blue-900] py-20 px-6 md:px-12 lg:px-16`

**Section header:**
- Eyebrow: `"REAL RESULTS"` — `text-[--blue-bright] text-xs tracking-[0.4em] uppercase`
- Title: `"Before & After."` — `font-display text-5xl md:text-6xl lg:text-7xl text-white text-center`

**Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12`

**3 Parallax Before/After Cards:**

Each card:
```
bg-[--blue-800] rounded-2xl overflow-hidden border border-[--border-subtle]
hover:border-[--border-bright] hover:-translate-y-2 transition-all duration-300
```

Card structure:
- Top half: "BEFORE" label in red-tinted pill `bg-red-900/30 text-red-300 text-xs px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-2`
  - Placeholder image area: `bg-[--blue-700] h-40 w-full relative overflow-hidden`
  - Add a subtle CSS diagonal stripe pattern using `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(240,244,255,0.03) 10px, rgba(240,244,255,0.03) 20px)` on the placeholder
  - Caption below placeholder: e.g. `"Garage packed with 15 years of debris"` — `text-sm text-[--white-60] mt-2 px-4`
- Bottom half: "AFTER" label in green-tinted pill `bg-green-900/30 text-green-300 text-xs px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-2 mt-4`
  - Placeholder: `bg-[--blue-600] h-40 w-full relative overflow-hidden` with same stripe pattern
  - Caption: e.g. `"Cleared in 90 minutes. Spotless."` — `text-sm text-[--white-60] mt-2 px-4`
- Footer bar: `border-t border-[--border-subtle] mt-4 px-4 py-3 flex justify-between items-center`
  - Location: `"Jackson, MS"` — `text-xs text-[--white-60]`
  - Service tag: `"Full Junk Removal"` — `text-xs text-[--blue-bright] bg-[--blue-700] px-2 py-0.5 rounded-full`

**3 Card scenarios:**
1. BEFORE caption: `"Garage packed with 15 years of debris"` → AFTER caption: `"Cleared in 90 minutes. Spotless."` → Location: `"Jackson, MS"` → Service: `"Full Junk Removal"`
2. BEFORE caption: `"Apartment move-out with abandoned furniture"` → AFTER caption: `"Everything hauled. Ready for new tenant."` → Location: `"Ridgeland, MS"` → Service: `"Move-Out Cleanout"`
3. BEFORE caption: `"Construction site leftover drywall and lumber"` → AFTER caption: `"Site swept clean. Zero debris remaining."` → Location: `"Brandon, MS"` → Service: `"Debris Removal"`

**GSAP ScrollTrigger Parallax:** As user scrolls, each card's internal "AFTER" placeholder moves at 0.3x scroll speed (classic parallax shift), creating depth.

```tsx
useGSAP(() => {
  cardsRef.current.forEach((card) => {
    if (!card) return;
    const inner = card.querySelector('.parallax-inner');
    if (!inner) return;
    gsap.to(inner, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  });
}, { scope: containerRef });
```

---

## SUB-SECTION 5 — HOW IT WORKS (5-Step Process)

**Background:** `bg-[--blue-950] py-20 px-6 md:px-12 lg:px-16`

**Section header:**
- Eyebrow: `"THE PROCESS"` — `text-[--blue-bright] text-xs tracking-[0.4em] uppercase`
- Title: `"How Junk Removal\nActually Works."` — `font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight`

**Layout:**
- Mobile: vertical stack (`flex-col`), each step is a card with left border accent
- Desktop (`lg`): horizontal timeline. A thin `h-px bg-[--border-subtle]` line runs across all 5 steps via absolute positioning. Each step node sits on the line.

**Desktop horizontal timeline:**
- Line: absolute, `top-5 left-0 right-0 h-px bg-[--border-subtle]`
- Each step node: `w-10 h-10 rounded-full border-2 border-[--blue-accent] bg-[--blue-950] flex items-center justify-center relative z-10`
- Number inside: `text-[--blue-bright] text-sm font-bold`
- Below each node: card `bg-[--white-10] border border-[--border-subtle] rounded-xl p-5 w-full lg:w-52 mt-6`

**5 Steps:**

Step 1 — `"Schedule Service"`
- Icon: `CalendarCheck` (Lucide, 20px, `text-[--blue-accent]`)
- Text: `"Book online or call to schedule your free, no-obligation estimate. Same-day or next-day available."`

Step 2 — `"We Call En Route"`
- Icon: `Phone`
- Text: `"We'll call when we're on our way so you're never left waiting. No surprises, no no-shows."`

Step 3 — `"Free On-Site Estimate"`
- Icon: `ClipboardList`
- Text: `"Once we arrive, we review your project and give you a clear upfront estimate — no hidden fees ever."`

Step 4 — `"Approve & We Work"`
- Icon: `Truck`
- Text: `"You approve, we get to work immediately. We lift, load, and haul everything away ourselves."`

Step 5 — `"Space Cleared"`
- Icon: `Sparkles`
- Text: `"We leave your space clean. Junk is donated, recycled, or responsibly disposed. You'll wonder why you waited."`

**Animation:**
- GSAP ScrollTrigger:
  - Timeline line `scaleX` from 0→1 (left to right, `transformOrigin: 'left center'`)
  - Each step node pops in with `scale: 0→1` staggered by 0.2s
  - Each card fades up from `translateY(20px) opacity:0`

---

## SUB-SECTION 6 — WHY CHOOSE US

**Background:** `bg-[--blue-900] py-20 px-6 md:px-12 lg:px-16`

**Section header:**
- Eyebrow: `"WHY WE'RE DIFFERENT"` — `text-[--blue-bright] text-xs tracking-[0.4em] uppercase`
- Title: `"Why Kingdom Come\nIs Different."` — `font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight`

**Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12`
(5 cards — the grid will naturally leave one empty cell, do NOT force the last card to span)

**Card style:**
```
bg-[--white-10] border border-[--border-subtle] rounded-2xl p-8
hover:bg-[--blue-glow] hover:border-[--border-bright] transition-all duration-300
```

**5 Feature Cards:**

Card 1 — `"Local & Community-First"`
- Icon: `MapPin` (32px, `text-[--blue-accent]`)
- Body: `"Jackson, MS based. We live and work here. We take pride in keeping our community clean — this isn't just a job, it's our neighborhood too."`

Card 2 — `"Same-Day. Fast. Reliable."`
- Icon: `Zap` (32px, `text-[--blue-accent]`)
- Body: `"We tackle your junk removal needs same-day or next-day. No weeks of waiting — when you call, we actually show up. And we won't charge exorbitant fees like the big companies do."`

Card 3 — `"Full-Service Convenience"`
- Icon: `Package` (32px, `text-[--blue-accent]`)
- Body: `"You point, we haul. We handle every part of the process — heavy lifting, loading, hauling, and disposal. You don't lift a finger. We'll even do curbside pickups."`

Card 4 — `"Professional 3-Man Team"`
- Icon: `Users` (32px, `text-[--blue-accent]`)
- Body: `"Our 3-man crew is trained, trustworthy, and experienced. We do business by the book and treat your property like our own."`

Card 5 — `"Transparent Pricing"`
- Icon: `DollarSign` (32px, `text-[--blue-accent]`)
- Body: `"$250–$300 base rate in Jackson. $50–$125 travel fee for 30–50 mile jobs. You always know exactly what you're paying before we start. No hidden fees. No surprises."`

**GSAP ScrollTrigger:** Cards stagger in from `opacity:0 translateY(30px)` with `stagger: 0.1s`.

---

## SUB-SECTION 7 — BOOKING CTA (Services Section Footer)

**Background:** `bg-[--blue-950] py-24 px-6 md:px-12 lg:px-16`
**Radial glow:** `background: radial-gradient(ellipse 50% 60% at 50% 50%, rgba(30,111,255,0.1) 0%, transparent 70%)`

**Layout:** Centered text block, `max-w-3xl mx-auto text-center`

**Content:**
- Tag: `"READY TO CLEAR THE CLUTTER?"` — blue pill: `inline-block bg-[--blue-700] border border-[--border-subtle] text-[--blue-bright] text-xs tracking-[0.2em] px-4 py-1 rounded-full uppercase mb-6`
- Title: `"Book Your Free Estimate\nToday."` — `font-display text-6xl md:text-8xl text-white leading-none`
  - Word `"Free"` in `text-[--cyan-accent]`
- Sub: `"No obligation. No hidden fees. Just a professional 3-man crew that shows up and gets it done — serving Jackson, MS and 30–50 miles out."` — `text-[--white-60] text-lg max-w-2xl mx-auto mt-6 leading-relaxed`
- Buttons (flex row gap-4 justify-center mt-8):
  - `"Book Online Now"` — `bg-[--blue-accent] hover:bg-[--blue-bright] text-white px-10 py-4 rounded-xl font-semibold text-lg` → links to `/booking`
  - `"Call Us Now"` — `border border-[--border-bright] text-[--blue-bright] hover:bg-[--blue-glow] px-10 py-4 rounded-xl font-semibold text-lg` → `href="tel:+16015551234"` (placeholder phone)
- Below buttons: `"📍 Jackson, MS · Open 7 Days · Same-Day Available"` in `text-[--white-60] text-sm mt-6`

**Framer Motion:** Title words animate in one by one on scroll, each word: `opacity:0 y:20` → `opacity:1 y:0`, stagger `0.08s`. Split by spaces.

---

## ANIMATION SYSTEM SUMMARY

### Imports needed in each client component:
```tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);
```

### Reusable Framer Motion variants (define in each component or a shared constants file):
```tsx
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

const tabContentVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
};
```

### Lenis connection (already initialized globally in your project):
Ensure ScrollTrigger updates on Lenis scroll. The global setup should already exist; just use `useGSAP` with proper `scope` refs.

---

## COMPONENT FILE STRUCTURE

Create the following files. The main `app/services/page.tsx` assembles everything.

```
components/services/
├── ServicesIntroHero.tsx
├── TrustMarquee.tsx
├── WhatWeRemove.tsx
│   └── tabData.ts          ← All 14 tab data objects
├── BeforeAfterSection.tsx
├── HowItWorks.tsx
├── WhyChooseUs.tsx
└── ServicesCTA.tsx
```

**`app/services/page.tsx` should export a single client component:**
```tsx
"use client";

export default function ServicesPage() {
  return (
    <main className="relative">
      <ServicesIntroHero />
      <TrustMarquee />
      <WhatWeRemove />
      <BeforeAfterSection />
      <HowItWorks />
      <WhyChooseUs />
      <ServicesCTA />
    </main>
  );
}
```

Keep `app/services/layout.tsx` exactly as-is. Do NOT modify it.

---

## RESPONSIVE RULES

- Padding: `px-6` mobile → `px-12` md → `px-16` lg (all sections except marquee which is full-bleed)
- Tab navigation: `overflow-x-auto` horizontal scroll on mobile with `scrollbar-hide`, `flex-wrap` on desktop
- What We Remove items grid: `grid-cols-2` on mobile, `grid-cols-3` on desktop
- How It Works: vertical stack on mobile (`flex-col`), horizontal timeline on `lg+`
- Before/After: `grid-cols-1` mobile, `grid-cols-2` md, `grid-cols-3` lg
- Feature cards: `grid-cols-1` mobile, `grid-cols-2` md, `grid-cols-3` lg
- Hero: stacked on mobile, 60/40 split on `lg`

---

## CRITICAL RULES

1. **NO purple, NO gold** in this services section — pure blue/white/dark navy only.
2. **Tight spacing** — sections flow directly into each other. Background colors provide visual separation. No extra `mb-20` or `mt-20` beyond the `py-20` padding inside each section.
3. **Tab state** managed with React `useState` — active tab index.
4. **AnimatePresence** on tab content panel — smooth fade+slide between tabs. Use `mode="wait"`.
5. **GSAP ScrollTrigger** on: intro heading lines, timeline line draw, card stagger entries, parallax in before/after.
6. **All item pills** in tabs should have `cursor-default` — they are not clickable, just display items.
7. **The `"Book Online Now"` button links to `/booking` page.**
8. **`"Call Us Now"` button uses `href="tel:+16015551234"`** (placeholder — client will update).
9. **Use `lucide-react` icons ONLY.** Do NOT install new icon libraries.
10. **Placeholder images** for before/after — use CSS `bg-[--blue-700]` with a subtle CSS diagonal stripe pattern. No `<img>` tags for placeholders.
11. **Furniture tab** must have a working `"Show More"` / `"Show Less"` toggle using `useState` and `AnimatePresence`.
12. **Phone number** is a placeholder: `+1 (601) 555-1234`. Use this consistently.
13. Make sure all text content is adapted for **Kingdom Come Services, Jackson MS, 3-man crew** — do NOT leave any Buffalo/WNY references from the source.
14. Export all new components from `components/services/index.ts` for clean imports.
15. The page must be fully TypeScript typed. No `any` types.

---

## EXISTING PROJECT DETAILS (do NOT change these)

- `next.config.ts` already configured
- `tailwind.config.ts` / `globals.css` already set up with Tailwind v4
- `gsap`, `framer-motion`, `lucide-react` already installed
- Bebas Neue is available via `font-display` class
- DM Sans is the default sans font
- Lenis smooth scroll is initialized globally
- The `app/services/layout.tsx` already has correct metadata — leave it alone

Build each component separately, then assemble in order. Start with the tab system (`WhatWeRemove`) as it is the most complex. Test tab `AnimatePresence` transitions before adding GSAP layers.
