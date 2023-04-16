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