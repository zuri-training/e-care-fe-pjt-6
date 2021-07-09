const axios = require("axios");
// grab form elements
const loginForm = document.querySelector(".loginForm");
const messageContainer = document.querySelector(".loginFormMessage");
const loginNameInput = document.querySelector(".loginName");
const loginPasswordInput = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");
const LOGIN_API_URL = "https://e-care-be-api.herokuapp.com/api/v1/user/login/";
let loginName = "";
let loginPassword = "";
const testData = JSON.stringify({
    username: "austinoski",
    password: "austinoski123"
});

export function Login() {
  loginNameInput.addEventListener("input", () => {
    loginName = loginNameInput.value;
  });
  loginPasswordInput.addEventListener("input", () => {
    loginPassword = loginPasswordInput.value;
  });

  function displayMessage(message, type) {
    messageContainer.style.display = "block";
    messageContainer.textContent = message;
    messageContainer.classList.add(`loginFormMessage--${type}`);
    setTimeout(() => {
      messageContainer.style.display = "none";
      messageContainer.classList.remove(`loginFormMessage--${type}`);
    }, 5000);
  }
  // on form submit
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    loginBtn.textContent = "Sending...";
    axios({
      method: 'post',
      url: LOGIN_API_URL,
      data: {
        username: loginName,
        password: loginPassword
      },
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      validateStatus: (status) => {
        // Idk know what this does 
        return true; 
      },
    }).then(response => {
        loginForm.reset();
        displayMessage("Success!", "success");
        console.log(response.data);
        window.location.pathname = "./dashboard.html";
    }).catch(error => {
         console.log(error);
        displayMessage("An Error Occured - Please try again", "error");
        loginBtn.textContent = "Login";
    });
  });
}
