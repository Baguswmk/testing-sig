import PictPeta from "../public/img/peta.webp";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../components/SidebarDash";
import "../style/components/fasilitasumum/masjid.css";

function PetaUmum() {
  const navigate = useNavigate();
  const handleButtonClicked = () => {
    window.open("https://goo.gl/maps/jLXB5hBVfPyxjeoE7");
  };
  return (
    <div className="wrapper-fasum">
      <div className="container-fasum">
        <div className="header-fasum">
          {/* <h1>{fasum.title}</h1> */}
          <a href="#" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </a>
          <h1>Peta Umum</h1>
        </div>
        <div className="card-fasum">
          <div className="img-fasum">
            <img src={PictPeta} alt={PictPeta} className="img-petaUmum" />
          </div>
          <div className="content-fasum">
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

export default PetaUmum;
