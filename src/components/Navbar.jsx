import companyLogo from "../public/img/logo.webp";
import "../style/components/Navbar.css";

function Navbar() {
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
              <a href="/datakawasan">Fasilitas</a>
            </li>
            <li>
              <a href="/tentangkami">Tentang Kami</a>
            </li>
            <li>
              <a href="/faq">Faq</a>
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
