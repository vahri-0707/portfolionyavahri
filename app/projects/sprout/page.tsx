import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScreenFrameWithLightbox as ScreenFrame } from "@/components/ImageLightbox";

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

export default function SproutPage() {
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
          src="/Sprout Project/Sprout - Thumbnail.png"
          alt="Sprout showcase thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          Sprout
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A membership and e-commerce app driving loyalty for small business owners
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
              <p className="text-[15px] text-[#aaa] leading-relaxed mb-4">
                Sprout introduces a Membership feature to drive user loyalty, especially for small business owners (grocery stores or warungs) who routinely restock their business supplies through the app.
              </p>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                This case study designs the Membership feature comprehensively: member cards and tier systems, benefit comparisons across tiers, guides on how to earn points (missions and limited offers), urgency-driven promos, reward catalogs with category filters, transparent point history, and personalization, all wrapped in a consistent blue visual identity across all screens.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Persona Analysis pull-quote */}
      <Divider />
      <div className="px-6 sm:px-8 py-12">
        <AccentLabel>USER PERSONA ANALYSIS</AccentLabel>
        <blockquote className="border-l-2 pl-5 mb-8" style={{ borderColor: BLUE }}>
          <p className="text-[19px] sm:text-[22px] text-slate-100 font-semibold leading-snug">
            Based on the app context (restocking groceries, digital scales, free shipping, cashback to points), the main users are small business owners who shop for stock routinely, not just end consumers.
          </p>
        </blockquote>
        <div className="space-y-4 text-[15px] text-[#aaa] leading-relaxed">
          <p>
            <strong className="text-slate-200">Persona: "Bu Rina, Grocery Store Owner"</strong>
          </p>
          <p>
            <strong className="text-slate-200">Profile:</strong> 25-45 years old, uses a smartphone daily, but has limited operational time, so she opens the app only during short breaks.
          </p>
          <p>
            <strong className="text-slate-200">Behavior:</strong> Restocks supplies (cooking oil, rice, daily goods) routinely via Sprout, uses points or vouchers to reduce operational costs.
          </p>
          <p>
            <strong className="text-slate-200">Goals:</strong> Wants to know the benefits of upgrading tiers, the fastest way to earn points, and which rewards are relevant to her store needs, without guessing.
          </p>
          <p>
            <strong className="text-slate-200">Pain Points:</strong> Tier progress feels abstract without a clear picture of upper-tier benefits, promos don't feel urgent, and catalogs are hard to filter as the number of rewards grows.
          </p>
        </div>
      </div>

      {/* Early screenshot */}
      <div className="px-6 sm:px-8 pb-12">
        <ScreenFrame
          src="/Sprout Project/Sprout - Main 1.png"
          alt="Sprout Home Screen"
        />
      </div>

      {/* Key Problems to Solve */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>PROBLEMS TO SOLVE</AccentLabel>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Tier Upgrade Motivation",
              body: "Progress to the next tier (e.g., '2,550 more points') alone is not enough. Users need to know the concrete benefits of that tier and how it compares to others.",
            },
            {
              title: "How to Earn Points",
              body: "Users need explicit explanations on all methods to increase points (scan member code, order via app, daily check-in), not just through transactions.",
            },
            {
              title: "Promo Urgency",
              body: "Promos without time limits offer no psychological push to use them immediately. Multiplier labels and expiration details are required.",
            },
            {
              title: "Transparent Point Ledger",
              body: "Users need to track both incoming points and where their points were spent for full transparency and trust.",
            },
            {
              title: "Reward Search Efficiency",
              body: "An expanding reward catalog requires category filters so users can quickly find rewards relevant to their needs.",
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

      {/* Design Process */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>DESIGN PROCESS</AccentLabel>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "1. Discover",
              body: "Mapped the app context (restock groceries, digital scales, free shipping, cashback into points) to understand who the users are and what they need from a membership program.",
            },
            {
              title: "2. Define",
              body: "Formulated the 'Bu Rina' persona and compiled the list of problems: motivation to upgrade, explicit point earning methods, promo urgency, filterable catalog, and transparent ledger.",
            },
            {
              title: "3. Ideate",
              body: "Brainstormed solutions: Gold/Platinum/Diamond comparison tabs, 'How to Earn Points' page with missions and limited offers, urgency labels, catalog category filters, point history, and personal greetings.",
            },
            {
              title: "4. Design",
              body: "Created high-fidelity mockups in Figma with a consistent blue palette, components, and card structures (tabs, banners, urgency badges, promo cards, status cards) so the entire app feels like one unified system.",
            },
            {
              title: "5. Validate",
              body: "Reviewed the end-to-end flow (home > member benefits > how to earn points) to ensure every feature is accessible in max 1-2 taps from home.",
            },
          ].map((process, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span
                className="text-[12px] font-bold shrink-0 mt-[2px]"
                style={{ color: BLUE }}
              >
                0{i + 1}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-slate-100 mb-1.5">{process.title}</p>
                <p className="text-[15px] text-[#aaa] leading-relaxed">{process.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Walkthrough */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>SOLUTION WALKTHROUGH</AccentLabel>
        <div className="flex flex-col gap-12">

          {/* Home Screen */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Home & Member Card</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The home screen acts as the main hub. The Sprout blue palette serves as the core identity. The point numbers are prominent (16px) as the hero information, because this is what users want to see at a glance. Title and description use regular body text to prevent visual clutter. 
                <br /><br />
                The status card is kept concise, showing only the tier, progress to the next tier, and total points. The QR code is kept out of the member card to avoid clutter, accessible instead via a quick "Scan QR" action.
              </p>
            </div>
            <ScreenFrame
              src="/Sprout Project/Sprout - Main 1.png"
              alt="Sprout Home Screen"
            />
          </div>

          {/* Tier Comparison */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Tier Comparison & Benefits</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Member Benefits page uses a familiar segmented control navigation (Gold / Platinum / Diamond tabs). This allows users to easily compare benefits across tiers without jumping between pages. Tier badges use distinct colors (Yellow, Gray, Blue) to be easily distinguishable at a glance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ScreenFrame
                src="/Sprout Project/Sprout - Gold Member 1.png"
                alt="Sprout Gold Member Screen"
              />
              <ScreenFrame
                src="/Sprout Project/Sprout - Platinum Member 1.png"
                alt="Sprout Platinum Member Screen"
              />
            </div>
          </div>

          {/* Catalog & Ledger */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Reward Catalog & Transparent Ledger</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The reward catalog includes category tabs (All, Groceries, Milk & Baby, Household) to speed up searches for relevant rewards. The transaction history records both incoming and outgoing points (e.g., "-3,000" when redeeming a voucher), ensuring a transparent ledger so users have full control over their point balance.
              </p>
            </div>
            <ScreenFrame
              src="/Sprout Project/Sprout - Platinum Member 1-1.png"
              alt="Sprout Platinum Member Extended Screen"
            />
          </div>

          {/* How to Earn Points */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>How to Earn Points & Missions</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Instead of empty gamification, the mission system ("Shop 5x this month to get 2,000 points") drives real business behavior: restock frequency. It provides a concrete progress bar and a deadline, motivating users to complete just one more transaction. The page also details 3 concrete methods to earn points, providing clear, actionable steps.
              </p>
            </div>
            <ScreenFrame
              src="/Sprout Project/Sprout - Cara Dapat Poin 1.png"
              alt="Sprout How to Earn Points Screen"
            />
          </div>

        </div>
      </div>



      {/* Bottom nav spacer */}
      <div className="h-16" />
    </div>
  );
}
