let canvas, ctx;
let mousePosition;

function init(elCanvas) {
  canvas = elCanvas;
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = new Color(150).style;

  mousePosition = {
    x: (30 * canvas.width) / 100,
    y: (30 * canvas.height) / 100,
  };

  canvas.addEventListener('mousemove', function (event) {
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
  });

  canvas.addEventListener('mouseleave', function (event) {
    mousePosition.x = canvas.width / 2;
    mousePosition.y = canvas.height / 2;
  });

  createDots();
  requestAnimationFrame(animateDots);
}

let dots = {
  nb: 750,
  distance: 50,
  d_radius: 100,
  array: [],
};

function colorValue(min) {
  return Math.floor(Math.random() * 255 + min);
}

function createColorStyle(r, g, b) {
  return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
}

function mixComponents(comp1, weight1, comp2, weight2) {
  return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
}

function averageColorStyles(dot1, dot2) {
  let color1 = dot1.color,
    color2 = dot2.color;

  let r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
    g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
    b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
  return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
}

function Color(min) {
  min = min || 0;
  this.r = colorValue(min);
  this.g = colorValue(min);
  this.b = colorValue(min);
  this.style = createColorStyle(this.r, this.g, this.b);
}

function Dot() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;

  this.vx = -0.5 + Math.random();
  this.vy = -0.5 + Math.random();

  this.radius = Math.random() * 2;

  this.color = new Color();
  // console.log(this);
}

Dot.prototype = {
  draw: function () {
    ctx.beginPath();
    ctx.fillStyle = this.color.style;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  },
};

function createDots() {
  for (let i = 0; i < dots.nb; i++) {
    dots.array.push(new Dot());
  }
}

function moveDots() {
  for (let i = 0; i < dots.nb; i++) {
    let dot = dots.array[i];

    if (dot.y < 0 || dot.y > canvas.height) {
      dot.vx = dot.vx;
      dot.vy = -dot.vy;
    } else if (dot.x < 0 || dot.x > canvas.width) {
      dot.vx = -dot.vx;
      dot.vy = dot.vy;
    }
    dot.x += dot.vx;
    dot.y += dot.vy;
  }
}

function connectDots() {
  for (let i = 0; i < dots.nb; i++) {
    for (let j = 0; j < dots.nb; j++) {
      let i_dot = dots.array[i];
      let j_dot = dots.array[j];

      if (
        i_dot.x - j_dot.x < dots.distance &&
        i_dot.y - j_dot.y < dots.distance &&
        i_dot.x - j_dot.x > -dots.distance &&
        i_dot.y - j_dot.y > -dots.distance
      ) {
        if (
          i_dot.x - mousePosition.x < dots.d_radius &&
          i_dot.y - mousePosition.y < dots.d_radius &&
          i_dot.x - mousePosition.x > -dots.d_radius &&
          i_dot.y - mousePosition.y > -dots.d_radius
        ) {
          ctx.beginPath();
          ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
          ctx.moveTo(i_dot.x, i_dot.y);
          ctx.lineTo(j_dot.x, j_dot.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }
}

function drawDots() {
  for (let i = 0; i < dots.nb; i++) {
    let dot = dots.array[i];
    dot.draw();
  }
}

function animateDots() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveDots();
  connectDots();
  drawDots();

  requestAnimationFrame(animateDots);
}

let huhuiyu = {
  startAnimate(el) {
    el.innerHTML = '';
    let elCanvas = document.createElement('canvas');
    el.appendChild(elCanvas);
    init(elCanvas);
  },
};

export default huhuiyu;
