import { getNearStation } from "../api/getApi";

export const gotoNearWagle = () => {
  const tooltipElement = document.querySelector(".subway-line__near-tooltip") as HTMLElement;
  if (tooltipElement) {
    tooltipElement.style.display = "none";
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getNearStation(latitude, longitude);
      },
      function () {
        alert("위치 정보를 가져올 수 없습니다.");
      }
    );
  } else {
    alert("이 브라우저에서는 위치 정보가 지원되지 않습니다.");
  }
};
