// interactive-resume.js

// Function to animate progress bars
function animateProgressBar(element) {
    const progressBarFill = element.querySelector('.progress-bar-fill');
    const targetWidth = parseInt(progressBarFill.style.width.replace('%', ''));

    let width = 0;
    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progressBarFill.style.width = `${width}%`;
        }
    }, 10); // Adjust interval for animation speed
}

// Get all progress bar elements
const progressBars = document.querySelectorAll('.progress-bar');

// Animate progress bars on page load
progressBars.forEach(bar => {
    animateProgressBar(bar);
});