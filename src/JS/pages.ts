import { fetchCardList, getHomeInfo, fetchTagList, getHotStations } from "./controllers/api/getApi.js";
import { HomeView } from "./views/pages/HomeView.js";
import { WagleView } from "./views/pages/WagleView.js";

export const createPages = (container: HTMLDivElement) => {
  const home = () => {
    container.innerHTML = HomeView();
    getHotStations();
    getHomeInfo();
  };

  const detail = (params: string) => {
    const { id: stationId } = params;
    container.innerHTML = WagleView(stationId);
    fetchCardList(stationId);
    fetchTagList(Number(stationId) + 1);
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
  };

  return {
    home,
    detail,
    notFound,
    upload,
  };
};
