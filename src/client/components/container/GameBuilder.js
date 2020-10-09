import React, {Component} from "react";
import Header from "../Layout/header";
import {Route} from "react-router-dom";
import Mab from "../UI/map";

class Layout extends Component {
    state = {};

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>

                <main>
                    <Route path="/" exact component={Mab} />
                    <Route path="/sign-up" render={() => "signup"} />
                    <Route path="/login" render={() => "login"} />
                </main>
            </div>
        );
    }
}
export default Layout;
