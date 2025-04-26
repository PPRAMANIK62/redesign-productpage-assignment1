import { Button } from '@/components/ui'
import React, { useEffect, useRef, useState } from 'react'
import {
    BiCreditCard,
    BiGlobeAlt,
    BiMessageSquare,
    BiSearch,
    BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

const solutions = [
    {
        icon: <BiGlobeAlt className="w-6 h-6" />,
        title: 'Custom AI-Powered Website',
        description:
            'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        color: 'bg-blue-500',
        hoverColor: 'hover:bg-blue-600',
        textColor: 'text-blue-500',
        shadowColor: 'shadow-blue-500/20',
    },
    {
        icon: <FaUserSecret className="w-6 h-6" />,
        title: 'Enhanced Patient Conversion',
        description:
            'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        color: 'bg-purple-500',
        hoverColor: 'hover:bg-purple-600',
        textColor: 'text-purple-500',
        shadowColor: 'shadow-purple-500/20',
    },
    {
        icon: <BiMessageSquare className="w-6 h-6" />,
        title: 'Real-Time Query Handling',
        description:
            'Instant response system for patient inquiries with AI-powered chat support.',
        color: 'bg-green-500',
        hoverColor: 'hover:bg-green-600',
        textColor: 'text-green-500',
        shadowColor: 'shadow-green-500/20',
    },
    {
        icon: <FiFileText className="w-6 h-6" />,
        title: 'Medical Report Analysis',
        description:
            'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        color: 'bg-orange-500',
        hoverColor: 'hover:bg-orange-600',
        textColor: 'text-orange-500',
        shadowColor: 'shadow-orange-500/20',
    },
    {
        icon: <BiTrendingUp className="w-6 h-6" />,
        title: 'Improved Lead Generation',
        description:
            'Data-driven lead generation strategies to attract and engage potential patients.',
        color: 'bg-pink-500',
        hoverColor: 'hover:bg-pink-600',
        textColor: 'text-pink-500',
        shadowColor: 'shadow-pink-500/20',
    },
    {
        icon: <BsDatabase className="w-6 h-6" />,
        title: 'Comprehensive Healthcare Database',
        description:
            'Extensive medical information database for accurate patient guidance and support.',
        color: 'bg-indigo-500',
        hoverColor: 'hover:bg-indigo-600',
        textColor: 'text-indigo-500',
        shadowColor: 'shadow-indigo-500/20',
    },
    {
        icon: <LuLanguages className="w-6 h-6" />,
        title: 'Multilingual Support',
        description:
            'Breaking language barriers with comprehensive multilingual communication tools.',
        color: 'bg-red-500',
        hoverColor: 'hover:bg-red-600',
        textColor: 'text-red-500',
        shadowColor: 'shadow-red-500/20',
    },
    {
        icon: <BiCreditCard className="w-6 h-6" />,
        title: 'Seamless Payment Handling',
        description:
            'Secure and efficient payment processing for medical services globally.',
        color: 'bg-teal-500',
        hoverColor: 'hover:bg-teal-600',
        textColor: 'text-teal-500',
        shadowColor: 'shadow-teal-500/20',
    },
    {
        icon: <BiSearch className="w-6 h-6" />,
        title: 'Marketing And SEO Support',
        description:
            'Optimized digital presence with advanced SEO and marketing strategies.',
        color: 'bg-cyan-500',
        hoverColor: 'hover:bg-cyan-600',
        textColor: 'text-cyan-500',
        shadowColor: 'shadow-cyan-500/20',
    },
]

const FeaturesGrid: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([])
    const featuresRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start revealing items with a staggered delay
                    const timer = setTimeout(() => {
                        const newVisibleItems = []
                        for (let i = 0; i < solutions.length; i++) {
                            newVisibleItems.push(i)
                            setVisibleItems([...newVisibleItems])
                        }
                    }, 100)

                    return () => clearTimeout(timer)
                }
            },
            { threshold: 0.1 },
        )

        const currentRef = featuresRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    return (
        <div ref={featuresRef} className="py-20 px-4 md:px-8 bg-[#eff6ff]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Comprehensive Solutions
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover how our AI-powered platform can transform your
                        healthcare practice with these powerful features
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => {
                        const isVisible = visibleItems.includes(index)

                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-700 transform ${
                                    isVisible
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-10 opacity-0'
                                } hover:shadow-xl ${solution.shadowColor}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="p-6">
                                    <div
                                        className={`${solution.color} inline-flex p-4 rounded-xl text-white mb-5 ${solution.hoverColor} transition-all duration-300`}
                                    >
                                        {solution.icon}
                                    </div>
                                    <h3
                                        className={`text-xl font-semibold ${solution.textColor} mb-3`}
                                    >
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {solution.description}
                                    </p>
                                    <a
                                        href="#"
                                        className={`inline-block ${solution.textColor} font-medium hover:underline transition-all duration-300`}
                                    >
                                        Learn more →
                                    </a>
                                </div>
                                <div
                                    className={`h-1 w-full absolute bottom-0 ${solution.color}`}
                                ></div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        variant="solid"
                        className="rounded-lg text-lg py-3 px-8 shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    >
                        Explore All Features
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid
