/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function TamanEmbung() {
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

          <h1>Taman Embung</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Taman Embung di PTPN 7 Bunga Mayang adalah fasilitas rekreasi yang menawarkan pengalaman alam yang indah bagi pengunjung kompleks perkebunan. Terletak di lingkungan yang hijau dan asri, taman embung ini memberikan tempat yang
              ideal untuk bersantai, menikmati keindahan alam, dan menghabiskan waktu bersama keluarga atau teman-teman. Taman Embung ini dirancang dengan baik dan memiliki berbagai fasilitas yang menarik. Terdapat jalur pejalan kaki yang
              melingkari embung, area duduk yang nyaman, dan area bermain untuk anak-anak. Pengunjung dapat menjelajahi taman, menikmati pemandangan embung yang tenang, atau hanya duduk santai sambil menikmati udara segar.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
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

export default TamanEmbung;
