import smallBG from '@/assets/images/main-bg-small.png'
import HomeNavbar from '@/components/shared/HomeNav'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'
import { Button } from '@/components/ui'
import { useEffect, useState } from 'react'
import { heroNewData } from '../data'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void
    faqRef: React.RefObject<HTMLElement>
    featuresRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    faqRef,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Trigger animation after component mounts
        setIsVisible(true)
    }, [])

    return (
        <div className="bg-gradient-to-br from-[#01052f] to-[#0a1a5e] w-full relative flex flex-col py-2 md:py-5 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
                    <div
                        className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-400 opacity-10 rounded-full filter blur-3xl animate-pulse"
                        style={{ animationDelay: '1s' }}
                    />
                    <div
                        className="absolute top-[40%] right-[30%] w-40 h-40 bg-purple-500 opacity-10 rounded-full filter blur-3xl animate-pulse"
                        style={{ animationDelay: '2s' }}
                    />
                </div>
            </div>

            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                faqRef={faqRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="min-h-[90vh] flex items-center">
                {/* Background image for mobile */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10] opacity-20"
                />

                {/* Overlay to ensure text readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-[-5]"></div>

                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row md:mt-6 lg:mt-0 lg:items-center lg:justify-between px-4 max-w-[1538px] mx-auto">
                    {/* Content Section */}
                    <div
                        className={`lg:w-1/2 lg:pr-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            <span className="text-primary">
                                AI-Powered Front Office
                            </span>{' '}
                            <br />
                            for Healthcare Professionals
                        </h1>
                        <p className="text-xl mb-8 font-light leading-relaxed text-gray-200">
                            Transform your healthcare practice with our
                            intelligent platform.
                            <span className="block mt-3">
                                Create your{' '}
                                <span className="text-primary font-semibold">
                                    AI-powered website
                                </span>{' '}
                                in minutes and scale your practice with{' '}
                                <span className="text-primary font-semibold">
                                    smart digital marketing
                                </span>
                                .
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <HcfSignupPopup
                                popupButtonStatus
                                buttonChildren={
                                    <Button
                                        block
                                        variant="solid"
                                        className="rounded-lg text-lg py-3 px-8 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                                    >
                                        Get Started Free
                                    </Button>
                                }
                            />
                            <Button
                                block
                                variant="plain"
                                className="rounded-lg text-lg py-2 px-8 border-2 border-white/20 hover:border-primary/50 hover:text-primary transition-all duration-300"
                                onClick={() => scrollToSection(featuresRef)}
                            >
                                Explore Features
                            </Button>
                        </div>
                        <div className="text-white flex gap-8 mt-8 flex-wrap">
                            <div className="text-center sm:text-left">
                                <h1 className="text-4xl font-bold text-white">
                                    2,100
                                    <span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg text-gray-300">
                                    Qualified Doctors
                                </p>
                            </div>
                            <div className="text-center sm:text-left">
                                <h1 className="text-4xl font-bold text-white">
                                    1,000
                                    <span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg text-gray-300">
                                    Partner Hospitals
                                </p>
                            </div>
                            <div className="text-center sm:text-left">
                                <h1 className="text-4xl font-bold text-white">
                                    800
                                    <span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg text-gray-300">
                                    Treatment Plans
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Illustration/Feature Section */}
                    <div
                        className={`lg:w-5/12 mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10">
                            <div className="grid grid-cols-2 gap-4">
                                {heroNewData.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 hover:bg-primary/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        <div className="text-primary mb-3">
                                            {item.icon}
                                        </div>
                                        <p className="text-sm font-medium">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl p-4 backdrop-blur-sm">
                                <p className="text-center text-white font-medium">
                                    &quot;Our AI platform helped me grow my
                                    practice by 300% in just 6 months!&quot;
                                </p>
                                <p className="text-center text-sm mt-2 text-gray-300">
                                    - Dr. Sarah Johnson, Cardiologist
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-[60px] text-[#eff6ff]"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="currentColor"
                        opacity=".25"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        fill="currentColor"
                        opacity=".5"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default HeroSection
