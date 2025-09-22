import { NotificationIcon } from "@/icons";
import React from "react";

const Model = () => {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-[114px] px-3 sm:px-4 py-2 sm:py-4 flex items-center justify-between hover:bg-white/10 transition-colors w-full">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white/50 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
        </div>
        Nano Banana AI
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm lg:text-[16px] flex items-center gap-1">
          <NotificationIcon
            width={10}
            height={10}
            className="sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5"
            color="white"
          />
          <span className="text-xs sm:text-sm lg:text-[16px]">20</span>
        </div>
        <button className="w-3 h-3 sm:w-4 sm:h-4 opacity-50">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-full h-full"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Model;
