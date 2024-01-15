import icon from "/empty_img.svg";

export const WagleEmptyView = () => {
  return `
<main class="wagle__main--empty">
    <img alt="empty_img" class="main__icon--empty" src="${icon}" />
    <p class="main__text--empty">나의 지하철 소식을 공유해보세요!</p>
</main>
    `;
};
