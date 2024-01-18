import {
  fetchCardList,
  getHomeInfo,
  fetchTagList,
  getHotStations,
} from "./controllers/api/getApi.ts";
import { HomeView } from "./views/pages/HomeView.ts";
import { WagleView } from "./views/pages/WagleView.ts";

export const createPages = (container: HTMLDivElement) => {
  const home = () => {
    container.innerHTML = HomeView();
    getHotStations();
    getHomeInfo();
  };

  const detail = (params: { id: string }) => {
    const { id: stationId } = params;
    container.innerHTML = WagleView(stationId);
    fetchCardList({ stationId });
    fetchTagList(Number(stationId) + 1);
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
  };

  return {
    home,
    detail,
    notFound,
  };
};
