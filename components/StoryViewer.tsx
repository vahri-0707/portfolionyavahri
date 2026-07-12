"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, VolumeX, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { storiesData } from "@/data/stories";

interface StoryViewerProps {
  initialIndex: number;
  onClose: () => void;
}

export function StoryViewer({ initialIndex, onClose }: StoryViewerProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(initialIndex);
  const category = storiesData[currentCategoryIndex];
  const photos = category.content;
  
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Reset photo index when category changes (except when going backwards, which we handle in handlePrev)
    setProgress(0);
  }, [currentCategoryIndex]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [isPaused, currentPhotoIndex, currentCategoryIndex]);

  useEffect(() => {
    if (progress >= 100) {
      handleNext();
    }
  }, [progress]);
  
  const handleNext = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(prev => prev + 1);
      setProgress(0);
    } else if (currentCategoryIndex < storiesData.length - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
      setCurrentPhotoIndex(0);
      setProgress(0);
    } else {
      onClose();
    }
  }

  const handlePrev = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1);
      setProgress(0);
    } else if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(prev => prev - 1);
      setCurrentPhotoIndex(storiesData[currentCategoryIndex - 1].content.length - 1);
      setProgress(0);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Main Story Container */}
      <div className="relative w-full h-full max-w-[450px] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
        {/* Progress Bars */}
        <div className="absolute top-4 left-0 right-0 px-3 flex gap-1.5 z-50 w-full max-w-[450px] mx-auto">
          {photos.map((_, i) => (
            <div key={i} className="h-[3px] flex-1 bg-white/30 rounded-full overflow-hidden">
              {i < currentPhotoIndex && <div className="h-full bg-white w-full" />}
              {i === currentPhotoIndex && (
                <div 
                  className="h-full bg-white transition-all ease-linear duration-100" 
                  style={{ width: `${progress}%` }} 
                />
              )}
            </div>
          ))}
        </div>

        {/* Top right controls */}
        <div className="absolute top-10 right-4 flex items-center gap-3 z-50">
          <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors">
            <VolumeX size={16} />
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsPaused(!isPaused); }}
          >
            {isPaused ? <Play size={16} className="fill-white" /> : <Pause size={16} className="fill-white" />}
          </button>
          <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors" onClick={onClose}>
            <X size={18} strokeWidth={3} />
          </button>
        </div>
        
        {/* Story Content */}
        <div className="w-full h-full relative group flex items-center justify-center">
          <img 
            src={photos[currentPhotoIndex]} 
            alt={category.name}
            className="w-full h-full object-cover"
          />

          {/* Navigation Overlay */}
          <div className="absolute inset-0 flex z-40">
             <div className="w-1/2 h-full cursor-pointer" onClick={(e) => { e.stopPropagation(); handlePrev(); }} />
             <div className="w-1/2 h-full cursor-pointer" onClick={(e) => { e.stopPropagation(); handleNext(); }} />
          </div>
          
          {/* Chevron Controls */}
          {(currentPhotoIndex > 0 || currentCategoryIndex > 0) && (
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors z-50"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {(currentPhotoIndex < photos.length - 1 || currentCategoryIndex < storiesData.length - 1) && (
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/60 transition-colors z-50"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
