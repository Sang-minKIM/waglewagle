export const getReports = () => {
  return [...JSON.parse(localStorage.getItem("reportList")!)];
};

export const saveReport = (postId: number) => {
  const reportList = getReports();
  reportList.push(postId);
  localStorage.setItem("reportList", JSON.stringify(reportList));
};
