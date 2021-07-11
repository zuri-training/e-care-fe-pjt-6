// TODO properly clean up file
const mainContainer = document.querySelector(".acct__main");
const createAcctForm = document.getElementsByClassName("createAccountForm")[0];
const createAcctEmailInput =
  document.getElementsByClassName("createAccountEmail")[0];
const createAcctPasswordInput = document.getElementsByClassName(
  "createAccountPassword"
)[0];
const createAcctPasswordInputCheck = document.getElementsByClassName(
  "createAccountConfirmPassword"
)[0];
const createAcctFormBtn = document.querySelector(".cracct-formBtn");
const createAcctPhoneNoEl = document.querySelector(".createAccountPhoneNo");
import {
  getEmailFragments,
  getUserID,
  removeUserID,
  setCookie,
  signUpUser,
  storeUserID,
} from "./auth-util";
import { userDataMain } from "../../createAccount";

let email = "";
let password = "";
let phoneNo = "";
let confirmPassword = "";
let userId = "";
const getUserDetails = (email, password, num) => {
  let userDataMain = {
    user: {
      username: null,
      email: null,
      password: null,
    },
    phone_number: null,
  };
  const [name, domain] = getEmailFragments(email);
  userDataMain.user.username = name;
  userDataMain.user.email = email;
  userDataMain.user.password = password;
  userDataMain.phone_number = num;
  return userDataMain;
};

function passwordIsValid() {
  return password === confirmPassword;
}

function renderBtn(state) {
  if (state === "success") {
    createAcctFormBtn.textContent = "Success!";
    createAcctFormBtn.style.background = "rgb(63, 138, 19)";
  } else if (state === "error") {
    createAcctFormBtn.style.background = "rgb(138, 19, 19)";
    createAcctFormBtn.textContent = "Sorry! Try Again";
    setTimeout(() => {
      createAcctFormBtn.style.background = "var(--color-brand-blue)";
      createAcctFormBtn.textContent = "Sign Up";
    }, 2000);
  } else {
    return;
  }
}

// Create Account Function
export default function initSignUp() {
  if (
    createAcctEmailInput &&
    createAcctPasswordInput &&
    createAcctPasswordInputCheck &&
    createAcctForm &&
    createAcctFormBtn &&
    createAcctPhoneNoEl
  ) {
    createAcctEmailInput.addEventListener("input", (e) => {
      email = createAcctEmailInput.value;
    });

    createAcctPhoneNoEl.addEventListener("input", (e) => {
      phoneNo = createAcctPhoneNoEl.value;
    });
    createAcctPasswordInput.addEventListener("input", (e) => {
      password = createAcctPasswordInput.value;
    });
    createAcctPasswordInputCheck.addEventListener("input", (e) => {
      confirmPassword = createAcctPasswordInputCheck.value;
    });
    createAcctForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        passwordIsValid() &&
        email != " " &&
        password != " " &&
        phoneNo != " "
      ) {
        createAcctFormBtn.textContent = "Processing...";
        // TODO Write function to detect existing username and existing number
        signUpUser(getUserDetails(email, password, phoneNo), "patient")
          .then(function (response) {
            userId = response.data.uuid;
            if (getUserID()) {
              removeUserID();
            }
            storeUserID(userId);
            renderBtn("success");
            window.location.pathname = "./login.html";
          })
          .catch(function (error) {
            // TODO Add proper error handling
            renderBtn("error");
            console.log(error);
          });
      } else {
        alert("Sorry Passwords don't match");
      }
    });
  }
}
