const csuFormEl = document.querySelector(".csu-form");
const csuFirstNameEl = document.querySelector(".csu-firstName");
const csuLastNameEl = document.querySelector(".csu-lastName");
const csuAddressEl = document.querySelector(".csu-address");
const csuCityEl = document.querySelector(".csu-city");
const csuStateEl = document.querySelector(".csu-state");
const csuLGAEl = document.querySelector(".csu-lga");
const csuDOBEl = document.querySelector(".csu-dob");
// const csuPhoneNoEl = document.querySelector(".csu-phoneno");
const csuFormBtnEl = document.querySelector(".csu-form-button");
const csuGenderEls = document.querySelectorAll(".csu-gender");
import { userDataOther } from "../../createAccount";

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

function getRadioVal(form, name) {
  let val;
  let radios = form.elements[name];
  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }
  console.log(val);
  return val;
}

export default function initCompleteSignUp() {
  if (csuElementAreAvailable()) {
    csuFirstNameEl.addEventListener("input", (e) => {
      let value = csuFirstNameEl.value;
      userDataOther.first_name = value;
    });

    csuLastNameEl.addEventListener("input", (e) => {
      let value = csuLastNameEl.value;
      userDataOther.last_name = value;
    });

    csuAddressEl.addEventListener("input", (e) => {
      let value = csuAddressEl.value;
      userDataOther.address = value;
    });

    csuCityEl.addEventListener("input", (e) => {
      let value = csuCityEl.value;
      userDataOther.city = value;
    });

    // csuPhoneNoEl.addEventListener("input", (e) => {
    //   let value = csuPhoneNoEl.value;
    //   userDataOther.phone_number = value;
    // });

    csuStateEl.addEventListener("input", (e) => {
      let value = csuStateEl.value;
      userDataOther.state = value;
    });

    csuLGAEl.addEventListener("input", (e) => {
      let value = csuLGAEl.value;
      userDataOther.lga = value;
    });

    csuDOBEl.addEventListener("input", (e) => {
      let value = csuDOBEl.value;
      userDataOther.date_of_birth = value;
    });

    csuGenderEls.forEach((el) => {
      el.addEventListener("click", () => {
        userDataOther.gender = getRadioVal(csuFormEl, "gender");
      });
    });
    csuFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      csuFormBtnEl.textContent = "Creating...";
      console.table(userDataOther);
      // send data to backend
      // redirect if need be
    });
  }
}
