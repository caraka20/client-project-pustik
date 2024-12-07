import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Container from "../../../components/Container";
import ContentLowonganKerja from "../../../components/Content/ContentLowonganKerja";
import GoogleLokerGeo from "../../../components/ContentGoogle/GoogleLokerGeo"
import ListTopik from "../../../components/List/ListTopik";
import ContentArtikel from "../../../components/Content/ContentArtikel";

const ProfilPerusahaanGeo = () => {
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
  const description = `Temukan informasi lengkap mengenai ${capitalizeWords(
    topik
  )} di ${capitalizeWords(geo)}. Tersedia data untuk posisi ${capitalizeWords(
    posisi
  )} dan industri ${capitalizeWords(
    industri
  )}. Dapatkan informasi terbaru yang sesuai dengan kebutuhan Anda!`;
  
  // console.log({ title, description });
  return (
    <>
      {/* Helmet untuk mengatur title dan meta description */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* Konten Utama */}
      <Container>
        <GoogleLokerGeo />
        <ContentLowonganKerja />
        <ListTopik />
        <ContentArtikel />
      </Container>
    </>
  );
};

export default ProfilPerusahaanGeo;
