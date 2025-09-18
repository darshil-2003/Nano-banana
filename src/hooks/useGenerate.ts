import { useState } from "react";

export const useGenerate = () => {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [selectedModel, setSelectedModel] = useState("Nano Banana AI");

  const handleGenerate = () => {
    console.log("Generating with:", {
      prompt,
      aspectRatio,
      selectedModel,
    });
  };

  return {
    handleGenerate,
    prompt,
    aspectRatio,
    selectedModel,
    setPrompt,
    setAspectRatio,
    setSelectedModel,
  };
};
