import React from "react";
import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <div className="bg-black rounded-lg flex flex-col items-center p-20">
        <p className="text-white font-domaine text-5xl pb-4">OUR SPONSORSHIP</p>
        <div className="flex px-10 gap-20">
          <Image
            src="/ajinomoto.png"
            alt="Image makanan"
            width={150}
            height={300}
          />
          
          <Image
            src="/royco.png"
            alt="Image makanan"
            width={150}
            height={300}
          />
          <Image
           src="/sasa.png" alt="Image makanan" width={150} height={300} />
        </div>
      </div>
    </div>
  );
}
