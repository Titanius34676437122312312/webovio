const openBurger = document.querySelector('.nav-burger')
const hiddenBurger = document.querySelector('.hidden-menu')
const closeBurger = document.querySelector('.hidden-menu-top-close')
const links = document.querySelectorAll('.hidden-menu-list-item')
links.forEach(function(element){
    element.addEventListener('click',function(){
        hiddenBurger.classList.remove('show-burger-menu')
    })
})
openBurger.addEventListener('click',function(){
    hiddenBurger.classList.add('show-burger-menu')
})
closeBurger.addEventListener('click',function(){
    hiddenBurger.classList.remove('show-burger-menu')
})
