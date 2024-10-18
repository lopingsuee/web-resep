import React from "react";
import AnimatedDockNavbar from "@/components/ui/animated-dock-navbar";
import Carousel from "@/components/fragments/home/carousel";
import FormJoin from "@/components/fragments/home/formJoin";
import HomePage from "@/components/fragments/home/homePage";
import Testimonial from "@/components/fragments/home/testimonial";
import Sponsor from "@/components/fragments/home/sponsor";
import Footer from "@/components/fragments/home/footer";

export default function Home() {
  return (
    <div>
      <div className="z-40 absolute ">
        <AnimatedDockNavbar />
      </div>

      <div>
        <HomePage />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <Testimonial />
      </div>

      <div>
        <FormJoin />
      </div>

      <div>
        <Sponsor />
      </div>

      <div>
        {/* <Footer/> */}
      </div>
    </div>
  );
}
