import { UploadPhotoView } from "./UploadPhotoView.ts";

export const UploadPhotoListView = (imageList: Record<string, string>[]) => {
  return `
<h4 class="upload__photo-label">짤 사용하기</h4>
<section class="upload__photo-list">
    ${imageList.map((img) => UploadPhotoView(img)).join(" ")}
</section>
    `;
};
