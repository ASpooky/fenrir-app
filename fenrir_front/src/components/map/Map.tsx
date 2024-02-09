import { MapContainer, Marker, Popup, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../../styles/map.css";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

//緯度経度を受け取って現在地を中心としたマップを表示する.

//leafletの壊れたマークを訂正するために必要.
//delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const colorMarker = (color: string) => {
  return L.icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    className: `default-marker ${color}`,
  });
};

const Map = (props: {
  latitude: number;
  longtitude: number;
  shopLatitude: number;
  shopLongtitude: number;
  radius: number;
}) => {
  return (
    <MapContainer
      center={[props.latitude, props.longtitude]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: 340, width: "100%" }}
      className="shadow-md"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <>
        <Marker position={[props.latitude, props.longtitude]}>
          <Popup>現在地</Popup>
        </Marker>

        <Marker
          position={[props.shopLatitude, props.shopLongtitude]}
          icon={colorMarker("red")}
        ></Marker>
      </>
      <Circle center={[props.latitude, props.longtitude]} radius={props.radius}>
        検索範囲
      </Circle>
    </MapContainer>
  );
};

export default Map;
