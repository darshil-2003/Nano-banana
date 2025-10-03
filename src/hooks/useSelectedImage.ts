"use client";

import { useAtom } from "jotai";
import { selectedImageAtom, selectedImageUrlAtom } from "@/store/atoms";

export const useSelectedImage = () => {
  return useAtom(selectedImageAtom);
};

export const useSelectedImageUrl = () => {
  return useAtom(selectedImageUrlAtom);
};
