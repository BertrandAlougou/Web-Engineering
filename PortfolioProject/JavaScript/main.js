// Accessibility Button and Options
const accessibilityBtn = document.querySelector('.accessibility-btn');
const accessibilityOptions = document.createElement('div');
accessibilityOptions.classList.add('accessibility-options');

// Accessibility Menu Options
accessibilityOptions.innerHTML = `
    <ul>
        <li data-mode="dark">Dark Mode</li>
        <li data-mode="light">Light Mode</li>
        <li data-mode="high-contrast">High Contrast</li>
    </ul>
`;

document.body.appendChild(accessibilityOptions);

// Function to update the button style for opposite mode
function updateAccessibilityButton(mode) {
    accessibilityBtn.classList.remove('light-mode', 'dark-mode', 'high-contrast');

    if (mode === 'dark') {
        accessibilityBtn.classList.add('dark-mode'); // Dark mode → Light button
    } else if (mode === 'light') {
        accessibilityBtn.classList.add('light-mode'); // Light mode → Dark button
    } else {
        accessibilityBtn.classList.add('high-contrast'); // High Contrast mode → Special styling
    }
}

// Accessibility Options Toggle
accessibilityBtn.addEventListener('click', () => {
    const isVisible = accessibilityOptions.style.display === 'block';
    accessibilityOptions.style.display = isVisible ? 'none' : 'block';
});

// Applying Selected Accessibility Mode
accessibilityOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const mode = e.target.getAttribute('data-mode');

        // Remove existing modes and apply the selected one
        document.body.classList.remove('light-mode', 'dark-mode', 'high-contrast');
        document.body.classList.add(mode);

        // Update button style directly based on the selected mode
        accessibilityBtn.classList.remove('light-mode', 'dark-mode', 'high-contrast');
        if (mode === 'dark') {
            accessibilityBtn.classList.add('light-mode'); // Light button for dark mode
        } else if (mode === 'light') {
            accessibilityBtn.classList.add('dark-mode'); // Dark button for light mode
        } else {
            accessibilityBtn.classList.add('high-contrast'); // Special styling for high contrast
        }

        // Hide accessibility options after selection
        accessibilityOptions.style.display = 'none';
    }
});

// Initialize Accessibility Button for default mode (assume light mode)
updateAccessibilityButton('light');


// ---------------------------------------------------------------
// Navbar Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle Hamburger Menu and Change Icon
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Show or hide the menu
    const isMenuOpen = navLinks.classList.contains('show');

    // Change button text between "☰" and "✖"
    menuToggle.textContent = isMenuOpen ? '✖' : '☰';
});

// ---------------------------------------------------------------
// Dropdown Submenu for "About" and "Portfolio"
const aboutLink = document.querySelector('.nav-links > li:nth-child(2)');
const portfolioLink = document.querySelector('.nav-links > li:nth-child(3)');

aboutLink.addEventListener('mouseover', () => {
    const dropdown = aboutLink.querySelector('.dropdown-menu');
    dropdown.style.display = 'block';
});
aboutLink.addEventListener('mouseout', () => {
    const dropdown = aboutLink.querySelector('.dropdown-menu');
    dropdown.style.display = 'none';
});

portfolioLink.addEventListener('mouseover', () => {
    const dropdown = portfolioLink.querySelector('.dropdown-menu');
    dropdown.style.display = 'block';
});
portfolioLink.addEventListener('mouseout', () => {
    const dropdown = portfolioLink.querySelector('.dropdown-menu');
    dropdown.style.display = 'none';
});
