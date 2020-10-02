// Project Mwenbwa
// src/client/components/username.js - Username component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React, {useState} from "react";

const Username = () => {
    const [username, setUsername] = useState("");

    return (
        <div className={"username"}>
            <label htmlFor={"username"} className={"username__label"}>
                {"Username"}
            </label>
            <input
                type={"text"}
                name={"username"}
                value={username}
                onChange={error => setUsername(error.target.value)}
                className={"username__field"}
                required
            />
        </div>
    );
};

export default Username;
