"use client";
import { Bars3Icon, ChatBubbleLeftIcon, ChevronDownIcon, HomeIcon, PaperAirplaneIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link'
import React from 'react'
// import { Popover } from './ui/popover';
import { Popover, Transition } from '@headlessui/react'

const products = [
    {
        name: 'Book a Stay',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: HomeIcon,
    },
    {
        name: 'Book a Flight',
        description: 'Speak directly to your customers in a more meaningful way',
        href: '#',
        icon: PaperAirplaneIcon,
    },
    {
        name: 'Contact Our Support Team',
        description: 'Your customers\' data will be safe and secure.',
        href: '#',
        icon: ChatBubbleLeftIcon,
    }
];

const callToAction = [
    { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
    { name: "Contact Support", href: "#", icon: PhoneIcon }
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (
        <header className='bg-[#013894]'>
            <nav
                className='mx-auto max-w-7xl flex items-center justify-between lg:px-8 px-3 text-white'
                aria-label='Global'
            >
                <div>
                    <Link href="/" className='-m-1.5 p-1.5'>
                        <span className='sr-only'>Booking.com</span>
                        <div className='text-xl'>Booking.com</div>
                    </Link>
                </div>
                <div className='flex lg:hidden space-x-10'>
                    <button className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
                        type='button'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            <span>Stays</span>
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-white"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 z-10 top-full bg-white">
                                <div className='p-4 '>
                                    {
                                        products.map((item, index) => (
                                            <div key={index} className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                                                <div className='flex h-11 w-11 flex-none itens-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200'>
                                                    <item.icon className='h-6 w-6 text-[#013894] group-hover:text-blue-600' aria-hidden="true" />
                                                </div>

                                                <div className="flex-auto">
                                                    <a href={item.href}
                                                        className='block font-semibold text-[#013894]'
                                                    >
                                                        {item.name}
                                                        <span className='absolute inset-0' />
                                                    </a>
                                                    <p className='mt-1 text-[#013894]'>
                                                        {item.description}
                                                    </p>
                                                </div>


                                            </div>
                                        ))

                                    }
                                    <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                                        {callToAction.map((item, index) => (
                                            <a href={item.href} key={index} className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013b94] hover:bg-gray-100'>
                                                <item.icon className="h-5 w-5 flex-none text-[#013B94]" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover >

                    <Link href='#' className='text-sm font-semibold leading-6 text-white'>
                        Flights
                    </Link>
                    <Link href='#' className='text-sm font-semibold leading-6 text-white'>
                        Car Rentals
                    </Link>
                    <Link href='#' className='text-sm font-semibold leading-6 text-white'>
                        Attractions
                    </Link>
                    <Link href='#' className='text-sm font-semibold leading-6 text-white'>
                        Flight + Hotel
                    </Link>
                </Popover.Group >
                <div
                    // className='hidden lg:flex lg:flex-1 lg:justify-end'
                >
                    <Link
                        href='#'
                        className='text-sm font-semibold leading-6 text-white'
                    >
                        Log in <span aria-hidden='true'>&rarr;</span>
                    </Link>
                </div>
            </nav >
        </header >
    )
}

export default Header