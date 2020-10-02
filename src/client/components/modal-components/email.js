// Project Mwenbwa
// src/client/components/email.js - Email component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React, {useState} from "react";

const Email = () => {
    const [email, setEmail] = useState("");

    return (
        <div className={"email"}>
            <label htmlFor={"email"} className={"email__label"}>
                {"E-mail"}
            </label>
            <input
                type={"email"}
                name={"E-mail"}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
        </div>
    );
};

export default Email;
