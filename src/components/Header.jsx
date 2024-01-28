import React from "react";
import LOGO_IMAGE from "../assets/Netflix-Logo.wine.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO_IMAGE} alt="netflix-logo" className="w-40 h-10" />
      {user && (
        <div className=" flex">
          <img className="w-10 me-2" src={user?.photoURL} alt="userprofile" />
          <span className="text-white text-xs font-serif mt-4 me-2">
            {user?.displayName}
          </span>
          <button
            onClick={handleSignOut}
            className="p-2 m-1 text-center text-white bg-red-500 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
