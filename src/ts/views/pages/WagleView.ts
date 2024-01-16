import { UploadLinkView } from "../components/ButtonViews.ts";
import { WagleLoadingView } from "../components/LoaderViews.ts";

import { WagleHeaderView } from "../components/wagle/WagleHeaderView.ts";

export const WagleView = (stationId: string) => {
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
