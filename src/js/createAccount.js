import axios from "axios";
import { signUpUser, responseTemplate, getEmailFragments } from "./libs/signup";
// get elments from DOM ------------------------------------------------

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

const csuFormEl = document.querySelector(".csu-form");
const csuFirstNameEl = document.querySelector(".csu-firstName");
const csuLastNameEl = document.querySelector(".csu-lastName");
const csuAddressEl = document.querySelector(".csu-address");
const csuCityEl = document.querySelector(".csu-city");
const csuStateEl = document.querySelector(".csu-state");
const csuLGAEl = document.querySelector(".csu-lga");
const csuDOBEl = document.querySelector(".csu-dob");
const csuPhoneNoEl = document.querySelector(".csu-phoneno");
const csuFormBtnEl = document.querySelector(".csu-form-button");
const csuGenderEls = csuFormEl.elements["gender"];

function csuElementAreAvailable() {
  return (
    csuFormEl &&
    csuFirstNameEl &&
    csuLastNameEl &&
    csuAddressEl &&
    csuCityEl &&
    csuStateEl &&
    csuLGAEl &&
    csuDOBEl &&
    csuPhoneNoEl &&
    csuFormBtnEl &&
    csuGenderEls
  );
}

//------------------------------------------------------------
let dataState = {
  user: {
    username: null,
    email: null,
    password: null,
  },
  phone_number: null,
  first_name: null,
  last_name: null,
  other_name: null,
  address: null,
  gender: null,
  date_of_birth: null,
  city: null,
  lga: null,
  state: null,
  address: null,
};

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

function assignValueFromInput(el, storage, validation) {
  el.addEventListener("input", (e) => {
    let value = el.value;
    storage = value;
    console.log(storage);
  });
}

// Create Account Function
export function CreateAccount() {
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

  if (csuElementAreAvailable()) {
    /* 
    TODO: Validate Date of birth passed in 
    
    */
    assignValueFromInput(csuFirstNameEl, dataState.first_name);
    assignValueFromInput(csuLastNameEl, dataState.last_name);
    assignValueFromInput(csuAddressEl, dataState.address);
    assignValueFromInput(csuCityEl, dataState.city);
    assignValueFromInput(csuPhoneNoEl, dataState.phone_number);
    assignValueFromInput(csuStateEl, dataState.state);
    assignValueFromInput(csuLGAEl, dataState.lga);
    assignValueFromInput(csuDOBEl, dataState.date_of_birth);

    csuFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      csuFormBtnEl.textContent = "Creating...";
      console.log(dataState);
      // send data to backend
      // redirect if need be
    });
  }
}

function signUp() {
  signUpUser(data, "patient")
    .then(function (response) {
      console.log(response);
      mainContainer.innerHTML = responseTemplate();
    })
    .catch(function (error) {
      mainContainer.innerHTML = responseTemplate("error");
      console.log(error);
      console.log(error.response);
    });
}
