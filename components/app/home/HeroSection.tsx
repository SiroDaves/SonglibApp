"use client";

import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src='/images/main_banner.png'
        width={500}
        height={280}
        alt={`${info.appName}'s Profile Picture`}
        className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-2"
      />

      <h2 className="text-2xl font-bold leading-10 text-black mb-5">
        What if, you had <span className="text-[#ea580c]">{info.tagline.toLowerCase()}</span>
      </h2>

      <Link
        href={info.appName}
        className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-900 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        target="_blank"
        role="button"
      >
        <span className="text-xl">Get Songlib Today</span>
        <MdDownload size={16} />
      </Link>
    </section>
  );
};

export default HeroSection;
