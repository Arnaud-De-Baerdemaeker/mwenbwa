import React, {Component} from "react";
import {Map, TileLayer} from "react-leaflet";
import Trees from "./trees";

class SimpleExample extends Component {
    state = {
        lat: 50.632557,
        lng: 5.579666,
        zoom: 5,

        trees: [],
    };

    componentDidMount() {
        fetch(
            "https://raw.githubusercontent.com/leny/mwenbwa/master/data/arbustum.json",
        )
            .then((response) => response.text())
            .then((data) => {
                this.setState({
                    trees: JSON.parse(data).slice(0, 2000),
                });
            });
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map
                className="markercluster-map"
                style={{height: "500px"}}
                center={position}
                zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Trees trees={this.state.trees} />
            </Map>
        );
    }
}

export default SimpleExample;
