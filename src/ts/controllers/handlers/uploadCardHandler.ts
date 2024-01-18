import { showDialog } from "./modalHandler.ts";
import { fetchCardList, fetchUploadImg } from "../api/getApi.ts";
import { getStationId } from "../utils/getStationId.ts";
import { uploadCard } from "../api/postApi.ts";

let selectedTagId = "";
let selectedImgId = "";

export const uploadTagHandler = (target: HTMLElement) => {
  const tagElement = target.closest(".tag") as HTMLElement;
  const list = [...tagElement.parentNode!.children];
  list.forEach((tag) => tag.classList.remove("selected-tag"));
  tagElement.classList.add("selected-tag");
  selectedTagId = tagElement.id;
};

export const waggleTagSelectHandler = (target: HTMLElement) => {
  const tagElement = target.closest(".tag") as HTMLElement;
  const list = [...tagElement.parentNode!.children];
  list.forEach((tag) => tag.classList.remove("selected-tag"));
  tagElement.classList.add("selected-tag");
  selectedTagId = tagElement.id;
  const stationId = getStationId();
  fetchCardList({ stationId, selectedTagId });
};

export const tagSelectHandler = (target: HTMLElement) => {
  const parent = target.closest("ul") as HTMLUListElement;
  if (parent.classList.contains("upload__tag-list")) {
    return uploadTagHandler(target);
  }
  if (parent.classList.contains("wagle__header__tag-list")) {
    return waggleTagSelectHandler(target);
  }
};

export const imgSelectHandler = (target: HTMLElement) => {
  const imgElement = target.closest(".upload__photo") as HTMLElement;
  const list = [...imgElement.parentNode!.children];
  list.forEach((img) => img.classList.remove("selected-photo"));
  imgElement.classList.add("selected-photo");
  selectedImgId = imgElement.id;
};

const setFormData = (form: HTMLFormElement) => {
  const newFormData = new FormData(form);
  const correctedTagId = selectedTagId ? Number(selectedTagId) + 1 : null;
  const stationId = getStationId();
  newFormData.set("tagId", correctedTagId + "");
  newFormData.set("stationId", Number(stationId) + 1 + ""); // DB index 보정
  newFormData.set("imageId", Number(selectedImgId) + "");

  return newFormData;
};

const resetId = () => {
  selectedTagId = "";
  selectedImgId = "";
};

interface UploadCardProps {
  tagId?: number;
  content: string;
  stationId: number;
  imageId?: number;
}

export const onModalSubmit = (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const newFormData = setFormData(form);
  const newCardFormData = Object.fromEntries(newFormData);
  let newCard = {
    ...newCardFormData,
    tagId: Number(newCardFormData.tagId),
    stationId: Number(newCardFormData.stationId),
    imageId: Number(newCardFormData.imageId),
  } as UploadCardProps;

  uploadCard(newCard);
  resetId();
  form.reset();
};

export const uploadCardHandler = () => {
  fetchUploadImg();
  showDialog();
};
