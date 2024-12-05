import React from "react";
import { useParams } from "react-router-dom";

const GoogleLokerGeo = () => {
  const { permalink } = useParams();
  const [topik, geo] = permalink.split("-di-");
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const jobs = [
    {
      title: "Lowongan Kerja di Aceh Besar Aceh",
      description:
        "27 lowongan; Area Sales Manager Syariah (Banda Aceh); Mandor Planting; Pengiklan",
      date: "Desember 2024",
      source: "Jobstreet",
    },
    {
      title: "Aceh Besar Kab., Aceh",
      description:
        "Cari di antara 24.000+ lowongan kerja terbaru; Pekerjaan penuh waktu, sementara dan paruh waktu.",
      date: "Desember 2024",
      source: "Lowongan kerja baru",
    },
    {
      title: "Lowongan Kerja di Kabupaten Aceh Besar",
      description:
        "Cek info loker Kabupaten Aceh Besar untuk lulusan SMA/SMK, D3, S1, fresh graduate, dan berpengalaman.",
      date: "Desember 2024",
      source: "Job Portal",
    },
    {
      title: "Lowongan kerja Lhoknga, Aceh Besar Kab., Aceh",
      description:
        "Admin Online, Rp 2.5 juta - Rp 3 juta; Admin Data Entry, Rp 3.5 juta - Rp 6 juta.",
      date: "Desember 2024",
      source: "Jooble",
    },
    {
      title: "Info Lowongan Pekerjaan Terbaru di Aceh Besar Kab.",
      description:
        "Cek info lowongan pekerjaan terbaru mulai dari admin, freelance, marketing & sales, security hingga driver.",
      date: "Desember 2024",
      source: "OLX Indonesia",
    },
  ];

  return (
    <>
      {" "}
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
              dapat anda cari di situs atau social media resmi perusahaan
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

export default GoogleLokerGeo;
