"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bell, Folder } from "lucide-react";
import { useSearch } from "./SearchContext";

export function MobileBottomNav() {
  const pathname = usePathname();
  const { openSearch } = useSearch();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#181818] z-50 flex items-center justify-around px-4 pb-2">
      <Link href="/" className="p-2 cursor-pointer flex flex-col items-center group">
        <Home 
          size={24} 
          className={pathname === "/" ? "text-slate-100" : "text-[#555] group-hover:text-slate-200 transition-colors"} 
          fill={pathname === "/" ? "currentColor" : "none"} 
          strokeWidth={pathname === "/" ? 2.5 : 2}
        />
      </Link>
      
      <button onClick={openSearch} className="p-2 cursor-pointer flex flex-col items-center group">
        <Search 
          size={24} 
          className="text-[#555] group-hover:text-slate-200 transition-colors" 
          strokeWidth={2}
        />
      </button>

      <Link href="/projects" className="p-2 cursor-pointer flex flex-col items-center group">
        <Folder 
          size={24} 
          className={pathname === "/projects" ? "text-slate-100" : "text-[#555] group-hover:text-slate-200 transition-colors"} 
          strokeWidth={pathname === "/projects" ? 2.5 : 2}
          fill={pathname === "/projects" ? "currentColor" : "none"}
        />
      </Link>

      <Link href="/notifications" className="p-2 cursor-pointer flex flex-col items-center group">
        <Bell 
          size={24} 
          className={pathname === "/notifications" ? "text-slate-100" : "text-[#555] group-hover:text-slate-200 transition-colors"} 
          fill={pathname === "/notifications" ? "currentColor" : "none"} 
          strokeWidth={pathname === "/notifications" ? 2.5 : 2}
        />
      </Link>
      
      <Link href="/profile" className="p-2 cursor-pointer flex flex-col items-center group">
        <div className={`w-[28px] h-[28px] rounded-[10px] overflow-hidden transition-all ${pathname === "/profile" ? "border-[2px] border-slate-100" : "border-[2px] border-transparent opacity-80 group-hover:opacity-100"}`}>
          <img src="/profile-pict.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </Link>
    </div>
  );
}
