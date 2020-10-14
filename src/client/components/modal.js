// Project Mwenbwa
// src/client/components/modal.js - Modal component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";
import {createPortal} from "react-dom";
import SignIn from "./modal-components/sign-in";
import LogIn from "./modal-components/log-in";

const Modal = ({
    modalIsDisplayed,
    // setModalIsDisplayed,
    signInIsDisplayed,
    setSignInIsDisplayed,
    logInIsDisplayed,
    setLogInIsDisplayed,
}) =>
    createPortal(
        <div className={modalIsDisplayed ? "modal--open" : "modal--closed"}>
            <SignIn
                signInIsDisplayed={signInIsDisplayed}
                setSignInIsDisplayed={setSignInIsDisplayed}
                setLogInIsDisplayed={setLogInIsDisplayed}
            />
            <LogIn
                logInIsDisplayed={logInIsDisplayed}
                setLogInIsDisplayed={setLogInIsDisplayed}
                setSignInIsDisplayed={setSignInIsDisplayed}
            />
        </div>,
        document.querySelector("#modal"),
    );

export default Modal;
