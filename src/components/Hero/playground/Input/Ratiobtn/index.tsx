import React from "react";
import { useGenerate } from "@/hooks/useGenerate";
import { AspectRatioIcon } from "@/icons";

const RatioButton = () => {
  const { aspectRatio, setAspectRatio } = useGenerate();

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-[114px] px-3 sm:px-4 py-2 sm:py-4 flex items-center justify-between hover:bg-white/10 transition-colors w-full">
      <div className="flex items-center gap-2 sm:gap-3">
        <AspectRatioIcon
          width={16}
          height={16}
          className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]"
        />
        <span className="text-[#ebf0ff] text-xs sm:text-sm lg:text-base">
          Aspect Ratio
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-3 h-3 sm:w-4 sm:h-4 border border-white rounded" />
          <select
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            className="bg-transparent text-white text-xs sm:text-sm font-semibold tracking-wider border-none outline-none cursor-pointer"
          >
            <option value="1:1" className="bg-gray-800">
              1:1
            </option>
            <option value="16:9" className="bg-gray-800">
              16:9
            </option>
            <option value="4:3" className="bg-gray-800">
              4:3
            </option>
            <option value="3:4" className="bg-gray-800">
              3:4
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RatioButton;
