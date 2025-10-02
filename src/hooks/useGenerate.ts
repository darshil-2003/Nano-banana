"use client";

import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import {
  selectedImageAtom,
  promptAtom,
  generationStateAtom,
  viewModeAtom,
  toastsAtom,
  isComparingAtom,
  ToastMessage,
} from "@/store/atoms";
import {
  generateImage,
  uploadImageToUrl,
  checkJobStatus,
} from "@/services/imageGeneration";

export const useGenerate = () => {
  const [generationState, setGenerationState] = useAtom(generationStateAtom);
  const [, setToasts] = useAtom(toastsAtom);
  const [viewMode, setViewMode] = useAtom(viewModeAtom);
  const [, setSelectedImage] = useAtom(selectedImageAtom);
  const [, setPrompt] = useAtom(promptAtom);
  const [, setIsComparing] = useAtom(isComparingAtom);
  const selectedImage = useAtomValue(selectedImageAtom);
  const prompt = useAtomValue(promptAtom);
  const selectedModel = "nano-banana-edit-i2i"; // Fixed model

  const handleGenerate = useCallback(async () => {
    console.log(
      "Generate clicked - prompt:",
      prompt,
      "selectedImage:",
      selectedImage
    );

    if (!prompt.trim()) {
      throw new Error("Please enter a prompt");
    }

    if (!selectedImage) {
      throw new Error("Please select an image");
    }

    try {
      // Go directly to running state with image upload in background
      setGenerationState({ status: "running" });

      // Upload image first
      const imageUrl = await uploadImageToUrl(selectedImage);
      console.log("Image URL for generation:", imageUrl);

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

      console.log("API Response:", result);
      console.log("API Response data:", result.data);
      console.log("API Response data keys:", Object.keys(result.data || {}));

      // Try different possible field names for the job ID
      const jobId =
        result.data?.taskId ||
        result.data?.jobId ||
        result.data?.id ||
        result.data?.task_id;
      console.log("Job ID:", jobId);

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
            const id = Math.random().toString(36).substr(2, 9);
            const newToast: ToastMessage = {
              id,
              message: "Image generated successfully!",
              type: "success",
              duration: 3000,
            };
            setToasts((prev) => [...prev, newToast]);
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
          setGenerationState({
            status: "failed",
            error:
              error instanceof Error
                ? error.message
                : "Job status check failed",
          });
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
    setToasts,
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

  const handleDownload = useCallback((imageUrl: string) => {
    if (!imageUrl) return;

    // Always fetch and convert to blob to ensure direct download
    fetch(imageUrl)
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
      })
      .catch((error) => {
        console.error("Download failed:", error);
        // Fallback: try direct download with target="_blank" to force download
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = `generated-image-${Date.now()}.png`;
        link.target = "_blank";
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  }, []);

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
