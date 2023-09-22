import React from "react";
import Delivery from "../assets/img/delivery.png";
import HeroBg from "../assets/img/heroBg.png";
import { heroData } from "../utils/Data";


const HomeContainer = () => {
  return (
    <>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            deserunt placeat quae voluptates autem et. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Dolores neque at in? Quos,
            tempore sequi!
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
          <div className="w-full h-full absolute top-0 left-0 lg:px-32 py-4 flex items-center justify-center gap-4 flex-wrap">
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg"
                >
                  <img
                    src={n.imageSrc}
                    alt="I1"
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  />
                  <p className="text-base lg:text-xl mt-2 lg:mt-4 font-semibold text-textColor">
                    {n.name}
                  </p>
                  <p className=" text-[10px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                    {n.desc}
                  </p>
                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span>
                    {n.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
   
    </>
  );
};

export default HomeContainer;
