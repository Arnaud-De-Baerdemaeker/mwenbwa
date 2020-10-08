/* becodeorg/mwenbwa
 *
 * /src/client/components/sign-in.js - Sign In Component
 *
 * coded by Arnaud De Baerdemaeker, Jepsen 3.20, BeCode
 *
 * started at 09/2020
 */

import React, {useState} from "react";
import {SliderPicker} from "react-color-hook";
// import axios from "axios";
import Username from "./username";
import Email from "./email";
import Password from "./password";
import Submit from "./submit";

const SignIn = props => {
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        color: "",
    });

    function handleChange(e) {
        setNewUser({...newUser, color: e.hex});
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     axios
    //         .post("/api/auth/signup", newUser)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    return (
        <form
            method={"post"}
            className={
                props.signInIsDisplayed ? "sign-in--open" : "sign-in--closed"
            }>
            <h2 className={"sign-in__title"}>{"Create an account"}</h2>
            <Username newUser={newUser} setNewUser={setNewUser} />
            <Email newUser={newUser} setNewUser={setNewUser} />
            <Password newUser={newUser} setNewUser={setNewUser} />
            <div className={"color"}>
                <h3 className={"color__title"}>{"Pick a color"}</h3>
                <div className={"color__container"}>
                    <SliderPicker onChange={handleChange} />
                </div>
            </div>
            <Submit /*onSubmit={handleSubmit}*/ />
            <div className={"sign-in__have-account"}>
                {"Already collecting ?"}
            </div>
            <button
                type={"button"}
                onClick={() => {
                    props.setSignInIsDisplayed(false);
                    props.setLogInIsDisplayed(true);
                }}
                className={"sign-in__switch"}>
                {"Hop in !"}
            </button>
        </form>
    );
};

export default SignIn;
