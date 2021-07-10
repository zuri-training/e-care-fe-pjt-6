import axios from "axios";
const REGISTER_PATIENT_URL =
  "https://e-care-be-api.herokuapp.com/api/v1/user/patient/register/";

export const getEmailFragments = (emailString) =>
  emailString.split(/@(?=[^@]*$)/);

// AUTHENTICATION //

// sign up user function
export function signUpUser(userData, userType) {
  let data = JSON.stringify(userData);
  switch (userType) {
    // TODO create enum for patient && officer && hospital
    case "patient":
      return signUpPatient(data);
    default:
      return new Error("user type is not specified");
  }
}

function signUpPatient(data) {
  return axios({
    method: "post",
    url: REGISTER_PATIENT_URL,
    data: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    validateStatus: (status) => {
      return true;
    },
  });
}

/* 
{ 
'Accept': 'application/json',
'Content-Type': 'application/json'
},
*/
export const responseTemplate = (type = "success") => {
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
      <h2 class="acct__success-heading">Account Created Successfully!</h2>
      <p class="acct__success-lead">
        Nicely Done! <br />
        Click <a href="./dashboard.html">here</a> to go to your dashboard.
      </p>`
      : `
      <h2 class="acct__success-heading acct__success-heading--error">An Error Occured. Please Try Again!</h2>
      <a href="./createAccount.html">Go Back</a>
      `
  }
    </section>
`;
};
