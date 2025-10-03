import React from "react";
import Input from "./input";
import RightPanelOutput from "./playgroundOutput/rightPanelOutput";
import { useViewMode } from "@/hooks/useViewMode";

const Playground = () => {
  const [viewMode] = useViewMode();

  return (
    <div className="w-full px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 lg:max-w-[1150px] lg:mx-auto">
      <div className="content-stretch flex gap-[6px] xs:gap-[8px] sm:gap-[12px] items-center justify-start relative size-full flex-col lg:flex-row lg:justify-center lg:items-stretch">
        {/* Left Panel - Input Controls - Hidden in output mode */}
        {viewMode === "input" && <Input />}

        {/* Right Panel - Output Display - Expanded in output mode */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            viewMode === "output"
              ? "w-full max-w-none"
              : "w-full lg:w-[500px] xl:w-[500px] 2xl:w-[540px]"
          }`}
        >
          <RightPanelOutput />
        </div>
      </div>
    </div>
  );
};

export default Playground;
