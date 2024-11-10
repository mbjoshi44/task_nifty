import Image from 'next/image';

const Options = () => {
  return (
    <div>

    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-14 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300">
            <div className="flex justify-start mb-4">
              <Image src="/images/advscrn-icon.svg" width={60} height={60} alt="Advanced Stock Screener" />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2">Advanced Stock Screener</p>
            <p className="font-normal text-[#999999] text-sm ">Access advanced filters like volume shockers, price action, range breakout, opening price clues, and more for efficient stock screening.</p>
          </div>
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300">
            <div className="flex justify-start mb-4">
              <Image src="/images/query_stats.svg" width={60} height={60} alt="Live Market Screener" />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2">Live Market Screener</p>
            <p className="font-normal text-[#999999] text-sm ">Access real-time market data and dynamic filters to ensure timely trades without outdated information.</p>
          </div>
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300">
            <div className="flex justify-start mb-4">
              <Image src="/images/find_in_page.svg" width={60} height={60} alt="Options Screener" />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2">Options Screener</p>
            <p className="font-normal text-[#999999] text-sm">Quickly identify optimal trading opportunities in the options market with our real-time data and advanced filters.</p>
          </div>
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300">
            <div className="flex justify-start mb-4">
              <Image src="/images/link.svg" width={60} height={60} alt="Advanced Option Chain" />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2">Advanced Option Chain</p>
            <p className="font-normal text-[#999999] text-sm">Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-0 lg:mx-[60px] py-0 lg:py-10 ">
            <div className="bg-[url('/images/free-triel-mobile.jpg')] lg:bg-[url('/images/free-triel.jpg')] bg-cover lg:bg-auto bg-no-repeat bg-right lg:shadow-xl  rounded-md ">
                <div className="flex-none lg:flex justify-around items-center gap-4 p-6">
                    <div className=" text-center lg:text-left" >
                        <p className="xl:text-[44px] lg:text-[32px] sm:text-[18px] lg:text-[#333333]  text-white font-bold lg:py-0 sm:py-2 ">
                            Missing Trades Because of Outdated Data?
                        </p>
                        <p className="xl:text-[32px] lg:text-[24px] sm:text-[12px] lg:text-[#333333]  text-white  font-medium lg:py-0 sm:py-2">
                            Get the Live Market Screening with Dynamic Filters
                        </p>
                    </div>
                    <div className="text-center lg:text-left" >
                        <button type="button" className="freetrielbtn">
                            <span> Get Free Trial </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Options;
 