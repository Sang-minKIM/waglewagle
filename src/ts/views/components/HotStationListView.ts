import { stationList } from "../../data.ts";
import { HotStationView } from "./HotStationView.ts";

export const HotStationListView = (stations: number[]) => {
  return `
    <ul class="home__header__hot-station">
      ${stations.map((id) => HotStationView(id, stationList[id - 1])).join(" ")}
    </ul>
  `;
};
