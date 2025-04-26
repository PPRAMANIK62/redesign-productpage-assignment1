import { ReactNode } from 'react'
// import ArrowSvg from "@/assets/svg/ArrowSvg";
// import GlobeSvg from "@/assets/svg/GlobeSvg";
// import HandSvg from "@/assets/svg/handSvg";
// import HelplineSvg from "@/assets/svg/HelplineSvg";
// import RevenueSvg from "@/assets/svg/RevenueSvg";
// import SupportSvg from "@/assets/svg/SupportSvg";

import {
    BiChat,
    BiCloudUpload,
    BiCog,
    BiDesktop,
    BiLineChart,
    BiMobile,
    BiShield,
    BiWorld,
} from 'react-icons/bi'

// export const heroNewData: HeroData[] = [
//   {
//     icon: <HelplineSvg width={60} height={60} />,
//     title: '24/7 Support for patient',
//   },
//   {
//     icon: <SupportSvg width={60} height={60} />,
//     title: 'Lead Generation Support',
//   },
//   {
//     icon: <RevenueSvg width={60} height={60} />,
//     title: 'Boost Revenue',
//   },
//   {
//     icon: <ArrowSvg width={60} height={60} />,
//     title: 'Patient Conversation',
//   },
//   {
//     icon: <HandSvg width={60} height={60} />,
//     title: 'Build Digital Business',
//   },
//   {
//     icon: <GlobeSvg width={60} height={60} />,
//     title: 'Online Website With AI Agent',
//   },
// ]

interface HeroData {
    icon: ReactNode
    title: string
}

export const heroNewData: HeroData[] = [
    {
        title: 'AI Website Builder',
        icon: <BiDesktop className="w-8 h-8" />,
    },
    {
        title: 'Patient Lead Management',
        icon: <BiLineChart className="w-8 h-8" />,
    },
    {
        title: '24/7 AI Chatbot',
        icon: <BiChat className="w-8 h-8" />,
    },
    {
        title: 'Mobile Responsive',
        icon: <BiMobile className="w-8 h-8" />,
    },
    {
        title: 'Secure Patient Data',
        icon: <BiShield className="w-8 h-8" />,
    },
    {
        title: 'Global Reach',
        icon: <BiWorld className="w-8 h-8" />,
    },
    {
        title: 'Cloud Storage',
        icon: <BiCloudUpload className="w-8 h-8" />,
    },
    {
        title: 'Easy Integration',
        icon: <BiCog className="w-8 h-8" />,
    },
]
