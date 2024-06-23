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
    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_AUTHORIZATION_KEY}`
  }
};

export const  IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const OPENAI_SYSTEM_INSTRUCTION = "You will be provided with statement, and your task is to find best 5 results in comma separated format without any spaces. For example: result1,result2,result3,result4,result5. Notice there is no space between result1 and result2, etc. They are only comma seperated. You need to give result in same format.";