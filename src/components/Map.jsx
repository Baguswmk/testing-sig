import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/components/Map.css";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import dummyData from "../data/dummy";
import coordinateDummy from "../data/dataCoordinate";
import mapDummy from "../data/dataMap";

function Map() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(mapDummy);
    console.log(mapDummy);
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
            {data ? (
              <div>
                <h1>{data.data[0].name}</h1>
                <p>{data.data[0].desc}</p>
                <p>Status: {data.status.toString()}</p>
                <p>Name: {data.data[0].name}</p>
                <p>Category: {data.data[0].category}</p>
                <p>Description: {data.data[0].desc}</p>
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
  const coordinates = coordinateDummy.data.map((coord) => [coord.lat, coord.lng]);

  return (
    <MapContainer center={coordinates[0]} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polygon positions={coordinates} color="red" />
      
    </MapContainer>
  );
};

export default Map;
