import { useEffect } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './configs/firebase';
import {useDispatch} from "react-redux";
import { addUser, removeUser } from './redux/slices/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        console.log(user);
        dispatch(addUser({uid, email, displayName}));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, [dispatch]);
}

export default App
