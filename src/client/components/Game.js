/* becodeorg/mwenbwa
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import * as React from "react";
import GameBuilder from "./container/gameBuilder";
import {HashRouter} from "react-router-dom";

const Game = () => (
    <HashRouter>
        <div>
            <GameBuilder />
        </div>
    </HashRouter>
);

export default Game;
