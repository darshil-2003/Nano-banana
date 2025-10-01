"use client";

import React, { useRef, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface LottieAnimationProps {
  src: string;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  onLoopComplete?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  width = "100%",
  height = "100%",
  loop = true,
  autoplay = true,
  speed = 1,
  className = "",
  onComplete,
  onLoopComplete,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = React.useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(src);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      }
    };

    loadAnimation();
  }, [src]);

  if (!animationData) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      className={className}
      style={{ width, height }}
      onComplete={onComplete}
      onLoopComplete={onLoopComplete}
    />
  );
};

export default LottieAnimation;

