"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useCallback } from "react";
import {
  selectedImageAtom,
  promptAtom,
  generationStateAtom,
  viewModeAtom,
  isComparingAtom,
} from "@/store/atoms";
import {
  generateImage,
  uploadImageToUrl,
  checkJobStatus,
} from "@/services/imageGeneration";
import { useToast } from "@/hooks/useToast";

export const useGenerate = () => {
  const [generationState, setGenerationState] = useAtom(generationStateAtom);
  const [viewMode, setViewMode] = useAtom(viewModeAtom);
  const setSelectedImage = useSetAtom(selectedImageAtom);
  const setPrompt = useSetAtom(promptAtom);
  const setIsComparing = useSetAtom(isComparingAtom);
  const selectedImage = useAtomValue(selectedImageAtom);
  const prompt = useAtomValue(promptAtom);
  const selectedModel = "nano-banana-edit-i2i"; // Fixed model
  const { showToast } = useToast();

  const handleGenerate = useCallback(async () => {
    // Check for missing requirements and show appropriate toasts
    if (!prompt.trim() && !selectedImage) {
      showToast("Please select a file and enter a prompt", "error", 4000);
      return;
    }

    if (!prompt.trim()) {
      showToast("Please enter a prompt", "error", 4000);
      return;
    }

    if (!selectedImage) {
      showToast("Please select a file", "error", 4000);
      return;
    }

    try {
      // Go directly to running state with image upload in background
      setGenerationState({ status: "running" });

      // Upload image first
      const imageUrl = await uploadImageToUrl(selectedImage);

      // Generate image
      const result = await generateImage({
        userId: "2Kb38iQLATGTmwd2oyeT",
        pathname: "/image-creator",
        model: selectedModel,
        modelIdToUse: selectedModel,
        removeWatermark: true,
        prompt: prompt.trim(),
        numImages: 1,
        modelId: selectedModel,
        imageUrl: [imageUrl],
        subscription: {
          plan: "free",
          credits: 100,
          active: true,
        },
      });

      // Try different possible field names for the job ID
      const jobId =
        result.data?.taskId ||
        result.data?.jobId ||
        result.data?.id ||
        result.data?.task_id;

      if (!jobId) {
        console.error(
          "No job ID found in response. Available fields:",
          Object.keys(result.data || {})
        );
        throw new Error("No job ID returned from API");
      }

      // Poll for job completion
      const pollJobStatus = async () => {
        try {
          const statusResult = await checkJobStatus(
            "2Kb38iQLATGTmwd2oyeT",
            jobId
          );

          if (statusResult.status === "completed" && statusResult.result) {
            setGenerationState({
              status: "completed",
              result: statusResult.result,
            });
            // Show success toast
            showToast("Image generated successfully! 🎉", "success", 3000);
            // Switch to output view when generation completes
            setViewMode("output");
          } else if (statusResult.status === "failed") {
            throw new Error(statusResult.error || "Job failed");
          } else {
            // Still processing, poll again after 2 seconds
            setTimeout(pollJobStatus, 2000);
          }
        } catch (error) {
          console.error("Job status check failed:", error);
          const errorMessage =
            error instanceof Error ? error.message : "Job status check failed";
          setGenerationState({
            status: "failed",
            error: errorMessage,
          });
          showToast(`Image generation failed: ${errorMessage}`, "error", 4000);
        }
      };

      // Start polling
      pollJobStatus();
    } catch (error) {
      console.error("Generation failed:", error);
      setGenerationState({
        status: "failed",
        error: error instanceof Error ? error.message : "Generation failed",
      });
    }
  }, [
    prompt,
    selectedImage,
    selectedModel,
    setGenerationState,
    showToast,
    setViewMode,
  ]);

  const resetGeneration = useCallback(() => {
    // Complete reset - clear everything
    setGenerationState({ status: "idle" });
    setViewMode("input");
  }, [setGenerationState, setViewMode]);

  const handleNewGeneration = useCallback(() => {
    // Complete reset - clear everything including input fields
    setGenerationState({ status: "idle" });
    setViewMode("input");
    setSelectedImage(null);
    setPrompt("");
    setIsComparing(false);
  }, [
    setGenerationState,
    setViewMode,
    setSelectedImage,
    setPrompt,
    setIsComparing,
  ]);

  const handleRegenerate = useCallback(() => {
    // Reset generation state and switch to input mode (keep selected image and prompt)
    setGenerationState({ status: "idle" });
    setViewMode("input");
  }, [setGenerationState, setViewMode]);

  const handleDownload = useCallback(
    (imageUrl: string) => {
      if (!imageUrl) return;

      // Add cache-busting parameter to disable caching
      const cacheBustingUrl = `${imageUrl}${
        imageUrl.includes("?") ? "&" : "?"
      }_t=${Date.now()}`;

      // Always fetch and convert to blob to ensure direct download with cache disabled
      fetch(cacheBustingUrl, {
        cache: "no-cache",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob();
        })
        .then((blob) => {
          // Create blob URL and download
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `generated-image-${Date.now()}.png`;
          link.style.display = "none";

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Clean up the blob URL
          window.URL.revokeObjectURL(url);

          // Show success toast
          showToast("Image downloaded successfully! 📥", "success", 3000);
        })
        .catch((error) => {
          console.error("Download failed:", error);
          showToast("Download failed. Please try again. ❌", "error", 4000);

          // Fallback: try direct download with target="_blank" to force download (with cache busting)
          const fallbackUrl = `${imageUrl}${
            imageUrl.includes("?") ? "&" : "?"
          }_t=${Date.now()}`;
          const link = document.createElement("a");
          link.href = fallbackUrl;
          link.download = `generated-image-${Date.now()}.png`;
          link.target = "_blank";
          link.style.display = "none";

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    },
    [showToast]
  );

  return {
    generationState,
    setGenerationState,
    handleGenerate,
    resetGeneration,
    handleNewGeneration,
    handleRegenerate,
    handleDownload,
    viewMode,
    setViewMode,
  };
};
