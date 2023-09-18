import React from "react";
import Delivery from "../assets/img/delivery.png";
import HeroBg from "../assets/img/heroBg.png";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full  "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col  justify-center items-start gap-6">
        <div className="flex items-center justify-start gap-2 bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base font-semibold text-orange-500">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              alt="Bike_Delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor ">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[4.5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor  text-center  md:text-justify md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt
          placeat quae voluptates autem et. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolores neque at in? Quos, tempore
          sequi!
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 hover:shadow-lg rounded-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="HeroBg"
          className="h-420 w-full lg:w-auto lg:h-600 ml-auto"
        />
        <div className="w-full h-full absolute top-0 left-0 px-32 py-4 flex items-center justify-center">
          <div className="w-190 p-2 bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
