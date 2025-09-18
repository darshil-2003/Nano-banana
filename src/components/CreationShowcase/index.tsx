import React from "react";
import CreationShowcaseItem from "./CreationShowcaseItem";

const CreationShowcase = () => {
  return (
    <div id="contact">
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4 py-0 ">
          Your Next Creation Awaits
        </h2>
        <p className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[18px] tracking-[0.36px] max-w-4xl mx-auto ">
          Try Nano Banana AI now and experience effortless editing, instant
          effects, and professional results — all in just a few clicks.
        </p>
      </div>
      <CreationShowcaseItem />
    </div>
  );
};

export default CreationShowcase;
