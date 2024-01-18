interface ImageData {
  imageId: number;
  imageURL: string;
}

export const UploadPhotoView = ({ imageId, imageURL }: ImageData) => {
  return `
<article class="js-onImgSelect upload__photo" id="${imageId}">
    <img class="js-onImgSelect" src="${imageURL}" alt="jjal" />
</article>
    `;
};
