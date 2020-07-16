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
    console.log(frm)
    var headerContent = $(`[data-nav=t${frm}]`)
    headerContent.addClass('is-active').siblings('[data-nav]').removeClass('is-active')
    headerContent.prev('[data-nav]').addClass('is-completed')
    console.log(headerContent.prev('[data-nav]'))

    var tabContent = $(`[data-content=${frm}]`)
    tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
    
    break;
  case "previous":
    frm = decrement()
    console.log(frm)
    var headerContent = $(`[data-nav=t${frm}]`)
    headerContent.addClass('is-active').removeClass('is-completed').siblings('[data-nav]').removeClass('is-active')
    headerContent.next('[data-nav]').removeClass('is-completed')
    console.log(headerContent.prev('[data-nav]'))

    var tabContent = $(`[data-content=${frm}]`)
    tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
    break;
  default:
    console.log(this, "ahhh")
    $(this).addClass('is-active').siblings('[data-nav]').removeClass('is-active')
    var tabContent = $(`[data-content=${$(this).data('nav')}]`)
    console.log(`[data-content=${$(this).data('nav')}]`, "tabcontent")
    tabContent.addClass('is-active').siblings('[data-content]').removeClass('is-active')
    tabContent.prevAll('[data-nav]').addClass('is-completed')

} 

})