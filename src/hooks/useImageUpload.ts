"use client";

import { useAtom } from "jotai";
import {
  selectedImageAtom,
  selectedImageUrlAtom,
  isComparingAtom,
} from "@/store/atoms";

export const useImageUpload = () => {
  const [selectedImage, setSelectedImage] = useAtom(selectedImageAtom);
  const [selectedImageUrl, setSelectedImageUrl] = useAtom(selectedImageUrlAtom);
  const [isComparing, setIsComparing] = useAtom(isComparingAtom);

  return {
    selectedImage,
    setSelectedImage,
    selectedImageUrl,
    setSelectedImageUrl,
    isComparing,
    setIsComparing,
  };
};
