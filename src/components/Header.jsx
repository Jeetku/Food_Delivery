import React from "react";

const Header = () => {
  return (
    <div className="w-screen fixed z-50 bg-slate-300 p-6 px-16">
      {/* DESKTOP &TABLETS */}
      <div className="hidden md:flex bg-red-600 p-4 w-full h-full"></div>

      {/* MOBILES */}
      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"></div>
    </div>
  );
};

export default Header;
