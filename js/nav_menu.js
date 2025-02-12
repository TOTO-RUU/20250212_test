$(function(){
    $('#nav__menu__box__main > li').mouseover(function(){
        $(this).children('#nav__menu__box__sub').stop().slideDown();
    }).mouseout(function(){
        $(this).children('#nav__menu__box__sub').stop().slideUp();
    });
});