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
      console.log(storage);
    });

    csuLastNameEl.addEventListener("input", (e) => {
      let value = csuLastNameEl.value;
      dataState.last_name = value;
      console.log(storage);
    });

    csuAddressEl.addEventListener("input", (e) => {
      let value = csuAddressEl.value;
      dataState.address = value;
      console.log(storage);
    });

    csuCityEl.addEventListener("input", (e) => {
      let value = csuCityEl.value;
      dataState.city = value;
      console.log(storage);
    });

    csuPhoneNoEl.addEventListener("input", (e) => {
      let value = csuPhoneNoEl.value;
      dataState.phone_number = value;
      console.log(storage);
    });

    csuStateEl.addEventListener("input", (e) => {
      let value = csuStateEl.value;
      dataState.state = value;
      console.log(storage);
    });

    csuLGAEl.addEventListener("input", (e) => {
      let value = csuLGAEl.value;
      dataState.lga = value;
      console.log(storage);
    });

    csuDOBEl.addEventListener("input", (e) => {
      let value = csuDOBEl.value;
      dataState.date_of_birth = value;
      console.log(storage);
    });

    csuFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      csuFormBtnEl.textContent = "Creating...";
      console.log(dataState);
      // send data to backend
      // redirect if need be
    });
  }
}
