// Project Mwenbwa
// src/client/components/username.js - Username component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Username = () => (
    <div className={"username"}>
        <label htmlFor={"username"} className={"username__label"}>
            {"Username"}
        </label>
        <input
            type={"text"}
            name={"username"}
            className={"username__field"}
            required
        />
    </div>
);

export default Username;
