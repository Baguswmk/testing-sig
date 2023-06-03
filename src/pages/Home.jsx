import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Home.css";
import heroPict from "../public/img/hero.png";

function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container">
          <div className="hero">
            <h1>
              Selamat datang di Aplikasi <br />
              Sistem Informasi Geografis <br />
              PT PTPN 7 Bungamayang!
            </h1>
          </div>
        </div>
        <div className="content">
          <p>
            Aplikasi ini didesain khusus untuk mempermudah akses dan pengelolaan informasi geografis terkait wilayah kerja PT PTPN 7 Bungamayang. Melalui aplikasi ini, Anda dapat mengeksplorasi berbagai data geografis seperti peta lahan,
            kebun-kebun perkebunan, infrastruktur, dan informasi penting lainnya yang berkaitan dengan perusahaan
            <button id="btn3">
              <a href="/login"> Masuk Sekarang</a>
            </button>
          </p>
          <img src={heroPict} alt="Gambar-Kantor" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
