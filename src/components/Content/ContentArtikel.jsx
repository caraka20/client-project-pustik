import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ContentArtikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeIndex, setActiveIndex] = useState(null); // State untuk menyimpan index aktif
  const [showAll, setShowAll] = useState(false); // State untuk mengontrol apakah semua artikel ditampilkan

  // Fetch Data JSON
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://caraka20.github.io/apiArtikel/artikel.json?cache_buster=${new Date().getTime()}`
        );
        if (!response.ok) {
          throw new Error("Gagal mengambil data dari API.");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Fungsi untuk scroll ke elemen aktif
  const handleAccordionToggle = (index) => {
    setActiveIndex(index); // Set index aktif
    setTimeout(() => {
      const element = document.getElementById(`accordion-item-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300); // Delay untuk memastikan accordion sudah terbuka
  };

  // Fungsi untuk toggle tombol tampilkan semua
  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Memuat artikel...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">Terjadi kesalahan: {error}</p>
    );
  }

  // Tentukan jumlah artikel yang akan ditampilkan berdasarkan showAll
  const displayedArticles = showAll ? articles : articles.slice(0, 5);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Artikel Populer
      </h1>
      <Accordion variant="splitted">
        {displayedArticles.map((article, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={<strong className="text-gray-800">{article.title}</strong>} // Judul bold
            id={`accordion-item-${index}`} // Tambahkan ID untuk setiap item
            className="bg-white border border-gray-300 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100"
            onClick={() => handleAccordionToggle(index)} // Scroll saat item diklik
            expanded={activeIndex === index} // Buka/tutup berdasarkan state aktif
          >
            {/* Judul Artikel */}
            <div className="px-4 py-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {article.title}
              </h2>
              {/* Konten utama artikel */}
              <p className="text-gray-700 leading-7 mb-4">{article.content}</p>
              {/* Daftar sub-sections */}
              {article.sections && (
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  {article.sections.map((section, secIndex) => (
                    <li key={secIndex} className="text-gray-700">
                      <strong className="text-orange-500">
                        {section.title}
                      </strong>
                      : {section.description}
                    </li>
                  ))}
                </ul>
              )}
              {/* Kesimpulan */}
              {article.conclusion && (
                <div className="mt-6 p-4 bg-orange-100 border-l-4 border-orange-500 rounded-md">
                  <h4 className="font-semibold text-orange-600">Kesimpulan:</h4>
                  <p className="text-gray-700">{article.conclusion}</p>
                </div>
              )}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      {/* Tombol Tampilkan Semua */}
      {articles.length > 5 && (
        <div className="text-center mt-6">
          <button
            onClick={toggleShowAll}
            className="bg-blue-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Tampilkan Semua"}
          </button>
        </div>
      )}
    </div>
  );
}
