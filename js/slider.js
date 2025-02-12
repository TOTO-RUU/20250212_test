$(function(){
function prev(){
    $('.slider__inner li:last').prependTo('.slider__inner');    
    $('.slider__inner').css('margin-left',-2000);    
    $('.slider__inner').stop().animate({marginLeft:0},1000);    
    }
    
    function next(){
    
    $('.slider__inner').stop().animate({marginLeft:-2000}, 1000, function(){
        $('.slider__inner li:first').appendTo('.slider__inner');
        $('.slider__inner').css({marginLeft:0});
    });
    }
    
    function slide(){
    $('.slider__inner').stop().animate({marginLeft:-2000}, 1200, function(){
        $('.slider__inner li:first').appendTo('.slider__inner');
        $('.slider__inner').css({marginLeft:0});
    });
    }
    
    setInterval(slide, 3000);

    $('.prev').click(function(){
        prev();
    });
    
    $('.next').click(function(){
        next();
    });
})