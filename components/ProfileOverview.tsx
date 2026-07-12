import { Briefcase, Code2, Wrench } from "lucide-react";

export function ProfileOverview() {
  return (
    <div className="flex flex-col gap-10 p-6 sm:p-8">
      
      {/* Experience */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-slate-100">
          <Briefcase size={18} />
          <h3 className="text-[16px] font-bold">Experience</h3>
        </div>
        <div className="flex flex-col gap-8 border-l border-[#222] ml-[9px] pl-6 py-1">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#555] rounded-full -left-[31px] top-1.5"></div>
            <h4 className="text-[15px] font-bold text-slate-100">UI/UX Designer Intern</h4>
            <p className="text-[13px] text-[#888] font-medium mt-0.5">DOT Indonesia • Mar 2026 - Present</p>
            <p className="text-[14px] text-[#aaa] mt-3 leading-relaxed">
              Designing user-centered interfaces for mobile and web applications, focusing on complex SaaS dashboard layouts with high-density data visualization and intuitive project-tracking workflows. Developed high-fidelity prototypes and interactive wireframes for seamless dev hand-off, while contributing to and scaling design systems for consistent visual identity.
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-3 h-3 bg-[#0a0a0a] border-[2px] border-[#555] rounded-full -left-[31px] top-1.5"></div>
            <h4 className="text-[15px] font-bold text-slate-100">Designer & Photographer</h4>
            <p className="text-[13px] text-[#888] font-medium mt-0.5">Marketing & Communication FTI UII • Dec 2022 - Aug 2025</p>
            <p className="text-[14px] text-[#aaa] mt-3 leading-relaxed">
              Created 80+ design assets and 80+ social media posts (Instagram/TikTok) with data-driven content strategies, increasing engagement by 20%. Pioneered an interactive Reels format that achieved 1.5x higher reach than static posts, and documented 10+ faculty events through photography and videography.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 text-slate-100">
          <Code2 size={18} />
          <h3 className="text-[16px] font-bold">Tech Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {["Figma", "Framer", "React", "Next.js", "Tailwind CSS", "TypeScript"].map((tech) => (
            <span key={tech} className="px-3.5 py-1.5 bg-[#121212] border border-[#222] rounded-lg text-[13px] font-medium text-slate-200 hover:border-[#444] transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 text-slate-100">
          <Wrench size={18} />
          <h3 className="text-[16px] font-bold">Core Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {["User Research", "Wireframing", "Prototyping", "Design Systems", "Interaction Design", "Usability Testing"].map((skill) => (
            <span key={skill} className="px-3.5 py-1.5 bg-[#121212] border border-[#222] rounded-lg text-[13px] font-medium text-[#aaa] hover:border-[#444] transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
