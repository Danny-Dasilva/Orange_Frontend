$('[data-tab]').on('click', function (e) {
 
  $(this).addClass('is-active').siblings('[data-tab]').removeClass('is-active')

var tabContent = $('[data-content=' + $(this).data('tab') + ']')
tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')

})

val = 1
function increment() {
val = Math.min(val +=1 , 4)
return val

}

function decrement() {
val = Math.max(val -=1 , 1)
return val

}


$('[data-nav]').on('click', function (e) {
var type = this.dataset.nav
switch(type) {
  case "next":
    frm = increment()
    var headerContent = $(`[data-nav=t${frm}]`)
    headerContent.addClass('is-active').siblings('[data-nav]').removeClass('is-active')
    headerContent.prev('[data-nav]').addClass('is-completed')
    console.log(headerContent.prev('[data-nav]'))

    var tabContent = $('[data-content=' + $(`[data-nav=t${frm}]`).data('nav') + ']')
    tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
    
    break;
  case "previous":
    frm = decrement()
    var headerContent = $(`[data-nav=t${frm}]`)
    headerContent.addClass('is-active').removeClass('is-completed').siblings('[data-nav]').removeClass('is-active')
    headerContent.next('[data-nav]').removeClass('is-completed')
    console.log(headerContent.prev('[data-nav]'))

    var tabContent = $('[data-content=' + $(`[data-nav=t${frm}]`).data('nav') + ']')
    tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
    break;
  default:
    console.log(this)
    $(this).addClass('is-active').siblings('[data-nav]').removeClass('is-active')
    var tabContent = $('[data-content=' + $(this).data('nav') + ']')
    tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')

} 

})


$(document).ready(function () {

// Define the menu we are working with
  var menu = $('#nav');
// $(menu).removeClass('is-faded');
// $(menu).addClass('is-faded');
  
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();

    if(screen.width > 1020) { 
      if(wn > 120){
        $(menu).removeClass('is-faded');
        }
        else{
            $(menu).addClass('is-faded');
        }
    } else {
      $(menu).addClass('is-faded');
  }

    



  });
});

$('.list li').eq(60).show().siblings().hide();
function moveImg(nput){
    var index= nput
    $('.list li').eq(index).show().siblings().hide();

}
function sliderChange(val) {

  moveImg(val)
}


// same but for jquery 

// $(document).ready(function() {

//   // Check for click events on the navbar burger icon
//   $(".navbar-burger").click(function() {

//       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//       $(".navbar-burger").toggleClass("is-active");
//       $(".navbar-menu").toggleClass("is-active");

//   });
// });



// window.addEventListener('load', function () {
//   (function($) { "use strict";

	
	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
      body = document.querySelector('body');
      backtotop = document.getElementById('backtotop');

			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
        toggleClass(backtotop, 'visible')
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}

	
	
// })(jQuery); 

// })

document.addEventListener("DOMContentLoaded", function(){
  
	var mobileNav = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
      body = document.querySelector('body');
      backtotop = document.getElementById('backtotop');

			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
        toggleClass(backtotop, 'visible')
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
  }
  mobileNav()
});
