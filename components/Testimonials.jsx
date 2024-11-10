'use client';
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => {
    useEffect(()=>{
        console.log("matromonial" , testimonial)
    },[])
    return <div className="profile-card drop-shadow-md border p-6 bg-white rounded-lg text-center lg:text-start max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
            <div class0Name="profile mb-4">
                <Image
                    src={testimonial.image}
                    width={150}
                    height={150}
                    alt={testimonial.name}
                    className="rounded-full border-2 border-white shadow-md"
                />
            </div>
            <div className="col-span-2">
                <p className="text-[18px] font-semibold text-[#333333] mb-2">
                    {testimonial.name}
                </p>
                <p className="font-normal text-[#333333] text-sm">
                    {testimonial.testimonial}
                </p>
            </div>
        </div>
    </div>
};

const Testimonials = () => {
    const testimonialData = [
        {
            name: 'Bhavyaa Narotambhai',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Rajkumari Sahani',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Anjan Banerjee',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Vibha Hegde',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Bhavyaa Narotambhai',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Rajkumari Sahani',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Anjan Banerjee',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Vibha Hegde',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        }
    ];

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {

        console.log("dkdjdjd",testimonialData)
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getMarqueeSpeed = () => {
        if (screenWidth < 640) {
            return 40; // Slower speed for mobile
        } else if (screenWidth < 1024) {
            return 50; // Medium speed for tablets
        } else {
            return 60; // Faster speed for desktop
        }
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-14">
                <div className="text-center mb-8">
                    <p className="text-[28px] sm:text-[36px] lg:text-[46px] text-[#333333] font-bold">
                        Client Testimonials
                    </p>
                </div>
                <div className="testimonialSlider gap-4">
                    <Marquee
                        speed={getMarqueeSpeed()}
                        gradient={true}
                        gradientColor={[255, 255, 255]}
                        gradientWidth={100}
                        pauseOnHover={true}
                        className="mb-8"
                    >
                        {testimonialData.map((testimonial, index) => (
                            <div key={index} className="mx-4">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee
                        speed={getMarqueeSpeed()}
                        gradient={true}
                        gradientColor={[255, 255, 255]}
                        gradientWidth={100}
                        pauseOnHover={true}
                        direction="right"
                    >
                        {testimonialData.map((testimonial, index) => (
                            <div key={index} className="mx-4">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
