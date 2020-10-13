import React, {useState} from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [isConnect, setIsConnect] = useState(false);

    let renud = isConnect ? (
        <>
            <li>
                <NavLink to="/logout">{"logout"}</NavLink>
            </li>
            :
        </>
    ) : (
        <>
            <li>
                <NavLink to="/sign-up">{"Sign-up"}</NavLink>
            </li>
            <li>
                <NavLink to="/login">{"login"}</NavLink>
            </li>
            <li>
                <NavLink to="/contact">{"contact"}</NavLink>
            </li>
        </>
    );

    console.log("render");

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
                    mwenbwa
                </h1>
                <ul>
                    <li>
                        <NavLink to="/">{"Home"}</NavLink>
                    </li>
                    {renud}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
