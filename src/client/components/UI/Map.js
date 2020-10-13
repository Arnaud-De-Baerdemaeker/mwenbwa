import React, {Component, useState, useEffect} from "react";
import {Map, TileLayer} from "react-leaflet";
import Trees from "./trees";

const MapComponent = () => {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        fetch("http://192.168.99.100/api/allTrees")
            .then((response) => response.text())
            .then((data) => {
                const trees = JSON.parse(data);

                setTrees(trees);
            });
    }, []);

    const position = [50.632557, 5.579666];
    return (
        <Map style={{height: "500px"}} center={position} zoom={10}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Trees trees={trees} />
        </Map>
    );
};

export default MapComponent;
