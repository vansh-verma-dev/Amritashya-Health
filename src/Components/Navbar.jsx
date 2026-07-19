import { useState } from "react";
import {   NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import myLogo from "../assets/PLogo.png";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/" },
    { name: "About", path: "/AboutPage" },
    { name: "Health Solution", path: "/health-solution" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-5 flex items-center justify-between">

        {/* Logo */}
     <Link to="/">
        <div className="flex items-center gap-3 cursor-pointer">

         <img src={myLogo} alt="Amritasya Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-green-600"
          />

          <div>
            <h1 className="text-2xl font-bold text-green-700">
              Prajanya
            </h1>

            <p className="text-xs tracking-[4px] text-gray-500">
             Healthcares
            </p>
          </div>

        </div>
     </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* Right Icons */}

        <div className="hidden lg:flex items-center gap-3">

        <Link to={"/Createaccount"}>
          <button className="w-11 h-11 rounded-full bg-green-50 hover:bg-green-700 hover:text-white transition flex items-center justify-center text-xl">
            <FaRegUser />
          </button>
        </Link>

          <button className="w-11 h-11 rounded-full bg-green-50 hover:bg-green-700 hover:text-white transition flex items-center justify-center text-xl">
            <FaRegHeart />
          </button>

          <button className="relative w-11 h-11 rounded-full bg-green-700 text-white hover:bg-green-800 transition flex items-center justify-center text-2xl">

            <IoCartOutline />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>

          </button>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-green-700"
        >
          {open ? <IoMdClose /> : <IoMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-5 py-5 bg-white border-t">

          <ul className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-green-700 font-medium"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

          <div className="flex gap-4 mt-6">

            <button className="w-11 h-11 rounded-full bg-green-100 flex justify-center items-center">
              <FaRegUser />
            </button>

            <button className="w-11 h-11 rounded-full bg-green-100 flex justify-center items-center">
              <FaRegHeart />
            </button>

            <button className="w-11 h-11 rounded-full bg-green-700 text-white flex justify-center items-center">
              <IoCartOutline />
            </button>

          </div>

        </div>
      </div>

    </header>
  );
}

export default Navbar;