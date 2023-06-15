/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronRight } from "react-bootstrap-icons";
import SidebarDashboard from "../SidebarDash";
import "../../style/pages/Faq.css";

function FasilitasLainnya() {
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
                <a href="/fasilitasumum/sekolah">Paud PG Bungamayang</a>
                <a href="/fasilitasumum/sekolah">TK PG Bungamayang</a>
                <a href="/fasilitasumum/sekolah">SD PG Bungamayang</a>
                <a href="/fasilitasumum/sekolah">SMP PG Bungamayang</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={2} isOpen={openIndexes.includes(2)} onClick={handleClick} onClickOutside={handleClickOutside} question="Klinik">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/klinik">Klinik</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Toilet">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/toilet">Toilet</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={4} isOpen={openIndexes.includes(4)} onClick={handleClick} onClickOutside={handleClickOutside} question="Gudang">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/gudang">Gudang Gula </a>
                <a href="/fasilitasumum/gudang">Gudang Pupuk </a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={5} isOpen={openIndexes.includes(5)} onClick={handleClick} onClickOutside={handleClickOutside} question="Laboratorium">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/laboratorium">Laboratorium Pabrik PG Bunga Mayang</a>
                <a href="/fasilitasumum/laboratorium">Laboratorium Core Sampler PG Bungamayang</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={6} isOpen={openIndexes.includes(6)} onClick={handleClick} onClickOutside={handleClickOutside} question="Lapangan">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/lapangan">Lapangan Tenis</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={7} isOpen={openIndexes.includes(7)} onClick={handleClick} onClickOutside={handleClickOutside} question="Taman Embung">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/tamanembung">Taman Embung</a>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={8} isOpen={openIndexes.includes(8)} onClick={handleClick} onClickOutside={handleClickOutside} question="Station">
              <div className="faq-deskripsi">
                <a href="/fasilitasumum/station">Mill and Diffuser Station PG Bungamayang PT Perkebunan Nusantara VII</a>
                <a href="/fasilitasumum/station">Mill Station (Dcs) PTPN7 Bungamayang</a>
                <a href="/fasilitasumum/station">Workshop Station Besali</a>
                <a href="/fasilitasumum/station">Stasiun Pengolahan (Mill Station) PG Bungamayang</a>
                <a href="/fasilitasumum/station">Instrument Station 709 PTPN7 Bungamayang</a>
                <a href="/fasilitasumum/station">Cooling Tower</a>
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
