import React from "react";
import {Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import uuid from "react-uuid";

const Trees = (props) => {
    let trees = props.trees.map((tree) => {
        return (
            <Marker key={uuid()} position={[tree.geoloc.lat, tree.geoloc.lon]}>
                <Popup>
                    <p>
                        {Math.floor(tree.hauteur_totale * tree.diametre_cime)}
                    </p>

                    {tree.nom_complet}
                </Popup>
            </Marker>
        );
    });

    return <div>{<MarkerClusterGroup>{trees}</MarkerClusterGroup>}</div>;
};

export default Trees;
