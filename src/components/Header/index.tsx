import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft } from "@/utils/animations";
import { NanoBananaIcon } from "@/icons";
import { useActiveSection } from "@/hooks/useActiveSection";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[9999] border-b border-white/5 px-4 sm:px-6 lg:px-16 xl:px-[222px] py-3 sm:py-[18px] transition-all duration-300 ${
        isScrolled
          ? "bg-[#161617]/60 backdrop-blur-xl border-white/10"
          : "bg-transparent"
      }`}
      variants={fadeInDown}
      initial="initial"
      animate="animate"
    >
      <div className="flex items-center  relative z-[9999] justify-between">
        <motion.div
          className="flex items-center gap-2 sm:gap-3"
          variants={fadeInLeft}
        >
          <NanoBananaIcon
            width={24}
            height={24}
            className="sm:w-8 sm:h-8 text-[#ece5ff]"
          />
          <span className="text-base sm:text-lg lg:text-[25px] font-bold text-[#ece5ff] w-[120px] sm:w-[150px] lg:w-[170px]">
            Photoeditbytext
          </span>
        </motion.div>

        <motion.nav
          className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[60px] text-white/50 font-medium capitalize text-sm sm:text-base md:text-lg xl:text-[16px] tracking-[0.5px] whitespace-nowrap"
          variants={fadeInDown}
        >
          <motion.a
            href="#hero"
            className={`transition-colors ${
              activeSection === "hero" ? "text-white" : "hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#how-it-works"
            className={`transition-colors ${
              activeSection === "how-it-works"
                ? "text-white"
                : "hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            how it works
          </motion.a>
          <motion.a
            href="#features"
            className={`transition-colors ${
              activeSection === "features" ? "text-white" : "hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            features
          </motion.a>
          <motion.a
            href="#faq"
            className={`transition-colors ${
              activeSection === "faq" ? "text-white" : "hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            faq
          </motion.a>
          <motion.a
            href="#contact"
            className={`transition-colors ${
              activeSection === "contact" ? "text-white" : "hover:text-white"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.nav>

        {/* Mobile menu button */}
        <motion.button
          className="sm:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="sm:hidden relative inset-0 bg-black/60 backdrop-blur-sm "
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="sm:hidden fixed left-0 right-0 top-[50px] w-full bg-black  overflow-hidden shadow-2xl mobile-menu-slide z-[9999]">
            {/* Navigation Items */}
            <nav className="flex flex-col p-6 space-y-2">
              {[
                { href: "#hero", label: "Home", id: "hero" },
                {
                  href: "#how-it-works",
                  label: "How It Works",
                  id: "how-it-works",
                },
                { href: "#features", label: "Features", id: "features" },
                { href: "#faq", label: "FAQ", id: "faq" },
                { href: "#contact", label: "Contact Us", id: "contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-[16px] py-4 px-4 rounded-xl bg-transparent hover:bg-white/10 border border-transparent hover:border-white/20 transition-all duration-300 flex items-center justify-between ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-5 h-5 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </motion.header>
  );
};

export default Header;
