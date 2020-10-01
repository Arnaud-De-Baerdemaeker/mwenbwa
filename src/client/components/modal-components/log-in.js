// Project Mwenbwa
// src/client/components/log-in.js - Log In component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";
import Username from "./username";
import Password from "./password";
import Submit from "./submit";

const LogIn = () => (
    <form className={"log-in"}>
        <h2 className={"log-in__title"}>{"Log In to your account"}</h2>
        <Username />
        <Password />
        <Submit />
    </form>
);

export default LogIn;
