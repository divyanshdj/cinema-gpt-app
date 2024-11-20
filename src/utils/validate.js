export const validateSignInData = (email, password) => {
  if(email === "" && password === ""){ return 'Enter Email & Password';}
  if(email === ""){ return 'Enter Email';}
  if(password === ""){ return 'Enter Password';}
  const emailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!emailValid) {
    return "Invalid Email Address";
  }
  if (!passwordValid) {
    return "Invalid Password";
  }
  return "";
};
export const validateSignUpData = (name, email, password) => {
  if(name === "" && email === "" && password === ""){ return 'Enter Name, Email & Password';}
  if(name === ""){ return 'Enter Name';}
  if(email === ""){ return 'Enter Email';}
  if(password === ""){ return 'Enter Password';}
  const emailValid = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!name) {
    return "Name is required";
  }
  if (!emailValid) {
    return "Invalid Email Address";
  }
  if (!passwordValid) {
    return "Invalid Password";
  }
  return "";
};
