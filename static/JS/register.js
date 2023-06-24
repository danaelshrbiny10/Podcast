// Register controls.
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Perform form validation
    if (username === "") {
        displayErrorMessage("Please enter your name.");
        return;
    }

    if (email === "") {
        displayErrorMessage("Please enter your email address.");
        return;
    }

    if (password === "") {
        displayErrorMessage("Please enter a password.");
        return;
    }

    if (confirmPassword === "") {
        displayErrorMessage("Please confirm your password.");
        return;
    }

    if (password !== confirmPassword) {
        displayErrorMessage("Passwords do not match.");
        return;
    }

    // If all validations pass, you can proceed with form submission
    // Here, you can send the form data to your backend for further processing

    // Clear error message
    clearErrorMessage();

    // Reset form fields
    document.getElementById("registerForm").reset();

    // Display success message or redirect to another page
    alert("Account created successfully!");
});

function displayErrorMessage(message) {
    var errorDiv = document.querySelector(".form__message-error");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

function clearErrorMessage() {
    var errorDiv = document.querySelector(".form__message-error");
    errorDiv.textContent = "";
    errorDiv.style.display = "none";

    // Register controls.
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var username = document.getElementById("signupUsername").value;
        var email = document.getElementById("signupEmail").value;
        var password = document.getElementById("signupPassword").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        // Perform form validation
        if (username === "") {
            displayErrorMessage("Please enter your name.");
            return;
        }

        if (email === "") {
            displayErrorMessage("Please enter your email address.");
            return;
        }

        if (password === "") {
            displayErrorMessage("Please enter a password.");
            return;
        }

        if (confirmPassword === "") {
            displayErrorMessage("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            displayErrorMessage("Passwords do not match.");
            return;
        }

        // If all validations pass, you can proceed with form submission
        // Here, you can send the form data to your backend for further processing

        // Clear error message
        clearErrorMessage();

        // Reset form fields
        document.getElementById("registerForm").reset();

        // Display success message or redirect to another page
        alert("Account created successfully!");
    });

    function displayErrorMessage(message) {
        var errorDiv = document.querySelector(".form__message-error");
        errorDiv.textContent = message;
        errorDiv.style.display = "block";
    }

    function clearErrorMessage() {
        var errorDiv = document.querySelector(".form__message-error");
        errorDiv.textContent = "";
        errorDiv.style.display = "none";

    }