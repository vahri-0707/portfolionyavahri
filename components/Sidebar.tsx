"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Bell, Folder, Images, User } from "lucide-react";
import { useSearch } from "./SearchContext";
import { ClockWidget } from "./ClockWidget";

export function Sidebar() {
  const pathname = usePathname();
  const { openSearch } = useSearch();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Search", href: "/search", icon: Search },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "Gallery", href: "/blog", icon: Images },
    { name: "Profile", href: "/profile", icon: User },
  ];

  return (
    <div className="flex flex-col h-full py-8 px-6">
      {/* Profile Header */}
      <div className="flex items-center gap-3 mb-6 pl-2">
        <div className="w-[42px] h-[42px] rounded-[14px] overflow-hidden shrink-0">
          <img 
            src="/profile-pict.jpg" 
            alt="Vahri Maulana" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center h-[42px]">
          <h1 className="text-[13px] font-bold text-slate-100 leading-none">Vahri Maulana</h1>
          <p className="text-[13px] text-[#555] mt-[7px] leading-none">UI/UX Designer</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          if (item.name === "Search") {
            return (
              <button 
                key={item.name} 
                onClick={openSearch}
                className={`flex items-center w-full gap-3 px-5 py-2 mx-2 rounded-[10px] text-[13px] font-semibold transition-colors text-[#555] hover:bg-white/[0.03] hover:text-slate-200`}
              >
                <Icon 
                  size={16} 
                  className="text-[#555]" 
                  strokeWidth={2.5}
                  fill="none"
                />
                {item.name}
              </button>
            );
          }
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-3 px-5 py-2 mx-2 rounded-[10px] text-[13px] font-semibold transition-colors ${
                isActive 
                  ? "bg-[#161616] text-slate-100" 
                  : "text-[#555] hover:bg-white/[0.03] hover:text-slate-200"
              }`}
            >
              <Icon 
                size={16} 
                className={isActive ? "text-slate-100" : "text-[#555]"} 
                strokeWidth={2.5}
                fill="currentColor"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <ClockWidget />
    </div>
  );
}
