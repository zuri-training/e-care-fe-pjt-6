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
import { getEmailFragments, signUpUser } from "./auth-util";
import { userDataMain } from "../../createAccount";

let email = "";
let password = "";
let phoneNo = "";
let confirmPassword = "";
let userId = "";
function setUserDetails(email, password, num, dataObj) {
  const [name, domain] = getEmailFragments(email);
  dataObj.user.username = name;
  dataObj.user.email = email;
  dataObj.user.password = password;
  dataObj.phone_number = num;
}

function passwordIsValid() {
  return password === confirmPassword;
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
      createAcctFormBtn.textContent = "Sending...";
      if (
        passwordIsValid() &&
        email != " " &&
        password != " " &&
        phoneNo != " "
      ) {
        setUserDetails(email, password, phoneNo, userDataMain);
        // TODO Write function to detect existing username and existing number
        signUpUser(userDataMain, "patient")
          .then(function (response) {
            userId = response.data.uuid;
            createAcctFormBtn.textContent = "Success!";
            createAcctFormBtn.style.background = "rgb(63, 138, 19)";
            window.location.pathname = `./dashboard.html?${userId}`;
          })
          .catch(function (error) {
            // TODO Add proper error handling
            console.log(error.response);
          });
      } else {
        alert("Sorry Passwords don't match");
      }
    });
  }
}
