document.addEventListener('DOMContentLoaded', function(event) {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const useremail = document.getElementById('email').value.trim();
        const userpassword = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!useremail.includes('@') || !useremail.includes('.')) {
            isValid = false;
            messages.push("Email must include '@' and '.' characters.");
        }

        // Password validation
        if (userpassword.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters.");
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
