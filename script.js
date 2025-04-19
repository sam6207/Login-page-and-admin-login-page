// Reference DOM Elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const message = document.getElementById("message");

// Function to Speak Error Messages (Voice Feedback)
function speakError(message) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// Validation Function
function validateForm() {
    let isValid = true;

    // Validate Username (Only Alphabetical)
    if (!/^[A-Za-z ]+$/.test(usernameInput.value)) {
        const errorMsg = "Username must contain only alphabetical characters.";
        usernameError.textContent = errorMsg;
        speakError(errorMsg); // Voice Feedback
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Validate Password (Must Include Numbers, Alphabets, and Symbols)
    if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}/.test(passwordInput.value)) {
        const errorMsg = "Password must include alphabets, numbers, and symbols.";
        passwordError.textContent = errorMsg;
        speakError("Please create a strong password."); // Voice Feedback
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    return isValid;
}

// Event Listener for Submit Button
loginButton.addEventListener("click", () => {
    if (validateForm()) {
        // Success Message
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";

        // Clear Form Fields
        usernameInput.value = "";
        passwordInput.value = "";
    } else {
        // Clear Success Message
        message.textContent = "";
    }
});
