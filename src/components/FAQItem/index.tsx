"use client";

import React, { useState } from "react";

export interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  defaultOpen = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`bg-white/5 border border-white/12 rounded-[14px] overflow-hidden transition-all duration-300 shadow-[0px_0px_30px_1px_inset_rgba(255,255,255,0.05)] ${className}`}
    >
      {/* Question Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 sm:p-4 md:p-[18px] flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-xs sm:text-sm md:text-[14px] tracking-[-0.42px] leading-[20px] text-left pr-2">
          {question}
        </span>
        <div
          className={`w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ml-2 sm:ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-full h-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>

      {/* Answer Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-3 sm:px-4 md:px-[18px] pb-3 sm:pb-4 md:pb-[18px] pt-0">
          <div className="border-t border-white/10 pt-3 sm:pt-4">
            <p className="text-white/70 text-xs sm:text-sm md:text-[14px] leading-[22px] tracking-[-0.28px]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
