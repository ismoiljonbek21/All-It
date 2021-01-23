import $ from 'jquery';
import './style/style.css';
import './less/style.less';
import './scss/style.scss';
// import _ from 'lodash';
// if (module.hot) {
//     module.hot.accept();
// }
// if (module.hot) {
//     const hotEmitter = require("webpack/hot/emitter");
//     const DEAD_CSS_TIMEOUT = 2000;

//     hotEmitter.on("webpackHotUpdate", function (currentHash) {
//         document.querySelectorAll("link[href][rel=stylesheet]").forEach((link) => {
//             const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
//             const newLink = link.cloneNode();
//             newLink.href = nextStyleHref;

//             link.parentNode.appendChild(newLink);
//             setTimeout(() => {
//                 link.parentNode.removeChild(link);
//             }, DEAD_CSS_TIMEOUT);
//         });
//     })
// }
// import imgs from './img/*.jpg';
const importAll = require =>
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
console.log('saldadasddsom')