import React from "react";
import AnimatedDockNavbar from "@/components/ui/animated-dock-navbar";
import Video from "@/components/home/video";
import Carousel from "@/components/home/carousel";
import Sponsor from "@/components/home/sponsor";
import FormJoin from "@/components/home/formJoin";

export default function Home() {
  return (
    <div>
      <div className="z-40 absolute ">
        <AnimatedDockNavbar />
      </div>

      <div>
        <Video />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <Sponsor />
      </div>
      
      <div>
        <FormJoin />
      </div>
    </div>
  );
}
