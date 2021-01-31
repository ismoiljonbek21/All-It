// import $ from "jquery";
import "./style/style.css";
import "./less/style.less";
import "./scss/style.scss";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

const images = importAll(
  require.context("./assets/img/", false, /\.(png|jpe?g|svg|PNG)$/)
);
const videos = importAll(
  require.context("./assets/video/", false, /\.(mp4|mov|avi)$/)
);
const audios = importAll(
  require.context("./assets/audio/", false, /\.(mp3|ogg|m4a)$/)
);
const files = importAll(
  require.context("./assets/file/", false, /\.(rar|zip|pdf)$/)
);
images;
videos;
audios;
files;
let toggle = document.getElementById("toggle");
let menu = document.getElementById("menu");
let count = 0;
toggle.onclick = function () {
  if (count % 2 == 0) {
    menu.style.transform = "scaleY(1)";
    count++;
  } else if (count % 2 == 1) {
    menu.style.transform = "scaleY(0)";
    count++;
  }
};
if (screen.width >= 1000) {
  new Splide("#splide", {
    perPage: 4,
    cover: true,
    height: "20rem",
    lazyLoad: "nearby",
    breakpoints: {
      height: "8rem",
    },
  }).mount();
}
else if (screen.width >= 650) {
  new Splide("#splide", {
    perPage: 3,
    cover: true,
    height: "20rem",
    lazyLoad: "nearby",
    breakpoints: {
      height: "8rem",
    },
  }).mount();
}
else if (screen.width >= 500) {
  new Splide("#splide", {
    perPage: 2,
    cover: true,
    height: "16rem",
    lazyLoad: "nearby",
    breakpoints: {
      height: "8rem",
    },
  }).mount();
}
else if (screen.width >= 400) {
  new Splide("#splide", {
    perPage: 2,
    cover: true,
    height: "13rem",
    lazyLoad: "nearby",
    breakpoints: {
      height: "8rem",
    },
  }).mount();
}
else if (screen.width >= 330) {
  new Splide("#splide", {
    perPage: 2,
    cover: true,
    height: "10rem",
    lazyLoad: "nearby",
    breakpoints: {
      height: "8rem",
    },
  }).mount();
}
else {
   new Splide("#splide", {
     perPage: 1,
     cover: true,
     height: "10rem",
     lazyLoad: "nearby",
     breakpoints: {
       height: "8rem",
     },
   }).mount();
}

