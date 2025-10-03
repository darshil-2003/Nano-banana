"use client";

import { useAtom } from "jotai";
import { useCallback } from "react";
import axios from "axios";
import { promptAtom, isEnhancingAtom } from "@/store/atoms";
import { useToast } from "@/hooks/useToast";

export const usePrompt = () => {
  const [prompt, setPrompt] = useAtom(promptAtom);
  const [isEnhancing, setIsEnhancing] = useAtom(isEnhancingAtom);
  const { showToast } = useToast();

  const enhancePrompt = useCallback(async (): Promise<string | null> => {
    if (!prompt.trim()) {
      throw new Error("Please enter a prompt to enhance");
    }

    setIsEnhancing(true);

    try {
      const response = await axios.post(
        "https://api.chromastudio.ai/prompt-enhancer",
        {
          prompt: prompt.trim(),
          toolType: "textToImage",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.enhancedPrompt) {
        setPrompt(response.data.enhancedPrompt);
        return response.data.enhancedPrompt;
      } else {
        throw new Error("No enhanced prompt received");
      }
    } catch (error) {
      console.error("Enhancement failed:", error);
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message ||
            "Failed to enhance prompt. Please try again."
        );
      } else {
        throw new Error("Failed to enhance prompt. Please try again.");
      }
    } finally {
      setIsEnhancing(false);
    }
  }, [prompt, setPrompt, setIsEnhancing]);

  const copyPrompt = useCallback((): boolean => {
    if (prompt) {
      navigator.clipboard.writeText(prompt);
      showToast("Prompt copied to clipboard! 📋", "success", 2000);
      return true;
    }
    return false;
  }, [prompt, showToast]);

  return {
    prompt,
    setPrompt,
    isEnhancing,
    enhancePrompt,
    copyPrompt,
  };
};
