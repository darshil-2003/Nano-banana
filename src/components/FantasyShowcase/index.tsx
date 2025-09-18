"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export interface FantasyShowcaseProps {
  className?: string;
}

const FantasyShowcase: React.FC<FantasyShowcaseProps> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial position
    let position = 0;
    const speed = 0.5; // Convert to pixels per frame

    const animate = () => {
      position -= speed;

      // Get the actual width of the container content for responsive behavior
      const containerWidth = container.scrollWidth;
      const halfWidth = containerWidth / 2; // Since we have duplicated images

      // Reset position when it reaches the end of the first set
      // This creates a seamless loop since we have duplicated images
      if (position <= -halfWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const fantasyImages = [
    {
      id: "1",
      src: "/images/inspiration/fantasy-1.png",
      alt: "Fantasy Magic Woman",
      prompt:
        "A digital painting shows a fair-skinned woman with long brown wavy hair, appearing to be 23 years old, standing in a forest under a full moon. She is wearing a long-sleeved, flowing blue dress with gold trim and a gold necklace. Her arms are outstretched, and in each hand, she holds a glowing, circular magical symbol. The symbol in her right hand emits blue light and energy, while the one in her left hand emits orange light and flames. The forest is dark and misty, with tall trees surrounding her. There is a faint image of a woman in the upper left corner of the image, and another in the upper right corner, both partially obscured by the trees. The ground around the woman is covered in fog and sparks of light. The overall style of the painting is fantasy art, with a focus on light and shadow to create a magical atmosphere. The color palette is dominated by blues and golds, with accents of orange and white. The lighting is dramatic, with the moon providing a soft glow and the magical symbols providing bright points of light.",
    },
    {
      id: "2",
      src: "/images/inspiration/fantasy-2.png",
      alt: "Ethereal Forest Woman",
      prompt:
        "A digital painting shows a white woman with long, curly, light brown hair, wearing a dark blue dress with a white lace collar, standing in a misty forest. The woman is fair-skinned and appears to be around 25 years old. Her hair is adorned with small flowers. The forest is filled with tall trees and lush greenery, with a soft, diffused light filtering through the canopy. The overall color palette is cool, with blues, greens, and grays dominating the scene. The painting has a dreamy, ethereal quality, with a focus on texture and detail. The style is reminiscent of romanticism, with a touch of fantasy.",
    },
    {
      id: "3",
      src: "/images/inspiration/fantasy-3.png",
      alt: "Fantasy Shoe Art",
      prompt:
        "A digital illustration of a high-heeled shoe with a pointed toe, the shoe is black and shiny, with ornate gold detailing that resembles leaves or feathers, the heel is thin and black, and the shoe appears to be floating slightly above a surface that reflects light in concentric circles, the background is a mix of dark and light colors, with swirling patterns that suggest a nebula or cosmic dust, the overall style is elegant and fantastical, with a focus on the shoe as a central object of beauty and design.",
    },
  ];

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // You could add a toast notification here
  };

  return (
    <div className={`py-10 md:py-16 lg:py-20 ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#16101c] border  border-[#9e67fa] rounded-full px-3 py-1 mb-3 md:mb-4">
            <span className="text-xs md:text-sm font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
              AI Generated Art
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 md:mb-4">
            Fantasy Art Gallery
          </h2>
          <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-4">
            Discover the magic of AI-generated fantasy art. Each piece tells a
            unique story, crafted with precision and creativity using advanced
            AI technology.
          </p>
        </div>

        {/* Fantasy Images Horizontal Flow */}
        <div className="overflow-hidden w-full">
          <div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-[32px]"
            style={{ width: "fit-content" }}
          >
            {/* Duplicate images for seamless loop */}
            {[...fantasyImages, ...fantasyImages].map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="group relative h-[300px] w-[280px] sm:h-[400px] sm:w-[350px] md:h-[500px] md:w-[450px] lg:h-[576px] lg:w-[886px] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] overflow-hidden flex-shrink-0"
              >
                {/* Image */}
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />

                {/* Text Overlay with Prompt */}
                <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(14,8,8,0.25)] left-1/2 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] top-[240px] sm:top-[320px] md:top-[400px] lg:top-[450px] translate-x-[-50%] w-[calc(100%-24px)] sm:w-[calc(100%-32px)] lg:w-[calc(100%-48px)]">
                  <div className="box-border content-stretch flex gap-2 sm:gap-3 md:gap-4 lg:gap-[16px] items-end justify-start overflow-clip px-2 sm:px-3 md:px-4 lg:px-[16px] py-1 sm:py-2 md:py-3 lg:py-[8px] relative w-full">
                    <div className="basis-0 flex-col font-['Mona_Sans:Medium',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ecedee] text-xs sm:text-sm md:text-base lg:text-[16px]">
                      <p className="leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] line-clamp-2 sm:line-clamp-3 lg:line-clamp-4">
                        {image.prompt}
                      </p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex items-start justify-start p-1 sm:p-2 md:p-3 lg:p-[6px] relative rounded-[2px] sm:rounded-[3px] lg:rounded-[4px] shrink-0">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[rgba(221,221,221,0.1)] border-solid inset-0 pointer-events-none rounded-[2px] sm:rounded-[3px] lg:rounded-[4px]"
                      />
                      <button
                        onClick={() => handleCopyPrompt(image.prompt)}
                        className="relative shrink-0 size-3 sm:size-4 lg:size-[16px] flex items-center justify-center"
                        title="Copy prompt"
                      >
                        <Image
                          src="/images/inspiration/copy-icon.svg"
                          alt="Copy"
                          width={16}
                          height={16}
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                      </button>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border-[0.5px] sm:border-[0.8px] lg:border-[1.084px] border-[rgba(255,255,255,0.16)] border-solid inset-[-0.5px] sm:inset-[-0.8px] lg:inset-[-1.084px] pointer-events-none rounded-[12px] sm:rounded-[16px] lg:rounded-[21.0841px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FantasyShowcase;
