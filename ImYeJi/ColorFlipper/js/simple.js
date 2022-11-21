// 초기화 코드들
const btnEl = document.querySelector('.btn')
const colorEl = document.querySelector('.color')
const body = document.querySelector('body')
const color = ['Red', '#F15025', 'Green', 'Rgba(133,122,200)']

// 버튼 클릭시 배경색 변경
btnEl.addEventListener('click', function() {
  let i  = Math.floor(Math.random() * color.length)
  colorEl.innerHTML = color[i]
  body.style.backgroundColor = color[i]
})