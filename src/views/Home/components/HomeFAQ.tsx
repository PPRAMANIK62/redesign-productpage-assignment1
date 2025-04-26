import { useEffect, useRef, useState } from 'react'
import { BiChevronDown, BiQuestionMark } from 'react-icons/bi'

type Props = {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
    index: number
}

const FAQItem = ({ question, answer, isOpen, onClick, index }: Props) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    return (
        <div
            className={`border-b border-indigo-100 last:border-b-0 transition-all duration-300 ${
                isOpen ? 'bg-indigo-50/30' : ''
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            <button
                className="w-full py-4 px-6 flex items-center justify-between text-left transition-colors hover:bg-indigo-50/50 rounded-lg"
                aria-expanded={isOpen}
                onClick={onClick}
            >
                <h3 className="text-lg font-medium text-gray-900 pr-8">
                    {question}
                </h3>
                <div
                    className={`flex-shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                >
                    <BiChevronDown className="w-6 h-6" />
                </div>
            </button>

            <div
                style={{ height }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
            >
                <div
                    ref={contentRef}
                    className="p-6 pt-2 text-gray-600 leading-relaxed"
                >
                    {answer}
                </div>
            </div>
        </div>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const faqRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const currentRef = faqRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    const faqData = [
        {
            que: 'What is gogetwell.ai?',
            ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication. Our platform is designed to make healthcare facilitation more efficient and patient-friendly.',
        },
        {
            que: 'What is the AI Front Office for Healthcare Agents?',
            ans: 'The AI Front Office is a powerful platform that helps healthcare professionals manage their services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so you can focus on delivering care. Think of it as your virtual assistant that works 24/7.',
        },
        {
            que: 'How does the AI Agent assist me in my healthcare business?',
            ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps you automate everyday tasks, saving you time and boosting your productivity. It can also analyze patient data to provide personalized care recommendations.',
        },
        {
            que: 'Can I customize the website for my healthcare services?',
            ans: 'Yes, you can fully customize the website to showcase your services. You get to choose the design, features, and content that best represent your brand, making it easy to attract and engage with patients. Our platform offers templates specifically designed for healthcare providers.',
        },
        {
            que: 'How does this platform support independent healthcare facilitators?',
            ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals. It scales with your practice, providing the tools you need at each stage of growth.',
        },
        {
            que: 'How does the platform help me manage patient leads?',
            ans: 'The AI system captures, organizes, and prioritizes patient leads for you. It follows up with patients, schedules consultations, and makes sure you never miss an opportunity to provide care. The system also provides analytics to help you understand your conversion rates and optimize your patient acquisition strategy.',
        },
        {
            que: 'Is it easy to integrate the platform with the hospitals I work with?',
            ans: 'Yes, the platform easily connects with the hospital systems you collaborate with. It helps you manage billing, communication, and partnerships without any hassle. We provide APIs and integration tools to ensure smooth data flow between your platform and hospital systems.',
        },
        {
            que: 'Is the platform secure and compliant with healthcare regulations?',
            ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so you know that your patients' data is always protected. We implement end-to-end encryption, regular security audits, and follow all relevant data protection standards.",
        },
        {
            que: 'How quickly can I get started with the platform?',
            ans: 'Setting up the platform is fast and easy. You can create your AI-powered front office and website in just a few minutes, and our support team guides you through the entire process. We also provide comprehensive documentation and video tutorials to help you make the most of all features.',
        },
        {
            que: 'What kind of customer support is available if I need help?',
            ans: 'You have access to 24/7 customer support, along with tutorials and live demos, to make sure you get the most out of the platform and can resolve any issues quickly. Our support team includes healthcare industry experts who understand your specific needs.',
        },
        {
            que: 'How does the platform help me attract more patients?',
            ans: 'The platform allows you to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help you attract and retain more patients. It also provides marketing tools and analytics to help you target the right audience and measure your success.',
        },
    ]

    return (
        <div
            ref={faqRef}
            className="py-20 px-4 bg-gradient-to-br from-white to-indigo-50"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-1000 transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
                        <BiQuestionMark className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about our platform? Find quick answers to
                        the most common questions below.
                    </p>
                </div>

                {/* FAQ Items */}
                <div
                    className={`bg-white rounded-2xl shadow-xl p-2 transition-all duration-1000 delay-300 transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={index === openIndex}
                            onClick={() =>
                                setOpenIndex(index === openIndex ? -1 : index)
                            }
                        />
                    ))}
                </div>

                {/* Additional Help */}
                <div
                    className={`mt-12 text-center transition-all duration-1000 delay-500 transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <p className="text-gray-600">
                        Still have questions? We&apos;re here to help!
                    </p>
                    <a
                        href="#contact"
                        className="inline-block mt-4 text-primary font-medium hover:underline"
                    >
                        Contact our support team →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FAQ
