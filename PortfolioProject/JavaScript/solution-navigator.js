// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

document.querySelectorAll('.fade-in').forEach((section) => {
    observer.observe(section);
});

// Language Switcher
const langButtons = document.querySelectorAll('.language-switch button');
langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const lang = btn.id;
        document.querySelectorAll('[data-en]').forEach((el) => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    });
});

// Subnavbar Active Link
document.querySelectorAll('.subnavbar a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.subnavbar a').forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll Up Button Visibility
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const scrollUpButton = document.querySelector('.scroll-up');

    if (scrollPosition > 200) { // Adjust threshold as needed
        scrollUpButton.classList.add('show-scroll-up');
    } else {
        scrollUpButton.classList.remove('show-scroll-up');
    }
});

// Show/Hide Exercise and Solution
const showHideBtns = document.querySelectorAll('.show-exercise-btn, .show-solution-btn');

showHideBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetElement = btn.classList.contains('show-exercise-btn') ?
            btn.parentElement.querySelector('.exercise-image img') :
            btn.parentElement.querySelector('.solution-code');

        if (btn.textContent === "Show Exercise" || btn.textContent === "Show Solution") {
            targetElement.classList.add('show-exercise');
            btn.textContent = "Hide Exercise"; // Change button text
            btn.classList.replace('show-exercise-btn', 'hide-exercise-btn'); // Change button class
        } else {
            targetElement.classList.remove('show-exercise');
            btn.textContent = "Show Exercise";
            btn.classList.replace('hide-exercise-btn', 'show-exercise-btn');
        }
    });
});
