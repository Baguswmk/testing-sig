import "../style/Dashboard.css";
import companyLogo from "../public/img/logo.png";
import profilePict from "../public/img/profilePict.png";
import { ChevronRight, PencilSquare, BoxArrowRight, ChevronDown } from "react-bootstrap-icons";
import { useState } from "react";
import SliderComponent from "../components/Slider";

function Dashboard() {
  const [isOpenLahan, setIsOpenLahan] = useState(false);
  const [isOpenBangunan, setIsOpenBangunan] = useState(false);

  const handleContextMenuLahan = (e) => {
    e.preventDefault();
    setIsOpenLahan(!isOpenLahan);
  };

  const handleContextMenuBangunan = (e) => {
    e.preventDefault();
    setIsOpenBangunan(!isOpenBangunan);
  };

  const handleClickOutside = () => {
    setIsOpenLahan(false);
    setIsOpenBangunan(false);
  };

  return (
    <>
      <div className="containerDash">
        {/* Content kiri */}
        <aside className="leftSidebarDash">
          <div className="logoDash">
            <a href="/">
              <img src={companyLogo} alt="" className="companyLogo" />
            </a>
          </div>
          <div className="profileDash">
            <div className="profilePict">
              <img src={profilePict} alt="" className="round-image" />
            </div>

            <div className="editProfile">
              <PencilSquare />
            </div>
            <h4>Eren Yeager</h4>
            <p>Hrd PTPN 7</p>
          </div>

          <ul>
            <li>
              <a href="">Peta Umum</a>
            </li>
            <div className="dataLeft">
              <p className="dataLahan" onClick={handleContextMenuLahan}>
                Data Lahan {isOpenLahan ? <ChevronDown /> : <ChevronRight />}
              </p>
              {isOpenLahan && (
                <div className="menuContent" onClick={handleClickOutside}>
                  <a href="#">Menu Item 1</a>
                </div>
              )}
            </div>
            <div className="dataLeft">
              <p className="dataBangunan" onClick={handleContextMenuBangunan}>
                Data Bangunan {isOpenBangunan ? <ChevronDown /> : <ChevronRight />}
              </p>
              {isOpenBangunan && (
                <div className="menuContent" onClick={handleClickOutside}>
                  <a href="#">Menu Item 1</a>
                </div>
              )}
            </div>
            <li>
              <a href="">Tentang Kami</a>
            </li>
          </ul>

          <div className="buttonDash">
            <button id="btnLogout">
              <a href="/">Keluar</a>
              <BoxArrowRight />
            </button>
            <button id="btnHelp">
              <p>Bantuan</p>
            </button>
          </div>

          {/* Content Tengah */}
        </aside>
        <div className="contentDash">
          <div className="headerDash">
            <h1>PTPN 7 Bungamayang</h1>
          </div>
          <SliderComponent />
        </div>

        {/* Content kanan */}
        <aside className="sidebarDash">
          <div className="headerRightSide">
            <h1>Ingin Cari Lokasi ?</h1>
            <h3>Klik kolom dibawah ini</h3>
          </div>

          <div className="search">
            <input type="text" placeholder="Cari Lokasi" />
          </div>

          <div className="fasilitasUmum">
            <h2>Fasilitas Umum</h2>
            <ul>
              <li>
                <a href="">Masjid</a>
              </li>
              <li>
                <a href="">Sekolah Dasar</a>
              </li>
              <li>
                <a href="">SMP</a>
              </li>
              <li>
                <a href="">Toilet</a>
              </li>
              <li>
                <a href="">Lainnya</a>
              </li>
            </ul>
          </div>

          <div className="faq">
            <h2>FAQ</h2>
            <ul>
              <li>
                <a href="">Cara keluar website</a>
              </li>
              <li>
                {" "}
                <a href="">Cara mengganti sandi</a>
              </li>
              <li>
                {" "}
                <a href="">Cara mencari lokasi</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
export default Dashboard;
