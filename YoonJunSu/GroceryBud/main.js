const addData = document.querySelector('.list-data')
const addBtn = document.querySelector('.add-btn')





addBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let v = getList()
  console.log('yes'+v)
  renderList(v)
  addData.value = ''
})


function getList () {
  console.log(addData.value)
  return addData.value
}

function renderList (list) {
  const listUl = document.querySelector('.list-main')
  const createLi = document.createElement('li')
  createLi.innerHTML = `
  <p>${list}</p>
  <button class="edit">eidt</button>
  <button class="remove">remove</button>`
  listUl.append(createLi)
}