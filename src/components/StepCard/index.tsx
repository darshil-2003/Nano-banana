"use client";

import React from "react";

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  showConnector?: boolean;
  className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
  icon,
  showConnector = false,
  className = "",
}) => {
  const defaultIcon = (
    <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
      <span className="text-white text-sm font-bold">{stepNumber}</span>
    </div>
  );

  return (
    <div className={`flex-1 max-w-sm relative ${className}`}>
      {/* Step Icon */}
      <div className="bg-white/10 border border-white/20 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[60px] lg:h-[60px] flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 backdrop-blur-sm">
        {icon || defaultIcon}
      </div>

      {/* Step Content */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium mb-2 sm:mb-3 capitalize text-white leading-normal">
          {title}
        </h3>
        <p className="text-white/50 leading-relaxed text-sm sm:text-base md:text-[16px] px-2 sm:px-3 md:px-4">
          {description}
        </p>
      </div>

      {/* Connector Line */}
      {showConnector && (
        <div className="hidden lg:block absolute top-[30px] -right-4 w-8 h-px bg-gradient-to-r from-white/24 to-transparent" />
      )}
    </div>
  );
};

export default StepCard;
