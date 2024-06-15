import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { onAuthStateChanged, signOut } from "firebase/auth";

import netflixLogo from "../assets/netflix.png";
import { auth } from "../configs/firebase";
import { addUser, removeUser } from "../redux/slices/userSlice";
import { TOAST_LOGOUT_SUCCESS } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        console.log(user);
        dispatch(addUser({uid, email, displayName}));

        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());

        navigate('/');
      }
    });

    // unsubscribe onAuthStateChanged observe in case 
    // component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    signOut(auth).then(() => {
      // Sign-out successful.
      toast.success(TOAST_LOGOUT_SUCCESS);
    }).catch((error) => {
      // An error happened.
      toast.error(error.message);
    });
  }

  return (
    <header className="flex items-center justify-between w-screen absolute xl:px-40 px-0 pr-3 py-2 sm:bg-gradient-to-b sm:from-neutral-900 sm:from-10% z-10">
      <img className="lg:w-48 w-32" src={netflixLogo} alt="Netflix Logo" />
      {
        user && 
        <button
          className="text-white pb-4 h-8 bg-red-600 text-md p-3 hover:bg-red-700 rounded-md flex items-center justify-center"
          type="button"
          onClick={handleFormSubmit}
        >
          Log out
        </button>
      }
    </header>
  );
};

export default Header;
