"use client";

import React from "react";
import {
  RegenerateIcon,
  CompareIcon,
  DownloadIcon,
  CompareCloseIcon,
  PlusIcon,
} from "@/icons";

interface ActionButtonsProps {
  isComparing: boolean;
  handleNewGeneration: () => void;
  handleRegenerate: () => void;
  handleDownload: (url: string) => void;
  resultUrl: string;
  setIsComparing: (value: boolean) => void;
}

const ActionButtons = ({
  isComparing,
  handleNewGeneration,
  handleRegenerate,
  handleDownload,
  resultUrl,
  setIsComparing,
}: ActionButtonsProps) => {
  return (
    <div className="absolute top-2 xs:top-2.5 sm:top-3 right-2 xs:right-2.5 sm:right-3 md:right-4 lg:right-4 xl:right-4 2xl:right-4 z-10 flex gap-0.5 xs:gap-1 sm:gap-1">
      {/* New Button - first position */}
      {!isComparing && (
        <div className="group relative">
          <button
            onClick={handleNewGeneration}
            className="flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
          >
            <PlusIcon />
          </button>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
            New
          </div>
        </div>
      )}

      {/* Regenerate Button - second position */}
      {!isComparing && (
        <div className="group relative">
          <button
            onClick={handleRegenerate}
            className="flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
          >
            <RegenerateIcon width={16} height={16} />
          </button>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
            Regenerate
          </div>
        </div>
      )}

      {/* Download Button - third position */}
      {!isComparing && (
        <div className="group relative">
          <button
            onClick={() => handleDownload(resultUrl)}
            className="flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
          >
            <DownloadIcon width={20} height={20} />
          </button>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
            Download
          </div>
        </div>
      )}

      {/* Compare Button - always visible, last position */}
      <div className="group relative">
        <button
          onClick={() => setIsComparing(!isComparing)}
          className="flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
        >
          {isComparing ? (
            <CompareCloseIcon width={18} height={18} />
          ) : (
            <CompareIcon width={18} height={18} />
          )}
        </button>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
          {isComparing ? "Generated" : "Original"}
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
