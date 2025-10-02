"use client";

import { motion } from "framer-motion";
import { FantasyShowcase } from "@/components";
import CreationShowcase from "@/components/CreationShowcase";
import { pageVariants } from "@/utils/animations";

import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function LandingPageV2() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <div className="bg-[#08020e] text-white min-h-screen  overflow-x-hidden pt-[80px] sm:pt-[90px]">
        {/* Background Effects */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#9e67fa] via-[#fe6abb] to-[#ff9c65] opacity-20" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[2546px] h-[1815px] bg-[#08020e] rounded-full blur-[80px] -mb-[900px]" />
        </motion.div>
        {/* Header */}
        <Header />

        <Hero />
        {/* Hero Section */}
        <HeroSection />

        <HowItWorks />
        {/* Features Section */}
        <Features />
        {/* Faq Section */}
        {/* Fantasy Showcase Section */}
        <FantasyShowcase />
        {/* How It Works Section */}
        <Faq />

        {/* Creation Showcase Section */}
        <CreationShowcase />
      </div>
      <Footer />
    </motion.div>
  );
}
