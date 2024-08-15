document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Validate credentials and handle login logic
    // Redirect to dashboard or display an error message
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;
    // Validate input and handle registration logic
    // Redirect to login page or show success message
});
