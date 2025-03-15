"use client";

import { AppLink, links } from "@/utils/data/app-links";
import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export function MobileLinks() {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
        {links
          .filter((link) => link.type === 'mobile')
          .map((link: AppLink) => (
            <div key={link.id} className="flex flex-col items-center text-center gap-x-8 px-3 py-5">
              <Image
                src={`/icons/${link.os.toLowerCase()}.png`}
                alt={link.os}
                width={100}
                height={120}
                className="w-[100px] h-[120px] object-cover"
              />

              <h3 className="text-3xl font-bold text-[#b86918] p-2 px-5 text-xl rounded-md">
                {link.title}
              </h3>
              <Link
                className="rounded-xl flex items-center justify-center bg-[#bf360c] gap-2 hover:bg-[#b86918] dark:hover:bg-[#b86918] sm:text-base h-10 sm:h-10 px-4 sm:px-8 text-xs md:text-sm"
                href={link.url}
                role="button"
                rel="noopener noreferrer"
              >
                <span className="text-xl">INSTALL</span>
              </Link>
            </div>
          ))}
      </div>
    </div>

  );
};

interface MobileLinkProps { osType: string; }

export const MobileLink: FC<MobileLinkProps> = ({ osType }) => {
  const link: AppLink = links.find(l => l.os === osType) || links[1];
    const getDownloadUrl = (ext: string) => {
      return `${info.github}/releases/download/v${info.appVersion}/${info.appName}_${info.appVersion}${ext}`;
    }
  return (
    <div className="mx-auto max-w-2xl lg:max-w-3xl px-4 sm:px-6 lg:px-8">
      <div key={link.id} className="flex flex-col items-center text-center gap-x-8 px-3 py-5">
        <Image
          src={`/icons/${link.os.toLowerCase()}.png`}
          alt={link.os}
          width={100}
          height={120}
          className="w-[100px] h-[120px] object-cover"
        />

        <h3 className="text-3xl font-medium text-[#000] p-2 px-5 text-xl rounded-md">
          Install our <span className="text-[#b86918] font-bold">{link.title}</span> app, right away!
        </h3>
        <Link href={link.url} role="button" rel="noopener noreferrer" >
          <Image
            src={`/images/${link.os.toLowerCase()}.png`}
            alt={link.os}
            height={120}
            width={500}
            className="h-[120px] w-auto object-contain"
          />
        </Link>
        {link.title === 'Android' && (
          <Link href={getDownloadUrl(link.ext)} role="button" rel="noopener noreferrer">
            <Image
              src={`/images/${link.os.toLowerCase()}1.png`}
              alt={link.os}
              width={550}
              height={120}
              className="w-[550px] h-auto object-contain"
            />
          </Link>
        )}

      </div>
    </div>

  );
};
