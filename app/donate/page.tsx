"use client";

import { info } from "@/utils/data/app-info";
import { Donation, donations } from "@/utils/data/donations";
import Image from "next/image";
import Link from "next/link";

export default function Donate() {
  return (
    <div id="donate" className="my-5 lg:my-16 relative mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="lg:py-8">
        <h1 className="text-4xl font-medium text-primary p-2 px-5 text-2xl rounded-md lg:text-[3.2rem] lg:leading-[4.5rem]">
          Support SongLib
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 text-x2l rounded-md">
          Donate Today
        </h3>
      </div>

      <div className="lg:py-8 my-8 bg-[#fff] rounded-lg drop-shadow-3xl">
        <p
          className="text-xl text-black p-2 px-5"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{
            __html: info.donateStatement.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        ></p>

        <div className="mx-auto max-w-2xl m-8  lg:max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div className="flex flex-col items-center text-center gap-x-8 p-8 rounded-lg border bg-[#fff] drop-shadow-lg">
              <div>
                <Image
                  src="/images/mpesa.png"
                  alt="mpesa"
                  width={150}
                  height={100}
                  className="w-[150px] h-[120px] object-cover"
                />
                <h2 className="text-3xl font-bold leading-10 text-[#b86918] m-5">
                  M-PESA
                </h2>
                <h3 className="text-xl font-bold font-medium text-primary mb-3">
                  PAYBILL: 880 100
                </h3>
                <h3 className="text-xl font-bold font-medium text-primary">
                  ACC: 953 00 00 018
                </h3>
              </div>
            </div>

            {donations
              .map((donation: Donation) => (
                <div key={donation.id} className="flex flex-col items-center text-center gap-x-8 p-8 rounded-lg border bg-[#fff] drop-shadow-lg">
                  <Image
                    src={donation.image}
                    alt={donation.title}
                    width={100}
                    height={120}
                    className="w-[150px] h-[150px] object-cover"
                  />

                  <h3 className="text-3xl font-bold text-[#b86918] p-2 px-5 mt-4">
                    {donation.title.toUpperCase()}
                  </h3>
                  <Link
                    className="rounded-xl flex items-center justify-center mt-4 bg-[#bf360c] gap-2 hover:bg-[#b86918] dark:hover:bg-[#b86918] sm:text-base h-10 sm:h-10 px-4 sm:px-8 text-xs md:text-sm"
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
