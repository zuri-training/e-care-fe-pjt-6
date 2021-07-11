import axios from "axios";
const REGISTER_PATIENT_URL =
  "https://e-care-be-api.herokuapp.com/api/v1/user/patient/register/";
const requestHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

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
    headers: requestHeader,
    validateStatus: (status) => {
      return true;
    },
  });
}

export function fetchUser(id, type) {
  return axios({
    method: "get",
    url: `https://e-care-be-api.herokuapp.com/api/v1/user/${type}/${id}/`,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjM4OTMwLCJqdGkiOiIxNzg4Y2YwOTFmM2Q0OWEzOWJjYTQ2NDcxMmEwMDcwOCIsInVzZXJfaWQiOjF9.Q4T0FGSuZgZsGQJnANKpOjI4PWFCFKFdYirourvl_R0",
    },
  });
}

export function updateUserProfile(id, type, data = {}) {
  return axios({
    method: "put",
    url: `https://e-care-be-api.herokuapp.com/api/v1/user/${type}/${id}/`,
    data: data,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjM4OTMwLCJqdGkiOiIxNzg4Y2YwOTFmM2Q0OWEzOWJjYTQ2NDcxMmEwMDcwOCIsInVzZXJfaWQiOjF9.Q4T0FGSuZgZsGQJnANKpOjI4PWFCFKFdYirourvl_R0",
    },
  });
}
export function storeUserID(id) {
  sessionStorage.setItem("userid", id);
}
export function getUserID() {
  return sessionStorage.getItem("userid");
}

export function removeUserID() {
  sessionStorage.removeItem("userid");
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
