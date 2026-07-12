"use client";

import { galleryItems } from "@/data/gallery";
import { Menu, X } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Auto-open lightbox when ?open=id is in the URL
  useEffect(() => {
    const openId = searchParams.get("open");
    if (openId) {
      const item = galleryItems.find((g) => g.id === openId);
      if (item) setLightbox(item.image);
    }
  }, [searchParams]);

  const closeLightbox = () => {
    setLightbox(null);
    // Remove the ?open param from URL without navigating away
    router.replace("/blog", { scroll: false });
  };

  const aspectClass = (ratio: string) => {
    switch (ratio) {
      case "portrait":  return "aspect-[3/4]";
      case "landscape": return "aspect-[4/3]";
      default:          return "aspect-square";
    }
  };

  return (
    <div className="flex flex-col h-full w-full min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center justify-between lg:justify-start border-b border-[#181818]">
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight">Gallery</h2>
        <Menu size={24} className="text-slate-100 cursor-pointer lg:hidden" />
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 gap-3 px-4 sm:px-6 py-5 space-y-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`break-inside-avoid mb-3 rounded-[18px] overflow-hidden bg-[#111] border border-[#1e1e1e] cursor-pointer group relative ${aspectClass(item.aspectRatio)}`}
            onClick={() => setLightbox(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100">
              <p className="text-[13px] font-semibold text-white leading-tight truncate">{item.title}</p>
              <div className="flex gap-1 mt-1 flex-wrap">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom spacer for mobile nav */}
      <div className="h-16" />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 bg-[#222]/60 hover:bg-[#333] rounded-full flex items-center justify-center text-slate-200 transition-colors z-[60]"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-[20px]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a]"><div className="w-6 h-6 border-2 border-slate-500 border-t-slate-200 rounded-full animate-spin"></div></div>}>
      <GalleryContent />
    </Suspense>
  );
}
