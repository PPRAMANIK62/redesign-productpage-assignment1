import React, { useEffect, useRef } from 'react'
import ContactForm from './components/ContactForm'
import FeaturesGrid from './components/FeaturesGrid'
import HeroSection from './components/HeroSection'
import HomeFAQs from './components/HomeFAQ'
import InfoSection from './components/InfoSection'
import PartnerLogosSection from './components/PartnerLogoSection'
import TestimonialsSection from './components/TestimonialsSection'

const Home = () => {
    const contactRef = useRef(null)
    const aboutRef = useRef(null)
    const featuresRef = useRef(null)
    const faqRef = useRef(null)

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        let lastScrollTop = 0

        const handleScroll = () => {
            const hcf = document.querySelector('.hcf-profile')
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop

            if (scrollTop > lastScrollTop) {
                if (hcf) {
                    hcf.classList.add('hcf-profile-fixed')
                }
            } else if (scrollTop < lastScrollTop) {
                if (hcf) {
                    hcf.classList.remove('hcf-profile-fixed')
                }
            }

            lastScrollTop = scrollTop
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Check if URL has a hash for direct navigation
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            // Remove the # symbol
            const targetId = hash.substring(1)

            // Find the corresponding ref
            if (targetId === 'contact' && contactRef.current) {
                setTimeout(() => {
                    scrollToSection(contactRef)
                }, 500)
            } else if (targetId === 'about' && aboutRef.current) {
                setTimeout(() => {
                    scrollToSection(aboutRef)
                }, 500)
            } else if (targetId === 'features' && featuresRef.current) {
                setTimeout(() => {
                    scrollToSection(featuresRef)
                }, 500)
            } else if (targetId === 'faq' && faqRef.current) {
                setTimeout(() => {
                    scrollToSection(faqRef)
                }, 500)
            }
        }
    }, [])

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <HeroSection
                scrollToSection={scrollToSection}
                faqRef={faqRef}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Features Grid */}
            <div ref={featuresRef} className="relative">
                <FeaturesGrid />
            </div>

            {/* Partner Logos */}
            <PartnerLogosSection />

            {/* About/Info Section */}
            <div ref={aboutRef} className="relative">
                <InfoSection />
            </div>

            {/* Testimonials */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <div ref={faqRef} className="relative">
                <HomeFAQs />
            </div>

            {/* Contact Form */}
            <div ref={contactRef} className="relative">
                <ContactForm />
            </div>

            {/* Footer */}
            <div className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <img
                                src="/img/logo/logo-dark-full.png"
                                alt="GoGetWell.ai Logo"
                                className="h-10"
                            />
                            <p className="text-gray-400 mt-2 text-sm">
                                © {new Date().getFullYear()} GoGetWell.ai. All
                                rights reserved.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
