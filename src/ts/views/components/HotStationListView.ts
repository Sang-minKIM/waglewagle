import { stationList } from "../../data.js";
import { HotStationView } from "./HotStationView.js";

export const HotStationListView = (stations) => {
  return `
    <ul class="home__header__hot-station">
      ${stations.map((id) => HotStationView(id, stationList[id - 1])).join(" ")}
    </ul>
  `;
};
