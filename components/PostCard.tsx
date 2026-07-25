"use client";

import { Heart, Pin, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { useState } from "react";
import Link from "next/link";

export function PostCard({ post }: { post: Project }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = post.images || (post.image ? [post.image] : []);
  const hasMultipleImages = images.length > 1;

  return (
    <>
      <div id={`post-${post.id}`} className="scroll-mt-[56px] flex flex-col pt-4 pb-6 px-6 sm:px-8 border-b border-[#181818] last:border-0 transition-colors group/post">
      
      {/* Header Row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#181818]">
           <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-full h-full object-cover"
           />
        </div>
        
        {/* Name & Meta info */}
        <div className="flex items-center gap-1.5 flex-wrap min-w-0">
          <h3 className="text-[14px] font-bold text-slate-100">{post.author.name.toLowerCase()}</h3>
          
          {post.author.verified && (
             <span className="text-blue-500 flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
                  <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.79-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.74 2.76 1.867 3.475-.084.285-.13.585-.13.89 0 2.21 1.71 4 3.918 4 .537 0 1.05-.12 1.52-.336 1.052 1.154 2.54 1.86 4.135 1.86 1.595 0 3.083-.706 4.135-1.86.47.216.983.336 1.52.336 2.21 0 3.918-1.79 3.918-4 0-.305-.046-.605-.13-.89 1.127-.715 1.867-2.015 1.867-3.475zM10.3 16.4l-3.3-3.3 1.4-1.4 1.9 1.9 5.3-5.3 1.4 1.4-6.7 6.7z" />
                </svg>
             </span>
          )}

          <span className="text-[#555] mx-0.5">•</span>
          <span className="text-[13px] text-[#888] font-medium">{post.date}</span>

          {post.pinned && (
             <div className="flex items-center gap-1.5 text-[#555] ml-2">
                 <Pin size={14} className="fill-[#555] text-[#555]" />
                 <span className="text-[13px] font-medium">Pinned</span>
             </div>
          )}
        </div>
      </div>

      {/* Caption (Aligned with name: avatar w-8 (32) + gap-3 (12) = 44px offset) */}
      <div className="ml-[44px] -mt-0.5 mb-3">
        <p className="text-[14px] text-slate-100 leading-relaxed font-normal whitespace-pre-wrap">
          {post.caption}
        </p>
      </div>

      {/* Image Container (Indented to center of avatar, right edge flush) */}
      {images.length > 0 && (
        <div 
          className="ml-8 mb-3 h-[320px] sm:h-[400px] bg-[#050505] rounded-[24px] border border-[#181818] overflow-hidden flex items-center justify-center cursor-pointer group/image"
          onClick={() => setIsImageOpen(true)}
        >
          {hasMultipleImages ? (
            <div className="flex w-full h-full gap-0.5">
              {images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${post.caption} ${idx}`} 
                  className="w-1/2 h-full object-cover group-hover/image:opacity-90 transition-opacity"
                />
              ))}
            </div>
          ) : (
            <img 
              src={images[0]} 
              alt={post.caption} 
              className="w-full h-full object-contain group-hover/image:opacity-90 transition-opacity"
            />
          )}
        </div>
      )}

      {/* Actions Row (Aligned with name) */}
      <div className="ml-[44px] flex items-center gap-8 mt-1">
         <div className="flex items-center gap-2 group cursor-pointer text-[#888] hover:text-rose-500 transition-colors">
           <Heart size={18} className="text-[#888] group-hover:text-rose-500 transition-colors" />
           <span className="text-[14px] font-medium">Like</span>
         </div>
         
         <div className="flex items-center gap-2 group cursor-pointer text-[#888] hover:text-blue-500 transition-colors">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] group-hover:text-blue-500 transition-colors">
             <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
             <polyline points="16 6 12 2 8 6"></polyline>
             <line x1="12" y1="2" x2="12" y2="15"></line>
           </svg>
           <span className="text-[14px] font-medium">Share</span>
         </div>

         {post.projectLink && (
           <Link
             href={post.projectLink}
             className="ml-auto flex items-center gap-1.5 text-[13px] font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
           >
             View Project
             <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
           </Link>
         )}
      </div>
    </div>

    {/* Full Screen Image Modal */}
    {isImageOpen && (
      <div 
        className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center backdrop-blur-sm"
        onClick={() => setIsImageOpen(false)}
      >
        <button 
          className="absolute top-6 right-6 w-10 h-10 bg-[#222]/50 hover:bg-[#333] rounded-full flex items-center justify-center text-slate-200 transition-colors z-[60]"
          onClick={(e) => {
            e.stopPropagation();
            setIsImageOpen(false);
          }}
        >
          <X size={20} />
        </button>
        <div className="relative w-full h-full p-4 sm:p-12 md:p-24 flex items-center justify-center group/modal">
          {hasMultipleImages && (
            <>
              <button 
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#222]/50 hover:bg-[#333] rounded-full flex items-center justify-center text-slate-200 transition-colors z-[70] opacity-0 group-hover/modal:opacity-100 disabled:opacity-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(prev => Math.max(0, prev - 1));
                }}
                disabled={currentImageIndex === 0}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#222]/50 hover:bg-[#333] rounded-full flex items-center justify-center text-slate-200 transition-colors z-[70] opacity-0 group-hover/modal:opacity-100 disabled:opacity-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(prev => Math.min(images.length - 1, prev + 1));
                }}
                disabled={currentImageIndex === images.length - 1}
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-[70] bg-black/40 px-3 py-1.5 rounded-full">
                {images.map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-white/40'}`} 
                  />
                ))}
              </div>
            </>
          )}

          <img 
            src={images[currentImageIndex]} 
            alt={post.caption} 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    )}
    </>
  );
}
