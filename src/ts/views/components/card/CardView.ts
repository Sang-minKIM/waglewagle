import { getTime } from "../../../controllers/utils/getDate.ts";
import { tagList } from "../../../data.ts";
import { BothCardView } from "./BothCardView.ts";
import { CardFooterView } from "./CardFooterView.ts";
import { CardHeaderView } from "./CardHeaderView.ts";
// import { OnlyImgCardView } from "./OnlyImgCardView.ts";
import { OnlyTextCardView } from "./OnlyTextCardView.ts";

export const CardView = ({ nickname, content, imageUrl, like, createdTime, id, tagId }) => {
  const profileImg = tagId ? tagList[tagId].img : tagList[0].img;
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
