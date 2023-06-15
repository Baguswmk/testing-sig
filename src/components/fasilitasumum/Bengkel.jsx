/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import BengkelPool from "../../public/img/components/bengkel-pool.webp";
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
          <br />
          <h1>Bengkel dan Pool TMA PG Bungamayang PTPN 7</h1>
          <div className="img-fasum">
            <img src={BengkelPool} alt={BengkelPool} />
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
          <br />
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

export default Bengkel;
