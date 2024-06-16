// constants for toast success messages
export const TOAST_LOGOUT_SUCCESS = "You have been successfully logged out.";

export const TOAST_LOGIN_SUCCESS = "You are successfully logged in.";

export const TOAST_SIGNUP_SUCCESS = "You are successfully signed up.";

// constants for regex
export const FULLNAME_REGEX = /^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/;

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGU0NjNlZDYyOWYyZmZkYjY0ZTU0M2NiZjhkZWM5YSIsInN1YiI6IjY2NmQ2OGVjMGY2Zjc2MzFlYmE4N2Q0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sCAv5Fy_KU_omZhbYUTWJRVf1yOSS33FWHyWDXy9NRc'
  }
};