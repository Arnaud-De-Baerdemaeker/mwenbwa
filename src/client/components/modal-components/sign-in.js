/* becodeorg/mwenbwa
 *
 * /src/client/components/sign-in.js - Sign In Component
 *
 * coded by arnaud-de-baerdemaeker-jepsen-3.20@BeCode
 * started at 09/2020
 */

import React, {useState} from "react";
import {CirclePicker} from "react-color";
// import bcryptjs from "bcryptjs";
import Username from "./username";
import Email from "./email";
import Password from "./password";
import Submit from "./submit";

const SignIn = () => {
    const [, /*color*/ setColor] = useState("");

    const changeSpy = props => {
        setColor(props.hex);
    };

    const submit = event => {
        event.preventDefault();

        // bcryptjs.hash(Password.password, 10).then(result => {})
    };

    return (
        <form onSubmit={submit} className={"sign-in"}>
            <h2 className={"sign-in__title"}>{"Create an account"}</h2>
            <Username />
            <Email />
            <Password />
            <div className={"color"}>
                <h3 className={"color__title"}>{"Pick a color"}</h3>
                <div className={"color__container"}>
                    <CirclePicker onChange={changeSpy} />
                </div>
            </div>
            <Submit />
        </form>
    );
};

export default SignIn;
