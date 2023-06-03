import "../style/MapInfo.css";
import ErenYeager from "../public/img/profilePict.png";
import { ArrowRight } from "react-bootstrap-icons";

const MapInfo = () => {
  return (
    <>
      <div className="headerMap">
        <h1>Peta Lokasi</h1>
      </div>
      <div className="wrapperMapInfo">
        <div className="cardMapInfo">
          <div className="mapInfo">
            <img src={ErenYeager} alt={ErenYeager} />
          </div>
          <div className="selengkapnya">
            <a href="/map" className="btnSelengkapnya">
              Selengkapnya <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapInfo;
