"use client";

import { Bell, Menu } from "lucide-react";
import { notifications } from "@/data/notifications";
import { NotificationItem } from "./NotificationItem";

export function NotificationFeed() {
  return (
    <div className="flex flex-col h-full w-full mx-auto min-h-screen">
      {/* Header */}
      <div className="px-6 sm:px-8 h-[56px] sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-10 flex items-center justify-between lg:justify-start border-b border-[#181818]">
        <h2 className="text-[16px] font-semibold text-slate-100 tracking-tight">Notifications</h2>
        <Menu size={24} className="text-slate-100 cursor-pointer lg:hidden" />
      </div>

      {/* Empty State / Feed */}
      <div className="flex-1">
        {notifications.length > 0 ? (
          <div>
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center px-6">
            <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center mb-4">
              <Bell size={32} className="text-[#555]" />
            </div>
            <h3 className="text-[18px] font-bold text-slate-100 mb-2">Nothing to see here</h3>
            <p className="text-[14px] text-[#888] max-w-sm">
              You're all caught up! New life updates and notifications will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
