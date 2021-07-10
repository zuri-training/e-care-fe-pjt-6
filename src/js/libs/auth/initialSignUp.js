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
import { getEmailFragments } from "./libs/signup";
import { dataState } from "../../createAccount";

let email = "";
let password = "";
let confirmPassword = "";
function setUserDetails(email, password, dataObj) {
  const [name, domain] = getEmailFragments(email);
  dataObj.user.username = name;
  dataObj.user.email = email;
  dataObj.user.password = password;
}

function passwordIsValid() {
  return password === confirmPassword;
}

// Create Account Function
export function initialSignUp() {
  if (
    createAcctEmailInput &&
    createAcctPasswordInput &&
    createAcctPasswordInputCheck &&
    createAcctForm
  ) {
    createAcctEmailInput.addEventListener("input", (e) => {
      email = createAcctEmailInput.value;
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
        mainContainer
      ) {
        setUserDetails(email, password, dataState);
        console.table(dataState);
        window.location.pathname = "./signUp.html";
      } else {
        alert("Sorry Passwords don't match");
      }
    });
  }
}
