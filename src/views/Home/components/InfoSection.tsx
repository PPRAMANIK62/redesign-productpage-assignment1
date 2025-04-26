import aboutUs from '@/assets/images/about_us.gif'
import challenges from '@/assets/images/challenges_solve.gif'
import mission from '@/assets/images/our_mission.gif'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface SectionProps {
    img: string
    icon1: ReactNode
    icon2: ReactNode
    title: string
    content1: string
    content2: string
    icontitle1: string
    iconp1: string
    icontitle2: string
    iconp2: string
    status: 'left' | 'right'
    index: number
    isVisible: boolean
}

const Section: React.FC<SectionProps> = ({
    status,
    img,
    icon1,
    icon2,
    title,
    content1,
    content2,
    icontitle1,
    iconp1,
    icontitle2,
    iconp2,
    index,
    isVisible,
}) => {
    return (
        <div
            className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-1000 transform ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            {/* Image Section */}
            <div
                className={`w-full lg:w-1/2 flex items-center justify-center ${status === 'right' ? 'order-first lg:order-last' : 'order-first'}`}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative">
                        <img
                            src={img}
                            alt={title}
                            className="w-full object-cover rounded-lg shadow-xl max-w-[400px] transition-all duration-500 group-hover:scale-[1.01]"
                        />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div
                className={`w-full lg:w-1/2 ${status === 'right' ? 'order-last lg:order-first' : 'order-last'}`}
            >
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        {title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {content1}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {content2}
                    </p>
                </div>

                {/* Feature Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="p-3 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg text-primary">
                                {icon1}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 text-lg">
                                {icontitle1}
                            </h4>
                            <p className="text-gray-600">{iconp1}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="p-3 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg text-primary">
                                {icon2}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 text-lg">
                                {icontitle2}
                            </h4>
                            <p className="text-gray-600">{iconp2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FullPageSections = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const currentRef = sectionRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    const sections = [
        {
            img: aboutUs,
            icon1: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: 'About Us',
            content1:
                'We are a pioneering AI-driven platform focused on revolutionizing the healthcare industry. By addressing inefficiencies and disorganization, we empower healthcare professionals to modernize their operations, attract more patients, and deliver seamless, personalized care.',
            content2:
                'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience, making healthcare more accessible and efficient for everyone.',
            icontitle1: 'AI-Powered Solutions',
            iconp1: 'Leveraging advanced technology for healthcare',
            icontitle2: 'Patient-Centric Approach',
            iconp2: 'Creating personalized healthcare experiences',
            status: 'left' as const,
        },
        {
            img: mission,
            icon1: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            title: 'Our Mission',
            content1:
                "Our mission is to simplify complex healthcare processes by leveraging advanced AI tools that optimize healthcare professionals' operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.",
            content2:
                'We strive to become the leading platform for healthcare management and digital transformation, empowering healthcare providers to focus on what matters most - delivering exceptional patient care.',
            icontitle1: 'Operational Excellence',
            iconp1: 'Streamlining healthcare workflows',
            icontitle2: 'Growth & Innovation',
            iconp2: 'Driving practice expansion and advancement',
            status: 'right' as const,
        },
        {
            img: challenges,
            icon1: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                </svg>
            ),
            title: 'The Challenges We Solve',
            content1:
                'Healthcare practices today face numerous challenges including inefficient patient acquisition, administrative overload, and difficulty scaling operations. Many providers rely on outdated methods, leading to missed opportunities and suboptimal patient experiences.',
            content2:
                'Our platform addresses these pain points by automating front-office tasks, streamlining lead management, and improving operational efficiency for healthcare professionals, allowing them to focus on providing exceptional care.',
            icontitle1: 'Time Optimization',
            iconp1: 'Reducing administrative burden',
            icontitle2: 'Enhanced Communication',
            iconp2: 'Improving patient engagement and satisfaction',
            status: 'left' as const,
        },
    ]

    return (
        <div
            ref={sectionRef}
            className="bg-gradient-to-b from-white to-blue-50/30 py-20"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Transforming Healthcare
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover how our AI-powered platform is revolutionizing
                        healthcare management and patient experiences
                    </p>
                </div>

                <div className="flex flex-col gap-32">
                    {sections.map((section, index) => (
                        <Section
                            key={index}
                            {...section}
                            index={index}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FullPageSections
