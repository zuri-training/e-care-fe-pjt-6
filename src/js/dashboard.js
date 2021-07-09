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
import defaultImgUrl from "url:../assets/Image/user-filled-small.svg";


const DEFAULT = "-----------";

let data = {
    id: 1,
    user: {
        id: 1,
        username: "austinoski",
        email: "austinoski@email.com"
    },
    url: "/api/v1/user/patient/d3677995-2c5a-411d-895d-0bfacdd69149/",
    uuid: "d3677995-2c5a-411d-895d-0bfacdd69149",
    first_name: "Josiah",
    last_name: "Augustine",
    other_name: "Onyema",
    phone_number: "02012562567",
    gender: null,
    date_of_birth: null,
    city: null,
    lga: null,
    state: null,
    created: "2021-07-07T23:58:45.813440Z",
    updated: null
}

function setFullName(){
    if(data.first_name && data.last_name && data.other_name && userFullNameEl){
        let fullname = `${data.first_name} ${data.other_name.charAt(0)}. ${data.last_name}`;
 userFullNameEl.textContent = fullname;
    }
}

function setEmail(){
    if(userEmailEl && data.user.email){
    userEmailEl.textContent = data.user.email;
    } 
}

function setPhoneNo(){
    if(userPhoneNoEl && data.phone_number){
        userPhoneNoEl.textContent = data.phone_number;
    }
}

function setUserInfo(){
    let elIsInDOM  = userAddressEl && userCityEl && userStateEl && userNextOfKinEl && userDOBEl;
    let address = ""
    const formattedDate = ()=>{
        if(data.date_of_birth && data.date_of_birth != null){
            return date_of_birth;
        } else {
            return DEFAULT;
        }
    }
    
    if( elIsInDOM){
        userAddressEl.textContent = address != ""? address :DEFAULT;
        userCityEl.textContent = data.city != null ? data.city: DEFAULT;
        userStateEl.textContent = data.state != null ? data.state: DEFAULT;
        userNextOfKinEl.textContent = data.nextofkin ? data.nextofkin: DEFAULT;
        userDOBEl.textContent = formattedDate();
    }
}

function setProfileImage(){
    if(profileImgEls){
        profileImgEls.forEach((el)=>{
            el.setAttribute("src",`${defaultImgUrl}`);
        });
    }
}
export function Dashboard(){
    profileNameEls.forEach((el)=>{
        el.textContent = data.user.username;
    });
    setFullName();
    setEmail();
    setPhoneNo();
    setUserInfo();
    setProfileImage();
    
}