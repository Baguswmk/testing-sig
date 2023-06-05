import "../style/components/SidebarDash.css";

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
            <a href="/fasilitasumum/masjid">Masjid</a>
          </li>
          <li>
            <a href="/fasilitasumum/sekolahdasar">Sekolah Dasar</a>
          </li>
          <li>
            <a href="/fasilitasumum/smp">SMP</a>
          </li>
          <li>
            <a href="/fasilitasumum/toilet">Toilet</a>
          </li>
          <li>
            <a href="/fasilitasumum/lainnya">Lainnya</a>
          </li>
        </ul>
      </div>

      <div className="faq">
        <h2>FAQ</h2>
        <ul>
          <li>
            <a href="/faq">Cara keluar website</a>
          </li>
          <li>
            {" "}
            <a href="/faq">Cara mengganti sandi</a>
          </li>
          <li>
            {" "}
            <a href="/faq">Cara mencari lokasi</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarDashboard;
