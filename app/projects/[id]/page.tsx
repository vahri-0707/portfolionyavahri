import { projectDetails } from "@/data/projectDetails";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projectDetails.map((p) => ({ id: p.id }));
}

// ─── Shared sub-components (same visual language as the rest of the site) ──────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase block mb-3">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] sm:text-[26px] font-bold text-slate-100 mb-5 leading-snug">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="border-b border-[#181818]" />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projectDetails.find((p) => p.id === id);

  if (!project) notFound();

  const metaLeft = [
    { label: "MY ROLE", value: project.role },
    {
      label: "TEAMMATE",
      value: project.teammates.length === 1 ? project.teammates[0] : null,
      values: project.teammates.length > 1 ? project.teammates : null,
    },
    { label: "TOOLS", value: project.tools.join(", ") },
    { label: "TIMELINE", value: project.timeline },
  ];

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
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Block */}
      <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-[#222]">
        <h1 className="text-[28px] sm:text-[34px] font-bold text-slate-100 leading-tight mb-2">
          {project.title}
        </h1>
        <p className="text-[15px] text-[#666] leading-relaxed">{project.tagline}</p>
      </div>

      {/* Meta Grid — left labels + right description */}
      <div className="px-6 sm:px-8 py-8 border-b border-[#222]">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Left column — role/team/tools/timeline */}
          <div className="flex flex-col gap-7 sm:w-[180px] shrink-0">
            {metaLeft.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase">
                  {item.label}
                </span>
                {item.values ? (
                  <div className="flex flex-col gap-0.5">
                    {item.values.map((v) => (
                      <span key={v} className="text-[15px] font-semibold text-slate-100">
                        {v}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[15px] font-semibold text-slate-100">{item.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right column — description + context */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <SectionLabel>DESCRIPTION</SectionLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">{project.description}</p>
            </div>
            <div>
              <SectionLabel>CONTEXT</SectionLabel>
              <p className="text-[15px] text-[#aaa] leading-relaxed">{project.context}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Standard content sections (existing projects) ────────────────────── */}
      {project.sections.length > 0 && (
        <div className="flex flex-col">
          {project.sections.map((section, i) => (
            <div key={i} className="px-6 sm:px-8 py-10 border-b border-[#181818] last:border-0">
              <SectionHeading>{section.heading}</SectionHeading>
              <div className="flex flex-col gap-4 mb-7">
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-[15px] text-[#aaa] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              {section.image && (
                <div className="w-full rounded-[20px] overflow-hidden border border-[#181818] bg-[#0d0d0d]">
                  <img src={section.image} alt={section.heading} className="w-full object-cover" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── Extended sections (Weatherr-style rich case studies) ─────────────── */}

      {/* Design Goals */}
      {project.goals && project.goals.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>DESIGN GOALS</SectionLabel>
            <div className="flex flex-col gap-4">
              {project.goals.map((goal, i) => {
                const [bold, ...rest] = goal.split(" — ");
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#444] mt-[7px] shrink-0" />
                    <p className="text-[15px] text-[#aaa] leading-relaxed">
                      <span className="text-slate-100 font-semibold">{bold}</span>
                      {rest.length > 0 && ` — ${rest.join(" — ")}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Process */}
      {project.process && project.process.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>PROCESS</SectionLabel>
            <div className="flex flex-col gap-0 border-l border-[#222] ml-[5px] pl-6">
              {project.process.map((step, i) => {
                const [stageLabel, ...titleRest] = step.title.split(" — ");
                return (
                  <div key={i} className="relative pb-8 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute w-2.5 h-2.5 bg-[#0a0a0a] border-[2px] border-[#555] rounded-full -left-[29px] top-1" />
                    <p className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase mb-1">
                      {stageLabel}
                    </p>
                    <h3 className="text-[15px] font-bold text-slate-100 mb-2">
                      {titleRest.join(" — ")}
                    </h3>
                    <p className="text-[15px] text-[#aaa] leading-relaxed">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Solution Walkthrough */}
      {project.walkthrough && project.walkthrough.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>SOLUTION WALKTHROUGH</SectionLabel>
            <div className="flex flex-col gap-10">
              {project.walkthrough.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {/* Screen label + body */}
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase mb-1.5">
                      {item.screen}
                    </p>
                    <p className="text-[15px] text-[#aaa] leading-relaxed">{item.body}</p>
                  </div>
                  {/* Screenshot */}
                  <div className="w-full rounded-[20px] overflow-hidden border border-[#181818] bg-[#0d0d0d]">
                    <img
                      src={item.image}
                      alt={item.screen}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Key Decisions */}
      {project.keyDecisions && project.keyDecisions.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>KEY DECISIONS</SectionLabel>
            <div className="flex flex-col gap-5">
              {project.keyDecisions.map((kd, i) => (
                <div
                  key={i}
                  className="rounded-[16px] border border-[#1e1e1e] bg-[#0d0d0d] p-5 flex flex-col gap-3"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[#555] uppercase">
                      Tension
                    </span>
                    <p className="text-[14px] text-[#888] leading-relaxed">{kd.tension}</p>
                  </div>
                  <div className="border-t border-[#222]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-slate-400 uppercase">
                      Resolution
                    </span>
                    <p className="text-[14px] text-[#aaa] leading-relaxed">{kd.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Outcomes */}
      {project.outcomes && project.outcomes.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>OUTCOME</SectionLabel>
            <div className="flex flex-col gap-3">
              {project.outcomes.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#444] mt-[7px] shrink-0" />
                  <p className="text-[15px] text-[#aaa] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Next Steps */}
      {project.nextSteps && project.nextSteps.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>NEXT STEPS</SectionLabel>
            <div className="flex flex-col gap-4">
              {project.nextSteps.map((step, i) => {
                const [bold, ...rest] = step.split(" — ");
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-[11px] font-bold text-[#444] mt-[3px] shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-[15px] text-[#aaa] leading-relaxed">
                      <span className="text-slate-100 font-semibold">{bold}</span>
                      {rest.length > 0 && ` — ${rest.join(" — ")}`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Gallery strip */}
      {project.galleryImages.length > 0 && (
        <>
          <Divider />
          <div className="px-6 sm:px-8 py-10">
            <SectionLabel>GALLERY</SectionLabel>
            <div className="flex flex-col gap-4">
              {project.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="w-full rounded-[20px] overflow-hidden border border-[#181818] bg-[#0d0d0d]"
                >
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Bottom nav spacer */}
      <div className="h-16" />
    </div>
  );
}
