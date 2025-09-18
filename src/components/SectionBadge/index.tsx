"use client";

import React from "react";

export interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-4 py-1 ${className}`}
    >
      <span className="text-sm font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent capitalize leading-[26px]">
        {children}
      </span>
    </div>
  );
};

export default SectionBadge;
