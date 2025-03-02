"use client";

import { AppLink, links } from "@/utils/data/app-links";
import { info } from "@/utils/data/app-info";
import Image from "next/image";
import Link from "next/link";

export default function DesktopLinks() {
  const getDownloadUrl = (ext: string) => {
    return `${info.github}/releases/download/v${info.appVersion}/${info.appName}_${info.appVersion}${ext}`;
  }

  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {links
          .filter((link) => link.type === "desktop")
          .reduce<AppLink[]>((acc, link) => {
            if (link.os === "Linux") {
              const existing = acc.find((item) => item.os === "Linux");
              if (existing) {
                existing.subLinks = [...(existing.subLinks || []), link];
              } else {
                acc.push({ ...link, subLinks: [] });
              }
            } else {
              acc.push(link);
            }
            return acc;
          }, [])
          .map((link: AppLink) => (
            <div key={link.id} className="flex flex-col items-center text-center px-3 py-5">
              <Image
                src={`/icons/${link.os.toLowerCase()}.png`}
                alt={link.os}
                width={100}
                height={120}
                className="w-[100px] h-[120px] object-cover"
              />

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#b86918] p-2 px-5 rounded-md">
                {link.os}
              </h3>

              {/* Render Multiple Links for Linux */}
              {link.subLinks && link.subLinks.length > 0 ? (
                <div className="flex gap-4">
                  {[link, ...link.subLinks].map((linuxLink) => (
                    <Link
                      key={linuxLink.ext}
                      className="rounded-xl flex flex-col items-center justify-center bg-[#bf360c] hover:bg-[#b86918] 
                               sm:text-base h-auto px-4 sm:px-3 py-3 text-xs md:text-sm text-white transition-all duration-300"
                      href={getDownloadUrl(linuxLink.ext)}
                      role="button"
                      rel="noopener noreferrer"
                    >
                      <span className="text-lg font-semibold">{linuxLink.ext}</span>
                      <p className="text-xs opacity-90 truncate max-w-[150px]">{linuxLink.url}</p>
                    </Link>
                  ))}
                </div>
              ) : (
                /* Single Download Link */
                <Link
                  className="rounded-xl flex items-center justify-center bg-[#bf360c] gap-2 hover:bg-[#b86918] 
                             sm:text-base h-10 sm:h-10 px-4 sm:px-8 text-xs md:text-sm text-white"
                  href={getDownloadUrl(link.ext)}
                  role="button"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">DOWNLOAD</span>
                </Link>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

