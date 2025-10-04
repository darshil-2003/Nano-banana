"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useGenerate } from "@/hooks/useGenerate";
import { useSelectedImage } from "@/hooks/useSelectedImage";
import { useIsComparing } from "@/hooks/useIsComparing";
import { useViewMode } from "@/hooks/useViewMode";

// Import the new components
import ActionButtons from "../actionButtons";
import ImageDisplay from "../imageDisplay";
import LoadingStates from "../loadingStates";
import ErrorStates from "../errorStates";
import BackgroundImage from "../backgroundImage";

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

  const renderContent = () => {
    switch (generationState.status) {
      case "running":
        return (
          <LoadingStates
            generationState={generationState}
            selectedImage={selectedImage}
            isImageLoading={isImageLoading}
          />
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
                    <ImageDisplay
                      isComparing={isComparing}
                      selectedImage={selectedImage}
                      resultUrl={resultUrl}
                      imageError={imageError}
                      setIsImageLoading={setIsImageLoading}
                      setImageError={setImageError}
                    />

                    <ActionButtons
                      isComparing={isComparing}
                      handleNewGeneration={handleNewGeneration}
                      handleRegenerate={handleRegenerate}
                      handleDownload={handleDownload}
                      resultUrl={resultUrl}
                      setIsComparing={setIsComparing}
                    />
                  </>
                );
              })()}
          </div>
        );

      case "failed":
        return <ErrorStates generationState={generationState} />;

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
            ? "w-full max-w-[600px] h-[400px] xs:h-[300px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
            : "w-full lg:w-[500px] xl:w-[500px] 2xl:w-[540px] h-[450px] xs:h-[320px] sm:h-[590px] md:h-[640px]"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(235,240,255,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] "
        />

        {/* Background Image Component - only show when not running */}
        {generationState.status !== "running" && (
          <BackgroundImage
            selectedImage={selectedImage}
            setImageError={setImageError}
          />
        )}

        {/* Render content based on generation state */}
        {renderContent()}
      </div>
    </div>
  );
};

export default RightPanelOutput;
