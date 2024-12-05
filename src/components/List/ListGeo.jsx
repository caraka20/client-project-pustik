import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchGeo } from "../../redux/features/geoSlice";
// import { getDataByPermalink } from "../../redux/features/topikSlice";

const ListGeo = () => {
  const { permalink } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.geo);
  // const { singleData } = useSelector((state) => state.topik);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  const totalPages = data.totalItems
    ? Math.ceil(data.totalItems / pageSize)
    : 1;

  useEffect(() => {
    dispatch(
      fetchGeo({
        page: currentPage,
        limit: pageSize,
        sortBy: "a-z",
        search: "",
      })
    );
  }, [dispatch, currentPage]);
  console.log(permalink);
  

  if (isLoading)
    return <p className="text-center text-gray-600">Memuat data...</p>;
  if (error) return <p className="text-center text-red-600">Error: {error}</p>;

  if (!data.items || data.items.length === 0) {
    return <p className="text-center text-gray-600">Data tidak ditemukan.</p>;
  }

  const title1 = permalink
    ? `${permalink
        .replace("-", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())} Berdasarkan Wilayah`
    : "Informasi Profil Perusahaan";

  const title = permalink
    ? `Informasi ${permalink
        .replace("-", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())} Berdasarkan Wilayah`
    : "Informasi Profil Perusahaan";

  return (
    <div className="px-4 py-8 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-left">
        {title}
      </h1>

      <ul className="list-disc pl-6 space-y-2">
        {data.items.map((geo) => (
          <li key={geo.id} className="text-orange-600">
            <Link
              to={`/informasi/${permalink}-di-${geo.permalink}`} 
              className="hover:text-blue-600 hover:underline transition duration-300"
            >
              {title1} {geo.nama_geo}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <p className="text-gray-700">
          Halaman {currentPage} dari {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListGeo;
