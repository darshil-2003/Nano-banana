import React from "react";
import Image from "next/image";

const Model = () => {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-[114px] px-3 sm:px-4 py-2 sm:py-4 flex items-center justify-between hover:bg-white/10 transition-colors w-full">
      <div className="flex items-center gap-2 sm:gap-3">
        <Image
          src="/images/inspiration/ModelIcon.png"
          alt="Model Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <span className="text-white font-medium">Nano Banana AI</span>
      </div>
    </div>
  );
};

export default Model;
