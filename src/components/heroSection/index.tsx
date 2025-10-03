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
    {
      id: "wild-west-7",
      url: "/images/inspiration/wild-west-7.png",
      alt: "Wild West Landscape 7",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-9",
      url: "/images/inspiration/wild-west-9.png",
      alt: "Wild West Landscape 9",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-10",
      url: "/images/inspiration/wild-west-10.png",
      alt: "Wild West Landscape 10",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-11",
      url: "/images/inspiration/wild-west-11.png",
      alt: "Wild West Landscape 11",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-13",
      url: "/images/inspiration/wild-west-13.png",
      alt: "Wild West Landscape 13",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
    {
      id: "wild-west-14",
      url: "/images/inspiration/wild-west-14.png",
      alt: "Wild West Landscape 14",
      prompt: "A sweeping, cinematic shot of the wild west",
    },
  ];

  // Using all 12 unique images for continuous flowing animation

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
      {/* 12-Loop Flow - Full screen auto-scrolling layout */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-[24px] w-full">
        {/* First Row - Left to Right scroll */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 md:gap-[24px] animate-scroll-left will-change-transform"
            style={{ width: "400%" }}
          >
            {/* Original Set - Loops 1, 2, 3 */}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-original-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-original-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-original-3-${index}`}
                image={image}
                index={index}
              />
            ))}

            {/* Duplicate Set - Loops 4, 5, 6 */}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate-1-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate-3-${index}`}
                image={image}
                index={index}
              />
            ))}

            {/* Second Duplicate Set - Loops 7, 8, 9 */}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate2-1-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate2-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate2-3-${index}`}
                image={image}
                index={index}
              />
            ))}

            {/* Third Duplicate Set - Loops 10, 11, 12 */}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate3-1-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate3-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {inspirationImages.map((image, index) => (
              <ImageCard
                key={`left-duplicate3-3-${index}`}
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
            style={{ width: "400%" }}
          >
            {/* Third Duplicate Set - Loops 12, 11, 10 (offset by 6 to avoid same image) */}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate3-3-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate3-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate3-1-${index}`}
                image={image}
                index={index}
              />
            ))}

            {/* Second Duplicate Set - Loops 9, 8, 7 (offset by 6 to avoid same image) */}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate2-3-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate2-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate2-1-${index}`}
                image={image}
                index={index}
              />
            ))}

            {/* Duplicate Set - Loops 6, 5, 4 (offset by 6 to avoid same image) */}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate-3-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-duplicate-1-${index}`}
                image={image}
                index={index}
              />
            ))}

            {/* Original Set - Loops 3, 2, 1 (offset by 6 to avoid same image) */}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-original-3-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-original-2-${index}`}
                image={image}
                index={index}
              />
            ))}
            {[
              ...inspirationImages.slice(6, 12),
              ...inspirationImages.slice(0, 6),
            ].map((image, index) => (
              <ImageCard
                key={`right-original-${index}`}
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
