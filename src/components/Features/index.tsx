import React from "react";

const Features = () => {
  return (
    <div id="features" className="relative z-10 py-15">
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-[#16101c] border border-[#9e67fa] rounded-full px-[17px] py-[3px] mb-4 shadow-[0px_0px_8px_0px_rgba(79,70,229,0.05)]">
          <span className="text-[14px] font-medium bg-gradient-to-b from-[#ecebfe] to-[#8d8d98] bg-clip-text text-transparent">
            Our Features
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-semibold leading-tight mb-4">
          What Makes Nano Banana AI Different
        </h2>
        <p className="text-white/50 text-sm sm:text-base md:text-lg xl:text-[18px] tracking-[0.36px] max-w-4xl mx-auto">
          We&apos;ve designed Nano Banana AI to combine simplicity with power.
          Enjoy effortless editing, professional-quality results, and
          cloud-based access — all in one seamless experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {[1, 2, 3, 4].map((feature) => (
          <div
            key={feature}
            className="bg-white/5 border border-white/12 rounded-[40px] p-2 flex flex-col lg:flex-row items-center gap-0"
          >
            <div
              className={`flex-1 p-10 ${feature % 2 === 0 ? "lg:order-2" : ""}`}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl xl:text-[26px] font-medium mb-4 tracking-[0.54px]">
                Nisi saep incidun eiusm quo
              </h3>
              <p className="text-white/50 text-sm sm:text-base xl:text-[16px] tracking-[-0.42px] leading-[26px] mb-6">
                Quas esse tincidu te parturien, molesti labore ad ipsa adipisci.
                Posuere dis a-delectus voluptatibu, nostru velit porro, do quod
                eteiusmodsedl quae aenea.
              </p>
              <div className="space-y-3">
                <p className="text-white/50 text-sm sm:text-base xl:text-[16px] tracking-[-0.42px] mb-4">
                  Nam Voluptat:
                </p>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                      <svg
                        className="w-full h-full text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white/50 text-sm sm:text-base xl:text-[16px] tracking-[-0.42px] leading-[26px]">
                      {item === 1 &&
                        "Quibu vulputa cillu sint efficitur gravida"}
                      {item === 2 &&
                        "Ullam eiusde numqua est magna per tempor pretiu"}
                      {item === 3 &&
                        "Ubi & diam blandi vel-ubi nam pellente per omnis"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-gray-50 rounded-[32px] aspect-[5/4] flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-[32px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
