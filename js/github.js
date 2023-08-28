import canvasTools from './canvas-esm/canvas-tools.js';
// 动态添加logo和css引用
let head = document.querySelector('head');
let icon = document.createElement('link');
icon.setAttribute('rel', 'shortcut icon');
icon.setAttribute('href', 'https://media.huhuiyu.top/huhuiyu.top/hu-logo.jpg');
head.append(icon);
let githubcss = document.createElement('link');
githubcss.setAttribute('rel', 'stylesheet');
githubcss.setAttribute('href', '/github.css');
head.append(githubcss);

// 背景区块
let canvasBg = document.createElement('section');
canvasBg.classList.add('canvas-bg');
document.body.append(canvasBg);

canvasTools.indexCanvas(canvasBg, 7);

import LazyImage from './LazyImage.js';
if (location.protocol.startsWith('http')) {
  new LazyImage('.lazy-image');
} else {
  // 本地预览效果
  let images = document.querySelectorAll('.lazy-image');
  images.forEach((img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.removeAttribute('data-src');
    img.classList.remove('lazy-image');
  });
}
