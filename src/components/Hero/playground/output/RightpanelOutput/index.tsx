"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGenerate } from "@/contexts/GenerateContext";
import Loader from "@/components/Loader";

const RightPanelOutput = () => {
  const { generationState, selectedImageUrl } = useGenerate();
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
      case "pending":
      case "running":
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <Loader size="big" color="white" />
            <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white text-center">
              <p className="leading-[normal] whitespace-pre">
                {generationState.status === "pending"
                  ? "Preparing your image..."
                  : "Generating your image..."}
              </p>
            </div>
            {selectedImageUrl && (
              <div className="w-80 h-80 rounded-lg overflow-hidden mx-auto bg-gray-200 flex items-center justify-center">
                {!isValidUrl(selectedImageUrl) || imageError ? (
                  <div className="text-red-500 text-center p-4">
                    <p>Invalid or failed to load image</p>
                    <p className="text-sm mt-2">URL: {selectedImageUrl}</p>
                    <p className="text-xs mt-1 text-gray-500">
                      {!isValidUrl(selectedImageUrl)
                        ? "Invalid URL format"
                        : "Image failed to load"}
                    </p>
                  </div>
                ) : (
                  <Image
                    src={selectedImageUrl}
                    alt="Processing image"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            )}
          </div>
        );

      case "completed":
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
            <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-green-400 text-center mb-4">
              <p className="leading-[normal] whitespace-pre">
                Image Generated Successfully!
              </p>
            </div>
            {generationState.result && (
              <div className="w-80 h-80 rounded-lg overflow-hidden relative mx-auto bg-gray-200 flex items-center justify-center">
                {!isValidUrl(generationState.result) || imageError ? (
                  <div className="text-red-500 text-center p-4">
                    <p>Invalid or failed to load image</p>
                    <p className="text-sm mt-2">
                      URL: {generationState.result}
                    </p>
                    <p className="text-xs mt-1 text-gray-500">
                      {!isValidUrl(generationState.result)
                        ? "Invalid URL format"
                        : "Image failed to load"}
                    </p>
                  </div>
                ) : (
                  <Image
                    src={generationState.result}
                    alt="Generated image"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
                <button
                  onClick={() => window.location.reload()}
                  className="absolute top-2 right-2 bg-blue-500/80 hover:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition-colors z-10"
                  title="Generate New Image"
                >
                  ↻
                </button>
              </div>
            )}
          </div>
        );

      case "failed":
        return (
          <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
            <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-red-400 text-center">
              <p className="leading-[normal] whitespace-pre">
                Generation Failed
              </p>
              {generationState.error && (
                <p className="text-sm text-red-300 mt-2">
                  {generationState.error}
                </p>
              )}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500/80 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        );

      default:
        return (
          <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[16px] text-nowrap text-zinc-400 text-center">
            <p className="leading-[normal] whitespace-pre">
              Try AI Image Generator Now
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-row items-center self-stretch w-full justify-center">
      <div className="backdrop-blur-[2px] backdrop-filter bg-[rgba(255,255,255,0.1)] h-[300px] sm:h-[400px] md:h-[500px] lg:h-full relative rounded-[24px] sm:rounded-[32px] shrink-0 w-full lg:max-w-[530px] p-0">
        <div className="box-border content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[20px] sm:px-[80px] md:px-[120px] lg:px-[156px] py-[120px] sm:py-[180px] md:py-[px] lg:py-[248px] relative w-full">
          {renderContent()}
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_4px_1px_inset_rgba(0,0,0,0.05)]" />
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(235,240,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] sm:rounded-[32px]"
        />
      </div>
    </div>
  );
};

export default RightPanelOutput;
