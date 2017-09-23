// Make it rain!!
var currentFeature = 0;

$('#next').on('click', function () {
  // Run switchToNextImage function
  switchToNextImage();

  // Reset carousel timer back to 5 seconds
  clearInterval(carouselTimer);
  carouselTimer = setInterval(switchToNextImage, 5000);
});

// Every 5 seconds, run switchToNextImage function
var carouselTimer = setInterval(switchToNextImage, 5000);


function switchToNextImage () {
  if (currentFeature === 3) {
    currentFeature=0;
  }
  else{
    currentFeature += 1;
    console.log(currentFeature);
    $('.banner').fadeOut(2000);
    $('.feature').hide(0);
    $('.banner').eq(currentFeature).fadeIn(2000);
    $('.feature').eq(currentFeature).fadeIn(1000);
  }
}

$('#previous').on('click', function () {

  if (currentFeature === 0) {
    currentFeature=3;
  }
  else{
    currentFeature -= 1;
    console.log(currentFeature);
    $('.banner').fadeOut(2000);
    $('.feature').hide(0);
    $('.banner').eq(currentFeature).fadeIn(2000);
    $('.feature').eq(currentFeature).fadeIn(1000);
  }

  // Reset carousel timer back to 5 seconds
  clearInterval(carouselTimer);
  carouselTimer = setInterval(switchToNextImage, 5000);
});

$('#menu').on('click', function() {
  $('.nav-menu').slideToggle(350);
})



$(window).on('resize', function(){
  var win = $(this);
  if (win.width() > 880) {
    $('.nav-menu').show();
  }
});
