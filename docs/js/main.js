function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;


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


