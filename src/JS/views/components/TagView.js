export const TagView = (id, img, text, parent) => {
  return `
    <li class='${parent === "wagle" && !id ? "js-onTagSelect tag selected-tag" : "js-onTagSelect tag"}' id="${id}">
        <img class="js-onTagSelect tag__img" alt="tag-img" src="${img}" />
        <span class="js-onTagSelect tag__text" >${text}</span>
    </li>
    `;
};
