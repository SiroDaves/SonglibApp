"use client";

import { info } from "@/utils/data/app-info";
import { PrivacyText, texts } from "@/utils/data/privacy-texts";

export default function PrivacyPolicy() {
  return (
    <div id="privacy-policy" className="my-5 lg:my-16 relative mx-auto max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="lg:py-8">
        <h1 className="text-4xl font-medium text-primary p-2 px-5 text-2xl rounded-md lg:text-[3.2rem] lg:leading-[4.5rem]">
          Our Privacy Policy
        </h1>
        <h3 className="text-2xl text-primary p-2 px-5 text-x2l rounded-md">
          Privacy Policy for SongLib
        </h3>
      </div>

      <div className="lg:py-8 my-8 bg-[#fff] rounded-lg drop-shadow-3xl">
        <h3 className="text-2xl text-black p-2 px-5 text-x2l rounded-md">
          {info.privacyStatement}
        </h3>

        {texts.map((text: PrivacyText) => {
          return (
            <div key={text.id} >
              <h2 className="text-3xl font-medium text-black p-2 px-5 text-xl rounded-md lg:text-[2.6rem] lg:leading-[3.5rem] mt-6">
                {text.title}
              </h2>

              <p className="text-black p-2 px-5" style={{ whiteSpace: "pre-line" }}>
                {text.desc}
              </p>

            </div>
          );
        })}
      </div>
    </div>
  );
};
