import { tagList } from "../../../data.js";
import { TagView } from "../TagView.js";

export const UploadTagListView = () => {
  const uploadTagList = [...tagList];
  uploadTagList.shift();
  return `
<ul class="upload__tag-list">
    ${uploadTagList.map((tag, idx) => TagView(idx, tag.img, tag.text, "upload")).join(" ")}
</ul>
    `;
};
