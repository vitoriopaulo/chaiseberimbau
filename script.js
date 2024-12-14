// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Close the hamburger menu when a menu item is clicked
    document.querySelectorAll('.nav-link a').forEach(item => {
        item.addEventListener('click', () => {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false; // Uncheck to close the menu
            }
        });
    });

    // Form validation
    const form = document.getElementById('form'); // Ensure the ID matches your form
    if (form) {
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();

            // Ensure all fields are filled out
            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                event.preventDefault(); // Prevent form submission
                return;
            }

            // Optional: Additional validation (e.g., email format)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            // Allow submission if validation passes
            console.log('Form submitted successfully!');
        });
    }
});
