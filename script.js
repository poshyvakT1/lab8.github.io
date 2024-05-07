const hamburger = document.querySelector('.hamburger');
const navIcons = document.querySelector('.nav-icons');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navIcons.classList.toggle('show');

    navIcons.innerHTML = '';

    navLinks.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.href;
        linkElement.textContent = link.textContent;
        navIcons.appendChild(linkElement);
    });
});

const carouselSlides = document.querySelector('.carousel-slides');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.carousel-indicators span');
const totalSlides = 3; // Set total number of slides
let currentSlide = 0;

function showSlide(n) {
    carouselSlides.style.transform = `translateX(-${n * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
    });
    indicators[n].classList.add('active');
    currentSlide = n;
    if (currentSlide === 0) {
        carouselPrev.style.display = 'none';
    } else {
        carouselPrev.style.display = 'block';
    }
}

carouselPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

carouselNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        currentSlide = index;
    });
});

let slideInterval = setInterval(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);

let clickCount = 0;
carouselNext.addEventListener('click', () => {
    clickCount++;
    if (clickCount === totalSlides) {
        clickCount = 0;
        currentSlide = 0;
        showSlide(currentSlide);
    }
});
