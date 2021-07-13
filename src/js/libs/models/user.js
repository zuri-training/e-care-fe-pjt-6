function User(userName,email,password,phoneNo,firstName,lastName,otherName,gender,dob,city,lga, state, address,age,type){

    this.user = {
        username: userName,
        email:email,
        password:password,
    }
    this.phone_number = phoneNo;
    this.first_name = firstName;
    this.last_name = lastName;
    this.other_name = otherName;
    this.gender = gender;
    this.date_of_birth = dob;
    this.city = city;
    this.lga = lga;
    this.state = state;
    this.address = address;
    this.age = getAge(age);
    this.type = type;

}

function getAge(dateString){
    let today = new Date();
    let dob = new Date(dateString);
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if(m <0 || (m===0 && today.getDate() < dob.getDate())){
        age--
    }
    return age;
}