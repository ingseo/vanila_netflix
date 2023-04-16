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
document.querySelector('.btn-search').addEventListener('click', () => {
    document.querySelector('.search-menu').classList.toggle('menu-slide');
    document.querySelector('body').classList.toggle('stop-scrolling')
});
function next(){
    const list = document.querySelector('.search-menu .recommend .wrap li');
    document.querySelector('.search-menu .recommend .wrap').append(list);
}
let timer;
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