import React from 'react'
import Image from 'next/image';
import webDev from '../public/images/w-d.webp'
import { data } from '../data_files/servicesData'


export default function ServicesCard() {

    return (
        <div className='mt-20'>
            <div className="container px-10 py-16 mx-auto lg:px-0 lg:py-20">
                {
                    data.map((item, index) => {
                        return (
                            index % 2 === 0 ?
                                <>
                                    <div key={index} className="grid gap-5 row-gap-10 lg:grid-cols-2">
                                        <div className='flex justify-end pt-12 service-card-bg'>
                                            <Image
                                                className="object-cover w-full h-56 shadow-lg rounded-2xl sm:h-96"
                                                src={item.image}
                                                alt="Feature"
                                                width="560"
                                                height="500"
                                            />
                                        </div>

                                        <div className="flex flex-col justify-center pl-12">
                                            <div className="max-w-xl mb-6">
                                                <h2 className="main-title">{item.title}</h2>
                                                <p className="mt-4 text-base text-gray-700 md:text-lg">{item.description}</p>
                                            </div>
                                            <p className="h3">
                                                Features
                                            </p>
                                            <div className="grid mt-4 space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                                                <ul className="space-y-3">
                                                    <li className="flex items-center">
                                                        <span className="mr-1">
                                                            <svg
                                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                stroke="currentColor"
                                                                viewBox="0 0 52 52"
                                                            >
                                                                <polygon
                                                                    strokeWidth="4"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="none"
                                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                ></polygon>
                                                            </svg>
                                                        </span>
                                                        <p className='p-1 pt-0 text-base main-text'>{item.feature.one}</p>

                                                    </li>
                                                    <li className="flex items-center">
                                                        <span className="mr-1">
                                                            <svg
                                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                stroke="currentColor"
                                                                viewBox="0 0 52 52"
                                                            >
                                                                <polygon
                                                                    strokeWidth="4"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="none"
                                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                ></polygon>
                                                            </svg>
                                                        </span>
                                                        <p className='p-1 pt-0 text-base main-text'>{item.feature.two}</p>
                                                    </li>
                                                </ul>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center">
                                                        <span className="mr-1">
                                                            <svg
                                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                stroke="currentColor"
                                                                viewBox="0 0 52 52"
                                                            >
                                                                <polygon
                                                                    strokeWidth="4"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="none"
                                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                ></polygon>
                                                            </svg>
                                                        </span>
                                                        <p className='p-1 pt-0 text-base main-text'>{item.feature.Three}</p>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <span className="mr-1">
                                                            <svg
                                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                stroke="currentColor"
                                                                viewBox="0 0 52 52"
                                                            >
                                                                <polygon
                                                                    strokeWidth="4"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="none"
                                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                ></polygon>
                                                            </svg>
                                                        </span>
                                                        <p className='p-1 pt-0 text-base main-text'>{item.feature.Four}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="container px-10 py-16 mx-auto lg:px-0 lg:py-20">
                                        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                                            <div className="flex flex-col justify-center">
                                                <div className="max-w-xl mb-6">
                                                    <h2 className="main-title">{item.title}</h2>
                                                    <p className="mt-4 text-base text-gray-700 md:text-lg">{item.description}</p>
                                                </div>
                                                <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                                                    Features
                                                </p>
                                                <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                                                    <ul className="space-y-3">
                                                        <li className="flex items-center">
                                                            <span className="mr-1">
                                                                <svg
                                                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 52 52"
                                                                >
                                                                    <polygon
                                                                        strokeWidth="4"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        fill="none"
                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                    ></polygon>
                                                                </svg>
                                                            </span>
                                                            <p className='p-1 pt-0 text-base main-text'>{item.feature.one}</p>

                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="mr-1">
                                                                <svg
                                                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 52 52"
                                                                >
                                                                    <polygon
                                                                        strokeWidth="4"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        fill="none"
                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                    ></polygon>
                                                                </svg>
                                                            </span>
                                                            <p className='p-1 pt-0 text-base main-text'>{item.feature.two}</p>
                                                        </li>
                                                    </ul>
                                                    <ul className="space-y-3">
                                                        <li className="flex items-center">
                                                            <span className="mr-1">
                                                                <svg
                                                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 52 52"
                                                                >
                                                                    <polygon
                                                                        strokeWidth="4"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        fill="none"
                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                    ></polygon>
                                                                </svg>
                                                            </span>
                                                            <p className='p-1 pt-0 text-base main-text'>{item.feature.Three}</p>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <span className="mr-1">
                                                                <svg
                                                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 52 52"
                                                                >
                                                                    <polygon
                                                                        strokeWidth="4"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        fill="none"
                                                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                                    ></polygon>
                                                                </svg>
                                                            </span>
                                                            <p className='p-1 pt-0 text-base main-text'>{item.feature.Four}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='flex justify-end pt-12 service-card-bg'>
                                                <Image
                                                    className="object-cover w-full h-56 shadow-lg rounded-2xl sm:h-96"
                                                    src={item.image}
                                                    alt="Feature"
                                                    width="560"
                                                    height="500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                        );
                    })
                }
            </div>
        </div>
    )
}
