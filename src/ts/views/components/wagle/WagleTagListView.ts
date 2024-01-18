import { tagList } from "../../../data.ts";
import { TagView } from "../TagView.ts";

export const WagleTagListView = () => {
  return `
    <ul class="wagle__header__tag-list">
        ${tagList.map((tag, idx) => TagView(idx, tag.img, tag.text, "wagle")).join(" ")}
    </ul>
    `;
};
