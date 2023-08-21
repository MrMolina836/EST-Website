window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
});



const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if (visibility ==="false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else if (visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft = btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
})

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousemove", dragStart);
document.addEventListener("mouseup", dragStop);