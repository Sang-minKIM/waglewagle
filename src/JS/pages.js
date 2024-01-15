import { fetchCardList, getHomeInfo, fetchTagList, getHotStations } from "./controllers/api/getApi.js";
import { HomeView } from "./views/pages/HomeView.js";
import { UploadView } from "./views/pages/UploadView.js";
import { WagleView } from "./views/pages/WagleView.js";

export default (container) => {
  const home = () => {
    container.innerHTML = HomeView();
    getHotStations();
    getHomeInfo();
  };

  const detail = (params) => {
    const { id: stationId } = params;
    container.innerHTML = WagleView(stationId);
    fetchCardList(stationId);
    fetchTagList(Number(stationId) + 1);
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
  };

  const upload = () => {
    container.innerHTML = UploadView();
  };

  return {
    home,
    detail,
    notFound,
    upload,
  };
};
