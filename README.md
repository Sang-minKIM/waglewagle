# 👨‍👩‍👧‍👦 와글와글 (Wagle Wagle)

<div align="center">

<br/>  

<img width="300" alt="로고_다크" src="https://github.com/softeerbootcamp-3rd/softee5-mobil2team-FE/assets/87116017/318119f1-2af1-41d7-8455-543817e1cd17">  


<br/>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fsofteerbootcamp-3nd%2Fsoftee5-mobil2team-FE&count_bg=%23203A40&title_bg=%23BCC1CD&icon=&icon_color=%23FFFFFF&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

</div>

## About Project 🚋

### **소프티어 부트캠프 3기 - 워밍업 프로젝트 소프티5, 모빌2팀**

개발 기간  
> ver.1: 2024.01.04 ~ 2024.01.10  
> ver.2: 2024.01.11 ~ 2024.02.13

#### 지루한 지하철.. 내 옆 사람은 무슨 생각하지? 🤔💭

지하철을 타고있는 사람들의 공감대를 바탕으로 콘텐츠를 공유/탐색하며 지하철 이동 중의 지루함을 해소하는 웹서비스

### 1. 지금 내 생각은❗️

역 별로 소소한 글을 올려 당장의 나의 기분을 표현하고 다른 사람에게 정보를 공유한다.

### 2. 지금 다른 사람들은❓

비슷한 시간대에 지하철을 타는 사람들의 글을 통해 공감대를 형성하고 지루한 지하철에서의 시간을 달랜다.
<br/>(지하철 이용의 지루함 공감, 재밌는 짤 업로드 등)

### 3. 와글와글 지하철 ⁉️

정서를 표현하는 캐릭터와 공감성을 담은 재치있는 랜덤 닉네임을 통해 소소한 재미를 부여한다.
<br/>(ex. 닉네임: 출근하기 싫은 박명수)


<br/>

## Sangmin's Contribution 😎
### 0. 서비스 설계
- `User interaction`에 따라 `View`를 업데이트 하도록 프로젝트를 설계하여 데이터 흐름을 제어
- `Vanilla JS`를 사용해 `React`처럼 `JS`에서 `HTML`을 삽입하도록 하여 컴포넌트 단위로 UI를 재활용
- 이벤트 위임을 활용하여 최상위에서 이벤트를 제어, 이벤트 map 객체를 활용해 가독성 향상
![image](https://github.com/Sang-minKIM/waglewagle/assets/87116017/69a5aaee-69d1-4812-a613-23f139121d60)


### 1. 노선도 화면
- `geolocationAPI`와 `element.scrollIntoView`를 활용해 현재 위치 정보를 바탕으로 가까운 역으로 화면 이동 
- `SCSS`의 반복문을 활용해 게시글 수가 많은 역의 pin이 커지도록 애니메이션 적용
- `CSS Grid`를 활용해 지하철 노선도 표현  

    ![홈화면](https://github.com/Sang-minKIM/waglewagle/assets/87116017/e3b8296e-cf9f-4274-bb12-793f775204a7)  

### 2. 게시글 화면
- `History API`를 활용한 `SPA Router`를 구현해 `Vanilla JS` 환경에서 새로고침 없는 페이지 전환 제공
- 게시글 로딩중 스켈레톤 UI 적용
  
    ![게시글보기](https://github.com/Sang-minKIM/waglewagle/assets/87116017/4187625d-3afd-4227-a47c-b022400cbc15)
    ![역간이동](https://github.com/Sang-minKIM/waglewagle/assets/87116017/51992c69-b8c8-4ab7-bea3-38a2a3fe1356)
  
- 태그별 게시글 모아보기 제공
  
    ![태그분류](https://github.com/Sang-minKIM/waglewagle/assets/87116017/2ce5e688-4cba-4d5a-a43e-223c6ef158e3)
  
- 부적절한 게시글 신고 기능 제공 / localStorage를 활용해 신고 시 즉시 가리기, 누적 5회 이상 신고 게시글은 DB에서 삭제
  
  ![게시글 신고](https://github.com/Sang-minKIM/waglewagle/assets/87116017/14394058-686e-481e-81f0-ff9802cb1c34)  


### 3. 게시글 작성 화면
- 글 또는 사진은 적어도 1개 이상 필수로 선택
- `문자열 Escape`를 활용해 `HTML` 태그를 `엔티티`로 변경하여 XSS 공격 방지
  
    ![게시글작성](https://github.com/Sang-minKIM/waglewagle/assets/87116017/6d31dac1-a894-4ba4-ad55-238cab27aee7)


## Video 📺
- 와글와글 시연영상 (아래의 이미지를 클릭하시면 유튜브 링크로 연결됩니다.)
  
    [![게시글보기](https://github.com/Sang-minKIM/waglewagle/assets/87116017/4187625d-3afd-4227-a47c-b022400cbc15)](https://www.youtube.com/watch?v=4DGbPUgZag4)

## Our Team 🌿

### 우리 팀의 협업

👩🏻‍💻 [모빌2팀의 그라운드 룰](https://github.com/softeerbootcamp-3nd/softee5-mobil2team-FE/blob/dev/document/ground_rule.md)

📁 [API 문서(Swagger)](http://13.209.90.251/swagger-ui/index.html)

🧑‍🏫 [용어 사전](https://github.com/softeerbootcamp-3nd/softee5-mobil2team-FE/blob/dev/document/dictionary.md)

📎 [트러블 슈팅](https://github.com/softeerbootcamp-3nd/softee5-mobil2team-FE/blob/dev/document/trouble_shooting.md)

<br/>

### 팀원 소개

|                                       기획                                        |                                                                    디자인                                                                     |                                    개발(FE)                                     |                                   개발(FE,BE)                                   |                                   개발(FE,BE)                                   |                                    개발(BE)                                     |
| :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
| <img width="160px" src="https://avatars.githubusercontent.com/u/155419724?v=4" /> | <img width="160px" src="https://github.com/softeerbootcamp-3nd/softee5-mobil2team-BE/assets/48647199/76612e34-3d8c-4253-afd1-492d416624ef" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/87116017?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/43667241?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/90602694?v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/48647199?v=4"/> |
|                 [@yunnamkyeong](https://github.com/yunnamkyeong)                  |                                              [Naeun Kim](https://www.behance.net/torytory7576fe)                                              |                 [@Sang-minKIM](https://github.com/Sang-minKIM)                  |                   [@insiderhj](https://github.com/insiderhj)                    |                   [@SuHyeon00](https://github.com/SuHyeon00)                    |                     [@h-sooah](https://github.com/h-sooah)                      |
|                                      윤남경                                       |                                                                    김나은                                                                     |                                     김상민                                      |                                     김희진                                      |                                     오수현                                      |                                     한수아                                      |

<br/>



## Stacks 🐈

### Environment
![VSCode](https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)
![Intellij](https://img.shields.io/badge/Intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### FrontEnd

![HTML5](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)

### BackEnd

![SpringBoot](https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=Springboot&logoColor=white)
![H2](https://img.shields.io/badge/H2-4479A1?style=for-the-badge&logo=H2&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white)

### CI/CD

![GithubActions](https://img.shields.io/badge/Github_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

### Deploy

![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)





