/* becodeorg/mwenbwa
 *
 * /src/client/components/sign-in.js - Sign In Component
 *
 * coded by arnaud-de-baerdemaeker-jepsen-3.20@BeCode
 * started at 09/2020
 */

import React from "react";
import {CirclePicker} from "react-color";
import Username from "./username";
import Email from "./email";
import Password from "./password";
import Submit from "./submit";

const SignIn = () => (
    <form className={"sign-in"}>
        <h2 className={"sign-in__title"}>{"Create an account"}</h2>
        <Username />
        <Email />
        <Password />
        <div className={"color"}>
            <h3 className={"color__title"}>{"Pick a color"}</h3>
            <div className={"color__container"}>
                <CirclePicker />
            </div>
        </div>
        <Submit />
    </form>
);

export default SignIn;
