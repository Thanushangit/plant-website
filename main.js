const navmenu = document.getElementById('nav-menu')
const navlink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener("click",() => {
    navmenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navlink.forEach(link =>{
    link.addEventListener("click",() => {
        navmenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
    
})


