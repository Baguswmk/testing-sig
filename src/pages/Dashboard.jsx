import "../style/pages/Dashboard.css";
import companyLogo from "../public/img/logo.webp";
import profilePict from "../public/img/profilePict.png";
import { ChevronRight, PencilSquare, BoxArrowRight, ChevronDown } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import SliderComponent from "../components/Slider";
import SidebarDashboard from "../components/SidebarDash.jsx";
import Preloader from "../components/Preloader";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenKawasan, setIsOpenKawasan] = useState(false);

  const handleContextMenuKawasan = (e) => {
    e.preventDefault();
    setIsOpenKawasan(!isOpenKawasan);
  };

  const handleClickOutside = () => {
    setIsOpenKawasan(false);
  };

  useEffect(() => {
    // Simulasikan penundaan dengan timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Membersihkan timeout saat komponen diunmount
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
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
              <p className="dataLahan" onClick={handleContextMenuKawasan}>
                Data Kawasan {isOpenKawasan ? <ChevronDown /> : <ChevronRight />}
              </p>
              {isOpenKawasan && (
                <div className="menuContent" onClick={handleClickOutside}>
                  <a href="/datakawasan/rayon-1">Rayon 1</a>
                  <br />
                  <a href="#">Rayon 2</a>
                  <br />

                  <a href="#">Rayon 3</a>
                  <br />

                  <a href="#">Rayon 4</a>
                  <br />

                  <a href="/datakawasan/Office-center">Office Center</a>
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
              <a href="/faq">Bantuan</a>
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
        <SidebarDashboard />
      </div>
    </>
  );
}
export default Dashboard;
