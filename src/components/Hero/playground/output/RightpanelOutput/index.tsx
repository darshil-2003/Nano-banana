"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGenerate } from "@/contexts/GenerateContext";
import {
  LoaderIcon,
  RegenerateIcon,
  CompareIcon,
  DownloadIcon,
  CompareCloseIcon,
} from "@/icons";

const RightPanelOutput = () => {
  const {
    generationState,
    selectedImageUrl,
    selectedImage,
    isComparing,
    setIsComparing,
    handleRegenerate,
    handleDownload,
  } = useGenerate();
  const [imageError, setImageError] = useState(false);

  // Helper function to validate URL
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const renderContent = () => {
    switch (generationState.status) {
      case "running":
        return (
          /* Fallback when no image or image error - this will only show if the full background image logic above doesn't apply */
          <div className="flex flex-col items-center justify-center h-full gap-4 bg-gray-800/50 p-2">
            <div className="animate-spin">
              <LoaderIcon />
            </div>
            <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-white text-center">
              <p className="leading-[normal] whitespace-pre">
                Generating your image...
              </p>
            </div>
            {selectedImageUrl &&
              (imageError || !isValidUrl(selectedImageUrl)) && (
                <div className="text-red-400 text-center p-4 bg-red-500/10 rounded-lg max-w-[300px]">
                  <p className="text-sm">Image preview unavailable</p>
                  <p className="text-xs mt-1 text-red-300">
                    {!isValidUrl(selectedImageUrl)
                      ? "Invalid URL format"
                      : "Image failed to load"}
                  </p>
                </div>
              )}
          </div>
        );

      case "completed":
        return (
          <div className="relative w-full h-full">
            {generationState.result &&
              (() => {
                let resultUrl = "";

                if (typeof generationState.result === "string") {
                  resultUrl = generationState.result;
                } else if (
                  Array.isArray(generationState.result) &&
                  generationState.result.length > 0
                ) {
                  // Handle array of image objects
                  resultUrl = generationState.result[0]?.image || "";
                } else if (
                  generationState.result &&
                  typeof generationState.result === "object" &&
                  !Array.isArray(generationState.result)
                ) {
                  // Handle single image object
                  resultUrl =
                    (
                      generationState.result as {
                        image?: string;
                        url?: string;
                      }
                    ).image ||
                    (
                      generationState.result as {
                        image?: string;
                        url?: string;
                      }
                    ).url ||
                    "";
                }

                return !isValidUrl(resultUrl) || imageError ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 bg-gray-800/50 p-2">
                    <div className="text-red-400 text-center p-4 bg-red-500/10 rounded-lg max-w-[300px]">
                      <p className="text-sm">Invalid or failed to load image</p>
                      <p className="text-xs mt-1 text-red-300">
                        URL: {resultUrl}
                      </p>
                      <p className="text-xs mt-1 text-red-400/70">
                        {!isValidUrl(resultUrl)
                          ? "Invalid URL format"
                          : "Image failed to load"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Show either original or generated image based on compare state */}
                    {isComparing && selectedImage ? (
                      /* Original Image */
                      <Image
                        src={URL.createObjectURL(selectedImage)}
                        alt="Original image"
                        fill
                        className="absolute inset-0 object-cover rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] transition-opacity duration-300"
                        onError={(e) => {
                          console.error("Original image load error:", e);
                          setImageError(true);
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
                        className="absolute inset-0 object-cover rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] transition-opacity duration-300"
                        onError={(e) => {
                          console.error("Generated image load error:", e);
                          setImageError(true);
                        }}
                        unoptimized={true}
                        priority
                      />
                    )}

                    {/* Action Buttons Overlay */}
                    {/* Regenerate Button - only show when not comparing */}
                    {!isComparing && (
                      <button
                        onClick={handleRegenerate}
                        className="absolute top-2 xs:top-2.5 sm:top-3 right-[70px] xs:right-[80px] sm:right-[90px] md:right-[99px] z-10 flex w-[32px] h-[32px] xs:w-[36px] xs:h-[36px] sm:w-[40px] sm:h-[40px] px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-[8px] xs:rounded-[10px] sm:rounded-[12px] border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
                        title="Generate New Image"
                      >
                        <RegenerateIcon width={16} height={16} />
                      </button>
                    )}

                    {/* Download Button - only show when not comparing, center position */}
                    {!isComparing && (
                      <button
                        onClick={() => handleDownload(resultUrl)}
                        className="absolute top-2 xs:top-2.5 sm:top-3 right-[30px] xs:right-[35px] sm:right-[45px] md:right-[55px] z-10 flex w-[32px] h-[32px] xs:w-[36px] xs:h-[36px] sm:w-[40px] sm:h-[40px] px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-[8px] xs:rounded-[10px] sm:rounded-[12px] border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
                        title="Download Generated Image"
                      >
                        <DownloadIcon width={20} height={20} />
                      </button>
                    )}

                    {/* Compare Button - always visible, last position */}
                    <button
                      onClick={() => setIsComparing(!isComparing)}
                      className="absolute top-2 xs:top-2.5 sm:top-3 right-[4px] xs:right-[6px] sm:right-[8px] z-10 flex w-[32px] h-[32px] xs:w-[36px] xs:h-[36px] sm:w-[40px] sm:h-[40px] px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-[8px] xs:rounded-[10px] sm:rounded-[12px] border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
                      title={
                        isComparing
                          ? "Show Generated Image"
                          : "Compare with Original"
                      }
                    >
                      {isComparing ? (
                        <CompareCloseIcon width={18} height={18} />
                      ) : (
                        <CompareIcon width={18} height={18} />
                      )}
                    </button>

                    {/* Compare indicator */}
                  </>
                );
              })()}
          </div>
        );

      case "failed":
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-red-400 text-center">
              <p className="leading-[normal] whitespace-pre">
                Generation Failed
              </p>
              {generationState.error && (
                <p className="text-xs sm:text-sm text-red-300 mt-2 px-2">
                  {generationState.error}
                </p>
              )}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500/80 hover:bg-red-500 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base"
            >
              Try Again
            </button>
          </div>
        );

      default:
        return (
          <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-zinc-400 text-center">
            <p className="leading-[normal] whitespace-pre">
              Try AI Image Generator Now
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-row items-center self-stretch w-full justify-center">
      <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[8px] xs:gap-[10px] sm:gap-[12px] md:gap-[16px] items-center justify-center p-[8px] xs:p-[10px] sm:p-[12px] md:p-[16px] relative rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] shrink-0 w-full h-[450px] xs:h-[320px] sm:h-[400px] md:h-[640px] overflow-hidden transition-all duration-300 lg:mix-w-[530px]">
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(235,240,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] "
        />
        {/* Full background image for running state */}
        {generationState.status === "running" && selectedImage ? (
          <>
            {/* Background Image covering full container area - use selectedImage File object for instant display */}
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Background image"
              fill
              className="absolute inset-0 object-cover blur-[2px] brightness-50 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-2 xs:p-3 sm:p-4 transition-opacity duration-300"
              onError={(e) => {
                console.error("Processing image load error:", e);
                setImageError(true);
              }}
              unoptimized={true}
              priority
            />

            {/* Loading Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 xs:gap-3 sm:gap-4 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-1 xs:p-1.5 sm:p-2">
              <div className="animate-spin">
                <LoaderIcon />
              </div>
              <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] text-nowrap text-white text-center">
                <p className="leading-[normal] whitespace-pre">
                  Generating your image...
                </p>
              </div>
            </div>
          </>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
};

export default RightPanelOutput;
