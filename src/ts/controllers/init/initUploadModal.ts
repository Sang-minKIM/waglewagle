import { UploadView } from "../../views/pages/UploadView.js";

const modal = document.querySelector(".modal");

export const initUploadModal = () => {
  const modalHTML = UploadView();
  modal.innerHTML = modalHTML;
  initEventListener();
};
