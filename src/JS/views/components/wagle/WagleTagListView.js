import { tagList } from "../../../data.js";
import { TagView } from "../TagView.js";

export const WagleTagListView = () => {
  return `
    <ul class="wagle__header__tag-list">
        ${tagList.map((tag, idx) => TagView(idx, tag.img, tag.text, "wagle")).join(" ")}
    </ul>
    `;
};
