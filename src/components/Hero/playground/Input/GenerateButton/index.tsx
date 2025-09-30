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
      className={`box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[99px] shrink-0 w-full transition-all duration-300 ${
        isDisabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-[#9e67fa] hover:bg-[#8a5ae8] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9e67fa]/25 active:scale-[0.98] cursor-pointer"
      }`}
    >
      {isLoading && <Loader size="small" color="white" className="mr-2" />}
      <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">
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
