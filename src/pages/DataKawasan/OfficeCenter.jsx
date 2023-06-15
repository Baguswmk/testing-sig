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

function OfficeCenter() {
  const navigate = useNavigate();
  const [facilityData, setFacilityData] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const handleButtonClicked = () => {
    window.open("https://goo.gl/maps/aVADMakfQG5ygEtb9");
  };
  useEffect(() => {
    const fetchFacilityData = async () => {
      try {
        const id = 2;
        const response = await getDataById(id);
        if (response && response.data) {
          setFacilityData(response.data);
          setCoordinates(response.data.geometry.coordinates);
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
          <h1>Wilayah Kantor Pusat</h1>
          <MapComponent latitude={latitude} longitude={longitude} />
          {/* <div className="img-datkaw">
            <img src={facilityData.properties.image[0][1]} alt={facilityData.properties.image[0][0]} />
            <img src={facilityData.properties.image[1][1]} alt={facilityData.properties.image[1][0]} />
          </div> */}
          <div className="content-datkaw">
            {/* <p>{facilityData.properties.description}</p> */}
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

const MapComponent = () => {
  const pusat = [-4.588996115847869, 104.8738214731423];

  return (
    <MapContainer center={pusat} zoom={15} scrollWheelZoom={false}>
      <TileLayer attribution='&copy; <a href="https://www.esri.com/">Esri</a>' url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
      <Marker position={[-4.593368, 104.875195]}>
        <Popup>POS Gerbang Kantor Central</Popup>
      </Marker>
      <Marker position={[-4.591195, 104.873974]}>
        <Popup>
          <a href="/fasilitasumum/masjid" style={{ color: "black" }}>
            Masjid Baiturrohman PTPN IV
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.5916682586542965, 104.87387155386557]}>
        <Popup>Gedung Tjoek Soepono PG Bungamayang</Popup>
      </Marker>
      <Marker position={[-4.593442114642538, 104.87379997054991]}>
        <Popup>
          <a href="/fasilitasumum/sekolah" style={{ color: "black" }}>
            Paud
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.5930038385881, 104.8740901453161]}>
        <Popup>
          <a href="/fasilitasumum/sekolah" style={{ color: "black" }}>
            TK
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.591990620531944, 104.87455366641129]}>
        <Popup>
          <a href="/fasilitasumum/sekolah" style={{ color: "black" }}>
            SD
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.592420963314999, 104.87456464256461]}>
        <Popup>
          <a href="/fasilitasumum/sekolah" style={{ color: "black" }}>
            SMP
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.594503381093948, 104.87194865921903]}>
        <Popup>
          <a href="/fasilitasumum/klinik" style={{ color: "black" }}>
            Klinik
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.590846618277433, 104.87257979493575]}>
        <Popup>
          <a href="/fasilitasumum/lapangan" style={{ color: "black" }}>
            Lapangan Tenis
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.5901043012888545, 104.8727549671523]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            Mess General Manager
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.590365216791212, 104.87232368469289]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            Mess Tamu 1
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.590872147129439, 104.8710431334721]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            Mess Tamu 2
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.590303218092043, 104.87197610650439]}>
        <Popup>
          <a href="/fasilitasumum/tamanembung" style={{ color: "black" }}>
            Taman Embung
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.593507760044691, 104.87186816738904]}>
        <Popup>
          <a href="/fasilitasumum/mess" style={{ color: "black" }}>
            30 Mess Karyawan
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.589354477930334, 104.87307537319575]}>
        <Popup>
          {" "}
          <a href="/fasilitasumum/laboratorium" style={{ color: "black" }}>
            Laboratorium Core Sampler PG Bungamayang
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.58854500332904, 104.87302034947172]}>
        <Popup>POM BBM Bunga Mayang</Popup>
      </Marker>
      <Marker position={[-4.588801670053586, 104.8728567347365]}>
        <Popup>Mini Market</Popup>
      </Marker>
      <Marker position={[4.588165231708514, 104.87348542310131]}>
        <Popup>Jembatan Timbang</Popup>
      </Marker>
      <Marker position={[-4.588964700923753, 104.87357672159165]}>
        <Popup>Pos Satpam & ATM BNI</Popup>
      </Marker>
      <Marker position={[-4.588996115847869, 104.8738214731423]}>
        <Popup>Kantor Central PG</Popup>
      </Marker>
      <Marker position={[-4.588631, 104.873917]}>
        <Popup>Pintu Masuk Area & Absensi Karyawan</Popup>
      </Marker>
      <Marker position={[-4.588089019197086, 104.87660143571232]}>
        <Popup>
          <a href="/fasilitasumum/gudang" style={{ color: "black" }}>
            Gudang Gula
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.5881031821724525, 104.8756494658602]}>
        <Popup>
          <a href="/fasilitasumum/laboratorium" style={{ color: "black" }}>
            Laboratorium Pabrik PG Bunga Mayang
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.587290226928853, 104.87606719587576]}>
        <Popup>Bengkel dan Pool TMA</Popup>
      </Marker>
      <Marker position={[-4.587111773215485, 104.87661848587969]}>
        <Popup>Kantor TMA Bunga Mayang </Popup>
      </Marker>
      <Marker position={[-4.589564799739687, 104.87487083964741]}>
        <Popup>Bagasse Storage Pabrik Gula Bunga Mayang atau Ampas Pembuangan</Popup>
      </Marker>
      <Marker position={[-4.587868, 104.874369]}>
        <Popup>Lahan Pengumpulan Tebu</Popup>
      </Marker>
      <Marker position={[-4.588675366162257, 104.8743536500561]}>
        <Popup>
          <a href="/fasilitasumum/station" style={{ color: "black" }}>
            Mill and Diffuser Station PG Bungamayang PT Perkebunan Nusantara VII
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.589032272762762, 104.87492483196736]}>
        <Popup>
          <a href="/fasilitasumum/station" style={{ color: "black" }}>
            Mill Station (Dcs) PTPN7 Bungamayang
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.588448758704236, 104.8747543299043]}>
        <Popup>
          <a href="/fasilitasumum/station" style={{ color: "black" }}>
            Workshop Station Besal
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.588394939422389, 104.87559263171437]}>
        <Popup>
          <a href="/fasilitasumum/station" style={{ color: "black" }}>
            Stasiun Pengolahan (Mill Station) PG Bungamayang
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.588907638732068, 104.8756380989312]}>
        <Popup>
          <a href="/fasilitasumum/station" style={{ color: "black" }}>
            Instrument Station 709 PTPN7 Bungamayang
          </a>
        </Popup>
      </Marker>
      <Marker position={[-4.589236219311511, 104.8759506860468]}>
        <Popup>
          <a href="/fasilitasumum/station" style={{ color: "black" }}>
            Cooling Tower
          </a>
        </Popup>
      </Marker>
      {/* <Marker position={[-4.593368, 104.875195]}>
        <Popup>POS Gerbang Kantor Central</Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default OfficeCenter;
