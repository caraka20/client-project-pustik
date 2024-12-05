import { Route } from "react-router-dom";
import React from "react";
import Posisi from "../pages/Posisi";
import Home from "../pages/Home";
import Topik from "../pages/TopikByGeo";
import LowonganKerja from "../pages/Topik/LowonganKerja/LowonganKerjaGeo";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/topik/:permalink" element={<Topik />} />,
  <Route path="/informasi/:permalink" element={<LowonganKerja />} />,
  <Route path="*" element={<PageNotFound />} />,
];

export default routes;
