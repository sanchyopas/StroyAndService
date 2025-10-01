import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./docs`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    video: `${buildFolder}/video/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    deploy: `${buildFolder}/**/*`,
    favicon: `${buildFolder}/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,webmanifest}`,
    video: `${srcFolder}/video/**/*.*`,
    svg: `${srcFolder}/img/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    favicon: `${srcFolder}/favicon.ico`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest}`,
    video: `${srcFolder}/video/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,
    favicon: `${srcFolder}/favicon.ico`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
