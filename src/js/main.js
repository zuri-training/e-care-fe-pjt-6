import { CreateAccount } from "./libs/createAccount";
import { Login } from "./login";
import { Dashboard } from "./dashboard";
function toggleMobileNav() {
  const menuBtn = document.getElementById("menuBtn");
  const sideNav = document.getElementById("sideNav");
if(menuBtn && sideNav){
  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    sideNav.classList.toggle("active");
  });
}

}

// main point
export default () => {
  console.log("We Live!");
  CreateAccount();
  Dashboard();
  toggleMobileNav();
  Login();
};
