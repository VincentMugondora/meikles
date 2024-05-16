const menu = document.querySelector(".hamburger-menu")
const slider = document.querySelector(".links")
const linkTags = document.querySelectorAll(".link-tag")

menu.onclick = function (){
    slider.classList.toggle("sliding")
    menu.classList.toggle("active-lines")
}

linkTags.forEach((tag)=>{
    // console.log("here",tag)


    
    tag.addEventListener('click', ()=>{
        menuOne.classList.toggle('vincent')
        menu.classList.toggle('active-lines')
    })
})