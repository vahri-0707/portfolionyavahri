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

export default function IndoLinkPage() {
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
          src="/IndoLink Project/IndoLink - Thumbnail.png"
          alt="IndoLink showcase thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          IndoLink
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A link-in-bio builder for e-commerce brands
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
                Linktree and Heylink were built for creators in general, with one global theme and a generic list of links, without considering that{" "}
                <span className="text-slate-100 font-semibold">
                  brands selling physical products need a different way to display content than creators who just share social media links.
                </span>{" "}
                IndoLink is built specifically for that niche: brand owners who want their bio page to function like a storefront, not just a list of links, complete with their own domain, instead of riding on a platform&apos;s subdomain.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Context pull-quote */}
      <Divider />
      <div className="px-6 sm:px-8 py-12">
        <AccentLabel>THE DIFFERENTIATOR</AccentLabel>
        <blockquote className="border-l-2 pl-5 mb-8" style={{ borderColor: BLUE }}>
          <p className="text-[19px] sm:text-[22px] text-slate-100 font-semibold leading-snug">
            Competitors treat all content the same. <span style={{ color: BLUE }}>IndoLink organizes appearance in a 2-layer system</span> that complements each other.
          </p>
        </blockquote>
        <p className="text-[15px] text-[#aaa] leading-relaxed mb-4">
          Competitors treat all content equally: one theme, one button shape, applicable to everything, whether it&apos;s a regular link, a product, or a promo. IndoLink compiles appearance in 2 complementary layers:
        </p>
        <ul className="list-disc pl-5 text-[15px] text-[#aaa] leading-relaxed space-y-2 mb-6">
          <li>
            <strong className="text-slate-200">Global Theme Templates:</strong> Brand owners can choose one visual personality in a single click (Minimalist, Modern Bold, Classic Store, Creative, Pixel Retro, Playful Pop, Organic Calm), which directly affects the entire page.
          </li>
          <li>
            <strong className="text-slate-200">Per-block fine-tuning:</strong> Each block type still has specific controls according to its respective functions: a Product Block needs Photo Ratio & Stock Badge, a WhatsApp Block needs Button Shape & Animation Style, a Countdown Block needs Number Style, controls that do not make sense if forced to be uniform.
          </li>
        </ul>
        <p className="text-[15px] text-[#aaa] leading-relaxed">
          Product cards and WhatsApp buttons have different visual duties; one needs to highlight photos & prices, the other needs to always look like a CTA without disrupting the catalog. But brands still need everything to feel like a cohesive unit. That is why each Block section still has a &quot;Card Template&quot; choice with the same name as the global Theme Templates, so brand owners can override one specific block without ruining the consistency of the entire theme.
        </p>
      </div>

      {/* Early screenshot pulled up before goals */}
      <div className="px-6 sm:px-8 pb-12">
        <ScreenFrame
          src="/IndoLink Project/Indolink Links My Page.png"
          alt="IndoLink Links tab"
        />
      </div>

      {/* Key Features */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>KEY FEATURES & DIFFERENTIATORS</AccentLabel>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Custom Domain & Unlimited Content",
              body: "The 'Connect Domain' button is positioned exactly next to the URL bar, always visible in the top bar, not hidden in the Settings menu. There is also no limit to the number of blocks or photos, Product Photos support up to 5 photos per product, and the Gallery Block has no photo limit.",
            },
            {
              title: "WhatsApp as the Main CTA",
              body: "In Indonesia, closing sales mostly happens via chat, not automatic checkout. Therefore, the WhatsApp Block is given 5 display styles (Solid, Outline, Floating, Bubble, Wooden Texture) plus Button Shape & Animation Style choices, so the CTA is always visible without disrupting the catalog.",
            },
            {
              title: "Native Shop Block Controls",
              body: "Controls like Track Stock (automatically hide products when stock runs out) and Click Destination (brand owners choose whether the product is directed to WhatsApp or an External Link). These are pure native IndoLink executions to close the gap found in competitor shop blocks.",
            },
            {
              title: "AI Generator with Auto-import",
              body: "Brand owners can paste product URLs from Shopee/TikTok Shop for auto-import, or simply describe their business in a single line of text if they don't have a listing on any marketplace yet. This reduces the friction of 'starting from a blank page'.",
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

      {/* Solution Walkthrough */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>SOLUTION WALKTHROUGH</AccentLabel>
        <div className="flex flex-col gap-12">

          {/* Links Tab */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Links Tab</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                This is the core workspace where brand owners manage their content. They can use the AI Generator by pasting a marketplace URL or text description for an initial draft, or manually add blocks one by one. Drag to reorder, pin for priority, and lock to secure against accidental changes. Everything from products, links, to countdown timers is managed here, giving a clear structural overview of the storefront.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Links My Page.png"
              alt="IndoLink Links My Page"
            />
          </div>

          {/* Appearance Tab */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Appearance Tab</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The appearance system is designed to be deeply customizable but fundamentally cohesive. Brand owners select a Global Theme Template for the overall visual personality. This layer dictates the background, global font styles, and base colors, establishing a unified storefront presence in just one click.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Appearance 1.png"
              alt="IndoLink Appearance settings"
            />
          </div>

          {/* Block Specific Appearance */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Granular Customization</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Moving beyond the global theme, each block type has its own set of layout and styling controls. This granular customization ensures that a product card can highlight pricing and imagery optimally, while a WhatsApp CTA can use distinct button shapes and animation styles to capture attention, all without breaking the overarching theme.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Appearance 2.png"
              alt="IndoLink specific block appearance"
            />
          </div>

          {/* Add Product Block */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Adding a Product Block</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Product block is not just a link to a product. It features 7 layout choices, Photo Ratios, Stock Badges, and Price Tags. You can add photos (up to 5), name, price, discount, toggle track stock, and set the click destination (WhatsApp/External Link).
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Add Product 1.png"
              alt="IndoLink Add Product Block"
            />
          </div>

          {/* Add WhatsApp Block */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>WhatsApp Block</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The WhatsApp Block is treated as a primary CTA. You input the number, button text, and automated message. Then you can configure the appearance: 5 layout styles, Button Shape, and Animation Style, recognizing the critical role chat plays in closing sales for Indonesian e-commerce.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Add WhatsApp 1.png"
              alt="IndoLink Add WhatsApp Block"
            />
          </div>

          {/* Add Gallery Block */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Gallery Block</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Gallery block supports multi-uploading photos without limits. Brand owners can switch between a Carousel or Static Grid layout, and fine-tune the Photo Ratio and Animation Styles to best present their lookbooks or product showcases.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Add Gallery 1.png"
              alt="IndoLink Add Gallery Block"
            />
          </div>

          {/* Add Countdown Block */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Countdown Block</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Built as a native extension for time-sensitive promotions, the Countdown Block takes a title and an end date. It provides 4 visual templates (Digital Clock, Flip Clock, Minimal Bar, Geometric) and Number Style configurations to create urgency seamlessly integrated into the page.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Add Countdown 1.png"
              alt="IndoLink Add Countdown Block"
            />
          </div>

          {/* Add Location Block */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Location Block</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                For brands with physical presence, the Location block allows adding an address, branch name, and operational hours. The appearance controls include Map Theme, Show Mini Map, and Show Operational Hours to guide foot traffic effectively.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Add Location 1.png"
              alt="IndoLink Add Location Block"
            />
          </div>

          {/* Add Link Block */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Standard Link Block</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Even standard links are given rich customization. After entering the URL, title, and optional thumbnail, users can dictate the layout, Corner Shape, Button Fill, and Animation Style, while also retaining the ability to schedule when the link should go live.
              </p>
            </div>
            <ScreenFrame
              src="/IndoLink Project/Indolink Add Link 1.png"
              alt="IndoLink Add Link Block"
            />
          </div>

        </div>
      </div>

      {/* Gallery */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <GrayLabel>GALLERY</GrayLabel>
        <div className="flex flex-col gap-4">
          {[
            { src: "/IndoLink Project/Indolink Links My Page.png", alt: "Links My Page" },
            { src: "/IndoLink Project/Indolink Appearance 1.png", alt: "Appearance 1" },
            { src: "/IndoLink Project/Indolink Appearance 2.png", alt: "Appearance 2" },
            { src: "/IndoLink Project/Indolink Add Product 1.png", alt: "Add Product" },
            { src: "/IndoLink Project/Indolink Add WhatsApp 1.png", alt: "Add WhatsApp" },
            { src: "/IndoLink Project/Indolink Add Gallery 1.png", alt: "Add Gallery" },
            { src: "/IndoLink Project/Indolink Add Countdown 1.png", alt: "Add Countdown" },
            { src: "/IndoLink Project/Indolink Add Location 1.png", alt: "Add Location" },
            { src: "/IndoLink Project/Indolink Add Link 1.png", alt: "Add Link" },
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
