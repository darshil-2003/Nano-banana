import React from "react";

const RightPanelOutput = () => {
  return (
    <div className="flex flex-row items-center self-stretch w-full">
      <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.1)] h-[300px] sm:h-[400px] md:h-[500px] lg:h-full relative rounded-[24px] sm:rounded-[32px] shrink-0 w-full max-w-[530px]">
        <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[20px] sm:px-[80px] md:px-[120px] lg:px-[156px] py-[120px] sm:py-[180px] md:py-[220px] lg:py-[248px] relative w-full">
          <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-zinc-400 text-center">
            <p className="leading-[normal] whitespace-pre">
              Try AI Image Generator Now
            </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_4px_1px_inset_rgba(0,0,0,0.05)]" />
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(235,240,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] sm:rounded-[32px]"
        />
      </div>
    </div>
  );
};

export default RightPanelOutput;
