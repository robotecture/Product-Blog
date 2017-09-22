// Make it rain!!
$('#menu').on('click', function() {
    $('.nav-menu').slideToggle(350);
})

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() > 880) {
      $('.nav-menu').show();
      }
});
