import React, { useCallback, useEffect, useState } from 'react'
import { BiStar } from 'react-icons/bi'

interface Testimonial {
    id: number
    name: string
    role: string
    image: string
    quote: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        role: 'Cardiologist',
        image: 'https://randomuser.me/api/portraits/women/32.jpg',
        quote: 'GoGetWell.ai transformed my practice. The AI-powered website attracts more patients, and the automated lead management saves me hours every day. My practice has grown by 300% in just 6 months!',
        rating: 5,
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        role: 'Orthopedic Surgeon',
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        quote: "As a busy surgeon, I needed a solution that could handle patient inquiries efficiently. This platform does exactly that, plus it helps me connect with international patients I couldn't reach before.",
        rating: 5,
    },
    {
        id: 3,
        name: 'Dr. Priya Patel',
        role: 'Neurologist',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: "The AI chatbot on my website answers patient questions 24/7, and the lead management system ensures I never miss a potential patient. It's like having a full-time assistant without the cost.",
        rating: 4,
    },
    {
        id: 4,
        name: 'Dr. James Wilson',
        role: 'Oncologist',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        quote: "The platform's ability to analyze medical reports and provide preliminary assessments saves me valuable time. My patients appreciate the quick responses and personalized care.",
        rating: 5,
    },
]

const TestimonialsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    const goToNext = useCallback(() => {
        if (isAnimating) return

        setIsAnimating(true)
        setActiveIndex((prev) => (prev + 1) % testimonials.length)

        setTimeout(() => {
            setIsAnimating(false)
        }, 500)
    }, [isAnimating])

    const goToPrev = () => {
        if (isAnimating) return

        setIsAnimating(true)
        setActiveIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        )

        setTimeout(() => {
            setIsAnimating(false)
        }, 500)
    }

    const goToSpecific = (index: number) => {
        if (isAnimating || index === activeIndex) return

        setIsAnimating(true)
        setActiveIndex(index)

        setTimeout(() => {
            setIsAnimating(false)
        }, 500)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext()
        }, 5000)

        return () => clearInterval(interval)
    }, [activeIndex, goToNext])

    return (
        <div className="py-16 px-4 bg-gradient-to-br from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our Users Say
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover how healthcare professionals like you are
                        transforming their practices with our AI-powered
                        platform.
                    </p>
                </div>

                <div className="relative">
                    {/* Testimonial Cards */}
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`,
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 p-8 md:p-12"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="md:w-1/3 flex flex-col items-center">
                                            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 text-center">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-600 mb-3 text-center">
                                                {testimonial.role}
                                            </p>
                                            <div className="flex text-yellow-400 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <BiStar
                                                        key={i}
                                                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                        fill={
                                                            i <
                                                            testimonial.rating
                                                                ? 'currentColor'
                                                                : 'none'
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="md:w-2/3">
                                            <div className="relative">
                                                <svg
                                                    className="absolute -top-6 -left-6 w-12 h-12 text-primary/20"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                                <p className="text-lg text-gray-700 italic relative z-10 leading-relaxed">
                                                    {testimonial.quote}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-primary/10 text-primary rounded-full p-2 shadow-lg transition-all duration-300"
                            aria-label="Previous testimonial"
                            onClick={goToPrev}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-primary/10 text-primary rounded-full p-2 shadow-lg transition-all duration-300"
                            aria-label="Next testimonial"
                            onClick={goToNext}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? 'bg-primary w-8'
                                        : 'bg-gray-300 hover:bg-primary/50'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                                onClick={() => goToSpecific(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection
