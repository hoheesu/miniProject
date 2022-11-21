const btnEl = document.querySelector(".btn-click");
const codeEl = document.querySelector(".hex-code");
const mainEl = document.querySelector("main");

const simpleColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Purple",
];

btnEl.addEventListener("click", function () {
  // 16진법 숫자 6개 랜덤으로 고르기
  let res = "#";
  for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 15)
      .toString(16)
      .toUpperCase();
  }
  codeEl.textContent = res;
  mainEl.style.backgroundColor = res;
});
