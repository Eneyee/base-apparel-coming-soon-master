const input = document.querySelector("input");
let inputEmail = document.getElementById("Email");
let errorText = document.getElementById("error-text");

function checkError(){
    if (!input.value || input.type == 'email') {
        inputEmail.style.backgroundImage = "url(./images/icon-error.svg)";
        errorText.textContent = "Please provide a valid email";
    }
};