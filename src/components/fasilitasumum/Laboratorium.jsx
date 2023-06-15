/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import LabPabrik from "../../public/img/components/lab-pabrik.webp";
import LabCore from "../../public/img/components/lab-core-sampler.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Laboratorium() {
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
          <h1>Laboratorium Pabrik PG Bunga Mayang</h1>
          <div className="img-fasum">
            <img src={LabPabrik} alt={LabPabrik} />
          </div>
          <div className="content-fasum">
            <p>
              Laboratorium Pabrik PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang berfungsi untuk melakukan pengujian dan analisis terhadap berbagai parameter dan kualitas produk yang dihasilkan di pabrik gula (PG).
              <br />
              <br />
              Laboratorium ini bertanggung jawab dalam memastikan bahwa produk gula yang dihasilkan memenuhi standar kualitas yang ditetapkan Di Laboratorium Pabrik PG Bungamayang, para ahli laboratorium akan melakukan pengujian dan
              analisis terhadap berbagai parameter seperti kadar gula, kelembaban, kandungan abu, pH, dan parameter lainnya yang relevan dengan kualitas gula. Pengujian ini bertujuan untuk memastikan bahwa gula yang dihasilkan memiliki
              kualitas yang sesuai dengan standar yang ditetapkan, baik untuk konsumsi maupun keperluan industri.
              <br />
              <br />
              Laboratorium ini juga dapat melakukan pemantauan dan pengujian terhadap proses produksi di pabrik gula, seperti pengujian kualitas tebu sebelum diproses, pengujian limbah cair, dan pengujian kualitas air yang digunakan dalam
              proses produksi Laboratorium Pabrik PG Bungamayang PT Perkebunan Nusantara VII merupakan bagian penting dalam menjaga kualitas dan keberlanjutan produksi gula di pabrik. Hasil pengujian dan analisis yang dilakukan di
              laboratorium ini akan digunakan sebagai acuan untuk mengambil keputusan terkait proses produksi dan kualitas produk yang dihasilkan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
          </div>
        </div>
        <div className="card-fasum">
        <br />
          <h1>Laboratorium Core Sampler PG Bungamayang</h1>
          <div className="img-fasum">
            <img src={LabCore} alt={LabCore} />
          </div>
          <div className="content-fasum">
            <p>
              Laboratorium Core Sampler di PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang digunakan untuk pengambilan sampel inti (core) tebu. Sampel inti ini digunakan untuk analisis kualitas tebu yang meliputi kandungan
              gula, kadar air, serat, dan komponen-komponen lainnya yang relevan.
              <br />
              <br />
              Fungsi dari Laboratorium Core Sampler adalah untuk memastikan kualitas tebu yang masuk ke pabrik gula. Dengan mengambil sampel inti dari tebu yang masuk, laboratorium dapat melakukan pengujian dan analisis untuk memonitor
              kualitas tebu tersebut. Hasil analisis ini digunakan untuk mengatur parameter pengolahan tebu, seperti pengaturan proses ekstraksi dan penggilingan, guna memastikan produksi gula berkualitas tinggi.
              <br />
              <br />
              Laboratorium Core Sampler dilengkapi dengan peralatan khusus, seperti alat pengambil sampel inti tebu, alat penggiling tebu, alat pengukur kadar air, dan peralatan analisis laboratorium lainnya. Tenaga ahli atau petugas
              laboratorium akan bertanggung jawab dalam pengambilan sampel, pengujian, dan pelaporan hasil analisis kepada pihak terkait di pabrik gula.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/RCodW5ixnJ6Rb8ju9")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
          </div>
        </div>
        <div className="card-fasum">
        <br />
          <h1>Pusat Penelitian Perkebunan Gula Indonesia</h1>
          <div className="content-fasum">
            <p>
              Pusat Penelitian Perkebunan Gula Indonesia, disingkat P3GI, adalah lembaga penelitian pergulaan di Indonesia. Lembaga penelitian yang berpusat di Pasuruan, Jawa Timur, ini bertugas melaksanakan penelitian, menghasilkan
              mengkaji teknologi dan produk pergulaan dan pemanis bagi kemajuan masyarakat gula, khususnya petani tebu dan pabrik gula, dan memberikan bantuan teknis kepada klien.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/7Gm6pbb3qL8JwTv88")}>
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

export default Laboratorium;
