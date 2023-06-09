import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidBaiturrohman from "../../public/img/components/masjid-baiturrohman.webp";

import "../../style/components/fasilitasumum/Masjid.css";

function Masjid() {
  const navigate = useNavigate();
  const handleButtonClicked = (link) => {
    window.open(link);
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
        <br />
          <h1> Masjid Baiturrohman PTPN IV</h1>
          <div className="img-fasum">
            <img src={MasjidBaiturrohman} alt={MasjidBaiturrohman} />
          </div>
          <div className="content-fasum">
            <p>
              Masjid Baiturrohman PTPN IV merupakan masjid utama di PTPN IV Bungamayang. Masjid ini memiliki halaman yang luas, rapih, bersih dan terurus. Para karyawan yang beragama islam beribadah di masjid ini. Masjid ini terletak di
              daerah kantor central.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/14fvLrFugJ2KSxpDA")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
          </div>
        </div>
        <div className="card-fasum">
        <br />
          <h1> Mushola</h1>
          <div className="content-fasum">
            <p>
              Mushola adalah sebuah tempat ibadah yang biasa ditemukan di dalam lingkungan masyarakat Muslim. Mushola sering kali berukuran kecil dan sederhana, dibandingkan dengan masjid yang lebih besar dan memiliki fasilitas yang lebih
              lengkap. Namun, meskipun ukurannya kecil, mushola tetap memiliki peran penting dalam kehidupan komunitas Muslim.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/igZFkVYSf9cfL4x29")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
          </div>
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

export default Masjid;
