import { EMAIL_REGEX, FULLNAME_REGEX, PASSWORD_REGEX } from "./constants";

export const validateForm = (fullName, email, password) => {
  if (fullName !== null && fullName !== undefined) {
    const isFullNameValid = FULLNAME_REGEX.test(fullName);
    if (!isFullNameValid) return "Full name is not valid.";
  }
  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);

  if (!isEmailValid) return "Email is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
}