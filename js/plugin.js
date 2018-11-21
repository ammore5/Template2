/* $,document */
$( document ).ready(function() {

    setTimeout(function(){
      $('.loadingOverlay').fadeOut(800,function(){
        $(this).remove();
      })
    }, 1000);

    wow();

  $(window).scroll(function(){
    if(window.scrollY > 600){
      $('.upBottun').fadeIn();
    }else{
      $('.upBottun').fadeOut();
    }
  });

  $('.upBottun').on('click',function(){
    $('html,body').animate({
      scrollTop:$('.mainCarousel').offset().top
    },1400);
  });

  $('a[href="TimeLine"]').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:$('.timeLine').offset().top
    },1400);
  });

  $('a[href="ContactUs"]').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:$('.statistecs').offset().top
    },1400);
  });
  
  $('a[href="Addons"]').on('click',function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:$('.addons').offset().top
    },1400);
  });

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



/*----- Make Product slider change automatically */
// let caroCount = 1;
// function caroSlide(){
//   $(".skw-page-" + caroCount).addClass("active").siblings().removeClass("active");
//   if(caroCount == 4){
//     caroCount = 1;
//   }else{
//     caroCount = caroCount + 1;
//   }

//   caroSlideTimer();
// }

// function caroSlideTimer(){
//   setTimeout(function(){
//     caroSlide();
//   }, 5000);
// }

// caroSlideTimer();
});