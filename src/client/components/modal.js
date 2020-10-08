// Project Mwenbwa
// src/client/components/modal.js - Modal component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React, {useState} from "react";
import {createPortal} from "react-dom";
import SignIn from "./modal-components/sign-in";
import LogIn from "./modal-components/log-in";

const Modal = () => {
    const [signInIsDisplayed, setSignInIsDisplayed] = useState(true);
    const [logInIsDisplayed, setLogInIsDisplayed] = useState(false);

    return createPortal(
        <div className={"modal"}>
            <SignIn
                signInIsDisplayed={signInIsDisplayed}
                setSignInIsDisplayed={setSignInIsDisplayed}
                logInIsDisplayed={logInIsDisplayed}
                setLogInIsDisplayed={setLogInIsDisplayed}
            />
            <LogIn
                logInIsDisplayed={logInIsDisplayed}
                setLogInIsDisplayed={setLogInIsDisplayed}
                signInIsDisplayed={signInIsDisplayed}
                setSignInIsDisplayed={setSignInIsDisplayed}
            />
        </div>,
        document.querySelector("#modal"),
    );
};

export default Modal;
