function validateName(name) {
  // Check if name is empty
  if (!name.trim()) {
    return {
      state: false,
      message: "Please enter your name",
    };
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return {
      state: false,
      message: "Name can only contain letters and spaces.",
    };
  }
  if (name.length < 4) {
    return {
      state: false,
      message: "Name should be at least 2 characters long.",
    };
  }
  if (name.length > 50) {
    return {
      state: false,
      message: "Name should be at most 50 characters long.",
    };
  }
  return {
    state: true,
    message: "",
  };
}

function isContainSpecialCharacter(str) {
  var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return specialChars.test(str);
}

const validatePassword = (password) => {
  const errors = [];
  let health = 0;

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  } else {
    health += 30;
  }
  if (!/\d/.test(password)) {
    errors.push("Password must contain at least one digit.");
  } else {
    health += 30;
  }
  if (!isContainSpecialCharacter(password)) {
    errors.push("Password must contain at least one special character.");
  } else {
    health += 40;
  }
  if (errors.length === 0) {
    return {
      message: "Password is strong and meets all requirements.",
      health,
      state: true,
    };
  } else {
    return { errors, health};
  }
};

function validatePhoneNumber(phoneNumber) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  if (cleanedPhoneNumber.length !== 11) {
    return {
      state: false,
      message: "Phone number must contain 11 number",
    };
  }
  if (cleanedPhoneNumber.substring(0, 2) !== "03") {
    return {
      state: false,
      message: "Phone number start with 03",
    };
  }
  if (/[a-zA-Z]/.test(phoneNumber)) {
    return {
      state: false,
      message: "Phone number should not contain alphabetic characters",
    };
  }
  return {
    state: true,
    message: "",
  };
}

function validateEmail(email) {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  if (emailRegex.test(email)) {
    return {
      state: true,
      message: "",
    };
  } else {
    return {
      state: false,
      message: "please check your email",
    };
  }
}

export { validatePassword, validateName, validatePhoneNumber, validateEmail };
