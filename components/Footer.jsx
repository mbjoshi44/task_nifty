import Image from 'next/image';

const Footer = () => {
    return (
        <div>

        <section className="" >
            <div className="bg-[url('/images/footer-banner.jpg')] bg-auto bg-no-repeat bg-right shadow-xl py-10 bg-white  rounded-md">
                <div className="flex justify-around py-[150px]">
                    <div className=""></div>
                    <div className="text-center">
                        <p className="text-[40px] font-normal text-[#333333] mb-5">Screening Like a Pro with <span className="font-medium">Nifty Trader</span> </p>
                        <p className=" text-[24px] text-[#999999] font-normal mb-5" >Stop wasting time and start winning! Get access to  Nifty Trader's Stock Screeners today!</p>
                        <button className="text-white bg-[#4399EB] py-4 px-[113px] rounded-lg text-[28px] font-semibold mt-4" >
                            Start Free Trial Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <footer>
      <div className="py-4 bg-black mx-auto px-2 sm:px-6 lg:px-14">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Image className="" src="/images/facebook.svg" width={36} height={36} alt="" />
            <Image className="" src="/images/x.svg" width={36} height={36} alt="" />
            <Image className="" src="/images/youtube.svg" width={36} height={36} alt="" />
            <Image className="" src="/images/linkedin.svg" width={36} height={36} alt="" />
            <Image className="" src="/images/Instagram.svg" width={36} height={36} alt="" />
            <Image className="" src="/images/telegram.svg" width={36} height={36} alt="" />
          </div>
          <div className="">
            <p className="text-xl font-semibold underline underline-offset-8 text-white " >www.niftytrader.in</p>
          </div>
        </div>
      </div>
    </footer>   
        </div>
    )
}

export default Footer;