import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const HeroHeader = () => {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[16px] items-center justify-start leading-[0] not-italic relative shrink-0 text-center w-full max-w-[1070px] mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="font-['Mona_Sans:SemiBold',_sans-serif] min-w-full relative shrink-0 text-[60px] text-white tracking-[1.2px]"
        style={{ width: "min-content" }}
        variants={fadeInUp}
      >
        <h1 className="leading-[normal] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px]">
          Photoeditbytext Transform Any Photo Using Just Words
        </h1>
      </motion.div>
      <motion.div
        className="font-['Mona_Sans:Regular',_sans-serif] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] tracking-[0.36px] w-full max-w-[836px]"
        variants={fadeInUp}
      >
        <p className="leading-[normal]">
          Transform ideas into beautiful visuals with text-to-image and
          image-to-image. Enjoy fast generation, effortless editing, and
          professional-quality results in seconds.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HeroHeader;
