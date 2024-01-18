import escapeTextForBrowser from "../../../controllers/utils/escapeTextForBrowser";

export const BothCardView = (text: string, img: string) => {
  const sanitizedText = escapeTextForBrowser(text);
  return `
<div class="card__content--both">
    <img
      src="${img}"
      alt="card-content"
      class="card__content__img"
    />
    <p class="card__content__text">
        ${sanitizedText}
    </p>
</div>    
    `;
};
