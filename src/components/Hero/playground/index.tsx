import React from "react";
import Input from "./Input";
import RightPanelOutput from "./output/RightpanelOutput";

const Playground = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="content-stretch flex gap-[12px] sm:gap-[16px] items-center justify-start relative size-full flex-col lg:flex-row">
        {/* Left Panel - Input Controls */}
        <Input />

        {/* Right Panel - Output Display */}
        <RightPanelOutput />
      </div>
    </div>
  );
};

export default Playground;
