import { useRef, useState } from "react";
import Header from "../components/Header";
import { validateForm } from "../utils/validateForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [formErrorMessage, setFormErrorMessage] = useState(null);

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formErrorMsg = validateForm(fullNameRef?.current?.value, emailRef?.current?.value, passwordRef?.current?.value);
    setFormErrorMessage(formErrorMsg);
  }
  
  return (
    <div className="relative">
      <Header />
      <img
        className="w-screen h-screen object-cover absolute"
        src="../src/assets/netflix-bg.jpg"
        alt="Background Banner"
      />
      <div className="absolute h-screen w-screen sm:bg-transparent bg-black">
        <div className="bg-black/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-16 flex justify-center align-center flex-col rounded-md">
          <p className="text-white text-4xl mb-12 font-bold">{isSignInForm ? "Sign In" : "Sign Up"}</p>
          <form className="w-80 flex flex-col gap-5 mb-12">
            {
              !isSignInForm && (
                <input
                  className="focus:ring focus:ring-white p-3 text-lg outline-none bg-neutral-600 placeholder:text-neutral-400 text-white rounded-md"
                  type="text"
                  placeholder="Full Name"
                  ref={fullNameRef}
                />
              )
            }
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
            <button className="text-white bg-red-600 text-lg p-3 hover:bg-red-700 rounded-md" type="button" onClick={handleFormSubmit}>
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div>
            <p className="text-white">
              <span className="text-neutral-300">{isSignInForm ? "New to Netflix?" : "Already an User?"}</span> <span className="text-lg cursor-pointer hover:underline font-bold" onClick={toggleSignInSignUpForm}>{isSignInForm ? "Sign up now" : "Sign in now"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
