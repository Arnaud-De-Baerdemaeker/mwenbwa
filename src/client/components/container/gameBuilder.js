/* eslint-disable unicorn/filename-case */
import React from "react";
import Header from "../Layout/header";
import {Route} from "react-router-dom";
import Mab from "../UI/map";

const Layout = ({
    setModalIsDisplayed,
    setSignInIsDisplayed,
    setLogInIsDisplayed,
}) => (
    <div>
        <div>
            <Header
                setModalIsDisplayed={setModalIsDisplayed}
                setSignInIsDisplayed={setSignInIsDisplayed}
                setLogInIsDisplayed={setLogInIsDisplayed}
            />
        </div>

        <main>
            <Route path={"/"} exact component={Mab} />
            <Route path={"/sign-up"} />
            <Route path={"/login"} />
        </main>
    </div>
);

export default Layout;
