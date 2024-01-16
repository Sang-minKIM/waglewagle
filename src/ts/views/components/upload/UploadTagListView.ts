import { tagList } from "../../../data.ts";
import { TagView } from "../TagView.ts";

export const UploadTagListView = () => {
  const uploadTagList = [...tagList];
  uploadTagList.shift();
  return `
<ul class="upload__tag-list">
    ${uploadTagList.map((tag, idx) => TagView(idx, tag.img, tag.text, "upload")).join(" ")}
</ul>
    `;
};
