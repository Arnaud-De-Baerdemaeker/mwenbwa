// Project Mwenbwa
// src/client/components/password.js - Password component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Password = props => {
    function handleChange(e) {
        props.setNewUser({...props.newUser, password: e.target.value});
    }

    return (
        <div className={"password"}>
            <label htmlFor={"password"} className={"password__label"}>
                {"Password (min. 8 characters)"}
            </label>
            <input
                type={"password"}
                name={"password"}
                minLength={8}
                // value={props.newUser.password}
                onChange={handleChange}
                required
            />
        </div>
    );
};

export default Password;
