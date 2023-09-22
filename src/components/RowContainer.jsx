import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../assets/img/NotFound.svg";

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);

  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 bg-rowBg  flex items-center gap-3 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 h-[225px] min-w-[300px] md:w-340 md:min-w[340px] flex flex-col items-center justify-between bg-cardOverlay rounded-lg backdrop-blur-lg hover:drop-shadow-lg p-2 my-12"
          >
            <div className="w-full flex items-center justify-between overflow-hidden transition-all ease-in duration-100">
              <motion.img
                whileHover={{ scale: 1.25 }}
                src={item?.imageURL}
                alt="fruits"
                className="w-40 -mt-8 drop-shadow-2xl object-contain"
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
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories}Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" alt="not found" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
