import canvas01 from './canvas01.js';
import canvas02 from './canvas02.js';
import canvas03 from './canvas03.js';
import canvas04 from './canvas04.js';
import canvas05 from './canvas05.js';
import canvas06 from './canvas06.js';
import canvas07 from './canvas07.js';
import canvas08 from './canvas08.js';
const canvasList = [
  canvas01,
  canvas02,
  canvas03,
  canvas04,
  canvas05,
  canvas06,
  canvas07,
  canvas08,
];

let canvasTools = {
  // 随机背景特效
  randCanvas: (ele) => {
    let index = parseInt(Math.random() * canvasList.length);
    canvasTools.indexCanvas(ele, index);
  },
  // 指定索引背景特效
  indexCanvas: (ele, index) => {
    canvasList[index].startAnimate(ele);
  },
};

export default canvasTools;
