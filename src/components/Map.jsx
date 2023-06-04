import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/Map.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import dummyData from "../data/dummy";
function Map() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="cardMap">
          <div className="mapContainer">
            <MapComponent />
          </div>
          <div className="cardMapContent">
            {" "}
            {data ? (
              <div>
                <h1>{data.data.properties.name}</h1>
                <p>{data.data.properties.description}</p>
                <p>Status: {data.status.toString()}</p>
                <p>Message: {data.message}</p>
                <p>Name: {data.data.properties.name}</p>
                <p>Category: {data.data.properties.category}</p>
                <p>Description: {data.data.properties.description}</p>
                <p>Description: {data.data.geometry.coordinates}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const MapComponent = () => {
  const { coordinates } = dummyData.data.geometry;

  return (
    <MapContainer center={[-6.215676, 106.848417]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polygon positions={coordinates} color="red" />
      <Marker position={[-6.215676, 106.848417]}>
        <Popup>BungaMayang</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
