import React from "react";

const ProductAbout = () => {
  return (
    <div className="bg-[#E8E8E8] py-20">
      <div className="container mx-auto flex flex-row gap-24">
        <div
          className="bg-center bg-no-repeat bg-cover w-[526px] h-[526px] rounded-[40px]"
          style={{ backgroundImage: "url(/product/drink.png)" }}
        ></div>
        <div className="w-1/2 h-[526px] relative">
          <div className="absolute bottom-0 bg-gradient-to-t from-[#E8E8E8] to-transparent h-48 w-full z-[5]"></div>
          <div className="h-full overflow-auto flex flex-col gap-12 about-scrollbar">
            <div className="flex flex-col gap-6 z-0">
              <div className="text-[#051D1D] text-3xl font-semibold">
                Global Flexibility & Security
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-base text-#051D1D]">
                  {`Cardinal Du Four is not only recognized for its craftsmanship
                but also for its investment potential. The combination of
                Bufog’s artwork and the award-winning Armagnac ensures this
                release is an excellent addition to any investment portfolio.`}
                </span>
                <span className="text-base text-#051D1D]">
                  {`Bufog’s designs for the bottles elevate them beyond traditional
                luxury spirits, transforming them into long-term assets that can
                be traded, collected, or displayed as fine art. Each bottle
                comes with VERISART digital certification, providing proof of
                authenticity and ownership.`}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6 z-0">
              <div className="text-[#051D1D] text-3xl font-semibold">
                Global Flexibility & Security
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-base text-#051D1D]">
                  {`Cardinal Du Four is not only recognized for its craftsmanship
                but also for its investment potential. The combination of
                Bufog’s artwork and the award-winning Armagnac ensures this
                release is an excellent addition to any investment portfolio.`}
                </span>
                <span className="text-base text-#051D1D]">
                  {`Bufog’s designs for the bottles elevate them beyond traditional
                luxury spirits, transforming them into long-term assets that can
                be traded, collected, or displayed as fine art. Each bottle
                comes with VERISART digital certification, providing proof of
                authenticity and ownership.`}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6 z-0">
              <div className="text-[#051D1D] text-3xl font-semibold">
                Global Flexibility & Security
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-base text-#051D1D]">
                  {`Cardinal Du Four is not only recognized for its craftsmanship
                but also for its investment potential. The combination of
                Bufog’s artwork and the award-winning Armagnac ensures this
                release is an excellent addition to any investment portfolio.`}
                </span>
                <span className="text-base text-#051D1D]">
                  {`Bufog’s designs for the bottles elevate them beyond traditional
                luxury spirits, transforming them into long-term assets that can
                be traded, collected, or displayed as fine art. Each bottle
                comes with VERISART digital certification, providing proof of
                authenticity and ownership.`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
