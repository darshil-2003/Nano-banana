import React, { useState, useRef, useEffect } from "react";
import { useGenerate } from "@/hooks/useGenerate";
import { AspectRatioIcon } from "@/icons";

const RatioButton = () => {
  const { aspectRatio, setAspectRatio } = useGenerate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: "1:1", label: "1:1" },
    { value: "16:9", label: "16:9" },
    { value: "4:3", label: "4:3" },
    { value: "3:4", label: "3:4" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionSelect = (value: string) => {
    setAspectRatio(value);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="bg-white/[0.02] border border-white/10 rounded-[114px] px-3 sm:px-4 py-2 sm:py-4 flex items-center justify-between hover:bg-white/10 transition-colors w-full relative cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <AspectRatioIcon
          width={16}
          height={16}
          className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]"
        />
        <span className="text-[#ebf0ff] text-xs sm:text-sm lg:text-[16px]">
          Aspect Ratio
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white rounded" />
          <div className="relative">
            <div className="bg-transparent text-white text-xs sm:text-sm lg:text-[16px] font-semibold tracking-wider flex items-center gap-1">
              {aspectRatio}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {isOpen && (
              <div className="absolute top-full right-0 mt-1 bg-[#161617] border border-white/12 rounded-lg shadow-lg z-50 min-w-[80px] backdrop-blur-xl">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionSelect(option.value);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs sm:text-sm lg:text-[16px] font-semibold tracking-wider transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      aspectRatio === option.value
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatioButton;
