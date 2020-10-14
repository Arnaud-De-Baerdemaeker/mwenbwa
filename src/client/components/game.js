/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import React, {useState} from "react";
import Layout from "./container/gameBuilder";
import {HashRouter} from "react-router-dom";
import Modal from "./modal";
import "./../css/style.css";

const Game = () => {
    const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
    const [signInIsDisplayed, setSignInIsDisplayed] = useState(false);
    const [logInIsDisplayed, setLogInIsDisplayed] = useState(false);

    return (
        <HashRouter>
            <div>
                <Layout
                    setModalIsDisplayed={setModalIsDisplayed}
                    setSignInIsDisplayed={setSignInIsDisplayed}
                    setLogInIsDisplayed={setLogInIsDisplayed}
                />
                <Modal
                    modalIsDisplayed={modalIsDisplayed}
                    setModalIsDisplayed={setModalIsDisplayed}
                    signInIsDisplayed={signInIsDisplayed}
                    setSignInIsDisplayed={setSignInIsDisplayed}
                    logInIsDisplayed={logInIsDisplayed}
                    setLogInIsDisplayed={setLogInIsDisplayed}
                />
            </div>
        </HashRouter>
    );
};

export default Game;
