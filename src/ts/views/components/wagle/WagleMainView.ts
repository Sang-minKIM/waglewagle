import { CardView } from "../card/CardView.ts";

interface Card {
  id: number;
  nickname: string;
  createdTime: Date;
  imageUrl?: string;
  tagId?: number;
  like: number;
  content: string;
}

export const WagleMainView = (cardList: Card[]) => {
  return `
<main class="wagle__main">
  ${cardList.map((card) => CardView(card)).join(" ")}
</main>
    `;
};
