import { useNavigate } from "react-router-dom";
import { ArrowLeft, GeoAlt } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import MasjidPict from "../../public/img/kantor.webp";
import "../../style/components/fasilitasumum/Masjid.css";

function Toilet() {
  const navigate = useNavigate();
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
          <h1>Mess PG Bungamayang</h1>
          <div className="img-fasum">
            <img src={MasjidPict} alt={MasjidPict} />
          </div>
          <div className="content-fasum">
            <p>
              MESS (Managerial Employee Support System) General Manager di PTPN 7 Bunga Mayang adalah fasilitas yang menyediakan akomodasi dan layanan dukungan untuk General Manager atau manajer tingkat atas perusahaan di dalam kompleks
              perkebunan tersebut. Fasilitas ini bertujuan untuk memastikan tingkat kenyamanan dan efisiensi kerja bagi manajer yang memegang peran kunci dalam perusahaan. MESS General Manager terletak di area strategis di dalam kompleks
              PTPN 7 Bunga Mayang. Bangunannya didesain dengan baik dan dilengkapi dengan berbagai fasilitas modern. MESS ini menawarkan kamar-kamar yang nyaman dan dilengkapi dengan fasilitas seperti tempat tidur, meja kerja, area lounge,
              kamar mandi pribadi, serta akses internet yang stabil.
              <br />
              <br />
              MESS Tamu 1 dan MESS Tamu 2 di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk tamu atau pengunjung perusahaan yang mengunjungi kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan
              kenyamanan dan kemudahan bagi tamu yang datang dari luar daerah atau memiliki kebutuhan khusus selama kunjungan mereka. Lokasi MESS Tamu 1 dan MESS Tamu 2 mudah diakses oleh tamu yang berkunjung ke kompleks perkebunan.
              Terletak di dekat pusat operasional utama atau area penerimaan tamu, kedua MESS ini memberikan akses yang nyaman dan dekat dengan area kegiatan utama di dalam kompleks perkebunan.
              <br />
              <br />
              30 MESS Karyawan di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk para karyawan di dalam kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan tempat tinggal yang nyaman dan
              layanan dukungan bagi para karyawan yang bekerja di perkebunan. MESS Karyawan di terdiri dari 30 unit akomodasi yang dirancang dengan baik dan dilengkapi dengan fasilitas yang memadai. Setiap unit MESS dilengkapi dengan tempat
              tidur, lemari, meja kerja, dan kamar mandi pribadi. Fasilitas ini menawarkan kenyamanan dan privasi kepada para karyawan selama mereka tinggal di perkebunan. Lokasi MESS Karyawan di mudah diakses oleh para karyawan. Terletak
              di area yang strategis di dalam kompleks PTPN 7 Bunga Mayang, MESS ini memberikan akses yang nyaman dan dekat dengan tempat kerja serta fasilitas lainnya di dalam perkebunan.
            </p>
            <button id="btn4">
              <GeoAlt />
              Kunjungi lokasi peta
            </button>
          </div>
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

export default Toilet;
