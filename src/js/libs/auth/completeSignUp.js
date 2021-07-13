const csuFormEl = document.querySelector(".csu-form");
const csuFirstNameEl = document.querySelector(".csu-firstName");
const csuLastNameEl = document.querySelector(".csu-lastName");
const csuAddressEl = document.querySelector(".csu-address");
const csuCityEl = document.querySelector(".csu-city");
const csuStateEl = document.querySelector(".csu-state");
const csuLGAEl = document.querySelector(".csu-lga");
const csuDOBEl = document.querySelector(".csu-dob");
const csuFormBtnEl = document.querySelector(".csu-form-button");
const csuGenderEls = document.querySelectorAll(".csu-gender");
import { getCookie, getUserID, updateUserProfile } from "./auth-util";

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

let userDataOther = {
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
        userDataOther = {
          ...userDataOther,
          gender: getRadioVal(csuFormEl, "gender"),
        };
      });
    });

    csuFormEl.addEventListener("submit", (e) => {
      let id = getCookie("userid");
      let token = getCookie("access");
      e.preventDefault();
      csuFormBtnEl.textContent = "Updating...";
      console.table(userDataOther);
      // send data to backend
      updateUserProfile(id, "patient", userDataOther, token)
        .then((res) => {
          if (res.status === 202) {
            csuFormBtnEl.textContent = "Updated Succesfully!";
            csuFormBtnEl.style.background = "rgb(63, 138, 19)";
            window.location.pathname = "./dashboard.html";
          } else {
            csuFormBtnEl.style.background = "rgb(138, 19, 19)";
            csuFormBtnEl.textContent = "Sorry! Try Again";
            setTimeout(() => {
              csuFormBtnEl.style.background = "var(--color-brand-blue)";
              csuFormBtnEl.textContent = "Update";
            }, 2000);
          }
        })
        .catch((err) => {
          alert(err);
        });
      // redirect if need be
    });
  }
}
