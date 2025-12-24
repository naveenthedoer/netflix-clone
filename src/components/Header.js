import React, { useEffect } from "react";
import logo from "../assets/images/logo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import { changeLanguage } from "../utils/store/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearchClick = () => {
    // Toggle b/w GPT Search view vs the Netflix page
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    dispatch(changeLanguage(value));
  };

  return (
    <div
      className="absolute 
    z-30 px-8 py-2 
    bg-gradient-to-b from-black
    w-full flex flex-row justify-between"
    >
      <div>
        <img src={LOGO} alt="Netflix" className="w-[150px]" />
      </div>
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="py-2 px-4 bg-gray-500 mr-2 my-2 text-white cursor-pointer"
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="rounded-md py-1 px-4 my-2 text-white bg-purple-800"
            onClick={() => handleGPTSearchClick()}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          {user && user.photoURL && (
            <img
              src={user.photoURL}
              alt="usericon"
              className="w-12 h-12 m-2 align-middle"
            />
          )}

          <button className="text-white font-bold ml-2" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
