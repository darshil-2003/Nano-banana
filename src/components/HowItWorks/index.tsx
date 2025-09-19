import React from "react";
import { VectorIcon, DownloadIcon, DocumentIcon } from "@/icons";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="relative z-10 lg:py-0 py-10 ">
      <div className="w-full mx-auto px-6 text-center ">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)] ">
            <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4">
            Smarter Creation Made Simple
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[18px] tracking-[0.36px] max-w-4xl mx-auto">
            Turn imagination into reality with ease. Our step-by-step process
            makes creation simple, fast, and accessible to everyone.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0 w-[89%] mx-auto ">
          {[1, 2, 3].map((step, index) => (
            <div
              key={step}
              className="flex flex-col items-center justify-start flex-1 text-center relative px-0 md:px-[60px]"
            >
              <div className="bg-white/10 border border-white/20 rounded-[42px] w-[60px] h-[60px] flex items-center justify-center mb-6">
                {step === 1 && (
                  <DocumentIcon width={25} height={24} color="white" />
                )}
                {step === 2 && (
                  <VectorIcon width={25} height={24} color="white" />
                )}
                {step === 3 && (
                  <DownloadIcon width={25} height={24} color="white" />
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl md:text-2xl xl:text-[24px] font-medium capitalize">
                  {step === 1 && "Upload Image & Prompt"}
                  {step === 2 && "AI Transforms"}
                  {step === 3 && "Download Image"}
                </h3>
                <p className="text-white/50 text-sm sm:text-base xl:text-[16px] leading-relaxed">
                  {step === 1 &&
                    "Upload your photo and type a quick text instruction to describe the edit you want."}
                  {step === 2 &&
                    "The AI instantly applies smart edits, turning your prompt into high-quality results in seconds."}
                  {step === 3 &&
                    "Save your edited image instantly in high quality, ready to use anytime you need."}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:flex h-full items-center justify-center absolute top-[25px] -right-[10px]">
                  <div className="w-px h-[246px] bg-gradient-to-b from-transparent via-white/24 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
