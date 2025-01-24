// Form validation feedback
document.querySelector('form').addEventListener('submit', function (event) {
    const form = event.target;
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    // Reset previous styles
    [name, email, message].forEach(input => input.style.borderColor = '');

    let isValid = true;

    if (!name.value.trim()) {
        name.style.borderColor = 'red';
        isValid = false;
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = 'red';
        isValid = false;
    }

    if (!message.value.trim()) {
        message.style.borderColor = 'red';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        alert('Please fill out all fields correctly before submitting.');
    }
});