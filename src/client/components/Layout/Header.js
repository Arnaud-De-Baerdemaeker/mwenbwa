import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.Header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">{"Home"}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-up">{"Sign-up"}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">{"login"}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
