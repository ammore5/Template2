/* $,document */
$( document ).ready(function() {

    $('.loadingOverlay').fadeOut(800,function(){
      $(this).remove();
    })

    wow();



$('.slider__item').on('mouseover', function(){
    $('.slider__item').removeClass('active');
    $(this).addClass('active');
  });
  $('.slider__item').on('mouseout', function(){
    $('.slider__item').removeClass('active');
    $(this).addClass('');
  });

  $('.mainCarousel').height($(window).innerHeight());
 
 function wow(){
  new WOW().init();
}

$('.icon-arrow-down').click(function(){
  $('html,body').animate({
    scrollTop:$('.Partners').offset().top
  },1400);
});


$('a[href="news"]').click(function(event){
  event.preventDefault();
  $('html,body').animate({
    scrollTop:$('.prices').offset().top
  },1400);
});


$('a[href="teamWork"]').click(function(event){
  event.preventDefault();
  $('html,body').animate({
    scrollTop:$('.ServicesEdit').offset().top
  },1400);
});


$('a[href="PROFILE"]').click(function(event){
  event.preventDefault();
  $('html,body').animate({
    scrollTop:$('.protfolio').offset().top
  },1400);
});


let carouselPage = "";
$(".ServButCss").on("click",function(){
  carouselPage =  $(this).data("value");
  $(".skw-page-" + carouselPage).addClass("active").siblings().removeClass("active");
})

});