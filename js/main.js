
// START CHANGE BACKGROUND HEADER 
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// END CHANGE BACKGROUND HEADER 

// START POPULAR SWIPER 
var swiperPopular = new Swiper(".popular-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
// END POPULAR SWIPER 

// START ACCORDION CLICK 
const accordionItems = document.querySelectorAll('.value-accordion-item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value-accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value-accordion-content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}
// END ACCORDION CLICK 

// START SCROLL SECTIONS ACTIVE LINK
let sections = document.querySelectorAll('section[id]')

function scrollActive() {
    let scrollY = window.pageYOffset

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);
// END SCROLL SECTIONS ACTIVE LINK

// START SHOW SCROLL UP 
function scrollUp() {
    let scrollUp = document.getElementById('scroll-up');

    //When scroll is highter than 350 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);
// END SHOW SCROLL UP 

// START DARK THEME COLOR 
let themeButton = document.getElementById('theme-button')
let darkTheme = 'dark-theme'
let iconTheme = 'bx-sun'

let selectedTheme = localStorage.getItem('selected-theme')
let selectedIcon = localStorage.getItem('selected-icon')

let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
let getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})
// END DARK THEME COLOR 

// START SCROLL REVAL 
let sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true 
})

sr.reveal('.home-title, .popular-container, .subscribe-container, .footer-container');
sr.reveal('.home-description, .footer-info', {delay: 500});
sr.reveal('.home-search', {delay: 600});
sr.reveal('.home-value', {delay: 700});
sr.reveal('.home-images', {delay: 800, origin: 'bottom'});
sr.reveal('.logos-img', {interval: 100});
sr.reveal('.value-images, .contact-content', {origin: 'left'});
sr.reveal('.value-content, .contact-images', {origin: 'right'});
// END SCROLL REVAL 