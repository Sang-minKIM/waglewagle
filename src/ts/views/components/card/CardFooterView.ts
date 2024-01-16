import heart from "/heart_img.svg";

export const CardFooterView = (likeCount) => {
  return `
<footer class="js-likePost card__footer">
    <div class="card__footer__like-container">
    <img
        src="${heart}"
        alt="like"
        class="js-likePost card__footer__like-img"
    />
    </div>
    <span class="js-likePost card__footer__like-count">${likeCount}</span>
</footer>    
    `;
};
