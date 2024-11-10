import React from "react";
import Image from "next/image";

import logo from "../assets/logo.png";
const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-banner-mobile.jpg')] lg:bg-[url('/images/hero-banner.jpg')] bg-cover bg-center">
    <header>
        <nav className="bg-[#11111180]">
            <div className="mx-auto px-4 sm:px-6 lg:px-14">
                <div className="h-16 flex justify-between items-center">
                    <div className="flex shrink-0 items-center">
                        <Image src={logo} width={155} height={35} alt="Logo" className="md:w-[200px] md:h-[45px]" />
                    </div>
                    <button type="button" className="rounded-md font-medium border border-white hover:bg-white px-5 py-2">
                        <span className="text-white hover:text-black text-[14px] md:text-base"> Visit Website </span>
                    </button>
                </div>
            </div> 
        </nav>
    </header>
    <div className="mx-auto lg:px-14  lg:py-24  flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-left lg:text-left sm:text-center max-w-lg sm:py-10 px-4 lg:px-0 py-10 ">
            <p className='text-white text-[36px] lg:text-[60px] font-medium mb-4'>Stock Screening Simplified!</p>
            <p className='text-white text-[18px] lg:text-[24px] mb-6 font-normal'>Find Winning Stock Faster with Nifty Trader's Advanced Stock Screening Tool.</p>
            <button type="button" className="rounded-md font-medium border border-[#13A8D7] bg-[#13A8D7] hover:bg-transparent px-5 py-2">
                <span className="text-white hover:text-[#13A8D7] text-[20px] lg:text-[24px]"> Free Trial </span>
            </button>
        </div>
        <div className="relative flex justify-center items-center">
            <Image className="md:w-[80%] lg:w-full rounded md:rounded-lg lg:rounded-[40px]" src="/images/thumbnail.jpg" width={800} height={100} alt="" />
            <div className="absolute flex justify-center items-center">
                <Image src="/images/play-btn.svg" width={96} height={96} alt='Play Button' />
            </div>
        </div>
    </div>
</div>
  );
};

export default HeroSection;
