import React from "react";
import { CarouselDemo } from "../useCarousel";

export default function FormJoin() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="bg-black w-full min-h-[80vh]  ">
        <p className="text-white font-domaine text-5xl">
          Deliciousness from the box
        </p>
        <p className="text-white font-domaine">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <div className="">
          <form className="max-w-sm mx-auto">
            <div className="mb-5 flex">

              <input
                type="email"
                id="email"
                className=" block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
              <button className="bg-white ">JOIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
