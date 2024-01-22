import { onClick } from "../events/onClick.ts";
import { textCountHandler } from "../handlers/textCountHandler.ts";
import { onModalSubmit } from "../handlers/uploadCardHandler.ts";

const $ = document.querySelector.bind(document);

const app = $("#app") as HTMLDivElement;
const modal = $(".modal") as HTMLDialogElement;
const report = $(".report") as HTMLDialogElement;
const confirm = $(".confirm") as HTMLDialogElement;

const onChange = () => {
  const reportButton = report.querySelector(".report__submit") as HTMLButtonElement;
  reportButton.disabled = !report.querySelector("input[name='report-reason']:checked");
};

export const initEventListener = () => {
  app.addEventListener("click", onClick);
  modal.addEventListener("input", textCountHandler);
  modal.addEventListener("click", onClick);
  report.addEventListener("click", onClick);
  modal.addEventListener("submit", onModalSubmit);
  report.addEventListener("change", onChange);
  confirm.addEventListener("click", onClick);
};
