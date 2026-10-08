export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  coverImage: string;
  galleryImages: string[];
  year: string;
  category: string;
  role: string;
  teammates: string[];
  tools: string[];
  timeline: string;
  description: string;
  context: string;
  sections: {
    heading: string;
    body: string;
    image?: string;
  }[];
  // Optional extended sections — used when a case study needs more depth
  goals?: string[];
  process?: {
    title: string;
    body: string;
  }[];
  walkthrough?: {
    screen: string;
    image: string;
    body: string;
  }[];
  keyDecisions?: {
    tension: string;
    resolution: string;
  }[];
  outcomes?: string[];
  nextSteps?: string[];
}

const tbp = "To be posted";
const tbpImage = "/tobeposted.png";

const makePlaceholder = (id: string, category: string): ProjectDetail => ({
  id,
  title: tbp,
  tagline: tbp,
  coverImage: tbpImage,
  galleryImages: [tbpImage, tbpImage],
  year: tbp,
  category,
  role: tbp,
  teammates: [tbp],
  tools: [tbp],
  timeline: tbp,
  description: tbp,
  context: tbp,
  sections: [
    {
      heading: tbp,
      body: tbp,
      image: tbpImage,
    },
    {
      heading: tbp,
      body: tbp,
      image: tbpImage,
    },
  ],
});

