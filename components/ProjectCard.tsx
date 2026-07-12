import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 border-b border-[#181818] hover:bg-[#121212] transition-colors cursor-pointer group">
      <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-[#1a1a1a] border border-[#222]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
        />
      </div>
      <div className="flex flex-col justify-center flex-1 py-1">
        <h3 className="text-[18px] font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-[14px] text-[#888] mt-2 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 mt-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[12px] font-medium text-[#aaa] bg-[#222] px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
