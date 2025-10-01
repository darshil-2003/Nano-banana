"use client";

import React from "react";
import { useGenerate } from "@/contexts/GenerateContext";
import Loader from "@/components/Loader";

const GenerateButton = () => {
  const { handleGenerate, generationState } = useGenerate();

  const isLoading =
    generationState.status === "pending" ||
    generationState.status === "running";
  const isDisabled = isLoading;

  return (
    <button
      onClick={handleGenerate}
      disabled={isDisabled}
      className={`box-border content-stretch flex gap-[8px] xs:gap-[9px] sm:gap-[10px] h-[48px] xs:h-[52px] sm:h-[56px] items-center justify-center overflow-clip px-[16px] xs:px-[20px] sm:px-[24px] py-[8px] xs:py-[9px] sm:py-[10px] relative rounded-[80px] xs:rounded-[90px] sm:rounded-[99px] shrink-0 w-full transition-all duration-300 ${
        isDisabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-[#9e67fa] hover:bg-[#8a5ae8] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9e67fa]/25 active:scale-[0.98] cursor-pointer"
      }`}
    >
      {isLoading && <Loader size="small" color="white" className="mr-2" />}
      <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] xs:text-[15px] sm:text-[16px] text-nowrap text-white">
        <p className="leading-[20px] xs:leading-[22px] sm:leading-[24px] whitespace-pre">
          {isLoading
            ? generationState.status === "pending"
              ? "Preparing..."
              : "Generating..."
            : "Generate"}
        </p>
      </div>
    </button>
  );
};

export default GenerateButton;
