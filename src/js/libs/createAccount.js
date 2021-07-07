import axios from "axios";
const mainContainer = document.querySelector(".acct__main");
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

const REGISTER_USER_URL =
  "https://e-care-be-api.herokuapp.com/api/v1/user/patient/register/";

const responseTemplate = (type = "success") => {
  return `
<section class="acct__success">
  ${
    type === "success"
      ? `
      <figure class="acct__success-figure">
        <img
          src="./assets/Image/create-acct-success.svg"
          alt="Account Created Successfully!"
        />
      </figure>
      <h2 class="acct__success-heading">Confirm your account</h2>
      <p class="acct__success-lead">
        Thank you! <br />
        Check your email for a link to finish setting up your account.
      </p>`
      : `<h2 class="acct__success-heading acct__success-heading--error">An Error Occured. Please Try Again!</h2>`
  }
    </section>
`;
};
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

  const getEmailFragments = (emailString) => emailString.split(/@(?=[^@]*$)/);
  function passwordIsValid() {
    return password === confirmPassword;
  }
  createAcctForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordIsValid() && email != " " && password != " ") {
      e.preventDefault();
      const [name, domain] = getEmailFragments(email);
      // console.log(`${email} -- ${password} -- ${name} -- ${domain}`);
      let data = JSON.stringify({
        user: {
          username: name,
          email: email,
          password: password,
        },
        phonenumber: "",
      });
      axios
        .post(REGISTER_USER_URL, data)
        .then(function (response) {
          console.log(response);
          mainContainer.innerHTML = responseTemplate();
        })
        .catch(function (error) {
          mainContainer.innerHTML = responseTemplate("error");
          console.log(error);
          console.log(error.response);
        });
      // window.location.pathname = "/signUp.html";
    } else {
      alert("Passwords dont match");
    }
  });
}
