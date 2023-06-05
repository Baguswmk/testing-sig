import companyLogo from "../public/img/logo.webp";
import "../style/components/Navbar.css";

function Navbar() {
  return (
    <header>
      <section>
        <a href="" id="logo" target="_blank">
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
              <a href="/datalahan">Data Lahan</a>
            </li>
            <li>
              <a href="/databangunan">Data Bangunan</a>
            </li>
            <li>
              <a href="/tentangkami">Tentang Kami</a>
            </li>
            <button id="btn1">Hubungi Kami</button>
            <button id="btn2">Bantuan</button>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
