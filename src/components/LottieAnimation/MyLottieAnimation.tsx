"use client";

import React from "react";
import LottieAnimation from "./index";

interface MyLottieAnimationProps {
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
}

const MyLottieAnimation: React.FC<MyLottieAnimationProps> = ({
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  speed = 1,
  className = "",
}) => {
  return (
    <LottieAnimation
      src="/R4dLzUq756.lottie"
      width={width}
      height={height}
      loop={loop}
      autoplay={autoplay}
      speed={speed}
      className={className}
    />
  );
};

export default MyLottieAnimation;

