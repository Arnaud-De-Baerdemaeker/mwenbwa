// Project Mwenbwa
// src/client/components/modal.js - Modal component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";
import {createPortal} from "react-dom";
import SignIn from "./modal-components/sign-in";
import LogIn from "./modal-components/log-in";

const Modal = () =>
    createPortal(
        <div className={"modal"}>
            <SignIn />
            <LogIn />
        </div>,
        document.querySelector("#modal"),
    );

export default Modal;
