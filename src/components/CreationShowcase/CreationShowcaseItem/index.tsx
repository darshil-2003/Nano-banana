"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export interface CreationShowcaseProps {
  className?: string;
}

const CreationShowcaseItem: React.FC<CreationShowcaseProps> = ({
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic width detection
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine if only 3 images should be shown (between 1024px to 1300px)
  const shouldShowOnlyThreeImages = screenWidth >= 1024 && screenWidth <= 1300;

  const creationImages = [
    {
      id: "1",
      src: "/images/inspiration/creation-1.png",
      alt: "AI Generated Creation 1",
      rotation: 0,
      hoverRotation: 0,
      position: { left: "33.33%", top: "0%" },
      hoverTransform: { translateX: 0, translateY: -20 },
      delay: 0,
      zIndex: 5,
      isCenter: true,
    },
    {
      id: "2",
      src: "/images/inspiration/wild-west-2.png",
      alt: "AI Generated Creation 2",
      rotation: -16,
      hoverRotation: -25,
      position: { left: "16.67%", top: "12.4%" },
      hoverTransform: { translateX: -40, translateY: -30 },
      delay: 200,
      zIndex: 4,
      isCenter: false,
    },
    {
      id: "3",
      src: "/images/inspiration/creation-3.png",
      alt: "AI Generated Creation 3",
      rotation: 16.11,
      hoverRotation: 25,
      position: { left: "50%", top: "12.4%" },
      hoverTransform: { translateX: 40, translateY: -30 },
      delay: 400,
      zIndex: 3,
      isCenter: false,
    },
    {
      id: "4",
      src: "/images/inspiration/creation-4.png",
      alt: "AI Generated Creation 4",
      rotation: 32.21,
      hoverRotation: 45,
      position: { left: "790px", top: "187px" },
      hoverTransform: { translateX: 60, translateY: 20 },
      delay: 600,
      zIndex: 2,
      isCenter: false,
    },
    {
      id: "5",
      src: "/images/inspiration/creation-5.png",
      alt: "AI Generated Creation 5",
      rotation: -32.21,
      hoverRotation: -45,
      position: { left: "22px", top: "184px" },
      hoverTransform: { translateX: -60, translateY: 20 },
      delay: 800,
      zIndex: 1,
      isCenter: false,
    },
  ];

  return (
    <div
      className={`py-8 sm:py-12 md:py-16 lg:py-0 ${className} 
        overflow-hidden relative z-10 lg:h-[400px] md:h-[250px] h-[150px] `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        {/* Mobile & Tablet: Fan arrangement with 3 images */}
        <div className="block lg:hidden">
          <div
            className="absolute w-full md:h-70   h-48  max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] mx-auto inset-0  top-5  z-0 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {creationImages.slice(0, 3).map((image) => {
              // Custom positioning for mobile and tablet
              const mobilePosition = { ...image.position };

              return (
                <div
                  key={image.id}
                  className={`absolute w-[150px] h-[156px] sm:w-[200px] sm:h-[208px] md:w-[250px] md:h-[260px] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] overflow-hidden bg-transparent shadow-[0_10px_30px_rgba(128,0,128,0.5)] border-2 border-white/20 flex-shrink-0 cursor-pointer transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  } ${
                    image.id === "2" || image.id === "3"
                      ? "top-[20.4%] md:top-[30.4%]"
                      : ""
                  }`}
                  style={{
                    rotate: `${
                      isHovered ? image.hoverRotation : image.rotation
                    }deg`,
                    transform: `translate(${
                      isHovered ? image.hoverTransform.translateX * 0.5 : 0
                    }px, ${
                      isHovered ? image.hoverTransform.translateY * 0.5 : 0
                    }px)`,
                    zIndex: image.zIndex,
                    transitionDelay: isHovered ? "0ms" : "0ms",
                    left: mobilePosition.left,
                    ...(image.id !== "2" &&
                      image.id !== "3" && { top: mobilePosition.top }),
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-300 "
                  />
                  {image.isCenter && (
                    <div className="absolute inset-0 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] bg-gradient-to-r from-purple-500/30 via-transparent to-blue-500/30 pointer-events-none" />
                  )}
                  {image.isCenter && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-particles"
                          style={{
                            left: `${15 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${2.5 + i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Show all 5 images in fan arrangement */}
        <div className="hidden lg:block h-96 z-10">
          <div
            className="absolute w-full h-[660px] inset-0 top-10  max-w-[1200px] mx-auto z-0 group "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {creationImages
              .slice(0, shouldShowOnlyThreeImages ? 3 : 5)
              .map((image) => (
                <div
                  key={image.id}
                  className={`absolute w-[376.505px] h-[392.955px] rounded-[24.369px] overflow-hidden bg-transparent shadow-[0_10px_30px_rgba(128,0,128,0.5)] border-2 border-white/20 flex-shrink-0 cursor-pointer transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    rotate: `${
                      isHovered ? image.hoverRotation : image.rotation
                    }deg`,
                    transform: `translate(${
                      isHovered ? image.hoverTransform.translateX : 0
                    }px, ${isHovered ? image.hoverTransform.translateY : 0}px)`,
                    zIndex: image.zIndex,
                    transitionDelay: isHovered ? "0ms" : "0ms",
                    left: image.position.left,
                    top: image.position.top,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-300 "
                  />

                  {/* Center card glow effect */}
                  {image.isCenter && (
                    <div className="absolute inset-0 rounded-[24.369px] bg-gradient-to-r from-purple-500/30 via-transparent to-blue-500/30 pointer-events-none" />
                  )}

                  {/* Floating particle effect for center card */}
                  {image.isCenter && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float-particles"
                          style={{
                            left: `${15 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${2.5 + i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreationShowcaseItem;
