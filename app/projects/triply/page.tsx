import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScreenFrameWithLightbox as ScreenFrame } from "@/components/ImageLightbox";

// Site's primary blue
const BLUE = "#3b82f6";

function AccentLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3"
      style={{ color: BLUE }}
    >
      {children}
    </span>
  );
}

function GrayLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase block mb-3">
      {children}
    </span>
  );
}

function Divider() {
  return <div className="border-b border-[#181818]" />;
}

export default function TriplyPage() {
  return (
    <div className="flex flex-col h-full w-full min-h-screen">

      {/* Sticky Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center gap-3 border-b border-[#181818]">
        <Link
          href="/projects"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#181818] transition-colors"
        >
          <ArrowLeft size={18} className="text-slate-100" />
        </Link>
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight truncate">
          Projects
        </h2>
      </div>

      {/* Hero Cover */}
      <div className="w-full aspect-[16/9] bg-[#111] overflow-hidden">
        <img
          src="/Triply Project/Triply - Thumbnail.png"
          alt="Triply showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          Triply
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A travel companion app for discovering destinations, planning trips, and booking seamlessly in one place
        </p>
      </div>

      {/* Meta Grid */}
      <div className="px-6 sm:px-8 py-8 border-b border-[#222]">
        <div className="flex flex-col sm:flex-row gap-8">

          {/* Left: role / teammate / tools / timeline */}
          <div className="flex flex-col gap-7 sm:w-[180px] shrink-0">
            {[
              { label: "MY ROLE", value: "UI/UX Designer" },
              { label: "TEAMMATE", value: "Solo project, no teammates" },
              { label: "TOOLS", value: "Figma" },
              { label: "TIMELINE", value: "N/A" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <span
                  className="text-[11px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: BLUE }}
                >
                  {label}
                </span>
                <span className="text-[15px] font-semibold text-slate-100">{value}</span>
              </div>
            ))}
          </div>

          {/* Right: description */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <AccentLabel>DESCRIPTION</AccentLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Triply is a mobile travel app designed for the modern Indonesian traveler. It brings together destination discovery, day-by-day trip planning, and the entire booking flow into one product, so a trip that used to require four different apps and a spreadsheet can now{" "}
                <span className="text-slate-100 font-semibold">
                  live in one place, from the first idea to the confirmed payment.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Context pull-quote */}
      <Divider />
      <div className="px-6 sm:px-8 py-12">
        <AccentLabel>CONTEXT</AccentLabel>
        <blockquote className="border-l-2 pl-5 mb-8" style={{ borderColor: BLUE }}>
          <p className="text-[19px] sm:text-[22px] text-slate-100 font-semibold leading-snug">
            Most travelers plan in one app, book in another, and track the budget in a spreadsheet. The{" "}
            <span style={{ color: BLUE }}>trip</span> is one thing, but the tools are scattered everywhere.
          </p>
        </blockquote>
        <p className="text-[15px] text-[#aaa] leading-relaxed">
          Planning a trip in Indonesia today means bouncing between a discovery app, a booking platform, a messaging thread to coordinate with friends, and probably a notes app or Google Sheet to track who owes what. None of those tools know about the others. You can book a hotel without it knowing what day you land, and you can see an amazing destination without any sense of whether it fits your budget. Triply was built to close all of those gaps: one product where discovering a destination, building a day-by-day itinerary, and completing the booking are steps in a single continuous flow, not separate apps stitched together after the fact.
        </p>
      </div>

      {/* Early screenshot */}
      <div className="px-6 sm:px-8 pb-12">
        <ScreenFrame
          src="/Triply Project/Triply - Home Screen.png"
          alt="Triply Home screen"
        />
      </div>

      {/* Design Goals */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>DESIGN GOALS</AccentLabel>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Discovery that goes beyond the obvious",
              body: "Most travel apps surface the same popular destinations everyone already knows. Triply includes filters for Nearby, Popular, Hidden Gems, and Nature so a traveler in Jakarta can find something extraordinary within reach, not just what every tourist guide recommends.",
            },
            {
              title: "A trip plan that is actually useful",
              body: "An itinerary that only lists place names is useless when you are on the ground. The Trip Plan tab in Triply shows time slots, specific activity descriptions, addresses, and route and transportation details for each day, so the plan becomes an actual operational guide rather than a wish list.",
            },
            {
              title: "Budget transparency before commitment",
              body: "Booking surprises are the fastest way to ruin a trip. Triply shows a complete cost breakdown (Transportation, Accommodation, Activities, Meals, Fees) with expandable line items before any payment is made, so the traveler knows exactly what they are paying for and what is not included.",
            },
            {
              title: "A booking flow that collects everything once",
              body: "Fragmented booking processes ask for the same information multiple times across multiple screens. Triply handles date selection, party size, and personal details in a single structured sequence, with a Review Summary screen at the end so every detail can be verified before confirming payment.",
            },
          ].map((goal, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span
                className="text-[12px] font-bold shrink-0 mt-[2px]"
                style={{ color: BLUE }}
              >
                0{i + 1}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-slate-100 mb-1.5">{goal.title}</p>
                <p className="text-[15px] text-[#aaa] leading-relaxed">{goal.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>PROCESS</AccentLabel>
        <div className="relative flex flex-col">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-[#2a2a2a]" />
          {[
            {
              stage: "01 Research",
              title: "The Scattered Traveler",
              body: "The research phase started with one observation: people planning trips in Indonesia use a minimum of three separate apps before they even make a booking. Destination research happens on Instagram and travel blogs. Booking happens on OTAs. Budget tracking happens in WhatsApp groups or Google Sheets. The problem was not a lack of tools, it was that none of the tools were talking to each other.",
            },
            {
              stage: "02 Define",
              title: "Three Moments That Matter",
              body: `The planning journey broke down into three distinct moments where the current experience falls apart. First: "I want to go somewhere new but I don't know what's available near me or within my budget." Second: "I've picked a place but I can't figure out what to actually do each day." Third: "I'm ready to book but the process asks me the same questions four times across three different screens." Those three moments became the design brief.`,
            },
            {
              stage: "03 Structure",
              title: "One Flow, Three Tabs",
              body: "The detail page structure became the organizing principle for the whole product. A single destination page holds three tabs: Overview (the what), Trip Plan (the when and how), and Budget (the how much). Each tab answers exactly one question. Together they give a traveler everything they need to go from interested to committed without leaving the page.",
            },
            {
              stage: "04 Iterate",
              title: "The Booking Sequence Problem",
              body: "Early versions of the booking flow put date selection, party size, and personal details all on one long scrollable screen. Testing showed people kept missing fields and submitting incomplete forms. Breaking it into three distinct steps (dates, party size, personal details) with a bottom sheet for party configuration resolved the problem. Each screen has one decision to make, and the Continue button does not appear until that decision is complete.",
            },
          ].map((step, i) => (
            <div key={i} className="relative pl-8 pb-9 last:pb-0">
              <div
                className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 bg-[#0a0a0a]"
                style={{ borderColor: BLUE }}
              />
              <p
                className="text-[11px] font-bold tracking-[0.12em] uppercase mb-0.5"
                style={{ color: BLUE }}
              >
                {step.stage}
              </p>
              <h3 className="text-[15px] font-bold text-slate-100 mb-2">{step.title}</h3>
              <p className="text-[15px] text-[#aaa] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Walkthrough */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>SOLUTION WALKTHROUGH</AccentLabel>
        <div className="flex flex-col gap-12">

          {/* Home */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Home Screen</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Home screen opens with one question at the top: "What would you would like to find?" It is a prompt, not a search bar that sits there waiting to be used. Below the search field, five filter chips (All, Nearby, Popular, Hidden Gems, Nature) let the traveler narrow intent before they type anything at all. The featured destinations are displayed as horizontally scrollable cards with large photography, ratings, and location labels, giving each place enough visual real estate to be genuinely tempting rather than a list item. Below the featured section, Popular Destinations surfaces structured options with{" "}
                <span className="text-slate-100 font-semibold">pricing visible from the first view,</span>{" "}
                so cost is part of the discovery experience rather than a surprise revealed at checkout.
              </p>
            </div>
            <ScreenFrame
              src="/Triply Project/Triply - Home Screen.png"
              alt="Triply Home screen"
            />
          </div>

          {/* Overview Detail */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Overview Detail</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Tapping a destination opens the detail page, which begins with a full-bleed image gallery at the top and a slide counter showing the total number of photos available. Below the image, the destination name, location, rating, and review count are followed immediately by a social proof signal: "Trusted by 89% of adventurous travelers." Then come the three tabs: Overview, Trip Plan, and Budget. The Overview tab shows the trip&apos;s key parameters at a glance, max group size and total duration, followed by a Facilities section listing exactly what is included: Meals, Insurance, Local Guide, Accommodation, Transportation. This section answers the question every traveler asks before they even look at the price: what am I actually getting? The{" "}
                <span className="text-slate-100 font-semibold">Book Now button with the price is pinned to the bottom of the screen</span>{" "}
                on every tab, so committing to a booking is always one tap away regardless of which tab is currently active.
              </p>
            </div>
            <ScreenFrame
              src="/Triply Project/Triply - Overview Detail Screen.png"
              alt="Triply Overview Detail screen"
            />
          </div>

          {/* Trip Plan */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Trip Plan</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Trip Plan tab is where Triply goes furthest beyond what any standard booking app provides. The itinerary is structured as a day-by-day timeline: Day 1, Day 2, Day 3, each selectable at the top. Within each day, activities appear in chronological order with time slots on the left axis, venue names and descriptions when expanded, addresses, and ratings. Each activity card can be collapsed to just its title and time, or expanded to show the full detail. The second panel within this screen shows Route and Transportation, with a live map at the top displaying the route between departure point and first accommodation, and a step-by-step transport guide below it (Arrival Hall, Taxi Counter, Direct to Villa Check-in). The result is that the Trip Plan tab functions as both a{" "}
                <span className="text-slate-100 font-semibold">pre-trip reference and an on-ground navigation guide.</span>
              </p>
            </div>
            <ScreenFrame
              src="/Triply Project/Triply - Trip Plan Screen.png"
              alt="Triply Trip Plan screen"
            />
          </div>

          {/* Budget Detail */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Budget Detail</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Budget tab presents a complete Cost Breakdown before any commitment is made. Five categories (Transportation, Accommodation, Activities, Meals, Fees and Guide) are shown as collapsible rows, each with its category total on the right. Expanding Transportation, for example, reveals its two line items: Private Car for 4 days at $70 and Airport Transfer at $30, adding up to the $100 category total. This level of transparency is deliberate: a traveler who understands exactly what they are paying for is a traveler who completes the booking. Below the cost breakdown, an Included and Excluded section clarifies what the package covers (Hotel for 2 Nights, for example) and what it does not (Flight Tickets), eliminating the most common source of booking regret. The{" "}
                <span className="text-slate-100 font-semibold">total price of $340 is the same number visible on the Book Now button throughout,</span>{" "}
                so there are no hidden additions at checkout.
              </p>
            </div>
            <ScreenFrame
              src="/Triply Project/Triply - Budget Detail Screen.png"
              alt="Triply Budget Detail screen"
            />
          </div>

          {/* Booking Detail */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Booking Detail</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Tapping Book Now opens the Booking Detail screen, which handles dates and party size as the first two steps. A full monthly calendar lets the traveler select their arrival and departure dates visually; selected dates are highlighted in blue and the chosen range populates the Date to Come and Date to Leave fields below. The Number of Person field opens a bottom sheet that separates the party into three categories: Adults (18 or above), Children (Ages 2 to 17), and Infants (Under Age 2), each with plus and minus controls. This separation matters because many tours have different pricing or capacity rules for each group. Once the party composition is confirmed, the third panel on the same screen collects personal details: Is this for yourself or someone else? Then Name, Email, Phone Number, Nationality, Emergency Contact, and Special Requests, with Special Requests accepting free text (the example shown is "Wheelchair access"). The{" "}
                <span className="text-slate-100 font-semibold">Continue button carries the running total ($340) in its label throughout,</span>{" "}
                so the traveler always knows what they are about to confirm.
              </p>
            </div>
            <ScreenFrame
              src="/Triply Project/Triply - Booking Detail Screen.png"
              alt="Triply Booking Detail screen"
            />
          </div>

          {/* Review Summary and Payment */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Review Summary and Payment</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The final two screens handle confirmation and payment. The Review Summary screen groups all entered data into three sections: Destination Details (the trip name, tagline, and rating), Booking Details (dates, with an Edit Details link for correction), and Number of Person Details and Customer Details, each also editable. Every section is read-only unless the traveler taps Edit Details, which takes them back to the relevant step without losing progress elsewhere. The Confirm and Pay button appears only after all sections are reviewed, and it is the only action on the screen, reducing the chance of an accidental submission. The Payment Methods screen then offers Wallet as the pre-selected option, with Credit and Debit Card (via Add Card), PayPal, Apple Pay, and Google Pay as alternatives. The final Confirm Payment button seals the booking. The entire flow from the first calendar tap to the Confirm Payment screen involves{" "}
                <span className="text-slate-100 font-semibold">zero repeated data entry</span>{" "}
                and every entered detail is visible for review before money moves.
              </p>
            </div>
            <ScreenFrame
              src="/Triply Project/Triply - Review Summary and Payment Screen.png"
              alt="Triply Review Summary and Payment screen"
            />
          </div>

        </div>
      </div>

      {/* Key Decisions */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>KEY DECISIONS</AccentLabel>
        <div className="flex flex-col gap-5">
          {[
            {
              tension: "Discovery apps show you places but give no sense of whether a trip is actually feasible for you.",
              resolution:
                "Show pricing on the discovery card itself, not just on the detail page. A traveler who can see that Bali Journey starts from $340 per person can self-select before tapping in, making every subsequent screen more relevant.",
            },
            {
              tension: "A trip plan that only lists venues is useless when you are on the ground trying to navigate.",
              resolution:
                "Build the Trip Plan tab as both a pre-trip reference and an on-ground guide: time-stamped activities with full addresses and descriptions, plus a dedicated Route and Transportation panel with a live map and step-by-step transfer instructions.",
            },
            {
              tension: "Budget surprises after committing to a booking are the primary source of traveler regret and booking abandonment.",
              resolution:
                "The Budget tab with a full cost breakdown including expandable line items and an Included vs Excluded section is placed before the booking flow begins. The total shown there is the same total on the Confirm Payment button. No number changes between discovery and payment.",
            },
            {
              tension: "Long booking forms cause drop-off because they ask for too much at once.",
              resolution:
                "Split the booking into three focused steps: date selection, party composition (with a bottom sheet that handles three age categories separately), and personal details. Each step has exactly one job, and the Continue button is disabled until that step is complete.",
            },
          ].map((kd, i) => (
            <div
              key={i}
              className="rounded-[16px] bg-[#0d0d0d] border border-[#1e1e1e] p-5 flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#555] uppercase">
                  Tension
                </span>
                <p className="text-[14px] text-[#888] leading-relaxed">{kd.tension}</p>
              </div>
              <div className="border-t border-[#222]" />
              <div className="flex flex-col gap-1">
                <span
                  className="text-[11px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: BLUE }}
                >
                  Resolution
                </span>
                <p className="text-[14px] text-[#aaa] leading-relaxed">{kd.resolution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>OUTCOME</AccentLabel>
        <div className="flex flex-col gap-4">
          {[
            "Unified destination discovery, trip planning, and booking into a single continuous flow where each step informs the next.",
            "Made budget transparency a part of the discovery experience rather than a checkout surprise, by surfacing pricing from the first card view through to the payment confirmation screen.",
            "Replaced generic itinerary lists with a day-by-day trip plan that doubles as an on-ground navigation guide, complete with time slots, addresses, and transport routing.",
            "Resolved booking form drop-off by structuring the flow into three single-purpose steps: dates, party size, and personal details, each with its own screen and a running total always visible.",
            "Kept the Confirm Payment action clean and irreversible by surfacing a full Review Summary screen with inline Edit Details links before any money moves.",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                style={{ backgroundColor: BLUE }}
              />
              <p className="text-[15px] text-[#aaa] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>NEXT STEPS</AccentLabel>
        <div className="flex flex-col gap-5">
          {[
            {
              title: "Usability testing",
              body: "The three-tab structure and the bottom-sheet party picker are hypotheses. Validating them with real travelers, particularly on the party composition step where three age-category controls appear simultaneously, will surface whether the current model reduces confusion or adds it.",
            },
            {
              title: "Wishlist and social planning",
              body: "Travelers rarely plan trips alone. A shared wishlist feature where a group can collaboratively save and vote on destinations would match how trip planning actually happens in practice, and could be built on top of the existing destination card structure without changing the core flow.",
            },
            {
              title: "Real-time availability and pricing",
              body: "The current design treats pricing as static. Integrating live inventory data from accommodation and activity providers would make the Budget tab dynamic, reflecting actual availability for the selected dates rather than a fixed package price.",
            },
            {
              title: "Post-booking companion mode",
              body: "Once a trip is booked, the app&apos;s job is not over. A Bookings tab could surface the confirmed itinerary in a simplified day-by-day view, offline-accessible, with check-in reminders and transport alerts for each activity so the Trip Plan that helped them commit also helps them execute.",
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span
                className="text-[12px] font-bold shrink-0 mt-[2px]"
                style={{ color: BLUE }}
              >
                0{i + 1}
              </span>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                <span className="text-slate-100 font-semibold">{step.title} </span>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <GrayLabel>GALLERY</GrayLabel>
        <div className="flex flex-col gap-4">
          {[
            { src: "/Triply Project/Triply - Home Screen.png", alt: "Home Screen" },
            { src: "/Triply Project/Triply - Overview Detail Screen.png", alt: "Overview Detail" },
            { src: "/Triply Project/Triply - Trip Plan Screen.png", alt: "Trip Plan" },
            { src: "/Triply Project/Triply - Budget Detail Screen.png", alt: "Budget Detail" },
            { src: "/Triply Project/Triply - Booking Detail Screen.png", alt: "Booking Detail" },
            { src: "/Triply Project/Triply - Review Summary and Payment Screen.png", alt: "Review Summary and Payment" },
          ].map(({ src, alt }) => (
            <ScreenFrame key={src} src={src} alt={alt} />
          ))}
        </div>
      </div>

      {/* Bottom nav spacer */}
      <div className="h-16" />
    </div>
  );
}
