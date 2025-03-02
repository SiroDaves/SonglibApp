"use client";

import { osName } from "react-device-detect";
import { info } from "@/utils/data/app-info";
import DesktopLinks from "./DesktopLinks";
import { MobileLink, MobileLinks } from "./MobileLinks";

export default function Download() {
  let content;

  switch (osName) {
    case "Android":
    case "iOS":
      content = (<MobileLink osType={osName} />);
      break;

    default:
      content = (
        <div>
          <div className="hidden lg:flex flex-col items-center absolute top-30 -right-8">
            <span className="bg-[#b86918] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
              MOBILE APPS
            </span>
            <span className="h-36 w-[2px] bg-[#b86918]"></span>
          </div>
          <MobileLinks />

          <div className="hidden lg:flex flex-col items-center absolute top-30 -right-8">
            <span className="bg-[#b86918] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
              DESKTOP APPS
            </span>
            <span className="h-36 w-[2px] bg-[#b86918]"></span>
          </div>
          <DesktopLinks />
        </div>
      );
      break;
  }

  return (
    <div
      id="download"
      className="my-5 lg:my-16 relative mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center text-center lg:py-8">
        <h1 className="text-3xl font-bold text-primary p-2 px-5 rounded-md md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          {info.callout} Today
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 rounded-md">
          {info.tagline}
        </h3>
      </div>

      {content}
    </div>
  );
}
