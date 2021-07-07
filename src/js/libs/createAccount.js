const createAcctForm = document.getElementsByClassName("createAccountForm")[0];
const createAcctEmailInput =
  document.getElementsByClassName("createAccountEmail")[0];
const createAcctPasswordInput = document.getElementsByClassName(
  "createAccountPassword"
)[0];
const createAcctPasswordInputCheck = document.getElementsByClassName(
  "createAccountConfirmPassword"
)[0];
let email = "",
  password = "",
  confirmPassword = "";

// Create Account Function
export function CreateAccount() {
  createAcctEmailInput.addEventListener("input", (e) => {
    email = createAcctEmailInput.value;
  });
  createAcctPasswordInput.addEventListener("input", (e) => {
    password = createAcctPasswordInput.value;
  });
  createAcctPasswordInputCheck.addEventListener("input", (e) => {
    confirmPassword = createAcctPasswordInputCheck.value;
  });

  function passwordIsValid() {
    return password === confirmPassword;
  }
  createAcctForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordIsValid() && email != " " && password != " ") {
      console.log(`${email} ----- ${password}`);
      window.location.pathname = "/index.html";
    } else {
      alert("error");
    }
  });
}
