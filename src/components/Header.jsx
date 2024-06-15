import { signOut } from "firebase/auth";
import netflixLogo from "../assets/netflix.png";
import { auth } from "../configs/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      toast.success("You have been successfully logged out.")
    }).catch((error) => {
      // An error happened.
      console.log(error);
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
