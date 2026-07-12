import { Briefcase, CheckCircle2, FolderPlus, Trophy } from "lucide-react";
import { Notification } from "@/data/notifications";

export function NotificationItem({ notification }: { notification: Notification }) {
  const getIcon = () => {
    switch (notification.type) {
      case "NEW_PROJECT":
        return (
          <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <FolderPlus size={18} />
          </div>
        );
      case "NEW_POSITION":
        return (
          <div className="w-9 h-9 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center">
            <Briefcase size={18} />
          </div>
        );
      case "FINISHED_PROJECT":
        return (
          <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <CheckCircle2 size={18} />
          </div>
        );
      case "ACHIEVEMENT":
        return (
          <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Trophy size={18} />
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-full bg-slate-500/10 text-slate-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-current" />
          </div>
        );
    }
  };

  return (
    <div className="flex gap-4 px-6 sm:px-8 py-5 border-b border-[#181818] hover:bg-[#121212] transition-colors cursor-pointer group">
      <div className="flex-shrink-0 pt-0.5">
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[14px] font-bold text-slate-100 leading-tight truncate">
            {notification.title}
          </h3>
          <span className="text-[12px] text-[#555] flex-shrink-0">
            {notification.date}
          </span>
        </div>
        <p className="text-[13px] text-[#888] mt-1.5 leading-relaxed group-hover:text-[#aaa] transition-colors">
          {notification.description}
        </p>
      </div>
    </div>
  );
}
