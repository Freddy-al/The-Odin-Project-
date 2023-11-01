let signupForm = document.querySelector(".my-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

signupForm.addEventListener("submit", (e) => {e.preventDefault();

console.log("Email:", email.value);
console.log("Password:", password.value);
});

function onchange() {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Passwords do no match!");
    }
    }

password.addEventListener("change", onchange);
confirmPassword.addEventListener("change", onchange);