"use client";

import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  isVisible,
  onClose,
  duration = 3000,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div
      className={`fixed top-20 right-4 z-[9999] px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform ${
        isAnimating ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } ${getToastStyles()} max-w-[calc(100vw-2rem)]`}
      style={{ maxWidth: "400px" }}
    >
      <div className="flex items-center gap-2">
        <span className="font-medium text-sm sm:text-base break-words">
          {message}
        </span>
        <button
          onClick={onClose}
          className="ml-2 text-white/80 hover:text-white transition-colors text-xl leading-none"
          aria-label="Close toast"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
