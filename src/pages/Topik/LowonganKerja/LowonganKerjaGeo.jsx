import React from "react";
import Container from "../../../components/Container";
import ContentLowonganKerja from "../../../components/Content/ContentLowonganKerja";
import GoogleLokerGeo from "../../../components/ContentGoogle/GoogleLokerGeo";
import ListTopik from "../../../components/List/ListTopik";
import ContentArtikel from "../../../components/Content/ContentArtikel";

const LowonganKerjaGeo = () => {
  return (
    <Container>
      <GoogleLokerGeo />
      <ContentLowonganKerja />
      <ListTopik />
      <ContentArtikel />
    </Container>
  );
};

export default LowonganKerjaGeo;
