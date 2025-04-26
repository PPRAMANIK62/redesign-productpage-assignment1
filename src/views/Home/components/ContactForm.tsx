import { Button, Notification, toast } from '@/components/ui'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { BiPhone, BiSend, BiUser } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const ContactForm = () => {
    const [formState, setFormState] = useState<{
        fullname: string
        email: string
        subject: string
        message: string
    }>({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focused, setFocused] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const contactRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        const currentRef = contactRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            // await apiContactUs(formState)
            // Simulate API call with timeout
            setTimeout(() => {
                setIsSubmitting(false)
                toast.push(
                    <Notification title={'Success'} type={'success'}>
                        Your message has been sent successfully. We&apos;ll get
                        back to you soon!
                    </Notification>,
                )
                setFormState({
                    fullname: '',
                    email: '',
                    subject: '',
                    message: '',
                })
            }, 1000)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setIsSubmitting(false)
            toast.push(
                <Notification title={'Error'} type={'danger'}>
                    Something went wrong. Please try again later.
                </Notification>,
            )
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div
            ref={contactRef}
            className="bg-white py-20 px-4 sm:px-6 lg:px-8"
            id="contact"
        >
            <div className="max-w-7xl mx-auto">
                <div
                    className={`text-center mb-16 transition-all duration-1000 transform ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Have questions about our platform? Our team is ready to
                        help you transform your healthcare practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Contact Info */}
                    <div
                        className={`space-y-8 transition-all duration-1000 delay-300 transform ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-8 rounded-2xl shadow-lg border border-primary/10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {/* Contact Details */}
                                <div className="flex items-center space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <BiPhone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:+919811396858"
                                            className="text-gray-900 hover:text-primary transition-colors font-medium"
                                        >
                                            +91 9811396858
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="bg-primary/10 p-3 rounded-lg">
                                        <CgMail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-sm">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:hello@gogetwell.ai"
                                            className="text-gray-900 hover:text-primary transition-colors font-medium"
                                        >
                                            hello@gogetwell.ai
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Connect With Us
                                </h3>
                                <div className="flex space-x-4">
                                    <Link
                                        to="https://x.com/gogetwellai"
                                        target="_blank"
                                        className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <BsTwitter className="w-6 h-6 text-primary" />
                                    </Link>
                                    <Link
                                        to="https://www.linkedin.com/company/gogetwellai/"
                                        target="_blank"
                                        className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                    >
                                        <BsLinkedin className="w-6 h-6 text-primary" />
                                    </Link>
                                </div>
                            </div>

                            {/* Map or Image */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Our Office
                                </h3>
                                <div className="bg-gray-200 rounded-lg h-48 overflow-hidden">
                                    {/* Replace with actual map or office image */}
                                    <div className="w-full h-full bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center">
                                        <p className="text-gray-600">
                                            Bengaluru, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div
                        className={`transition-all duration-1000 delay-500 transform ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h3>

                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="relative">
                                    <div
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                            focused === 'fullname' ||
                                            formState.fullname
                                                ? 'text-primary'
                                                : 'text-gray-400'
                                        }`}
                                    >
                                        <BiUser className="w-5 h-5" />
                                    </div>
                                    <input
                                        required
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        value={formState.fullname}
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        onChange={handleChange}
                                        onFocus={() => setFocused('fullname')}
                                        onBlur={() => setFocused('')}
                                    />
                                </div>

                                <div className="relative">
                                    <div
                                        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                            focused === 'email' ||
                                            formState.email
                                                ? 'text-primary'
                                                : 'text-gray-400'
                                        }`}
                                    >
                                        <CgMail className="w-5 h-5" />
                                    </div>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formState.email}
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        onChange={handleChange}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        required
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formState.subject}
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        onChange={handleChange}
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused('')}
                                    />
                                </div>

                                <div className="relative">
                                    <textarea
                                        required
                                        name="message"
                                        placeholder="Your Message"
                                        value={formState.message}
                                        rows={5}
                                        className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                        onChange={handleChange}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused('')}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        required
                                        type="checkbox"
                                        id="privacy"
                                        className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="privacy"
                                        className="text-sm text-gray-600"
                                    >
                                        I agree to the{' '}
                                        <a
                                            href="#"
                                            className="text-primary hover:underline"
                                        >
                                            Privacy Policy
                                        </a>{' '}
                                        and{' '}
                                        <a
                                            href="#"
                                            className="text-primary hover:underline"
                                        >
                                            Terms of Service
                                        </a>
                                    </label>
                                </div>

                                <Button
                                    loading={isSubmitting}
                                    type="submit"
                                    variant="solid"
                                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary/30"
                                >
                                    <span>Send Message</span>
                                    <BiSend className="w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
