import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../style/MapInfo.css";

const MapInfo = () => {
  return (
    <>
      <div className="headerMap">
        <h1>Peta Lokasi</h1>
      </div>
      <div className="wrapper">
        <div className="cardMap">
          <div className="mapContainer">
            <MapCard />
          </div>
          <div className="cardMapContent">{/* Konten lainnya di dalam card */}</div>
        </div>
      </div>
    </>
  );
};

const MapCard = () => {
  const bungamayang = [-4.3919, 104.3053];

  return (
    <MapContainer center={bungamayang} zoom={13} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={bungamayang}>
        <Popup>BungaMayang</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapInfo;
