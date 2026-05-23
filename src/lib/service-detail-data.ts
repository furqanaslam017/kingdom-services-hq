export type ServiceDetail = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  items: string[];
  beforeAfter: {
    before: string;
    after: string;
    label: string;
  }[];
  howItWorks: {
    step: number;
    title: string;
    text: string;
  }[];
  whyChoose: {
    title: string;
    text: string;
  }[];
  ctaTitle: string;
  ctaText: string;
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "appliance-removal",
    title: "Appliance Removal",
    subtitle: "Fast, safe disposal of washers, dryers, dishwashers & more",
    heroImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop",
    description:
      "Old appliances are heavy, bulky, and often contain hazardous materials that can't go in the regular trash. Our trained crew removes washers, dryers, dishwashers, ovens, microwaves, and small appliances from your home or business. We haul them to certified recycling facilities and disposal sites, keeping your space clean and the environment safe.",
    items: [
      "Washing Machines",
      "Dryers",
      "Dishwashers",
      "Refrigerators",
      "Freezers",
      "Ovens & Stoves",
      "Microwaves",
      "Air Conditioners",
      "Water Heaters",
      "Small Kitchen Appliances",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop",
        label: "Basement Appliance Cleanout",
      },
      {
        before:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Kitchen Appliance Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Garage Appliance Haul",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book Online or Call",
        text: "Schedule a pickup time that works for you. Same-day and next-day slots available.",
      },
      {
        step: 2,
        title: "We Show Up On Time",
        text: "Our uniformed crew arrives in a branded truck, ready to disconnect and haul your appliances.",
      },
      {
        step: 3,
        title: "Safe Removal",
        text: "We carefully disconnect water/gas lines, protect your floors, and load everything securely.",
      },
      {
        step: 4,
        title: "Eco-Friendly Disposal",
        text: "Appliances are sorted for metal recycling, parts harvesting, and certified hazardous disposal.",
      },
      {
        step: 5,
        title: "Clean Sweep",
        text: "We sweep the area clean before leaving. No debris, no scratches, no stress.",
      },
    ],
    whyChoose: [
      {
        title: "Licensed & Insured Crew",
        text: "Every team member is background-checked, trained, and fully insured for your peace of mind.",
      },
      {
        title: "Same-Day Availability",
        text: "Need it gone today? We offer same-day removal across Jackson and surrounding areas.",
      },
      {
        title: "No Hidden Fees",
        text: "Upfront pricing based on appliance count and location. No surprise charges ever.",
      },
      {
        title: "Eco-Conscious Disposal",
        text: "We recycle over 80% of the appliances we collect. Less landfill, more impact.",
      },
      {
        title: "Local Jackson Experts",
        text: "We're based right here in Jackson, MS. We know the area, the routes, and the people.",
      },
    ],
    ctaTitle: "Ready to Clear Out Those Old Appliances?",
    ctaText:
      "Get a free estimate in minutes. Our Jackson-based crew is standing by to haul away your unwanted appliances today.",
  },
  {
    slug: "bbq-grill-removal",
    title: "BBQ Grill Removal",
    subtitle: "Propane, charcoal, and built-in grill disposal made easy",
    heroImage:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&auto=format&fit=crop",
    description:
      "That old rusted grill sitting on your patio has seen better days. We remove propane, charcoal, gas, electric, and built-in BBQ grills of all sizes. Our team handles the disconnection of gas lines, safe disposal of propane tanks, and hauls everything away — leaving your deck or patio spotless.",
    items: [
      "Propane Grills",
      "Charcoal Grills",
      "Gas Grills",
      "Electric Grills",
      "Pellet Smokers",
      "Built-In Outdoor Kitchens",
      "Smokers & Offset Smokers",
      "Grill Carts & Stands",
      "Fire Pits",
      "Outdoor Burners",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Backyard Grill Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Patio Cleanout",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Deck Grill Haul",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Send a Photo or Call",
        text: "Text us a photo of your grill for a quick estimate, or call to schedule a free on-site quote.",
      },
      {
        step: 2,
        title: "Safe Disconnect",
        text: "We safely disconnect gas lines, remove propane tanks, and prep the grill for hauling.",
      },
      {
        step: 3,
        title: "Lift & Load",
        text: "Our crew handles all the heavy lifting, protecting your deck, patio, and siding.",
      },
      {
        step: 4,
        title: "Proper Disposal",
        text: "Metal parts are recycled. Propane tanks go to certified hazmat facilities. Clean and compliant.",
      },
      {
        step: 5,
        title: "Spotless Finish",
        text: "We sweep and clean the area. Your outdoor space is ready for a new grill or fresh landscaping.",
      },
    ],
    whyChoose: [
      {
        title: "Gas Line Experts",
        text: "We know how to safely disconnect propane and natural gas lines without risk.",
      },
      {
        title: "Heavy Grill Specialists",
        text: "Built-in and smoker grills can weigh 500+ lbs. We bring the crew and equipment to handle it.",
      },
      {
        title: "Same-Day Jackson Service",
        text: "Most BBQ removals are completed the same day you call. Fast, friendly, and local.",
      },
      {
        title: "Protects Your Property",
        text: "We use floor runners, wall guards, and careful technique to protect decks and siding.",
      },
      {
        title: "Transparent Pricing",
        text: "Flat-rate or volume-based pricing. No hidden fees. You approve the price before we start.",
      },
    ],
    ctaTitle: "Clear Your Deck — Remove That Old Grill Today",
    ctaText:
      "One call is all it takes. Our Jackson crew will safely remove and dispose of your BBQ grill, smoker, or outdoor kitchen.",
  },
  {
    slug: "carpet-rug-removal",
    title: "Carpet & Rug Removal",
    subtitle: "Pull up, roll up, and haul away old flooring fast",
    heroImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f82a02b?w=1200&auto=format&fit=crop",
    description:
      "Ripping out old carpet is a dirty, exhausting job. We handle everything — pulling up carpet, removing tack strips and padding, rolling it all up, and hauling it away. Whether it's one room or an entire house, our crew gets it done fast and leaves your subfloor clean.",
    items: [
      "Wall-to-Wall Carpet",
      "Area Rugs",
      "Oriental & Persian Rugs",
      "Carpet Padding",
      "Tack Strips",
      "Carpet Tiles",
      "Indoor-Outdoor Carpet",
      "Stair Carpet",
      "Basement Carpet",
      "Commercial Carpet",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1581858726788-75bc0f82a02b?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Living Room Carpet Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Whole-House Carpet Pull",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Stair Carpet Removal",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Schedule a Free Estimate",
        text: "Tell us the square footage or number of rooms. We give you a clear, upfront quote.",
      },
      {
        step: 2,
        title: "Move Furniture if Needed",
        text: "We can move light furniture, or work around larger pieces you want to keep in place.",
      },
      {
        step: 3,
        title: "Pull & Roll",
        text: "Our crew cuts, pulls, and rolls carpet and padding efficiently, room by room.",
      },
      {
        step: 4,
        title: "Strip Removal",
        text: "We remove all tack strips, staples, and fasteners so your subfloor is ready for new flooring.",
      },
      {
        step: 5,
        title: "Haul & Dispose",
        text: "Everything is loaded, hauled, and disposed of responsibly. No bags left behind.",
      },
    ],
    whyChoose: [
      {
        title: "Subfloor Protection",
        text: "We use the right tools and techniques to avoid gouging or damaging your subfloor.",
      },
      {
        title: "Fast Turnaround",
        text: "Most residential carpet removals are completed in 2-4 hours. Ready for new flooring fast.",
      },
      {
        title: "No Heavy Lifting for You",
        text: "Rolls of old carpet are heavy. We handle the cutting, rolling, carrying, and loading.",
      },
      {
        title: "Allergen Reduction",
        text: "Removing old carpet improves indoor air quality. We minimize dust spread during removal.",
      },
      {
        title: "Jackson-Area Experts",
        text: "Serving Jackson, Ridgeland, Madison, Brandon, Flowood, Pearl, and beyond.",
      },
    ],
    ctaTitle: "Ready for New Flooring? Remove the Old Carpet First",
    ctaText:
      "Book your carpet removal with Kingdom Come Services. Fast, clean, and hassle-free across Jackson, MS.",
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    subtitle: "Sofas, tables, dressers, desks — we haul it all",
    heroImage:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop",
    description:
      "From a single broken recliner to a full estate cleanout, we remove furniture of every size and shape. Our crew navigates tight hallways, staircases, and doorways without scratching walls or floors. Items in good condition are donated to local Jackson charities when possible.",
    items: [
      "Sofas & Couches",
      "Recliners & Lounge Chairs",
      "Dining Tables & Chairs",
      "Bed Frames & Headboards",
      "Dressers & Chests",
      "Bookshelves",
      "Desks & Office Chairs",
      "Patio Furniture",
      "Entertainment Centers",
      "Wardrobes & Armoires",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Living Room Cleanout",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Estate Furniture Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Office Furniture Haul",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Describe or Photo Your Items",
        text: "Call or text photos for an instant estimate. No obligation, no pressure.",
      },
      {
        step: 2,
        title: "Schedule a Pickup",
        text: "Choose a 2-hour window that fits your schedule. Same-day available.",
      },
      {
        step: 3,
        title: "We Do the Heavy Lifting",
        text: "Our crew carries furniture from any room, floor, or basement. No stairs too steep.",
      },
      {
        step: 4,
        title: "Donate or Dispose",
        text: "Good-condition furniture is donated locally. The rest is responsibly recycled or disposed.",
      },
      {
        step: 5,
        title: "Clean & Go",
        text: "We sweep the space clean. You get a fresh, open room ready for what's next.",
      },
    ],
    whyChoose: [
      {
        title: "Wall & Floor Protection",
        text: "Door jamb protectors, floor runners, and blankets keep your home scratch-free.",
      },
      {
        title: "Donation Friendly",
        text: "We partner with Jackson-area charities to give your usable furniture a second life.",
      },
      {
        title: "Any Floor, Any Access",
        text: "Basements, attics, upstairs, tight turns — we've seen it all and handled it safely.",
      },
      {
        title: "Flat-Rate Pricing",
        text: "Know your cost before we lift a thing. Volume-based or per-item pricing available.",
      },
      {
        title: "Local Crew You Can Trust",
        text: "Background-checked, uniformed professionals who treat your home with respect.",
      },
    ],
    ctaTitle: "Get That Old Furniture Out of Your Way",
    ctaText:
      "One call, zero stress. Kingdom Come Services removes furniture fast across Jackson and surrounding communities.",
  },
  {
    slug: "mattress-removal",
    title: "Mattress Removal & Recycling",
    subtitle: "Old beds, box springs, and bed frames hauled and recycled",
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop",
    description:
      "Mattresses are bulky, heavy, and often not accepted by regular trash services. We remove mattresses, box springs, bed frames, and bunk beds from homes, apartments, hotels, and dorms. Whenever possible, we recycle mattress components — steel, foam, fibers, and wood — keeping tons of material out of Mississippi landfills.",
    items: [
      "Twin Mattresses",
      "Full Mattresses",
      "Queen Mattresses",
      "King Mattresses",
      "California King",
      "Box Springs",
      "Adjustable Bed Bases",
      "Bed Frames & Headboards",
      "Bunk Beds",
      "Futon Mattresses",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Bedroom Mattress Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Hotel Mattress Swap",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Multi-Mattress Haul",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Get a Quick Quote",
        text: "Tell us the size and quantity. We price by piece or by truck load — your choice.",
      },
      {
        step: 2,
        title: "Pick Your Time",
        text: "Morning, afternoon, or evening slots. We work around your schedule.",
      },
      {
        step: 3,
        title: "We Haul from Any Room",
        text: "Upstairs, downstairs, basement, attic — our crew carries it all out safely.",
      },
      {
        step: 4,
        title: "Recycling First",
        text: "Mattresses are taken to certified recycling facilities. Steel, foam, and fiber are recovered.",
      },
      {
        step: 5,
        title: "Fresh Space",
        text: "We sweep the room clean. Your bedroom is ready for that new mattress delivery.",
      },
    ],
    whyChoose: [
      {
        title: "Mattress Recycling Pros",
        text: "We divert mattresses from landfills. Components are separated and sent to recyclers.",
      },
      {
        title: "Handles All Sizes",
        text: "Twin to California King, adjustable bases to bunk beds — we remove them all.",
      },
      {
        title: "Apartment-Friendly",
        text: "We navigate tight hallways, elevators, and staircases. No scratches, no complaints.",
      },
      {
        title: "Upfront Pricing",
        text: "Flat per-piece rates. No hidden stair charges or after-hours fees.",
      },
      {
        title: "Jackson's Trusted Haulers",
        text: "4 years of mattress removals across Jackson, Pearl, Brandon, and Ridgeland.",
      },
    ],
    ctaTitle: "Sleep Better Knowing Your Old Mattress Is Gone",
    ctaText:
      "Book mattress removal today. We recycle responsibly and leave your room spotless across Jackson, MS.",
  },
  {
    slug: "piano-removal",
    title: "Piano & Organ Removal",
    subtitle: "Heavy instrument removal by experienced, equipped crews",
    heroImage:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&auto=format&fit=crop",
    description:
      "Pianos and organs are among the heaviest and most challenging items to remove. Upright pianos can weigh 300-500 lbs; grands can exceed 1,000 lbs. Our specialized crew uses piano dollies, straps, ramps, and proven techniques to remove your instrument without damaging your home. No piano is too big or too awkwardly placed.",
    items: [
      "Upright Pianos",
      "Grand Pianos",
      "Baby Grand Pianos",
      "Digital Pianos",
      "Console Pianos",
      "Spinet Pianos",
      "Pipe Organs",
      "Electronic Organs",
      "Church Organs",
      "Keyboards & Synths",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Living Room Piano Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Church Organ Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Basement Piano Extraction",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Assessment & Quote",
        text: "We assess the piano type, location, and access path. Grand pianos require extra crew and planning.",
      },
      {
        step: 2,
        title: "Protect Your Home",
        text: "We pad doorways, lay floor protection, and clear the path before touching the instrument.",
      },
      {
        step: 3,
        title: "Disassemble if Needed",
        text: "Grand pianos may need leg and pedal removal. Our crew handles this with precision.",
      },
      {
        step: 4,
        title: "Lift, Dolly & Load",
        text: "Using specialized equipment, we move the piano carefully to the truck and secure it for transport.",
      },
      {
        step: 5,
        title: "Disposal or Donation",
        text: "Playable pianos may be donated. Non-salvageable units are responsibly broken down and recycled.",
      },
    ],
    whyChoose: [
      {
        title: "Specialized Piano Equipment",
        text: "Piano dollies, heavy-duty straps, ramps, and furniture pads. The right tools for the job.",
      },
      {
        title: "Trained Heavy-Lift Crew",
        text: "Our team is experienced in piano logistics. No dropped instruments, no damaged walls.",
      },
      {
        title: "Insurance Coverage",
        text: "Fully insured for your protection. Accidents are rare, but you're covered if they happen.",
      },
      {
        title: "Grand Piano Experts",
        text: "Grand and baby grand removals are our specialty. We bring the extra crew and equipment needed.",
      },
      {
        title: "Transparent, Fair Pricing",
        text: "Pricing depends on piano type, location, and access. We quote upfront — no surprises.",
      },
    ],
    ctaTitle: "Don't Strain Yourself — Let the Pros Move Your Piano",
    ctaText:
      "Piano removal is dangerous without the right crew. Call Kingdom Come Services for safe, insured piano hauling in Jackson, MS.",
  },
  {
    slug: "pool-table-removal",
    title: "Pool Table Removal",
    subtitle: "Slate, felt, legs, and frame — fully disassembled and hauled",
    heroImage:
      "https://images.unsplash.com/photo-1601645191163-3fc0d5293fc3?w=1200&auto=format&fit=crop",
    description:
      "A standard slate pool table weighs 700-1,000 lbs and requires careful disassembly before removal. Our crew knows how to take apart the frame, remove the slate in sections, detach the felt, and haul everything away. Whether it's in a basement, game room, or garage, we handle the entire job from disassembly to disposal.",
    items: [
      "Slate Pool Tables",
      "MDF Pool Tables",
      "Pub-Style Tables",
      "Outdoor Pool Tables",
      "Billiard Tables",
      "Snooker Tables",
      "Ping-Pong Tables",
      "Foosball Tables",
      "Air Hockey Tables",
      "Arcade Game Cabinets",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1601645191163-3fc0d5293fc3?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Game Room Pool Table Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Basement Slate Table Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Garage Game Table Cleanout",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Photo & Quote",
        text: "Send a photo of your pool table. We determine if it's slate or MDF and quote accordingly.",
      },
      {
        step: 2,
        title: "Schedule the Removal",
        text: "Slate tables need extra crew. We bring 3-4 people for a safe, efficient removal.",
      },
      {
        step: 3,
        title: "Careful Disassembly",
        text: "Pockets, rails, felt, slate slabs, and frame are removed in the proper sequence.",
      },
      {
        step: 4,
        title: "Heavy Haul",
        text: "Each slate slab can weigh 200+ lbs. Our crew uses dollies, straps, and teamwork to move it.",
      },
      {
        step: 5,
        title: "Responsible Disposal",
        text: "Wood frames and metal parts are recycled. Slate is disposed at approved facilities.",
      },
    ],
    whyChoose: [
      {
        title: "Slate Table Specialists",
        text: "We know how to handle 3-piece and 1-piece slate without cracking or damaging your home.",
      },
      {
        title: "Full Disassembly Included",
        text: "You don't lift a finger. We disassemble, haul, and dispose of every piece.",
      },
      {
        title: "Protects Walls & Floors",
        text: "Floor runners, corner guards, and careful technique protect your space during removal.",
      },
      {
        title: "Extra Crew for Heavy Tables",
        text: "Slate tables get 3-4 crew members. No struggling, no risk of injury or damage.",
      },
      {
        title: "Jackson's Game Room Experts",
        text: "Pool tables, arcade cabinets, ping-pong tables — we clear game rooms across Jackson.",
      },
    ],
    ctaTitle: "Reclaim Your Game Room — Remove That Pool Table",
    ctaText:
      "From disassembly to disposal, we handle pool table removal safely across Jackson and surrounding areas.",
  },
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal",
    subtitle: "Drywall, lumber, concrete, shingles — post-project cleanup done right",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop",
    description:
      "Renovations create mountains of debris. We remove drywall, lumber, shingles, tile, concrete, insulation, and more from residential and commercial job sites. Our trucks can handle heavy loads, and our crew works efficiently so your project stays on schedule. Licensed disposal means no headaches with local regulations.",
    items: [
      "Drywall & Sheetrock",
      "Lumber & Wood Scraps",
      "Roofing Shingles",
      "Concrete & Brick",
      "Ceramic Tile",
      "Insulation",
      "Carpet Scraps",
      "PVC & Metal Pipes",
      "Cabinetry & Countertops",
      "Packaging & Cardboard",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Kitchen Renovation Cleanup",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Roofing Debris Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Bathroom Demo Cleanup",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Job Site Assessment",
        text: "We visit your site or review photos to estimate volume and debris types for accurate pricing.",
      },
      {
        step: 2,
        title: "Scheduled Pickups",
        text: "One-time cleanout or recurring pickups throughout your project. We adapt to your timeline.",
      },
      {
        step: 3,
        title: "Heavy Material Loading",
        text: "Our crew loads concrete, lumber, and drywall efficiently. No waiting around for laborers.",
      },
      {
        step: 4,
        title: "Licensed Disposal",
        text: "We haul to licensed C&D facilities. All disposal is documented and compliant.",
      },
      {
        step: 5,
        title: "Site Swept Clean",
        text: "We broom-sweep the area before leaving. Your job site is ready for the next phase.",
      },
    ],
    whyChoose: [
      {
        title: "Contractor-Grade Service",
        text: "We work with builders, remodelers, and DIYers. On-time, professional, no drama.",
      },
      {
        title: "Heavy Load Capacity",
        text: "Our trucks handle concrete, brick, and dense loads. One trip beats a dozen trailer loads.",
      },
      {
        title: "Licensed C&D Disposal",
        text: "All debris goes to certified construction and demolition facilities. Full compliance.",
      },
      {
        title: "Recurring Pickups",
        text: "Big project? We schedule daily, weekly, or milestone-based pickups to keep your site clear.",
      },
      {
        title: "Jackson's Construction Partner",
        text: "Serving job sites across Jackson, Madison, Ridgeland, Flowood, Brandon, and Pearl.",
      },
    ],
    ctaTitle: "Keep Your Job Site Clean and On Schedule",
    ctaText:
      "Book construction debris removal with Kingdom Come Services. Licensed, insured, and ready for any project size in Jackson, MS.",
  },
  {
    slug: "electronics-removal",
    title: "Electronics Removal",
    subtitle: "E-waste disposal for computers, printers, servers & gadgets",
    heroImage:
      "https://images.unsplash.com/photo-1550009158-9ebf690be655?w=1200&auto=format&fit=crop",
    description:
      "Electronics contain valuable metals and hazardous components that require specialized disposal. We collect and transport computers, printers, servers, TVs, monitors, and small electronics to certified e-waste recyclers. Data-containing devices are handled with care, and we can coordinate certified data destruction upon request.",
    items: [
      "Desktop Computers",
      "Laptops & Tablets",
      "Printers & Copiers",
      "Monitors & Displays",
      "Servers & Networking Gear",
      "Keyboards & Mice",
      "Cables & Chargers",
      "Audio Equipment",
      "Gaming Consoles",
      "Small Kitchen Electronics",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1550009158-9ebf690be655?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Office Electronics Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Home Electronics Cleanout",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Server Room Cleanup",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Inventory Your E-Waste",
        text: "Send us a list or photos of your electronics. We price by quantity, type, and location.",
      },
      {
        step: 2,
        title: "Schedule Pickup",
        text: "We offer on-site pickups for offices, homes, and warehouses. Flexible scheduling.",
      },
      {
        step: 3,
        title: "Secure Collection",
        text: "Our crew collects and inventories items. Data-bearing devices are handled with extra care.",
      },
      {
        step: 4,
        title: "Certified Recycling",
        text: "Electronics go to R2 or e-Stewards certified recyclers. Metals, plastics, and glass recovered.",
      },
      {
        step: 5,
        title: "Documentation Provided",
        text: "Receive a certificate of recycling or data destruction for your records and compliance.",
      },
    ],
    whyChoose: [
      {
        title: "Certified E-Waste Recycling",
        text: "We only partner with R2 and e-Stewards certified facilities. Responsible disposal guaranteed.",
      },
      {
        title: "Data Security",
        text: "Hard drives and storage devices can be handled with certified data destruction protocols.",
      },
      {
        title: "Office & Commercial",
        text: "Bulk office electronics, server racks, printers — we handle corporate cleanouts efficiently.",
      },
      {
        title: "Eco-Friendly First",
        text: "Over 95% of collected electronics are recycled. Very little reaches landfills.",
      },
      {
        title: "Jackson's E-Waste Experts",
        text: "From home offices to large businesses, we're Mississippi's trusted electronics hauler.",
      },
    ],
    ctaTitle: "Recycle Your Old Electronics the Right Way",
    ctaText:
      "Don't toss e-waste in the trash. Kingdom Come Services recycles electronics safely and responsibly across Jackson, MS.",
  },
  {
    slug: "exercise-equipment-removal",
    title: "Exercise Equipment Removal",
    subtitle: "Treadmills, weights, ellipticals, and home gym teardown",
    heroImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
    description:
      "That treadmill turned into a clothes rack. The home gym you swore you'd use is now collecting dust. We remove treadmills, ellipticals, weight sets, rowing machines, and complete home gyms. Our crew disassembles when needed, carries heavy equipment from any floor, and hauls it all away.",
    items: [
      "Treadmills",
      "Elliptical Machines",
      "Stationary Bikes",
      "Rowing Machines",
      "Weight Benches",
      "Dumbbells & Barbells",
      "Home Gym Systems",
      "Smith Machines",
      "Cable Machines",
      "Yoga & Pilates Equipment",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Home Gym Cleanout",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Basement Equipment Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Commercial Gym Removal",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Describe Your Equipment",
        text: "Call or text photos. We price by item count, weight, and whether disassembly is needed.",
      },
      {
        step: 2,
        title: "Book a Time Slot",
        text: "Morning, afternoon, or weekend pickups available. We work around your schedule.",
      },
      {
        step: 3,
        title: "Disassemble if Needed",
        text: "Large home gyms and treadmills may need partial disassembly. We bring the tools.",
      },
      {
        step: 4,
        title: "Lift, Carry & Load",
        text: "Our crew handles the heavy lifting from basements, upstairs bedrooms, or garages.",
      },
      {
        step: 5,
        title: "Recycle or Dispose",
        text: "Metal frames and weights are recycled. Electronics go to certified e-waste facilities.",
      },
    ],
    whyChoose: [
      {
        title: "Heavy Equipment Pros",
        text: "Treadmills and weight machines are heavy. We bring the crew and equipment to move them safely.",
      },
      {
        title: "Disassembly Included",
        text: "Large multi-station gyms need teardown. We handle the disassembly so you don't have to.",
      },
      {
        title: "Any Floor, Any Access",
        text: "Basements, upstairs, narrow stairs — we navigate it all without damaging walls or floors.",
      },
      {
        title: "Donation When Possible",
        text: "Working equipment in good condition may be donated to local charities or schools.",
      },
      {
        title: "Jackson's Fitness Haulers",
        text: "Home gyms, commercial equipment, and everything in between — we remove it across Jackson.",
      },
    ],
    ctaTitle: "Turn That Unused Gym Into Usable Space",
    ctaText:
      "Reclaim your room. Kingdom Come Services removes exercise equipment fast and responsibly across Jackson, MS.",
  },
  {
    slug: "playset-trampoline-removal",
    title: "Playset & Trampoline Removal",
    subtitle: "Swing sets, trampolines, jungle gyms — fully dismantled and hauled",
    heroImage:
      "https://images.unsplash.com/photo-1596908181055-e10301d77d68?w=1200&auto=format&fit=crop",
    description:
      "Kids outgrew the swing set? Trampoline rusted and sagging? We fully dismantle and remove playsets, swing sets, jungle gyms, trampolines, and outdoor climbing structures. Our crew brings power tools for disassembly and hauls every bolt, board, and spring away.",
    items: [
      "Wooden Swing Sets",
      "Metal Swing Sets",
      "Trampolines (All Sizes)",
      "Jungle Gyms",
      "Climbing Walls",
      "Treehouses",
      "Sandboxes",
      "Playhouses",
      "Slides",
      "Monkey Bars",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1596908181055-e10301d77d68?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Backyard Swing Set Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Trampoline Dismantle & Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Playground Equipment Removal",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Photo & Estimate",
        text: "Send us photos of your playset or trampoline. We assess size, material, and access.",
      },
      {
        step: 2,
        title: "Schedule the Teardown",
        text: "We bring power tools and a full crew. Most playsets are removed in 2-4 hours.",
      },
      {
        step: 3,
        title: "Full Dismantling",
        text: "We unscrew, unbolt, and carefully take apart the structure piece by piece.",
      },
      {
        step: 4,
        title: "Load & Haul",
        text: "All lumber, metal, springs, and hardware are collected and loaded into our truck.",
      },
      {
        step: 5,
        title: "Yard Restoration",
        text: "We fill anchor holes, rake the area, and leave your yard ready for new landscaping.",
      },
    ],
    whyChoose: [
      {
        title: "Full Dismantling Service",
        text: "We don't just haul — we fully dismantle swing sets, trampolines, and play structures.",
      },
      {
        title: "Power Tools On Board",
        text: "Our crew brings drills, saws, and wrenches. No waiting for you to find the right socket.",
      },
      {
        title: "Yard Protection",
        text: "We work carefully around landscaping, fences, and sprinkler systems.",
      },
      {
        title: "Metal & Wood Recycling",
        text: "Metal parts are recycled. Treated lumber is disposed of at approved facilities.",
      },
      {
        title: "Jackson's Backyard Experts",
        text: "Serving families across Jackson, Madison, Brandon, Flowood, and Pearl with safe playset removal.",
      },
    ],
    ctaTitle: "Reclaim Your Backyard — Remove That Old Playset",
    ctaText:
      "From swing sets to trampolines, we dismantle and haul it all. Book your backyard cleanout in Jackson, MS today.",
  },
  {
    slug: "refrigerator-removal",
    title: "Refrigerator & Freezer Removal",
    subtitle: "Freon-safe disposal of fridges, freezers, and commercial coolers",
    heroImage:
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=1200&auto=format&fit=crop",
    description:
      "Refrigerators and freezers contain refrigerants that must be handled by EPA-certified technicians. We remove residential and commercial refrigerators, freezers, wine coolers, and walk-in units. Freon is recovered by certified partners, and the metal shell is recycled. Safe, legal, and hassle-free.",
    items: [
      "Top-Freezer Refrigerators",
      "Bottom-Freezer Refrigerators",
      "Side-by-Side Refrigerators",
      "French Door Refrigerators",
      "Chest Freezers",
      "Upright Freezers",
      "Wine Coolers",
      "Mini Fridges",
      "Commercial Coolers",
      "Walk-In Freezers",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Kitchen Fridge Replacement",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Garage Freezer Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Commercial Cooler Haul",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book Your Removal",
        text: "Call or book online. We need to know the size, location, and whether it's plugged in.",
      },
      {
        step: 2,
        title: "Safe Disconnect",
        text: "We unplug, drain water lines, and secure doors. Commercial units may need electrical disconnect.",
      },
      {
        step: 3,
        title: "Protect & Move",
        text: "Floor runners and wall guards protect your home. We use dollies for safe transport.",
      },
      {
        step: 4,
        title: "Freon Recovery",
        text: "Refrigerant is recovered by EPA-certified technicians. Fully compliant with federal law.",
      },
      {
        step: 5,
        title: "Metal Recycling",
        text: "The steel shell, copper lines, and compressor are recycled. Minimal waste to landfill.",
      },
    ],
    whyChoose: [
      {
        title: "EPA-Compliant Freon Recovery",
        text: "We work with certified technicians to recover refrigerants legally and safely.",
      },
      {
        title: "Commercial & Residential",
        text: "From mini fridges to walk-in freezers. No unit too small or too large.",
      },
      {
        title: "Protects Your Floors",
        text: "Floor runners, blankets, and careful technique prevent scratches and dents.",
      },
      {
        title: "Same-Day Service",
        text: "Waiting for a new fridge delivery? We can remove the old one the same day.",
      },
      {
        title: "Jackson's Appliance Experts",
        text: "4 years of safe appliance removal across Jackson, Pearl, Brandon, and Flowood.",
      },
    ],
    ctaTitle: "Don't Let That Old Fridge Sit Another Day",
    ctaText:
      "Safe, legal refrigerator and freezer removal across Jackson, MS. We handle the freon, the hauling, and the recycling.",
  },
  {
    slug: "tire-removal",
    title: "Tire, Rim & Wheel Removal",
    subtitle: "Car, truck, ATV, and tractor tire disposal and recycling",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&auto=format&fit=crop",
    description:
      "Old tires pile up fast and can't go in regular trash. We collect and transport car, truck, ATV, tractor, and commercial tires to certified tire recycling facilities. Rims and wheels are separated — metal is recycled, rubber is processed for mulch, fuel, or crumb rubber. Clean up your property the responsible way.",
    items: [
      "Car Tires",
      "Truck & SUV Tires",
      "ATV & UTV Tires",
      "Tractor Tires",
      "Motorcycle Tires",
      "Commercial Truck Tires",
      "Alloy & Steel Rims",
      "Wheel Assemblies",
      "Spare Tires",
      "Racing Slicks",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Driveway Tire Stack Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Garage Tire Cleanout",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Shop Tire Haul",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Count & Quote",
        text: "Tell us how many tires, rims, and wheels you have. We price by quantity and type.",
      },
      {
        step: 2,
        title: "Schedule Pickup",
        text: "We pick up from homes, auto shops, farms, and commercial lots. Flexible scheduling.",
      },
      {
        step: 3,
        title: "Load & Separate",
        text: "Our crew loads tires, removes rims, and separates rubber from metal for recycling.",
      },
      {
        step: 4,
        title: "Certified Recycling",
        text: "Tires go to licensed processors. Rubber becomes mulch, crumb, or TDF. Metal rims are melted down.",
      },
      {
        step: 5,
        title: "Clean Property",
        text: "No more tire piles. Your driveway, garage, or lot is clean and mosquito-free.",
      },
    ],
    whyChoose: [
      {
        title: "Licensed Tire Recycling",
        text: "We only use state-certified tire recycling facilities. No illegal dumping, ever.",
      },
      {
        title: "Farm & Commercial",
        text: "Tractor tires, commercial truck tires, shop piles — we handle large quantities.",
      },
      {
        title: "Rim Separation Included",
        text: "We remove rims from tires so metal and rubber can each be recycled properly.",
      },
      {
        title: "Mosquito Prevention",
        text: "Standing water in old tires breeds mosquitoes. Removal helps protect your family's health.",
      },
      {
        title: "Jackson's Tire Haulers",
        text: "Serving homeowners, auto shops, and farms across Jackson and central Mississippi.",
      },
    ],
    ctaTitle: "Clear Those Tire Piles for Good",
    ctaText:
      "Tire removal and recycling across Jackson, MS. We haul car, truck, ATV, and tractor tires to certified facilities.",
  },
  {
    slug: "tv-removal",
    title: "Television Removal & Recycling",
    subtitle: "CRT, LED, OLED, and projection TV disposal with e-waste certification",
    heroImage:
      "https://images.unsplash.com/photo-1593359677879-a4c6e3d5c72e?w=1200&auto=format&fit=crop",
    description:
      "Televisions contain lead, mercury, and other materials that require careful handling. We collect CRT, LED, OLED, plasma, and projection TVs from homes and businesses. All units are transported to certified e-waste recyclers where hazardous components are safely extracted and valuable metals are recovered.",
    items: [
      "CRT Tube TVs",
      "LED TVs",
      "OLED TVs",
      "Plasma TVs",
      "Projection TVs",
      "Smart TVs",
      "4K & 8K TVs",
      "Curved TVs",
      "TV Wall Mounts",
      "Soundbars & Remotes",
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1593359677879-a4c6e3d5c72e?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?w=600&auto=format&fit=crop",
        label: "Living Room TV Removal",
      },
      {
        before:
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
        label: "Office TV Haul",
      },
      {
        before:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
        after:
          "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop",
        label: "Basement CRT Removal",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Count Your TVs",
        text: "Let us know the size, type, and quantity. CRTs cost more due to hazardous materials handling.",
      },
      {
        step: 2,
        title: "Schedule Pickup",
        text: "We pick up from any room in your home. No need to carry heavy sets to the curb.",
      },
      {
        step: 3,
        title: "Careful Handling",
        text: "Our crew uses blankets and straps to protect your walls, floors, and the TV during removal.",
      },
      {
        step: 4,
        title: "Certified E-Waste Recycling",
        text: "TVs go to R2 or e-Stewards certified recyclers. Lead glass, mercury, and metals recovered safely.",
      },
      {
        step: 5,
        title: "Certificate Available",
        text: "Receive documentation of proper recycling for your records or corporate compliance.",
      },
    ],
    whyChoose: [
      {
        title: "Certified TV Recycling",
        text: "All TVs go to certified e-waste facilities. Hazardous materials handled per EPA guidelines.",
      },
      {
        title: "CRT Specialists",
        text: "Heavy CRT tube TVs require extra care. We have the equipment and experience to move them safely.",
      },
      {
        title: "No Curb Required",
        text: "We carry TVs out from your living room, basement, or bedroom. You never lift a thing.",
      },
      {
        title: "Bulk Commercial Pickups",
        text: "Hotels, offices, and schools upgrading displays? We handle bulk TV removals efficiently.",
      },
      {
        title: "Jackson's Screen Experts",
        text: "From vintage CRTs to massive OLEDs, we remove and recycle every type of television in Jackson.",
      },
    ],
    ctaTitle: "Recycle That Old TV the Safe, Legal Way",
    ctaText:
      "Don't risk fines or environmental harm. Kingdom Come Services recycles TVs responsibly across Jackson, Mississippi.",
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug);
}
