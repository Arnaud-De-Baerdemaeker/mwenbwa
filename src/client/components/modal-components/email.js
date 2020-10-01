// Project Mwenbwa
// src/client/components/email.js - Email component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Email = () => (
    <div className={"email"}>
        <label htmlFor={"email"} className={"email__label"}>
            {"E-mail"}
        </label>
        <input type={"email"} name={"E-mail"} required />
    </div>
);

export default Email;
