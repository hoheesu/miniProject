const btnEl = document.querySelector(".btn-click");
const codeEl = document.querySelector(".hex-code");
const mainEl = document.querySelector("main");
let statusCode = 0;
const simpleColors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Indigo",
  "Purple",
];

window.addEventListener("hashchange", router);

function router() {
  const routePath = location.hash;
  console.log(routePath);
  // 초기화면 진입
  if (routePath === "") {
    statusCode = 0;
  } else if (routePath === "#/simple") {
    statusCode = 1;
  } else {
    statusCode = 2;
  }
}

btnEl.addEventListener("click", function () {
  // 16진법 숫자 6개 랜덤으로 고르기
  if (statusCode === 2) {
    let res = "#";
    for (let i = 0; i < 6; i++) {
      res += Math.floor(Math.random() * 15)
        .toString(16)
        .toUpperCase();
    }
    codeEl.textContent = res;
    mainEl.style.backgroundColor = res;
  } else if (statusCode === 1) {
    let res = simpleColors[Math.floor(Math.random() * 7)];
    codeEl.textContent = res;
    mainEl.style.backgroundColor = res;
  } else {
    // 걍 모든것들 중 랜덤느낌인데 로직이 어케될까용??
  }
});
