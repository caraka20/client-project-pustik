import React from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import ListTopikBy from "../components/List/ListGeo";
import ContentLowonganKerja from "../components/Content/ContentLowonganKerja";
import ListTopik from "../components/List/ListTopik";
import ContentArtikel from "../components/Content/ContentArtikel";
import ContentHome from "../components/Content/ContentHome";

const TopikByGeo = () => {
  const { permalink } = useParams(); // Ambil parameter dari URL

  // kalo topiknya apa bakal langsungcari content sesuai urlnya
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
      <ListTopikBy />
      {/* Render konten berdasarkan parameter */}
      <div className="mt-6">{renderContent()}</div>
      <ListTopik />
      <ContentArtikel />
    </Container>
  );
};

export default TopikByGeo;
