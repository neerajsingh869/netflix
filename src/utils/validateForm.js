import { EMAIL_REGEX } from "./constants";

export const validateForm = (fullName, email, password, isSignInForm) => {
  if (!isSignInForm && !fullName) {
    // const isFullNameValid = FULLNAME_REGEX.test(fullName);
    // if (!isFullNameValid) return "Full name is not valid.";
    return "Full name is not valid.";
  }
  const isEmailValid = EMAIL_REGEX.test(email);
  // const isPasswordValid = PASSWORD_REGEX.test(password);

  if (!isEmailValid) return "Email is not valid.";
  if (!password) return "Password is not valid.";

  return null;
};
