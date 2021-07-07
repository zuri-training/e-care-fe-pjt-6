import axios from "axios";
// grab form elements
const loginForm = document.querySelector(".loginForm");
const messageContainer = document.querySelector(".loginFormMessage");
const loginNameInput = document.querySelector(".loginName");
const loginPasswordInput = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");
// variables
const LOGIN_API_URL = "https://e-care-be-api.herokuapp.com/api/v1/user/login";
const RETRIEVE_PATIENT_API_URL =
  "https://e-care-be-api.herokuapp.com/api/v1/user/patient";
let loginName = "";
let loginPassword = "";
// intialize data
/* 
structure for login request
{
    "username": "austino_milano",
    "password": "milano123"
}
*/
// add data to variables
export function Login() {
  loginNameInput.addEventListener("input", () => {
    loginName = loginNameInput.value;
  });
  loginPasswordInput.addEventListener("input", () => {
    loginPassword = loginPasswordInput.value;
  });

  function loginUser(username, password) {
    return axios.post(LOGIN_API_URL, {
      username: username,
      password: password,
    });
  }

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
    // loginBtn.setAttribute("disabled");
    loginUser(loginName, loginPassword)
      .then(function (response) {
        displayMessage(response, "success");
        console.log(response);
        window.location.pathname = "./dashboard.html";
      })
      .catch(function (error) {
        // create settimout for error message
        // loginForm.reset();
        console.log(error);
        console.log(error.response);
        displayMessage("An Error Occured - Please try again", "error");
      });
    // Send userCredentials to DB
    // grab user details
    // redirect user to dashboard
  });
}
