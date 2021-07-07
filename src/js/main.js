import { CreateAccount } from "./libs/createAccount";
function toggleMobileNav() {
  const menuBtn = document.getElementById("menuBtn");
  const sideNav = document.getElementById("sideNav");

  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    sideNav.classList.toggle("active");
  });
}

// main point
export default () => {
  console.log("We Live!");
  CreateAccount();
  toggleMobileNav();
};
