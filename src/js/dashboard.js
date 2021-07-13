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
import { fetchUser, getCookie, getUserID } from "./libs/auth/auth-util";

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
  return str.replace(/-/g, "/");
}

function getFormattedDate(date) {
  return replaceWithSlash(date);
}
function setUserInfo(data) {
  let elAreInDOM =
    userAddressEl && userCityEl && userStateEl && userNextOfKinEl && userDOBEl;
  if (elAreInDOM) {
    userAddressEl.textContent = data.address != null ? data.address : DEFAULT;
    userCityEl.textContent = data.city != null ? data.city : DEFAULT;
    userStateEl.textContent = data.state != null ? data.state : DEFAULT;
    userNextOfKinEl.textContent = data.nextofkin ? data.nextofkin : DEFAULT;
    userDOBEl.textContent =
      data.date_of_birth != null
        ? getFormattedDate(data.date_of_birth)
        : DEFAULT;
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
  let userId = getCookie("userid");
  let token = getCookie("access");
  fetchUser(userId, "patient", token)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        setUserName(response.data);
        setFullName(response.data);
        setEmail(response.data);
        setPhoneNo(response.data);
        setUserInfo(response.data);
        setProfileImage();
      }
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
}

export function Dashboard() {
  if (dashboardBody) {
    window.addEventListener("load", (e) => {
      renderUI();
    });
  }
}
