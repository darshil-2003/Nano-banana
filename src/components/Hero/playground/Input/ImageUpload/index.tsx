import React from "react";
import { useHandleFile } from "@/hooks/useHandleFIle";
import { UploadIcon } from "@/icons";

const ImageUpload = () => {
  const { dragActive, handleDrag, handleDrop, handleFileInput } =
    useHandleFile();

  return (
    <div
      className={`bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col h-[200px] items-center justify-between p-[16px] relative rounded-[24px] shrink-0 w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(235,240,255,0.2)] cursor-pointer ${
        dragActive ? "border-purple-500/50 bg-purple-500/10" : ""
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[rgba(235,240,255,0.1)] border-dashed inset-0 pointer-events-none rounded-[24px] transition-all duration-300 group-hover:border-[rgba(235,240,255,0.2)]"
      />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-start relative shrink-0 top-10 ">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[24px]">
            <UploadIcon
              width={24}
              height={24}
              className="w-6 h-6 text-white/60"
            />
          </div>
          <div className="flex flex-col font-['Mona_Sans:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap">
            <p className="leading-[24px] whitespace-pre ">
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
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="absolute inset-0 opacity-0 cursor-pointer "
      />
    </div>
  );
};

export default ImageUpload;
