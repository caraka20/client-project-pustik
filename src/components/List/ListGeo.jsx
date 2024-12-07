import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGeo } from "../../redux/features/geoSlice";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { populerData } from "./data";
import Swal from "sweetalert2";

const SearchBar = () => {
  const { permalink } = useParams(); // Mendapatkan topik dari permalink
  const navigate = useNavigate(); // Inisialisasi navigate
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.geo);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const [searchGeo, setSearchGeo] = useState("");
  const [searchPosisi, setSearchPosisi] = useState("");
  const [searchIndustri, setSearchIndustri] = useState("");

  useEffect(() => {
    dispatch(
      fetchGeo({
        page: currentPage,
        limit: pageSize,
        sortBy: "a-z",
      })
    );
  }, [dispatch, currentPage]);

  // Fungsi untuk menangani pencarian
  const handleSearch = () => {
    if (!searchGeo && !searchPosisi && !searchIndustri) {
      // Peringatan jika semua input kosong
      Swal.fire({
        title: "Peringatan",
        text: "Anda harus mengisi minimal satu kriteria pencarian sebelum melanjutkan!",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#dc2626",
      });
      return; 
    }

    const query = new URLSearchParams({
      topik: permalink || "",
      geo: searchGeo || "",
      posisi: searchPosisi || "",
      industri: searchIndustri || "",
    }).toString();

    navigate(`/informasi?${query}`); 
  };

  const title = permalink
    ? `Informasi ${permalink
        .replace("-", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())}`
    : "Profil Perusahaan";

  if (isLoading)
    return <p className="text-center text-gray-600">Memuat data...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div
      className="p-6 sm:p-8 rounded-xl shadow-lg"
      style={{
        background: "linear-gradient(135deg, rgb(165,12,13), rgb(251,146,60))",
      }}
    >
      {/* Judul Dinamis */}
      <h1 className="text-lg font-semibold text-white mb-4 text-center">
        Mencari Informasi {title} Berdasarkan
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Geo (Wilayah) */}
        <div className="flex flex-col items-start w-full sm:w-1/3">
          <span className="text-sm font-medium text-gray-700 mb-2">
            Wilayah
          </span>
          <Autocomplete
            defaultItems={populerData.geo}
            label="Cari Wilayah"
            placeholder="Pilih Wilayah"
            className="w-full"
            onSelectionChange={(selected) => setSearchGeo(selected)}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        {/* Posisi */}
        <div className="flex flex-col items-start w-full sm:w-1/3">
          <span className="text-sm font-medium text-gray-700 mb-2">Posisi</span>
          <Autocomplete
            defaultItems={populerData.posisi}
            label="Cari Posisi"
            placeholder="Pilih Posisi"
            className="w-full"
            onSelectionChange={(selected) => setSearchPosisi(selected)}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        {/* Industri */}
        <div className="flex flex-col items-start w-full sm:w-1/3">
          <span className="text-sm font-medium text-gray-700 mb-2">
            Industri
          </span>
          <Autocomplete
            defaultItems={populerData.industri}
            label="Cari Industri"
            placeholder="Pilih Industri"
            className="w-full"
            onSelectionChange={(selected) => setSearchIndustri(selected)}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        {/* Tombol Pencarian */}
        <div className="w-full sm:w-auto flex justify-center">
          <button
            onClick={handleSearch} // Fungsi pencarian
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-red-600 transition-all flex items-center"
          >
            Cari
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
