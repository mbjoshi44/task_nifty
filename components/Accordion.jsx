'use client';
import { useState } from "react";
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
          question: "What is the NiftyTrader Prime Plan?",
          answer: "The prime plan is a subscription-based plan that provides access to a variety of premium features on NiftyTrader.",
        },
        {
          question: "What are the premium features included with the prime plan?",
          answer: "Premium features include advanced analytics, exclusive tools, priority support, and more.",
        },
        {
          question: "Can I try the premium features before I subscribe to the prime plan?",
          answer: "Yes, we offer a trial period for you to explore the premium features.",
        },
        {
          question: "How do I subscribe to the prime plan?",
          answer: "To subscribe, go to the pricing page and select the Prime Plan.",
        },
        {
          question: "Can I upgrade my subscription level?",
          answer: "Yes, you can upgrade your subscription at any time through your account settings.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit cards, debit cards, and other popular payment methods.",
        },
        {
          question: "Do you offer any discounts or promotions?",
          answer: "Yes, we periodically offer discounts and promotions. Check our website for updates.",
        },
      ];

    return (
        <>
            <section>
                <div className="mx-auto px-2 py-10 sm:px-6 lg:px-[150px]">
                    <div className="text-center">
                        <p className="text-[46px] text-[#333333] font-bold " >Faq</p>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="text-lg font-medium text-[#333333]">{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 text-gray-600 text-sm sm:text-base">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Accordion;