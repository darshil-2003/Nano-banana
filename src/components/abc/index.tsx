import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";
import { CheckIcon } from "@/icons";

// Feature data structure
const features = [
  {
    id: 1,
    title: "Text-to-Image Generation",
    description:
      "Create visuals directly from words, turning your ideas into high-quality images in seconds. Perfect for art, designs, and creative projects.",
    benefits: [
      "Quick and effortless image creation",
      "Realistic results with AI precision",
      "Endless styles and variations",
    ],
    imagePosition: "right" as const,
  },
  {
    id: 2,
    title: "Smart Photo Editing",
    description:
      "Upload any photo and describe changes with text — from color swaps to background edits. The AI handles the rest automatically.",
    benefits: [
      "Simple prompts, powerful edits",
      "No manual tools required",
      "High-quality finished output",
    ],
    imagePosition: "left" as const,
  },
  {
    id: 3,
    title: "Background Replacement",
    description:
      "Easily swap out dull or unwanted backgrounds with new creative scenes or solid colors in just one step.",
    benefits: [
      "Clean, accurate background removal",
      "Replace with custom images or colors",
      "Perfect for product and profile shots",
    ],
    imagePosition: "right" as const,
  },
  {
    id: 4,
    title: "Limitless Creativity",
    description:
      "Explore countless ways to express your ideas with Nano  Banana's AI tools designed for flexibility and imagination.",
    benefits: [
      "From casual edits to pro designs",
      "Custom styles and looks",
      "Creativity without limits",
    ],
    imagePosition: "left" as const,
  },
];

const Features = () => {
  return (
    <motion.div
      id="features"
      className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-12 sm:mb-16 md:mb-20">
        <motion.div
          className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)]"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
            Our Features
          </span>
        </motion.div>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4 px-4 sm:px-0"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          Powerful Features for Effortless Creation
        </motion.h2>
        <motion.p
          className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[16px] tracking-[0.36px] max-w-4xl mx-auto px-4 sm:px-0"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          We&apos;ve designed photoeditbytext to combine simplicity with power.
          Enjoy effortless editing, professional-quality results, and
          cloud-based access — all in one seamless experience.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="flex flex-col gap-6 sm:gap-8 md:gap-10"
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[40px]"
              variants={staggerItem}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Content Section */}
                <div
                  className={`flex-1 w-full ${
                    feature.imagePosition === "left"
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >
                  <div className="w-full p-6 sm:p-8 md:p-10 lg:p-20">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[26px] font-semibold text-white mb-4 sm:mb-6 tracking-tight text-center lg:text-left">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-[16px] mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
                      {feature.description}
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center gap-3 sm:gap-4 justify-start"
                        >
                          <CheckIcon
                            width={20}
                            height={20}
                            color="#9e67fa"
                            className="flex-shrink-0 sm:w-[22px] sm:h-[22px]"
                          />
                          <span className="text-white/70 text-sm sm:text-base lg:text-[16px] tracking-normal text-left">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`flex-1 w-full ${
                    feature.imagePosition === "left"
                      ? "lg:order-1"
                      : "lg:order-2"
                  }`}
                >
                  <div className="bg-white rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] h-[250px] sm:h-[300px] md:h-[390px] lg:h-[430px] lg:w-[550px]  flex items-center justify-center shadow-lg  m-1 md:m-2 "></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features;
