import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "./SidebarDash";
import AlurPenanaman from "../public/img/alurPenanaman.webp";
import "../style/components/fasilitasumum/Masjid.css";

function ProsesProduksi() {
  const navigate = useNavigate();
  const handleButtonClicked = () => {
    window.open("https://goo.gl/maps/1ioBBtwWsboQsVhR6");
  };
  return (
    <div className="wrapper-fasum">
      <div className="container-fasum">
        <div className="header-fasum">
          {/* <h1>{fasum.title}</h1> */}
          <a href="#" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </a>
          <h1> Proses Produksi</h1>
        </div>
        <div className="card-fasum">
          <br />
          <h1>Alur Penanaman Tebu di PG Bungamayang</h1>
          <div className="img-fasum">
            <img src={AlurPenanaman} alt={AlurPenanaman} style={{ height: "500px" }} />
          </div>
          <div className="content-fasum">
            <p>
              Proses tanam tebu dimulai dari persiapan lahan setelah panen, tanah dibersihkan dari berbagai kotoran yang dapat mengganggu laju tanam tebu. Untuk kotoran sisa tanam sebelumnya dapat digunakan sebagai pupuk organik. Setelah
              itu lanjut tahap penyiapan dengan penyebaran urea di sekitar lahan tanam, gunanya untuk mengembalikan unsur-unsur tanah yang hilang setelah tanam sebelumnya. Kemudian masuk proses bajak untuk mempersiapkan media tanam tebu,
              sekaligus penentuan layout kebun supaya terbagi lahan tanam dengan jalan akses. Masuk proses tanam dengan menebar bibit tebu yang telah disiapkan. Setelah tanam usai masuk tahap pemeliharaan dengan memberi pupuk pendukung
              seperti Urea dan KCL dengan takaran yang sudah ditentukan. Hingga tebu telah masuk tahap masak maka proses analisa kemasakan dilakukan untuk menguji kadar masak tanaman tebu, apabila tanaman tebu masak maka penebangan dapat
              dilakukan.
              <br />
              <br />
              Pemanfaatan lahan unit PG Bungamayang Total luas wilayah lahan milik PG Bungamayang seluas 22.748 ha. Wilayah tersebut terbagi untuk beberapa pemanfaatan lahan guna mendukung proses produksi gula pasir produk PG Bungamayang,
              lahan tersebut di antaranya Kebun tebu giling seluas 7.324 ha, untuk kebun bibit seluas 955 ha, Rawa/Embung seluas 4.279 ha, Jalan Type A, B, C, dan kontrol seluas 1.044 ha, emplasmen seluas 209 ha, dan lahan lain-lain seluas
              8.919 ha. Masing-masing luas wilayah terbagi menjadi 4 rayon, dan lahan tebu rakyat. Pembagian tersebut dilakukan untuk memudahkan proses tanam tebu supaya lebih mudah tertangani.
            </p>
            <button id="btn4" onClick={handleButtonClicked}>
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

export default ProsesProduksi;
