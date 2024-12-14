/ Function to close the hamburger menu when a menu item is clicked
document.querySelectorAll('.nav-link a').forEach(item => {
    item.addEventListener('click', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle.checked) {
            menuToggle.checked = false; // Uncheck to close the menu
        }
    });
});

// Form validation before submission
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
    } else {
        // Optional: Additional validation can be added here
        console.log('Form submitted successfully!'); // For debugging purposes

        // Reset the form fields
        form.reset();
    }
});