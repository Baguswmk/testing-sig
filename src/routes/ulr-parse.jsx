import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import RayonSatu from "../pages/DataKawasan/RayonSatu.jsx";
import OfficeCenter from "../pages/DataKawasan/OfficeCenter.jsx";
import TentangKami from "../pages/TentangKami.jsx";
import HubungiKami from "../pages/HubungiKami.jsx";
import Login from "../pages/LoginPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Map from "../components/Map.jsx";
import DetailInfoUmum from "../pages/DetailInfoUmum.jsx";
import Faq from "../pages/Faq.jsx";
import Masjid from "../components/Fasilitasumum/Masjid.jsx";
import Sekolah from "../components/Fasilitasumum/Sekolah.jsx";
import Klinik from "../components/Fasilitasumum/Klinik.jsx";
import Mess from "../components/Fasilitasumum/Mess.jsx";
import FasilitasLainnya from "../components/fasilitasumum/FasilitasLainnya.jsx";

function urlParse() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:{id}" element={<DetailInfoUmum />} />
        <Route path="/datakawasan/rayon-1" element={<RayonSatu />} />
        <Route path="/datakawasan/office-center" element={<OfficeCenter />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/hubungikami" element={<HubungiKami />} />
        <Route path="/fasilitasumum/masjid" element={<Masjid />} />
        <Route path="/fasilitasumum/sekolah" element={<Sekolah />} />
        <Route path="/fasilitasumum/klinik" element={<Klinik />} />
        <Route path="/fasilitasumum/mess" element={<Mess />} />
        <Route path="/fasilitasumum/lainnya" element={<FasilitasLainnya />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default urlParse;
