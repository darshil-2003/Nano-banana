"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import {
  generateImage,
  uploadImageToUrl,
  GenerationState,
} from "@/services/imageGeneration";

interface GenerateContextType {
  prompt: string;
  setPrompt: (prompt: string) => void;
  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;
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
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [selectedModel, setSelectedModel] = useState("nano-banana-edit-i2i");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Debug selectedImage changes
  useEffect(() => {
    console.log("selectedImage changed:", selectedImage);
  }, [selectedImage]);

  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
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
      setGenerationState({ status: "pending" });

      // Upload image first
      const imageUrl = await uploadImageToUrl(selectedImage);
      setSelectedImageUrl(imageUrl);

      setGenerationState({ status: "running" });

      // Generate image
      const result = await generateImage({
        userId: "b3EHXQgcRtPetZHUYNLpd8yaGko1",
        pathname: "/image-creator",
        model: selectedModel,
        modelIdToUse: selectedModel,
        removeWatermark: true,
        prompt: prompt.trim(),
        numImages: 1,
        modelId: selectedModel,
        imageUrl: [imageUrl],
      });

      console.log("API Response:", result);
      const generatedImageUrl = result.data?.images?.[0];
      console.log("Generated image URL:", generatedImageUrl);

      if (!generatedImageUrl) {
        throw new Error("No image URL returned from API");
      }

      setGenerationState({
        status: "completed",
        result: generatedImageUrl,
      });
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

  const value: GenerateContextType = {
    prompt,
    setPrompt,
    aspectRatio,
    setAspectRatio,
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
  };

  return (
    <GenerateContext.Provider value={value}>
      {children}
    </GenerateContext.Provider>
  );
};
