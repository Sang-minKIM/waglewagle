import { UploadPhotoView } from "./UploadPhotoView.js";

export const UploadPhotoListView = (imageList) => {
  return `
<h4 class="upload__photo-label">짤 사용하기</h4>
<section class="upload__photo-list">
    ${imageList.map((img) => UploadPhotoView(img)).join(" ")}
</section>
    `;
};
