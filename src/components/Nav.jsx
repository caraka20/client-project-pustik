import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Profil Perusahaan", href: "/topik/profil-perusahaan" },
    { name: "Lowongan Kerja", href: "/topik/lowongan-kerja" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="w-full pb-2"
      style={{
        backgroundColor: "rgb(165,12,13)",
        zIndex: 50,
      }}
    >
      {/* Logo dan Hamburger Menu */}
      <NavbarContent justify="start" className="sm:hidden relative">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white"
        />
        <NavbarBrand className="absolute right-5 top-5">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <p className="font-bold text-white cursor-pointer">LOGO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Logo Pojok Kiri */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <p className="font-bold text-white cursor-pointer">LOGO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Menu Pojok Kanan */}
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="text-white hover:text-orange-300 hover:underline hover:underline-offset-4 hover:decoration-orange-300 transition-all duration-300"
          >
            {item.name}
          </Link>
        ))}
      </NavbarContent>

      {/* Hamburger Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-95 text-white transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          width: "100%",
          zIndex: 60,
        }}
      >
        <div className="p-6 mt-4 bg-black bg-opacity-50">
          {/* Tambahkan margin bawah untuk memberi ruang pada daftar menu */}
          <div className="mb-8">
            <NavbarMenuToggle
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            />
          </div>
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-4 rounded-lg transition-all duration-300"
              >
                <Link
                  to={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="block text-lg font-medium text-white hover:text-orange-300 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
