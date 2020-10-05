// Project Mwenbwa
// src/client/components/email.js - Email component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Email = props => {
    function handleChange(e) {
        props.setNewUser({...props.newUser, email: e.target.value});
    }

    return (
        <div className={"email"}>
            <label htmlFor={"email"} className={"email__label"}>
                {"E-mail"}
            </label>
            <input
                type={"email"}
                name={"E-mail"}
                // value={props.newUser.email}
                onChange={handleChange}
                required
            />
        </div>
    );
};

export default Email;
