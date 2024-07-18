/* eslint-disable no-unused-vars */
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { close, hamburger } from "../assets/icons";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((menu) => !menu);
  };

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container font-montserrat">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={129} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="text-slate-gray hover:text-red-300 duration-300">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="max-lg:hidden wide:mr-24">
          <a href="/" className="hover:text-red-600 duration-300">
            Sign in
          </a>
          <span> | </span>
          <a href="/" className="hover:text-red-600 duration-300">
            Explore now
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={handleMenu}
          className="lg:hidden outline-none focus:outline-2 focus:outline-slate-gray focus:rounded-sm transition-all duration-1000 ease-in-out">
          <img src={menu ? close : hamburger} alt="hamburger" width={26} height={26} />
        </button>

        {menu && (
          <ul className="max-lg:bg-white absolute z-10 top-[6rem] left-16 right-16 max-sm:right-8 max-sm:left-8 lg:hidden space-y-7 py-16 text-center drop-shadow-lg">
            {navLinks.map((item) => (
              <li
                onClick={handleMenu}
                key={item.label}
                className="text-slate-gray hover:bg-red-300 hover:text-white hover:p-1.5 hover:rounded-sm transition-all duration-300">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

            <div className="lg:hidden wide:mr-24">
              <a href="/" className="hover:text-red-600 duration-300">
                Sign in
              </a>
              <span> | </span>
              <a href="/" className="hover:text-red-600 duration-300">
                Explore now
              </a>
            </div>
          </ul>
        )}
        {/* Mobile */}
      </nav>
    </header>
  );
};
