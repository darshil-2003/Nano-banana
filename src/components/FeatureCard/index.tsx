import React from "react";

export interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  reversed?: boolean;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  features,
  reversed = false,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
        reversed ? "lg:flex-row-reverse" : ""
      } ${className}`}
    >
      {/* Content */}
      <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            {title}
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm sm:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Placeholder for image - you can add an image prop later */}
      <div className="flex-1 w-full">
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
          <span className="text-gray-400 text-xs sm:text-sm">
            Feature Image
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
