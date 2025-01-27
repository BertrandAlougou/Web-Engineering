document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission behavior

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

    if (isValid) {
        // Proceed with the form submission
        const formData = new FormData(form);

        fetch('process_contact.php', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                alert(data); // Display server response
                form.reset(); // Optionally reset the form
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                alert('An error occurred. Please try again later.');
            });
    } else {
        alert('Please fill out all fields correctly before submitting.');
    }
});
