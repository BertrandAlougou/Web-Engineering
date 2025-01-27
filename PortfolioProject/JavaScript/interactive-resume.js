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

// Get the download button
const downloadButton = document.querySelector('.download-button');

// Add a loading state to the button
function showLoading() {
    downloadButton.textContent = "Downloading...";
    downloadButton.disabled = true;
}

// Remove the loading state from the button
function hideLoading() {
    downloadButton.textContent = "Download Resume";
    downloadButton.disabled = false;
}

// Add an event listener to the download button
downloadButton.addEventListener('click', () => {
    showLoading();

    // Simulate a download delay (replace with actual download logic)
    setTimeout(() => {
        hideLoading();
    }, 2000); // Simulate a 2-second download
});