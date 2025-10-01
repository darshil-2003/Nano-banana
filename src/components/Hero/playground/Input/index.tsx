import React from "react";
import ImageUpload from "./ImageUpload";
import PromptHero from "./PromptHero";
import Model from "./Model";
import GenerateButton from "./GenerateButton";

const Input = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[8px] xs:gap-[12px] sm:gap-[16px] items-start justify-start p-[8px] xs:p-[12px] sm:p-[16px] relative rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] shrink-0 w-full lg:max-w-[530px] z-10 h-[450px]  md:h-[640px]">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(235,240,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px]  "
      />

      {/* Image Upload Section */}

      <ImageUpload />

      {/* Prompt Input Section */}

      <PromptHero />

      {/* Controls Section */}
      <div className="content-stretch flex flex-col gap-[8px] xs:gap-[12px] sm:gap-[16px] items-start justify-start relative shrink-0 w-full">
        {/* Model Selection */}
        <Model />

        {/* Generate Button */}
        <GenerateButton />
      </div>
    </div>
  );
};

export default Input;
