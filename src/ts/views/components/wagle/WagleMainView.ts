import { CardView } from "../card/CardView.ts";

export const WagleMainView = (cardList) => {
  return `
<main class="wagle__main">
  ${cardList.map((card) => CardView(card)).join(" ")}
</main>
    `;
};
