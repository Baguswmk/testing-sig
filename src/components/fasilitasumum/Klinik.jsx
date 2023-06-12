/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function SMP() {
  const navigate = useNavigate();
  const handleButtonClicked = () => {
    window.open("https://goo.gl/maps/vVbMQe78eV1QVNPRA");
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
          <h1>Klinik PG Bungamayang</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Klinik di PTPN 7 Bunga Mayang adalah fasilitas kesehatan yang menyediakan pelayanan medis dan perawatan kesehatan bagi masyarakat di dalam kompleks perkebunan tersebut. Klinik ini bertujuan untuk memberikan akses yang mudah
              dan nyaman untuk layanan kesehatan yang berkualitas. Bangunan klinik didesain dengan baik, menciptakan ruang tunggu yang nyaman dan bersih bagi pasien.
              <br />
              <br />
              Di dalam klinik terdapat ruang konsultasi yang dilengkapi dengan peralatan medis dan fasilitas yang diperlukan untuk pemeriksaan medis. Dokter dan tenaga medis yang berpengalaman hadir untuk memberikan pelayanan medis yang
              komprehensif dan peduli terhadap kebutuhan pasien.
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

export default SMP;
