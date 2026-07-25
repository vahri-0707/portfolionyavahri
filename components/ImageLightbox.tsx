"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageLightbox({ src, alt, className = "w-full object-cover" }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* Clickable image */}
      <div
        className="relative group cursor-zoom-in"
        onClick={() => setOpen(true)}
      >
        <img src={src} alt={alt} className={className} />
        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 rounded-[inherit]">
          <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-[12px] font-medium px-3 py-1.5 rounded-full">
            <ZoomIn size={13} />
            <span>Expand</span>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={18} />
          </button>

          {/* Image */}
          <img
            src={src}
            alt={alt}
            className="relative z-10 max-w-full max-h-full object-contain rounded-[12px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

interface ScreenFrameWithLightboxProps {
  src: string;
  alt: string;
  aspectRatio?: string;
}

export function ScreenFrameWithLightbox({ src, alt }: ScreenFrameWithLightboxProps) {
  return (
    <div className="w-full rounded-[20px] overflow-hidden border border-[#181818] bg-[#0d0d0d]">
      <ImageLightbox src={src} alt={alt} className="w-full object-cover" />
    </div>
  );
}
