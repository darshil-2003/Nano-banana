"use client";

import React from "react";

interface ErrorStatesProps {
  generationState: {
    status: string;
    error?: string;
  };
}

const ErrorStates = ({ generationState }: ErrorStatesProps) => {
  if (generationState.status === "failed") {
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
  }

  return null;
};

export default ErrorStates;
