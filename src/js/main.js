import { CreateAccount } from "./createAccount";
import { Login } from "./login";
import { Dashboard } from "./dashboard";
import { DirectoryLogic } from "./directory";
import { getCookie, setCookie } from "./libs/auth/auth-util";
function toggleMobileNav() {
  const menuBtn = document.getElementById("menuBtn");
  const sideNav = document.getElementById("sideNav");
  if (menuBtn && sideNav) {
    menuBtn.addEventListener("click", (e) => {
      menuBtn.classList.toggle("active");
      sideNav.classList.toggle("active");
    });
  }
}

function controlLoginState() {
  if (getCookie("userid") && getCookie("access")) {
    const loginActionBtns = document.querySelectorAll(".btnActionLogin");
    const signUpActionBtns = document.querySelectorAll(".btnActionSignUp");
    if (loginActionBtns) {
      loginActionBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          window.location.pathname = "./dashboard.html";
        });
      });
    }
    if (signUpActionBtns) {
      signUpActionBtns.forEach((btn) => {
        btn.textContent = "Log Out";
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          setCookie("access", null, -2);
          setCookie("userid", null, -2);
          window.location.pathname = "./index.html";
        });
      });
    }
  }
}

// main point
export default () => {
  console.log("We Live!");
  controlLoginState();
  DirectoryLogic();
  CreateAccount();
  Dashboard();
  toggleMobileNav();
  Login();
};
