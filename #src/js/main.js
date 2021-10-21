@@include('webp.js');


const swiper = new Swiper('.coments__flex', {
    wrapperClass: "coments__wrapper",
    slideClass: "coments__item",
    slidesPerView:"auto",
    spaceBetween: 44,
    loop: true,
    grabCursor: true
});

const header = document.querySelector(".header")
const headerBurger = document.querySelector(".header__burger")
const cursor = document.querySelector(".cursor")
const cursorTail = document.querySelector(".cursor__tail") 
document.addEventListener("mousemove", (e)=>{
  cursor.setAttribute("style", "top:"+e.pageY+"px; left:"+e.pageX+"px")
  cursorTail.setAttribute("style", "top:"+e.pageY+"px; left:"+e.pageX+"px")
});


