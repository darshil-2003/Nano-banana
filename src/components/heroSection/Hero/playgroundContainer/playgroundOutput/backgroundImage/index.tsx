"use client";

import React from "react";
import Image from "next/image";

interface BackgroundImageProps {
  selectedImage: File | null;
  setImageError: (error: boolean) => void;
}

const BackgroundImage = React.memo(
  ({ selectedImage, setImageError }: BackgroundImageProps) => {
    if (!selectedImage) return null;

    return (
      <>
        {/* Background image for all states on all screen sizes */}
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="Background image"
          fill
          className="absolute inset-0 object-cover blur-[6px] brightness-50 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] z-0"
          onError={(e) => {
            console.error("Background image load error:", e);
            setImageError(true);
          }}
          unoptimized={true}
          priority
        />
      </>
    );
  }
);

BackgroundImage.displayName = "BackgroundImage";

export default BackgroundImage;
