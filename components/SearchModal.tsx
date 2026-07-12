"use client";

import { Search, X, FileText, Folder, Bell, Image } from "lucide-react";
import { useSearch } from "./SearchContext";
import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/projectDetails";
import { notifications } from "@/data/notifications";
import { galleryItems } from "@/data/gallery";

type ResultItem = {
  id: string;
  title: string;
  subtitle: string;
  category: "Post" | "Project" | "Notification" | "Gallery";
  href: string;
};

// Build a flat, searchable index once
const buildIndex = (): ResultItem[] => {
  const items: ResultItem[] = [];

  // Posts (timeline)
  projects.forEach((p) => {
    items.push({
      id: `post-${p.id}`,
      title: p.caption,
      subtitle: `Post · ${p.date}`,
      category: "Post",
      href: `/#post-${p.id}`,
    });
  });

  // Projects
  projectDetails.forEach((p) => {
    items.push({
      id: `proj-${p.id}`,
      title: p.title,
      subtitle: `Project · ${p.category}`,
      category: "Project",
      href: `/projects/${p.id}`,
    });
  });

  // Notifications
  notifications.forEach((n) => {
    items.push({
      id: `notif-${n.id}`,
      title: n.description,
      subtitle: `Notification · ${n.date}`,
      category: "Notification",
      href: "/notifications",
    });
  });

  // Gallery
  galleryItems.forEach((g) => {
    items.push({
      id: `gallery-${g.id}`,
      title: g.title,
      subtitle: `Gallery · ${g.tags.join(", ")}`,
      category: "Gallery",
      href: `/blog?open=${g.id}`,
    });
  });

  return items;
};

const INDEX = buildIndex();

// Curated mixed suggestions: 2 posts + 2 projects + 2 gallery
const SUGGESTIONS: ResultItem[] = [
  ...projects.slice(0, 2).map((p) => ({
    id: `post-${p.id}`,
    title: p.caption,
    subtitle: `Post · ${p.date}`,
    category: "Post" as const,
    href: `/#post-${p.id}`,
  })),
  ...projectDetails.slice(0, 2).map((p) => ({
    id: `proj-${p.id}`,
    title: p.title,
    subtitle: `Project · ${p.category}`,
    category: "Project" as const,
    href: `/projects/${p.id}`,
  })),
  ...galleryItems.slice(0, 2).map((g) => ({
    id: `gallery-${g.id}`,
    title: g.title,
    subtitle: `Gallery · ${g.tags.join(", ")}`,
    category: "Gallery" as const,
    href: `/blog?open=${g.id}`,
  })),
];


const categoryIcon = (cat: ResultItem["category"]) => {
  switch (cat) {
    case "Post":         return <FileText size={15} className="text-blue-400" />;
    case "Project":      return <Folder   size={15} className="text-purple-400" />;
    case "Notification": return <Bell     size={15} className="text-amber-400" />;
    case "Gallery":      return <Image    size={15} className="text-emerald-400" />;
  }
};

const categoryBg = (cat: ResultItem["category"]) => {
  switch (cat) {
    case "Post":         return "bg-blue-500/10";
    case "Project":      return "bg-purple-500/10";
    case "Notification": return "bg-amber-500/10";
    case "Gallery":      return "bg-emerald-500/10";
  }
};

export function SearchModal() {
  const { isOpen, closeSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  // Filter results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  // Reset on open/close
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Keep activeIndex in bounds when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [results.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") { closeSearch(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, results.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter" && results[activeIndex]) {
        router.push(results[activeIndex].href);
        closeSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, results, activeIndex, router, closeSearch]);

  if (!isOpen) return null;

  const navigate = (href: string) => {
    router.push(href);
    closeSearch();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm"
      onClick={closeSearch}
    >
      <div
        className="w-full max-w-[560px] bg-[#121212] border border-[#252525] rounded-[1.25rem] overflow-hidden shadow-2xl flex flex-col mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center px-5 py-4 border-b border-[#1e1e1e]">
          <Search size={18} className="text-[#555] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts, projects, notifications..."
            className="flex-1 bg-transparent text-slate-100 text-[15px] focus:outline-none placeholder:text-[#444]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md hover:bg-[#222] text-[#666] hover:text-slate-200 transition-colors mr-1"
            >
              <X size={15} />
            </button>
          )}
          <kbd className="text-[11px] text-[#444] border border-[#2a2a2a] rounded-md px-1.5 py-0.5 font-mono">ESC</kbd>
        </div>

        {/* Results */}
        <div className="flex flex-col max-h-[400px] overflow-y-auto custom-scrollbar">
          {query.trim() === "" ? (
            <div className="p-2 flex flex-col gap-0.5">
              <p className="text-[11px] font-semibold text-[#444] uppercase tracking-widest px-3 pt-2 pb-1">Suggestions</p>
              {SUGGESTIONS.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.href)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-[12px] text-left transition-colors ${
                    i === activeIndex ? "bg-[#1e1e1e]" : "hover:bg-[#181818]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 ${categoryBg(item.category)}`}>
                    {categoryIcon(item.category)}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[14px] font-semibold text-slate-100 truncate leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[12px] text-[#555] mt-0.5 truncate">{item.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <p className="text-[14px] font-semibold text-slate-300 mb-1">No results for "{query}"</p>
              <p className="text-[13px] text-[#444]">Try a different keyword</p>
            </div>
          ) : (
            <div className="p-2 flex flex-col gap-0.5">
              {results.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.href)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-[12px] text-left transition-colors ${
                    i === activeIndex ? "bg-[#1e1e1e]" : "hover:bg-[#181818]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0 ${categoryBg(item.category)}`}>
                    {categoryIcon(item.category)}
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[14px] font-semibold text-slate-100 truncate leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[12px] text-[#555] mt-0.5 truncate">{item.subtitle}</span>
                  </div>
                  <span className="text-[11px] text-[#333] font-mono shrink-0">↵</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div className="px-5 py-2.5 border-t border-[#1e1e1e] flex items-center gap-4">
            <span className="text-[11px] text-[#3a3a3a]">↑↓ navigate</span>
            <span className="text-[11px] text-[#3a3a3a]">↵ open</span>
            <span className="text-[11px] text-[#3a3a3a]">ESC close</span>
          </div>
        )}
      </div>
    </div>
  );
}
