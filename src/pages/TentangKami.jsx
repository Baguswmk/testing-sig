import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/pages/Sejarah.css";

function TentangKami() {
  return (
    <>
      <Navbar />
      <div className="cardSejarah">
        <div className="containerSejarah">
          <div className="headerSejarah">
            <h1>TentangKami</h1>
          </div>
          <div className="contentSejarah">
            <p>
              Profile PG Bungamayang Pabrik Gula Bungamayang terletak di Desa Negara Tulang Bawang, Kecamatan Bungamayang, Kabupaten Lampung Utara, ± 157 Km dari Bandar Lampung sebagai ibukota propinsi dan ± 45 Km dari Kotabumi sebagai
              ibukota kabupaten. Pabrik ini merupakan salah satu produsen gula terbesar di daerah tersebut. Pabrik Gula Bungamayang memproduksi gula kristal putih dari tebu yang dihasilkan di kebun-kebun tebu yang dimiliki oleh PTPN 7.
              Pabrik Gula terletak di Pabrik Gula ini dibangun bersamaan dengan pembangunan perkebunan tebu pada tahun 1982 dan mulai beroperasi pada tahun 1984. Awalnya pabrik gula ini dibangun dengan kapasitas 4.000 TCD. Pada tahun 2010
              kapasitas giling tersebut ditingkatkan menjadi 5.500 TCD dan tahun 2012 ditingkatkan lagi menjadi 7.000 TCD.
            </p>
            <br />
            <p>
              SDM PG Bungamayang Karyawan PG Bungamayang merupakan aset SDM yang penting dalam proses produksi gula PG Bungamayang. Seluruh karyawan PG Bungamayang berjumlah 1.173 orang. Dengan pembagian 145 orang (12.3%) karyawan tetap,
              124 orang (10.9%) karyawan kampanye, serta 904 orang (77.1%) karyawan outsourcing/PWKT. Masing-masing karyawan terbagi dalam beberapa unit kerja seperti karyawan bidang pengolahan, bidang teknik, bidang tanaman, dan bidang
              administrator.
            </p>
            <br />
            <p>
              Struktur Organisasi Struktur organisasi penting di sebuah perusahaan. Berdasarkan surat nomor SDM/F/259/2021 PG Bungamayang dikepalai oleh seorang Direktur yang membawahi 2 General manajer, yaitu manajer on-farm dan manajer
              off-farm. Masing-masing General manajer menangani unit-unit kerja di bawahnya. General Manajer off-farm bersama General Manajer on-farm membawahi Askep Akt dan Keuangan, Askep SDM dan Umum, Maskep Pengolahan, Maskep Instalasi.
              Sedangkan General manajer on-farm secara khusus membawahi Askep Tebu Rakyat, Askep TMA, Askep Peltek, Askep Tanaman Wilayah.
            </p>
            <button className="btnVideo">
              <a href="https://drive.google.com/file/d/1SwEvEaONUxmyL8GZjgqQ9UZdZaMq3KrH/view" target="blank" rel="noopener">
                Video Profile PTPN 7 Bungamayang
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TentangKami;
