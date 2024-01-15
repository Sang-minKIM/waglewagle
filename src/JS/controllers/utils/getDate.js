export const getTime = (createdTime) => {
  const originalDate = new Date(createdTime);

  // 같은날 올린 글 - HH:mm
  const sameDayOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  // 다른날 올린 글 - MM/dd HH:mm
  const differentDayOptions = {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const currentDate = new Date();
  let formattedTime;
  if (
    originalDate.getFullYear() === currentDate.getFullYear() &&
    originalDate.getMonth() === currentDate.getMonth() &&
    originalDate.getDate() === currentDate.getDate()
  ) {
    formattedTime = originalDate.toLocaleString("en-US", sameDayOptions);
  } else {
    formattedTime = originalDate.toLocaleString("en-US", differentDayOptions).replace(",", "");
  }
  return formattedTime;
};
