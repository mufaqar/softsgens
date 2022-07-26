import React from 'react'
import Image from 'next/image'
import brand1 from '../public/images/brands/brands (1).png'
import brand2 from '../public/images/brands/brands (2).png'
import brand3 from '../public/images/brands/brands (3).png'
import brand6 from '../public/images/brands/brands (6).png'
import brand5 from '../public/images/brands/brands (5).png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview'
import { useEffect } from 'react';

export const Brands = () => {

  const [ref, inView] = useInView();
  const animationOpacity = useAnimation();

  useEffect(() => {
      if(inView){
          animationOpacity.start({
              opacity: 1,
              scale: 1,
              transition: {
                  type: "spring", duration: 2, bounce: 0.3
              }
          })
      }else{
          
          animationOpacity.start({
              opacity: 0,
              scale: 0.8
          })
      }
  }, [inView]);
    
  return (
    <div>
        <h2 className="mt-2 text-center text-gray-700 main-title">
            Brands
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg leading-7 tracking-wide text-center text-gray-400">
            Uniquely promote adaptive quality vectors rather than stand-alone
            e-markets. pontificate alternative architectures whereas iterate.
        </p>
        <div ref={ref} className='flex justify-around gap-4 lg:px-8 _brand'>
          <motion.figure animate={animationOpacity} className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand1} alt="Brands Picture"></Image></motion.figure>
          <motion.figure animate={animationOpacity} className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand2} alt="Brands Picture"></Image></motion.figure>
          <motion.figure animate={animationOpacity} className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand3} alt="Brands Picture"></Image></motion.figure>
          <motion.figure animate={animationOpacity} className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand5} alt="Brands Picture"></Image></motion.figure>
          <motion.figure animate={animationOpacity} className='w-52 h-52 grayscale hover:grayscale-0'><Image src={brand6} alt="Brands Picture"></Image></motion.figure>
        </div>
    </div>
  )
}
