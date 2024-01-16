export const UploadHeaderView = (currStation: string) => {
  return `
<header class="upload__header">
  <menu class="station__title">
    <svg
      class="circle"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <circle cx="6" cy="6" r="6" fill="#00DFA9" />
    </svg>
    <h3 class="station__title__text">${currStation}</h3>
  </menu>
  <h4 class="upload__header__text">에서 무슨 일이?</h4>
</header>
  `;
};
