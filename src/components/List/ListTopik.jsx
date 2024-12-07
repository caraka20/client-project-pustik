import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/features/topikSlice";
import { Link, useLocation } from "react-router-dom";

const ListTopik = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state) => state.topik.data); // Data dari Redux
  const location = useLocation(); // Mendapatkan URL aktif
  const [showAll, setShowAll] = useState(false); // State untuk toggle jumlah data yang ditampilkan

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Pastikan topics adalah array
  const topicsArray = Array.isArray(topics) ? topics : []; // Jika bukan array, gunakan array kosong

  // Data yang ditampilkan (3 pertama atau semua)
  const displayedTopics = showAll ? topicsArray : topicsArray.slice(0, 3);

  // Fungsi untuk mengubah huruf awal setiap kata menjadi kapital
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-700 border-b-4 border-purple-700 inline-block pb-2">
          Informasi Perusahaan Terbaru
        </h2>
      </div>

      {/* List of Topics */}
      <div className="space-y-4">
        {displayedTopics.length > 0 ? (
          displayedTopics.map((topic, index) => {
            const isActive = location.pathname === `/topik/${topic.permalink}`; // Periksa apakah URL aktif cocok dengan permalink

            return (
              <Link
                to={`/topik/${topic.permalink}`} // Mengarahkan ke URL berdasarkan permalink
                key={index}
                className={`block ${
                  isActive ? "bg-blue-100 border-blue-700" : ""
                }`} // Highlight jika aktif
              >
                <div className="bg-white border p-4 border-gray-300 rounded-lg shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-100">
                  <h3
                    className={`text-lg font-bold ${
                      isActive ? "text-blue-900 underline" : "text-blue-700"
                    }`}
                  >
                    {capitalizeWords(topic.topik)} {/* Ubah ke capitalize */}
                  </h3>
                  <p className="text-gray-600">{`Halaman ini menyediakan informasi tentang ${capitalizeWords(
                    topic.topik
                  )} di Indonesia.`}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="text-gray-600 text-center">Memuat data...</p>
        )}
      </div>

      {/* Button */}
      <div className="text-center mt-6">
        {topicsArray.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)} // Toggle state showAll
            className="bg-blue-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ListTopik;
