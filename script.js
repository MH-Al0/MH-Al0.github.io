// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: highlight nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Selec tout
const content = document.querySelector('body');

window.addEventListener('scroll', () => {
    const scrollAmount = window.scrollY; // vert (Y)

    // Maths (ew)
    const rotateX = Math.sin(scrollAmount / 50) * 2; // rotation X de -2 à 2 degrés
    const rotateY = Math.sin(scrollAmount / 30) * 2; // rotation Y de -2 à 2 degrés
    const translateX = Math.sin(scrollAmount / 25) * 5; // décalage horizontal de -5 à 5px
    const translateY = Math.sin(scrollAmount / 20) * 5; // décalage vertical de -5 à 5px

    // Transfo
    content.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateX(${translateX}px)
        translateY(${translateY}px)
    `;
});
