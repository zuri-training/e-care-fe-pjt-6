import axios from "axios";
import { loginUser, storeUserID } from "./libs/auth/auth-util";
const loginForm = document.querySelector(".loginForm");
const messageContainer = document.querySelector(".loginFormMessage");
const loginNameInput = document.querySelector(".loginName");
const loginPasswordInput = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");
let loginName = "";
let loginPassword = "";

if (loginNameInput && loginPasswordInput) {
  loginNameInput.addEventListener("input", () => {
    loginName = loginNameInput.value;
  });
  loginPasswordInput.addEventListener("input", () => {
    loginPassword = loginPasswordInput.value;
  });
}
export function Login() {
  function displayMessage(message, type) {
    if (messageContainer) {
      messageContainer.style.display = "block";
      messageContainer.textContent = message;
      messageContainer.classList.add(`loginFormMessage--${type}`);
      setTimeout(() => {
        messageContainer.style.display = "none";
        messageContainer.classList.remove(`loginFormMessage--${type}`);
      }, 5000);
    } else {
      return;
    }
  }
  // on form submit
  if (loginForm && loginBtn) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      loginBtn.textContent = "Sending...";
      loginUser({
        username: loginName,
        password: loginPassword,
      })
        .then((response) => {
          storeUserID(response.data.uuid);
          displayMessage("Success!", "success");
          window.location.pathname = "./dashboard.html";
          loginForm.reset();
        })
        .catch((error) => {
          console.log(error);
          displayMessage("An Error Occured - Please try again", "error");
          loginBtn.textContent = "Login";
        });
    });
  }
}
