"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { PostCard } from "@/components/PostCard";
import { Menu } from "lucide-react";
import { storiesData } from "@/data/stories";
import { StoryViewer } from "@/components/StoryViewer";

export function Feed() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  return (
    <>
    <div className="flex flex-col h-full w-full mx-auto min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center justify-between lg:justify-start border-b border-[#181818]">
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight">Posts</h2>
        <Menu size={24} className="text-slate-100 cursor-pointer lg:hidden" />
      </div>

      {/* Mobile Stories Section */}
      <div className="lg:hidden flex items-center justify-between px-6 sm:px-8 py-4 overflow-x-auto no-scrollbar">
        {storiesData.map((story, i) => (
          <div key={i} className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => setActiveStoryIndex(i)}>
            <div className="w-[72px] h-[72px] rounded-full p-[2px] bg-gradient-to-tr from-[#d62976] via-[#fa7e1e] to-[#fec053]">
              <div className="w-full h-full rounded-full border-[2.5px] border-[#0a0a0a] overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="text-[11px] font-medium text-[#555]">{story.name}</span>
          </div>
        ))}
      </div>
      
      {/* Feed List */}
      <div className="flex flex-col">
        {projects.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
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
