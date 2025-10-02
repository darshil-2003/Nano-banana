"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useGenerate } from "@/hooks/useGenerate";
import { useSelectedImage } from "@/hooks/useSelectedImage";
import { useIsComparing } from "@/hooks/useIsComparing";
import { useViewMode } from "@/hooks/useViewMode";
import {
  RegenerateIcon,
  CompareIcon,
  DownloadIcon,
  CompareCloseIcon,
  PlusIcon,
} from "@/icons";
import Loader from "@/components/Loader";

const RightPanelOutput = () => {
  const {
    generationState,
    handleRegenerate,
    handleDownload,
    handleNewGeneration,
  } = useGenerate();
  const [selectedImage] = useSelectedImage();
  const [isComparing, setIsComparing] = useIsComparing();
  const [viewMode] = useViewMode();
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // Handle loading state when generation starts
  useEffect(() => {
    if (generationState.status === "running") {
      setIsImageLoading(true);
    } else if (generationState.status === "completed") {
      // Keep loading state for a bit to ensure smooth transition
      const timer = setTimeout(() => setIsImageLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [generationState.status]);

  // Helper function to validate URL
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Skeleton component for smooth loading
  const SkeletonLoader = () => (
    <div className="absolute inset-0 bg-gray-800/50 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );

  const renderContent = () => {
    switch (generationState.status) {
      case "running":
        return (
          /* Skeleton loading effect when no background image */
          <div className="relative w-full h-full">
            <SkeletonLoader />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <Loader size="h-10 w-10" color="white" />
              <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-white text-center">
                <p className="leading-[normal] whitespace-pre">
                  Generating your image...
                </p>
              </div>
            </div>
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
                        className="absolute inset-0 object-contain lg:object-cover rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] transition-opacity duration-500"
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
                        className="absolute inset-0 object-contain lg:object-cover rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] transition-opacity duration-500"
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

                    {/* Action Buttons Overlay */}
                    {/* New Button - first position */}
                    {!isComparing && (
                      <button
                        onClick={handleNewGeneration}
                        className="absolute top-2 xs:top-2.5 sm:top-3 right-[116px] xs:right-[108px] sm:right-[132px] md:right-[136px] lg:right-[136px] xl:right-[140px] 2xl:right-[145px] z-10 flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
                        title="Start New Generation (Clear All)"
                      >
                        <PlusIcon />
                      </button>
                    )}

                    {/* Regenerate Button - second position */}
                    {!isComparing && (
                      <button
                        onClick={handleRegenerate}
                        className="absolute top-2 xs:top-2.5 sm:top-3 right-20 xs:right-19 sm:right-23 md:right-24 lg:right-24 xl:right-25 2xl:right-26 z-10 flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
                        title="Regenerate (Keep Image & Prompt)"
                      >
                        <RegenerateIcon width={16} height={16} />
                      </button>
                    )}

                    {/* Download Button - third position */}
                    {!isComparing && (
                      <button
                        onClick={() => handleDownload(resultUrl)}
                        className="absolute top-2 xs:top-2.5 sm:top-3 right-11 xs:right-10 sm:right-14 md:right-15 lg:right-15 xl:right-16 2xl:right-15 z-10 flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
                        title="Download Generated Image"
                      >
                        <DownloadIcon width={20} height={20} />
                      </button>
                    )}

                    {/* Compare Button - always visible, last position */}
                    <button
                      onClick={() => setIsComparing(!isComparing)}
                      className="absolute top-2 xs:top-2.5 sm:top-3 right-2 xs:right-2.5 sm:right-3 md:right-4 lg:right-4 xl:right-4 2xl:right-4 z-10 flex w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 px-1.5 xs:px-2 py-1 xs:py-1.5 justify-center items-center gap-1 rounded-lg xs:rounded-xl sm:rounded-xl border border-white/20 bg-black/40 backdrop-blur-[10px] text-white transition-colors hover:bg-black/50"
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

                    {/* Skeleton overlay during image loading */}
                    {isImageLoading && <SkeletonLoader />}
                  </>
                );
              })()}
          </div>
        );

      case "failed":
        return (
          <div className="flex flex-col items-center justify-center h-full gap-3 xs:gap-4 px-4">
            <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-red-400 text-center max-w-full">
              <p className="leading-[normal] text-sm xs:text-base sm:text-lg md:text-xl">
                Generation Failed
              </p>
              {generationState.error && (
                <p className="text-[10px] xs:text-xs sm:text-sm text-red-300 mt-2 xs:mt-3 px-2 max-w-full break-words">
                  {generationState.error}
                </p>
              )}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500/80 hover:bg-red-500 active:bg-red-600 text-white px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg transition-all duration-200 text-xs xs:text-sm sm:text-base hover:scale-105 active:scale-95"
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
      <div
        className={`bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[8px] xs:gap-[10px] sm:gap-[12px] md:gap-[16px] items-center justify-center p-[8px] xs:p-[10px] sm:p-[12px] md:p-[16px] relative rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] shrink-0 overflow-hidden transition-all duration-500 ${
          viewMode === "output"
            ? "w-full max-w-[900px] h-[500px] xs:h-[400px] sm:h-[650px] md:h-[700px] lg:h-[750px]"
            : "w-full lg:w-[500px] xl:w-[500px] 2xl:w-[540px] h-[450px] xs:h-[320px] sm:h-[590px] md:h-[640px]"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(235,240,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] "
        />

        {/* Background image for all states before lg breakpoint */}
        {selectedImage && (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Background image"
            fill
            className="absolute inset-0 object-cover blur-[6px] brightness-50 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] z-0 lg:hidden"
            onError={(e) => {
              console.error("Background image load error:", e);
              setImageError(true);
            }}
            unoptimized={true}
            priority
          />
        )}

        {/* Full background image for running state */}
        {generationState.status === "running" && selectedImage ? (
          <>
            {/* Background Image covering full container area - use selectedImage File object for instant display */}
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Background image"
              fill
              className="absolute inset-0 object-cover blur-[2px] brightness-50 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-2 xs:p-3 sm:p-4 transition-opacity duration-300 hidden lg:block"
              onError={(e) => {
                console.error("Processing image load error:", e);
                setImageError(true);
              }}
              unoptimized={true}
              priority
            />

            {/* Skeleton overlay for smooth transition */}
            <div className="absolute inset-0 lg:hidden">
              <SkeletonLoader />
            </div>

            {/* Loading Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 xs:gap-3 sm:gap-4 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-1 xs:p-1.5 sm:p-2">
              <Loader size="h-10 w-10" color="white" />
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
