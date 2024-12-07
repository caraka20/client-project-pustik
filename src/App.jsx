import React, { useState, useEffect } from "react";
import { Routes, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

export default function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "rgb(248, 248, 248)" }}
    >
      <Nav />
      <main className="flex-grow mx-auto w-full max-w-screen-lg">
        <ScrollToTop />
        {loading ? (
          <Loading />
        ) : (
          <Routes>{routes.map((value) => value)}</Routes>
        )}
      </main>
      <Footer />
    </div>
  );
}
