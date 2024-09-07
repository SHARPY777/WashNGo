export const validateSignUpForm = (formData) => {
    const errors = {};
  
    
    if (!formData.name) {
      errors.name = "Name is Required";
    } else if (formData.name.trim() === "") {
      errors.name = "Name cannot be just blank spaces";
    } else if (!/^[\w\s]+$/.test(formData.name.trim())) {
      errors.name = "Special characters are not allowed in the name";
    } else if (/\d/.test(formData.name.trim())) {
      errors.name = "Name cannot contain numbers";
    }
  
    if (!formData.phone) {
    errors.phone = "Phone Number is Required";
  } else if (formData.phone.trim() === "") {
    errors.phone = "Not allowed to enter only blank spaces";
  } else if (/^\+\d+$/.test(formData.phone.trim())) {
    errors.phone = "Country code not allowed";
  } else if (/[^0-9\s()+-]/.test(formData.phone)) {
    errors.phone = "Phone number should not contain special characters";
  } else if (!/^[\d\s]{10}$/.test(formData.phone.replace(/\s+/g, ""))) {
    errors.phone = "Phone number must be 10 digits";
  } else if (formData.phone.replace(/\s+/g, "").startsWith("0")) {
    errors.phone = "Phone number should not start with 0";
  }
  
    if (!formData.password) {
      errors.password = "Password is Required";
    } else {
      if (formData.password.trim().length === 0) {
        errors.password = "Not allowed to enter only blank spaces";
      } else if (formData.password.length < 6 || formData.password.length > 20) {
        errors.password = "Password must be between 6 and 20 characters";
      } else if (/\s/.test(formData.password)) {
        errors.password = "Password cannot contain spaces";
      } else if (!validatePassword(formData.password)) {
        errors.password = "Invalid password format. Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character ($, #, %, !, @).";
      }
    }
   
  
    if (Object.keys(errors).length === 0) {
      return null;
    }
   
    return errors;
  };

  export const validatePassword = (password) => {
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()!+\-])[a-zA-Z\d@#$%^&*()!+\-]{8,}$/;
    const passwordRegex = /^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#%!@]).{6,20}$/
    return passwordRegex.test(password);
  };
  