// Function to close the hamburger menu when a menu item is clicked
document.querySelectorAll('.nav-link a').forEach(item => {
    item.addEventListener('click', () => {
        const menuToggle = document.getElementById('menu-toggle');
        if (menuToggle.checked) {
            menuToggle.checked = false; // Uncheck to close the menu
        }
    });
});