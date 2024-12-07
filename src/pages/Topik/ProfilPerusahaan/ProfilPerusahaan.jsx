import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Container from "../../../components/Container";
import ListTopik from "../../../components/List/ListTopik";
import ContentArtikel from "../../../components/Content/ContentArtikel";
import GoogleProfilPerusahaan from "../../../components/ContentGoogle/GoogleProfilPerusahaan";
import ContentHome from "../../../components/Content/ContentHome";

const ProfilPerusahaan = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Mendapatkan nilai dari query string
  const topik = queryParams.get("topik") || "profil perusahaan";
  const geo = queryParams.get("geo") || "lokasi tidak diketahui";
  const posisi = queryParams.get("posisi") || "posisi tidak diketahui";
  const industri = queryParams.get("industri") || "industri tidak diketahui";

  // Membuat title dan meta description berdasarkan query string
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const title = `${capitalizeWords(topik)} di ${capitalizeWords(geo)}`;
  const description = `Informasi lengkap tentang ${capitalizeWords(
    topik
  )} di ${capitalizeWords(geo)}. Posisi yang tersedia: ${capitalizeWords(
    posisi
  )}. Industri terkait: ${capitalizeWords(
    industri
  )}. Dapatkan data terbaru dan relevan di halaman ini!`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Konten Utama */}
      <Container>
        <GoogleProfilPerusahaan />
        <ContentHome />
        <ListTopik />
        <ContentArtikel />
      </Container>
    </>
  );
};

export default ProfilPerusahaan;
