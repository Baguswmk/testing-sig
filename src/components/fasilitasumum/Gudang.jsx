/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import GudangGula from "../../public/img/components/gudang-gula.webp";
import GudangGula2 from "../../public/img/components/gudang-gula2.webp";
import GudangGula3 from "../../public/img/components/gudang-gula3.webp";
import Bagasse from "../../public/img/components/bagasse-storage.webp";
import LahanPengumpulan from "../../public/img/components/lahan-pengumpulan2.webp";
import "../../style/components/fasilitasumum/Masjid.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gudang() {
  const navigate = useNavigate();
  const handleButtonClicked = (link) => {
    window.open(link);
  };

  const SliderComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const images = [GudangGula, GudangGula2, GudangGula3];

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
          <div className="slider-detail">
            <SliderComponent />
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
        <div className="card-fasum">
          <h1>Gudang Pupuk</h1>
          <div className="content-fasum">
            <p>
              Gudang pupuk adalah fasilitas penyimpanan yang dirancang khusus untuk menyimpan pupuk dalam jumlah besar. Gudang pupuk penting dalam rantai pasok pupuk, karena mereka bertindak sebagai tempat penyimpanan sementara sebelum
              pupuk didistribusikan ke pasar atau pelanggan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/UHMDvzhZvoehSFwz6")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <h1>Bagasse Storage Pabrik Gula Bungamayang atau ampas pembuangan</h1>
          <div className="img-fasum">
            <img src={Bagasse} alt={Bagasse} />
          </div>
          <div className="content-fasum">
            <p>
              Bagasse Storage Pabrik Gula Bungamayang merupakan area yang didedikasikan untuk menyimpan dan mengelola limbah padat yang dihasilkan selama proses pengolahan tebu menjadi gula, yaitu bagas atau ampas tebu. Tempat ini dirancang
              khusus untuk menampung bagas sebelum digunakan untuk berbagai keperluan. Lokasinya berada di dekat pabrik gula, memudahkan pengangkutan dan penggunaan bagas secara efisien.
              <br />
              <br />
              Bagasse storage dilengkapi dengan bangunan gudang atau tempat penyimpanan tertutup yang kuat dan luas. Fasilitas ini mampu menampung jumlah bagas yang dihasilkan oleh pabrik gula dalam skala besar. Bagas disimpan dalam
              tumpukan atau baling-baling yang terorganisir secara sistematis. Penyimpanan yang baik penting untuk menjaga kualitas bagas dan mencegah kelembaban yang berlebihan.
              <br />
              <br />
              Perlindungan terhadap faktor-faktor lingkungan juga diperhatikan dalam Bagasse Storage Pabrik Gula Bungamayang. Langkah-langkah perlindungan seperti penghalang kelembaban dan pemisahan antara bagas segar dan bagas kering
              diterapkan untuk memastikan kualitas yang optimal. Kebersihan juga dijaga agar bagas tetap terjaga dari kontaminasi atau pencemaran yang dapat mempengaruhi kualitas produk akhir.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/tQkBNAYQVJM9rKB49")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <h1>Lahan pengumpulan tebu (Caneyard)</h1>
          <div className="img-fasum">
            <img src={LahanPengumpulan} alt={LahanPengumpulan} />
          </div>
          <div className="content-fasum">
            <p>
              Lahan pengumpulan tebu atau Caneyard PG Bungamayang merupakan area yang digunakan untuk menyimpan tebu sebelum diolah menjadi gula. Tempat ini dirancang khusus untuk mengatur dan mengelola tebu yang masuk ke pabrik gula.
              Caneyard dilengkapi dengan berbagai fasilitas yang mendukung operasionalnya. Terdapat area parkir truk pengangkut tebu serta alat penimbang untuk mengukur berat tebu yang masuk. Selain itu, terdapat juga alat pengangkat atau
              conveyor yang digunakan untuk memindahkan tebu dari truk ke area penyimpanan.
              <br />
              <br />
              Kebersihan dan keamanan menjadi prioritas di Caneyard PG Bungamayang. Area ini dijaga agar tetap bersih dan terhindar dari kotoran atau pencemaran yang dapat mempengaruhi kualitas tebu. Sistem pengamanan seperti pagar dan
              pengawasan dilakukan untuk menjaga keamanan dan mencegah akses yang tidak diizinkan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/qs7t5MTsifZiguBD8")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

export default Gudang;
