"use client";

import { osName } from "react-device-detect";
import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { AppLink, links } from "@/utils/data/app-links";

export default function HeroSection() {
  const mainLink: string = `${info.github}/releases/download/v${info.appVersion}/${info.appName}_${info.appVersion}`;

  const getDownloadUrl = (): string => {
    const normalizedOS = osName.replace(/\s/g, '');
    const currentLink: AppLink = links.find(link => link.os === normalizedOS) || links[0];
    let downloadUrl: string = "/download";

    switch (osName) {
      case "Android":
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
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-8">
      <Image
        src="/images/main_banner.png"
        width={500}
        height={280}
        alt={`${info.appName}'s AppIcon`}
        className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-2"
      />

      <h2 className="text-2xl font-bold leading-10 text-black mb-5">
        What if, you had <span className="text-[#ea580c]">{info.tagline.toLowerCase()}</span>
      </h2>

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
