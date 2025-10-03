import React from "react";
import Image from "next/image";

const Model = () => {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-[80px] xs:rounded-[90px] sm:rounded-[100px] md:rounded-[114px] px-2 xs:px-2.5 sm:px-3 md:px-4 py-1.5 xs:py-2 sm:py-2.5 md:py-4 flex items-center justify-between hover:bg-white/10 transition-colors w-full">
      <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
        <Image
          src="/images/inspiration/ModelIcon.png"
          alt="Model Icon"
          width={24}
          height={24}
          className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6"
        />
        <span className="text-white font-medium text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px]">
          Nano Banana AI
        </span>
      </div>
    </div>
  );
};

export default Model;
