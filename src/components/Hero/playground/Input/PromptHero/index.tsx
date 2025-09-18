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
    <div className="bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col h-[200px] items-start justify-between p-[16px] relative rounded-[24px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(235,240,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]"
      />

      <div className="flex flex-col font-['Mona_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Enter prompt here</p>
      </div>

      <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0 w-full">
        <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] items-center justify-start p-[6px] relative rounded-[8px] shrink-0">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
          />
          <button
            onClick={handleMagicClick}
            className="relative shrink-0 size-[16px]"
            title="Enhance prompt with AI"
          >
            <MagicWandIcon width={16} height={16} color="white" />
          </button>
        </div>

        <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[10px] items-center justify-start p-[6px] relative rounded-[8px] shrink-0">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]"
          />
          <button
            onClick={handleCopyClick}
            className="relative shrink-0 size-[16px]"
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
