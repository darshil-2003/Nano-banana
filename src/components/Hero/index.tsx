import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animations";
import HeroHeader from "./HeroHeader";
import Playground from "./playground";

const Hero = () => {
  return (
    <motion.div
      id="hero"
      className="relative z-10"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      {/* Hero Content */}
      <motion.div
        className="px-4 sm:px-6 lg:px-16 xl:px-[222px] py-16 sm:py-20 md:py-24 lg:py-[120px]"
        variants={staggerContainer}
      >
        <HeroHeader />

        {/* Generator Interface */}
        <motion.div variants={fadeIn}>
          <Playground />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
