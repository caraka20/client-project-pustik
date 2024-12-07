import React from "react";
import { useLocation } from "react-router-dom";

const GoogleProfilPerusahaan = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Mendapatkan parameter dari query string
  const topik = queryParams.get("topik") || "topik tidak ditemukan";
  const geo = queryParams.get("geo") || "lokasi tidak ditemukan";

  // Fungsi untuk membuat huruf pertama setiap kata menjadi huruf besar
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const jobs = [
    {
      title: "Informasi Profil Perusahaan di Jakarta",
      description:
        "Dapatkan informasi lengkap mengenai perusahaan yang sedang mencari kandidat berbakat di Jakarta.",
      date: "Desember 2024",
      source: "Jobstreet",
    },
    {
      title: "Perusahaan Ternama di Jakarta",
      description:
        "Lihat daftar perusahaan ternama di Jakarta dan informasi kontak mereka.",
      date: "Desember 2024",
      source: "LinkedIn",
    },
    {
      title: "Info Profil Perusahaan di Jakarta",
      description:
        "Profil perusahaan yang sedang membutuhkan kandidat berbakat di berbagai bidang.",
      date: "Desember 2024",
      source: "Glassdoor",
    },
    {
      title: "Perusahaan Terbesar di Jakarta",
      description:
        "Lihat informasi tentang perusahaan terbesar dan terkemuka di Jakarta.",
      date: "Desember 2024",
      source: "Indeed",
    },
    {
      title: "Profil Perusahaan Jakarta",
      description:
        "Informasi tentang perusahaan di Jakarta, termasuk alamat dan kontak.",
      date: "Desember 2024",
      source: "Job Portal",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 py-8 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Judul */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {`${capitalizeWords(topik.replace("-", " "))} di ${capitalizeWords(
              geo.replace("-", " ")
            )}`}
          </h1>

          {/* Deskripsi */}
          <p className="text-gray-600 leading-7">
            Informasi lengkap mengenai{" "}
            <span className="font-semibold">{`${capitalizeWords(
              topik.replace("-", " ")
            )} di ${capitalizeWords(geo.replace("-", " "))}`}</span>{" "}
            bisa Anda dapatkan pada halaman ini dan atau{" "}
            <span className="font-semibold">
              dapat Anda cari di situs atau media sosial resmi perusahaan
              tersebut jika tersedia.
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white py-8 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-6 mb-6 border-b pb-3">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
              Web
            </button>
            <button className="text-gray-600 font-semibold">Gambar</button>
          </div>
          {/* Job List */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="border-b pb-4">
                <a
                  href="#"
                  className="text-blue-600 font-bold text-lg hover:underline"
                >
                  {job.title} - {job.date} - {job.source}
                </a>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleProfilPerusahaan;
