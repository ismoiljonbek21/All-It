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
    menu.style.transform = "scaleX(1)";
        console.log("sasa");

    count++;
  } else if (count % 2 == 1) {
    menu.style.transform = "scaleX(0)";
    console.log('sasa');
    count++;
  }
};
