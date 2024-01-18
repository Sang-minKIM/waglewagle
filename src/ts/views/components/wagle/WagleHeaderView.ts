import { stationList } from "../../../data.ts";
import { WagleTagListView } from "./WagleTagListView.ts";

export const WagleHeaderView = (stationId: string) => {
  const currStationIdx = Number(stationId);
  const prevStationIdx = (currStationIdx - 1 + stationList.length) % stationList.length;
  const nextStationIdx = (currStationIdx + 1) % stationList.length;
  return `
<header class="wagle__header">
  <menu class="wagle__header__station">
    <a data-navigate href="/station/${prevStationIdx}" class="wagle__header__station__btn">${
    stationList[prevStationIdx]
  }</a>
    <div class="station__title">
      <svg
        class="circle"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#00DFA9" />
      </svg>
      <h3 class="station__title__text">${stationList[currStationIdx]}</h3>
    </div>
    <a data-navigate href="/station/${nextStationIdx}" class="wagle__header__station__btn">${
    stationList[nextStationIdx]
  }</a>
  </menu>
  ${WagleTagListView()}
</header>
    `;
};
