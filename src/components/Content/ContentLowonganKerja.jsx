import React from "react";

const ContentLowonganKerja = () => {
  return (
    <div className="py-10">
      <div className="">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Portal Lowongan Kerja di Indonesia
        </h1>
        <div className="flex justify-center mb-8">
          <button className="bg-orange-400 text-white py-2 px-4 rounded-md font-medium">
            Info Loker Terbaru
          </button>
        </div>

        {/* Content */}
        <p className="text-gray-700 mb-6 text-justify">
          Saat ini, mencari pekerjaan bisa menjadi tantangan tersendiri,
          terutama di tengah persaingan yang semakin ketat. Di Indonesia, banyak
          pencari kerja yang membutuhkan informasi akurat dan terbaru mengenai
          lowongan pekerjaan yang sesuai dengan kemampuan dan keahlian mereka.
          Untuk menjawab kebutuhan ini, sebuah platform website Lowongan Kerja
          di Indonesia hadir untuk memberikan solusi terbaik bagi para pencari
          kerja.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tujuan Utama
        </h2>

        <p className="text-gray-700 mb-6 text-justify">
          Website Lowongan Kerja di Indonesia dibuat dengan tujuan utama untuk
          membantu para pencari kerja mendapatkan informasi lowongan pekerjaan
          secara lebih mudah, cepat, dan akurat. Platform ini dirancang sebagai
          jembatan antara pencari kerja dan perusahaan yang membutuhkan tenaga
          kerja dengan menyediakan informasi yang up-to-date, relevan, dan
          terpercaya.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Berikut adalah beberapa alasan mengapa website ini hadir:
        </h3>

        <ul className="list-disc ml-6 text-gray-700 space-y-4">
          <li>
            <span className="font-semibold">
              Memudahkan Pencarian Lowongan Kerja:
            </span>{" "}
            Salah satu tantangan utama bagi para pencari kerja adalah menemukan
            informasi yang relevan dengan latar belakang pendidikan,
            keterampilan, dan minat mereka. Website ini menyediakan fitur
            pencarian yang canggih, memungkinkan pengguna untuk memfilter
            lowongan pekerjaan berdasarkan lokasi, jenis industri, level
            pekerjaan, dan kriteria lainnya.
          </li>
          <li>
            <span className="font-semibold">
              Menyediakan Informasi Terpercaya:
            </span>{" "}
            Banyaknya informasi pekerjaan yang tersebar di berbagai platform
            dapat membuat pencari kerja kesulitan memverifikasi validitasnya.
            Website Lowongan Kerja di Indonesia hanya menyediakan informasi dari
            sumber-sumber yang dapat dipercaya, sehingga para pencari kerja bisa
            merasa tenang dalam mencari peluang karir baru.
          </li>
          <li>
            <span className="font-semibold">Mendukung Peningkatan Karier:</span>{" "}
            Selain menampilkan lowongan pekerjaan, website ini juga memberikan
            tips dan panduan seputar pengembangan karier, seperti pembuatan CV
            yang menarik, tips wawancara kerja, serta informasi terkait
            perkembangan dunia kerja di Indonesia.
          </li>
          <li>
            <span className="font-semibold">
              Menyediakan Akses untuk Berbagai Industri:
            </span>{" "}
            Website ini tidak terbatas pada satu jenis industri saja. Baik Anda
            yang sedang mencari pekerjaan di sektor teknologi, perbankan,
            manufaktur, pendidikan, kesehatan, ataupun sektor lainnya, Lowongan
            Kerja di Indonesia memiliki beragam pilihan lowongan kerja yang
            sesuai dengan berbagai latar belakang profesional.
          </li>
          <li>
            <span className="font-semibold">
              Mempertemukan Pencari Kerja dan Perusahaan:
            </span>{" "}
            Salah satu kelebihan utama dari website ini adalah fungsinya sebagai
            penghubung antara pencari kerja dan perusahaan. Para perusahaan
            dapat memposting lowongan pekerjaan mereka di platform ini,
            sementara pencari kerja dapat dengan mudah melamar pekerjaan yang
            diminati.
          </li>
        </ul>

        {/* Call to Action */}
        <div className="mt-8">
          <button className="bg-orange-400 hover:bg-orange-500 text-white py-3 px-6 rounded-md text-lg font-semibold">
            Daftar Kerja Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentLowonganKerja;
