import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import DataLahan from "../pages/DataLahan.jsx";
import DataBangunan from "../pages/DataBangunan.jsx";
import TentangKami from "../pages/TentangKami.jsx";
import HubungiKami from "../pages/HubungiKami.jsx";
import Login from "../pages/LoginPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Map from "../components/Map.jsx";
import DetailInfoUmum from "../pages/DetailInfoUmum.jsx";
import Faq from "../pages/Faq.jsx";
import Masjid from "../components/Fasilitasumum/Masjid.jsx";
import SekolahDasar from "../components/Fasilitasumum/SekolahDasar.jsx";
import SMP from "../components/Fasilitasumum/Smp.jsx";
import Toilet from "../components/Fasilitasumum/Toilet.jsx";
import FasilitasLainnya from "../components/Fasilitasumum/FasilitasLainnya.jsx";

function urlParse() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:{id}" element={<DetailInfoUmum />} />
        <Route path="/datalahan" element={<DataLahan />} />
        <Route path="/databangunan" element={<DataBangunan />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/hubungikami" element={<HubungiKami />} />
        <Route path="/fasilitasumum/masjid" element={<Masjid />} />
        <Route path="/fasilitasumum/sekolahdasar" element={<SekolahDasar />} />
        <Route path="/fasilitasumum/smp" element={<SMP />} />
        <Route path="/fasilitasumum/toilet" element={<Toilet />} />
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
