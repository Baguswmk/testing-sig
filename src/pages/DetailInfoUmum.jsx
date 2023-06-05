import SidebarDashboard from "../components/SidebarDash";
import { useParams, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ProfilPict from "../public/img/profilePict.png";
import kantor from "../public/img/kantor.webp";
import Rumah from "../public/img/rumah.webp";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/pages/DetailInfoUmum.css";

function DetailInfoUmum() {
  //   const { id } = useParams();
  //   const detail = dummyData.find((item) => item.id === Number(id));
  //   if (!detail) {
  //     return <ErrorPage />;
  //   }
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper-detail">
        <div className="arrow-back"></div>
        <div className="container-detail">
          <div className="card-detail">
            <div className="header-detail">
              {/* <h1>{detail.title}</h1> */}
              <a href="#" onClick={() => navigate(-1)}>
                <ArrowLeft />
              </a>

              <h1> PT PTPN 7 Bungamayang</h1>
            </div>
            <div className="slider-detail">
              <SliderComponent />
            </div>
            <div className="detail-deskripsi">
              <p>
                Pabrik Gula di Desa Bungamayang adalah sebuah fasilitas industri yang memainkan peran penting dalam produksi gula di wilayah tersebut. Pabrik ini didirikan dengan tujuan untuk mengolah tebu menjadi gula kristal putih yang
                siap dikonsumsi.
              </p>

              <p>
                Pabrik Gula Desa Bungamayang dilengkapi dengan peralatan modern dan teknologi canggih untuk memastikan proses pengolahan tebu berjalan efisien dan berkualitas. Pabrik ini memiliki kapasitas produksi yang signifikan dan
                merupakan sumber penghasilan utama bagi masyarakat di sekitar Desa Bungamayang.
              </p>

              <p>
                Proses produksi gula di pabrik dimulai dengan penerimaan tebu segar yang dipanen di sekitar daerah tersebut. Setelah itu, tebu diolah melalui serangkaian tahapan, termasuk penggilingan, pemanasan, penyaringan, dan
                kristalisasi. Selama proses ini, gula diperoleh dari sari tebu yang diekstraksi dan kemudian dikristalkan menjadi gula kristal putih yang siap dikemas dan didistribusikan.
              </p>
              <button id="btn4">
                <GeoAlt />
                Kunjungi lokasi peta
              </button>
            </div>
          </div>
        </div>
        <SidebarDashboard />
      </div>
    </>
  );
}

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [ProfilPict, Rumah, kantor];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} className="img-detail" />
        </div>
      ))}
    </Slider>
  );
};

export default DetailInfoUmum;
