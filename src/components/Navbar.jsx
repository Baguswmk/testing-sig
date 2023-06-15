import companyLogo from "../public/img/logo.webp";
import "../style/components/Navbar.css";
import { useState } from "react";

import { ChevronRight, ChevronDown } from "react-bootstrap-icons";

function Navbar() {
  const [isOpenKawasan, setIsOpenKawasan] = useState(false);
  const handleContextMenuKawasan = (e) => {
    e.preventDefault();
    setIsOpenKawasan(!isOpenKawasan);
  };

  const handleClickOutside = () => {
    setIsOpenKawasan(false);
  };
  return (
    <header>
      <section>
        <a href="/" id="logo" target="_blank">
          <img src={companyLogo} alt="ptpn7" className="imgNav" />
        </a>
        <label htmlFor="toggle-1" className="toggle-menu">
          <ul>
            <li></li> <li></li> <li></li>
          </ul>
        </label>
        <input type="checkbox" id="toggle-1"></input>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/datakawasan" onClick={handleContextMenuKawasan}>
                Data Kawasan {isOpenKawasan ? <ChevronDown /> : <ChevronRight />}
              </a>
              {isOpenKawasan && (
                <div className="dropDownMenu" onClick={handleClickOutside}>
                  <a href="/datakawasan/rayon-1">Rayon 1</a>
                  <br />
                  <a className="strikethrough">Rayon 2</a>
                  <br />

                  <a className="strikethrough">Rayon 3</a>
                  <br />

                  <a className="strikethrough">Rayon 4</a>
                  <br />

                  <a href="/datakawasan/Office-center">Office Center</a>
                </div>
              )}
            </li>
            <li>
              <a href="/sejarah">Sejarah</a>
            </li>
            <li>
              <a href="/tentangkami">Tentang Kami</a>
            </li>

            <button id="btn1">
              <a href="/hubungikami"> Hubungi Kami</a>
            </button>
            <button id="btn2">
              <a href="/faq">Bantuan</a>
            </button>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
