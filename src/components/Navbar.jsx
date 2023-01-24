import React, { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="m-5">
      <div className="flex items-center justify-between">
        <img src="images/logo.svg" alt="Logo" />
        <ul className="hidden lg:flex">
          <li className="lg:mx-5">
            <a href="#" className="hover:text-[#E9AB53]">
              Home
            </a>
          </li>
          <li className="lg:mx-5">
            <a href="#" className="hover:text-[#E9AB53]">
              New
            </a>
          </li>
          <li className="lg:mx-5">
            <a href="#" className="hover:text-[#E9AB53]">
              Popular
            </a>
          </li>
          <li className="lg:mx-5">
            <a href="#" className="hover:text-[#E9AB53]">
              Trending
            </a>
          </li>
          <li className="lg:mx-5">
            <a href="#" className="hover:text-[#E9AB53]">
              Categories
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="lg:hidden">
          {!nav ? (
            <img
              src="images/icon-menu-close.svg"
              alt="Imagen Menú Cerrar"
              className="cursor-pointer"
            />
          ) : (
            <img
              src="images/icon-menu.svg"
              alt="Imagen Menú"
              className="cursor-pointer"
            />
          )}
        </div>
        <div
          className={
            !nav
              ? "absolute right-0 top-20 h-full w-[70%] bg-white lg:hidden"
              : "fixed right-[-100%]"
          }
        >
          <ul className="mx-5">
            <li className="my-5">
              <a href="#" className="hover:text-[#E9AB53]">
                Home
              </a>
            </li>
            <li className="my-5">
              <a href="#" className="hover:text-[#E9AB53]">
                New
              </a>
            </li>
            <li className="my-5">
              <a href="#" className="hover:text-[#E9AB53]">
                Popular
              </a>
            </li>
            <li className="my-5">
              <a href="#" className="hover:text-[#E9AB53]">
                Trending
              </a>
            </li>
            <li className="my-5">
              <a href="#" className="hover:text-[#E9AB53]">
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
