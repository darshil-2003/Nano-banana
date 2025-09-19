import React from "react";
import Input from "./Input";
import RightPanelOutput from "./output/RightpanelOutput";

const Playground = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 lg:max-w-[1200px] lg:mx-auto ">
      <div className="content-stretch flex gap-[8px] sm:gap-[12px] items-center justify-start relative size-full flex-col lg:flex-row ">
        {/* Left Panel - Input Controls */}
        <Input />

        {/* Right Panel - Output Display */}
        <RightPanelOutput />
      </div>
    </div>
  );
};

export default Playground;
