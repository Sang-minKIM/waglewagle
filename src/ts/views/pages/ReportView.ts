import { reportReasonList } from "../../data";

export const ConfirmView = () => {
  return `
<h2>신고가 접수되었습니다. 신고된 글은 숨김 처리됩니다.</h2>
<button class="js-onConfirm confirm__btn">확인</button>  
  `;
};

const ReportReasonView = ({ id, text }: { id: number; text: string }) => {
  return `
<label for="report-reason-${id}">
    <input type="radio" name="report-reason" id="report-reason-${id}" value="${id}" />
    ${text}
</label>
`;
};

export const ReportView = (target: HTMLElement) => {
  const cardId = target.closest(".wagle__main__card")!.id;
  return `
    <header class="report__header">
    <h2>신고하기</h2>
    <button type="button" class="js-onCloseReport report__header--close"></button>
  </header>
  <main class="report__reason">
   ${reportReasonList.map((reason, id) => ReportReasonView({ id, text: reason })).join("")}
  </main>
  <button data-card-id="${cardId}" type="button" class="js-onSubmitReport report__submit" disabled>신고하기</button>    
    `;
};
