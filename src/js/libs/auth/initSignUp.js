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
function setUserDetails(email, password, num, dataObj) {
  const [name, domain] = getEmailFragments(email);
  dataObj.user.username = name;
  dataObj.user.email = email;
  dataObj.user.password = password;
  dataObj.phone_no = num;
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
        console.table(userDataMain);
        signUpUser(userDataMain, "patient")
          .then(function (response) {
            console.log(response);
            createAcctFormBtn.textContent = "Success!";
            createAcctFormBtn.style.background = "rgb(63, 138, 19)";
            // mainContainer.innerHTML = responseTemplate();
          })
          .catch(function (error) {
            // mainContainer.innerHTML = responseTemplate("error");
            console.log(error.response);
          });
        // window.location.pathname = "./signUp.html";
      } else {
        alert("Sorry Passwords don't match");
      }
    });
  }
}
