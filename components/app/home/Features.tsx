"use client";

import { Feature, features } from "@/utils/data/features";
import { books } from "@/utils/data/books";
import { RiApps2AiFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa6";
import GlowCard from "@/components/ui/glow-card";
import Marquee from "react-fast-marquee";

export default function Features() {
  return (
    <div id="features">
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {books.map((book, id) => (
            <div className="w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#BF360C] shadow-none shadow-gray-50 group-hover:border-red-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <FaBookOpen size={36} color="#331900" />
                  </div>
                  <p className="text-primary text-sm sm:text-lg"> {book} </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature: Feature) => (
            <GlowCard key={feature.id} identifier={`feature-${feature.id}`}>
              <div className="p-3 relative">
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-red-500 transition-all duration-300 hover:scale-125">
                    <RiApps2AiFill size={36} color="#BF360C" />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {feature.title}
                    </p>
                    <p className="text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
