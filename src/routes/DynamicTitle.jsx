import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Mapping rute ke judul halaman
    const titles = {
      "/": "Home - My Website",
      "/about": "About Us - My Website",
      "/contact": "Contact Us - My Website",
      "/services": "Our Services - My Website",
      "/404": "Page Not Found - My Website",
    };

    // Atur judul halaman berdasarkan path
    const currentPath = location.pathname;
    document.title = titles[currentPath] || "My Website";
  }, [location]);

  return null; // Komponen ini hanya digunakan untuk mengatur title
};

export default DynamicTitle;
