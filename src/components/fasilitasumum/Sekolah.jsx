import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import Paud from "../../public/img/components/paud.webp";
import TKPict from "../../public/img/components/tk.webp";
import SDPict from "../../public/img/components/sd.webp";
import SMPPict from "../../public/img/components/smp.webp";

import "../../style/components/fasilitasumum/Masjid.css";

function Sekolah() {
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
          <div className="item-fasum">
            <h1>PAUD PG Bungamayang </h1>
            <div className="img-fasum">
              <img src={Paud} alt={Paud} />
            </div>
            <div className="content-fasum">
              <p>
                Paud di PTPN 7 Bunga Mayang adalah sebuah fasilitas pendidikan yang menyediakan lingkungan yang mendukung untuk anak-anak usia dini dalam proses belajar dan bermain. Paud ini menawarkan tempat yang aman, ramah, dan penuh
                keceriaan. Lokasi Paud ini terletak di dalam kompleks PTPN 7 Bunga Mayang dan mudah diakses oleh para orang tua atau wali murid.
              </p>
              <button id="btn4" onClick={() => handleButtonClicked("https://goo.gl/maps/PK5352ffdo1E3SUN9")}>
                <GeoAlt />
                Kunjungi lokasi peta
              </button>
            </div>
          </div>
        </div>
        <div className="card-fasum">
          <div className="item-fasum">
            <h1>TK PG Bungamayang </h1>
            <div className="img-fasum">
              <img src={TKPict} alt={TKPict} />
            </div>
            <div className="content-fasum">
              <p>
                TK di PTPN 7 Bunga Mayang adalah sebuah fasilitas pendidikan yang menyediakan lingkungan yang mendukung untuk anak-anak usia dini dalam proses belajar dan bermain. Terletak di dalam kompleks perkebunan Bunga Mayang, TK ini
                menawarkan tempat yang aman, ramah anak, dan penuh keceriaan.
                <br />
                Lokasi TK ini mudah diakses oleh para orang tua atau wali murid. Terletak di dalam kompleks PTPN 7 Bunga Mayang, fasilitas ini dapat dicapai melalui jalan utama yang dilengkapi dengan tempat parkir yang memadai. Dikelilingi
                oleh lingkungan yang alami dan hijau, TK ini menyediakan suasana yang mendukung bagi pertumbuhan dan perkembangan anak-anak.
              </p>
              <button id="btn4" onClick={() => handleButtonClicked("https://goo.gl/maps/LKJf1tufe5f8z9HM9")}>
                <GeoAlt />
                Kunjungi lokasi peta
              </button>
            </div>
          </div>
        </div>
        <div className="card-fasum">
          <div className="item-fasum">
            <h1>SD PG Bungamayang</h1>
            <div className="img-fasum">
              <img src={SDPict} alt={SDPict} />
            </div>
            <div className="content-fasum">
              <p>
                Masjid Al-Ikhlas di Desa Bungamayang adalah sebuah tempat ibadah yang menjadi pusat kegiatan keagamaan bagi umat Islam di wilayah tersebut. Masjid ini memiliki arsitektur yang indah dan menggambarkan tradisi Islam dalam
                desainnya. Dengan atap yang menjulang tinggi dan menara yang menjadi ciri khasnya, masjid ini menjadi landmark yang mencolok di sekitar Desa Bungamayang.
                <br />
                <br />
                Didirikan dengan tujuan untuk menyediakan tempat yang nyaman bagi umat Muslim dalam menjalankan ibadah mereka, Masjid Al-Ikhlas juga menawarkan berbagai fasilitas yang lengkap. Dalam kompleks masjid, terdapat ruang shalat
                yang luas dan nyaman, dilengkapi dengan karpet yang indah dan fasilitas wudhu yang bersih. Selain itu, masjid ini juga memiliki ruang pertemuan untuk kegiatan komunitas dan pengajian agama.
                <br />
                <br />
                Masjid Al-Ikhlas aktif mengadakan berbagai kegiatan keagamaan, seperti shalat berjamaah, kajian agama, dan pengajian anak-anak. Khutbah Jumat juga diadakan secara rutin untuk memberikan pemahaman dan inspirasi kepada jamaah.
                Masjid ini menjadi tempat berkumpulnya umat Muslim Desa Bungamayang dalam menjalin silaturahmi dan meningkatkan pemahaman agama.
              </p>
              <button id="btn4" onClick={() => handleButtonClicked("https://goo.gl/maps/S4dU2s3RKcHBC91Q9")}>
                <GeoAlt />
                Kunjungi lokasi peta
              </button>
            </div>
          </div>
        </div>
        <div className="card-fasum">
          <div className="item-fasum">
            <h1>SMP PG Bungamayang</h1>
            <div className="img-fasum">
              <img src={SMPPict} alt={SMPPict} />
            </div>
            <div className="content-fasum">
              <p>
                SMP (Sekolah Menengah Pertama) di PTPN 7 Bunga Mayang adalah lembaga pendidikan yang memberikan akses pendidikan menengah yang berkualitas bagi remaja di dalam kompleks perkebunan tersebut. Terletak di lingkungan alam yang
                indah, sekolah ini menciptakan lingkungan belajar yang inspiratif dan mendukung perkembangan akademik dan sosial siswa.
              </p>
              <button id="btn4" onClick={() => handleButtonClicked("https://goo.gl/maps/KaVC5hDrPD1rfZNP6")}>
                <GeoAlt />
                Kunjungi lokasi peta
              </button>
            </div>
          </div>
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

export default Sekolah;
