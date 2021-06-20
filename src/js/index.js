const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");

menuBtn.addEventListener("click", (e) => {
  sideNav.classList.toggle("active");
});
