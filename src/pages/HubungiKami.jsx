import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/pages/HubungiKami.css";
import HubungiPict from "../public/img/hubungi.svg";

function HubungiKami() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="container-hubungi">
          <div className="content-hubungi">
            <div className="card">
              <h1>Hubungi Kami</h1>
              <p>
                Apakah Anda memiliki pertanyaan, masalah, atau kebutuhan khusus? Jangan ragu untuk menghubungi kami melalui informasi kontak di bawah ini: <br />
                <br />
                Telepon: [Nomor Telepon] <br />
                Email: [Alamat Email] <br />
                Alamat Kantor: [Alamat Fisik Kantor]
                <button id="btn3">
                  <a href="/login">Hubungi Via Email</a>
                </button>
              </p>
            </div>

            <img src={HubungiPict} alt="Gambar-Kantor" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HubungiKami;
