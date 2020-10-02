// Project Mwenbwa
// src/client/components/password.js - Password component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React, {useState} from "react";

const Password = () => {
    const [password, setPassword] = useState("");

    return (
        <div className={"password"}>
            <label htmlFor={"password"} className={"password__label"}>
                {"Password (min. 8 characters)"}
            </label>
            <input
                type={"password"}
                name={"password"}
                minLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
        </div>
    );
};

export default Password;
