import React from "react";
import {Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import uuid from "react-uuid";
import L from "leaflet";

const Trees = (props) => {
    var greenIcon = L.icon({
        iconUrl: "leaf-green.png",
        shadowUrl: "leaf-shadow.png",

        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    let trees = props.trees.map((tree) => {
        return (
            <Marker
                icon={greenIcon}
                key={uuid()}
                position={[tree.geoloc.lat, tree.geoloc.lon]}>
                <Popup>
                    <ul>
                        <li> {tree.nom_complet}</li>
                        <li>
                            {`Value: ${Math.ceil(
                                tree.hauteur_totale * tree.diametre_cime,
                            )} Leaves`}
                        </li>
                    </ul>
                </Popup>
            </Marker>
        );
    });

    return <div>{<MarkerClusterGroup>{trees}</MarkerClusterGroup>}</div>;
};

export default Trees;
