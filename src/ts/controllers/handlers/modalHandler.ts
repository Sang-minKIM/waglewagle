const dialog = document.querySelector(".modal") as HTMLDialogElement;

export const showDialog = () => {
  dialog.showModal();
};

export const closeDialog = () => {
  dialog.close();
};
