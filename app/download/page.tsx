"use client";

import { info } from "@/utils/data/app-info";
import Image from "next/image";
import dynamic from "next/dynamic";

interface AboutSectionProps { }

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <div id="about-me" className="my-12 lg:my-16 relative">
      <div className="flex flex-col items-center justify-center text-center lg:py-8">
        <h1 className="text-3xl font-bold text-primary p-2 px-5 text-xl rounded-md md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          {info.callout} Today
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 text-x2l rounded-md">
          {info.tagline}
        </h3>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
        <div className="order-1 lg:order-1">


        </div>
        <div className="flex justify-center order-2 lg:order-2">

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
