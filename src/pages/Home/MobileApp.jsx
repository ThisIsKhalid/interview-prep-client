import React from 'react';
import appleLogo from '../../assets/icons/apple.png'
import googlePlayLogo from '../../assets/icons/google-play.png'

const MobileApp = () => {
    return (
      <section className="bg-[#ffefe7db] pt-20">
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 items-center justify-center lg:text-5xl text-4xl text-gray-900">
            <h1 className="">Try Learning Free</h1>
            <h1>
              on{" "}
              <span className="border border-gray-900 px-3 py-2 font-bold bg-[#FFCD70] rounded-full">
                Mobile App
              </span>
            </h1>

            <div className="flex items-center gap-4 text-white mt-6">
              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg">
                <img className="h-7 w-7" src={googlePlayLogo} alt="" />
                <div>
                  <p className="text-xs">Get It on</p>
                  <h1 className="text-sm font-medium">Google Play</h1>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg">
                <img className="h-7 w-7" src={appleLogo} alt="" />
                <div>
                  <p className="text-xs">Download on the</p>
                  <h1 className="text-sm font-medium">App Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default MobileApp;