import { createRouter } from "./ts/router.ts";
import { createPages } from "./ts/pages.ts";
import { screenSizeHandler } from "./ts/controllers/handlers/screenSizeHandler.ts";
import { initEventListener } from "./ts/controllers/init/initEventListener.ts";

import { closeDialog } from "./ts/controllers/handlers/modalHandler.ts";
import { initReportList } from "./ts/controllers/init/initReportList.ts";

screenSizeHandler();
initEventListener();
initReportList();

const container = document.getElementById("app") as HTMLDivElement;

const pages = createPages(container);

const router: any = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/station/:id", pages.detail)
  .setNotFound(pages.notFound)
  .start();

/**
 * 브라우저 기본 이동 동작을 막고 navigate로 페이지만 바꿈 -> pushstate로 url 변경
 * data-navigate 속성을 안 주면 그냥 a태그로 이동하는 것과 같다는 것을 알 수 있다. -> 브라우저가 화면을 새로고침 함
 */
const NAV_A_SELECTOR = "a[data-navigate]";

document.body.addEventListener("click", (event: any) => {
  const { target } = event;

  if (target?.matches(NAV_A_SELECTOR)) {
    event.preventDefault();
    router.navigate(target.href);
  }
});

/**
 * will fix
 */
const goBackHandler = () => {
  router.navigate("/");
  closeDialog();
};

window.addEventListener("popstate", goBackHandler);
