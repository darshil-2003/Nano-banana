import React, { useState } from "react";
import { NanoBananaIcon } from "@/icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="backdrop-blur-[4.75px] bg-[rgba(7,6,16,0.2)] border-b border-white/5 px-4 sm:px-6 lg:px-16 xl:px-[222px] py-3 sm:py-[18px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <NanoBananaIcon
            width={24}
            height={24}
            className="sm:w-8 sm:h-8 text-[#ece5ff]"
          />
          <span className="text-base sm:text-lg lg:text-[25px] font-bold text-[#ece5ff] w-[120px] sm:w-[150px] lg:w-[170px]">
            Photoeditbytext
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-4 md:gap-8 lg:gap-[75px] text-white font-semibold text-sm md:text-[16px] backdrop-blur-[22px] rounded-[999px] px-0 py-[16px]">
          <a
            href="#hero"
            className="hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity"
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className="opacity-40 hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="opacity-40 hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity"
          >
            Features
          </a>
          <a
            href="#faq"
            className="opacity-40 hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="opacity-40 hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
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
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="sm:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar Menu */}
          <div className="sm:hidden fixed top-0 left-0 w-80 h-full bg-black/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <NanoBananaIcon width={32} height={32} className="text-white" />
                <span className="text-white text-xl font-bold">
                  Nano Banana
                </span>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col p-6 space-y-6">
              <a
                href="#hero"
                className="text-white font-semibold text-lg hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity py-3 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
                <svg
                  className="w-5 h-5"
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
              <a
                href="#how-it-works"
                className="text-white font-semibold text-lg hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity py-3 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
                <svg
                  className="w-5 h-5"
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
              <a
                href="#features"
                className="text-white font-semibold text-lg hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity py-3 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
                <svg
                  className="w-5 h-5"
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
              <a
                href="#faq"
                className="text-white font-semibold text-lg hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity py-3 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
                <svg
                  className="w-5 h-5"
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
              <a
                href="#contact"
                className="text-white font-semibold text-lg hover:opacity-80 active:opacity-80 focus:opacity-80 transition-opacity py-3 flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
                <svg
                  className="w-5 h-5"
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
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
