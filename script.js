// Get the hamburger icon and the nav menu
const hamburger = document.getElementById('hamburger-icon');
const navList = document.querySelector('nav ul');

// Add an event listener to toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    // Toggle the visibility of the navigation menu
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'block';  // Show the menu
    } else {
        navList.style.display = 'none';  // Hide the menu
    }
});
