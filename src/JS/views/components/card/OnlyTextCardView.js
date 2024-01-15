import escapeTextForBrowser from "../../../controllers/utils/escapeTextForBrowser";

export const OnlyTextCardView = (text) => {
  const sanitizedText = escapeTextForBrowser(text);
  return `
<div class="card__content--only-text">${sanitizedText}</div>
    `;
};
