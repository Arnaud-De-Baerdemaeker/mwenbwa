// Project Mwenbwa
// src/client/components/password.js - Password component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Password = () => (
    <div className={"password"}>
        <label htmlFor={"password"} className={"password__label"}>
            {"Password (min. 8 characters)"}
        </label>
        <input type={"password"} name={"password"} minLength={8} required />
    </div>
);

export default Password;
