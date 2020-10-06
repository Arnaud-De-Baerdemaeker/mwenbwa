/* becodeorg/mwenbwa
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 * 
 */

import * as React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import "leaflet/dist/leaflet.css"

ReactDOM.render(<Game />, document.querySelector("#app"));
