import React, {useState} from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {red} from "color-name";

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
        </>
    );

    console.log("render");

    return (
        <header className={classes.Header}>
            <nav>
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
