
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        lettop = windows.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
     reset: true;
     distance: '80px'
     duration: 2000
     delay: 200
     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); 
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });  
     ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });  


     const typed = new typed('.multiple-text', {
        strings: ['Frontend Developer', 'UI/UX Designer', 'Blogger',]
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
     });