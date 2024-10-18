"use client";

import React from "react";
import Image from "next/image";
import PulsatingButton from "../../ui/pulsating-button";

export default function HomePage() {
  return (
    <div className="relative w-full h-[95vh] flex justify-center items-center ">
      <div className="flex justify-center items-center gap-6">
        <div className="rounded-lg overflow-hidden">
          <Image src="/img2.jpg" alt="Image makanan" width={700} height={300} />
        </div>

        <div>
          <div className=" font-domaine font-bold text-6xl">
            <span>Cooking Made Easy,</span>
            <p>Tastes Made Perfect!</p>
          </div>
          <p className="text-black font-lexend text-xl mt-4">
            our recipes are designed to bring joy back to your kitchen.
          </p>
          <div className="mt-4">
            <PulsatingButton
              className=" text-xl md:text-2xl bg-white text-black "
              duration="0"
              textAwal="Cek resep"
              textAkhir="click disini"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
