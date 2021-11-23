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
});








const cursor = document.querySelector(".cursor")
const cursorTail = document.querySelector(".cursor__tail") 
const butonWrapper = document.querySelectorAll(".btn__wrapper")

document.addEventListener("mousemove", (e)=>{
  cursor.setAttribute("style", "top:"+e.pageY+"px; left:"+e.pageX+"px")
  cursorTail.setAttribute("style", "top:"+e.pageY+"px; left:"+e.pageX+"px")
})




butonWrapper.forEach(item=>{
    item.addEventListener("mouseenter",()=>{
        cursor.classList.add("hover-btn")
    })
})
butonWrapper.forEach(item=>{
    item.addEventListener("mouseleave",()=>{
        cursor.classList.remove("hover-btn")
    })
})
let mm = new MagnetMouse({
	magnet: {
	  element: '.magnet',
	  position: 'center'
	},
  });
  
  mm.init();

  
class CostForm {
	constructor(parentElement) {
		this.doubleSliderElement = parentElement.querySelector(".range-slider");
		this.doubleSlider = new DoubleSlider(this.doubleSliderElement);

		const [minNumberInput, maxNumberInput] = parentElement.querySelectorAll(
			".cost__input"
		);

		updateMinMax();

		minNumberInput.addEventListener("input", ({ target: { value } }) => {
			this.doubleSlider.min = value;
			maxNumberInput.min = value;
		});

		maxNumberInput.addEventListener("input", ({ target: { value } }) => {
			this.doubleSlider.max = value;
			minNumberInput.max = value;
		});

		this.doubleSliderElement.addEventListener("input", ({ target }) => {
			minNumberInput.value = this.doubleSlider.min;
			maxNumberInput.value = this.doubleSlider.max;
			updateMinMax();
		});

		function updateMinMax() {
			minNumberInput.max = maxNumberInput.value;
			maxNumberInput.min = minNumberInput.value;
		}
	}
}



class DoubleSlider {
	constructor(element) {
		this.parent = element;
		this.sliders = element.querySelectorAll(".range-slider__input");
		const [minSlider, maxSlider] = this.sliders;

		this.propertiesCSS = ["--first-val", "--second-val"];

		this.minLength = minSlider.min;
		this.maxLength = minSlider.max;
		this.min = minSlider.value;
		this.max = maxSlider.value;

		minSlider.addEventListener("input", ({ target }) => {
			const { value } = target;

			if (Number(value) < Number(maxSlider.value)) {
				this.min = value;
			} else {
				this.max = value;
			}
		});

		maxSlider.addEventListener("input", ({ target }) => {
			const { value } = target;

			if (Number(value) < Number(minSlider.value)) {
				this.min = value;
			} else {
				this.max = value;
			}
		});
	}

	valueToPercent = (value) => {
		const { minLength, maxLength } = this;
		return (value * 100) / (maxLength - minLength);
	};

	get max() {
		return this._max;
	}
	get min() {
		return this._min;
	}
	set max(value) {
		this._max = value;
		const { parent, sliders, valueToPercent } = this;
		parent.style.setProperty("--second-val", `${valueToPercent(value)}%`);
		sliders[1].value = value;
	}

	set min(value) {
		this._min = value;
		const { parent, sliders, valueToPercent } = this;
		parent.style.setProperty("--first-val", `${valueToPercent(value)}%`);
		sliders[0].value = value;
	}
}






const { to, set, from, fromTo } = gsap

const getVar = (key, elem = document.documentElement) => getComputedStyle(elem).getPropertyValue(key)

document.querySelectorAll('.price__estimate').forEach(elem => {
    let svg = elem.querySelector('svg'),
        input = elem.querySelector('input')
		elem.addEventListener("change",()=>{
			if(input.checked){
				input.setAttribute("value", "Так")
			}else if(!input.checked){
				input.removeAttribute("value")
			}
		})
    input.addEventListener('change', e => {
        let checked = input.checked
        if(!checked) {
            return
        }
		
        fromTo(input, {
            '--border-width': '3px'
        }, {
            '--border-color': getVar('--c-active'),
            '--border-width': '12px',
            duration: .2,
            clearProps: true
        })
        set(svg, {
            '--dot-x': '14px',
            '--dot-y': '-14px',
            '--tick-offset': '20.5px',
            '--tick-array': '16.5px',
            '--drop-s': 1
        })
        to(elem, {
            keyframes: [{
                '--border-radius-corner': '14px',
                duration: .2,
                delay: .2
            }, {
                '--border-radius-corner': '5px',
                duration: .3,
                clearProps: true
            }]
        })
        to(svg, {
            '--dot-x': '0px',
            '--dot-y': '0px',
            '--dot-s': 1,
            duration: .4,
            delay: .4
        })
        to(svg, {
            keyframes: [{
                '--tick-offset': '48px',
                '--tick-array': '14px',
                duration: .3,
                delay: .2
            }, {
                '--tick-offset': '46.5px',
                '--tick-array': '16.5px',
                duration: .35,
                clearProps: true
            }]
        })
    })
})



