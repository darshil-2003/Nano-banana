"use client";

import React from "react";
import Image from "next/image";
import Loader from "@/components/loader";

interface LoadingStatesProps {
  generationState: {
    status: string;
    result?:
      | string
      | Array<{ image?: string; url?: string }>
      | { image?: string; url?: string };
    error?: string;
  };
  selectedImage: File | null;
  isImageLoading: boolean;
}

const LoadingStates = ({
  generationState,
  selectedImage,
  isImageLoading,
}: LoadingStatesProps) => {
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

  if (generationState.status === "running") {
    return (
      <div className="relative w-full h-full">
        {/* Show background image if selectedImage exists */}
        {selectedImage && (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Background image"
            fill
            className="absolute inset-0 object-cover blur-[2px] brightness-50 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-2 xs:p-3 sm:p-4 transition-opacity duration-300"
            onError={(e) => {
              console.error("Processing image load error:", e);
            }}
            unoptimized={true}
            priority
          />
        )}

        {/* Skeleton overlay for smooth transition */}
        <SkeletonLoader />

        {/* Loading Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 xs:gap-3 sm:gap-4 rounded-[16px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-1 xs:p-1.5 sm:p-2 z-10">
          <Loader size="h-10 w-10" color="white" />
          <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] xs:text-[15px] sm:text-[16px] md:text-[18px] text-nowrap text-white text-center">
            <p className="leading-[normal] whitespace-pre">
              Generating your image...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (generationState.status === "idle") {
    return (
      <div className="flex flex-col font-['Mona_Sans:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-nowrap text-zinc-400 text-center">
        <p className="leading-[normal] whitespace-pre">
          Try AI Image Generator Now
        </p>
      </div>
    );
  }

  // Show skeleton overlay during image loading
  if (isImageLoading) {
    return <SkeletonLoader />;
  }

  return null;
};

export default LoadingStates;
