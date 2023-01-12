import React from 'react'
import Image from 'next/image';
import { data } from '../data_files/servicesData'
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview' 

export default function ServicesCard() {

    const [ref, inView] = useInView();
    const animation = useAnimation();
    const animationImg = useAnimation();
    const animationImgRight = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring", duration: 2, bounce: 0.3
                }
            })
            animationImg.start({
                x: 0
            })
            animationImgRight.start({
                x: 0
            })
            
        }else{
            animation.start({
                opacity: 0,
                scale: 0.8
            })
            animationImg.start({
                x: "-100vw"
            })
            animationImgRight.start({
                x: " 100vw"
            })
            
        }
    }, [inView]);


    return (
        <div className='mt-20'>
            <div className="container px-4 py-16 mx-auto lg:px-4 lg:py-20 overflow-hidden" ref={ref}>
                {
                    data.map((item, index) => {
                        return (
                            index % 2 === 0 ?
                                <>
                                    <div key={index} className="grid gap-5 row-gap-10 md:grid-cols-2 " >
                                        <motion.div className='flex justify-end pt-12 service-card-bg' animate={animationImg}>
                                            <Image
                                                className="object-cover w-full h-56 shadow-lg rounded-2xl sm:h-96"
                                                src={item.image}
                                                alt="Feature"
                                                width="560"
                                                height="500"
                                            />
                                        </motion.div>

                                        <motion.div className="flex flex-col justify-center lg:pl-12 pl-0" animate={animation}>
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
                                        </motion.div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="container py-16 mx-auto lg:py-20">
                                        <div className="grid gap-5 row-gap-10 md:grid-cols-2">
                                            <motion.div className="flex flex-col justify-center lg:pl-0 pl-0 lg:order-first order-last" animate={animation}>
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
                                            </motion.div>
                                            <motion.div animate={animationImgRight} className='flex justify-end pt-12 service-card-bg lg:order-last order-first'>
                                                <Image
                                                    className="object-cover w-full h-56 shadow-lg rounded-2xl sm:h-96"
                                                    src={item.image}
                                                    alt="Feature"
                                                    width="560"
                                                    height="500"
                                                />
                                            </motion.div>
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
