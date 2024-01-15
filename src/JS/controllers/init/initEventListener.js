import { onClick, onModalClick } from "../events/onClick.js";
import { onModalSubmit } from "../handlers/uploadCardHandler.js";

const app = document.getElementById("app");
const modal = document.querySelector(".modal");

export const initEventListener = () => {
  app.addEventListener("click", onClick);
  modal.addEventListener("input", onClick);
  modal.addEventListener("click", onModalClick);
  modal.addEventListener("submit", onModalSubmit);

};
