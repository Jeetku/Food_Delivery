import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/Data";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.75 }}
                className={`group ${
                  filter === item.urlParamName
                    ? "bg-cartNumBg"
                    : "bg-cardOverlay"
                } w-24 min-w-[96px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg duration-150 transition-all ease-in-out`}
                onClick={() => setFilter(item.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === item.urlParamName
                      ? "bg-cardOverlay"
                      : "bg-cartNumBg"
                  } bg-cartNumBg group-hover:bg-cardOverlay flex items-center justify-center`}
                >
                  <IoFastFood className="text-cardOverlay group-hover:text-textColor text-lg" />
                </div>
                <p
                  className={`text-sm ${
                    filter === item.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  }  group-hover:text-white`}
                >
                  {item.name}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
