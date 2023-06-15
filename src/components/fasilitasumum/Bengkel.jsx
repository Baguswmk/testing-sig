/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Bengkel() {
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
          <h1>Lapangan Tenis</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Bengkel dan Pool TMA (Traktor, Mesin, dan Alat Berat) PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang menyediakan layanan perawatan, perbaikan, dan pengelolaan traktor, mesin, dan alat berat yang digunakan
              dalam kegiatan pertanian di perkebunan PT Perkebunan Nusantara VII. Fasilitas ini bertujuan untuk menjaga ketersediaan dan kinerja optimal dari traktor, mesin, dan alat berat yang digunakan dalam operasional perkebunan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/CdwdSRBy3iHnukKt5")}>
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

export default Bengkel;
