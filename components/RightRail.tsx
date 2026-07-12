"use client";

import { useState } from "react";
import { ArrowRight, Send, Briefcase, CheckCircle2, FolderPlus, Trophy } from "lucide-react";
import { storiesData } from "@/data/stories";
import { StoryViewer } from "@/components/StoryViewer";
import { notifications, NotificationType } from "@/data/notifications";
import { projectDetails } from "@/data/projectDetails";
import Link from "next/link";

export function RightRail() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  return (
    <>
    <div className="flex flex-col min-h-full py-8 px-6 gap-6">
      {/* Story Circles */}
      <div className="flex items-center justify-between px-1 mb-2">
        {storiesData.map((story, i) => (
          <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => setActiveStoryIndex(i)}>
            <div className="w-[64px] h-[64px] rounded-full p-[2px] bg-gradient-to-tr from-[#d62976] via-[#fa7e1e] to-[#fec053]">
              <div className="w-full h-full rounded-full border-[3px] border-[#0a0a0a] overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <span className="text-[13px] font-medium text-[#555] group-hover:text-slate-300 transition-colors">{story.name}</span>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <div className="bg-[#121212] rounded-[1.25rem] p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[15px] font-bold text-slate-100">Projects</h3>
          <Link href="/projects">
            <ArrowRight size={16} className="text-[#555] cursor-pointer hover:text-slate-300 transition-colors" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {projectDetails.slice(0, 3).map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="flex items-center gap-3 cursor-pointer group">
              <div className="w-11 h-11 rounded-[10px] overflow-hidden shrink-0 bg-[#222]">
                <img src={project.coverImage} alt={project.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col min-w-0 flex-1 pr-6">
                <h4 className="text-[14px] font-bold text-slate-100 truncate group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-[13px] text-[#555] truncate mt-0.5">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Notifications Section */}
      <div className="bg-[#121212] rounded-[1.25rem] p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[15px] font-bold text-slate-100">Notifications</h3>
          <Link href="/notifications">
            <ArrowRight size={16} className="text-[#555] cursor-pointer hover:text-slate-300 transition-colors" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {notifications.slice(0, 3).map((notification) => {
            const getIcon = (type: NotificationType) => {
              switch (type) {
                case "NEW_PROJECT": return <FolderPlus size={16} className="text-blue-500" />;
                case "NEW_POSITION": return <Briefcase size={16} className="text-purple-500" />;
                case "FINISHED_PROJECT": return <CheckCircle2 size={16} className="text-emerald-500" />;
                case "ACHIEVEMENT": return <Trophy size={16} className="text-amber-500" />;
                default: return <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />;
              }
            };
            const getBg = (type: NotificationType) => {
              switch (type) {
                case "NEW_PROJECT": return "bg-blue-500/10";
                case "NEW_POSITION": return "bg-purple-500/10";
                case "FINISHED_PROJECT": return "bg-emerald-500/10";
                case "ACHIEVEMENT": return "bg-amber-500/10";
                default: return "bg-slate-500/10";
              }
            };

            return (
              <div key={notification.id} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${getBg(notification.type)}`}>
                  {getIcon(notification.type)}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h4 className="text-[14px] font-bold text-slate-100 truncate">{notification.title}</h4>
                  <p className="text-[13px] text-[#555] mt-0.5">{notification.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="bg-[#121212] rounded-[1.25rem] p-5 flex flex-col gap-5">
        <h3 className="text-[15px] font-bold text-slate-100">Let's talk</h3>
        <div className="flex gap-3 items-end">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#222]">
            <img src="/profile-pict.jpg" alt="Ira" className="w-full h-full object-cover" />
          </div>
          <div className="bg-blue-600 rounded-[18px] rounded-bl-sm px-4 py-3 flex-1">
            <p className="text-[13px] font-medium text-white leading-relaxed">
              If you like my work then I am open to opportunities ;) ✌🏽
            </p>
          </div>
        </div>
        <div className="relative mt-1">
          <input 
            type="text" 
            placeholder="Send Message" 
            className="w-full bg-[#1a1a1a] text-slate-100 text-[13px] font-medium rounded-full py-3.5 pl-5 pr-12 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-[#555]"
          />
          <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-[34px] h-[34px] bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
            <Send size={14} className="text-white" />
          </button>
        </div>
      </div>
    </div>

    {activeStoryIndex !== null && (
      <StoryViewer 
        initialIndex={activeStoryIndex} 
        onClose={() => setActiveStoryIndex(null)} 
      />
    )}
    </>
  );
}
