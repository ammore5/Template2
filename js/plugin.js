$( document ).ready(function() {

  setTimeout(function(){
    $('.loadingOverlay').fadeOut(800,function(){
      $(this).remove();
    })
  }, 1000);


$('.slider__item').on('mouseover', function(){
    $('.slider__item').removeClass('active');
    $(this).addClass('active');
  });
  $('.slider__item').on('mouseout', function(){
    $('.slider__item').removeClass('active');
    $(this).addClass('');
  });

  $('.mainCarousel').height($(window).innerHeight());
 
});