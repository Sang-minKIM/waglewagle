import { UploadView } from "../../views/pages/UploadView.ts";
import { initEventListener } from "./initEventListener.ts";

const modal = document.querySelector(".modal") as HTMLDialogElement;

export const initUploadModal = () => {
  const modalHTML = UploadView();
  modal.innerHTML = modalHTML;
  initEventListener();
};
