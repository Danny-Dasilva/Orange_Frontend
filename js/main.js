
var getSiblings = function (elem) {
	// Setup siblings array and get the first sibling
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	// Loop through each sibling and push to the array
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}
	return siblings;
};

val = 1

setActive = (selector) => { //toggles main element as active and siblings as innactive
  var main = document.querySelector(selector)
  main.classList.add('is-active')
  var siblings = getSiblings(main)
  siblings.forEach(element => element.classList.remove('is-active'));
}

setTab = (id) => {
  setActive(`[data-tab=${id}]`)
  setActive(`[data-content=${id}]`)
}

function setForm(id) {
  var headerContent = $(`[data-nav=t${id}]`)
  headerContent.addClass('is-active').removeClass('is-completed').siblings('[data-nav]').removeClass('is-active')
  headerContent.prevAll('[data-nav]').addClass('is-completed')
  headerContent.nextAll('[data-nav]').removeClass('is-completed')
  var tabContent = $(`[data-content=t${id}]`)
  tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
}
$('[data-nav]').on('click', function (e) {
var type = this.dataset.nav
switch(type) {
  case "next":
    val = Math.min(val +=1 , 4)
    setForm(val)
    break;
  case "previous":
    val = Math.max(val -=1 , 1)
    setForm(val)
    break;
  default:
    var id = $(this).data('nav')
    console.log(id[1])
    val = id[1]
    setForm(id[1])
} 
})

$('[data-tab]').on('click', function (e) {
  var id = this.dataset.tab
  console.log(id)
  setTab(id)
  })

$(document).ready(function () {

// Define the menu we are working with
  var menu = document.getElementById("nav");
// $(menu).removeClass('is-faded');
// $(menu).addClass('is-faded');
  
  $(window).on("scroll",function(){
    var wn = $(window).scrollTop();

    if(screen.width > 1020) { 
      if(wn > 120){
        menu.classList.remove('is-faded');
        }
        else{
          menu.classList.add('is-faded');
        }
    } else {
      menu.classList.add('is-faded');
      
  }

    



  });
});



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



// slider
// Call & init
$(document).ready(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    // Adjust the slider
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    // Bind dragging events
    drags(cur.find('.handle'), cur.find('.resize'), cur);
  });
});

// Update sliders on resize. 
// Because we all do this: i.imgur.com/YkbaV.gif
$(window).resize(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});

function drags(dragElement, resizeElement, container) {
	
  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    // Check if it's a mouse or touch event and pass along the correct value
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // Set limits
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function(e) {
    	
      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      leftValue = moveX + posX - dragWidth;
      
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // Translate the handle's left value to masked divs width.
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
			
      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}


