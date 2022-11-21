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
    const res = simpleColors[Math.floor(Math.random() * 7)];
    codeEl.textContent = res;
    mainEl.style.backgroundColor = res;
  } else {
    // 걍 모든것들 중 랜덤느낌인데 로직이 어케될까용??
    // 자유롭게 하면될듯. 나는 50%확률로 hex, 50%확률로 simpe로 하겠음
    const seed = Math.floor(Math.random() * 2);
    if (seed % 2 === 0) {
      // hex
      let res = "#";
      for (let i = 0; i < 6; i++) {
        res += Math.floor(Math.random() * 15)
          .toString(16)
          .toUpperCase();
      }
      codeEl.textContent = res;
      mainEl.style.backgroundColor = res;
    } else {
      // simple
      const res = simpleColors[Math.floor(Math.random() * 7)];
      codeEl.textContent = res;
      mainEl.style.backgroundColor = res;
    }
  }
});
