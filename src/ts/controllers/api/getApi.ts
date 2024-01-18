import { closeDialog } from "../handlers/modalHandler.ts";
import {
  renderHotStations,
  renderModal,
  renderPin,
  renderTagList,
  renderWagleList,
} from "../render.ts";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const DB_CORRECTION_FACTOR = 1;
const CLIENT_CORRECTION_FACTOR = -1;

export const fetchCardList = async ({ stationId, tagId = "" }: Record<string, string>) => {
  const endpoint = "/v1/post/postList";
  const pageSize = 10000;
  const pageNumber = 1;
  const correctedStationId = Number(stationId) + DB_CORRECTION_FACTOR;

  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?stationId=${correctedStationId}&pageSize=${pageSize}&pageNumber=${pageNumber}&tagId=${tagId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const cardList = responseData.data.posts;
    renderWagleList(cardList);
    closeDialog();
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};

export const fetchUploadImg = async () => {
  const endpoint = "/v1/post/images";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    const imageList = responseData.data.images;
    renderModal(imageList);
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};

export const getHotStations = async () => {
  const endpoint = "/v1/station/hot";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    const stationList = responseData.data.stations;
    renderHotStations(stationList);
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};

export const getNearStation = async (lat: string, lng: string) => {
  const endpoint = "/v1/station/near";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?x=${lat}&y=${lng}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    const stationId = String(Number(responseData.data.stationId) + CLIENT_CORRECTION_FACTOR);
    const nearStation = document
      .querySelector(".subway-line")
      ?.children.namedItem(stationId) as HTMLElement;

    nearStation.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};

export const fetchTagList = async (stationId: number) => {
  const endpoint = "/v1/station/tag/list";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?id=${stationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    const tagList = responseData.data.tags;
    renderTagList(tagList);
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};

export const getHomeInfo = async () => {
  const endpoint = "/v1/station/briefInfo";
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    const stationList = responseData.data.stations;

    renderPin(stationList);
  } catch (error) {
    console.error("Error fetching data:", error instanceof Error ? error.message : error);
  }
};
