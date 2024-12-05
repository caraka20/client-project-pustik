import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
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
      className="w-full py-4"
    >
      {/* Logo dan Hamburger Menu */}
      <NavbarContent justify="start" className="sm:hidden relative">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="absolute right-5 top-5">
          <p className="font-bold text-inherit">LOGO</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Logo Pojok Kiri */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link to="/">
            <p className="font-bold text-inherit cursor-pointer">LOGO</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Menu Pojok Kanan */}
      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              to={item.href}
              className="text-gray-600 hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 transition-all duration-300"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Hamburger Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              to={item.href}
              className="w-full text-gray-600 hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 transition-all duration-300"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
