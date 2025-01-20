document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

async function loadComponents() {
    try {
        // Load the navbar
        const navbarResponse = await fetch('../HTML/navbar.html');
        if (navbarResponse.ok) {
            document.getElementById('navbar-container').innerHTML = await navbarResponse.text();

            // Setup event listeners with a delay
            setTimeout(() => {
                setupNavbarToggle();
                setupDropdownToggle();
            }, 100); // 100ms delay, adjust as needed

        } else {
            console.error('Failed to load navbar:', navbarResponse.status);
        }

        // Load the footer
        const footerResponse = await fetch('../HTML/footer.html');
        if (footerResponse.ok) {
            document.getElementById('footer-container').innerHTML = await footerResponse.text();
        } else {
            console.error('Failed to load footer:', footerResponse.status);
        }

    } catch (error) {
        console.error('Error loading components:', error);
    }
}

// Setup the event listener for the hamburger menu toggle
function setupNavbarToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// Setup the event listener for the dropdown toggles
function setupDropdownToggle() {
    const dropdowns = document.querySelectorAll('.dropdown > a');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (event) => {
            const submenu = dropdown.nextElementSibling;
            if (submenu && submenu.classList.contains('dropdown-menu')) {
                submenu.classList.toggle('active');
            }
            // Close other submenus if any
            document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove('active');
                }
            });
        });
    });
}
