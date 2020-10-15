import React from "react";
import {Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import uuid from "react-uuid";
import L from "leaflet";

const imgTree = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="579.359px" height="579.359px" viewBox="0 0 579.359 579.359" style="enable-background:new 0 0 579.359 579.359;"
	 xml:space="preserve">
<g>
	<g>
		<path d="M425.34,161.16c0-38.307-31.053-69.36-69.359-69.36c-1.295,0-2.566,0.09-3.84,0.159c2.447-7.091,3.84-14.676,3.84-22.599
			C355.98,31.053,324.926,0,286.62,0c-38.307,0-69.36,31.053-69.36,69.36c0,7.907,1.387,15.475,3.823,22.554
			c-37.234,1.224-67.063,31.714-67.063,69.246c0,28.181,16.834,52.387,40.971,63.24c-24.137,10.853-40.971,35.059-40.971,63.24
			c0,23.705,11.91,44.61,30.053,57.12c-18.144,12.51-30.053,33.415-30.053,57.12c0,38.307,31.053,69.36,69.36,69.36
			c16.186,0,31.041-5.59,42.84-14.88v82.199h-6.12c-26.312,0-26.312,40.8,0,40.8h53.039c26.312,0,26.312-40.8,0-40.8h-6.119v-87.557
			c12.547,12.505,29.85,20.237,48.961,20.237c38.307,0,69.359-31.054,69.359-69.36c0-23.705-11.91-44.61-30.053-57.12
			c18.143-12.51,30.053-33.415,30.053-57.12c0-28.181-16.834-52.387-40.971-63.24C408.506,213.547,425.34,189.34,425.34,161.16z
			 M289.679,140.76c-0.224-0.73-0.51-1.436-0.759-2.158c0.519-0.017,1.032-0.049,1.547-0.078
			C290.21,139.271,289.913,140.001,289.679,140.76z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

const Trees = props => {
    const greenIcon = L.icon({
        iconUrl: `data:image/svg+xml;base64,${btoa(imgTree)} `,
        iconSize: [35, 30], // size of the icon
        shadowSize: [50, 64], // size of the sh adow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    const trees = props.trees.map(tree => (
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
    ));

    return <div>{<MarkerClusterGroup>{trees}</MarkerClusterGroup>}</div>;
};

export default Trees;
