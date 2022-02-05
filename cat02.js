let userName;
let emtxt;
let password;
let password2;
let phoneno;

 onlyChar=(event)=> {
  let input = event.which;
  if (input > 47 && input < 58) return false;
  else return true;
}

onlyDigits = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return true;
  else return false;
};

validateForm = (event) => {
  event.preventDefault();
  checkName("firstname");
  checkEmail();
  checkbranch("branch");
  checkcollege("college");
  checkStateName("statename");
  checkaddress("address");
  checkage();
  checkPhoneNo();
  checkUserName();
  checkPassword();
  confirmPassword();
  
};

checkName = (id) => {
  const name = document.getElementById(id);
  //console.log(id)
  const nameVal = name.value.trim();
  if (nameVal === "") {
    //console.log(firstNameVal)
    return error(name, "cannot be empty");
  } else if (id === "firstname" && nameVal.length < 3) {
    return error(name, " cannot be less than three");
  } else {
    return success(name);
  }
};

checkbranch = (id) => {
    const branch = document.getElementById(id);
    //console.log(id)
    const branchVal = branch.value.trim();
    if (branchVal === "") {
      //console.log(branchVal)
      return error(branch, "cannot be empty");
    } else if (id === "branch" && branchVal.length < 3) {
      return error(branch, " cannot be less than three");
    } else {
      return success(branch);
    }
  };


  checkcollege = (id) => {
    const college = document.getElementById(id);
    //console.log(id)
    const collegeVal = college.value.trim();
    if (collegeVal === "") {
      //console.log(branchVal)
      return error(college, "cannot be empty");
    } else if (id === "college" && collegeVal.length < 3) {
      return error(college, " cannot be less than three");
    } else {
      return success(college);
    }
  };

  checkStateName = (id) => {
    const Statename = document.getElementById(id);
    //console.log(id)
    const StatenameVal = Statename.value.trim();
    if (StatenameVal === "") {
      //console.log(StatenameVal)
      return error(state, "cannot be empty");
    } else if (id === "state" && StatenameVal.length < 3) {
      return error(state, " cannot be less than three");
    } else {
      return success(state);
    }
  };

  checkaddress = (id) => {
    const address = document.getElementById(id);
    //console.log(id)
    const addressVal = address.value.trim();
    if (addressVal === "") {
      //console.log(addressVal)
      return error(address, "cannot be empty");
    } else if (id === "address" && addressVal.length < 3) {
      return error(address, " cannot be less than three");
    } else {
      return success(address);
    }
  };

  checkage = () => {
    const age = document.getElementById("id");
    const ageVal = age.value.trim();
    const phoneRegex = /[1-9]{2}/;
  
    if (ageRegex.test(ageVal) && ageVal.length === 2) {
      return success(age);
    } else {
      return error(age, "should contain only 2 digits");
    }
  };
  
 

checkUserName = () => {
  userName = document.getElementById("username");
  const userNameVal = userName.value.trim();

  if (userNameVal === "") {
    return error(userName, "user cannot be empty \n" + showSuggestions());
  } else if (userNameVal.length < 5) {
    return error(userName, "Minimum 5 Charactters \n" + showSuggestions());
  } else {
    return success(userName);
  }
};


checkEmail = () => {
  email = document.getElementById('email');
  let emailval = email.value.trim();
  const emailregx = /([a-z0-9\.\-_]{5,25})@christuniversity.in$/;
  if(emailregx.test(emailval))
  {
    return success(email);
  }
  else {
    return error(email, "aneeta.m@mca.christuniversity.in, aneeta@christuniversity.in ");
  }
}


checkPassword = () => {
  password = document.getElementById("password");
  let passwordVal = password.value.trim();
  let passwordRegex1 = /[a-z]/;
  let passwordRegex2 = /[A-Z]/;
  let passwordRegex3 = /[0-9]/;
  let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
  let passwordRegex5 = /[-_+={}]/;
  let passwordRegex6 = /[(){}|]/;
  let passwordRegex7 = /[/]/;
  let passwordRegex8 = /[\[\]]/;

  if (
    passwordRegex1.test(passwordVal) &&
    passwordRegex2.test(passwordVal) &&
    passwordRegex3.test(passwordVal) &&
    (passwordRegex4.test(passwordVal) ||
      passwordRegex5.test(passwordVal) ||
      passwordRegex6.test(passwordVal) ||
      passwordRegex7.test(passwordVal) ||
      passwordRegex8.test(passwordVal))
  )
    return success(password);
  else {
    return error(
      password,
      ' min 1 [a-z],min 1 [A-Z]min 1[0-9] min 1(~`!@#$%^&*()-_+={}[]|;:"<>,./?)'
    );
  }
};

confirmPassword = () => {
  password2 = document.getElementById("password2");
  password2Val = password2.value.trim();

  if (password2Val === "") {
    return error(password2, "Re-enter password");
  } else if (password2Val !== password.value) {
    return error(password2, "Passwords donot match");
  } else {
    return success(password2);
  }
};


checkPhoneNo = () => {
  phoneNo = document.getElementById("phoneno");
  const phoneNoVal = phoneNo.value.trim();
  const phoneRegex = /[0-9]{10}/;

  if (phoneRegex.test(phoneNoVal) && phoneNoVal.length === 10) {
    return success(phoneNo);
  } else {
    return error(phoneNo, "should contain only 10 digits");
  }
};

success = (input) => {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
};




error = (input, message) => {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  if (document.getElementById("username") === input) {
    formControl.className = "form-control error username";
    //console.log(formControl.className);
  } else if (document.getElementById("password") === input) {
    formControl.className = "form-control error password";
  } else {
    formControl.className = "form-control error";
  }
};

showSuggestions = () => {
  const fname = document.getElementById("firstname");

  const fnameVal = fname.value.trim();
  const lname = document.getElementById("lastname");

  const lnameVal = lname.value.trim();

  const userNameSuggArry = [
    fnameVal + lnameVal + randNoGen(),
    lnameVal + fnameVal + randNoGen(),
    randNoGen() + fnameVal + lnameVal,
  ];
  console.log(userNameSuggArry);
  if (fnameVal.length !== 0 && lnameVal.length !== 0) {
    return (
      " Suggestion: " +
      userNameSuggArry[0] +
      "," +
      userNameSuggArry[1] +
      "," +
      userNameSuggArry[2]
    );
  } else {
    return "";
  }
};

randNoGen = () => {
  randNum = Math.floor(Math.random() * 100);
  return randNum;
};
