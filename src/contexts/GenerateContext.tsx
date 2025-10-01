"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  generateImage,
  uploadImageToUrl,
  checkJobStatus,
  GenerationState,
} from "@/services/imageGeneration";

interface GenerateContextType {
  prompt: string;
  setPrompt: (prompt: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedImage: File | null;
  setSelectedImage: (image: File | null) => void;
  selectedImageUrl: string;
  setSelectedImageUrl: (url: string) => void;
  generationState: GenerationState;
  setGenerationState: (state: GenerationState) => void;
  handleGenerate: () => Promise<void>;
  resetGeneration: () => void;
  isComparing: boolean;
  setIsComparing: (comparing: boolean) => void;
  handleRegenerate: () => Promise<void>;
  handleDownload: (imageUrl: string) => void;
}

const GenerateContext = createContext<GenerateContextType | undefined>(
  undefined
);

export const useGenerate = () => {
  const context = useContext(GenerateContext);
  if (context === undefined) {
    throw new Error("useGenerate must be used within a GenerateProvider");
  }
  return context;
};

export const GenerateProvider = ({ children }: { children: ReactNode }) => {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("nano-banana-edit-i2i");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const [isComparing, setIsComparing] = useState(false);
  const [generationState, setGenerationState] = useState<GenerationState>({
    status: "idle",
  });

  const handleGenerate = useCallback(async () => {
    console.log(
      "Generate clicked - prompt:",
      prompt,
      "selectedImage:",
      selectedImage
    );

    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    if (!selectedImage) {
      alert("Please select an image");
      return;
    }

    try {
      // Go directly to running state with image upload in background
      setGenerationState({ status: "running" });

      // Upload image first
      const imageUrl = await uploadImageToUrl(selectedImage);
      setSelectedImageUrl(imageUrl);
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
  }, [prompt, selectedImage, selectedModel]);

  const resetGeneration = useCallback(() => {
    setGenerationState({ status: "idle" });
  }, []);

  const handleRegenerate = useCallback(async () => {
    // Reset compare state
    setIsComparing(false);
    // Reset generation state to idle (keep selected image and prompt)
    setGenerationState({ status: "idle" });
  }, []);

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

  const value: GenerateContextType = {
    prompt,
    setPrompt,
    selectedModel,
    setSelectedModel,
    selectedImage,
    setSelectedImage,
    selectedImageUrl,
    setSelectedImageUrl,
    generationState,
    setGenerationState,
    handleGenerate,
    resetGeneration,
    isComparing,
    setIsComparing,
    handleRegenerate,
    handleDownload,
  };

  return (
    <GenerateContext.Provider value={value}>
      {children}
    </GenerateContext.Provider>
  );
};
