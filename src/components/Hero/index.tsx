import { useHandleFile } from "@/hooks/useHandleFIle";

import React from "react";
import HeroHeader from "./HeroHeader";
import Playground from "./playground";

const Hero = () => {
  return (
    <div id="hero" className="relative z-10">
      {/* Hero Content */}
      <div className="px-4 sm:px-6 lg:px-16 xl:px-[222px] py-16 sm:py-20 md:py-24 lg:py-[120px]">
        <HeroHeader />

        {/* Generator Interface */}
        <Playground />
      </div>
    </div>
  );
};

export default Hero;
