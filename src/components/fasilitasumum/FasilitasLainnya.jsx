/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronRight } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
// import ErrorPage from "./ErrorPage";
import "../../style/pages/Faq.css";

function FasilitasLainnya() {
  //   const { id } = useParams();
  //   const faq = dummyData.find((item) => item.id === Number(id));
  //   if (!faq) {
  //     return <ErrorPage />;
  //   }
  const navigate = useNavigate();
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleClick = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  const handleClickOutside = () => {
    setOpenIndexes([]);
  };

  return (
    <div className="wrapper-faq">
      <div className="container-faq">
        <div className="header-faq">
          {/* <h1>{faq.title}</h1> */}
          <a href="#" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </a>
          <h1> Fasilitas Umum</h1>
        </div>
        <div className="card-faq">
          <div className="faq-content">
            <Dropdown index={0} isOpen={openIndexes.includes(0)} onClick={handleClick} onClickOutside={handleClickOutside} question="Masjid">
              <div className="faq-deskripsi">
                <a href="">Masjid Masjid Baiturrohman PTPN IV</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={1} isOpen={openIndexes.includes(1)} onClick={handleClick} onClickOutside={handleClickOutside} question="Sekolah">
              <div className="faq-deskripsi">
                <a href="">TK PG Bungamayang</a>
                <a href="">SD PG Bungamayang</a>
                <a href="">SMP PG Bungamayang</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={2} isOpen={openIndexes.includes(2)} onClick={handleClick} onClickOutside={handleClickOutside} question="Klinik">
              <div className="faq-deskripsi">
                <a href="">Klinik</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Toilet">
              <div className="faq-deskripsi">
                <a href="">Toilet</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Gudang">
              <div className="faq-deskripsi">
                <a href="">Gudang Gula </a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Laboratorium">
              <div className="faq-deskripsi">
                <a href="">Laboratorium Pabrik PG Bunga Mayang</a>
                <a href="">Laboratorium Core Sampler PG Bungamayang</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Lapangan">
              <div className="faq-deskripsi">
                <a href="">Lapangan Tenis</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Taman Embung">
              <div className="faq-deskripsi">
                <a href="">Toilet</a>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <SidebarDashboard />
    </div>
  );
}

function Dropdown({ index, isOpen, onClick, onClickOutside, question, children }) {
  const handleContext = () => {
    onClick(index);
  };

  return (
    <>
      <p onClick={handleContext}>
        {question} {isOpen ? <ChevronDown /> : <ChevronRight />}
      </p>
      {isOpen && (
        <div className="menuContent" onClick={onClickOutside}>
          {children}
        </div>
      )}
    </>
  );
}

export default FasilitasLainnya;
