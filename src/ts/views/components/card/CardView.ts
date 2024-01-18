import { getTime } from "../../../controllers/utils/getDate.ts";
import { tagList } from "../../../data.ts";
import { BothCardView } from "./BothCardView.ts";
import { CardFooterView } from "./CardFooterView.ts";
import { CardHeaderView } from "./CardHeaderView.ts";
// import { OnlyImgCardView } from "./OnlyImgCardView.ts";
import { OnlyTextCardView } from "./OnlyTextCardView.ts";
interface CardViewProps {
  nickname: string;
  content: string;
  imageUrl?: string;
  like: number;
  createdTime: Date;
  id: number;
  tagId?: number;
}

export const CardView = ({
  nickname,
  content,
  imageUrl,
  like,
  createdTime,
  id,
  tagId = 0,
}: CardViewProps) => {
  const profileImg = tagList[Number(tagId)].img;
  const formattedTime = getTime(createdTime);

  return `
  <section class="wagle__main__card" id="${id}">
      ${CardHeaderView(profileImg, nickname, formattedTime)}
      <article class="card__content">
          ${!imageUrl ? OnlyTextCardView(content) : BothCardView(content, imageUrl)}
      </article>
      ${CardFooterView(like)}
  </section>
      `;
};

/**
 * content가 없는 경우를 일단 없앴음
 * ${!content ? OnlyImgCardView(imageUrl) : ""}
 */
