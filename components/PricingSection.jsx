import Image from 'next/image';


const PriceSection = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-2 py-10 sm:px-6 lg:px-14">
                    <div className="text-center">
                        <p className="text-[46px] text-[#333333] font-bold " >Pricing Plan</p>
                    </div>
                    <div className="PricePlan py-10">
                        <div className="overflow-auto  ">
                            <table className="table-fixed">
                                <thead>
                                    <tr>
                                        <th>
                                            <div className="text-left">
                                                <div className="">
                                                    <span className="font-bold text-[24px] text-[#333333] mr-4" >Compare plans</span>
                                                    <button className="font-semibold border rounded-lg px-4 py-2" >60% Off</button>
                                                </div>
                                                <div className="text-[14px] text-[#999999] font-medium ">
                                                    Choose your workspace plan according to your organisational plan
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="">
                                                <div className="">
                                                    <span className="text-[40px] font-bold text-[#333333] mr-3 " >Free</span>
                                                    <span className="text-[14px] font-medium text-[#999999]" >/ Lifetime</span>
                                                </div>
                                                <button className="text-white bg-[#236AD4] py-4 px-[113px] rounded-lg" >
                                                    Create Free Account
                                                </button>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="">
                                                <div className="">
                                                    <span className="text-[40px] font-bold text-[#333333] mr-3 " >₹ 849</span>
                                                    <span className="text-[14px] font-medium text-[#999999]" >/ Month</span>
                                                </div>
                                                <button className="text-white bg-[#236AD4] py-4 px-[113px] rounded-lg" >
                                                    Login to Buy
                                                </button>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="">
                                                <div className="">
                                                    <span className="text-[40px] font-bold text-[#333333] mr-3 " >₹ 4310</span>
                                                    <span className="text-[14px] font-medium text-[#999999]" >/ Year</span>
                                                </div>
                                                <button className="text-white bg-[#236AD4] py-4 px-[113px] rounded-lg" >
                                                    Login to Buy
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Number of Users</td>
                                        <td className="text-[14px] text-[#333333] font-medium text-center" >1</td>
                                        <td className="text-[14px] text-[#333333] font-medium text-center" >3</td>
                                        <td className="text-[14px] text-[#333333] font-medium text-center" >1</td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Users Per Page</td>
                                        <td className="text-[14px] text-[#333333] font-medium text-center" >5 Pages</td>
                                        <td className="text-[14px] text-[#333333] font-medium text-center" >50 Pages</td>
                                        <td>
                                            <div className="text-center">
                                                <p className="text-[14px] font-medium text-[#333333]" >Unlimited</p>
                                                <p className="text-[14px] font-medium text-[#999999]" > Pages Add-ons on Demand</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Includes essential features to get started</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >More advanced features for increased productivity</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Designing & Development</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Customizable options to meet your specific needs</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Secure data storage</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Email Support</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >24/7 customer support</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Analytics and reporting</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-[18px] text-[#333333] font-medium" >Account Management</td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PriceSection