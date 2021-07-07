// grab form elements
const loginForm = document.querySelector(".loginForm");
const messageContainer = document.querySelector(".loginFormMessage");
const loginNameInput = document.querySelector(".loginName");
const loginPasswordInput = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");
// variables
const LOGIN_API_URL = "https://e-care-be-api.herokuapp.com/api/v1/user/login";
let loginEmail = "";
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
loginNameInput.addEventListener("input", () => {
  loginName = loginNameInput.value;
});
loginPasswordInput.addEventListener("input", () => {
  loginPassword = loginPasswordInput.value;
});

// on form submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Send userCredentials to DB
  // grab user details
  // redirect user to dashboard
});
