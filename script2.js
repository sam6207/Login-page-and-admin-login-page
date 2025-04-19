const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("submitButton");
const newPasswordError = document.getElementById("newPasswordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const message = document.getElementById("message");

function speakError(message) {
    const speech = new SpeechSynthesisUtterance(message);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

function validatePassword() {
    let isValid = true;

    if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}/.test(newPasswordInput.value)) {
        const errorMsg = "Password must include alphabets, numbers, and symbols.";
        newPasswordError.textContent = errorMsg;
        speakError("Please create a strong password."); // Voice Feedback
        isValid = false;
    } else {
        newPasswordError.textContent = "";
    }

    if (confirmPasswordInput.value !== newPasswordInput.value) {
        const errorMsg = "Passwords do not match.";
        confirmPasswordError.textContent = errorMsg;
        speakError(errorMsg); // Voice Feedback
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return isValid;
}

submitButton.addEventListener("click", () => {
    if (validatePassword()) {
        // Success Message
        message.textContent = "Password created successfully!";
        message.style.color = "green";

        newPasswordInput.value = "";
        confirmPasswordInput.value = "";
    } else {

        message.textContent = "Sucssful we generate New Password";
    }
});
