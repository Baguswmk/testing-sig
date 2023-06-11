import { useState } from "react";
import "../style/components/SidebarDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMosque, faSchool, faChalkboardUser, faToilet, faBuilding, faArrowRightFromBracket, faLock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SidebarDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className={`sidebarDash ${isMenuOpen ? "menuOpen" : ""}`}>
      <div className="menuToggle" onClick={toggleMenu}>
        <div className="hamburger">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </div>
      </div>
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
            <a href="/fasilitasumum/masjid">
              Masjid <FontAwesomeIcon icon={faMosque} />
            </a>
          </li>
          <li>
            <a href="/fasilitasumum/sekolahdasar">
              <FontAwesomeIcon icon={faSchool} />
              Sekolah Dasar
            </a>
          </li>
          <li>
            <a href="/fasilitasumum/smp">
              <FontAwesomeIcon icon={faChalkboardUser} />
              SMP
            </a>
          </li>
          <li>
            <a href="/fasilitasumum/toilet">
              <FontAwesomeIcon icon={faToilet} />
              Toilet
            </a>
          </li>
          <li>
            <a href="/fasilitasumum/lainnya">
              <FontAwesomeIcon icon={faBuilding} />
              Lainnya
            </a>
          </li>
        </ul>
      </div>

      <div className="faq">
        <h2>FAQ</h2>
        <ul>
          <li>
            <a href="/faq">
              {" "}
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Cara keluar website
            </a>
          </li>
          <li>
            {" "}
            <a href="/faq">
              {" "}
              <FontAwesomeIcon icon={faLock} />
              Cara mengganti sandi
            </a>
          </li>
          <li>
            {" "}
            <a href="/faq">
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />
              Cara mencari lokasi
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarDashboard;
