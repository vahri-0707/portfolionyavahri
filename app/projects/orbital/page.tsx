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

export default function OrbitalPage() {
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
          src="/orbital project/orbital thumbnail.png"
          alt="Orbital showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          Orbital
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A landing page for a smart automation platform that unifies design, engineering, and workflow management in one place
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
              Orbital is a concept landing page for a smart automation platform targeting agile
              product teams. It sits at the intersection of design handoff, sprint management, and
              cross-app synchronization, three pain points that teams constantly juggle across
              scattered tools.
            </p>
            <p className="text-[14px] text-[#888] leading-relaxed">
              The design challenge here was ambitious: communicate a multi-feature product clearly
              and confidently to both designers and engineers, without overwhelming either audience.
              Every section of this landing page was built around one question: what does this
              visitor need to see right now to take one step closer to signing up?
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Hero ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 01</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Hero: The First Handshake with the Product
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The hero opens with a striking visual: a circular orbit diagram made entirely of app
            logos, Figma, Notion, GitHub, Zoom, Google Drive, and more, all orbiting the Orbital
            brand center. This is not just decoration. It is the product concept made visible in a
            single glance. The visitor immediately understands: this is a platform that connects
            everything.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The headline lands cleanly in the center: "Smart automation to scale your work." Below
            it, a subline explains the scope without being vague: "Whether it's daily routines or
            major campaigns, align your entire workflow easily and drive growth effortlessly." Two
            CTAs sit below, "Start your trial" in Orbital blue and "Book a demo call" as a ghost
            button, giving two different entry points for two different visitor mindsets.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Social proof appears twice. At the top, Google and Capterra ratings (4.8 and 4.9
            respectively) anchor trust before a single word of copy is read. At the bottom, a
            partner logo bar shows Vercel, Google, Asana, Dropbox, Loom, Sentry, Glean, and
            Chainlink under the label "Trusted By 4,000+ Teams Across 25 Countries." Both
            placements are intentional: trust at the top to lower skepticism, logos at the bottom
            to validate scale.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 1.png"
          alt="Orbital Hero Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 2: Features ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 02</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Features: One System, Both Sides of the Team
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            After the hero earns attention, the Features section earns trust. The headline, "One
            system. Both sides. Perfect handoff," speaks directly to the designer-engineer gap that
            most cross-functional teams know all too well. It is specific enough to resonate and
            broad enough to cover the full product promise.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Three feature cards are laid out in a 3-column grid, each with a distinct icon and a
            small product preview at the bottom. Smart Workflows shows a deploy pipeline interface.
            Intelligent Tasking previews an AI-suggested priority order. Cross App-Sync visualizes
            a live data stream pushing changes to Notion, Linear, and GitHub simultaneously.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Each card does two things at once: names the feature in a simple headline and shows it
            in action through a lightweight product mock. This combination of claim plus evidence is
            a classic landing page pattern that works because it reduces the leap of faith the
            visitor has to make. A "Start your trial" CTA sits in the top right, visible before the
            user even finishes reading the section.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 2.png"
          alt="Orbital Features Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 3: Use Cases ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 03</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Use Cases: Built for Every Role on the Team
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The use cases section shifts the conversation from "what does Orbital do" to "what does
            Orbital do for you specifically." The headline, "Built for product teams. Scaled for
            growth," sets the aspiration. The subline, "See how Orbital resolves everyday
            bottlenecks for designers, engineers, and product leads," names every key persona in a
            single sentence.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Four use case cards are arranged in a 2x2 grid, each with a descriptive product mock
            inside. Smart Workflows shows a design token extraction pipeline. Sprint and Backlog
            Planning shows a kanban board connecting sprint tasks to a live design canvas and
            backlog items. Design-to-Code Handoff is the most detailed card, showing a full
            Orbital AI pipeline that maps design canvas objects to semantic structure and generates
            production-ready code.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The fourth card, Stakeholder Reviews, shows a share link view of a dashboard with
            avatar icons of collaborators, communicating that Orbital is not just for builders
            but also for the people who approve, review, and sign off. Each card works as a
            self-contained mini use case, so a visitor can find themselves in at least one of them.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 3.png"
          alt="Orbital Use Cases Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 4: Benefits ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 04</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Benefits: The Power of a Synchronized Workflow
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The Benefits section moves from features and use cases into the deeper emotional
            payoff: what life looks like when your team actually operates in sync. The headline
            states it plainly: "The power of a synchronized workflow." The subtext frames Orbital
            as a replacement for disconnected handoffs, not just an addition to an existing stack.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            A two-column layout divides the section into a benefit list on the left and a product
            visualization on the right. The four listed benefits are Contextual Feedback, Dynamic
            Layout Views, Centralized Tech Docs, and Automated Pipelines. Each gets a short,
            direct description that speaks to a real workflow pain point without any bloat.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The right side shows two stacked product screens: a workflow builder canvas showing
            trigger and action nodes, and a task board side by side with a workflow JSON view.
            These are not generic mockups; they are specific enough to feel like real software,
            which makes the benefit claims feel credible and grounded. A "Start your trial" button
            in the top right keeps the conversion path visible throughout.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 4.png"
          alt="Orbital Benefits Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 5: Integrations ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 05</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Integrations: Connect Your Entire Stack
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            One of the first questions any technical buyer asks is: "Will this work with the tools
            we already use?" The Integrations section answers that immediately and visually. The
            headline, "Connect your workflow, scale faster," is followed by a subline that names
            three specific integration categories: design environments, code editors, and version
            control systems.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Instead of a flat list of logos, the section uses a mosaic-style bento grid where
            integration logos are distributed across tiles of different sizes. The grid includes
            Git, Figma, VS Code, TypeScript, GitLab, ClickUp, Notion, Slack, Vercel, Zapier,
            React, Svelte, Vue, and more. The varying tile sizes create visual rhythm and make
            the grid feel rich and comprehensive without becoming overwhelming.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            A soft gradient wash in the background adds depth and keeps the section from feeling
            flat. A single "Start for free" CTA at the bottom ties the visual exploration back
            to action. The message is clear: your stack is already here; Orbital is the layer
            that brings it all together.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 5.png"
          alt="Orbital Integrations Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 6: Testimonials ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 06</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Testimonials: Real Teams, Real Results
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            At this point in the page, the visitor has learned what Orbital does, seen it in
            action, and scanned the integrations. Now they need to hear from someone who has
            actually used it. The Testimonials section delivers exactly that, with the headline
            "Trusted by teams managing complex workflows" reinforcing the same complexity-to-clarity
            promise that Orbital leads with everywhere.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The testimonials are displayed as horizontally scrollable cards, each anchored by the
            logo of a recognizable company: Vercel, Loom, and Asana. The visible Loom quote reads:
            "Dealing with high-density data used to clutter our screens. Orbital's dashboard
            layouts are a breath of fresh air, clean, and scalable." The Asana quote (partially
            visible) speaks to bidirectional sync updating technical specs in milliseconds.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Each card includes an avatar photo and a name with title, giving the testimonials
            human specificity. "Elena Rodriquez, Lead Product Manager, Loom" is not just a
            name; it is a signal that real people in real product roles trust this tool. The
            carousel format also implies there are more testimonials beyond what is visible,
            reinforcing the sense of community adoption.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 6.png"
          alt="Orbital Testimonials Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 7: Pricing ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 07</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Pricing: Clear Plans for Every Stage
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The Pricing section handles one of the trickiest parts of any SaaS landing page:
            showing price without scaring anyone away. The headline, "Pick the plan that works
            for your teams," keeps the framing collaborative and team-oriented rather than
            transactional.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Three plans are presented side by side: Starter at $0 forever, Plus at $19 per user
            per month, and Pro at $49 per user per month. The Plus plan uses a subtle blue
            highlight card and the only filled CTA button, "Get Started," which makes it the
            recommended tier without requiring any explicit "Most Popular" badge. The visual
            hierarchy does the work instead.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Each card has a clear one-line audience description: Starter is for solo developers,
            Plus is for agile teams syncing workflows, and Pro is for large organizations managing
            high-density data. The included features list beneath each plan is concise and honest,
            no padding, no filler. The Orbital corner-bracket motif on each card ties the pricing
            section back to the overall design language and creates visual consistency throughout
            the page.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 7.png"
          alt="Orbital Pricing Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 8: FAQ ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 08</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            FAQ: Removing the Last Barriers to Conversion
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            By the time a visitor reaches the FAQ section, they are likely interested but have
            specific blockers. The FAQ is designed to clear those blockers before the visitor
            navigates away. The section opens with "Frequently Asked Questions" and a short note
            that acknowledges more help is available through the support team, which itself
            builds confidence.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Three tabs organize the questions by context: Getting started, Collaboration, and
            Support. The active tab, Getting started, expands the first question immediately:
            "How does Orbital handle real-time synchronization?" The answer is detailed and
            technical, citing a low-latency WebSocket architecture and bidirectional sync that
            eliminates asynchronous lag. This kind of specificity signals to technical buyers
            that Orbital is not a surface-level product.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            Five additional questions are collapsed below the first, covering prerequisites,
            data fidelity during migrations, code extraction from designs, access role structure,
            and high-density data rendering. Each topic maps directly to a real concern a
            technical evaluator would bring into a purchase decision. The FAQ is not an
            afterthought here; it is a closing argument.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 8.png"
          alt="Orbital FAQ Section"
          aspectRatio="landscape"
        />
      </div>

      <Divider />

      {/* ── SECTION 9: CTA + Footer ── */}
      <div className="px-6 sm:px-8 py-10 flex flex-col gap-6 border-b border-[#181818]">
        <div>
          <AccentLabel>Section 09</AccentLabel>
          <h2 className="text-[20px] sm:text-[22px] font-bold text-slate-100 leading-tight mb-3">
            Closing CTA and Footer: The Final Invitation
          </h2>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            The page closes with a full-width closing section that transitions from practical
            detail back into aspiration. The headline, "Synchronize your stack. Accelerate
            engineering," is the boldest, most condensed version of the entire product promise.
            Two short lines do what an entire page of copy has been building toward: position
            Orbital as the thing that makes everything else work better together.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed mb-2">
            Behind the text, an abstract blue hemisphere visualization creates a sense of depth
            and visual drama. It feels premium and purposeful, not like a stock gradient. The
            two CTAs appear again: "Start your trial" and "Book a demo call," the same pair from
            the hero, but now with the weight of the full page behind them.
          </p>
          <p className="text-[14px] text-[#888] leading-relaxed">
            The footer below uses a clean four-column layout: brand identity with a newsletter
            email capture on the left, then Product, Company, and Legal link columns. The email
            field paired with a "Start your trial" button makes the footer itself a conversion
            surface. Social icons, a copyright line, and a "Back to top" link close out the page
            in a way that feels complete and professional. Nothing is left half-finished.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital 9.png"
          alt="Orbital Closing CTA and Footer"
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
            The full design shows the entire Orbital landing page as one continuous scroll.
            From the orbit-diagram hero to the closing CTA, every section flows with consistent
            spacing, typography, and brand language. Tap to expand and explore the full design.
          </p>
        </div>
        <ScreenFrame
          src="/orbital project/orbital full design.png"
          alt="Orbital Full Design"
          aspectRatio="portrait"
        />
      </div>

    </div>
  );
}
