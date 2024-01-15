import { showDialog } from "./modalHandler.js";
import { fetchCardList, fetchUploadImg } from "../api/getApi.js";
import { getStationId } from "../utils/getStationId.js";
import { uploadCard } from "../api/postApi.js";

let selectedTagId = "";
let selectedImgId = "";

export const uploadTagHandler = (target) => {
  const tagElement = target.closest(".tag");
  const list = [...tagElement.parentNode.children];
  list.forEach((tag) => tag.classList.remove("selected-tag"));
  tagElement.classList.add("selected-tag");
  selectedTagId = tagElement.id;
};

export const waggleTagSelectHandler = (target) => {
  // tagID 값만 필요하긴 한데 아래 코드를 이해하지 못해서 그냥 복붙 했습니닷..
  const tagElement = target.closest(".tag");
  const list = [...tagElement.parentNode.children];
  list.forEach((tag) => tag.classList.remove("selected-tag"));
  tagElement.classList.add("selected-tag");
  selectedTagId = tagElement.id;
  const stationId = getStationId();
  fetchCardList(stationId, Number(selectedTagId));
};

export const tagSelectHandler = (target) => {
  const parent = target.closest("ul");
  if (parent.classList.contains("upload__tag-list")) {
    return uploadTagHandler(target);
  }
  if (parent.classList.contains("wagle__header__tag-list")) {
    return waggleTagSelectHandler(target);
  }
};

export const imgSelectHandler = (target) => {
  const imgElement = target.closest(".upload__photo");
  const list = [...imgElement.parentNode.children];
  list.forEach((img) => img.classList.remove("selected-photo"));
  imgElement.classList.add("selected-photo");
  selectedImgId = imgElement.id;
};

const setFormData = (form) => {
  const newFormData = new FormData(form);
  const correctedTagId = selectedTagId ? Number(selectedTagId) + 1 : null;
  const stationId = getStationId();
  newFormData.set("tagId", correctedTagId);
  newFormData.set("stationId", Number(stationId) + 1); // DB index 보정
  newFormData.set("imageId", Number(selectedImgId));

  return newFormData;
};

const resetId = () => {
  selectedTagId = "";
  selectedImgId = "";
};

export const onModalSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const newFormData = setFormData(form);
  let newCard = Object.fromEntries(newFormData);

  newCard.tagId = Number(newCard.tagId);
  newCard.stationId = Number(newCard.stationId);
  newCard.imageId = Number(newCard.imageId);
  uploadCard(newCard);
  resetId();
  form.reset();
};

export const uploadCardHandler = (target) => {
  fetchUploadImg();
  showDialog();
};
