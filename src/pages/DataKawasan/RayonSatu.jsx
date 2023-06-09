/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../../components/SidebarDash";
import "../../style/pages/DataKawasan.css";
import { getDataById } from "../../global/fetch-api";
import { MapContainer, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import Preloader from "../../components/Preloader";


function RayonSatu() {
  const navigate = useNavigate();
  const [facilityData, setFacilityData] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const handleButtonClicked = () => {
    window.open("https://goo.gl/maps/J5EXdP53MTToEnfA8");
  };

  useEffect(() => {
    const fetchFacilityData = async () => {
      try {
        const id = 1;
        const response = await getDataById(id);
        if (response && response.data) {
          setFacilityData(response.data);
          setCoordinates(response.data.geometry.coordinates[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFacilityData();
  }, []);

  if (!facilityData) {
    return <Preloader />;
  }

  const latitude = coordinates.map((coordinate) => coordinate[0]);
  const longitude = coordinates.map((coordinate) => coordinate[1]);

  return (
    <div className="wrapper-datkaw">
      <div className="container-datkaw">
        <div className="header-datkaw">
          <a href="#" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </a>
          <h1> Data Kawasan</h1>
        </div>
        <div className="card-datkaw">
          <h1>{facilityData.properties.name}</h1>
          <MapComponent latitude={latitude} longitude={longitude} />
          <div className="content-datkaw" style={{ width: "70%" }}>
            <button id="btn4" onClick={handleButtonClicked}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
          </div>
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

const MapComponent = ({ latitude, longitude }) => {
  const coordinates = latitude.map((lat, index) => [lat, longitude[index]]);
  const pusat = [-4.681587787047458, 104.83167284683928];

  return (
    <MapContainer center={pusat} zoom={12} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.esri.com/">Esri</a>' url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <Polygon positions={coordinates} color="red" />
      <Marker position={[-4.681587787047458, 104.83167284683928]}>
        <Popup>Kantor Rayon I PTPN 7</Popup>
      </Marker>
      <Marker position={[-4.681056500565115, 104.83060918076104]}>
        <Popup>P3GI Kebun Percobaan Bungamayang</Popup>
      </Marker>
      <Marker position={[-4.680035313625973, 104.83301244003653]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            Wisma Serbaguna
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.682612003336363, 104.83119824349887]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            Mess Karyawan (Perum T50 Rayon I)
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.680550440004055, 104.83147436450392]}>
        <Popup>
          <a href="/fasilitasumum/gudang" style={{ color: "black" }}>
            Gudang Pupuk
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.6811112342137235, 104.83215248127057]}>
        <Popup>
          <a href="/fasilitasumum/bengkel" style={{ color: "black" }}>
            Bengkel
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.682133795014973, 104.83109260106863]}>
        <Popup>
          {" "}
          <a href="/fasilitasumum/masjid" style={{ color: "black" }}>
            Mushola
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default RayonSatu;
