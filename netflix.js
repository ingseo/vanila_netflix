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
