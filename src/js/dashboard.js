const profileImgEls = document.querySelectorAll(".dsh-imgProfile");
const profileNameEls = document.querySelectorAll(".dsh-profileName");
const userFullNameEl = document.querySelector(".dsh-fullName");
const userEmailEl = document.querySelector(".dsh-userEmail");
const userDOBEl = document.querySelector(".dsh-DOB");
const userPhoneNoEl = document.querySelector(".dsh-phoneNo");
const userAddressEl = document.querySelector(".dsh-address");
const userCityEl = document.querySelector(".dsh-city");
const userStateEl = document.querySelector(".dsh-state");
const userNextOfKinEl = document.querySelector(".dsh-nextOfKin");
const dashboardBody = document.querySelector(".dashboard-body");
import defaultImgUrl from "url:../assets/Image/user-filled-small.svg";
import { fetchUser, getUserID } from "./libs/auth/auth-util";

const DEFAULT = "-----------";
function setUserName(data) {
  if (profileNameEls) {
    profileNameEls.forEach((el) => {
      el.textContent = data.user.username;
    });
  }
}
function setFullName(data) {
  if (data.first_name && data.last_name && userFullNameEl) {
    let fullname = `${data.first_name} ${data.last_name}`;
    userFullNameEl.textContent = fullname;
  }
}

function setEmail(data) {
  if (userEmailEl) {
    userEmailEl.textContent = data.user.email;
  }
}

function setPhoneNo(data) {
  if (userPhoneNoEl && data.phone_number) {
    userPhoneNoEl.textContent = data.phone_number;
  }
}

function replaceWithSlash(str = "") {
  return str.replace("-", "//");
}

function getFormattedDate(date) {
  return replaceWithSlash(date);
}
function setUserInfo(data) {
  let elAreInDOM =
    userAddressEl && userCityEl && userStateEl && userNextOfKinEl && userDOBEl;
  if (elAreInDOM) {
    userAddressEl.textContent = data.address != null ? DEFAULT : data.address;
    userCityEl.textContent = data.city != null ? DEFAULT : data.city;
    userStateEl.textContent = data.state != null ? DEFAULT : data.state;
    userNextOfKinEl.textContent = data.nextofkin ? DEFAULT : data.nextofkin;
    userDOBEl.textContent =
      data.date_of_birth != null ? DEFAULT : getFormattedDate();
  }
}

//TODO we should remove profile image for now
function setProfileImage() {
  if (profileImgEls) {
    profileImgEls.forEach((el) => {
      el.setAttribute("src", `${defaultImgUrl}`);
      //   el.style.display = "none";
    });
  }
}

function renderUI() {
  let userData = {
    user: {},
  };
  let userId = getUserID();
  fetchUser(userId, "patient")
    .then((response) => {
      if (response.status === 200) {
        userData = response.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  setUserName(userData);
  setFullName(userData);
  setEmail(userData);
  setPhoneNo(userData);
  setUserInfo(userData);
  setProfileImage();
  userData = {};
}

export function Dashboard() {
  if (dashboardBody) {
    window.addEventListener("load", (e) => {
      renderUI();
    });
  }
}
