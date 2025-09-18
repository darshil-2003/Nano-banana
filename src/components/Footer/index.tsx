import React from "react";
import { NanoBananaIcon } from "@/icons";

const Footer = () => {
  return (
    <footer className="border-t border-white/12 px-4 sm:px-6 lg:px-16 xl:px-[222px] py-6 relative z-10 bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NanoBananaIcon width={32} height={32} className="text-[#ece5ff]" />
          <span className="text-lg sm:text-xl lg:text-[25px] font-bold text-[#ece5ff] w-[120px] sm:w-[150px] lg:w-[170px]">
            Photoeditbytext
          </span>
        </div>

        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[60px] text-white/50 font-medium capitalize text-sm sm:text-base md:text-lg xl:text-[16px] tracking-[0.5px] whitespace-nowrap">
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors"
          >
            how it works
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            features
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            faq
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
