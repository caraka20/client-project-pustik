import React from "react";
import { Spinner } from "@nextui-org/react";
import logoTeknokrat from "../assets/teknokratLogo.png";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo Universitas Teknokrat */}
        <img
          src={logoTeknokrat} // Pastikan gambar ada di folder assets
          alt="Universitas Teknokrat Logo"
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 animate-bounce"
        />

        {/* Teks Loading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
          Universitas Teknokrat Indonesia
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center">
          Sedang memuat, harap tunggu...
        </p>

        {/* Spinner */}
        <Spinner size="xl" />
      </div>
    </div>
  );
};

export default Loading;
