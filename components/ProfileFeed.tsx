"use client";

import { ArrowLeft, Briefcase, MapPin, Calendar, LayoutGrid, User } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { PostCard } from "./PostCard";
import { ProfileOverview } from "./ProfileOverview";

const myProjects = [
  {
    id: "p1",
    title: "E-Commerce App Redesign",
    description: "A complete overhaul of the user experience for a major e-commerce platform, focusing on conversion rates and accessibility.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2560&auto=format&fit=crop",
    tags: ["UI/UX", "Mobile App", "Figma"]
  },
  {
    id: "p2",
    title: "Fintech Dashboard",
    description: "Designing a clean and intuitive dashboard for financial data visualization, making complex analytics easy to digest.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
    tags: ["Web App", "Dashboard", "Design System"]
  }
];
import Link from "next/link";

export function ProfileFeed() {
  const [activeTab, setActiveTab] = useState<"posts" | "overview">("posts");

  return (
    <div className="flex flex-col h-full w-full mx-auto min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center border-b border-[#181818]">
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight">Vahri Maulana</h2>
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Cover Image */}
        <div className="w-full h-[160px] sm:h-[200px] bg-[#1a1a1a]">
          <img 
            src="/profile-background.jpg" 
            alt="Cover Banner" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Avatar & Message Button Row */}
        <div className="px-6 sm:px-8 flex justify-between items-start relative">
          {/* Avatar (overlapping banner) */}
          <div className="relative -mt-10 sm:-mt-14 w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-[#181818]">
            <img 
              src="/profile-pict.jpg" 
              alt="Vahri Maulana" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Message Button */}
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-[14px] font-bold py-2 px-5 rounded-full transition-colors">
              Message
            </button>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="px-6 sm:px-8 mt-6 mb-6">
        <h1 className="text-[15px] font-bold text-slate-100 leading-tight">Vahri Maulana</h1>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[15px] text-[#888]">@vhrimlna</span>
          <span className="text-blue-500 flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.79-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.74 2.76 1.867 3.475-.084.285-.13.585-.13.89 0 2.21 1.71 4 3.918 4 .537 0 1.05-.12 1.52-.336 1.052 1.154 2.54 1.86 4.135 1.86 1.595 0 3.083-.706 4.135-1.86.47.216.983.336 1.52.336 2.21 0 3.918-1.79 3.918-4 0-.305-.046-.605-.13-.89 1.127-.715 1.867-2.015 1.867-3.475zM10.3 16.4l-3.3-3.3 1.4-1.4 1.9 1.9 5.3-5.3 1.4 1.4-6.7 6.7z" />
            </svg>
          </span>
        </div>
        
        <p className="text-[15px] text-slate-100 mt-2.5 leading-relaxed">
          Perhaps everything turns out good.
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-[#888] text-[14px]">
          <div className="flex items-center gap-1.5">
            <Briefcase size={16} />
            <span>UI/UX Designer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={16} />
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={16} />
            <span>Joined January 2025</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full border-t border-[#181818] pt-4 pb-3 flex justify-center bg-[#0a0a0a]">
        <div className="inline-flex bg-[#121212] rounded-lg p-1">
          <button 
            onClick={() => setActiveTab("posts")}
            className={`flex items-center justify-center gap-2 px-6 py-1.5 rounded-md text-[13px] font-medium transition-all ${
              activeTab === "posts" 
                ? "bg-[#2a2a2a] text-slate-100" 
                : "text-[#888] hover:text-slate-300"
            }`}
          >
            <LayoutGrid size={14} />
            <span>Posts</span>
          </button>
          <button 
            onClick={() => setActiveTab("overview")}
            className={`flex items-center justify-center gap-2 px-6 py-1.5 rounded-md text-[13px] font-medium transition-all ${
              activeTab === "overview" 
                ? "bg-[#2a2a2a] text-slate-100" 
                : "text-[#888] hover:text-slate-300"
            }`}
          >
            <User size={14} />
            <span>Overview</span>
          </button>
        </div>
      </div>

      {/* Feed Content */}
      <div className="flex-1 pb-20">
        {activeTab === "posts" ? (
          <div>
            {projects.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <ProfileOverview />
        )}
      </div>
    </div>
  );
}
