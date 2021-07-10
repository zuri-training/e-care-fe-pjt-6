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
const csuGenderEls = document.querySelector(".csu-gender");
import { dataState } from "../../createAccount";

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

// function assignValueFromInput(el, storage, validation) {
//   el.addEventListener("input", (e) => {
//     let value = el.value;
//     storage = value;
//     console.log(storage);
//   });
// }

export default function initCompleteSignUp() {
  if (csuElementAreAvailable()) {
    csuFirstNameEl.addEventListener("input", (e) => {
      let value = csuFirstNameEl.value;
      dataState.first_name = value;
    });

    csuLastNameEl.addEventListener("input", (e) => {
      let value = csuLastNameEl.value;
      dataState.last_name = value;
    });

    csuAddressEl.addEventListener("input", (e) => {
      let value = csuAddressEl.value;
      dataState.address = value;
    });

    csuCityEl.addEventListener("input", (e) => {
      let value = csuCityEl.value;
      dataState.city = value;
    });

    csuPhoneNoEl.addEventListener("input", (e) => {
      let value = csuPhoneNoEl.value;
      dataState.phone_number = value;
    });

    csuStateEl.addEventListener("input", (e) => {
      let value = csuStateEl.value;
      dataState.state = value;
    });

    csuLGAEl.addEventListener("input", (e) => {
      let value = csuLGAEl.value;
      dataState.lga = value;
    });

    csuDOBEl.addEventListener("input", (e) => {
      let value = csuDOBEl.value;
      dataState.date_of_birth = value;
    });

    csuFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      csuFormBtnEl.textContent = "Creating...";
      console.table(dataState);
      // send data to backend
      // redirect if need be
    });
  }
}
