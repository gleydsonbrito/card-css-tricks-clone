const menu = document.querySelector(".menu")
const modal = document.querySelector('.modal')

menu.addEventListener('click', event => {
  if(window.getComputedStyle(modal).display === 'none'){
    modal.style.display = 'flex'
  }else {
    modal.style.display = 'none'
  }
})

/*
const b = document.querySelector('.btn')
b.addEventListener('click', e => {
  document.documentElement.scrollTop = 0
}) */