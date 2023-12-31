import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: StratosSkyeng, sans-serif;
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: StratosSkyeng;
  src:
    local('StratosSkyeng'),
    local('StratosSkyeng'),
    url('/public/fonts/StratosSkyeng.woff2') format('woff2'),
    url('/public/fonts/StratosSkyeng.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

html,
body {
  font-size: 16px;
  font-family: StratosSkyeng, sans-serif;
  color: var(--main-text);
  transition: color 0.5s ease;
}

@media screen and (max-width: 1024px) {
  html,
  body {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 12px;
  }
}

@media screen and (max-width: 508px) {
  html,
  body {
    font-size: 11px;
  }
}


:root[data-theme='dark'] {
  --wrapper: #383838;
  --main-text: #fff;
  --container: #181818;
  --container-bg: #18181880;
  --btn-border-text-hover: #d9b6ff;
  --btn-text-active: #ad61ff;
  --main-nav: #181818;
  --logo-img: #181818;
  --burger-line: #d3d3d3;
  --center-block-search: #4e4e4e;
  --play-list-title: #4e4e4e;
  --title-track-img: #313131;
  --track-title-span: #4e4e4e;
  --sidebar-icon-bg: #313131;
  --bar-player-progress: #2e2e2e;
  --player-btn-prev-next: #d9d9d9;
  --track-play-img-bg: #313131;
  --player-bg: rgb(28 28 28 0.5);
  --logo-letters: #fff;
  --track-title-svg: #4e4e4e;
  --track-title-svg-bg: #313131;
  --player-btn-hover: #696969;
  --player-btn-repeat-shuffle: #696969;
  --player-btn-repeat-shuffle-hover: #acacac;
  --player-btn-repeat-shuffle-active: #fff;
  --like-active-fill: #696969;
  --like-active-stroke: #fff;
  --scrollbar: #4b4949;
  --scroll-thumb: #fff;
}

:root[data-theme='light'] {
  --wrapper: #f3e7ff;
  --main-text: #000;
  --container: #f3e7ff;
  --container-bg: #f3e7ff80;
  --btn-border-text-hover: #580ea2;
  --btn-text-active: #ad61ff;
  --main-nav: #f3e7ff;
  --logo-img: #f3e7ff;
  --burger-line: #000;
  --center-block-search: #d9d9d9;
  --play-list-title: #b1b1b1;
  --title-track-img: #d9b6ff;
  --track-title-span: #b1b1b1;
  --sidebar-icon-bg: #f3e7ff;
  --bar-player-progress: #d9d9d9;
  --player-btn-prev-next: #b1b1b1;
  --track-play-img-bg: #4e4e4e;
  --player-bg: #f3e7ff;
  --logo-letters: #000;
  --track-title-svg: #b1b1b1;
  --track-title-svg-bg: #ad61ff;
  --player-btn-hover: #707070;
  --player-btn-repeat-shuffle: #b1b1b1;
  --player-btn-repeat-shuffle-hover: #707070;
  --player-btn-repeat-shuffle-active: #000;
  --like-active-fill: #ad61ff;
  --like-active-stroke: #ad61ff;
  --scrollbar: #d9d9d9;
  --scroll-thumb: #b1b1b1;
}
`;
