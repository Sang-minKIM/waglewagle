export const textCountHandler = ({ target }: Event) => {
  if (!(target instanceof HTMLTextAreaElement)) {
    return;
  }

  const length = target.value.length;
  const textCnt = [...(target.parentNode?.children ?? [])][4];
  const submitBtn = [...(target.parentNode?.children ?? [])][7] as HTMLButtonElement;

  if (!textCnt || !submitBtn) {
    return;
  }

  textCnt.textContent = `${Math.min(length, 100)}/100`;

  submitBtn.disabled = length === 0;
  submitBtn.classList.toggle("upload__submit-btn--active", length > 0);

  if (length > 100) {
    target.value = target.value.substring(0, 100);
    textCnt.textContent = "100/100";
  }
};
