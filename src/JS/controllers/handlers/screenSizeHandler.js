export const screenSizeHandler = () => {
  //먼저 뷰포트 높이를 얻고 1%를 곱하여 vh 단위 값을 얻습니다.
  let vh = window.innerHeight * 0.01;
  //그런 다음 --vh 사용자 정의 속성의 값을 문서의 루트로 설정합니다.
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
