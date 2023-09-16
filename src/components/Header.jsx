import React from "react";
import logo from "../assets/img/logo.png";
import { MdShoppingBasket } from "react-icons/md";
import avatar from "../assets/img/avatar.png";

const Header = () => {
  return (
    <header className="w-screen fixed z-50 p-6 px-16">
      {/* DESKTOP &TABLETS */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="Logo" className="w-10 object-cover" />
          <p className="text-headingColor font-bold text-xl">
            Restaurant-BAZAR
          </p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 items-center ">
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration ease-in-out  cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration ease-in-out  cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration ease-in-out  cursor-pointer">
              About
            </li>
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration ease-in-out  cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <img
            src={avatar}
            alt="ProfilePic"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl "
          />
        </div>
      </div>

      {/* MOBILES */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </header>
  );
};

export default Header;
