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

export default function ZestyPage() {
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
          src="/Zesty Project/Zesty - Thumbnail.png"
          alt="Zesty showcase thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          Zesty
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A calorie tracker that feels like a buddy, not a judge
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
                Most calorie trackers are built like spreadsheets: dense numbers, red warnings when you go over, and streaks that punish you for missing a day. For people who are just starting a healthy habit, this feels intimidating, and intimidation is the fastest way to make someone stop logging.
              </p>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                This concept is built around one question: how can a calorie tracker stay accurate and useful while feeling friendly enough that people actually open it every day? The answer is a tracker that behaves like a buddy: a chameleon mascot, a soft lime palette, rounded shapes, and encouraging copy instead of guilt.
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
            A Friendly System in 3 Layers
          </p>
        </blockquote>
        <div className="space-y-4 text-[15px] text-[#aaa] leading-relaxed">
          <p>Many trackers treat friendliness as decoration, a cute icon on top of the same stressful data. This concept builds it into three layers that work together:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-slate-200">Mascot as a buddy, not a judge.</strong> The chameleon appears on the home, streak, and profile screens with short, supportive lines like "On track, keep going!" and "Your buddy is proud of you!". It never warns or scolds.
            </li>
            <li>
              <strong className="text-slate-200">Soft visual language.</strong> A lime primary color, Baloo 2 for headings and numbers, big corner radii, and a gradient with soft glows keep the data calm and approachable.
            </li>
            <li>
              <strong className="text-slate-200">Rewarding progress, not punishing misses.</strong> Streaks are a celebration screen with a weekly tracker, and over-goal states are shown without alarming language.
            </li>
          </ul>
        </div>
      </div>

      {/* Early screenshot */}
      <div className="px-6 sm:px-8 pb-12">
        <ScreenFrame
          src="/Zesty Project/Diary Screen.png"
          alt="Zesty Diary Screen"
        />
      </div>

      {/* Key Design Decisions */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>KEY DESIGN DECISIONS</AccentLabel>
        <p className="text-[15px] text-[#aaa] leading-relaxed mb-6">
          Each of these is a common pattern in tracking apps that I re-executed to feel less intimidating.
        </p>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Calories Summary",
              body: "Instead of many equal-weight numbers, Remaining is the hero number in a semi-circle gauge, with Eaten and Burned as quiet supporting numbers.",
            },
            {
              title: "Macros",
              body: "Instead of dense tables or pie charts, there are three compact progress bars with distinct, non-alarming colors (blue protein, orange carbs, yellow fats) and a simple format.",
            },
            {
              title: "Meals",
              body: "Instead of long lists of foods, meal cards have an icon inside a progress ring. The ring turns red only when a meal goes over its goal, with no warning text.",
            },
            {
              title: "Streaks",
              body: "Instead of loss-based pressure, streaks are a celebration screen with a weekly tracker, a glowing ring on the current day, and copy like 'Your buddy is proud of you!'.",
            },
            {
              title: "Goals",
              body: "Instead of a single number, there is a Goal Progress card with segmented pills, a short label, and chips for 'to go' and 'target', so the journey feels like steps.",
            },
            {
              title: "Mascot Messages",
              body: "Instead of generic notifications, short speech bubbles react to the user's state and stay positive.",
            },
          ].map((decision, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span
                className="text-[12px] font-bold shrink-0 mt-[2px]"
                style={{ color: BLUE }}
              >
                0{i + 1}
              </span>
              <div>
                <p className="text-[15px] font-semibold text-slate-100 mb-1.5">{decision.title}</p>
                <p className="text-[15px] text-[#aaa] leading-relaxed">{decision.body}</p>
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
              title: "1. Research",
              body: "Reviewed existing tracking apps to identify what felt intimidating about them, such as dense spreadsheets and punishing streaks.",
            },
            {
              title: "2. Concept",
              body: "Chose the mascot (a chameleon, to match the lime brand), the palette, and the tone of voice to build a friendly system.",
            },
            {
              title: "3. High-fidelity design",
              body: "Created the Diary, Streak, and Profile screens, plus mascot poses and the supporting states (over-goal ring, empty meals, scroll hints).",
            },
            {
              title: "4. Iteration",
              body: "Fixed contrast, aligned the data across screens, and refined the copy to ensure every element lowers pressure, not raises it.",
            },
            {
              title: "5. Feedback",
              body: "Shared on LinkedIn and collected comments from other designers to evaluate the friendly, playful feel and information hierarchy.",
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

          {/* Diary (Home) */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Diary (Home)</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                See today at a glance and log food. The screen features a summary card with Eaten, Remaining, and Burned calories. It also includes macro progress bars and meal cards with a quick add button.
              </p>
            </div>
            <ScreenFrame
              src="/Zesty Project/Diary Screen.png"
              alt="Zesty Diary Screen"
            />
          </div>

          {/* Streak */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Streak</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Celebrate the daily logging habit. This screen highlights a large streak number, the mascot on a food plate, a weekly tracker, and clear Share and Continue actions.
              </p>
            </div>
            <ScreenFrame
              src="/Zesty Project/Streak Screen.png"
              alt="Zesty Streak Screen"
            />
          </div>

          {/* Profile */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Profile</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                See stats, goals, and body metrics. The Profile screen includes a stats card, a Goal Progress card, and a 2x3 Fitness Metrics grid to review progress clearly.
              </p>
            </div>
            <ScreenFrame
              src="/Zesty Project/Profile Screen.png"
              alt="Zesty Profile Screen"
            />
          </div>

        </div>
      </div>

      {/* Bottom nav spacer */}
      <div className="h-16" />
    </div>
  );
}
