import React, {Component} from "react";
import Header from "../Layout/header";
import {Route} from "react-router-dom";
import Mab from "../UI/map";

class Layout extends Component {
    state = {
        isLogin: true,
    };

    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>

                <main>
                    {this.state.isLogin ? (
                        <Route path="/" excat component={Mab} />
                    ) : (
                        <Route path="/" render={() => "login"} />
                    )}
                    <Route path="/sign-up" render={() => "signup"} />
                    <Route path="/login" render={() => "login"} />
                    <Route
                        path="/contact"
                        render={() => {
                            <h1>Contact</h1>;
                        }}
                    />
                </main>
            </div>
        );
    }
}
export default Layout;
