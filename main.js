var typed = new Typed(".text",{
    strings: ["Full-Stack Developer!","Web Developer!"],
    typeSpeed:100,
    backSpeed:100,
    backDeplay:1000,
    loop:true
})

window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about');
    const btnBox2 = document.querySelector('.btn-box2');
    if (!aboutSection || !btnBox2) return;

    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        btnBox2.classList.add('show');
    } else {
        btnBox2.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    const educationSection = document.getElementById('Education');
    const readBtns = document.querySelectorAll('.read');
    if (!educationSection || readBtns.length === 0) return;

    const rect = educationSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        readBtns.forEach(btn => btn.classList.add('show'));
    } else {
        readBtns.forEach(btn => btn.classList.remove('show'));
    }
});

// Skills section animation (both .container1) - animate only once
function handleSkillsAnimation() {
    const skillsSections = document.querySelectorAll('.container1');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    skillsSections.forEach(section => {
        // Only add 'animate' if not already present
        if (!section.classList.contains('animate')) {
            const rect = section.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                section.classList.add('animate');
            }
        }
        // Do not remove 'animate' once added
    });
}

// Call once on load in case already in view
handleSkillsAnimation();

window.addEventListener('scroll', handleSkillsAnimation);

// Hamburger menu toggle for responsive navbar
window.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
    if (menuToggle && navbar) {
        menuToggle.style.display = 'flex'; // Ensure menu icon is visible on load
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });
        // Hide navbar when a link is clicked (for mobile UX)
        navbar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }
});




