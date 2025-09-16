// Background images array (replace with your own image URLs)
const backgroundImages = [
    'https://placeholder-image-service.onrender.com/image/1920x1080?prompt=Beautiful%20mountain%20landscape%20with%20sunset&id=bg1',
    'https://placeholder-image-service.onrender.com/image/1920x1080?prompt=Modern%20city%20skyline%20at%20night&id=bg2',
    'https://placeholder-image-service.onrender.com/image/1920x1080?prompt=Tropical%20beach%20with%20palm%20trees&id=bg3',
    'https://placeholder-image-service.onrender.com/image/1920x1080?prompt=Abstract%20colorful%20gradient%20background&id=bg4'
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginFormElement = document.querySelector('.login-form');
const registerFormElement = document.querySelector('.register-form');
const googleLoginBtn = document.getElementById('googleLogin');

// Current background index
let currentBgIndex = 0;

// Function to change background image
function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
    document.body.style.backgroundImage = `linear-gradient(rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url('${backgroundImages[currentBgIndex]}')`;
}

// Initialize background and set interval for changing
document.body.style.backgroundImage = `linear-gradient(rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url('${backgroundImages[0]}')`;
setInterval(changeBackground, 5000); // Change every 5 seconds

// Switch between login and register forms
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginFormElement.classList.add('hidden');
    registerFormElement.classList.remove('hidden');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerFormElement.classList.add('hidden');
    loginFormElement.classList.remove('hidden');
});

// Form submission handlers
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login process
    alert('Login successful! Redirecting...');
    // In a real application, you would redirect to the main page
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Simulate registration process
    alert('Registration successful! You can now login.');
    registerFormElement.classList.add('hidden');
    loginFormElement.classList.remove('hidden');
});

// Social login handlers
googleLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // In a real application, this would redirect to Google OAuth
    alert('Redirecting to Google login...');
    // Simulate successful login after a short delay
    setTimeout(() => {
        alert('Google login successful! Redirecting...');
        // In a real application, you would redirect to the main page
    }, 1000);
});

document.querySelector('.social-btn.facebook').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Facebook login would be implemented here');
});

document.querySelector('.social-btn.twitter').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Twitter login would be implemented here');
});