const animationContainerPhoto = document.querySelector('.a_photo');
const animationContainerDesign = document.querySelector('.a_design');
const animationContainerIllu = document.querySelector('.a_illu');

const loadingIndicatorElement = document.querySelector('.loading');
const introElement = document.querySelector('.intro');
const mainElement = document.querySelector('.main');

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

Promise.all([animationReadyPhoto, animationReadyDesign, animationReadyIllu]).then(() => {
    loadingIndicatorElement.className += ' loading--done';
    introElement.className += ' intro--ready';
    setTimeout(() => {
        lottie.play();
    }, 2000);
});

const animationDonePhoto = new Promise((resolve, reject) => {
    animationPhoto.addEventListener('complete', () => resolve());
});
const animationDoneDesign = new Promise((resolve, reject) => {
    animationDesign.addEventListener('complete', () => resolve());
});
const animationDoneIllu = new Promise((resolve, reject) => {
    animationIllu.addEventListener('complete', () => resolve());
});

Promise.all([animationDonePhoto, animationDoneDesign, animationDoneIllu]).then(() => {
    setTimeout(() => {
        introElement.className += ' intro--done';
        mainElement.className += ' main--show';
    }, 500);
});
