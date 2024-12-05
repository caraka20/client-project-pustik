import React from "react";
import Container from "../components/Container";
import ContentHome from "../components/Content/ContentHome";
import ListTopik from "../components/List/ListTopik";
import ContentArtikel from "../components/Content/ContentArtikel";

const Home = () => {
  return (
    <Container>
      <ContentHome />
      <ListTopik />
      <ContentArtikel />
    </Container>
  );
};

export default Home;
