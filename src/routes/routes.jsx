import { Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Topik from "../pages/TopikByGeo";
import PageNotFound from "../pages/PageNotFound";
import MainTopik from "../pages/Topik/MainTopik";

const routes = [
  <Route key="home" path="/" element={<Home />} />,
  <Route key="topik" path="/topik/:permalink" element={<Topik />} />,
  <Route key="informasi" path="/informasi" element={<MainTopik />} />,
  <Route key="not-found" path="*" element={<PageNotFound />} />,
];

export default routes;
