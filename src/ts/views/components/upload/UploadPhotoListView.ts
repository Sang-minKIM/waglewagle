import { UploadPhotoView } from "./UploadPhotoView.ts";

interface ImageData {
  imageId: number;
  imageURL: string;
}

export const UploadPhotoListView = (imageList: ImageData[]) => {
  return `
<h4 class="upload__photo-label">짤 사용하기</h4>
<section class="upload__photo-list">
    ${imageList.map((img) => UploadPhotoView(img)).join(" ")}
</section>
    `;
};
