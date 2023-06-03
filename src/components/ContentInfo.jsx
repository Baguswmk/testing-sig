import "../style/Dashboard.css";
import profilePict from "../public/img/profilePict.png";
import rumah from "../public/img/rumah.png";
import kantor from "../public/img/kantor.png";
import pabrik from "../public/img/pabrik.png";
import { ArrowRight } from "react-bootstrap-icons";
import "../style/ContentInfo.css";

function ContentInfoUmum() {
  return (
    <>
      <div className="infoHeader">
        <h1>Informasi Umum</h1>
      </div>
      <div className="cardInfo">
        <div className="cardImage">
          <img src={kantor} alt="Gambar" />
        </div>
        <div className="cardContent">
          <p>
            Kami berkomitmen untuk menyediakan pengalaman pengguna yang optimal dan memberikan informasi yang akurat dan terkini. Aplikasi ini juga dilengkapi dengan fitur-fitur canggih yang memungkinkan Anda untuk melakukan pencarian,
            pemetaan, dan analisis data geografis sesuai kebutuhan.
          </p>

          <a href="#" className="btnSelengkapnya">
            Selengkapnya <ArrowRight />
          </a>
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardImage">
          <img src={pabrik} alt="Gambar" />
        </div>
        <div className="cardContent">
          <p>
            Pabrik gula PT PTPN 7 Bungamayang memiliki fasilitas produksi modern dan dilengkapi dengan peralatan canggih untuk memproses tebu menjadi gula yang siap dikonsumsi. Proses produksi melibatkan tahap-tahap seperti penerimaan tebu,
            pemrosesan tebu menjadi air tebu, pemanasan dan pengurangan air, kristalisasi gula, pemurnian, pengeringan, pengemasan, dan distribusi.
          </p>

          <a href="#" className="btnSelengkapnya">
            Selengkapnya <ArrowRight />
          </a>
        </div>
      </div>
      <div className="infoHeader">
        <h1>Informasi Lainnya</h1>
      </div>
      <div className="cardInfo">
        <div className="cardImage">
          <img src={rumah} alt="Rumah" />
        </div>
        <div className="cardContent">
          <p>
            Kami berkomitmen untuk menyediakan pengalaman pengguna yang optimal dan memberikan informasi yang akurat dan terkini. Aplikasi ini juga dilengkapi dengan fitur-fitur canggih yang memungkinkan Anda untuk melakukan pencarian,
            pemetaan, dan analisis data geografis sesuai kebutuhan.
          </p>

          <a href="#" className="btnSelengkapnya">
            Selengkapnya <ArrowRight />
          </a>
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardImage">
          <img src={profilePict} alt="Gambar" />
        </div>
        <div className="cardContent">
          <p>
            Kami berkomitmen untuk menyediakan pengalaman pengguna yang optimal dan memberikan informasi yang akurat dan terkini. Aplikasi ini juga dilengkapi dengan fitur-fitur canggih yang memungkinkan Anda untuk melakukan pencarian,
            pemetaan, dan analisis data geografis sesuai kebutuhan.
          </p>

          <a href="#" className="btnSelengkapnya">
            Selengkapnya <ArrowRight />
          </a>
        </div>
      </div>
    </>
  );
}

export default ContentInfoUmum;
