// Project Mwenbwa
// src/client/components/username.js - Username component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Username = props => {
    function handleChange(e) {
        props.setNewUser({...props.newUser, username: e.target.value});
    }

    return (
        <div className={"username"}>
            <label htmlFor={"username"} className={"username__label"}>
                {"Username"}
            </label>
            <input
                type={"text"}
                name={"username"}
                // value={props.newUser.username}
                onChange={handleChange}
                className={"username__field"}
                required
            />
        </div>
    );
};

export default Username;
