// Redirect on CTA button click
document.querySelector('.cta-button').addEventListener('click', () => {
    window.location.href = '../HTML/homepage.html'; // Redirect to homepage
});

// Accessibility Button for High Contrast and Font Size Toggle
let isHighContrast = false;

document.querySelector('.accessibility-btn').addEventListener('click', () => {
    const body = document.body;

    // Toggle high contrast mode
    if (!isHighContrast) {
        body.style.filter = 'invert(1) hue-rotate(180deg)';
        body.style.fontSize = '1.25rem'; // Larger font size
        isHighContrast = true;
    } else {
        body.style.filter = 'none';
        body.style.fontSize = '1rem'; // Reset font size
        isHighContrast = false;
    }
});
