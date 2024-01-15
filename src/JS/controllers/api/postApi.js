import { getStationId } from "../utils/getStationId.js";
import { fetchCardList } from "./getApi.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const uploadCard = async (cardData) => {
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
    fetchCardList(stationId);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

export const likePost = async (postData) => {
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
    console.error("Error fetching data:", error.message);
  }
};
