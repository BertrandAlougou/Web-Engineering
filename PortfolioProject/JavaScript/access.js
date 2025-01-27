document.addEventListener('DOMContentLoaded', () => {
    const accessibilityBtn = document.querySelector('.accessibility-btn');
    const accessibilityMenu = document.createElement('div');

    // Create the accessibility menu dynamically
    accessibilityMenu.classList.add('accessibility-menu');
    accessibilityMenu.innerHTML = `
        <button data-action="dark-mode">Enable Dark Mode</button>
        <button data-action="increase-font">Increase Font Size</button>
        <button data-action="reset">Reset</button>
    `;
    document.body.appendChild(accessibilityMenu);

    // Toggle menu visibility
    accessibilityBtn.addEventListener('click', () => {
        accessibilityMenu.style.display =
            accessibilityMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Add functionality to each accessibility option
    accessibilityMenu.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');
        if (action === 'dark-mode') {
            document.body.classList.toggle('dark-mode');
        } else if (action === 'increase-font') {
            document.body.style.fontSize = '1.2em';
        } else if (action === 'reset') {
            document.body.classList.remove('dark-mode');
            document.body.style.fontSize = '';
        }
        accessibilityMenu.style.display = 'none'; // Close menu after selection
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownParents = document.querySelectorAll('.nav-links > li');

    dropdownParents.forEach(parent => {
        parent.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const dropdownMenu = parent.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                    const isExpanded = dropdownMenu.style.display === 'block';
                    dropdownMenu.style.display = isExpanded ? 'none' : 'block';
                }
            }
        });
    });
});

