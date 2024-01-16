export const UploadPhotoView = ({ imageId, imageURL }: Record<string, string>) => {
  return `
<article class="js-onImgSelect upload__photo" id="${imageId}">
    <img class="js-onImgSelect" src="${imageURL}" alt="jjal" />
</article>
    `;
};
