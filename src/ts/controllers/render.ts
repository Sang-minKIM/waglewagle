import { tagList } from "../data.ts";
import { stationGrid } from "../data.ts";
import { WagleLinkView } from "../views/components/ButtonViews.ts";
import { HotStationListView } from "../views/components/HotStationListView.ts";
import { TagView } from "../views/components/TagView.ts";
import { WagleEmptyView } from "../views/components/wagle/WagleEmptyView.ts";
import { WagleMainView } from "../views/components/wagle/WagleMainView.ts";
import { UploadView } from "../views/pages/UploadView.ts";

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

export const renderTagList = (tags) => {
  // 전체 인덱스 제일 앞에 추가
  tags.unshift(0);
  const headerTag = document.querySelector(".wagle__header__tag-list");
  headerTag.innerHTML = tags
    .map((tagId) => TagView(tagId, tagList[tagId].img, tagList[tagId].text, "wagle"))
    .join(" ");
};

export const renderPin = (stations) => {
  const subwayLineHTML = `
  <div class="subway-line__empty--center"></div>
  <div class="subway-line__empty--edge"></div>
  <div class="subway-line__empty--edge"></div>
  <div class="subway-line__empty--edge"></div>
  <div class="subway-line__empty--edge"></div>
  ${stationGrid.map((stationId) => WagleLinkView(stationId, stations[stationId])).join(" ")}
`;
  document.querySelector(".subway-line").innerHTML = subwayLineHTML;
};
