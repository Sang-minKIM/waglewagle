import { postReport } from "../api/postApi";
import { renderReportModal } from "../render";

const report = document.querySelector(".report") as HTMLDialogElement;
const confirm = document.querySelector(".confirm") as HTMLDialogElement;

// // 신고 버튼을 클릭하면 신고 요청
// dialog.querySelector(".report").addEventListener("click", () => {
//   const postId = 77; // 신고하는 게시글의 ID
//   const reportId = 1; // 신고 사유의 ID

//   // 신고 요청 보내기
//   report(postId, reportId);
// });

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