export const projectDetails: ProjectDetail[] = [
  // ─── Vantage ──────────────────────────────────────────────────────────────────
  {
    id: "vantage",
    title: "Vantage",
    tagline: "A landing page for an AI-powered sprint workflow platform built for engineering teams",
    coverImage: "/vantage project/vantage thumbnail.png",
    year: "2026",
    category: "Landing Page",
    role: "UI/UX Designer",
    teammates: [],
    tools: ["Figma"],
    timeline: "N/A",
    description: "Vantage is a concept landing page for an AI-powered sprint automation tool targeting modern engineering teams.",
    context: "The goal was to design a product marketing page that clearly communicates complex technical value while driving conversions.",
    galleryImages: [
      "/vantage project/vantage 1.png",
      "/vantage project/Slice 2.png",
      "/vantage project/Slice 3.png",
      "/vantage project/Slice 4.png",
      "/vantage project/Slice 5.png",
      "/vantage project/Slice 6.png",
      "/vantage project/vantage 7.png",
    ],
    sections: [],
  },
  // ─── Orbital ──────────────────────────────────────────────────────────────────
  {
    id: "orbital",
    title: "Orbital",
    tagline: "A landing page for a smart automation platform that unifies design, engineering, and workflow management",
    coverImage: "/orbital project/orbital thumbnail.png",
    year: "2026",
    category: "Landing Page",
    role: "UI/UX Designer",
    teammates: [],
    tools: ["Figma"],
    timeline: "N/A",
    description: "Orbital is a concept landing page for a smart automation platform targeting agile product teams working across design and engineering.",
    context: "The goal was to communicate a multi-feature product clearly to both designers and engineers, driving conversions through layered storytelling.",
    galleryImages: [
      "/orbital project/orbital 1.png",
      "/orbital project/orbital 2.png",
      "/orbital project/orbital 3.png",
      "/orbital project/orbital 4.png",
      "/orbital project/orbital 5.png",
      "/orbital project/orbital 6.png",
      "/orbital project/orbital 7.png",
      "/orbital project/orbital 8.png",
      "/orbital project/orbital 9.png",
    ],
    sections: [],
  },
  // ─── Weatherr ────────────────────────────────────────────────────────────────
  {

    id: "weatherr",
    title: "Weatherr",
    tagline: "A weather & earthquake-preparedness app for Indonesia",
    coverImage: "/Weatherr Project/Weatherr - Showcase Thumbnail.png",
    year: "2025",
    category: "Mobile App",
    role: "UI/UX Designer",
    teammates: ["Solo project — no teammates"],
    tools: ["Figma"],
    timeline: "—",
    description:
      "Weatherr merges weather forecasting and earthquake alerts into one app, designed to turn raw seismic and atmospheric data into a clear instruction: what to do next, not just what happened.",
    context:
      "Indonesia sits directly on the Pacific Ring of Fire, where earthquakes are routine and tsunami warnings can follow within minutes. Most people check a weather app and a quake-alert app separately, and neither tells them what to actually do with what it just showed them. Weatherr closes that gap by combining both data sources with an emergency go-bag checklist, turning awareness into readiness.",
    sections: [],
    goals: [
      "Legible under stress — Every hazard screen has to work for someone reading it with shaking hands at 2am: large numbers, minimal choices, no screen requiring more than one decision.",
      "Human-scaled data — Raw figures (magnitude, PM2.5, wind speed) only appear alongside a plain-language read of what that figure means for the person looking at it.",
      "Preparedness as habit — Go-Bag and Settings give the app a reason to be opened on a calm day, not only during an emergency.",
    ],
    process: [
      {
        title: "Fault-Finding — Research",
        body: "Studied how existing tools handle hazards in Indonesia — national weather and quake-alert services, community reporting apps — and where each stops short of telling a person what to do next.",
      },
      {
        title: "Ground-Truthing — Define",
        body: `Narrowed the problem to two recurring moments: "I saw the alert but couldn't judge how serious it was," and "I don't actually know what's in my emergency bag."`,
      },
      {
        title: "Load-Bearing IA — Structure",
        body: "Built navigation around four tabs — Home, Weather, Quake, Go-Bag — so hazard information is never more than one tap away.",
      },
      {
        title: "Stress-Testing — Iterate",
        body: "Early versions of the Quake screen led with a raw magnitude number. Testing showed people trusted a human-scale reading more, leading to the Community Felt Intensity panel.",
      },
    ],
    walkthrough: [
      {
        screen: "Home",
        image: "/Weatherr Project/Weatherr - Home Screen.png",
        body: `The calm-state dashboard. Surfaces live weather and the most recent quake activity side by side, so checking one thing means checking both. An "I Felt This Quake" action sits right on the home screen.`,
      },
      {
        screen: "Weather",
        image: "/Weatherr Project/Weatherr - Weather Screen.png",
        body: "The full local forecast alongside air-quality readings and hazard banners (e.g. heavy-rain/flooding warnings). Health advisories translate PM2.5 and ozone readings into plain instructions.",
      },
      {
        screen: "Quake",
        image: "/Weatherr Project/Weatherr - Quake Screen.png",
        body: "Magnitude, distance, and active tsunami warning lead the screen, followed by a Community Felt Intensity panel — regional, human-reported severity. SAR and BNPB hotlines are fixed one-tap buttons at the base of the screen.",
      },
      {
        screen: "Go-Bag",
        image: "/Weatherr Project/Weatherr - Go-Bag Screen.png",
        body: "Emergency supplies grouped into Essentials, Tech & Tools, and Health & Hygiene, each with its own completion bar. Expiring or missing items (e.g. a prescription expiring in 12 days) surface as urgent call-outs.",
      },
      {
        screen: "Settings",
        image: "/Weatherr Project/Weatherr - Settings Screen.png",
        body: "Minimum magnitude, radius, and separate alert toggles for tsunami/weather let each person tune sensitivity to their own risk tolerance.",
      },
    ],
    keyDecisions: [
      {
        tension:
          "A raw magnitude number feels precise but means nothing to most readers.",
        resolution:
          "Pair the instrument reading with a lived one — Community Felt Intensity gets equal visual weight to the magnitude figure.",
      },
      {
        tension: "Weather and quake data compete for the same home screen.",
        resolution:
          "One condensed summary line each on Home, full detail one tap away in dedicated tabs.",
      },
      {
        tension:
          "Flat preparedness checklists get abandoned after the first session.",
        resolution:
          "Split into categories (Essentials, Tech & Tools, Health & Hygiene) each with its own visible progress bar.",
      },
    ],
    outcomes: [
      "Unified two habits — checking weather and checking for quakes — into one screen opened by default.",
      "Replaced a raw magnitude reading with a community-verified severity scale people can actually interpret.",
      `Turned "have an emergency kit" from an abstract goal into a trackable, category-based checklist.`,
      "Kept emergency actions (reporting a quake, calling SAR) reachable in one tap from anywhere in the app.",
    ],
    nextSteps: [
      "Usability testing — validate the Community Felt Intensity panel and Go-Bag categories with real users in seismically active regions.",
      "Offline mode — a degraded state for Quake and Go-Bag that works when a disaster has already taken down connectivity.",
      "Localization — extend beyond English/Indonesian copy to regional languages spoken across Indonesia's highest-risk provinces.",
    ],
    galleryImages: [
      "/Weatherr Project/Weatherr - Home Screen.png",
      "/Weatherr Project/Weatherr - Weather Screen.png",
      "/Weatherr Project/Weatherr - Quake Screen.png",
      "/Weatherr Project/Weatherr - Go-Bag Screen.png",
      "/Weatherr Project/Weatherr - Settings Screen.png",
    ],
  },

  // ─── Mobile App ───────────────────────────────────────────────────────────────
  {
    id: "zesty",
    title: "Zesty",
    tagline: "A calorie tracker that feels like a buddy, not a judge",
    coverImage: "/Zesty Project/Zesty - Thumbnail.png",
    year: "2026",
    category: "Mobile App",
    role: "UI/UX Designer",
    teammates: ["Solo project, no teammates"],
    tools: ["Figma"],
    timeline: "N/A",
    description: "Most calorie trackers are built like spreadsheets: dense numbers, red warnings when you go over, and streaks that punish you for missing a day. For people who are just starting a healthy habit, this feels intimidating.",
    context: "This concept is built around one question: how can a calorie tracker stay accurate and useful while feeling friendly enough that people actually open it every day? The answer is a tracker that behaves like a buddy: a chameleon mascot, a soft lime palette, rounded shapes, and encouraging copy.",
    sections: [],
    goals: [
      "Calories Summary: Remaining is the hero number in a semi-circle gauge, with Eaten and Burned as quiet supporting numbers.",
      "Macros: Three compact progress bars with distinct, non-alarming colors (blue protein, orange carbs, yellow fats).",
      "Meals: Meal cards with an icon inside a progress ring; the ring turns red only when a meal goes over its goal, with no warning text.",
      "Streaks: A celebration screen with a weekly tracker, a glowing ring on the current day, and copy like 'Your buddy is proud of you!'.",
      "Goals: A Goal Progress card with segmented pills, a short label, and chips for 'to go' and 'target'."
    ],
    process: [
      {
        title: "1. Research",
        body: "Reviewed existing tracking apps to identify what felt intimidating about them, such as dense spreadsheets and punishing streaks."
      },
      {
        title: "2. Concept",
        body: "Chose the mascot (a chameleon), the palette, and the tone of voice to build a friendly system."
      },
      {
        title: "3. High-fidelity design",
        body: "Created the Diary, Streak, and Profile screens, plus mascot poses and the supporting states."
      },
      {
        title: "4. Iteration",
        body: "Fixed contrast, aligned the data across screens, and refined the copy."
      },
      {
        title: "5. Feedback",
        body: "Shared on LinkedIn and collected comments from other designers to evaluate the friendly feel."
      }
    ],
    walkthrough: [
      {
        screen: "Diary (Home)",
        image: "/Zesty Project/Diary Screen.png",
        body: "See today at a glance and log food. The screen features a summary card with Eaten, Remaining, and Burned calories."
      },
      {
        screen: "Streak",
        image: "/Zesty Project/Streak Screen.png",
        body: "Celebrate the daily logging habit. This screen highlights a large streak number, the mascot on a food plate, and a weekly tracker."
      },
      {
        screen: "Profile",
        image: "/Zesty Project/Profile Screen.png",
        body: "See stats, goals, and body metrics. The Profile screen includes a stats card, a Goal Progress card, and a 2x3 Fitness Metrics grid."
      }
    ],
    galleryImages: [
      "/Zesty Project/Diary Screen.png",
      "/Zesty Project/Streak Screen.png",
      "/Zesty Project/Profile Screen.png"
    ]
  },
  {
    id: "sprout",
    title: "Sprout",
    tagline: "A membership and e-commerce app driving loyalty for small business owners",
    coverImage: "/Sprout Project/Sprout - Thumbnail.png",
    year: "2026",
    category: "Mobile App",
    role: "UI/UX Designer",
    teammates: ["Solo project, no teammates"],
    tools: ["Figma"],
    timeline: "N/A",
    description: "Sprout introduces a Membership feature to drive user loyalty, especially for small business owners (grocery stores or warungs) who routinely restock their business supplies through the app.",
    context: "Based on the app context, the main users are small business owners who shop for stock routinely, not just end consumers. They want to know the benefits of upgrading tiers, the fastest way to earn points, and which rewards are relevant to their store needs.",
    sections: [],
    goals: [
      "Tier Upgrade Motivation: Progress to the next tier alone is not enough. Users need to know the concrete benefits of that tier and how it compares to others.",
      "How to Earn Points: Users need explicit explanations on all methods to increase points.",
      "Promo Urgency: Promos without time limits offer no psychological push to use them immediately.",
      "Transparent Point Ledger: Users need to track both incoming points and where their points were spent.",
      "Reward Search Efficiency: An expanding reward catalog requires category filters so users can quickly find rewards relevant to their needs."
    ],
    process: [
      {
        title: "1. Discover",
        body: "Mapped the app context to understand who the users are and what they need from a membership program."
      },
      {
        title: "2. Define",
        body: "Formulated the 'Bu Rina' persona and compiled the list of problems: motivation to upgrade, explicit point earning methods, promo urgency, filterable catalog, and transparent ledger."
      },
      {
        title: "3. Ideate",
        body: "Brainstormed solutions: Gold/Platinum/Diamond comparison tabs, 'How to Earn Points' page with missions, urgency labels, catalog category filters, point history, and personal greetings."
      },
      {
        title: "4. Design",
        body: "Created high-fidelity mockups in Figma with a consistent green palette, components, and card structures so the entire app feels like one unified system."
      },
      {
        title: "5. Validate",
        body: "Reviewed the end-to-end flow to ensure every feature is accessible in max 1-2 taps from home."
      }
    ],
    walkthrough: [
      {
        screen: "Home & Member Card",
        image: "/Sprout Project/Sprout - Main 1.png",
        body: "The home screen acts as the main hub. The Sprout green palette serves as the core identity. The point numbers are prominent as the hero information."
      },
      {
        screen: "Tier Comparison",
        image: "/Sprout Project/Sprout - Gold Member 1.png",
        body: "The Member Benefits page uses a familiar segmented control navigation. This allows users to easily compare benefits across tiers without jumping between pages."
      },
      {
        screen: "Reward Catalog & Ledger",
        image: "/Sprout Project/Sprout - Platinum Member 1-1.png",
        body: "The reward catalog includes category tabs to speed up searches. The transaction history records both incoming and outgoing points."
      },
      {
        screen: "How to Earn Points",
        image: "/Sprout Project/Sprout - Cara Dapat Poin 1.png",
        body: "The mission system drives real business behavior: restock frequency. It provides a concrete progress bar and a deadline, motivating users to complete just one more transaction."
      }
    ],
    galleryImages: [
      "/Sprout Project/Sprout - Main 1.png",
      "/Sprout Project/Sprout - Gold Member 1.png",
      "/Sprout Project/Sprout - Platinum Member 1.png",
      "/Sprout Project/Sprout - Platinum Member 1-1.png",
      "/Sprout Project/Sprout - Cara Dapat Poin 1.png"
    ]
  },
  {
    id: "triply",
    title: "Triply",
    tagline: "A travel companion app for discovering destinations, planning trips, and booking in one place",
    coverImage: "/Triply Project/Triply - Thumbnail.png",
    year: "2025",
    category: "Mobile App",
    role: "UI/UX Designer",
    teammates: ["Solo project — no teammates"],
    tools: ["Figma"],
    timeline: "—",
    description:
      "Triply is a mobile travel app that brings destination discovery, day-by-day trip planning, and the full booking flow together into a single product, so a trip that used to require four different apps and a spreadsheet can now live in one place.",
    context:
      "Planning a trip in Indonesia today means bouncing between a discovery app, a booking platform, a messaging thread to coordinate with friends, and a Google Sheet to track the budget. None of those tools know about the others. Triply was built to close all of those gaps: one product where discovering a destination, building an itinerary, and completing the booking are steps in a single continuous flow.",
    sections: [],
    goals: [
      "Discovery that goes beyond the obvious — Five filter chips (All, Nearby, Popular, Hidden Gems, Nature) let a traveler narrow intent before they search, surfacing options beyond the standard tourist list.",
      "A trip plan that is actually useful on the ground — The Trip Plan tab shows time-stamped activities with addresses, descriptions, and a Route and Transportation panel with a live map, so the itinerary works as both a pre-trip reference and an on-ground navigation guide.",
      "Budget transparency before commitment — A full cost breakdown with expandable line items and an Included vs Excluded section is placed before the booking flow begins, so no number changes between discovery and payment.",
      "A booking flow that collects everything once — Three focused steps (dates, party size, personal details) with a bottom sheet for party composition and a Review Summary screen before payment.",
    ],
    process: [
      {
        title: "The Scattered Traveler — Research",
        body: "The research phase started with one observation: people planning trips in Indonesia use a minimum of three separate apps before they even make a booking. The problem was not a lack of tools; it was that none of the tools were talking to each other.",
      },
      {
        title: "Three Moments That Matter — Define",
        body: `Three distinct moments where the experience falls apart: 'I want to go somewhere but I don't know what's near me or within my budget.' 'I've picked a place but I can't figure out what to do each day.' 'I'm ready to book but the process asks me the same questions four times.' Those three moments became the design brief.`,
      },
      {
        title: "One Flow, Three Tabs — Structure",
        body: "The detail page holds three tabs: Overview (the what), Trip Plan (the when and how), and Budget (the how much). Each tab answers exactly one question. Together they give a traveler everything they need to go from interested to committed without leaving the page.",
      },
      {
        title: "The Booking Sequence Problem — Iterate",
        body: "Early versions put date selection, party size, and personal details all on one long scrollable screen. Testing showed people kept missing fields. Breaking it into three distinct steps with a bottom sheet for party configuration resolved the problem.",
      },
    ],
    walkthrough: [
      {
        screen: "Home",
        image: "/Triply Project/Triply - Home Screen.png",
        body: "Opens with a search prompt and five filter chips. Featured destinations are shown as horizontally scrollable cards with large photography and visible ratings. Popular Destinations below surfaces pricing from the first view, making cost part of discovery rather than a checkout surprise.",
      },
      {
        screen: "Overview Detail",
        image: "/Triply Project/Triply - Overview Detail Screen.png",
        body: "Full-bleed image gallery, destination rating and social proof, then three tabs: Overview, Trip Plan, Budget. The Overview tab shows group size, trip duration, and a Facilities breakdown (Meals, Insurance, Local Guide, Accommodation, Transportation). The Book Now button with the price is pinned to the bottom of every tab.",
      },
      {
        screen: "Trip Plan",
        image: "/Triply Project/Triply - Trip Plan Screen.png",
        body: "Day-by-day timeline with time slots, activity names, addresses, descriptions, and ratings for each stop. A Route and Transportation panel below shows a live map of the route and a step-by-step transfer guide (Arrival Hall, Taxi Counter, Villa Check-in), making this tab useful both before and during the trip.",
      },
      {
        screen: "Budget Detail",
        image: "/Triply Project/Triply - Budget Detail Screen.png",
        body: "Five collapsible cost categories (Transportation, Accommodation, Activities, Meals, Fees and Guide) with expandable line items showing exactly how the total is built. An Included and Excluded section below removes ambiguity about what the package covers.",
      },
      {
        screen: "Booking Detail",
        image: "/Triply Project/Triply - Booking Detail Screen.png",
        body: "Three focused steps: date selection via a full calendar, party composition via a bottom sheet separating Adults, Children, and Infants, then personal details (Name, Email, Phone, Nationality, Emergency Contact, Special Requests). The Continue button carries the running total throughout.",
      },
      {
        screen: "Review Summary and Payment",
        image: "/Triply Project/Triply - Review Summary and Payment Screen.png",
        body: "A full read-only summary grouped into Destination Details, Booking Details, and Customer Details, each with an inline Edit Details link. Confirm and Pay is the only action on the screen. The Payment Methods screen offers Wallet, Card, PayPal, Apple Pay, and Google Pay before the final Confirm Payment.",
      },
    ],
    keyDecisions: [
      {
        tension: "Discovery apps show places but give no sense of whether a trip is feasible for your budget.",
        resolution:
          "Show pricing on the discovery card itself. A traveler who can see the starting price during discovery can self-select before tapping in.",
      },
      {
        tension: "An itinerary that only lists venue names is useless when you are on the ground trying to navigate.",
        resolution:
          "Build the Trip Plan tab as both a pre-trip reference and an on-ground guide: time-stamped activities with addresses plus a Route and Transportation panel with a live map.",
      },
      {
        tension: "Budget surprises after committing to a booking are the primary source of traveler regret.",
        resolution:
          "The Budget tab with a full line-item breakdown and an Included vs Excluded section is placed before the booking flow begins. The total shown there is identical to the total on the Confirm Payment button.",
      },
      {
        tension: "Long booking forms cause drop-off when they ask for too much at once.",
        resolution:
          "Split booking into three single-purpose steps: dates, party size via a bottom sheet, then personal details. Each step has one decision and the Continue button is disabled until that decision is complete.",
      },
    ],
    outcomes: [
      "Unified destination discovery, trip planning, and booking into a single continuous flow where each step informs the next.",
      "Made budget transparency part of the discovery experience by surfacing pricing from the first card view through to the payment confirmation screen.",
      "Replaced generic itinerary lists with a day-by-day trip plan that doubles as an on-ground navigation guide with time slots, addresses, and transport routing.",
      "Resolved booking form drop-off by structuring the flow into three single-purpose steps with a running total always visible.",
      "Kept the Confirm Payment action clean by surfacing a full Review Summary screen with inline Edit Details links before any money moves.",
    ],
    nextSteps: [
      "Usability testing — Validate the three-tab structure and bottom-sheet party picker with real travelers, particularly on the party composition step.",
      "Wishlist and social planning — A shared wishlist where groups can collaboratively save and vote on destinations would match how trip planning actually happens in practice.",
      "Real-time availability and pricing — Integrating live inventory data would make the Budget tab reflect actual availability for the selected dates rather than a fixed package price.",
      "Post-booking companion mode — A Bookings tab surfacing the confirmed itinerary in offline-accessible day-by-day view with check-in reminders so the Trip Plan also helps execute the trip.",
    ],
    galleryImages: [
      "/Triply Project/Triply - Home Screen.png",
      "/Triply Project/Triply - Overview Detail Screen.png",
      "/Triply Project/Triply - Trip Plan Screen.png",
      "/Triply Project/Triply - Budget Detail Screen.png",
      "/Triply Project/Triply - Booking Detail Screen.png",
      "/Triply Project/Triply - Review Summary and Payment Screen.png",
    ],
  },

  // ─── Landing Page ─────────────────────────────────────────────────────────────

  // ─── SaaS Dashboard ───────────────────────────────────────────────────────────
  {
    id: "indolink",
    title: "IndoLink",
    tagline: "A link-in-bio builder for e-commerce brands",
    coverImage: "/IndoLink Project/IndoLink - Thumbnail.png",
    year: "2026",
    category: "SaaS Dashboard",
    role: "UI/UX Designer",
    teammates: ["Solo project, no teammates"],
    tools: ["Figma"],
    timeline: "N/A",
    description: "IndoLink is built specifically for that niche: brand owners who want their bio page to function like a storefront, not just a list of links, complete with their own domain, instead of riding on a platform's subdomain.",
    context: "Linktree and Heylink were built for creators in general, with one global theme and a generic list of links, without considering that brands selling physical products need a different way to display content than creators who just share social media links.",
    sections: [],
    goals: [
      "Custom Domain & Unlimited Content - The 'Connect Domain' button is positioned exactly next to the URL bar, always visible in the top bar.",
      "WhatsApp as the Main CTA - In Indonesia, closing sales mostly happens via chat, not automatic checkout. Therefore, the WhatsApp Block is given 5 display styles.",
      "Native Shop Block Controls - Controls like Track Stock (automatically hide products when stock runs out) and Click Destination (brand owners choose whether the product is directed to WhatsApp or an External Link).",
      "AI Generator with Auto-import - Brand owners can paste product URLs from Shopee/TikTok Shop for auto-import, or simply describe their business in a single line of text.",
    ],
    process: [
      {
        title: "The Differentiator",
        body: "Competitors treat all content the same. IndoLink organizes appearance in a 2-layer system that complements each other.",
      },
      {
        title: "Global Theme Templates",
        body: "Brand owners can choose one visual personality in a single click, which directly affects the entire page.",
      },
      {
        title: "Per-block fine-tuning",
        body: "Each block type still has specific controls according to its respective functions.",
      }
    ],
    walkthrough: [
      {
        screen: "Links Tab",
        image: "/IndoLink Project/Indolink Links My Page.png",
        body: "This is the core workspace where brand owners manage their content. They can use the AI Generator or manually add blocks one by one.",
      },
      {
        screen: "Appearance Tab",
        image: "/IndoLink Project/Indolink Appearance 1.png",
        body: "Brand owners select a Global Theme Template for the overall visual personality.",
      },
      {
        screen: "Granular Customization",
        image: "/IndoLink Project/Indolink Appearance 2.png",
        body: "Each block type has its own set of layout and styling controls. This granular customization ensures that a product card can highlight pricing and imagery optimally.",
      },
      {
        screen: "Adding a Product Block",
        image: "/IndoLink Project/Indolink Add Product 1.png",
        body: "The Product block is not just a link to a product. It features 7 layout choices, Photo Ratios, Stock Badges, and Price Tags.",
      },
      {
        screen: "WhatsApp Block",
        image: "/IndoLink Project/Indolink Add WhatsApp 1.png",
        body: "The WhatsApp Block is treated as a primary CTA. You input the number, button text, and automated message.",
      },
      {
        screen: "Gallery Block",
        image: "/IndoLink Project/Indolink Add Gallery 1.png",
        body: "The Gallery block supports multi-uploading photos without limits.",
      },
      {
        screen: "Countdown Block",
        image: "/IndoLink Project/Indolink Add Countdown 1.png",
        body: "Built as a native extension for time-sensitive promotions, the Countdown Block takes a title and an end date.",
      },
      {
        screen: "Location Block",
        image: "/IndoLink Project/Indolink Add Location 1.png",
        body: "For brands with physical presence, the Location block allows adding an address, branch name, and operational hours.",
      },
      {
        screen: "Standard Link Block",
        image: "/IndoLink Project/Indolink Add Link 1.png",
        body: "Even standard links are given rich customization. After entering the URL, title, and optional thumbnail, users can dictate the layout, Corner Shape, Button Fill, and Animation Style.",
      }
    ],
    galleryImages: [
      "/IndoLink Project/Indolink Links My Page.png",
      "/IndoLink Project/Indolink Appearance 1.png",
      "/IndoLink Project/Indolink Appearance 2.png",
      "/IndoLink Project/Indolink Add Product 1.png",
      "/IndoLink Project/Indolink Add WhatsApp 1.png",
      "/IndoLink Project/Indolink Add Gallery 1.png",
      "/IndoLink Project/Indolink Add Countdown 1.png",
      "/IndoLink Project/Indolink Add Location 1.png",
      "/IndoLink Project/Indolink Add Link 1.png",
    ]
  },
  {
    id: "clearclaim",
    title: "ClearClaim",
    tagline: "A reimbursement management SaaS for teams — from submission to payout",
    coverImage: "/Clear Claim Project/ClearClaim - Thumbnail Image.png",
    year: "2025",
    category: "SaaS Dashboard",
    role: "UI/UX Designer",
    teammates: ["Solo project — no teammates"],
    tools: ["Figma"],
    timeline: "—",
    description:
      "ClearClaim is a B2B SaaS dashboard that takes the friction out of expense reimbursement — serving employees who need to submit and track claims, and managers who need to review, approve, and stay on top of team spend, all in one connected product.",
    context:
      "Expense reimbursement in most companies runs on email threads, spreadsheets, and Slack messages. An employee submits a claim and waits with no idea whether it was received, reviewed, or rejected. A manager gets a dozen requests with no audit trail. ClearClaim was designed to replace all of that with a product where every party knows exactly what is happening, what has happened, and what needs to happen next.",
    sections: [],
    goals: [
      "Visibility over ambiguity — Every claim has a status. Every status is visible. Real-time tracking is not a feature; it is the product's entire promise.",
      "Two roles, one system — Employees and managers get separate dashboards but share the same underlying data model. Every manager action immediately surfaces as a required action for the employee involved.",
      "Structured submission over free-form input — A four-step guided wizard (Category → Details → Receipt → Review) makes it structurally difficult to submit an incomplete claim.",
      "Decisions with context, not just a button — Every claim detail view includes the submission history, employee note, attached receipt, and policy limit before the manager makes a call.",
    ],
    process: [
      {
        title: "The Paper Trail Problem — Research",
        body: "Mapped how reimbursement actually runs in most companies: email submission, chat approval, manual spreadsheet ledger. The gap was never tools — it was a single place where both sides see the same truth at the same time.",
      },
      {
        title: "Two Users, Two Jobs — Define",
        body: `The employee's problem: 'I submitted it and now I don't know what happened.' The manager's: 'I have 12 claims waiting and I can't remember which ones are urgent.' Separate dashboards under the same data model became the structural anchor.`,
      },
      {
        title: "One Wizard, Four Gates — Structure",
        body: "Category first (so the policy limit is visible before an amount is typed), then Details, then Receipt, then Review. Each step has one job. You cannot advance to Step 3 without completing Step 2.",
      },
      {
        title: "The Decline Conversation — Iterate",
        body: "Early rejection flow was a dead end — a status change with no context. Redesigned to show the manager's specific comment, a structured 'What needs to be fixed' list, and a Resubmit button, turning rejection into a recoverable revision request.",
      },
    ],
    walkthrough: [
      {
        screen: "Employee Dashboard",
        image: "/Clear Claim Project/ClearClaim - Dashboard Employee.jpg",
        body: "Four stat cards (Reimbursed, Pending Balance, Action Required, Drafted) give a financial read at a glance. The Active Claim tracker shows the five-stage progress bar for the most recent open claim, with an estimated payment date when processing. All Expenses logs the full history below.",
      },
      {
        screen: "Submit Expense — Category",
        image: "/Clear Claim Project/ClearClaim - New Expenses - Step 1.jpg",
        body: "Step 1 asks one question: what kind of expense is this? Seven categories shown as tappable tiles. Category comes before amount so the policy limit for that category is visible before the employee types in a number, eliminating the most common rejection cause before submission.",
      },
      {
        screen: "Submit Expense — Details",
        image: "/Clear Claim Project/ClearClaim - New Expenses - Step 2.jpg",
        body: "Amount, currency, date, merchant, and purpose collected as a structured form. A policy compliance banner updates in real time — 'Within company policy limit (max $100 for travel)' — confirming the claim won't be flagged before it reaches a reviewer.",
      },
      {
        screen: "Submit Expense — Receipt",
        image: "/Clear Claim Project/ClearClaim - New Expenses - Step 3.jpg",
        body: "Drag-and-drop receipt upload supporting JPEG, HEIC, and PDF. Each file shows its progress bar during upload; completed files are listed below the active upload with a delete option. The attachment is visible before submission, so there is no wondering if it attached.",
      },
      {
        screen: "Submit Expense — Review",
        image: "/Clear Claim Project/ClearClaim - New Expenses - Step 4.jpg",
        body: "A read-only summary of all entered data: Category, Amount, Date, Merchant, and attached receipt count. An 'All checked passed — ready to submit' banner confirms every field is filled, the receipt is attached, and the amount is within policy. The employee submits knowing there are no surprises.",
      },
      {
        screen: "Manager Dashboard",
        image: "/Clear Claim Project/ClearClaim Manager - Dashboardss Manager.jpg",
        body: "Overdue Claims, Pending Claims, Pending Value, and Approved Claims stat cards each with a progress bar. The Expense Trends chart shows approved vs pending spend by day. Spend by Category shows category deltas against quarterly budget. Team Claims table supports batch approve and decline.",
      },
      {
        screen: "Claim Details",
        image: "/Clear Claim Project/ClearClaim Manager - Claim Details.jpg",
        body: "Full claim record with the entire Claim Progress thread: submission note, attached receipt, manager feedback. Rejected claims show a structured 'What needs to be fixed' list rather than a freeform comment, with a Resubmit button for the employee to action directly from the same modal.",
      },
      {
        screen: "Decline Expense",
        image: "/Clear Claim Project/ClearClaim Manager - Decline expense.jpg",
        body: "Freeform reason field plus seven Quick Responses (Missing receipt, Over budget, Wrong category, Out of policy, Date mismatch, Unapproved vendor, Late submission) that one-tap populate the field. A structured decline takes under 15 seconds; the employee gets an actual explanation rather than a status change.",
      },
    ],
    keyDecisions: [
      {
        tension: "A single dashboard serving two different roles creates competing information needs.",
        resolution:
          "Build separate dashboard surfaces under the same product shell. Employees see their personal claim pipeline. Managers see team-wide volume, trend charts, and an urgency-sorted approval queue.",
      },
      {
        tension: "Free-form expense forms produce incomplete submissions requiring multiple revision rounds.",
        resolution:
          "A four-step guided wizard with structural gates. Category first so the policy limit is visible before the amount is entered. Receipt is a dedicated step — not an optional attachment — so it cannot be forgotten.",
      },
      {
        tension: "A 'Rejected' status tells the employee something went wrong, not what to do about it.",
        resolution:
          "Build rejection into a structured revision request: manager-specific feedback, a line-by-line fix list, and a Resubmit button — so the employee's next action is never ambiguous.",
      },
    ],
    outcomes: [
      "Replaced the email-and-spreadsheet reimbursement loop with one product where employees and managers work from the same shared record.",
      "Turned submission from a rejection-prone free-form process into a four-step wizard that enforces completeness before the claim is sent for review.",
      "Gave managers contextual approval tools — trend charts, spend-by-category, claim history — so every decision is made with the full picture visible.",
      "Converted rejections from dead ends into actionable revision requests with structured feedback and a one-click resubmit path.",
      "Enabled batch approvals with structured quick-responses to cut manager review time without sacrificing the clarity employees need.",
    ],
    nextSteps: [
      "Usability testing — validate whether the four-step wizard and the revision request structure actually reduce back-and-forth with real employees and managers.",
      "Mobile companion app — a receipt capture and quick-submit flow for submissions that happen immediately after the spend.",
      "Policy engine — configurable limits by category, team, quarter, or employee level, moving ClearClaim from workflow tool to compliance tool.",
      "Finance integration — trigger the actual payment transfer from within the dashboard, closing the loop so 'Paid' is an event ClearClaim confirms rather than reports second-hand.",
    ],
    galleryImages: [
      "/Clear Claim Project/ClearClaim - Dashboard Employee.jpg",
      "/Clear Claim Project/ClearClaim Manager - Dashboardss Manager.jpg",
      "/Clear Claim Project/ClearClaim - New Expenses - Step 1.jpg",
      "/Clear Claim Project/ClearClaim - New Expenses - Step 2.jpg",
      "/Clear Claim Project/ClearClaim - New Expenses - Step 3.jpg",
      "/Clear Claim Project/ClearClaim - New Expenses - Step 4.jpg",
      "/Clear Claim Project/ClearClaim Manager - Claim Details.jpg",
      "/Clear Claim Project/ClearClaim Manager - Decline expense.jpg",
    ],
  },
];
