/* becodeorg/mwenbwa
 *
 * /src/client/components/sign-in.js - Sign In Component
 *
 * coded by Arnaud De Baerdemaeker, Jepsen 3.20, BeCode
 *
 * started at 09/2020
 */

import React, {useState} from "react";
import {CirclePicker} from "react-color-hook";
// import bcryptjs from "bcryptjs";
import Username from "./username";
import Email from "./email";
import Password from "./password";
import Submit from "./submit";

const SignIn = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        color: "",
    });

    function handleChange(e) {
        setNewUser({...newUser, color: e.hex});
    }

    const submit = event => {
        event.preventDefault();

        // bcryptjs.hash(Password.password, 10).then(result => {})
    };

    return (
        <form onSubmit={submit} className={"sign-in"}>
            <h2 className={"sign-in__title"}>{"Create an account"}</h2>
            <Username newUser={newUser} setNewUser={setNewUser} />
            <Email newUser={newUser} setNewUser={setNewUser} />
            <Password newUser={newUser} setNewUser={setNewUser} />
            <div className={"color"}>
                <h3 className={"color__title"}>{"Pick a color"}</h3>
                <div className={"color__container"}>
                    <CirclePicker onChange={handleChange} />
                </div>
            </div>
            <Submit />
        </form>
    );
};

export default SignIn;
