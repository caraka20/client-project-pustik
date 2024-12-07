import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Pagination } from "@nextui-org/react";

const GoogleLokerGeo = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Mendapatkan parameter dari URL
  const topik = queryParams.get("topik") || "Informasi";
  const geo = queryParams.get("geo") || "";
  const posisi = queryParams.get("posisi") || "";
  const industri = queryParams.get("industri") || "";

  const searchQuery = `${topik} ${geo} ${posisi} ${industri}`.trim();

  // State untuk hasil pencarian
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Halaman saat ini
  const [totalResults, setTotalResults] = useState(0); // Total hasil pencarian

  // API Key dan CX ID
  const API_KEY = "AIzaSyD8FtDuXdnZ8Glx4xMDJ9uwRvnUxcgTkC0";
  const CX_ID = "32d29d475a9e3427d";

  // Fetch data dari Google Custom Search API
  useEffect(() => {
    if (!searchQuery) return;

    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1`,
          {
            params: {
              key: API_KEY,
              cx: CX_ID,
              q: searchQuery,
              start: (page - 1) * 10 + 1, // Paginasi
              num: 10, // Maksimal 10 hasil per halaman
            },
          }
        );

        setResults(response.data.items || []);
        setTotalResults(response.data.searchInformation?.totalResults || 0);
      } catch (err) {
        console.error("Error fetching data:", err.response || err.message);
        setError("Terjadi kesalahan saat mengambil data. Silakan coba lagi.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchQuery, page]);

  // Fungsi untuk memformat judul
  const capitalizeWords = (str) => {
    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Fungsi untuk membangun kalimat dinamis
  const buildDynamicTitle = () => {
    let title = "Hasil Pencarian untuk";

    if (topik) {
      title += ` "${capitalizeWords(topik)}"`;
    }
    if (geo) {
      title += ` di ${capitalizeWords(geo)}`;
    }
    if (posisi) {
      title += ` pada posisi ${capitalizeWords(posisi)}`;
    }
    if (industri) {
      title += ` dalam industri ${capitalizeWords(industri)}`;
    }

    return title.trim();
  };

  // Total halaman berdasarkan total hasil pencarian
  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="bg-gray-50 py-10 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Judul */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          {buildDynamicTitle()}
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-600 leading-7 text-center mb-8">
          Menampilkan hasil pencarian terkait{" "}
          <span className="font-semibold">{buildDynamicTitle()}</span>.
        </p>

        {/* Loading */}
        {isLoading && (
          <p className="text-center text-blue-500 font-medium">Memuat...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        {/* Hasil Pencarian */}
        {results.length > 0 && (
          <div className="space-y-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="border-b pb-6 last:border-none transition hover:shadow-md hover:rounded-md hover:bg-white"
              >
                <a
                  href={result.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold text-lg hover:underline"
                >
                  {result.title}
                </a>
                <p className="text-gray-600 mt-2">{result.snippet}</p>
                {result.pagemap?.cse_image && (
                  <img
                    src={result.pagemap.cse_image[0].src}
                    alt="Result Thumbnail"
                    className="mt-4 w-full max-h-60 object-cover rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center mt-10 space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
            <span className="text-gray-500 font-medium">
              Total Hasil: {totalResults} | Halaman {page} dari {totalPages}
            </span>
            <Pagination
              total={totalPages}
              initialPage={page}
              onChange={(page) => setPage(page)}
              color="primary"
              size="lg"
              rounded
              shadow
            />
          </div>
        )}

        {/* Jika tidak ada hasil */}
        {!isLoading && !error && results.length === 0 && (
          <p className="text-center text-gray-500 font-medium">
            Tidak ada hasil ditemukan untuk "{capitalizeWords(searchQuery)}".
          </p>
        )}
      </div>
    </div>
  );
};

export default GoogleLokerGeo;
