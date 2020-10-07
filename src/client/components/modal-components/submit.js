// Project Mwenbwa
// src/client/components/submit.js - Submit component
// coded by arnaud-de-baerdemaeker-jepsen-3.20@becode

import React from "react";

const Submit = props => (
    <div className={"submit"}>
        {/*eslint-disable-next-line react/button-has-type*/}
        <button
            type={"submit"}
            onSubmit={props.onSubmit}
            className={"submit__button"}>
            {"Submit"}
        </button>
    </div>
);

export default Submit;
