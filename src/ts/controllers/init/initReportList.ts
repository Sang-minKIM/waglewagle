export const initReportList = () => {
  if (localStorage.getItem("reportList")) {
    return;
  }
  localStorage.setItem("reportList", JSON.stringify([]));
};
