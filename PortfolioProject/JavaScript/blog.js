// Toggle Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle the "show" class to display/hide the menu
});

// Functionality for expanding and collapsing blog topics
document.querySelectorAll('.blog-card').forEach((card) => {
    const contentSection = document.querySelector('.topic-content'); // Section to showcase the topic content
    const closeButton = document.querySelector('.close-topic');

    card.addEventListener('click', () => {
        const topicTitle = card.querySelector('h2').innerText;
        const topicDescription = card.querySelector('.description').innerText;

        // Check if the same topic is already open
        if (
            contentSection.style.display === 'block' &&
            contentSection.querySelector('.topic-title').innerText === topicTitle
        ) {
            // If the same topic is clicked again, hide the content section
            contentSection.style.display = 'none';
        } else {
            // Update the content section with the topic details
            contentSection.querySelector('.topic-title').innerText = topicTitle;
            contentSection.querySelector('.topic-description').innerText = topicDescription;

            // Show the content section
            contentSection.style.display = 'block';
        }
    });

    // Close the content section when the close button is clicked
    closeButton.addEventListener('click', () => {
        contentSection.style.display = 'none';
    });
});
