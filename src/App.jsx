import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DataLahan from "./pages/DataLahan.jsx";
import DataBangunan from "./pages/DataBangunan.jsx";
import TentangKami from "./pages/TentangKami.jsx";
import HubungiKami from "./pages/HubungiKami.jsx";
import Login from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/datalahan" element={<DataLahan />} />
        <Route path="/databangunan" element={<DataBangunan />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/hubungikami" element={<HubungiKami />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
