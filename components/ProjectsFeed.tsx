"use client";

import { Menu, Search, ChevronDown } from "lucide-react";
import Link from "next/link";

const UiUxIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
  </svg>
);

const MobileIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
    <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
  </svg>
);

const WebsiteIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6ZM15.75 21a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5h7.5Z" />
  </svg>
);

const projectCategories = [
  {
    id: "mobile",
    title: "Mobile App",
    icon: MobileIcon,
    count: 4,
    projects: [
      { id: "zesty", title: "Zesty", subtitle: "A friendly calorie tracker", image: "/Zesty Project/Zesty - Thumbnail.png" },
      { id: "sprout", title: "Sprout", subtitle: "Membership app for small businesses", image: "/Sprout Project/Sprout - Thumbnail.png" },
      { id: "weatherr", title: "Weatherr", subtitle: "Weather & earthquake-preparedness app", image: "/Weatherr Project/Weatherr - Showcase Thumbnail.png" },
      { id: "triply", title: "Triply", subtitle: "All-in-one travel companion for modern explorers", image: "/Triply Project/Triply - Thumbnail.png" },
    ]
  },
  {
    id: "landing",
    title: "Landing Page",
    icon: WebsiteIcon,
    count: 2,
    projects: [
      { id: "vantage", title: "Vantage", subtitle: "AI-powered sprint workflow landing page", image: "/vantage project/vantage thumbnail.png" },
      { id: "orbital", title: "Orbital", subtitle: "Smart automation platform landing page", image: "/orbital project/orbital thumbnail.png" },
    ]
  },
  {
    id: "saas",
    title: "SaaS Dashboard",
    icon: UiUxIcon,
    count: 2,
    projects: [
      { id: "indolink", title: "IndoLink", subtitle: "Link-in-bio builder for e-commerce brands", image: "/IndoLink Project/IndoLink - Thumbnail.png" },
      { id: "clearclaim", title: "ClearClaim", subtitle: "Reimbursement management SaaS for teams", image: "/Clear Claim Project/ClearClaim - Thumbnail Image.png" },
    ]
  },
];


export function ProjectsFeed() {
  return (
    <div className="flex flex-col h-full w-full mx-auto min-h-screen pb-20">
      {/* Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center justify-between lg:justify-start border-b border-[#181818]">
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight">Projects</h2>
        <Menu size={24} className="text-slate-100 cursor-pointer lg:hidden" />
      </div>

      {/* Search & Filter Bar */}
      <div className="px-6 sm:px-8 py-6 flex items-center gap-4 border-b border-[#181818]">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555]" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#161616] text-slate-100 text-[14px] font-medium rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#555]"
          />
        </div>
        <button className="bg-[#161616] text-slate-100 text-[13px] font-medium py-2.5 px-5 rounded-xl flex items-center gap-2 hover:bg-[#1a1a1a] transition-colors">
          All <ChevronDown size={14} className="text-[#888]" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex-1 flex flex-col">
        {projectCategories.filter(c => c.projects.length > 0).map((category) => (
          <div key={category.id} className="flex flex-col border-b border-[#181818] last:border-0 pb-2">
            
            {/* Section Header */}
            <div className="flex items-center justify-between mt-8 mb-6 px-6 sm:px-8">
              <div className="flex items-center gap-3">
                <category.icon className="text-slate-100 w-[20px] h-[20px]" />
                <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-100 tracking-tight leading-none pt-[2px]">{category.title}</h3>
              </div>
              <div className="flex items-center gap-1.5 pt-[2px]">
                <span className="text-[14px] font-bold text-slate-100 leading-none">{category.count}</span>
                <span className="text-[13px] text-[#555] font-medium leading-none">Projects</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8 px-6 sm:px-8 mb-8">
              {category.projects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="flex flex-col cursor-pointer group">
                  <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#1a1a1a] border border-[#222]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <h4 className="text-[14px] font-bold text-slate-100 mt-4 leading-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[13px] text-[#888] font-medium mt-1">
                    {project.subtitle}
                  </p>
                </Link>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
