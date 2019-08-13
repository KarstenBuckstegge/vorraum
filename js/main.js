const animationContainerPhoto = document.querySelector('.a_photo');
const animationContainerDesign = document.querySelector('.a_design');
const animationContainerIllu = document.querySelector('.a_illu');

const animationPhoto = lottie.loadAnimation({
    container: animationContainerPhoto,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './js/vorraum_photo.json'
});

const animationDesign = lottie.loadAnimation({
    container: animationContainerDesign,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './js/vorraum_design.json'
});

const animationIllu = lottie.loadAnimation({
    container: animationContainerIllu,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './js/vorraum_illu.json'
});

const animationReadyPhoto = new Promise((resolve, reject) => {
    animationPhoto.addEventListener('DOMLoaded', () => resolve());
});
const animationReadyDesign = new Promise((resolve, reject) => {
    animationDesign.addEventListener('DOMLoaded', () => resolve());
});
const animationReadyIllu = new Promise((resolve, reject) => {
    animationIllu.addEventListener('DOMLoaded', () => resolve());
});

const loadingIndicatorElement = document.querySelector('.loading');
const introElement = document.querySelector('.intro');

Promise.all([animationReadyPhoto, animationReadyDesign, animationReadyIllu]).then(() => {
    console.log('animation ready');
    loadingIndicatorElement.className += ' loading--done';
    introElement.className += ' intro--ready';
    setTimeout(() => {
        lottie.play();
    }, 2500);
});
