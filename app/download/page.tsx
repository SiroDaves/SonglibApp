"use client";

//import { osName } from "react-device-detect";
import { info } from "@/utils/data/app-info";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

export default function Download() {
  return (
    <div id="download" className="my-5 lg:my-16 relative mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center lg:py-8">
        <h1 className="text-3xl font-bold text-primary p-2 px-5 text-xl rounded-md md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          {info.callout} Today
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 text-x2l rounded-md">
          {info.tagline}
        </h3>
      </div>
      
      <div className="hidden lg:flex flex-col items-center absolute top-30 -right-8">
      <span className="h-12 w-[2px]"></span>
      <span className="bg-[#b86918] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          MOBILE APPS
        </span>
        <span className="h-36 w-[2px] bg-[#b86918]"></span>
      </div>
      
      <MobileLinks />

      <div className="hidden lg:flex flex-col items-center absolute top-30 -right-8">
      <span className="h-36 w-[2px] bg-[#b86918]"></span>
        <span className="bg-[#b86918] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          DESKTOP APPS
        </span>
      </div>
      <DesktopLinks />
    </div>
  );
};
