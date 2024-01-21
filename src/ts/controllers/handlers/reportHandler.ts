import { postReport } from "../api/postApi";
import { renderReportModal } from "../render";

const report = document.querySelector(".report") as HTMLDialogElement;
const confirm = document.querySelector(".confirm") as HTMLDialogElement;

const showConfirm = () => {
  confirm.showModal();
};

export const closeConfirm = () => {
  confirm.close();
};

export const showReport = () => {
  report.showModal();
};

export const closeReport = () => {
  report.close();
};

const DB_INDEX_CORRECTION_FACTOR = 1;

export const submitReport = (target: HTMLElement) => {
  const postId = Number(target.dataset.cardId);

  const selectedReason = target.parentNode!.querySelector(
    'input[name="report-reason"]:checked'
  ) as HTMLInputElement;
  const reportId = Number(selectedReason?.value) + DB_INDEX_CORRECTION_FACTOR;

  postReport({ postId, reportId });
  closeReport();
  showConfirm();
};

export const openReport = (target: HTMLElement) => {
  renderReportModal(target);
  showReport();
};
