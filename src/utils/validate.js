export const validateSignInData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) return "Email is not valid";
  const passwordError = validatePassword(password);
  return passwordError;
};

const validatePassword = (password) => {
  if (password.length < 8)
    return "Password should contain atleast 8 Characters";
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[@$!%*?&]/.test(password);
  if (!hasLowercase)
    return "Password should contain atleast one lower case character";
  if (!hasUppercase)
    return "Password should contain atleast one Upper case character";
  if (!hasDigit) return "Password should contain atleat one digit";
  if (!hasSpecial)
    return "Password should contain atleat one special character";
  return "";
};
