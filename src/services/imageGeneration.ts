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

export const generateImage = async (
  request: ImageGenerationRequest
): Promise<ImageGenerationResponse> => {
  try {
    const response = await fetch("https://api.chromastudio.ai/image-gen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "sec-ch-ua-platform": "Windows",
        "x-project-id": "maxStudio",
        Referer: "https://www.maxstudio.ai/",
        "sec-ch-ua": "Chromium;v=140, Not=A?Brand;v=24, Google",
        "sec-ch-ua-mobile": "?0",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
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
