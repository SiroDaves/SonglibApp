"use client";

import { info } from "@/utils/data/app-info";
import { Donation, donations } from "@/utils/data/donations";
import { PrivacyText, texts } from "@/utils/data/privacy-texts";
import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <div id="privacy-policy" className="my-5 lg:my-16 relative mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="lg:py-8">
        <h1 className="text-4xl font-medium text-primary p-2 px-5 text-2xl rounded-md lg:text-[3.2rem] lg:leading-[4.5rem]">
          Support SongLib
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 text-x2l rounded-md">
          Donate Today
        </h3>
      </div>

      <div className="lg:py-8 bg-white">
        <p
          className="text-xl text-black p-2 px-5"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{
            __html: info.donateStatement.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        ></p>

        <div className="mx-auto max-w-2xl lg:max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div className="flex flex-col items-center text-center gap-x-8 px-3 py-5">
              <div>
                <Image
                  src="/images/mpesa.png"
                  alt="mpesa"
                  width={100}
                  height={120}
                  className="w-[100px] h-[120px] object-cover"
                />

                <h3 className="text-3xl font-bold text-[#b86918] p-2 px-5 text-xl rounded-md">
                  M-PESA
                </h3>
                <Link
                  className="rounded-xl flex items-center justify-center bg-[#bf360c] gap-2 hover:bg-[#b86918] dark:hover:bg-[#b86918] sm:text-base h-10 sm:h-10 px-4 sm:px-8 text-xs md:text-sm"
                  href=""
                  role="button"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">DONATE</span>
                </Link>
              </div>
            </div>

            {donations
              .map((donation: Donation) => (
                <div key={donation.id} className="flex flex-col items-center text-center gap-x-8 px-3 py-5">
                  <Image
                    src={donation.image}
                    alt={donation.title}
                    width={100}
                    height={120}
                    className="w-[100px] h-[120px] object-cover"
                  />

                  <h3 className="text-3xl font-bold text-[#b86918] p-2 px-5 text-xl rounded-md">
                    {donation.title}
                  </h3>
                  <Link
                    className="rounded-xl flex items-center justify-center bg-[#bf360c] gap-2 hover:bg-[#b86918] dark:hover:bg-[#b86918] sm:text-base h-10 sm:h-10 px-4 sm:px-8 text-xs md:text-sm"
                    href={donation.url}
                    role="button"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">DONATE</span>
                  </Link>
                </div>
              ))}

          </div>
        </div>

      </div>
    </div >
  );
};
