import React from "react";

const HeroSection = () => {
  const inspirationImages = [
    {
      id: "wild-west-1",
      url: "/images/inspiration/wild-west-1.png",
      alt: "Wild West Landscape 1",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-2",
      url: "/images/inspiration/wild-west-2.png",
      alt: "Wild West Landscape 2",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-3",
      url: "/images/inspiration/wild-west-3.png",
      alt: "Wild West Landscape 3",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-4",
      url: "/images/inspiration/wild-west-4.png",
      alt: "Wild West Landscape 4",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-5",
      url: "/images/inspiration/wild-west-5.png",
      alt: "Wild West Landscape 5",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-6",
      url: "/images/inspiration/wild-west-6.png",
      alt: "Wild West Landscape 6",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
  ];

  // Using all 6 images for continuous flowing animation

  const ImageCard = ({
    image,
    index,
  }: {
    image: (typeof inspirationImages)[0];
    index: number;
  }) => (
    <div
      key={`${image.id}-${index}`}
      className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[400px] md:h-[460px] relative rounded-[16px] sm:rounded-[20px] md:rounded-[24px] flex-shrink-0 w-[250px] sm:w-[300px] md:w-[342px]"
      style={{ backgroundImage: `url('${image.url}')` }}
    >
      {/* Border matching Figma design */}
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(206,212,252,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] sm:rounded-[20px] md:rounded-[24px]"
      />
    </div>
  );

  return (
    <div className="relative z-10 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden w-full">
      {/* 6-Image Flow - Full screen auto-scrolling layout */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-[24px] w-full">
        {/* First Row - Left to Right scroll */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 md:gap-[24px] animate-scroll-left will-change-transform"
            style={{ width: "200%" }}
          >
            {/* All 6 images for continuous flow */}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-first-${index}`}
                image={image}
                index={index}
              />
            ))}
            {/* Duplicate for seamless loop */}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-second-${index}`}
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left scroll */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 md:gap-[24px] animate-scroll-right will-change-transform"
            style={{ width: "200%" }}
          >
            {/* All 6 images in reverse order */}
            {[...inspirationImages].reverse().map((image, index) => (
              <ImageCard
                key={`right-first-${index}`}
                image={image}
                index={index}
              />
            ))}
            {/* Duplicate for seamless loop */}
            {[...inspirationImages].reverse().map((image, index) => (
              <ImageCard
                key={`right-second-${index}`}
                image={image}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
