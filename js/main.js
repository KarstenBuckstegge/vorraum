const animationLinkPhoto = document.querySelector('.a_photo');
const animationLinkDesign = document.querySelector('.a_design');
const animationLinkIllu = document.querySelector('.a_illu');

const animationContainerPhoto = document.querySelector('.a_photo__container');
const animationContainerDesign = document.querySelector('.a_design__container');
const animationContainerIllu = document.querySelector('.a_illu__container');

const loadingIndicatorElement = document.querySelector('.loading');
const introElement = document.querySelector('.intro');
const mainElement = document.querySelector('.main');


// INIT LOTTIE ANIMATIONS
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

let animationDurationPhoto = 0;
let animationDurationDesign = 0;
let animationDurationIllu = 0;

const animationReverseLoop = (animation) => {
    animation.setDirection(-1);
    animation.play();
}

const initIconHover = () => {
    animationLinkPhoto.addEventListener('mouseenter', () => {
        animationReverseLoop(animationPhoto);
    });
    animationLinkPhoto.addEventListener('mouseleave', () => {
        animationPhoto.goToAndStop(animationDurationPhoto, true);
    });
    
    animationLinkDesign.addEventListener('mouseenter', () => {
        animationReverseLoop(animationDesign);
    });
    animationLinkDesign.addEventListener('mouseleave', () => {
        animationDesign.goToAndStop(animationDurationDesign, true);
    });
    
    animationLinkIllu.addEventListener('mouseenter', () => {
        animationReverseLoop(animationIllu);
    });
    animationLinkIllu.addEventListener('mouseleave', () => {
        animationIllu.goToAndStop(animationDurationIllu, true);
    });
}

// INTRO ANIMATION READY
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

    animationDurationPhoto = animationPhoto.getDuration(true);
    animationDurationDesign = animationDesign.getDuration(true);
    animationDurationIllu = animationIllu.getDuration(true);

    setTimeout(() => {
        lottie.play();
    }, 2000);
});

// AFTER INTRO ANIMATION
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
        initIconHover();
    }, 500);
});