import "../style/pages/Dashboard.css";

const SidebarDashboard = () => {
  return (
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
  );
};

export default SidebarDashboard;
