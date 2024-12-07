import React from "react";
import { useLocation } from "react-router-dom";
import LowonganKerjaGeo from "./LowonganKerja/LowonganKerjaGeo";
import ProfilPerusahaan from "./ProfilPerusahaan/ProfilPerusahaan";

const MainTopik = () => {
  const location = useLocation();

  // Mendapatkan query parameters dari URL
  const queryParams = new URLSearchParams(location.search);
  const topik = queryParams.get("topik"); // Ambil nilai topik dari query parameter

  // Render komponen berdasarkan topik
  const renderContent = () => {
    if (topik === "lowongan-kerja") {
      return <LowonganKerjaGeo />;
    }
    if (topik !== "lowongan-kerja") {
      return <LowonganKerjaGeo />;
    }
    if (topik === "profil-perusahaan") {
      return <LowonganKerjaGeo />;
    } 
    
    return (
      <p className="text-center text-gray-600">
        Topik tidak ditemukan. Silakan pilih topik yang valid.
      </p>
    );
  };

  return <div className="px-4 py-8">{renderContent()}</div>;
};

export default MainTopik;
