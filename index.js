// implementing the hamburger menu

function toggleMenu(){
const menuBtn=document.getElementById('menu-btn')
const menu=document.getElementById('menu')

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('active')
})

}
toggleMenu()