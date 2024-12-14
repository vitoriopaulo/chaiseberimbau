// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Close the hamburger menu when a menu item is clicked (for mobile menu)
    document.querySelectorAll('.nav-link a').forEach(item => {
        item.addEventListener('click', () => {
            const menuToggle = document.getElementById('menu-toggle');
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false; // Uncheck to close the menu
            }
        });
    });

    // Smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation
    const form = document.getElementById('form');
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
