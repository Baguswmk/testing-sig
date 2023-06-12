/* eslint-disable react/jsx-key */
import { useState } from "react";
import "../style/components/SidebarDash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMagnifyingGlass, faMosque, faHouse, faBuilding, faArrowRightFromBracket, faLock, faLocationDot, faHospital, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const SidebarDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const lowerCaseQuery = searchQuery.toLowerCase();
    let searchResults = [];

    switch (lowerCaseQuery) {
      case "masjid":
        searchResults = [
          <a href="/fasilitasumum/masjid">
            Masjid <FontAwesomeIcon icon={faMosque} />
          </a>,
        ];
        break;
      case "sekolah":
        searchResults = [
          <a href="/fasilitasumum/sekolah">
            <FontAwesomeIcon icon={faGraduationCap} />
            Sekolah Umum
          </a>,
        ];
        break;
      case "klinik":
        searchResults = [
          <a href="/fasilitasumum/klinik">
            <FontAwesomeIcon icon={faHospital} />
            Klinik
          </a>,
        ];
        break;
      case "mess":
        searchResults = [
          <a href="/fasilitasumum/mess">
            <FontAwesomeIcon icon={faHouse} />
            Mess
          </a>,
        ];
        break;
      default:
        searchResults = ["Tidak ada hasil pencarian"];
        break;
    }

    setSearchResults(searchResults);
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
        <form onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Cari Lokasi" value={searchQuery} onChange={handleSearch} />
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleSearchSubmit} />
        </form>
      </div>

      <div className="searchResults">
        {searchResults.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
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
            <a href="/fasilitasumum/sekolah">
              <FontAwesomeIcon icon={faGraduationCap} />
              Sekolah Umum
            </a>
          </li>
          <li>
            <a href="/fasilitasumum/klinik">
              <FontAwesomeIcon icon={faHospital} />
              Klinik
            </a>
          </li>
          <li>
            <a href="/fasilitasumum/mess">
              <FontAwesomeIcon icon={faHouse} />
              Mess
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
