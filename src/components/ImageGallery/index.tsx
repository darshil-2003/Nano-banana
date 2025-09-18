"use client";

import React, { useEffect, useRef } from "react";

export interface ImageGalleryProps {
  images: {
    id: string;
    url: string;
    alt: string;
    prompt?: string;
  }[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  autoScroll = true,
  scrollSpeed = 300,
  className = "",
}) => {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoScroll) return;

    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    if (!firstRow || !secondRow) return;

    // Set initial positions
    let firstRowPosition = 0;
    let secondRowPosition = -firstRow.scrollWidth / 2;

    const speed = scrollSpeed / 1000; // Convert to pixels per frame

    const animate = () => {
      firstRowPosition -= speed;
      secondRowPosition += speed;

      // Reset positions for seamless loop
      if (firstRowPosition <= -firstRow.scrollWidth / 2) {
        firstRowPosition = 0;
      }
      if (secondRowPosition >= 0) {
        secondRowPosition = -secondRow.scrollWidth / 2;
      }

      firstRow.style.transform = `translateX(${firstRowPosition}px)`;
      secondRow.style.transform = `translateX(${secondRowPosition}px)`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [autoScroll, scrollSpeed]);

  const ImageCard = ({
    image,
    index,
  }: {
    image: { id: string; url: string; alt: string; prompt?: string };
    index: number;
  }) => (
    <div
      key={`${image.id}-${index}`}
      className="w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[342px] md:h-[460px] flex-shrink-0 relative group cursor-pointer"
    >
      <div
        className="w-full h-full rounded-[16px] sm:rounded-[20px] md:rounded-[24px] overflow-hidden"
        style={{
          backgroundImage: `url('${image.url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute inset-0 border-2 border-[rgba(206,212,252,0.2)] rounded-[16px] sm:rounded-[20px] md:rounded-[24px] pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );

  // Duplicate images for seamless scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* First Row - Scrolls Left */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
        <div
          ref={firstRowRef}
          className="flex gap-3 sm:gap-4 md:gap-6"
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((image, index) => (
            <ImageCard key={`row1-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>

      {/* Second Row - Scrolls Right */}
      <div className="flex gap-3 sm:gap-4 md:gap-6">
        <div
          ref={secondRowRef}
          className="flex gap-3 sm:gap-4 md:gap-6"
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((image, index) => (
            <ImageCard key={`row2-${index}`} image={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
