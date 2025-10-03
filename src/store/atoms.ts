import { atom } from "jotai";
import { GenerationState } from "@/services/imageGeneration";

// ============================================
// Image Upload Atoms
// ============================================
export const selectedImageAtom = atom<File | null>(null);
export const selectedImageUrlAtom = atom<string>("");
export const isComparingAtom = atom<boolean>(false);

// ============================================
// Prompt Atoms
// ============================================
export const promptAtom = atom<string>("");
export const isEnhancingAtom = atom<boolean>(false);

// ============================================
// Generation Atoms
// ============================================
export const generationStateAtom = atom<GenerationState>({
  status: "idle",
});

// ============================================
// Toast Atoms
// ============================================
export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}

export const toastsAtom = atom<ToastMessage[]>([]);

// ============================================
// View Mode Atoms
// ============================================
export const viewModeAtom = atom<"input" | "output">("input");
