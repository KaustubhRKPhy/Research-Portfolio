import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ConferencesPage from "@/pages/ConferencesPage";
import CertificatesPage from "@/pages/CertificatesPage";
import SeminarPage from "@/pages/SeminarPage";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conferences" element={<ConferencesPage />} />
        <Route path="/seminar" element={<SeminarPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
