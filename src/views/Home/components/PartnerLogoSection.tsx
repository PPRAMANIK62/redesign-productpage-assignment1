import React, { useEffect, useState } from 'react'

// In a real application, you would use actual logo images from your assets folder
// For this example, we'll use placeholder logos
const partnerLogos = [
    {
        id: 1,
        name: 'Apollo Hospitals',
        logo: 'https://via.placeholder.com/150x60?text=Apollo',
    },
    {
        id: 2,
        name: 'Fortis Healthcare',
        logo: 'https://via.placeholder.com/150x60?text=Fortis',
    },
    {
        id: 3,
        name: 'Max Healthcare',
        logo: 'https://via.placeholder.com/150x60?text=Max',
    },
    {
        id: 4,
        name: 'Medanta',
        logo: 'https://via.placeholder.com/150x60?text=Medanta',
    },
    {
        id: 5,
        name: 'Narayana Health',
        logo: 'https://via.placeholder.com/150x60?text=Narayana',
    },
    {
        id: 6,
        name: 'Columbia Asia',
        logo: 'https://via.placeholder.com/150x60?text=Columbia',
    },
    {
        id: 7,
        name: 'Manipal Hospitals',
        logo: 'https://via.placeholder.com/150x60?text=Manipal',
    },
    {
        id: 8,
        name: 'AIIMS',
        logo: 'https://via.placeholder.com/150x60?text=AIIMS',
    },
]

const PartnerLogosSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Trusted by Leading Healthcare Institutions
                    </h2>
                    <p className="mt-2 text-gray-600">
                        We partner with top hospitals and healthcare providers
                        across India
                    </p>
                </div>

                <div
                    className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    {partnerLogos.map((partner, index) => (
                        <div
                            key={partner.id}
                            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-300"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <p className="text-gray-600 text-sm">
                        And many more healthcare providers across the country
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PartnerLogosSection
