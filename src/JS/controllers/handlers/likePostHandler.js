import { likePost } from "../api/postApi";
import { debounce } from "../utils/debounce";

let pendingLikes = [];

const increaseLikeCount = (postId) => {
  const existingObject = pendingLikes.find((like) => like.id == postId);
  if (existingObject) {
    existingObject.count += 1;
  } else {
    pendingLikes.push({ id: Number(postId), count: 1 });
  }
};

const animateHeart = (container) => {
  const heartImg = document.createElement("img");
  heartImg.src = "/heart_img.svg";
  heartImg.alt = "heart";
  heartImg.classList.add("card__footer__like-animate");

  const randomValue = Math.floor(Math.random() * 81) - 40;
  heartImg.style.setProperty("--random", `${randomValue}px`);

  container.appendChild(heartImg);

  setTimeout(() => {
    heartImg.remove();
  }, 1000);
};

const sendLikes = () => {
  pendingLikes.forEach((postInfo) => {
    likePost(postInfo);
  });
  pendingLikes = [];
};

const debouncedUpdateCount = debounce(sendLikes, 300);

export const likePostHandler = (target) => {
  const postId = target.closest(".wagle__main__card").id;
  const heartContainer = document.getElementById(postId).querySelector(".card__footer__like-container");
  const spanElement = document.getElementById(postId).querySelector(".card__footer__like-count");

  const currentCount = spanElement.textContent || spanElement.innerText;
  spanElement.textContent = Number(currentCount) + 1;

  increaseLikeCount(postId);
  animateHeart(heartContainer);
  debouncedUpdateCount();
};
