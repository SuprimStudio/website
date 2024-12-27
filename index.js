// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll effect
                block: 'start' // Align to the start of the section
            });
        }
    });
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.content, .image-container, .portfolio-item, .main-header');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // The point at which the element should reveal

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.style.opacity = '1'; // Fully visible
            element.style.transform = 'translateY(0)'; // Reset any translation
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Smooth effect
        } else {
            element.style.opacity = '0'; // Hidden
            element.style.transform = 'translateY(20px)'; // Slightly offset
        }
    });
};

// Add Scroll Event Listener
window.addEventListener('scroll', revealOnScroll);

// Initial Check to Reveal Elements Already in View
revealOnScroll();

// Button Hover Effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)'; // Slight zoom-in effect
        button.style.transition = 'transform 0.3s ease'; // Smooth transition
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)'; // Reset zoom effect
    });
});

// Social Links Hover Effect
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#fff'; // Change color to white on hover
        link.style.transition = 'color 0.3s ease'; // Smooth transition
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '#00bfff'; // Reset color to default
    });
});
