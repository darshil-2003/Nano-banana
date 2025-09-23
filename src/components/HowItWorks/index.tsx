import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { VectorIcon, DownloadIcon, DocumentIcon } from "@/icons";

const HowItWorks = () => {
  return (
    <motion.div
      id="how-it-works"
      className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="w-full mx-auto px-6 text-center text-rendering-optimizeLegibility antialiased">
        <motion.div className="mb-16 md:mb-20" variants={staggerContainer}>
          <motion.div
            className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)]"
            variants={fadeInUp}
          >
            <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent text-rendering-optimizeLegibility antialiased">
              How It Works
            </span>
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4 text-rendering-optimizeLegibility antialiased"
            variants={fadeInUp}
          >
            Smarter Creation Made Simple
          </motion.h2>
          <motion.p
            className="text-white/50 text-sm sm:text-base md:text-base lg:text-lg xl:text-[16px] tracking-[0.36px] max-w-4xl mx-auto px-4 md:px-0 text-rendering-optimizeLegibility antialiased"
            variants={fadeInUp}
          >
            Turn imagination into reality with ease. Our step-by-step process
            makes creation simple, fast, and accessible to everyone.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 xl:gap-0 w-[89%] mx-auto"
          variants={staggerContainer}
        >
          {[1, 2, 3].map((step, index) => (
            <motion.div
              key={step}
              className="flex flex-col items-center justify-start flex-1 text-center relative px-0 md:px-4 lg:px-8 xl:px-[60px]"
              variants={staggerItem}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-white/10 border border-white/20 rounded-[42px] w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[60px] lg:h-[60px] flex items-center justify-center mb-6">
                {step === 1 && (
                  <DocumentIcon
                    width={25}
                    height={24}
                    color="white"
                    className="md:w-7 md:h-7 lg:w-[25px] lg:h-[24px]"
                  />
                )}
                {step === 2 && (
                  <VectorIcon
                    width={25}
                    height={24}
                    color="white"
                    className="md:w-7 md:h-7 lg:w-[25px] lg:h-[24px]"
                  />
                )}
                {step === 3 && (
                  <DownloadIcon
                    width={25}
                    height={24}
                    color="white"
                    className="md:w-7 md:h-7 lg:w-[25px] lg:h-[24px]"
                  />
                )}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[16px] font-medium capitalize text-rendering-optimizeLegibility antialiased">
                  {step === 1 && "Upload Image & Prompt"}
                  {step === 2 && "AI Transforms"}
                  {step === 3 && "Download Image"}
                </h3>
                <p className="text-white/50 text-sm sm:text-base md:text-sm lg:text-base xl:text-[16px] leading-relaxed max-w-[280px] md:max-w-none text-rendering-optimizeLegibility antialiased">
                  {step === 1 &&
                    "Upload your photo and type a quick text instruction to describe the edit you want."}
                  {step === 2 &&
                    "The AI instantly applies smart edits, turning your prompt into high-quality results in seconds."}
                  {step === 3 &&
                    "Save your edited image instantly in high quality, ready to use anytime you need."}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:flex h-full items-center justify-center absolute top-[30px] md:top-[35px] lg:top-[25px] -right-[5px] md:-right-[8px] lg:-right-[10px]">
                  <div className="w-px h-[200px] md:h-[220px] lg:h-[246px] bg-gradient-to-b from-transparent via-white/24 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
