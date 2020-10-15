import React, {useState} from "react";
import classes from "./header.module.css";
import {NavLink} from "react-router-dom";

const Header = ({
    setModalIsDisplayed,
    setSignInIsDisplayed,
    setLogInIsDisplayed,
}) => {
    const [isConnect] = useState(false);

    const renud = isConnect ? (
        <>
            <li>
                <NavLink to={"/logout"}>{"logout"}</NavLink>
            </li>
            {":"}
        </>
    ) : (
        <>
            <li>
                <NavLink
                    to={"/sign-up"}
                    onClick={() => {
                        setModalIsDisplayed(true);
                        setSignInIsDisplayed(true);
                        setLogInIsDisplayed(false);
                    }}>
                    {"Sign-up"}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/login"}
                    onClick={() => {
                        setModalIsDisplayed(true);
                        setSignInIsDisplayed(false);
                        setLogInIsDisplayed(true);
                    }}>
                    {"Login"}
                </NavLink>
            </li>
        </>
    );

    // console.log("render");

    return (
        <header className={classes.Header}>
            <nav>
                <h1
                    style={{
                        color: "#F4F4F4",
                        margin: "0",
                        padding: "0",
                        textAlign: "center",
                    }}>
                    {"mwenbwa"}
                </h1>
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            onClick={() => {
                                setModalIsDisplayed(false);
                                setSignInIsDisplayed(false);
                                setLogInIsDisplayed(false);
                            }}>
                            {"Home"}
                        </NavLink>
                    </li>
                    {renud}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
