import { UploadLinkView } from "../components/ButtonViews.js";
import { WagleLoadingView } from "../components/LoaderViews.js";

import { WagleHeaderView } from "../components/wagle/WagleHeaderView.js";

export const WagleView = (stationId) => {
  return `
<div class="wagle">
    ${WagleHeaderView(stationId)}
    <div class="wagle__list">
    ${WagleLoadingView()}
    </div>
    ${UploadLinkView()}
</div>
  `;
};
