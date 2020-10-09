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
import Username from "./username";
import Email from "./email";
import Password from "./password";
import Submit from "./submit";

const SignIn = props => {
    const [color, setColor] = useState();

    return (
        <form
            method={"POST"}
            action={"/api/postUser"}
            className={
                props.signInIsDisplayed ? "sign-in--open" : "sign-in--closed"
            }>
            <h2 className={"sign-in__title"}>{"Create an account"}</h2>
            <Username />
            <Email />
            <Password />
            <div className={"color"}>
                <h3 className={"color__title"}>{"Pick a color"}</h3>
                <div className={"color__container"}>
                    <input type={"hidden"} name={"color"} value={color} />
                    <SliderPicker
                        onChangeComplete={e => {
                            setColor(e.hex);
                        }}
                    />
                </div>
            </div>
            <Submit />
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
