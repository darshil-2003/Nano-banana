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
  subscription?: {
    plan?: string;
    credits?: number;
    active?: boolean;
  };
  apiKey?: string;
  token?: string;
}

export interface ImageGenerationResponse {
  success: boolean;
  data?: {
    images: string[];
    taskId?: string;
    jobId?: string;
    id?: string;
    task_id?: string;
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
  result?:
    | string
    | Array<{ type: string; image: string; thumbnail: string }>
    | { image: string; url?: string };
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
          Accept: "application/json",
          Authorization: "Bearer 2Kb38iQLATGTmwd2oyeT",
        },
      }
    );

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Image generation API error:", error);
    if (axios.isAxiosError(error)) {
      console.error("API Error Details:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url,
        headers: error.config?.headers,
      });
      console.error(
        "Full error response data:",
        JSON.stringify(error.response?.data, null, 2)
      );
      return {
        success: false,
        error:
          error.response?.data?.message ||
          error.response?.data?.error ||
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

// Interface for upload URL response
interface UploadUrlResponse {
  uploadUrl: string;
  fileName: string;
  projectId: string;
  imageUrl?: string; // The actual image URL after upload
}

// Interface for job status response
interface JobStatusResponse {
  status: string;
  result?: string;
  error?: string;
}

// Get upload URL from faceswapper API
export const getUploadUrl = async (
  fileName: string
): Promise<UploadUrlResponse> => {
  try {
    const url = `https://core.faceswapper.ai/media/get-upload-url?fileName=${encodeURIComponent(
      fileName
    )}&projectId=faceswapper`;

    const response = await axios.get(url, {
      headers: {
        Accept: "application/json, text/plain, */*",
      },
    });

    // The API returns the upload URL directly as a string, not as a JSON object
    const uploadUrl = response.data;

    return {
      uploadUrl: uploadUrl,
      fileName: fileName,
      projectId: "faceswapper",
    };
  } catch (error) {
    console.error("Upload URL API error:", error);
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
      throw new Error(
        `Failed to get upload URL: ${
          error.response?.data?.message || error.message
        }`
      );
    }
    throw new Error("Failed to get upload URL");
  }
};

// Upload image to the provided URL
export const uploadImageToUrl = async (file: File): Promise<string> => {
  try {
    // Generate unique filename
    const timestamp = Date.now();
    const fileName = `media/${timestamp}-${file.name}`;

    // Get upload URL
    const uploadResponse = await getUploadUrl(fileName);

    const { uploadUrl } = uploadResponse;

    if (!uploadUrl) {
      throw new Error("No upload URL received from API");
    }

    // Upload file to the URL
    await axios.put(uploadUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    // Construct the actual image URL
    // Remove the signed parameters to get the base URL
    const url = new URL(uploadUrl);
    const baseUrl = `${url.protocol}//${url.hostname}${url.pathname}`;

    return baseUrl;
  } catch (error) {
    console.error("Upload failed:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error details:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url,
      });
    }
    throw new Error(
      `Failed to upload image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

// Check job status using the new endpoint
export const checkJobStatus = async (
  userId: string,
  jobId: string
): Promise<JobStatusResponse> => {
  try {
    const response = await axios.get(
      `https://api.chromastudio.ai/image-gen/${userId}/${jobId}/status`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to check job status: ${
          error.response?.data?.message || error.message
        }`
      );
    }
    throw new Error("Failed to check job status");
  }
};
