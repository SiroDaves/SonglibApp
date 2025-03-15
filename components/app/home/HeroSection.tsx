"use client";

import { useState, useEffect } from "react";
import { osName } from "react-device-detect";
import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { AppLink, links } from "@/utils/data/app-links";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  "Your Songbook on the GO",
  "Your Songbook on Phone",
  "Your Songbook on the PC",
  "Your Songbook With You",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const mainLink: string = `${info.github}/releases/download/v${info.appVersion}/${info.appName}_${info.appVersion}`;

  const getDownloadUrl = (): string => {
    const normalizedOS = osName.replace(/\s/g, '');
    const currentLink: AppLink = links.find(link => link.os === normalizedOS) || links[0];
    let downloadUrl: string = "/download";

    switch (osName) {
      case "iOS":
        downloadUrl = currentLink.url;

      case "Windows":
      case "Linux":
      case "Mac OS":
        downloadUrl = `${mainLink}${currentLink.ext}`;
    }
    return downloadUrl;
  };


  return (
    <section className="flex flex-col items-center justify-between py-2 lg:py-5">
      <Image
        src="/images/main_banner.png"
        width={500}
        height={280}
        alt={`${info.appName}'s AppIcon`}
        className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-1"
      />
      <h2 className="text-center text-primary font-bold text-2xl leading-10 text-black">
        What if, you had ...
      </h2>

      <h1 className="text-[#ea580c] font-bold rounded-md text-3xl sm:text-2xl md:text-xl lg:text-[2.2rem] leading-tight lg:leading-[2.8rem] mb-3">
        <div className="h-[3rem] flex justify-center items-center w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={texts[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full text-center"
            >
              {texts[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </h1>



      <Link
        className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-900 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
        href={getDownloadUrl()}
        role="button"
        rel="noopener noreferrer"
      >
        <span className="text-xl">Get Songlib Today</span>
        <MdDownload size={16} />
      </Link>

      <p className="text-primary text-sm mt-2">For {osName}</p>
    </section>
  );
};
