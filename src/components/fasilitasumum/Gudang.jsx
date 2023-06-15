/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Gudang() {
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
          <br />
          <h1>Gudang Gula</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Gudang Gula PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas penyimpanan dan distribusi gula yang dihasilkan di pabrik gula tersebut. Gudang ini berfungsi untuk menyimpan stok gula yang siap untuk didistribusikan ke
              berbagai tujuan, baik untuk pasar lokal maupun ekspor.
              <br />
              <br />
              Sebagai gudang gula, fasilitas ini memiliki peran penting dalam menjaga ketersediaan gula yang memadai untuk memenuhi permintaan pasar. Gula yang dihasilkan dari pabrik akan dikirim ke gudang ini untuk penyimpanan sementara
              sebelum didistribusikan ke pelanggan atau diserahkan kepada pihak yang bertanggung jawab atas pengiriman.
              <br />
              <br />
              Di Gudang Gula PG Bungamayang, dilakukan pengaturan stok, pemantauan kualitas gula yang disimpan, serta pengaturan pengiriman dan distribusi gula ke berbagai tujuan. Gudang ini juga dilengkapi dengan sistem pengendalian suhu
              dan kelembaban yang sesuai agar kualitas gula tetap terjaga selama penyimpanan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/UHMDvzhZvoehSFwz6")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
          </div>
        </div>
        <br />
        {/* <div className="card-fasum">
          <h1>Gudang Pupuk</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Gudang Gula PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas penyimpanan dan distribusi gula yang dihasilkan di pabrik gula tersebut. Gudang ini berfungsi untuk menyimpan stok gula yang siap untuk didistribusikan ke
              berbagai tujuan, baik untuk pasar lokal maupun ekspor.
              <br />
              <br />
              Sebagai gudang gula, fasilitas ini memiliki peran penting dalam menjaga ketersediaan gula yang memadai untuk memenuhi permintaan pasar. Gula yang dihasilkan dari pabrik akan dikirim ke gudang ini untuk penyimpanan sementara
              sebelum didistribusikan ke pelanggan atau diserahkan kepada pihak yang bertanggung jawab atas pengiriman.
              <br />
              <br />
              Di Gudang Gula PG Bungamayang, dilakukan pengaturan stok, pemantauan kualitas gula yang disimpan, serta pengaturan pengiriman dan distribusi gula ke berbagai tujuan. Gudang ini juga dilengkapi dengan sistem pengendalian suhu
              dan kelembaban yang sesuai agar kualitas gula tetap terjaga selama penyimpanan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/UHMDvzhZvoehSFwz6")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
          </div>
        </div> */}
      </div>
      <SidebarDashboard />
    </div>
  );
}

export default Gudang;
