export const validateForm = (fullName, email, password) => {
  const isFullNameValid = /^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/.test(fullName);
  const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  if (!isFullNameValid) return "Full name is not valid.";
  if (!isEmailValid) return "Email is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
}