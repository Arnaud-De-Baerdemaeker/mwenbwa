// Project Mwenbwa
// src/client/components/log-in.js - Log In component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";
import Username from "./username";
import Password from "./password";
import Submit from "./submit";

const LogIn = props => (
    <form
        // Change the CSS class following the state of the constant
        className={props.logInIsDisplayed ? "log-in--open" : "log-in--closed"}>
        <h2 className={"log-in__title"}>{"Log In to your account"}</h2>
        <Username />
        <Password />
        <Submit />
        <div className={"log-in__set-account"}>
            {"Wanna take control of all the trees ?"}
        </div>
        <button
            type={"button"}
            onClick={() => {
                props.setLogInIsDisplayed(false);
                props.setSignInIsDisplayed(true);
            }}
            className={"log-in__switch"}>
            {"Join !"}
        </button>
    </form>
);

export default LogIn;
