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
import { getUserID, updateUserProfile } from "./auth-util";

// let userId = "";
// function getUserId() {
//   let id;
//   const parsedUrl = new URL(window.location.href);
//   id = parsedUrl.searchParams.get("id");
//   return id;
// }

// function onPageLoad() {
//   userId = getUserId();
// }
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

let userDataOther = {};

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

    function alert(message) {
      console.alert(message);
    }
    csuFormEl.addEventListener("submit", (e) => {
      let id = getUserID();
      e.preventDefault();
      csuFormBtnEl.textContent = "Updating...";
      console.table(userDataOther);
      // send data to backend
      updateUserProfile(id, "patient", userDataOther)
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
