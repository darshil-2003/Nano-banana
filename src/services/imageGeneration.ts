export interface ImageGenerationRequest {
  userId: string;
  pathname: string;
  model: string;
  modelIdToUse: string;
  removeWatermark: boolean;
  prompt: string;
  numImages: number;
  modelId: string;
  imageUrl: string[];
}

export interface ImageGenerationResponse {
  success: boolean;
  data?: {
    images: string[];
    taskId?: string;
  };
  error?: string;
}

export type GenerationStatus =
  | "idle"
  | "pending"
  | "running"
  | "completed"
  | "failed";

export interface GenerationState {
  status: GenerationStatus;
  result?: string;
  error?: string;
  progress?: number;
}

import axios from "axios";

export const generateImage = async (
  request: ImageGenerationRequest
): Promise<ImageGenerationResponse> => {
  try {
    const response = await axios.post(
      "https://api.chromastudio.ai/image-gen",
      request,
      {
        headers: {
          "Content-Type": "application/json",
          "x-project-id": "maxStudio",
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        error:
          error.response?.data?.message ||
          error.message ||
          "Network error occurred",
      };
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

// Utility function to upload image and get URL
export const uploadImageToUrl = async (file: File): Promise<string> => {
  // For now, we'll create a data URL. In a real app, you'd upload to your server
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(file);
  });
};
