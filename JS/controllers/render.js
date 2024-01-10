import { stationGrid } from "../data.js";
import { WagleLinkView } from "../views/components/ButtonViews.js";
import { HotStationListView } from "../views/components/HotStationListView.js";
import { WagleEmptyView } from "../views/components/wagle/WagleEmptyView.js";
import { WagleMainView } from "../views/components/wagle/WagleMainView.js";
import { UploadView } from "../views/pages/UploadView.js";

const app = document.getElementById("app");
const modal = document.querySelector(".modal");

export const renderWagleList = (cardList) => {
  const wagleList = document.querySelector(".wagle__list");
  wagleList.innerHTML = cardList && cardList.length ? WagleMainView(cardList) : WagleEmptyView();
};

export const renderModal = (imageList) => {
  const modalHTML = UploadView(imageList);
  modal.innerHTML = modalHTML;
};

export const renderHotStations = (stations) => {
  const hotHTML = HotStationListView(stations);
  document.querySelector(".home__hot_area").innerHTML = hotHTML;
};

export const renderPin = (stations) => {
  const subwayHTML = `
<div name="subway" class="subway-line">
  <div class="subway-line__empty--center"></div>
  <div class="subway-line__empty--edge"></div>
  <div class="subway-line__empty--edge"></div>
  <div class="subway-line__empty--edge"></div>
  <div class="subway-line__empty--edge"></div>
  ${stationGrid.map((stationId) => WagleLinkView(stationId, stations[stationId])).join(" ")}
</div>`;
  document.querySelector(".container").innerHTML = subwayHTML;
};
