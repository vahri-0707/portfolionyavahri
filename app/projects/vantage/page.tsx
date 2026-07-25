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

export default function VantagePage() {
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
          src="/vantage project/vantage thumbnail.png"
          alt="Vantage showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          Vantage
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A landing page for an AI-powered sprint workflow platform built for modern engineering teams
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
                <span className="text-[14px] text-[#aaa] leading-snug">{value}</span>
              </div>
            ))}
          </div>

          {/* Right: overview text */}
          <div className="flex-1 flex flex-col gap-4">
            <GrayLabel>Overview</GrayLabel>
            <p className="text-[14px] text-[#888] leading-relaxed">
              Vantage is a concept landing page for an AI-powered sprint workflow tool. The goal was
              to design a product marketing page that communicates complex technical value clearly and
              confidently, targeting engineering teams who are tired of manual project tracking.
            </p>
            <p className="text-[14px] text-[#888] leading-relaxed">
              The challenge with landing pages like this is striking the right balance: the product
              must feel powerful enough for technical users, yet approachable enough to convert
              first-time visitors. Every section was crafted with that conversion-first mindset in mind.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Hero ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 01</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Hero: Making the Value Unmissable
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The hero section sets the entire tone. Vantage opens with a bold headline, "High-density
            workflows in minutes," which immediately tells the user what the product does and why it
            matters. Underneath, a short subline clarifies the mechanism: turning raw engineering
            data into scheduled, queryable Kanban boards.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Two CTAs sit side by side: a primary "Get started" button in Vantage blue for users who
            are ready to act, and a softer "Explore platform" ghost button for those who want to
            learn more first. This dual-CTA pattern reduces friction for both visitor types.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Below the copy, three key selling points (TypeScript native, Figma to code, Scales
            infinitely) are laid out as compact feature chips. They work as a quick trust signal
            before the visitor even scrolls. A large animated visualization anchors the section,
            giving the page a premium, product-forward feel. At the bottom, logos of trusted
            partners like GitHub, Cursor, Linear, and Supabase add instant credibility.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/vantage 1.png"
          alt="Vantage Hero Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 2: Why Vantage ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 02</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Why Vantage: Building the Case for the Product
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            After hooking the visitor, the next job is to build credibility through substance. This
            section is titled "Built for high-velocity engineering" and walks through the core
            problems that Vantage solves, from spinning up sprints to managing thousands of
            repository events.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The layout uses a feature card on the left, "Automate sprint tracking," paired with two
            supporting capability cards on the right: "Context-aware generation" and "Developer-first
            API." This arrangement lets the primary feature breathe visually while the secondary
            cards reinforce depth.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The gradient visual treatment inside the main card pulls color from the brand palette
            and creates a sense of energy. The clean white background for this section provides a
            necessary contrast against the dark hero, signaling a shift in tone from "bold
            impression" to "trust and explanation."
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/Slice 2.png"
          alt="Vantage Why Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 3: Use Cases ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 03</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Use Cases: Showing the Product in Context
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            This section shifts into dark mode, immediately creating a visual contrast that keeps
            the user engaged as they scroll. The headline, "Automate every phase of your pipeline,"
            reframes the product from a feature list to a complete workflow solution.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            A tab-based navigation along the top lets visitors self-select their use case: Sprint
            Planning, Bug Triage, Design Hand-off, and Release Notes. This is a deliberate design
            decision that makes the page feel personalized without actually requiring personalization
            logic.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The active tab reveals a detailed feature card alongside a description panel. For Sprint
            Planning, the copy reads: "Put your sprint ops on autopilot with context-aware AI
            workflows." This language speaks directly to the decision-makers on engineering teams
            who are tired of manual stand-up updates and board grooming.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/Slice 3.png"
          alt="Vantage Use Cases Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 4: Features ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 04</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Features: The Full Capability Breakdown
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The Features section is where depth meets clarity. Under the heading "The tools behind
            your sprints," the layout organizes capabilities into two tiers: a two-up showcase of
            the flagship "Repository Intelligence" feature, followed by a 3x2 grid of supporting
            feature tiles.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The feature grid covers six core capabilities: Seamless integration, Headless API,
            Real-time syncing, Custom workflows, Enterprise security, and Automated stand-ups. Each
            tile uses an icon, a bold feature name, and a one-line description. This format is fast
            to scan and easy to remember.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            At the bottom of the section, a "Coming soon" chip introduces Predictive velocity, a
            future feature that forecasts sprint bottlenecks. Surfacing upcoming features on the
            landing page is a subtle retention mechanic, it gives visitors a reason to come back
            even if they are not ready to sign up today.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/Slice 4.png"
          alt="Vantage Features Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 5: Pricing ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 05</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Pricing: Transparent and Conversion-Focused
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The pricing section is one of the most critical pages on any SaaS landing page. Vantage
            handles it cleanly with three tiers: Free at $0, Developer at $29, and Team at $99.
            The Team plan is visually elevated with a distinct card treatment and a highlighted CTA,
            making it the obvious recommended choice without being pushy.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Below the price cards, a detailed comparison table breaks down exactly what each plan
            includes across three categories: Sprint Automation, AI Agent, and Workspace and
            Integration. Check marks and cross marks keep scanning fast and honest.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            A monthly/annual toggle at the top gives users control and implies cost savings for
            annual commitments. The copywriting beneath the title, "Start free. Scale as your
            engineering team grows," reinforces a low-risk entry point and a clear upgrade path.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/Slice 5.png"
          alt="Vantage Pricing Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 6: CTA Banner ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 06</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Closing CTA: A Final Push Before the Footer
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Before reaching the footer, the page closes with a full-width CTA banner using a warm
            gradient that cuts through the white and dark sections that came before it. The headline
            shifts tone: "The next chapter of sprint ops starts here." It is aspirational, not
            functional, which works well as a final emotional pull at the end of a long page journey.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Two buttons repeat the same CTA pattern from the hero: "Get started" for the ready
            user, and "Explore platform" for the hesitant one. Ending the page with a confident,
            gradient-wrapped invitation reinforces brand identity and gives every visitor one last
            clear action to take.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/Slice 6.png"
          alt="Vantage CTA Banner"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 7: Footer ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 07</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Footer: Trust and Discoverability
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The footer is where many landing pages phone it in. Vantage uses it intentionally. A
            four-column layout covers brand identity, product links, company information, and a
            newsletter sign-up. The dark background keeps the footer feeling like part of the brand
            rather than an afterthought.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The newsletter block on the right is a low-commitment conversion path for visitors who
            like the product but are not ready to sign up yet. It turns the footer into a lead
            capture surface. Social media icons and a clean legal bar at the bottom complete the
            picture, giving Vantage the polished, production-ready finish of a real product launch.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/vantage 7.png"
          alt="Vantage Footer"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── Full Design ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6">
        <div>
          <AccentLabel>Full Design</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Complete Landing Page Scroll
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The full design shows the entire Vantage landing page as a single continuous scroll.
            Every section flows into the next with intentional contrast in background, typography
            weight, and layout density. Tap to expand and explore the full design.
          </p>
        </div>
        <ScreenFrame
          src="/vantage project/vantage full design.png"
          alt="Vantage Full Design"
          aspectRatio="portrait"
        />
      </div>

    </div>
  );
}
