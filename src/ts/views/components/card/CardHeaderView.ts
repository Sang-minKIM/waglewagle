export const CardHeaderView = (img: string, title: string, time: string) => {
  return `
<header class="card__header">
    <div class="card__header__img-wrapper">
        <img src="${img}" alt="card-profile" />
    </div>
    <div class="card__header__info">
        <h4 class="card__header__info__title">${title}</h4>
        <span class="card__header__info__time">${time} 작성됨</span>
    </div>
    <button class="js-onOpenReport report-btn">신고</button>
</header>    
    `;
};
