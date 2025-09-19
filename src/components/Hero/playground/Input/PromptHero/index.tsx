import { MagicWandIcon, DuplicateIcon } from "@/icons";
import React, { useState } from "react";

const PromptHero = () => {
  const [prompt, setPrompt] = useState("");

  const handleMagicClick = () => {
    // Add magic prompt enhancement logic here
    console.log("Magic wand clicked!");
  };

  const handleCopyClick = () => {
    // Copy prompt to clipboard
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      console.log("Prompt copied to clipboard!");
    }
  };

  return (
    <div className="bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col h-[200px] items-start justify-between p-[16px] relative rounded-[24px] shrink-0 w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(235,240,255,0.2)] group">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(235,240,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] transition-all duration-300 group-hover:border-[rgba(235,240,255,0.2)]"
      />

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter prompt here"
        className="bg-transparent border-none outline-none resize-none w-full h-full text-white placeholder-[rgba(255,255,255,0.6)] font-['Mona_Sans:Regular',_sans-serif] text-[16px] leading-[24px] transition-all duration-300 focus:placeholder-[rgba(255,255,255,0.8)]"
        rows={6}
      />

      <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full">
        <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] items-center justify-start p-[6px] relative rounded-[8px] shrink-0 transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:scale-105 cursor-pointer group/magic">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] transition-all duration-300 group-hover/magic:border-[rgba(255,255,255,0.2)]"
          />
          <button
            onClick={handleMagicClick}
            className="relative shrink-0 size-[16px] transition-all duration-300 hover:scale-110"
            title="Enhance prompt with AI"
          >
            <MagicWandIcon width={16} height={16} color="white" />
          </button>
        </div>

        <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] items-center justify-start p-[6px] relative rounded-[8px] shrink-0 transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:scale-105 cursor-pointer group/copy">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] transition-all duration-300 group-hover/copy:border-[rgba(255,255,255,0.2)]"
          />
          <button
            onClick={handleCopyClick}
            className="relative shrink-0 size-[16px] transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
