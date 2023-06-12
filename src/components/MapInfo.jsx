import "../style/components/MapInfo.css";
import PetaPict from "../public/img/peta.webp";
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
            <img src={PetaPict} alt={PetaPict} />
          </div>
          <div className="selengkapnya">
            <a href="https://goo.gl/maps/QfsceXMKB9BJVT579" target="blank" rel="noopener" className="btnSelengkapnya">
              Selengkapnya <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapInfo;
