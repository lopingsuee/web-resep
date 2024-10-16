import React from "react";
import { CarouselDemo } from "../useCarousel";

export default function FormJoin() {
  return (
    <div className="flex flex-col justify-center items-center  text-center">
  <div className="bg-black w-full flex flex-col justify-center items-center min-h-[80vh]">
    <div className="text-white font-domaine text-8xl">
      <p>Deliciousness</p>
      <span>To Your Inbox</span>
    </div>
    <p className="text-white font-lexend text-xl mt-4">
      Enjoy weekly hand picked recipes and recommendations
    </p>
    <div className="mt-8">
      <form className="max-w-sm mx-auto">
        <div className="mb-5 flex">
          <input
            type="email"
            id="email"
            className="block w-full pr-28 pl-3"
            placeholder="Email Address"
            required
          />
          <button className="bg-black text-white border  p-2.5">JOIN</button>
          
        </div>
      </form>
    </div>
    <p className="text-white font-lexend">By joining our newsletter you agree to our <u>Terms and Conditions</u></p>
  </div>
</div>

  );
}