$(document).ready(function() {
	navNumbers();
	backToDefault();
	
	// show hovered li stuff
	$('.main-menu').on('mouseover', 'li', function() {
		showTarget($(this));
	});

	// show default .active li stuff
	$('.main-menu').on('mouseleave', backToDefault);
	
	// change active list item
	$('.main-menu').on('click', 'li', function() {
		changeActive($(this));
	});
	
	// toggle menu
	$('.toggle').on('click', toggleMenu);
	

});

// toggle menu
function toggleMenu() {
	var toggle = $('.toggle');
	var nav = $('nav');
	
	if(toggle.hasClass('clicked')) {
		toggle.removeClass('clicked');
		nav.removeClass('open');
		console.log('remove open');
		setTimeout(function() {
			console.log('add hidden');
			nav.addClass('hidden');
		}, 500);
	} else {
		nav.removeClass('hidden');
		toggle.addClass('clicked');
		nav.addClass('open');
	}
}

// give the list items numbers
function navNumbers() {
	var sum = $('.main-menu li').length;
	var i = 0;
	var x = 0;

	$('.showcase-menu li').each(function() {
		$(this).attr('data-target', x);
		x++;
	});
	
	$('.main-menu li').each(function() {
		var number = ('0' + i).slice(-2);
		var numberElement = '<div class="number"><span>'+number+'</span></div>';
		$(this).prepend(numberElement);
		$(this).attr('data-target', i);
		i++;
	});
}


// show the hovered list item stuff
function showTarget(e) {
	$('.main-menu li').removeClass('hover');
	
	var target = $(e).attr('data-target');
	var showcaseHeight = $('.showcase-menu').outerHeight();
	
	showcaseHeight = (showcaseHeight * target) * -1;
	
	$('.showcase-menu').css({
		top: showcaseHeight
	});
	
	$(e).addClass('hover');
}

// show the list item stuff of .active
function backToDefault() {
	$('.main-menu li').removeClass('hover');
	
	var activeItem = $('.main-menu li.active');
	var target = activeItem.attr('data-target');
	var showcaseHeight = $('.showcase-menu').outerHeight();
	
	showcaseHeight = (showcaseHeight * target) * -1;
	
	$('.showcase-menu').css({
		top: showcaseHeight
	});
	
	activeItem.addClass('hover');
}


// change active list item
function changeActive(e) {
	$('.main-menu li').removeClass('active');
	$(e).addClass('active');
}






const sectionAnimate = document.querySelectorAll(".animate")
const about = document.querySelector(".about")
const aboutRight = document.querySelector(".aboutUs__right")
const aboutRightItem = document.querySelectorAll(".aboutUs__right-item")


window.addEventListener("scroll",()=>{
	if(about.classList.contains("fade-top")){
		aboutRight.classList.add("active")
		aboutRightItem.forEach(item=>{
			item.classList.add("active")
		})
	}else{
		aboutRight.classList.remove("active")
		aboutRightItem.forEach(item=>{
			item.classList.remove("active")
		})
	}
	let margeTop = window.scrollY
	sectionAnimate.forEach(item=>{
		const sectionTop = item.offsetTop - (item.offsetTop / 5)
		if(margeTop < sectionTop){
			item.classList.remove("fade-top")
		}else if(!item.classList.contains("fade-top") && margeTop > sectionTop){
			item.classList.add("fade-top")
		}
})
})

const orderLabel = document.querySelectorAll(".checkbox__item")
const arr = []

orderLabel.forEach(item=>{
  item.addEventListener("change",()=>{
      item.classList.toggle("active")
	  arr.push( item.querySelector("input").value)
  })
})

$('.order__form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');


    data.append( 'Ім\'я', 			$('[name="user_name"]', form).val() );
    data.append( 'Email', 			$('[name="user_email"]', form).val() );
    data.append( 'Повідомлення',	$('[name="user_message"]', form).val() );
    data.append( 'Файл', 			$('[name="file"]', form).val() );
	data.append('Послуги', arr);
	data.append("Мінімальний Бютжет", $('[name="minPrice"]', form).val() + '$' );
	data.append("Максимальний Бютжет", $('[name="maxprice"]', form).val() + '$');
	data.append("Потрібен Прорахунок", $('#estimate', form).val());
	data.append("White Label", $('[name="Whitelabel"]', form).val());
	data.append("NDA", $('[name="NDA"]', form).val());


   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'http://localhost:8888/',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
			formPreview.innerHTML = ''
			$('.checkbox__item').removeClass("active")
            form.reset()
			window.location = './thanks.html';
        }
    });

    return false;
});




const formImg = document.querySelector(".fileImg")
const formPreview = document.getElementById("filePreview")



formImg.addEventListener("change",()=>{
	uploadFile(formImg.files[0]);
})

function uploadFile(file){
	var reader = new FileReader();
	reader.onload = function(e){
		if(file.type.startsWith('application/pdf')){
			formPreview.innerHTML = `<img src="https://cdn.iconscout.com/icon/free/png-256/pdf-2752103-2284920.png" alt="Preview">  <p>${file.name}</p>`
		}else if(file.type.startsWith('image/')){
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Preview"> <p>${file.name}</p>`
		}
	}
	reader.onerror = function(e){
		alert(this.error)
	}
	reader.readAsDataURL(file);
}





new CostForm(document.querySelector(".cost"));
