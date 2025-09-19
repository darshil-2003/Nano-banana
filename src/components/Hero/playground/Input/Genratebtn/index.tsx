import React from "react";
import { useGenerate } from "@/hooks/useGenerate";

const GenerateButton = () => {
  const { handleGenerate } = useGenerate();
  return (
    <button
      onClick={handleGenerate}
      className="bg-[#9e67fa] box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[99px] shrink-0 w-full transition-all duration-300 hover:bg-[#8a5ae8] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9e67fa]/25 active:scale-[0.98] cursor-pointer"
    >
      <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Generate</p>
      </div>
    </button>
  );
};

export default GenerateButton;
