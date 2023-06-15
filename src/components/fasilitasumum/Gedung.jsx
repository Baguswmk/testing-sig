/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Gedung() {
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
          <h1>Kantor Central PG</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Kantor Central PTPN VII Distrik Bungamayang merupakan kantor pusat atau markas besar dari PTPN VII yang terletak di Distrik Bungamayang. PTPN VII adalah sebuah perusahaan negara yang bergerak di bidang perkebunan.
              <br />
              <br />
              Kantor Central PTPN VII Distrik Bungamayang berfungsi sebagai pusat pengelolaan dan pengendalian operasional perkebunan di wilayah tersebut. Di kantor pusat ini, dilakukan berbagai kegiatan manajerial, administrasi,
              perencanaan, dan pengawasan terkait operasional perkebunan. Selain itu, kantor ini juga menjadi tempat berkumpulnya berbagai departemen dan divisi yang terkait dengan kegiatan perkebunan di wilayah Distrik Bungamayang.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/b3xpLDAB9gioPsKc8")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
          </div>
          <br />
        </div>
        <div className="card-fasum">
          <br />
          <h1>Gedung Tjoek Soepono PG Bungamayang</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Gedung Tjoek Soepono PG Bunga Mayang merupakan salah satu gedung pertemuan atau gedung serba guna yang terletak di daerah kantor central PTPN 7 Bungamayang. Gedung ini terhias dengan bagus dan terjaga dengan baik serta.
              memiliki bentuk yang unik.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/6afkYP4AUb6C1MJa6")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
          </div>
          <br />
        </div>
        <div className="card-fasum">
          <br />
          <h1>Kantor TMA PG Bungamayang </h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Kantor TMA (Teknik Mesin Alat) di PG Bunga Mayang merupakan fasilitas yang berfungsi sebagai pusat administrasi dan pengelolaan peralatan dan mesin-mesin di pabrik gula tersebut. Kantor ini memiliki peran penting dalam menjaga
              kelancaran operasional perusahaan, pemeliharaan peralatan, serta pengawasan dan perencanaan perawatan mesin-mesin yang digunakan dalam proses produksi. Kantor TMA PG Bunga Mayang merupakan salah satu bagian penting dalam
              pengelolaan peralatan dan mesin-mesin di pabrik gula. Melalui kantor ini, perusahaan dapat melakukan pemeliharaan terencana, perbaikan cepat jika ada kerusakan, dan pemantauan kondisi peralatan secara rutin untuk menjaga
              produktivitas dan efisiensi operasional pabrik gula.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/1HdTJ7fFL3z4EXd29")}>
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

export default Gedung;
