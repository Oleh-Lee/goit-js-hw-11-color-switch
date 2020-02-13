const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyColoring = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.coloringId = setInterval(() => {
      body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      console.log(colors[randomIntegerFromInterval(0, colors.length - 1)]);
    }, 1000);
    console.log();
  },
  
  stop() {
    clearInterval(this.coloringId);
    this.isActive = false;
  }
};

startBtn.addEventListener("click", bodyColoring.start.bind(bodyColoring));
stopBtn.addEventListener("click", bodyColoring.stop.bind(bodyColoring));
