import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Masjid() {
  const navigate = useNavigate();
  const handleButtonClicked = () => {
    window.open("https://goo.gl/maps/14fvLrFugJ2KSxpDA");
  };
  return (
    <div className="wrapper-fasum">
      <div className="container-fasum">
        <div className="header-fasum">
          {/* <h1>{fasum.title}</h1> */}
          <a href="#" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </a>
          <h1> Fasilitas Umum</h1>
        </div>
        <div className="card-fasum">
          <h1> Masjid Baiturrohman PTPN IV</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Masjid Baiturrohman PTPN IV merupakan masjid utama di PTPN IV Bungamayang. Masjid ini memiliki halaman yang luas, rapih, bersih dan terurus. Para karyawan yang beragama islam beribadah di masjid ini. Masjid ini terletak di
              daerah kantor central.
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

export default Masjid;
