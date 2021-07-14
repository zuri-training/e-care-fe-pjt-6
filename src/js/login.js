import {
  loginUser,
  storeUserID,
  removeUserID,
  getUserID,
  setCookie,
} from "./libs/auth/auth-util";
const loginForm = document.querySelector(".loginForm");
const messageContainer = document.querySelector(".loginFormMessage");
const loginEmailInput = document.querySelector(".loginEmail");
const loginPasswordInput = document.querySelector(".loginPassword");
const loginBtn = document.querySelector(".loginBtn");
let loginEmail = "";
let loginPassword = "";

if (loginEmailInput && loginPasswordInput) {
  loginEmailInput.addEventListener("input", () => {
    loginEmail = loginEmailInput.value;
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
        email: loginEmail,
        password: loginPassword,
      })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            console.log(response);
            if (getUserID()) {
              removeUserID();
            }
            storeUserID(response.data.user_id);
            setCookie("access", response.data.access, 365);
            setCookie("userid", response.data.user_id, 365);
            displayMessage("Success!", "success");
            loginBtn.textContent = "Sent!";
            window.location.pathname = "./dashboard.html";
            loginForm.reset();
          } else {
            alert(response.statusText);
            loginBtn.textContent = "Login";
          }
        })
        .catch((error) => {
          console.log(error);
          displayMessage("An Error Occured - Please try again", "error");
          loginBtn.textContent = "Login";
        });
    });
  }
}
