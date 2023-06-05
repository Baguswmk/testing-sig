/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronRight } from "react-bootstrap-icons";
import SidebarDashboard from "../components/SidebarDash";
// import ErrorPage from "./ErrorPage";
import "../style/pages/Faq.css";

function Faq() {
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
          <h1> FAQ</h1>
        </div>
        <div className="card-faq">
          <div className="faq-content">
            <Dropdown index={0} isOpen={openIndexes.includes(0)} onClick={handleClick} onClickOutside={handleClickOutside} question="Cara keluar website">
              <div className="faq-deskripsi">
                <p>
                  Untuk keluar dari sebuah website, Anda dapat mengikuti langkah-langkah berikut: <br />
                  1. Tutup tab atau jendela browser yang sedang membuka website tersebut. <br />
                  2. Gunakan tombol "Back" atau "Kembali" pada browser untuk kembali ke halaman sebelumnya. <br />
                  3. Jika Anda menggunakan keyboard, tekan tombol "Alt + F4" (untuk Windows) atau "Command + W" (untuk Mac) untuk menutup jendela browser secara keseluruhan.
                  <br />
                  4. Jika menggunakan perangkat seluler, tekan tombol kembali atau navigasi yang sesuai pada perangkat Anda untuk keluar dari aplikasi atau halaman web. <br />
                  5. Anda juga dapat menutup browser dengan mengklik ikon "X" yang terletak di pojok kanan atas jendela browser.
                </p>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={1} isOpen={openIndexes.includes(1)} onClick={handleClick} onClickOutside={handleClickOutside} question="Cara ganti sandi">
              <div className="faq-deskripsi">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi reiciendis qui, eaque corrupti officia unde atque debitis et, ipsum vitae sint iure nostrum quisquam velit esse, commodi harum ratione blanditiis
                  mollitia obcaecati. Corrupti aut explicabo error earum ratione harum hic, quas veritatis, magnam autem quasi aperiam adipisci quidem asperiores laborum dolor. Assumenda, aperiam nam! Ipsam placeat esse quia illo magnam
                  accusantium perferendis pariatur autem, sint vitae corporis nostrum repellendus veniam reprehenderit natus fuga tempore cupiditate! Facilis ducimus corporis tenetur ad, temporibus perferendis earum officiis modi magnam,
                  quasi, ea libero harum cupiditate et eius nobis repudiandae! Expedita repellat suscipit magnam.
                </p>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={2} isOpen={openIndexes.includes(2)} onClick={handleClick} onClickOutside={handleClickOutside} question="Cara mencari lokasi">
              <div className="faq-deskripsi">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi reiciendis qui, eaque corrupti officia unde atque debitis et, ipsum vitae sint iure nostrum quisquam velit esse, commodi harum ratione blanditiis
                  mollitia obcaecati. Corrupti aut explicabo error earum ratione harum hic, quas veritatis, magnam autem quasi aperiam adipisci quidem asperiores laborum dolor. Assumenda, aperiam nam! Ipsam placeat esse quia illo magnam
                  accusantium perferendis pariatur autem, sint vitae corporis nostrum repellendus veniam reprehenderit natus fuga tempore cupiditate! Facilis ducimus corporis tenetur ad, temporibus perferendis earum officiis modi magnam,
                  quasi, ea libero harum cupiditate et eius nobis repudiandae! Expedita repellat suscipit magnam.
                </p>
              </div>
            </Dropdown>
          </div>
          <div className="faq-content">
            <Dropdown index={3} isOpen={openIndexes.includes(3)} onClick={handleClick} onClickOutside={handleClickOutside} question="Cara membuat akun">
              <div className="faq-deskripsi">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi reiciendis qui, eaque corrupti officia unde atque debitis et, ipsum vitae sint iure nostrum quisquam velit esse, commodi harum ratione blanditiis
                  mollitia obcaecati. Corrupti aut explicabo error earum ratione harum hic, quas veritatis, magnam autem quasi aperiam adipisci quidem asperiores laborum dolor. Assumenda, aperiam nam! Ipsam placeat esse quia illo magnam
                  accusantium perferendis pariatur autem, sint vitae corporis nostrum repellendus veniam reprehenderit natus fuga tempore cupiditate! Facilis ducimus corporis tenetur ad, temporibus perferendis earum officiis modi magnam,
                  quasi, ea libero harum cupiditate et eius nobis repudiandae! Expedita repellat suscipit magnam.
                </p>
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

export default Faq;
