import React from "react";
import ImageUpload from "./ImageUpload";
import PromptHero from "./PromptHero";
import Model from "./Model";
import RatioButton from "./Ratiobtn";
import GenerateButton from "./Genratebtn";

const Input = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[12px] sm:gap-[16px] items-start justify-start p-[12px] sm:p-[16px] relative rounded-[24px] sm:rounded-[32px] shrink-0 w-full lg:max-w-[530px] z-10 md:h-[678px] ">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(235,240,255,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] sm:rounded-[32px]  "
      />

      {/* Image Upload Section */}

      <ImageUpload />

      {/* Prompt Input Section */}

      <PromptHero />

      {/* Controls Section */}
      <div className="content-stretch flex flex-col gap-[12px] sm:gap-[16px] items-start justify-start relative shrink-0 w-full">
        {/* Model Selection */}
        <Model />

        {/* Aspect Ratio */}
        <RatioButton />

        {/* Generate Button */}
        <GenerateButton />
      </div>
    </div>
  );
};

export default Input;
