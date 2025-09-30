"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useHandleFile } from "@/hooks/useHandleFile";
import { useGenerate } from "@/contexts/GenerateContext";
import { UploadIcon, CloseIcon } from "@/icons";

import Loader from "@/components/Loader";

const ImageUpload = () => {
  const { dragActive, setDragActive, handleDrag } = useHandleFile();
  const { selectedImage, setSelectedImage } = useGenerate();
  const [isProcessing, setIsProcessing] = useState(false);

  const validateImage = (file: File): boolean => {
    // Check file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return false;
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return false;
    }

    return true;
  };

  const handleFileSelect = async (file: File) => {
    if (!validateImage(file)) {
      return;
    }

    // Set image immediately so it shows in background
    setSelectedImage(file);
    setIsProcessing(true);

    try {
      // Simulate image processing time
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch {
      // Handle error silently
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDropFiles = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (isProcessing) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col h-[200px] items-center justify-between p-[16px] relative rounded-[24px] shrink-0 w-full transition-all duration-300 ${
        isProcessing
          ? "cursor-not-allowed opacity-50"
          : "hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(235,240,255,0.2)] cursor-pointer"
      } ${dragActive ? "border-purple-500/50 bg-purple-500/10" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDropFiles}
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(235,240,255,0.1)] border-dashed inset-0 pointer-events-none rounded-[24px] transition-all duration-300 group-hover:border-[rgba(235,240,255,0.2)]"
      />

      {selectedImage ? (
        <>
          {/* Blurred Background Image covering full upload area */}
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Background image"
            fill
            className="relative inset-0 rounded-[24px] object-fit blur-[6px] z-0"
          />

          {/* Normal Selected Image in center */}
          <div className="absolute w-1/2 h-full mx-auto z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Selected image"
              fill
              className=" object-contain"
            />

            {/* Loading Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 z-40 rounded-[16px] bg-black/50 flex items-center gap-2 justify-center animate-pulse">
                <Loader size="big" color="white" />
                <p className="text-white text-lg">Processing...</p>
              </div>
            )}

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 -right-15 sm:-right-35 lg:-right-27 text-white bg-black/30 rounded-[10px] w-8 h-8 flex items-center justify-center text-sm font-bold transition-colors z-50 shadow-lg"
            >
              <CloseIcon />
            </button>
          </div>
        </>
      ) : (
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-start relative shrink-0 top-10">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[24px]">
              <UploadIcon
                width={24}
                height={24}
                className="w-6 h-6 text-white/60"
              />
            </div>
            <div className="flex flex-col font-['Mona_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap">
              <p className="leading-[24px] whitespace-pre">
                Click to upload or drag image here
              </p>
            </div>
          </div>
          <div className="flex flex-col font-['Mona_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-center text-nowrap">
            <p className="leading-[18px] whitespace-pre">
              JPG, PNG, WebP supported
            </p>
          </div>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        disabled={isProcessing}
        className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default ImageUpload;
