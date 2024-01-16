const loadingCardView = () => {
  return `
<section class="wagle__main__card">
<header class="card__header">
    <div class="card__header__img-wrapper"></div>
    <div class="card__header__info"></div>
</header>    
<article class="card__content">
    <div class="card__content--only-text"></div>
</article>
<footer class="card__footer"></footer>   
</section>   
    `;
};

export const WagleLoadingView = () => {
  return `
<main class="wagle__main  wagle__main--loading">
${loadingCardView()}
${loadingCardView()}
<main>
    `;
};
