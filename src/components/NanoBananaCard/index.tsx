"use client";

import React from "react";

export interface NanoBananaCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "gradient" | "featured";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const NanoBananaCard: React.FC<NanoBananaCardProps> = ({
  title,
  description,
  icon,
  variant = "default",
  size = "md",
  onClick,
  className = "",
  children,
}) => {
  const baseClasses =
    "rounded-lg border transition-all duration-200 transform hover:scale-[1.02] cursor-pointer";

  const variantClasses = {
    default: "bg-[#2a2a2a] border-[#3a3a3a] hover:border-gray-500",
    gradient:
      "bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30 hover:border-purple-400/50",
    featured:
      "bg-gradient-to-r from-purple-600 to-blue-600 border-transparent hover:from-purple-700 hover:to-blue-700",
  };

  const sizeClasses = {
    sm: "p-3 sm:p-4",
    md: "p-4 sm:p-5 md:p-6",
    lg: "p-6 sm:p-7 md:p-8",
  };

  const titleSizeClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl",
    lg: "text-xl sm:text-2xl",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-10 h-10 sm:w-12 sm:h-12",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {/* Header with icon and title */}
      <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 mb-3 sm:mb-4">
        {icon && (
          <div
            className={`${iconSizeClasses[size]} flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm flex-shrink-0`}
          >
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3
            className={`${titleSizeClasses[size]} font-semibold text-white mb-1 sm:mb-2 truncate`}
          >
            {title}
          </h3>
          {description && (
            <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Content area */}
      {children && <div className="mt-4">{children}</div>}

      {/* Nano Banana themed accent */}
      <div className="absolute top-2 right-2 opacity-20">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default NanoBananaCard;
