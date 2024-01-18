import { onClick } from "../events/onClick.ts";
import { textCountHandler } from "../handlers/textCountHandler.ts";
import { onModalSubmit } from "../handlers/uploadCardHandler.ts";

const $ = document.querySelector.bind(document);

const app = $("#app") as HTMLDivElement;
const modal = $(".modal") as HTMLDialogElement;

export const initEventListener = () => {
  app.addEventListener("click", onClick);
  modal.addEventListener("input", textCountHandler);
  modal.addEventListener("click", onClick);
  modal.addEventListener("submit", onModalSubmit);
};
