import React from "react";
import { CarouselDemo } from "../useCarousel";

export default function Carousel() {
  return (
    <div className="bg-black w-full min-h-[80vh] flex justify-center items-center">
  <div className="flex flex-col justify-center items-center text-center">
    <p className="text-white font-domaine text-5xl">MENEMANI IBU INDONESIA</p>      
    <CarouselDemo />
  </div>
</div>

  );
}
