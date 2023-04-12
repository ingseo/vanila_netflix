var page=0;
var win_width=$(window).width();
var win_height=$(window).height();
var scrollTop=$(window).scrollTop();
var slide_height=$('.section2 .slide1').height();
var poster_height=$('.section2 .slide1 .poster').height();
var timer;

//스크롤
$('body').niceScroll({
    cursorcolor:"black",
    cursorwidth:"8px"
});
$('.btn-top').click(function(){
    $('html, body').stop().animate({scrollTop:0});
});

//메뉴-서치
$('header .btn-search').click(function(){
    $('.search-menu').toggleClass('menu-slide')
})

function next(){
    $('.search-menu .recommend .wrap li').first().appendTo('.search-menu .recommend .wrap')
}

$('.section0 .gradation').mouseenter(function(){
    timer=setInterval(next,1000);
})
$('.section0 .gradation').mouseleave(function(){
    clearInterval(timer)
})
$('.search-menu').on('scroll mousewheel', function(event){ 
    event.preventDefault();
    event.stopPropagation();
});

//메뉴-로그인
$('header .btn-login>span').click(function(){
    $('header .btn-login').addClass('btn-active');  
});
$('.x').click(function(){
    console.log('click');
    $('header .btn-login').removeClass('btn-active');
});

//메인 동영상
function video(){
    f_w = $('.frame').width();
    f_h = $('.frame').height();
    v_w = $('header video').width();
    v_h = $('header video').height();
    $('header video').css({
        'top': f_h*0.5 - v_h*0.5,
        'left': f_w*0.5 - v_w*0.5
    });
}
$(document).ready(function(){
    video();
});
$(window).resize(function(){
    video();
});


//section2 movie
$(window).ready(function(){
    if(win_width<768){
        poster_height=$('.section2 .slide1 .poster').height();
        $('.section2 .wrap').css({height:poster_height});
    }else if(win_width>769){
        slide_height=$('.section2 .slide').height();
        $('.section2 .wrap').css({height:slide_height});
    }
});
$(window).resize(function(){
        slide_height=$('.section2 .slide1').height();
        poster_height=$('.section2 .slide1 .poster').height();
        $('.section2 .wrap').css({height:slide_height, minHeight:poster_height});
});
$('.gradation-right').click(function(){
    win_width=$(window).width();
    if(win_width<768){
        $('.section2 .slide1 .poster').first().appendTo('.section2 .slide1');
    }else if(win_width>769){
        $('.section2 .slide').first().appendTo('.section2 .wrap');
    }
});
$('.gradation-left').click(function(){
    win_width=$(window).width();
    if(win_width<768){
        $('.section2 .slide1 .poster').last().prependTo('.section2 .slide1');
    }else if(win_width>769){
        $('.section2 .slide').last().prependTo('.section2 .wrap');
    }
});

//section3 카테고리
$('.section3 .right').click(function(){
    $('.section3 .select').first().appendTo('.section3 .wrap');
    
});
$('.section3 .left').click(function(){
    $('.section3 .select').last().prependTo('.section3 .wrap');
});

//section4 이벤트
$('.section4 .right, .section4 .indi:nth-child(2)').click(function(){
    $('.section4 .wrap').stop().animate({left:'-100%'});
    $('.section4 .indi:nth-child(1)').css({color:'#969696'});
    $('.section4 .indi:nth-child(2)').css({color:'#e50914'});
    $('.section4 .left').show()
    $('.section4 .right').hide()
});
$('.section4 .left, .section4 .indi:nth-child(1)').click(function(){
    $('.section4 .wrap').stop().animate({left:0});
    $('.section4 .indi:nth-child(2)').css({color:'#969696'});
    $('.section4 .indi:nth-child(1)').css({color:'#e50914'});
    $('.section4 .right').show()
    $('.section4 .left').hide()
});

//section5 FAQ
$('.section5 .indi:nth-child(2)').click(function(){
    $('.section5 .wrap').stop().animate({left:'-100%'});
    $('.section5 .indi:nth-child(1)').css({color:'#969696'});
    $('.section5 .indi:nth-child(2)').css({color:'#e50914'});
});
$('.section5 .indi:nth-child(1)').click(function(){
    $('.section5 .wrap').stop().animate({left:0});
    $('.section5 .indi:nth-child(2)').css({color:'#969696'});
    $('.section5 .indi:nth-child(1)').css({color:'#e50914'});
});