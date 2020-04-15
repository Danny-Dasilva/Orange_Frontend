$('[data-tab]').on('click', function (e) {
    console.log(this)
    $(this).addClass('is-active').siblings('[data-tab]').removeClass('is-active')
  console.log($('[data-content=' + $(this).data('tab') + ']'))
  var tabContent = $('[data-content=' + $(this).data('tab') + ']')
  tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
 
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