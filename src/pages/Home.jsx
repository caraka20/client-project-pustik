import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import Container from "../components/Container";
import ContentHome from "../components/Content/ContentHome";
import ListTopik from "../components/List/ListTopik";
import ContentArtikel from "../components/Content/ContentArtikel";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Teknokrat - Beranda</title>
      </Helmet>

      <ContentHome />
      <ListTopik />
      <ContentArtikel />
    </Container>
  );
};

export default Home;
