$('[data-tab]').on('click', function (e) {
    console.log(this)
    $(this).addClass('is-active').siblings('[data-tab]').removeClass('is-active')
  console.log($('[data-content=' + $(this).data('tab') + ']'))
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
  if(wn > 120){
      $(menu).removeClass('is-faded');
  }
  else{
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