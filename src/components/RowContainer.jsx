import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag, data }) => {
  console.log(data);
  return (
    <div
      className={`w-full my-12 bg-rowBg   ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 h-auto bg-cardOverlay rounded-lg backdrop-blur-lg hover:drop-shadow-lg p-2 my-12">
        <div className="w-full flex items-center justify-between overflow-hidden transition-all ease-in duration-100">
          <motion.img
            whileHover={{ scale: 1.25 }}
            src="https://lh3.googleusercontent.com/a/ACg8ocLZpitAaVN8V3htarsPw1yB51GoUPzaV706HOwlCIaHEg=s96-c"
            alt="fruits"
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-lg text-textColor font-semibold">
            Chocolate & Vanilla
          </p>
          <p className="mt-1 text-sm text-gray-500">45 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-red-500">$</span>5.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
