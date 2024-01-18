import { getStationId } from "../utils/getStationId.ts";
import { fetchCardList } from "./getApi.ts";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface UploadCardProps {
  tagId?: number;
  content: string;
  stationId: number;
  imageId?: number;
}

export const uploadCard = async (cardData: UploadCardProps) => {
  const endpoint = "/v1/post/upload";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const stationId = getStationId();
    fetchCardList({ stationId });
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};

interface PostData {
  id: number;
  count: number;
}

export const likePost = async (postData: PostData) => {
  const endpoint = "/v1/post/like";

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};
