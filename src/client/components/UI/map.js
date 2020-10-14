import React, {useState, useEffect} from "react";
import {Map, TileLayer} from "react-leaflet";
import Trees from "./trees";

const MapComponent = () => {
    const [trees, setTrees] = useState([]);

    useEffect(() => {
        fetch("http://localhost/api/allTrees")
            .then(response => response.text())
            .then(data => {
                const trees1 = JSON.parse(data);

                setTrees(trees1);
            });
    }, []);

    const position = [50.632557, 5.579666];
    return (
        <Map style={{height: "500px"}} center={position} zoom={10}>
            <TileLayer
                attribution={
                    '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            <Trees trees={trees} />
        </Map>
    );
};

export default MapComponent;
