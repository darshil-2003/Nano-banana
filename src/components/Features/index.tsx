import React from "react";

const Features = () => {
  return (
    <div id="features" className="relative z-10 lg:py-10 ">
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)]">
          <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
            Our Features
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4">
          What Makes Nano Banana AI Different
        </h2>
        <p className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[18px] tracking-[0.36px] max-w-4xl mx-auto">
          We&apos;ve designed Nano Banana AI to combine simplicity with power.
          Enjoy effortless editing, professional-quality results, and
          cloud-based access — all in one seamless experience.
        </p>
      </div>
    </div>
  );
};

export default Features;
