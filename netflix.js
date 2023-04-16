//문서준비
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

//main video
function videoLocation(){
    const frameWidth = document.querySelector('.frame').offsetWidth;
    const frameHeight = document.querySelector('.frame').offsetHeight;
    const videoWidth = document.querySelector('header video').offsetWidth;
    const videoHeight = document.querySelector('header video').offsetHeight;
    const video = document.querySelector('header video');
    video.style.left = frameWidth*0.5 - videoWidth*0.5 + 'px';
    video.style.top = frameHeight*0.5 - videoHeight*0.5 + 'px';
}
ready(() => { 
    videoLocation();
});
window.addEventListener("resize", videoLocation);

//search
let timer;
document.querySelector('.btn-search').addEventListener('click', () => {
    document.querySelector('.search-menu').classList.toggle('menu-slide');
    document.querySelector('body').classList.toggle('stop-scrolling')
});
function next(){
    document.querySelector('.search-menu .recommend .wrap').append(document.querySelector('.search-menu .recommend .wrap li'));
}
document.querySelector('.section0 .gradation').addEventListener('mouseenter', () => {
    timer = setInterval(next,1000);
})
document.querySelector('.section0 .gradation').addEventListener('mouseleave', () => {
    clearInterval(timer)
})

//login
document.querySelector('.btn-login>span').addEventListener('click', () => {
    document.querySelector('header .btn-login').classList.add('btn-active');
});
document.querySelector('.x').addEventListener('click', () => {
    document.querySelector('header .btn-login').classList.remove('btn-active');
});

//movie
function movieDisplay(){
    const wrap = document.querySelector('.section2 .wrap');
    const slideHeight = document.querySelector('.section2 .slide').offsetHeight;
    const posterHeight = document.querySelector('.section2 .slide1 .poster').offsetHeight;
    wrap.style.height = slideHeight + 'px';
    wrap.style.minHeight = posterHeight + 'px';
}
ready(() => { 
    movieDisplay()
});
window.addEventListener("resize", movieDisplay);
document.querySelector('.section2 .gradation-right').addEventListener('click', () => {
    const winWidth = window.innerWidth;
    console.log(winWidth)
    if(winWidth<769){
        document.querySelector('.section2 .slide1').append(document.querySelector('.section2 .slide1 .poster'));
    } else if(winWidth>768){
        document.querySelector('.section2 .wrap').append(document.querySelector('.section2 .slide'))
    }
})
document.querySelector('.section2 .gradation-left').addEventListener('click', () => {
    const winWidth = window.innerWidth;
    console.log(winWidth)
    if(winWidth<769){
        document.querySelector('.section2 .slide1').prepend([...document.querySelectorAll('.section2 .slide1 .poster')].at(-1));
    } else if(winWidth>768){
        document.querySelector('.section2 .wrap').prepend([...document.querySelectorAll('.section2 .slide')].at(-1));
        
    }
})

//category
document.querySelector('.section3 .right').addEventListener('click', () => {
    document.querySelector('.section3 .wrap').append(document.querySelector('.section3 .select'));
})
document.querySelector('.section3 .left').addEventListener('click', () => {
    document.querySelector('.section3 .wrap').prepend([...document.querySelectorAll('.section3 .select')].at(-1));
})

//event&FAQ
//차후 중복되는 부분 정리 필요
function event1page(){
    document.querySelector('.section4 .wrap').style.left = '0';
    document.querySelector('.section4 .indi:nth-child(2)').style.color = '#969696'
    document.querySelector('.section4 .indi:nth-child(1)').style.color = '#e50914'
    document.querySelector('.section4 .left').style.display = 'none';
    document.querySelector('.section4 .right').style.display = 'flex';
}
function event2page(){
    document.querySelector('.section4 .wrap').style.left = '-100%';
    document.querySelector('.section4 .indi:nth-child(1)').style.color = '#969696'
    document.querySelector('.section4 .indi:nth-child(2)').style.color = '#e50914'
    document.querySelector('.section4 .left').style.display = 'flex';
    document.querySelector('.section4 .right').style.display = 'none';
}
function faq1page(){
    document.querySelector('.section5 .wrap').style.left = '0';
    document.querySelector('.section5 .indi:nth-child(2)').style.color = '#969696'
    document.querySelector('.section5 .indi:nth-child(1)').style.color = '#e50914'
}
function faq2page(){
    document.querySelector('.section5 .wrap').style.left = '-100%';
    document.querySelector('.section5 .indi:nth-child(1)').style.color = '#969696'
    document.querySelector('.section5 .indi:nth-child(2)').style.color = '#e50914'
}
document.querySelector('.section4 .left').addEventListener('click', () => {
    event1page()
})
document.querySelector('.section4 .indi:nth-child(1)').addEventListener('click', () => {
    event1page()
})
document.querySelector('.section4 .right').addEventListener('click', () => {
    event2page()
})
document.querySelector('.section4 .indi:nth-child(2)').addEventListener('click', () => {
    event2page()
})
document.querySelector('.section5 .indi:nth-child(1)').addEventListener('click', () => {
    faq1page()
})
document.querySelector('.section5 .indi:nth-child(2)').addEventListener('click', () => {
    faq2page()
})