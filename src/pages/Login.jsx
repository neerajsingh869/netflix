import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { validateForm } from "../utils/validateForm";
import netflixBgBanner from "../assets/netflix-bg.jpg";
import { addUser } from "../redux/slices/userSlice";
import { auth } from "../configs/firebase";
import { TOAST_LOGIN_SUCCESS, TOAST_SIGNUP_SUCCESS } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInSignUpForm = () => {
    setFormErrorMessage(null);

    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrorMsg = validateForm(
      fullNameRef?.current?.value,
      emailRef.current.value,
      passwordRef.current.value
    );
    setFormErrorMessage(formErrorMsg);

    if (formErrorMsg) {
      setIsLoading(false);
      return;
    }

    if (isSignInForm) {
      // add logic to sign in user

      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then(() => {
          // Signed in
          setIsLoading(false);
          toast.success(TOAST_LOGIN_SUCCESS);
          // ...
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });
    } else {
      // add logic to sign up user

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullNameRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(addUser({ uid, email, displayName }));
              setIsLoading(false);
              toast.success(TOAST_SIGNUP_SUCCESS);
            })
            .catch((error) => {
              toast.error(error.message);
              setIsLoading(false);
              // ..
            });
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
          // ..
        });
    }
  };

  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover absolute"
        src={netflixBgBanner}
        alt="Background Banner"
      />
      <div className="absolute h-screen w-screen sm:bg-transparent bg-black">
        <div className="bg-black/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16 flex justify-center align-center flex-col rounded-md">
          <p className="text-white text-4xl mb-12 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </p>
          <form className="w-80 flex flex-col gap-5 mb-12">
            {!isSignInForm && (
              <input
                className="focus:ring focus:ring-white p-3 text-lg outline-none bg-neutral-600 placeholder:text-neutral-400 text-white rounded-md"
                type="text"
                placeholder="Full Name"
                ref={fullNameRef}
              />
            )}
            <input
              className="focus:ring focus:ring-white p-3 text-lg outline-none bg-neutral-600 placeholder:text-neutral-400 text-white rounded-md"
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
            <input
              className="focus:ring focus:ring-white p-3 text-lg outline-none bg-neutral-600 placeholder:text-neutral-400 text-white rounded-md"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <p className="text-red-700 font-bold text-lg">{formErrorMessage}</p>
            <button
              className="text-white bg-red-600 text-lg p-3 hover:bg-red-700 rounded-md"
              type="button"
              onClick={handleFormSubmit}
            >
              {isLoading ? (
                <BeatLoader
                  color="white"
                  margin={4}
                  size={10}
                  style={{
                    display: "flex",
                    margin: "6px",
                  }}
                  className="items-center justify-center"
                />
              ) : isSignInForm ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div>
            <p className="text-white">
              <span className="text-neutral-300">
                {isSignInForm ? "New to Netflix?" : "Already an User?"}
              </span>{" "}
              <span
                className="text-lg cursor-pointer hover:underline font-bold"
                onClick={toggleSignInSignUpForm}
              >
                {isSignInForm ? "Sign up now" : "Sign in now"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
