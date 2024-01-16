export const getStationId = () => {
  const { pathname } = window.location;
  const stationId = pathname.split("/")[2];
  return stationId;
};
