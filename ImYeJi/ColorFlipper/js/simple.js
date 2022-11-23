// 초기화 코드들
const btnEl = document.querySelector('.btn')
const colorEl = document.querySelector('.color')
const body = document.querySelector('body')
const color = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Navy', 'Blueviolet']

// 버튼(simple) 클릭시 배경색 변경
btnEl.addEventListener('click', function() {
  let i  = Math.floor(Math.random() * color.length)
  colorEl.innerHTML = color[i]
  body.style.backgroundColor = color[i]
})

