import React, { useRef, useState } from "react";
import { validateSignInData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/userSlice";
import { BG_IMAGE_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef("");
  const password = useRef("");
  const name = useRef("");

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const errorMessage = validateSignInData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);
    console.log(errorMessage);
    if (errorMessage) return;

    if (isSignInForm) {
      signInUser();
    } else {
      signUpUser();
    }
  };

  const signInUser = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCrendentials) => {
        const user = userCrendentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
        setErrorMessage(errorMessage);
      });
  };

  const updateUserProfile = (user) => {
    updateProfile(user, {
      displayName: name.current.value,
      photoURL: USER_AVATAR,
    })
      .then((response) => {
        // Profile updated!
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCrendentials) => {
        // Signed Up
        const user = userCrendentials.user;
        updateUserProfile(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
      });
  };

  return (
    <div>
      <div>
        <img src={BG_IMAGE_URL} className="h-screen object-cover" alt="" />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-4/6 w-9/12 md:w-5/12 lg:w-4/12 mx-auto bg-gradient-to-b from-black p-12">
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl text-white font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <input
            ref={email}
            className="p-4 mb-4 outline-none text-white bg-transparent border border-solid border-gray-400 rounded-md"
            type="text"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
          />
          {!isSignInForm && (
            <input
              ref={name}
              className="p-4 mb-4 outline-none text-white bg-transparent border border-solid border-gray-400 rounded-md"
              type="text"
              name="name"
              placeholder="Enter full name"
              autoComplete="off"
            />
          )}

          <input
            ref={password}
            className="p-4 mb-4 outline-none text-white bg-transparent border border-solid border-gray-400 rounded-md"
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="text-red-500 font-bold text-xs pb-4">{errorMessage}</p>

          <button
            className="w-full py-2 text-white bg-red-800 font-bold rounded-md"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white cursor-pointer px-4 py-8"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up now"
              : "Already registered? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
