let menuElement = document.querySelector('.menu')
let sideBar = document.querySelector('.side')
let closeBtnEle = document.querySelector('.close_icon')
menuElement.addEventListener('click', function () {
  sideBar.style.visibility = 'visible'
})
closeBtnEle.addEventListener('click', function () {
  sideBar.style.visibility = 'hidden'
})
