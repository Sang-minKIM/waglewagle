export const textCountHandler = (target) => {
  const length = target.value.length;
  const textCnt = [...target.parentNode.children][4];
  textCnt.textContent = `${length}/100`;
  const submitBtn = [...target.parentNode.children][7];
  if (length > 0) {
    submitBtn.disabled = false;
    submitBtn.classList.add("upload__submit-btn--active");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("upload__submit-btn--active");
  }

  if (length > 100) {
    target.value = target.value.substring(0, 100);
    textCnt.textContent = "100/100";
  }
};
