document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission if there are errors

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validation checks
    if (username === '') {
        errorMessage.textContent = 'Please enter your username.';
        return;
    }

    if (email === '') {
        errorMessage.textContent = 'Please enter your email.';
        return;
    }

    // Simple email validation check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password === '') {
        errorMessage.textContent = 'Please enter your password.';
        return;
    }else if(password.length <= 8){
        errorMessage.textContent = 'Password should be greater than 8 characters';
        return;  
    }

    if (confirmPassword === '') {
        errorMessage.textContent = 'Please confirm your password.';
        return;
    }else if(confirmPassword.length <= 8){
        errorMessage.textContent = 'Password should be greater than 8 characters';
        return;  
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass, redirect to login page
    errorMessage.textContent = 'Signup successful! Redirecting to login page...';
    setTimeout(() => {
        window.location.href = 'sign_in.html';
    }, 1000); // Redirects after 1 second to show the success message briefly
});
