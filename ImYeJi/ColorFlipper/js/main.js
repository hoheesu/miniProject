// 초기화 코드들
const btnEl = document.querySelector('.btn')
const colorEl = document.querySelector('.color')
const body = document.querySelector('body')

// 버튼(hex) 클릭시 배경색 변경
btnEl.addEventListener('click', function() {
  let colorCode  = "#" + Math.round(Math.random() * 0xffffff).toString(16)
  colorEl.innerHTML = colorCode
  body.style.backgroundColor = colorCode
})
