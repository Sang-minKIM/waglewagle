export const getReports = () => {
    try {
        const data = localStorage.getItem("reportList");
        if (!data) return [];

        const reportList = JSON.parse(data);
        if (!Array.isArray(reportList)) return [];

        return reportList;
    } catch (error) {
        console.error("Parsing error in getReports:", error);
        return [];
    }
};

export const saveReport = (postId: number) => {
    const reportList = getReports();
    reportList.push(postId);
    localStorage.setItem("reportList", JSON.stringify(reportList));
};
