"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { PlusIcon } from "@/icons";

const Faq = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <motion.div
      id="faq"
      className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div className="text-center mb-10" variants={staggerContainer}>
          <motion.div
            className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)]"
            variants={fadeInUp}
          >
            <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4"
            variants={fadeInUp}
          >
            Your Questions, Answered
          </motion.h2>
          <motion.p
            className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[16px] tracking-[0.36px]"
            variants={fadeInUp}
          >
            From setup to advanced features, our FAQ section covers everything
            you need to know about Nano Banana AI. Quick, clear answers to guide
            you every step of the way.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-[700px] mx-auto space-y-3 py-10"
          variants={fadeInUp}
        >
          {[
            {
              question: "What is Nano Banana AI and how does it work?",
              answer:
                "Nano Banana AI is an advanced image generation and editing tool powered by Gemini 2.5 Flash. Simply upload an image or enter a text prompt, and our AI will create stunning visuals, restore old photos, or transform your ideas into reality with professional-quality results.",
            },
            {
              question: "What file formats are supported for image uploads?",
              answer:
                "We support all major image formats including JPG, PNG, WebP, and more. You can upload images up to 10MB in size. For best results, we recommend using high-resolution images with clear details.",
            },
            {
              question: "How much does Nano Banana AI cost?",
              answer:
                "Nano Banana AI offers flexible pricing plans starting from $9.99/month for basic features. We also provide a free tier with limited generations per month. Enterprise plans are available for teams and businesses with custom pricing.",
            },
            {
              question: "Can I use the generated images commercially?",
              answer:
                "Yes! All images generated with Nano Banana AI can be used for commercial purposes, including marketing, social media, websites, and print materials. You retain full rights to the images you create.",
            },
            {
              question: "How long does it take to generate an image?",
              answer:
                "Most images are generated within 10-30 seconds, depending on complexity and server load. High-resolution images may take up to 2 minutes. You'll receive a notification when your image is ready.",
            },
            {
              question: "Is my data and uploaded images secure?",
              answer:
                "Absolutely. We use enterprise-grade encryption to protect your data. Uploaded images are processed securely and automatically deleted after 30 days unless you choose to save them to your account.",
            },
          ].map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/12 rounded-[14px] overflow-hidden transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Question Header */}
                <motion.button
                  onClick={() => toggleItem(index)}
                  className="w-full p-[18px] flex items-center justify-between cursor-pointer hover:bg-white/10 active:bg-white/10 focus:bg-white/10 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-white font-medium text-xs sm:text-sm xl:text-[16px] tracking-[-0.42px] text-left pr-2">
                    {faq.question}
                  </span>
                  <motion.div
                    className="w-5 h-5 flex items-center justify-center"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <PlusIcon />
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-[18px] pb-[18px] pt-0">
                        <div className="border-t border-white/10 pt-4">
                          <motion.p
                            className="text-white/70 text-xs sm:text-sm xl:text-[16px] leading-[22px] tracking-[-0.28px]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faq;
