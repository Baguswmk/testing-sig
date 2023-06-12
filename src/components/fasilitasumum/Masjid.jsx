import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Masjid() {
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
          <h1> Fasilitas Umum</h1>
        </div>
        <div className="card-fasum">
          <h1>Masjid Al-Ikhlas</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Masjid Al-Ikhlas di Desa Bungamayang adalah sebuah tempat ibadah yang menjadi pusat kegiatan keagamaan bagi umat Islam di wilayah tersebut. Masjid ini memiliki arsitektur yang indah dan menggambarkan tradisi Islam dalam
              desainnya. Dengan atap yang menjulang tinggi dan menara yang menjadi ciri khasnya, masjid ini menjadi landmark yang mencolok di sekitar Desa Bungamayang.
              <br />
              <br />
              Didirikan dengan tujuan untuk menyediakan tempat yang nyaman bagi umat Muslim dalam menjalankan ibadah mereka, Masjid Al-Ikhlas juga menawarkan berbagai fasilitas yang lengkap. Dalam kompleks masjid, terdapat ruang shalat yang
              luas dan nyaman, dilengkapi dengan karpet yang indah dan fasilitas wudhu yang bersih. Selain itu, masjid ini juga memiliki ruang pertemuan untuk kegiatan komunitas dan pengajian agama.
              <br />
              <br />
              Masjid Al-Ikhlas aktif mengadakan berbagai kegiatan keagamaan, seperti shalat berjamaah, kajian agama, dan pengajian anak-anak. Khutbah Jumat juga diadakan secara rutin untuk memberikan pemahaman dan inspirasi kepada jamaah.
              Masjid ini menjadi tempat berkumpulnya umat Muslim Desa Bungamayang dalam menjalin silaturahmi dan meningkatkan pemahaman agama.
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
