import React from "react";

const ContentHome = () => {
  return (
    <div className="container py-8">
      {/* Profil Perusahaan Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Profil Perusahaan di Indonesia
        </h2>
        <div className="flex justify-center mb-8">
          <button className="bg-orange-400 text-white py-2 px-4 rounded-md font-medium">
            Informasi Penting
          </button>
        </div>
        <p className="text-gray-600 mb-6 text-justify">
          Website ini didirikan dengan tujuan utama untuk mempromosikan
          perusahaan-perusahaan di Indonesia yang bergerak di berbagai sektor
          industri. Kami memahami betapa pentingnya bagi perusahaan untuk
          memiliki eksposur yang luas dan diakui oleh publik, baik secara lokal
          maupun global.
        </p>
        <p className="text-gray-600 mb-6 text-justify">
          Oleh karena itu, melalui website ini, kami menawarkan platform yang
          memungkinkan perusahaan-perusahaan untuk memperkenalkan profil, visi,
          misi, dan produk atau layanan mereka kepada khalayak luas. Selain
          menjadi sarana promosi perusahaan, website ini juga hadir sebagai
          wadah bagi para pencari kerja di seluruh Indonesia.
        </p>
        <p className="text-gray-600 text-justify">
          Di era digital ini, kebutuhan akan informasi mengenai lowongan
          pekerjaan dan profil perusahaan yang dapat diakses dengan mudah sangat
          diperlukan. Kami membantu pencari kerja menemukan perusahaan yang
          sesuai dengan kualifikasi dan minat mereka, serta memfasilitasi
          perusahaan untuk mendapatkan talenta terbaik yang siap bergabung dalam
          tim mereka.
        </p>
      </section>

      {/* Tujuan Utama Section */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Tujuan Utama</h3>
        <ul className="list-disc list-inside text-gray-600 text-justify">
          <li className="mb-3">
            <strong>Promosi Perusahaan:</strong> Kami menyediakan ruang bagi
            perusahaan untuk menampilkan profil lengkap, termasuk sejarah
            perusahaan, produk atau layanan unggulan, serta visi dan misi
            mereka.
          </li>
          <li className="mb-3">
            <strong>Pencarian dan Rekrutmen Talenta:</strong> Website ini
            dirancang agar perusahaan dapat dengan mudah mempublikasikan
            lowongan pekerjaan, menerima lamaran, dan mencari kandidat yang
            memenuhi syarat melalui sistem pencarian yang efisien.
          </li>
          <li className="mb-3">
            <strong>Meningkatkan Konektivitas:</strong> Kami menjadi jembatan
            penghubung antara perusahaan dan pencari kerja, menciptakan
            ekosistem yang mendukung pertumbuhan karier serta perkembangan
            perusahaan melalui kerjasama dan konektivitas yang lebih baik.
          </li>
          <li className="mb-3">
            <strong>Menyediakan Informasi dan Berita Terbaru:</strong> Kami juga
            menyediakan berita dan artikel seputar perkembangan dunia kerja dan
            industri di Indonesia.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ContentHome;
