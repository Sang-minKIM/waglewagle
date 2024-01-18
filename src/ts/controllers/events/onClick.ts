import { gotoNearWagle } from "../handlers/nearWagleHandler.ts";
import { likePostHandler } from "../handlers/likePostHandler.ts";
import {
  uploadCardHandler,
  tagSelectHandler,
  imgSelectHandler,
} from "../handlers/uploadCardHandler.ts";
import { closeDialog } from "../handlers/modalHandler.ts";

interface ClickHandlerMap {
  [key: string]: (target: HTMLElement) => void;
}

const clickHandlerMap: ClickHandlerMap = {
  "js-onUpload": uploadCardHandler,
  "js-onTagSelect": tagSelectHandler,
  "js-onImgSelect": imgSelectHandler,
  "js-nearWagle": gotoNearWagle,
  "js-likePost": likePostHandler,
  "js-onCloseModal": closeDialog,
};

export const onClick = ({ target }: MouseEvent) => {
  if (target instanceof HTMLElement) {
    const executeHandler = clickHandlerMap[target.classList[0]];
    if (executeHandler) {
      executeHandler(target);
    }
  }
};
