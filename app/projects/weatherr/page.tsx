import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScreenFrameWithLightbox as ScreenFrame } from "@/components/ImageLightbox";

// Site's primary blue, matches blue-500 used across the codebase
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

export default function WeatherrPage() {
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
          src="/Weatherr Project/Weatherr - Showcase Thumbnail.png"
          alt="Weatherr showcase thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          Weatherr
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">
          A weather and earthquake-preparedness app for Indonesia
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
                Weatherr merges weather forecasting and earthquake alerts into one app, designed to
                turn raw seismic and atmospheric data into a clear instruction:{" "}
                <span className="text-slate-100 font-semibold">
                  what to do next, not just what happened.
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
            Most people check a weather app and a quake-alert app separately, and neither tells
            them what to actually{" "}
            <span style={{ color: BLUE }}>do</span> with what it just showed them.
          </p>
        </blockquote>
        <p className="text-[15px] text-[#aaa] leading-relaxed">
          Indonesia sits directly on the Pacific Ring of Fire, where earthquakes are routine and
          tsunami warnings can follow within minutes. The problem was never a lack of data. There
          are weather apps, there are quake-alert apps, and there are government notification
          systems. But each one hands you a number and stops there. Weatherr was built to close
          that gap: combining both data sources with an emergency go-bag checklist, turning
          awareness into real readiness.
        </p>
      </div>

      {/* Early screenshot pulled up before goals */}
      <div className="px-6 sm:px-8 pb-12">
        <ScreenFrame
          src="/Weatherr Project/Weatherr - Quake Screen.png"
          alt="Weatherr Quake screen"
        />
      </div>

      {/* Design Goals */}
      <Divider />
      <div className="px-6 sm:px-8 py-10">
        <AccentLabel>DESIGN GOALS</AccentLabel>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Legible under stress",
              body: "Every hazard screen has to work for someone reading it with shaking hands at 2am. That meant large numbers, minimal choices, and no screen that asks the user to make more than one decision at a time. Clarity is not a nice-to-have here, it is the entire product.",
            },
            {
              title: "Human-scaled data",
              body: "A magnitude 5.2 reading means nothing to most people. PM2.5 of 120 means even less. Every raw figure in Weatherr appears alongside a plain-language interpretation of what that number actually means for the person standing in front of the screen right now.",
            },
            {
              title: "Preparedness as habit",
              body: "Emergency apps that only get opened during disasters are apps that have already failed. Go-Bag and Settings were designed specifically to give Weatherr a reason to exist on a calm Tuesday afternoon, so that when a bad day arrives, the habit of opening it is already there.",
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
              title: "Fault-Finding",
              body: "The first step was understanding what already existed. I studied Indonesia's national weather and quake-alert services, community reporting apps, and how people actually behaved during seismic events. The pattern that kept surfacing: every tool handed the user a reading and then went silent. Nobody was telling them what to do with it.",
            },
            {
              stage: "02 Define",
              title: "Ground-Truthing",
              body: `Two moments kept coming up in research. The first was right after an alert: "I saw the number but I didn't know if I should leave the building." The second was quieter: "I know I should have an emergency bag but I genuinely have no idea what's in it." Those two moments became the problem statement for everything that followed.`,
            },
            {
              stage: "03 Structure",
              title: "Load-Bearing IA",
              body: "With two clear problem moments defined, the navigation almost drew itself. Four tabs: Home, Weather, Quake, and Go-Bag, one for each context a user might arrive in. The rule was simple: no matter where you are in the app, hazard information is never more than one tap away.",
            },
            {
              stage: "04 Iterate",
              title: "Stress-Testing",
              body: "The early version of the Quake screen led with the raw magnitude number, big and bold. But in testing, people kept hesitating. They didn't know what a 4.8 meant for them specifically. Adding the Community Felt Intensity panel (regional, human-reported severity) gave the number a human frame of reference, and trust in the screen went up immediately.",
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
                The Home screen was designed to be the calm before a storm. On any given day, it
                shows a condensed live weather summary and the most recent seismic activity side by
                side, because if you are already opening this app, you probably want to know both.
                The goal was to make checking one thing mean you have checked both, without making
                the screen feel crowded or urgent when nothing is actually happening. On the right
                side,{" "}
                <span className="text-slate-100 font-semibold">"I Felt This Quake"</span> sits
                as a persistent action because community-reported intensity data only gets better
                the more people contribute, and making it easy to report is part of what makes
                Weatherr useful for everyone.
              </p>
            </div>
            <ScreenFrame
              src="/Weatherr Project/Weatherr - Home Screen.png"
              alt="Weatherr Home screen"
            />
          </div>

          {/* Weather */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Weather Screen</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Weather screen goes deeper than a standard forecast. Beyond temperature and
                precipitation, it surfaces air-quality readings and active hazard banners, things
                like heavy-rain or flooding warnings that a basic weather app would bury in a
                scrollable list. The design challenge here was making dense environmental data feel
                approachable. The answer was translation:{" "}
                <span className="text-slate-100 font-semibold">
                  PM2.5 and ozone readings never appear alone.
                </span>{" "}
                Each one is paired with a plain-language health advisory that explains what it
                means for someone who does not have a background in air-quality science. You see
                the number, and immediately below it you see what to do about it.
              </p>
            </div>
            <ScreenFrame
              src="/Weatherr Project/Weatherr - Weather Screen.png"
              alt="Weatherr Weather screen"
            />
          </div>

          {/* Quake */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Quake Screen</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                The Quake screen is where the most critical design decisions live. Magnitude,
                distance from your location, and any active tsunami warning are the first things
                you see in large, unambiguous type. But the element that changed the most between
                early prototypes and the final version is the{" "}
                <span className="text-slate-100 font-semibold">
                  Community Felt Intensity panel.
                </span>{" "}
                This section aggregates human-reported severity from people across the affected
                region. It answers the question a magnitude number never can: how did this actually
                feel to people near you? Below all of that, SAR and BNPB hotlines are fixed
                one-tap buttons. They do not move, they do not get buried, and they do not require
                any scrolling to reach, because if someone needs them, they need them right now.
              </p>
            </div>
            <ScreenFrame
              src="/Weatherr Project/Weatherr - Quake Screen.png"
              alt="Weatherr Quake screen"
            />
          </div>

          {/* Go-Bag */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Go-Bag Screen</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Most people know they should have an emergency kit. Almost nobody actually
                maintains one. The Go-Bag screen was built to fix that. Emergency supplies are
                grouped into three categories: Essentials, Tech and Tools, and Health and Hygiene,
                each with its own{" "}
                <span className="text-slate-100 font-semibold">visible completion bar</span> so
                the state of your preparedness is never abstract. The other critical feature is
                urgency surfacing: items that are expiring soon, missing entirely, or past their
                useful life appear as prominent call-outs at the top of the screen. A prescription
                expiring in 12 days is not buried in a list; it is the first thing you see when
                you open the tab. The goal was to turn "I'll deal with this later" into something
                that felt concrete, trackable, and small enough to actually do today.
              </p>
            </div>
            <ScreenFrame
              src="/Weatherr Project/Weatherr - Go-Bag Screen.png"
              alt="Weatherr Go-Bag screen"
            />
          </div>

          {/* Settings */}
          <div className="flex flex-col gap-4">
            <div>
              <GrayLabel>Settings Screen</GrayLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">
                Not everyone has the same relationship with risk. Someone living in a high-rise in
                Jakarta has different alert needs than someone in a low-rise building in Yogyakarta.
                The Settings screen lets each person tune the app to their own context: minimum
                magnitude threshold, notification radius, and{" "}
                <span className="text-slate-100 font-semibold">
                  separate toggles for tsunami warnings versus weather alerts.
                </span>{" "}
                This granularity matters because an app that alerts you for every minor tremor in a
                seismically active country trains you to ignore alerts, which is the exact
                opposite of what Weatherr is supposed to do. Giving users precise control over
                their own{" "}
                <span className="text-slate-100 font-semibold">sensitivity threshold</span> keeps
                every alert that does come through feeling meaningful.
              </p>
            </div>
            <ScreenFrame
              src="/Weatherr Project/Weatherr - Settings Screen.png"
              alt="Weatherr Settings screen"
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
              tension: "A raw magnitude number feels precise but means nothing to most readers.",
              resolution:
                "Pair the instrument reading with a lived one. Community Felt Intensity gets equal visual weight to the magnitude figure, giving the data a human frame of reference that people can actually act on.",
            },
            {
              tension: "Weather and quake data compete for the same home screen real estate.",
              resolution:
                "One condensed summary line for each on Home, with full detail one tap away in dedicated tabs. The home screen becomes a status check, not an information dump.",
            },
            {
              tension: "Flat preparedness checklists get opened once and then abandoned.",
              resolution:
                "Split into three named categories each with its own visible progress bar. Progress becomes something you can see and something you can feel, which is what makes you come back.",
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
            "Unified two separate daily habits (checking weather and checking for quakes) into a single screen that people open by default.",
            "Replaced a raw magnitude reading with a community-verified severity scale that people can actually interpret and act on.",
            "Turned the abstract goal of having an emergency kit into a trackable, category-based checklist with visible progress.",
            "Kept every critical emergency action (reporting a quake, calling SAR) reachable in one tap from anywhere in the app.",
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
              body: "The Community Felt Intensity panel and the Go-Bag category structure are both hypotheses right now. The next step is validating them with real users in seismically active regions of Indonesia to find out what works and what still creates friction.",
            },
            {
              title: "Offline mode",
              body: "One of the most likely scenarios in which someone needs this app is also the scenario most likely to take down connectivity. A degraded offline state for both the Quake screen and the Go-Bag checklist needs to exist so the app is still useful when the network is not.",
            },
            {
              title: "Localization",
              body: "Weatherr is designed for Indonesia, but Indonesia has over 700 living languages. Extending beyond English and Bahasa Indonesia to include regional languages spoken in the country's highest-risk provinces is not a polish task; it is part of what makes the app genuinely accessible to the people who need it most.",
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
            { src: "/Weatherr Project/Weatherr - Home Screen.png", alt: "Home Screen" },
            { src: "/Weatherr Project/Weatherr - Weather Screen.png", alt: "Weather Screen" },
            { src: "/Weatherr Project/Weatherr - Settings Screen.png", alt: "Settings Screen" },
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
