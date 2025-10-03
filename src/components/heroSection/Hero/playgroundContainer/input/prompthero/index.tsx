"use client";

import { MagicWandIcon, DuplicateIcon } from "@/icons";
import React from "react";
import { usePrompt } from "@/hooks/usePrompt";
import Loader from "@/components/loader";

const PromptHero = () => {
  const { prompt, setPrompt, isEnhancing, enhancePrompt, copyPrompt } =
    usePrompt();

  const handleMagicClick = async () => {
    try {
      await enhancePrompt();
      // No toast for enhancement, only for errors in console
    } catch (error) {
      console.error("Failed to enhance prompt:", error);
      // No toast for enhancement errors
    }
  };

  const handleCopyClick = () => {
    copyPrompt();
    // Toast is already handled in the copyPrompt function
  };

  return (
    <div className="bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col h-[160px] xs:h-[180px] sm:h-[200px] md:h-[220px] items-start justify-between p-[12px] xs:p-[14px] sm:p-[16px] relative rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] shrink-0 w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(235,240,255,0.2)] group">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(235,240,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] transition-all duration-300 group-hover:border-[rgba(235,240,255,0.2)]"
      />

      <textarea
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
        placeholder="Enter prompt here"
        className="bg-transparent border-none outline-none resize-none w-full h-full text-white placeholder-[rgba(255,255,255,0.6)] font-['Mona_Sans:Regular',_sans-serif] text-[14px] xs:text-[15px] sm:text-[16px] leading-[20px] xs:leading-[22px] sm:leading-[24px] transition-all duration-300 focus:placeholder-[rgba(255,255,255,0.8)]"
        rows={6}
      />

      <div className="content-stretch flex gap-[4px] xs:gap-[5px] sm:gap-[6px] items-center justify-end relative shrink-0 w-full top-1 xs:top-1.5 sm:top-2">
        <div
          className={`bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] xs:gap-[9px] sm:gap-[10px] items-center justify-start p-[4px] xs:p-[5px] sm:p-[6px] relative rounded-[6px] xs:rounded-[7px] sm:rounded-[8px] shrink-0 transition-all duration-300 ${
            isEnhancing
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-[rgba(255,255,255,0.2)] hover:scale-105 cursor-pointer"
          } group/magic`}
        >
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px] xs:rounded-[7px] sm:rounded-[8px] transition-all duration-300 group-hover/magic:border-[rgba(255,255,255,0.2)]"
          />
          <button
            onClick={handleMagicClick}
            disabled={isEnhancing}
            className={`relative shrink-0 size-[14px] xs:size-[15px] sm:size-[16px] transition-all duration-300 ${
              isEnhancing ? "cursor-not-allowed" : "hover:scale-110"
            }`}
            title={
              isEnhancing ? "Enhancing prompt..." : "Enhance prompt with AI"
            }
          >
            {isEnhancing ? (
              <Loader size="small" color="white" />
            ) : (
              <MagicWandIcon width={16} height={16} color="white" />
            )}
          </button>
        </div>

        <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] xs:gap-[9px] sm:gap-[10px] items-center justify-start p-[4px] xs:p-[5px] sm:p-[6px] relative rounded-[6px] xs:rounded-[7px] sm:rounded-[8px] shrink-0 transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:scale-105 cursor-pointer group/copy">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px] xs:rounded-[7px] sm:rounded-[8px] transition-all duration-300 group-hover/copy:border-[rgba(255,255,255,0.2)]"
          />
          <button
            onClick={handleCopyClick}
            className="relative shrink-0 size-[14px] xs:size-[15px] sm:size-[16px] transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            title="Copy prompt"
            disabled={!prompt}
          >
            <DuplicateIcon width={16} height={16} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptHero;
