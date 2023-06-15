/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../../components/SidebarDash";
import "../../style/pages/DataKawasan.css";
import { getDataById } from "../../global/fetch-api";
import { MapContainer, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import Preloader from "../../components/Preloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

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
          {/* <div className="img-datkaw">
            <img src={facilityData.properties.image[0][1]} alt={facilityData.properties.image[0][0]} />
            <img src={facilityData.properties.image[1][1]} alt={facilityData.properties.image[1][0]} />
          </div> */}
          <div className="content-datkaw" style={{ width: "70%" }}>
            <p>
              {facilityData.properties.description}
              {/* <br />
              Kantor Central PTPN VII Distrik Bungamayang merupakan kantor pusat atau markas besar dari PTPN VII yang terletak di Distrik Bungamayang. PTPN VII adalah sebuah perusahaan negara yang bergerak di bidang perkebunan. Kantor
              Central PTPN VII Distrik Bungamayang berfungsi sebagai pusat pengelolaan dan pengendalian operasional perkebunan di wilayah tersebut. Di kantor pusat ini, dilakukan berbagai kegiatan manajerial, administrasi, perencanaan, dan
              pengawasan terkait operasional perkebunan. Selain itu, kantor ini juga menjadi tempat berkumpulnya berbagai departemen dan divisi yang terkait dengan kegiatan perkebunan di wilayah Distrik Bungamayang. */}
            </p>
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
        <Popup>
          <a href="">P3GI Kebun Percobaan Bungamayang</a>
        </Popup>
      </Marker>
      <Marker position={[-4.680035313625973, 104.83301244003653]}>
        <Popup>Wisma Serbaguna</Popup>
      </Marker>
      <Marker position={[-4.682612003336363, 104.83119824349887]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            Mess Karyawan (Perum T50 Rayon I)
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.680550440004055, 104.83147436450392]}>
        <Popup>Gudang Pupuk</Popup>
      </Marker>
      <Marker position={[-4.6811112342137235, 104.83215248127057]}>
        <Popup>
          <a href="/fasilitasumum/bengkel" style={{ color: "black" }}>
            Bengkel
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.682133795014973, 104.83109260106863]}>
        <Popup>Mushola</Popup>
      </Marker>
      {/* <Marker position={[-4.593368, 104.875195]}>
        <Popup>POS Gerbang Kantor Central</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default RayonSatu;
