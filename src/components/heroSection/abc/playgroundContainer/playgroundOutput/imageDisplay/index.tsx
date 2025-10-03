"use client";

import React from "react";
import Image from "next/image";

interface ImageDisplayProps {
  isComparing: boolean;
  selectedImage: File | null;
  resultUrl: string;
  imageError: boolean;
  setIsImageLoading: (loading: boolean) => void;
  setImageError: (error: boolean) => void;
}

const ImageDisplay = ({
  isComparing,
  selectedImage,
  resultUrl,
  imageError,
  setIsImageLoading,
  setImageError,
}: ImageDisplayProps) => {
  // Helper function to validate URL
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (!isValidUrl(resultUrl) || imageError) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 bg-gray-800/50 p-2">
        <div className="text-red-400 text-center p-4 bg-red-500/10 rounded-lg max-w-[300px]">
          <p className="text-sm">Invalid or failed to load image</p>
          <p className="text-xs mt-1 text-red-300">URL: {resultUrl}</p>
          <p className="text-xs mt-1 text-red-400/70">
            {!isValidUrl(resultUrl)
              ? "Invalid URL format"
              : "Image failed to load"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Show either original or generated image based on compare state */}
      {isComparing && selectedImage ? (
        /* Original Image */
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="Original image"
          fill
          className="absolute inset-0 object-contain rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] transition-opacity duration-500"
          onLoad={() => setIsImageLoading(false)}
          onError={(e) => {
            console.error("Original image load error:", e);
            setImageError(true);
            setIsImageLoading(false);
          }}
          unoptimized={true}
          priority
        />
      ) : (
        /* Generated Image */
        <Image
          src={resultUrl}
          alt="Generated image"
          fill
          className="absolute inset-0 object-contain rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] transition-opacity duration-500"
          onLoad={() => setIsImageLoading(false)}
          onError={(e) => {
            console.error("Generated image load error:", e);
            setImageError(true);
            setIsImageLoading(false);
          }}
          unoptimized={true}
          priority
        />
      )}
    </>
  );
};

export default ImageDisplay;
