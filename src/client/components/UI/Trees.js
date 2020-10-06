import React from "react";
import {Marker, Popup} from "react-leaflet";

const Trees = (props) => {
    let allArbers = props.trees.map((tree) => {
        return (
            <Marker
                key={tree.arbotag}
                position={[tree.geoloc.lat, tree.geoloc.lon]}>
                <Popup>{tree.nom_complet}</Popup>
            </Marker>
        );
    });

    return <div>{allArbers}</div>;
};

export default Trees;
