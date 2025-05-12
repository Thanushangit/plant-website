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



// swiper 

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  spaceBetween:30,
  autoPlay:{
    delay:3000,
    disableOnInteraction:false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  grabCursor:true,
  breakpoints:{
    640:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
  }

});


