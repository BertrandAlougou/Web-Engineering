/** Toggle effect */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuToggle.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
});
