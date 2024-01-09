export const UploadLinkView = () => {
  return `
<button class="js-onUpload go-upload"></button>
`;
};

export const WagleLinkView = (stationId) => {
  return `
<a data-navigate href="station/${stationId}"  class="subway-line__station" id="${stationId}">
  <img class="subway-line__station__pin" src="/pin/pin_${
    (stationId % 11) + 1
  }.svg" alt="pin" />
</a>
  `;
};

export const NearWagleTooltipView = () => {
  return `
<div class="subway-line__near-tooltip">
  <div class="near-tooltip__baloon">나와 가까운 사람들의 와글와글을 구경해보세요!</div>
  <img src="tooltip_polygon.svg"/>
</div>
  `;
};

export const NearWagleView = () => {
  return `
<div class="js-nearWagle subway-line__near-btn">
  <img class="js-nearWagle near_img" alt="near_img" src="/near_img.svg"/>
  <span class="js-nearWagle near-btn__text">내 주변 와글와글</span>
</div>
`;
};
