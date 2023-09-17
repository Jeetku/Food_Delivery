import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { MdShoppingBasket, MdLogout, MdAdd } from "react-icons/md";
import avatar from "../assets/img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(true);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="w-screen fixed z-50 p-3 px-6 md:p-6 md:px-16">
      {/* DESKTOP &TABLETS */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src={logo} alt="Logo" className="w-10 object-cover" />
          <p className="text-headingColor font-bold text-xl">
            Restaurant-BAZAR
          </p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex gap-8 items-center "
          >
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
          </motion.ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              alt="ProfilePic"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full "
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="bg-gray-50 w-40 absolute top-12 right-0 shadow-xl flex flex-col rounded-lg "
              >
                {user && user.email === "jeeteshsingh210@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base  text-textColor">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="m-2 p-2 rounded-md shadow-lg flex items-center gap-3 cursor-pointer hover:bg-blue-300 bg-blue-200  transition-all duration-100 ease-in-out text-base  text-textColor"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILES */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src={logo} alt="Logo" className="w-10 object-cover" />
          <p className="text-headingColor font-bold text-xl">
            Restaurant-BAZAR
          </p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            alt="ProfilePic"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full "
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="bg-gray-50 w-40 absolute top-12 right-0 shadow-xl flex flex-col rounded-lg "
            >
              {user && user.email === "jeeteshsingh210@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="py-2 px-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-300 bg-gray-200 transition-all duration-100 ease-in-out text-base  text-textColor">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li className="text-base text-textColor  hover:bg-slate-100 px-4 py-2 transition-all duration ease-in-out  cursor-pointer">
                  Home
                </li>
                <li className="text-base text-textColor  hover:bg-slate-100 px-4 py-2 transition-all duration ease-in-out  cursor-pointer">
                  Menu
                </li>
                <li className="text-base text-textColor  hover:bg-slate-100 px-4 py-2 transition-all duration ease-in-out  cursor-pointer">
                  About
                </li>
                <li className="text-base text-textColor  hover:bg-slate-100 px-4 py-2 transition-all duration ease-in-out  cursor-pointer">
                  Service
                </li>
              </ul>
              <p
                className="p-2 m-2 rounded-md shadow-lg flex items-center justify-center gap-3 cursor-pointer hover:bg-blue-300 bg-blue-200  transition-all duration-100 ease-in-out text-base  text-textColor"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
