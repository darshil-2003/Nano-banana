import React from "react";
import { DocumentIcon } from "@/icons";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="relative z-10 py-0">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)]">
            <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
              How It Works
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4">
            Step Into Smarter Creation with Nano Banana
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[18px] tracking-[0.36px] max-w-4xl mx-auto">
            Nano Banana transforms the way you create with simple, smart, and
            powerful tools at your fingertips. From quick edits to advanced
            customization, it makes every step effortless so you can focus on
            bringing ideas to life faster and better.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((step, index) => (
            <div key={step} className="flex-1 max-w-sm text-center relative">
              <div className="bg-white/10 border border-white/20 rounded-[42px] w-[60px] h-[60px] flex items-center justify-center mx-auto mb-6">
                <DocumentIcon width={25} height={24} color="white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl xl:text-[24px] font-medium mb-3 capitalize">
                {step === 1 && "Veniam Quod Aenea"}
                {step === 2 && "Dis Eget Animi"}
                {step === 3 && "Ubi Elit Felis"}
              </h3>
              <p className="text-white/50 text-sm sm:text-base xl:text-[16px] leading-relaxed">
                {step === 1 &&
                  "Sit ex maximus UT-officii egesta aenea ipsa ipsumdolorel enim — 100% sapient cum labore."}
                {step === 2 &&
                  "Sed ex interdu MI-posuere labore donec illa sedutdoetali sint — 100% molesti nam aliqui."}
                {step === 3 &&
                  "Sum ut consect ID-gravida congue fugia elit sedloremlabo elit — 100% officii nam semper."}
              </p>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/24 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
