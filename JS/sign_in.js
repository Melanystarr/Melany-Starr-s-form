document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validation checks
    if (username === '') {
        errorMessage.textContent = 'Please enter your username.';
        return;
    }

    if (password === '') {
        errorMessage.textContent = 'Please enter your password.';
        return;
    } else if(password.length <= 8){
        errorMessage.textContent = 'Password length should be greater than 8 characters';
        return;
    }

    // If all validations pass, submit the form (simulating form submission here)
    errorMessage.textContent = 'Form submitted successfully!';
    // Optionally, here you could redirect or proceed with form submission logic
    // e.g., `this.submit();`
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000); // Redirects after 1 second to show the success message briefly
});
