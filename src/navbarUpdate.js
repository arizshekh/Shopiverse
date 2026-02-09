const userNameDisplay = document.getElementById('userNameDisplay');
const logoutButton = document.getElementById('logoutButton');
const signInUpLinks = document.querySelector('.sing_in_up'); 

function updateNavbar() {
    const username = localStorage.getItem('loggedInUser');

    // Default state: hide user info, show sign in/up
    if (userNameDisplay) userNameDisplay.style.display = 'none';
    if (logoutButton) logoutButton.style.display = 'none';
    if (signInUpLinks) signInUpLinks.style.display = '';

    if (username) {
        // User is logged in: Show Name and Logout, Hide Sign In/Up Links
        userNameDisplay.querySelector('a').textContent = `Hi, ${username}!`;
        
        // Use inline style to ensure visibility is set
        if (userNameDisplay) userNameDisplay.style.display = 'list-item'; 
        if (logoutButton) logoutButton.style.display = 'list-item';
        
        // Hide the top sign in/up links
        if (signInUpLinks) {
            signInUpLinks.style.display = 'none';
        }
    }
}

// Handle Logout
if (logoutButton) {
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('loggedInUser');
        // Removed localStorage.removeItem('justLoggedIn') as it's not used here
        alert('You have been logged out successfully!');
        
        // FIX: Redirect to the home page (index.html)
        window.location.href = 'index.html'; 
    });
}

// NOTE: The logic for showing the "You logged in successfully!" toast is now entirely handled 
// by the intermediate 'index.html' file using the URL parameter '?status=logged_in'.

// Run on page load to set the initial state
updateNavbar();