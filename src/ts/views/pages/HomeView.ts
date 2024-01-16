import { stationGrid } from "../../data.ts";
import {
  NearWagleTooltipView,
  NearWagleView,
  WagleLinkLoaderView,
} from "../components/ButtonViews.ts";

export const HomeView = () => {
  return `
  <header class="home__header">
    <div class="home__header__title">
      <img alt="icon" src="home_header_img.svg"/>
      <img alt="title" src="home_header_title.svg"/>
    </div>
    <div class="home__hot_area">
    </div>
  </header>
  <div class="container">
    <div name="subway" class="subway-line">
      <div class="subway-line__empty--center"></div>
      <div class="subway-line__empty--edge"></div>
      <div class="subway-line__empty--edge"></div>
      <div class="subway-line__empty--edge"></div>
      <div class="subway-line__empty--edge"></div>
      ${stationGrid.map((stationId: number) => WagleLinkLoaderView(stationId)).join(" ")}
    </div>
    ${NearWagleTooltipView()}
    ${NearWagleView()}
</div>
    `;
};
