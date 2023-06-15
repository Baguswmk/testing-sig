/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Station() {
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
          <h1>Mill and Diffuser Station PG Bungamayang PT Perkebunan Nusantara VII</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Mill and Diffuser Station PG Bungamayang adalah fasilitas yang merupakan bagian dari PT Perkebunan Nusantara VII. Fasilitas ini merupakan pabrik pengolahan tebu (gula) yang terletak di PG Bungamayang. Tugas utama Mill and
              Diffuser Station adalah mengolah tebu menjadi gula melalui proses pemrosesan yang melibatkan beberapa tahap.
              <br />
              <br />
              Di Mill and Diffuser Station, tebu diproses dengan menggunakan mesin penggilingan (mill) atau mesin penyosoh (diffuser) untuk memisahkan jus tebu dari serat tebu. Setelah itu, jus tebu tersebut akan melalui beberapa tahap
              pemurnian, pemanasan, pengendapan, dan pengeringan untuk menghasilkan kristal gula yang siap dikemas.
              <br />
              <br />
              Mill and Diffuser Station PG Bungamayang dilengkapi dengan peralatan dan mesin modern untuk memastikan pengolahan tebu menjadi gula dilakukan dengan efisien dan sesuai standar kualitas. Proses pengolahan dilakukan dengan
              mengutamakan kebersihan, keamanan, dan kualitas produk gula yang dihasilkan.
              <br />
              <br />
              Fasilitas Mill and Diffuser Station PG Bungamayang merupakan salah satu bagian penting dalam rantai produksi gula di PT Perkebunan Nusantara VII. Dengan adanya fasilitas ini, PG Bungamayang dapat menghasilkan gula berkualitas
              tinggi yang siap dikirim dan didistribusikan ke pasar.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <br />
          <br />
          <h1>Mill Station (Dcs) PTPN7 Bungamayang</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Mill Station (Dcs) PTPN7 Bungamayang adalah salah satu bagian penting dalam pabrik pengolahan tebu (gula) milik PT Perkebunan Nusantara VII. Fasilitas ini bertanggung jawab atas pengaturan dan pengendalian proses produksi di
              pabrik pengolahan tebu.
              <br />
              <br />
              Mill Station (Dcs) menggunakan sistem Distributed Control System (DCS) yang merupakan teknologi otomatisasi industri untuk mengontrol dan memonitor proses produksi secara efisien. DCS memungkinkan pengendalian yang
              terintegrasi dari berbagai unit dan mesin di pabrik, termasuk mesin penggilingan (mill), conveyor, pengering, dan peralatan lainnya yang terlibat dalam pengolahan tebu menjadi gula.
              <br />
              <br />
              Dengan adanya Mill Station (Dcs) PTPN7 Bungamayang, proses produksi gula dapat diatur secara otomatis dan efisien. DCS memungkinkan pengawasan yang terpusat, pemantauan suhu, tekanan, kelembaban, dan parameter lainnya dalam
              pabrik untuk menjaga kualitas dan efisiensi produksi.
              <br />
              <br />
              Sebagai bagian dari pabrik pengolahan tebu, Mill Station (Dcs) PTPN7 Bungamayang memiliki peran krusial dalam mengoptimalkan produksi gula dengan memastikan pengaturan yang tepat dan pengendalian yang efisien. Hal ini membantu
              memastikan kualitas gula yang dihasilkan sesuai dengan standar dan memenuhi kebutuhan pasar.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <br />
          <br />
          <h1>Workshop Station Besali</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Workshop Station Besali Bunga Mayang adalah fasilitas workshop yang terletak di PT Perkebunan Nusantara VII Bungamayang. Fasilitas ini digunakan untuk melakukan berbagai kegiatan perbaikan, pemeliharaan, dan penggantian
              komponen mesin serta peralatan yang digunakan dalam operasional perkebunan.
              <br />
              <br />
              Workshop Station Besali Bunga Mayang dilengkapi dengan peralatan dan alat yang diperlukan untuk melakukan berbagai pekerjaan teknis, seperti perbaikan mesin, pengelasan, perawatan peralatan, dan perakitan komponen. Tenaga
              kerja terampil dan mekanik yang terlatih bekerja di workshop ini untuk menangani perbaikan dan pemeliharaan mesin dan peralatan perkebunan.
              <br />
              <br />
              Di Workshop Station Besali Bunga Mayang, berbagai kegiatan pemeliharaan dan perbaikan dilakukan untuk memastikan bahwa mesin dan peralatan perkebunan berfungsi dengan baik. Hal ini penting untuk menjaga kelancaran operasional
              perkebunan, meningkatkan efisiensi, dan meminimalkan waktu henti produksi akibat kerusakan atau gangguan teknis.
              <br />
              <br />
              Workshop Station Besali Bunga Mayang juga berperan dalam menjaga keandalan dan kualitas peralatan perkebunan. Melalui kegiatan pemeliharaan rutin dan perbaikan yang dilakukan di workshop, peralatan dapat tetap dalam kondisi
              optimal dan memiliki umur pakai yang lebih panjang.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <br />
          <br />
          <h1>Stasiun Pengolahan (Mill Station) PG Bungamayang</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Stasiun Pengolahan (Mill Station) PG Bungamayang merupakan bagian penting dari PT Perkebunan Nusantara VII Bungamayang yang bertanggung jawab untuk mengolah tebu menjadi gula. Stasiun Pengolahan adalah fasilitas utama dalam
              proses produksi gula di pabrik.
              <br />
              <br />
              Di Stasiun Pengolahan PG Bungamayang, tebu dari perkebunan diolah menjadi gula melalui serangkaian proses pengolahan yang meliputi pemrosesan, pemecahan tebu, pengepresan, penyaringan, pemurnian, pengeringan, dan pengemasan.
              Setiap tahap proses dilakukan dengan menggunakan peralatan dan mesin khusus yang dirancang untuk mengoptimalkan efisiensi dan kualitas produk.
              <br />
              <br />
              Stasiun Pengolahan dilengkapi dengan berbagai peralatan dan sistem otomasi modern untuk memastikan proses pengolahan berjalan dengan baik. Pada tahap awal, tebu diproses untuk memisahkan air, limbah, dan kotoran. Kemudian,
              tebu diproses melalui tahap penggilingan dan pengepresan untuk menghasilkan nira atau cairan manis yang kaya akan gula.
              <br />
              <br />
              Nira kemudian melewati tahap pemurnian, pengeringan, dan pemrosesan lanjutan untuk menghasilkan gula kristal yang siap dikemas dan dipasarkan. Setiap tahap proses ini membutuhkan pengawasan dan kontrol ketat untuk memastikan
              kualitas dan keamanan produk.
              <br />
              <br />
              Stasiun Pengolahan PG Bungamayang juga menerapkan standar kebersihan dan sanitasi yang tinggi dalam semua proses pengolahan untuk menjaga kebersihan produk dan memastikan kepatuhan terhadap peraturan sanitasi pangan.
              <br />
              <br />
              Dengan adanya Stasiun Pengolahan PG Bungamayang, PT Perkebunan Nusantara VII dapat menghasilkan gula berkualitas tinggi yang siap dipasarkan ke konsumen. Stasiun Pengolahan ini merupakan salah satu bagian penting dalam rantai
              produksi gula yang berperan dalam menjaga efisiensi, kualitas, dan keberlanjutan operasional perkebunan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <br />
          <br />
          <h1>Instrument Station 709 PTPN7 Bungamayang</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Instrument Station 709 PTPN7 Bungamayang adalah bagian dari PT Perkebunan Nusantara VII Bungamayang yang bertanggung jawab untuk pengelolaan dan pemeliharaan instrumen atau alat ukur yang digunakan dalam proses produksi di
              pabrik gula.
              <br />
              <br />
              Sebagai sebuah stasiun instrument, Instrument Station 709 bertanggung jawab untuk mengawasi, memelihara, dan memastikan ketersediaan instrumen yang diperlukan dalam berbagai unit atau bagian di PTPN7 Bungamayang.
              Instrumen-instrumen ini digunakan untuk mengukur dan memantau berbagai parameter dan kondisi operasional penting dalam produksi gula, seperti suhu, tekanan, aliran, level, dan lain sebagainya.
              <br />
              <br />
              Instrument Station 709 PTPN7 Bungamayang memiliki peran penting dalam menjaga akurasi dan keandalan instrumen. Tugas-tugas yang dilakukan di stasiun ini termasuk pemeliharaan rutin, kalibrasi, pemeriksaan, perbaikan, dan
              penggantian instrumen yang rusak atau tidak berfungsi dengan baik.
              <br />
              <br />
              Dengan menjaga kondisi dan kinerja instrumen yang optimal, Instrument Station 709 memastikan bahwa data yang dihasilkan dari instrumen tersebut akurat dan dapat diandalkan. Hal ini penting dalam memonitor dan mengontrol proses
              produksi gula untuk mencapai efisiensi, kualitas, dan keamanan yang diinginkan.
              <br />
              <br />
              Instrument Station 709 PTPN7 Bungamayang berperan dalam menjaga kelancaran operasional dan efisiensi produksi di pabrik gula. Dengan memastikan instrumen yang tepat dan berkualitas tinggi, stasiun ini membantu memastikan
              pengendalian yang baik atas parameter-parameter penting dalam proses produksi, sehingga mempengaruhi kualitas dan kuantitas hasil produksi gula yang dihasilkan.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
            <br />
            <br />
          </div>
        </div>
        <div className="card-fasum">
          <br />
          <br />
          <h1>Cooling Tower</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              Cooling Tower di PG Bungamayang PT Perkebunan Nusantara VII merupakan salah satu fasilitas yang digunakan dalam proses produksi gula. Cooling Tower berfungsi untuk mendinginkan air yang digunakan dalam proses industri,
              khususnya dalam pabrik gula.
              <br />
              <br />
              Proses produksi gula menghasilkan panas yang tinggi, dan cooling tower berperan dalam menghilangkan panas tersebut dengan cara mengalirkan air panas ke atas cooling tower dan membiarkannya terpapar udara lembut yang mengalir
              melalui permukaan kisi-kisi atau filling. Udara mengambil panas dari air sehingga mengakibatkan pendinginan air.
              <br />
              <br />
              Cooling Tower pada PG Bungamayang PT Perkebunan Nusantara VII memiliki beberapa komponen penting, seperti kisi-kisi atau filling, fan, dan pompa air. Kisi-kisi atau filling berfungsi untuk memperluas permukaan kontak antara
              air dan udara, sehingga meningkatkan efisiensi pendinginan. Fan berperan dalam menggerakkan udara melalui kisi-kisi atau filling. Sedangkan pompa air digunakan untuk mengalirkan air ke cooling tower.
              <br />
              <br />
              Dengan adanya Cooling Tower, suhu air yang digunakan dalam proses produksi gula dapat dipertahankan dalam kisaran yang diinginkan. Hal ini penting untuk menjaga kualitas dan efisiensi proses produksi gula. Selain itu, Cooling
              Tower juga membantu mengurangi penggunaan air dalam proses industri dengan mendaur ulang air yang digunakan.
              <br />
              <br />
              Cooling Tower di PG Bungamayang PT Perkebunan Nusantara VII merupakan salah satu komponen penting dalam sistem produksi gula yang membantu menjaga suhu dan efisiensi proses. Dengan menjaga suhu air yang optimal, Cooling Tower
              berperan dalam mencapai kualitas gula yang baik dan menjaga keberlanjutan produksi yang efisien.
            </p>
            <button id="btn4" onClick={handleButtonClicked("https://goo.gl/maps/QtnLfDHbiX5jBQS78")}>
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

export default Station;
