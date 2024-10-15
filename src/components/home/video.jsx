import Image from "next/image";
import PulsatingButton from "../ui/pulsating-button";

const Video = () => {
  return (
    <div className="relative w-full h-[95vh]">
      <p className="font-dancing  pt-5 text-left text-5xl sm:text-6xl">
        DapurGandi
      </p>
      <div className=" flex flex-col items-center justify-center ">
        
        <div className="relative w-[95vw] h-[75vh] rounded-lg overflow-hidden shadow-lg">
          Responsif dengan persentase
          <Image
            src="/cook.gif"
            alt="Deskripsi GIF"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="inset-0"
            priority
          />
        </div>
        <div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
            <div className="text-white text-4xl md:text-6xl lg:text-8xl leading-none whitespace-nowrap font-domaine">
              <span>TEMUKAN RESEP</span>
              <br />
              <span>MASAKANMU DISINI</span>
            </div>
            <div className="flex justify-center gap-7 mt-4">
              <PulsatingButton
                className=" text-xl md:text-2xl bg-white text-black"
                duration="0"
                textAwal="info menu"
                textAkhir="click disini"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Video;
