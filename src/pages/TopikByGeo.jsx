import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/Container";
import ListTopikBy from "../components/List/ListGeo";
import ContentLowonganKerja from "../components/Content/ContentLowonganKerja";
import ListTopik from "../components/List/ListTopik";
import ContentArtikel from "../components/Content/ContentArtikel";
import ContentHome from "../components/Content/ContentHome";

const TopikByGeo = () => {
  const { permalink } = useParams(); // Ambil parameter dari URL

  // Menentukan judul halaman berdasarkan permalink
  const getPageTitle = () => {
    switch (permalink) {
      case "profil-perusahaan":
        return "Profil Perusahaan - Informasi Terbaru";
      case "lowongan-kerja":
        return "Lowongan Kerja - Kesempatan Karir Terbaik";
      case "alamat-perusahaan":
        return "Alamat Perusahaan - Direktori Lengkap";
      case "informasi-gaji":
        return "Informasi Gaji - Panduan Kompensasi";
      default:
        return "Halaman Tidak Ditemukan";
    }
  };

  // Render konten berdasarkan permalink
  const renderContent = () => {
    switch (permalink) {
      case "profil-perusahaan":
        return <ContentHome />;
      case "lowongan-kerja":
        return <ContentLowonganKerja />;
      case "alamat-perusahaan":
        return <ContentHome />;
      case "informasi-gaji":
        return <ContentHome />;
      default:
        return <p>Konten tidak ditemukan.</p>;
    }
  };

  return (
    <Container>
      {/* dynamic title */}
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>

      <ListTopikBy />
      <div className="mt-6">{renderContent()}</div>
      <ListTopik />
      <ContentArtikel />
    </Container>
  );
};

export default TopikByGeo;
