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
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase block mb-3">
                DESCRIPTION
              </span>
              <p className="text-[15px] text-[#aaa] leading-relaxed">{project.description}</p>
            </div>

            <div>
              <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase block mb-3">
                CONTEXT
              </span>
              <p className="text-[15px] text-[#aaa] leading-relaxed">{project.context}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col">
        {project.sections.map((section, i) => (
          <div key={i} className="px-6 sm:px-8 py-10 border-b border-[#181818] last:border-0">
            {/* Section heading */}
            <h2 className="text-[22px] sm:text-[26px] font-bold text-slate-100 mb-5 leading-snug">
              {section.heading}
            </h2>

            {/* Body — supports \n\n as paragraph breaks */}
            <div className="flex flex-col gap-4 mb-7">
              {section.body.split("\n\n").map((para, j) => (
                <p key={j} className="text-[15px] text-[#aaa] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Section image */}
            {section.image && (
              <div className="w-full rounded-[20px] overflow-hidden border border-[#181818] bg-[#0d0d0d]">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gallery strip */}
      {project.galleryImages.length > 0 && (
        <div className="px-6 sm:px-8 py-10 border-t border-[#181818]">
          <span className="text-[11px] font-bold tracking-[0.12em] text-[#444] uppercase block mb-5">
            GALLERY
          </span>
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
      )}

      {/* Bottom nav spacer */}
      <div className="h-16" />
    </div>
  );
}
